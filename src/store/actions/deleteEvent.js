import { DELETE_EVENT_REQUEST } from './types';

export const deleteEvent = (eventId, numberOfDays) => ({
  type: DELETE_EVENT_REQUEST,
  eventId,
  numberOfDays,
});
