import { StoryLoad } from './actions';
import { InitialState, reducer } from './reducer';

describe('Testing StoryList reducer', () => {
  const story1 = {
    id: 11,
    title: 'original',
  } as Story;
  const state: StoryListState = { ...InitialState, list: [story1] };

  it('updates on success action', () => {
    const story2: Partial<Story> = {
      id: 12,
    };
    const newState = reducer(
      state,
      StoryLoad.success.strictGet(story2 as Story),
    );

    expect(newState).not.toEqual(state);
    expect(newState.list.length).toBe(2);
    expect(newState.list[1].id).toBe(12);
  });

  it('updates on success action', () => {
    const newState = reducer(
      state,
      StoryLoad.success.strictGet({ ...story1, title: 'changed' } as Story),
    );

    expect(newState).not.toEqual(state);
    expect(newState.list[0].id).toBe(11);
    expect(newState.list[0].title).toBe('changed');
  });
});
