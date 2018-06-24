import { PlainAction } from 'redux-typed-actions';
import { StoryLoad } from './actions';

export const InitialState: StoryListState = [];

const updateItemById = (list: StoryListState, itemToUpdate: StoryState) => {
  if (list.find(item => item.id === itemToUpdate.id)) {
    return list.reduce(
      (result, item) => [
        ...result,
        item.id === itemToUpdate.id ? itemToUpdate : item,
      ],
      [],
    );
  }
  return [...list, itemToUpdate];
};

export function reducer(
  state: StoryListState = InitialState,
  action: PlainAction,
): StoryListState {
  if (StoryLoad.is(action)) {
    return updateItemById(state, {
      error: null,
      id: action.payload.id,
      item: null,
      loading: true,
    });
  } else if (StoryLoad.success.is(action)) {
    return updateItemById(state, {
      error: null,
      id: action.payload.id,
      item: action.payload,
      loading: false,
    });
  } else if (StoryLoad.failure.is(action)) {
    return updateItemById(state, {
      error: action.payload.message,
      id: action.payload.id,
      item: null,
      loading: false,
    });
  }
  return state;
}
