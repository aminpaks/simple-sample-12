import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { PlainAction } from 'redux-typed-actions';
import { rootEpic } from './epic';
import { rootReducer } from './reducer';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

function configureStore(initialState?: RootState) {
  // Epic middleware
  const epicMiddleware = createEpicMiddleware<
    PlainAction,
    PlainAction,
    RootState
  >();
  const allMiddleware: any[] = [epicMiddleware];
  // Compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...allMiddleware));

  const initialStore = createStore(rootReducer, initialState as any, enhancer);

  epicMiddleware.run(rootEpic);

  return initialStore;
}

export const store = configureStore();
