import { PlainAction } from 'redux-typed-actions';
import { TopStoryListLoad } from './actions';

export const InitialState: TopStoryListState = {
  error: null,
  list: [],
  loading: false,
};

export function reducer(
  state: TopStoryListState = InitialState,
  action: PlainAction,
): TopStoryListState {
  if (TopStoryListLoad.is(action)) {
    return {
      ...state,
      error: null,
      loading: true,
    };
  } else if (TopStoryListLoad.success.is(action)) {
    return {
      ...state,
      list: action.payload,
      loading: false,
    };
  } else if (TopStoryListLoad.failure.is(action)) {
    return {
      ...state,
      error: {
        action: action.type,
        message: action.payload,
      },
      loading: false,
    };
  }
  return state;
}
