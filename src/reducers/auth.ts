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

reducer.on(actions.setTokenAction, (state, token) => ({ ...state, token }));

reducer.on(actions.logoutAction, state => ({
  ...state,
  user: null,
  token: null,
}));

reducer.on(actions.loginSucceeded, (state, { user, token }) => ({
  ...state,
  isFetching: false,
  user,
  token,
}));

reducer.on(actions.fetchUserSucceeded, (state, user) => ({
  ...state,
  isFetching: false,
  user,
}));

reducer.on(actions.loginRequest, fetchRequestHandler);

reducer.on(actions.loginFailed, fetchFailedHandler);

export default reducer;
