import {
  SIGN_IN_SUCCESS,
  SIGN_IN_ERROR,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  isSignedIn: false,
  error: null
}

const authReducer = (state = INITIAL_STATE, action) => {
  const newState = { ...state };
  console.log('action', action);

  switch (action.type){
    case SIGN_IN_SUCCESS:
    case SIGN_OUT_SUCCESS:
      return {
        ...newState,
        isSignedIn: action.isSignedIn,
        error: null
      }
    case SIGN_IN_ERROR:
    case SIGN_OUT_ERROR:
      return {
        ...newState,
        isSignedIn: action.payload.isSignedIn,
        error: action.payload.error
      }
    default:
      return newState;
  }
}

export default authReducer;