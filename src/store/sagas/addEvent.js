import { put, takeLatest } from 'redux-saga/effects';

import {
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
} from '../actions/types';
import { gapi } from '../../config';
import history from '../../history';

function* addEvent(action) {
  const { event } = action;
  try {
    yield gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });

    yield put({ type: ADD_EVENT_SUCCESS, event });
    history.push('/calendar');
  } catch (e) {
    console.log('Add event saga error', e);
    const payload = {
      event,
      error: e.result.error.message,
    };
    yield put({ type: ADD_EVENT_ERROR, payload });
  }
}

export function* onAddEvent() {
  yield takeLatest(ADD_EVENT_REQUEST, addEvent);
}
