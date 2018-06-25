import { combineEpics } from 'redux-observable';
import { epics as comment } from '../components/comment';
import { epics as story } from '../components/story';
import { epics as topStories } from '../components/top-stories';

export const rootEpic = combineEpics(topStories, story, comment);
