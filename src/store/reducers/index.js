import { combineReducers } from 'redux';

import addEventReducer from './addEvent';
import authReducer from './auth';
import getEventsReducer from './getEvents';

export default combineReducers({
  auth: authReducer,
  events: getEventsReducer,
  newEvent: addEventReducer,
});
