import { all, call } from 'redux-saga/effects';

import {
  onLoadClient,
  onSignIn,
  onSignOut
} from './auth';

export default function* rootSaga() {
  yield all([
    call(onLoadClient),
    call(onSignIn),
    call(onSignOut)
  ]);
}
