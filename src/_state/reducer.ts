import { combineReducers } from 'redux';
import { reducer as stories } from '../components/story/_state';
import { reducer as topStories } from '../components/top-stories/_state';

export const rootReducer = combineReducers({
  stories,
  topStories,
});
