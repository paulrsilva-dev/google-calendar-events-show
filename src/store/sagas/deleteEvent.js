import { put, takeLatest } from 'redux-saga/effects';

import {
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_ERROR,
  GET_EVENTS_REQUEST,
} from '../actions/types';
import { gapi } from '../../config';

function* deleteEvent(action) {
  const { eventId, numberOfDays } = action;
  try {
    yield gapi.client.calendar.events.delete({
      calendarId: 'primary',
      eventId: eventId,
    });

    yield put({ type: DELETE_EVENT_SUCCESS });
    yield put({ type: GET_EVENTS_REQUEST, numberOfDays });
  } catch (e) {
    yield put({ type: DELETE_EVENT_ERROR });
  }
}

export function* onDeleteEvent() {
  yield takeLatest(DELETE_EVENT_REQUEST, deleteEvent);
}
