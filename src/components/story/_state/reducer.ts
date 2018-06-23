import { PlainAction } from 'redux-typed-actions';
import { StoryLoad } from './actions';

export const InitialState: StoryListState = {
  error: null,
  list: [],
  loading: false,
};

const updateItemById = (list: Story[], itemToUpdate: Story) => {
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
    return {
      ...state,
      error: null,
      loading: true,
    };
  } else if (StoryLoad.success.is(action)) {
    return {
      ...state,
      list: updateItemById(state.list, action.payload),
      loading: false,
    };
  } else if (StoryLoad.failure.is(action)) {
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
