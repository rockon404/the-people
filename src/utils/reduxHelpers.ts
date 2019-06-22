import { createAction, EmptyActionCreator, SimpleActionCreator } from 'redux-act';

export const fetchRequestHandler = <T>(state: T): T => ({
  ...state,
  error: null,
  isFetching: true,
});

export const fetchFailedHandler = <T>(state: T, error: any): T => ({
  ...state,
  error,
  isFetching: false,
});

export const createRequestActions = <T>(key: string) => {
  const requestAction = createAction(key + '_REQUEST');
  const successAction = createAction<T>(key + '_SUCCEEDED');
  const failAction = createAction<any>(key + '_FAILED');

  return [requestAction, successAction, failAction] as [
    EmptyActionCreator,
    SimpleActionCreator<T>,
    SimpleActionCreator<any>
  ];
};
