import {
  GET_EVENTS_REQUEST,
  GET_EVENTS_SUCCESS,
  GET_EVENTS_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_IN_SUCCESS,
  DELETE_EVENT_REQUEST,
  DELETE_EVENT_SUCCESS,
  DELETE_EVENT_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  events: [],
  numberOfDays: 7,
  error: null
};

const getEventsReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };

  switch (action.type){
    case DELETE_EVENT_REQUEST:
    case GET_EVENTS_REQUEST:
      return {
        ...newState,
        loading: true
      }
    case GET_EVENTS_SUCCESS:
      return {
        ...newState,
        events: action.payload.events,
        numberOfDays: action.payload.numberOfDays,
        error: null,
        loading: false
      }
    case GET_EVENTS_ERROR:
      return {
        ...newState,
        error: action.error,
        loading: false
      }
    case DELETE_EVENT_SUCCESS:
    case DELETE_EVENT_ERROR:
      return {
        ...newState,
        loading: false
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
