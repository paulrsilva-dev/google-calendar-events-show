import { combineReducers } from 'redux';

import authReducer from './auth';
import getEventsReducer from './getEvents';

export default combineReducers({
  auth: authReducer,
  events: getEventsReducer
});
