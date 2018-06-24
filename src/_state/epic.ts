import { combineEpics } from 'redux-observable';
import { epics as topStories } from '../components/top-stories/_state';

export const rootEpic = combineEpics(topStories);
