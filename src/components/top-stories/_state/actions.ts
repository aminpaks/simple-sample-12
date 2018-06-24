import { defineScenarioAction } from 'redux-typed-actions';

export const TopStoryListLoad = defineScenarioAction<
  { count?: number },
  number[]
>('Top Stories Load');
