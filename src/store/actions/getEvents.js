import { GET_EVENTS_REQUEST } from './types';

export const getEvents = numberOfDays => ({
  type: GET_EVENTS_REQUEST,
  numberOfDays
});
