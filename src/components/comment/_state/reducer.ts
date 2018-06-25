import { PlainAction } from 'redux-typed-actions';
import { CommentLoad } from './actions';

export const InitialState: CommentListState = [];

const updateItemById = (list: CommentListState, itemToUpdate: CommentState) => {
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
  state: CommentListState = InitialState,
  action: PlainAction,
): CommentListState {
  if (CommentLoad.is(action)) {
    return updateItemById(state, {
      error: null,
      id: action.payload.id,
      item: null,
      loading: true,
    });
  } else if (CommentLoad.success.is(action)) {
    return updateItemById(state, {
      error: null,
      id: action.payload.id,
      item: action.payload,
      loading: false,
    });
  } else if (CommentLoad.failure.is(action)) {
    return updateItemById(state, {
      error: action.payload.message,
      id: action.payload.id,
      item: null,
      loading: false,
    });
  }
  return state;
}
