import { createReducer } from 'redux-act';
import { AuthState } from '../types';
import * as actions from '../actions/auth';
import { fetchFailedHandler, fetchRequestHandler } from '../utils/reduxHelpers';

const initialState: AuthState = {
  user: null,
  isFetching: false,
  error: null,
  token: null,
};

const reducer = createReducer<AuthState>({}, initialState);

reducer.on(actions.logoutAction, state => ({
  ...state,
  user: null,
  token: null,
}));

reducer.on(actions.requestSecretCodeRequest, fetchRequestHandler);

reducer.on(actions.requestSecretCodeSucceeded, state => ({
  ...state,
  isFetching: false,
}));

reducer.on(actions.requestSecretCodeFailed, fetchFailedHandler);

export default reducer;
