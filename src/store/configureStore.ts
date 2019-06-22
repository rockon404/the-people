import { AnyAction, applyMiddleware, compose, createStore } from 'redux';
import { default as thunk, ThunkAction, ThunkMiddleware } from 'redux-thunk';
import rootReducer from '../reducers/index';
import { StoreState } from '../types';

export default function () {
  const thunkMiddleware = thunk as ThunkMiddleware<StoreState, AnyAction, null>;

  let enhancer;

  if (process.env.NODE_ENV === 'development') {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose;
    enhancer = composeEnhancers(applyMiddleware(thunkMiddleware));
  } else {
    enhancer = applyMiddleware(thunkMiddleware);
  }

  const store = createStore(rootReducer, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers/index').default));
  }

  return store;
}
