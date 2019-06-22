import { createReducer } from 'redux-act';
import { NotificationsState } from '../types';

const initialState: NotificationsState = {
  isFetching: false,
  error: null,
  items: [],
};

const reducer = createReducer<NotificationsState>({}, initialState);

export default reducer;
