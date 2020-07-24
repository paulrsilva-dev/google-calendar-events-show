import { combineReducers } from 'redux';

import authReducer from './auth';
import getEventsReducer from './getEvents';
import addEventReducer from './addEvent';

export default combineReducers({
  auth: authReducer,
  events: getEventsReducer,
  newEvent: addEventReducer,
});
