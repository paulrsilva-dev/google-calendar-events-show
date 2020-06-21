import { all, call } from 'redux-saga/effects';

import {
  onLoadClient,
  onSignIn,
  onSignOut
} from './auth';

import { onGetEvents } from './getEvents';
import { onDeleteEvent } from './deleteEvent';
import { onAddEvent } from './addEvent';

export default function* rootSaga() {
  yield all([
    call(onLoadClient),
    call(onSignIn),
    call(onSignOut),
    call(onGetEvents),
    call(onDeleteEvent),
    call(onAddEvent)
  ]);
}
