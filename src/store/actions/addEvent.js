import { ADD_EVENT_REQUEST } from './types';

export const addEvent = event => ({
  type: ADD_EVENT_REQUEST,
  event,
});
