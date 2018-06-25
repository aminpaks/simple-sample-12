import { defineScenarioAction } from 'redux-typed-actions';

export const CommentLoad = defineScenarioAction<
  { id: number },
  IComment,
  { id: number; message: string }
>('Comment Load');
