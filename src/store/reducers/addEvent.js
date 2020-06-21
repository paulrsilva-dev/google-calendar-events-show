import {
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
    case ADD_EVENT_SUCCESS:
      return {
        ...newState,
        newEvent: action.event,
        error: null
      }
    case ADD_EVENT_ERROR:
      return {
        ...newState,
        newEvent: action.payload.event,
        error: action.payload.error
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
