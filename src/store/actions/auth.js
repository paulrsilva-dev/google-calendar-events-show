import {
  LOAD_CLIENT_REQUEST,
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST
} from './types';

export const loadClient = () => ({
  type: LOAD_CLIENT_REQUEST
})

export const signIn = () => ({
  type: SIGN_IN_REQUEST
});

export const signOut = () => ({
  type: SIGN_OUT_REQUEST
});
