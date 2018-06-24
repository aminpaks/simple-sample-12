import { StoryLoad } from './actions';
import { reducer } from './reducer';

describe('Testing StoryList reducer', () => {
  const story1 = {
    id: 11,
    title: 'original',
  } as IStory;
  const story1State: StoryState = {
    error: null,
    id: 11,
    item: story1,
    loading: false,
  };
  const state: StoryListState = [story1State];

  it('updates on success action', () => {
    const story2 = {
      id: 12,
    } as IStory;
    const newState = reducer(state, StoryLoad.success.strictGet(story2));

    expect(newState).not.toEqual(state);
    expect(newState[1].item).toEqual(story2);
    expect(newState[1].item!.id).toBe(12);
    expect(newState[1].error).toBeNull();
  });

  it('updates on success action', () => {
    const newState = reducer(
      state,
      StoryLoad.success.strictGet({ ...story1, title: 'changed' } as IStory),
    );

    expect(newState).not.toEqual(state);
    expect(newState[0].item!.id).toBe(11);
    expect(newState[0].item!.title).toBe('changed');
  });
});
