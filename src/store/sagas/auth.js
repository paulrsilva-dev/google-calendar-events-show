/* eslint-disable no-unused-vars */
import { put, takeLatest } from 'redux-saga/effects';

import {
  LOAD_CLIENT_REQUEST,
  LOAD_CLIENT_SUCCESS,
  LOAD_CLIENT_ERROR,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR,
} from '../actions/types';
import { gapi, API_KEY, CLIENT_ID, DISCOVERY_DOCS, SCOPES } from '../../config';
import history from '../../history';

function loadClient() {
  gapi.load('client:auth2', initClient);
}

function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES,
  });
  gapi.client.load('calendar', 'v3', () => console.log('calendar loaded'));
}

function* signIn() {
  try {
    yield gapi.auth2.getAuthInstance().signIn();
    const isSignedIn = yield gapi.auth2.getAuthInstance().isSignedIn.get();

    yield put({ type: SIGN_IN_SUCCESS, isSignedIn });
    history.push('/calendar');
  } catch (e) {
    const isSignedIn = yield gapi.auth2.getAuthInstance().isSignedIn.get();
    const payload = {
      error: e.error,
      isSignedIn,
    };

    yield put({ type: SIGN_IN_ERROR, payload });
  }
}

function* signOut() {
  try {
    yield gapi.auth2.getAuthInstance().signOut();
    const isSignedIn = yield gapi.auth2.getAuthInstance().isSignedIn.get();

    yield put({ type: SIGN_OUT_SUCCESS, isSignedIn });
    history.push('/');
  } catch (e) {
    const isSignedIn = yield gapi.auth2.getAuthInstance().isSignedIn.get();
    const payload = {
      error: e.error,
      isSignedIn,
    };

    yield put({ type: SIGN_OUT_ERROR, payload });
  }
}

export function* onLoadClient() {
  yield takeLatest(LOAD_CLIENT_REQUEST, loadClient);
}

export function* onSignIn() {
  yield takeLatest(SIGN_IN_REQUEST, signIn);
}

export function* onSignOut() {
  yield takeLatest(SIGN_OUT_REQUEST, signOut);
}
