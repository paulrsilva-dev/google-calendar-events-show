import {
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_IN_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  events: [],
  numberOfDays: 7,
  error: null
};

const getEventsReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };

  switch (action.type){
    case GET_EVENTS_SUCCESS:
      return {
        ...newState,
        events: action.payload.events,
        numberOfDays: action.payload.numberOfDays,
        error: null
      }
    case GET_EVENTS_ERROR:
      return {
        ...newState,
        error: action.error
      }
    case SIGN_OUT_SUCCESS:
    case SIGN_IN_SUCCESS:
      return {
        ...newState,
        events: [],
        numberOfDays: 7,
        error: null
      }
    default:
      return newState;
  }
};

export default getEventsReducer;
