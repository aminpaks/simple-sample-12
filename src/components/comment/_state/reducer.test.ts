import { CommentLoad } from './actions';
import { reducer } from './reducer';

describe('Testing UserList reducer', () => {
  const comment1 = {
    id: 11,
    text: 'comment 1 content',
  } as IComment;
  const comment1State: CommentState = {
    error: null,
    id: 11,
    item: comment1,
    loading: false,
  };
  const state: CommentListState = [comment1State];

  it('updates on success action', () => {
    const comment2 = {
      id: 12,
    } as IComment;
    const newState = reducer(state, CommentLoad.success.strictGet(comment2));

    expect(newState).not.toEqual(state);
    expect(newState[1].item).toEqual(comment2);
    expect(newState[1].item!.id).toBe(comment2.id);
    expect(newState[1].error).toBeNull();
  });

  it('updates on success action', () => {
    const newState = reducer(
      state,
      CommentLoad.success.strictGet({
        ...comment1,
        text: 'changed',
      } as IComment),
    );

    expect(newState).not.toEqual(state);
    expect(newState[0].item!.id).toBe(comment1.id);
    expect(newState[0].item!.text).toBe('changed');
  });
});
