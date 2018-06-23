import { TopStoryListLoad } from './actions';
import { InitialState, reducer } from './reducer';

describe('Testing TopStoryList reducer', () => {
  const story1 = 11;
  const state: TopStoryListState = { ...InitialState, list: [story1] };

  it('updates on success action', () => {
    const story2 = 12;
    const newState = reducer(
      state,
      TopStoryListLoad.success.strictGet([story1, story2]),
    );

    expect(newState).not.toEqual(state);
    expect(newState.list.length).toBe(2);
    expect(newState.list[1]).toBe(story2);
  });
});
