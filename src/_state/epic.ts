import { combineEpics } from 'redux-observable';
import { epics as story } from '../components/story/_state';
import { epics as topStories } from '../components/top-stories/_state';

export const rootEpic = combineEpics(topStories, story);
