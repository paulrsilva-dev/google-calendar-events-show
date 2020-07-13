import {
  ADD_EVENT_REQUEST,
  ADD_EVENT_SUCCESS,
  ADD_EVENT_ERROR,
  SIGN_OUT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  newEvent: {},
  error: null
};

const addEventReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };

  switch (action.type){
    case ADD_EVENT_REQUEST:
      return {
        ...newState,
        loading: true
      }
    case ADD_EVENT_SUCCESS:
      return {
        ...newState,
        newEvent: action.event,
        error: null,
        loading: false
      }
    case ADD_EVENT_ERROR:
      return {
        ...newState,
        newEvent: action.payload.event,
        error: action.payload.error,
        loading: false
      }
    case SIGN_OUT_SUCCESS:
      return {
        ...newState,
        newEvent: {},
        error: null
      }
    default:
      return newState;
  }
}

export default addEventReducer;
