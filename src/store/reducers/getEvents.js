import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  SIGN_OUT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  events: [],
  error: null
};

const getEventsReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };

  switch (action.type){
    case GET_EVENTS_SUCCESS:
      return {
        ...newState,
        events: action.events,
        error: null
      }
    case GET_EVENTS_ERROR:
      return {
        ...newState,
        error: action.error
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...newState,
        events: [],
        error: null
      }
    default:
      return newState;
  }
};

export default getEventsReducer;
