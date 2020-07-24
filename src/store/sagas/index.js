import { all, call } from 'redux-saga/effects';

import { onAddEvent } from './addEvent';
import { onLoadClient, onSignIn, onSignOut } from './auth';
import { onDeleteEvent } from './deleteEvent';
import { onGetEvents } from './getEvents';

export default function* rootSaga() {
  yield all([
    call(onLoadClient),
    call(onSignIn),
    call(onSignOut),
    call(onGetEvents),
    call(onDeleteEvent),
    call(onAddEvent),
  ]);
}
