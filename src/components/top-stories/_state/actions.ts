import { defineScenarioAction } from 'redux-typed-actions';

export const TopStoryListLoad = defineScenarioAction<never, number[]>(
  'Top Stories Load',
);
