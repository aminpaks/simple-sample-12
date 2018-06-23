import { applyMiddleware, compose, createStore } from 'redux';
import { rootReducer } from './reducer';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

function configureStore(initialState?: RootState) {
  // Other middleware go here?
  const allMiddleware: any[] = [];
  // Compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...allMiddleware));

  const initialStore = createStore(rootReducer, initialState as any, enhancer);

  return initialStore;
}

export const store = configureStore();
