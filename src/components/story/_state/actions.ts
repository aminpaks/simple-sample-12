import { defineScenarioAction } from 'redux-typed-actions';

export const StoryLoad = defineScenarioAction<{ id: number }, Story>(
  'Story Load',
);
