import { defineScenarioAction } from 'redux-typed-actions';

export const StoryLoad = defineScenarioAction<
  { id: number },
  IStory,
  { id: number; message: string }
>('Story Load');
