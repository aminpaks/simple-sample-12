import { combineReducers } from 'redux';
import { reducer as comments } from '../components/comment';
import { reducer as stories } from '../components/story';
import { reducer as topStories } from '../components/top-stories';

export const rootReducer = combineReducers({
  comments,
  stories,
  topStories,
});
