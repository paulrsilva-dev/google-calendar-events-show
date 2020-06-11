import { all, call } from 'redux-saga/effects';

import {
  onLoadClient,
  onSignIn,
  onSignOut
} from './auth';

import { onGetEvents } from './getEvents';

export default function* rootSaga() {
  yield all([
    call(onLoadClient),
    call(onSignIn),
    call(onSignOut),
    call(onGetEvents)
  ]);
}
