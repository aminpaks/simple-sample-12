import { combineEpics, Epic } from 'redux-observable';
import { PlainAction } from 'redux-typed-actions';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { StoryLoad } from './actions';

const getStoryUrl = (id: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

const fetchStory: Epic<PlainAction, PlainAction, RootState> = action$ =>
  action$.pipe(
    filter(StoryLoad.is),
    mergeMap(action =>
      ajax({
        async: true,
        crossDomain: true,
        method: 'get',
        url: getStoryUrl(action.payload.id),
      }).pipe(
        map(res => res.response as IStory),
        map(res => StoryLoad.success.get(res)),
        catchError((err: AjaxError) =>
          of(
            StoryLoad.failure.get({
              id: action.payload.id,
              message: err.stack || err.message,
            }),
          ),
        ),
      ),
    ),
  );

export const epics = combineEpics(fetchStory);
