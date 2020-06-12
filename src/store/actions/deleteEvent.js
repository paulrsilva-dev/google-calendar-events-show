import { DELETE_EVENT_REQUEST } from './types';

export const deleteEvent = eventId => ({
  type: DELETE_EVENT_REQUEST,
  eventId
});
