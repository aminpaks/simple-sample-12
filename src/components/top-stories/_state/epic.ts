import { combineEpics, Epic } from 'redux-observable';
import { PlainAction } from 'redux-typed-actions';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { TopStoryListLoad } from './actions';

const getTopStoriesUrl = () =>
  'https://hacker-news.firebaseio.com/v0/topstories.json';

const fetchTopStories: Epic<PlainAction, PlainAction, RootState> = action$ =>
  action$.pipe(
    filter(TopStoryListLoad.is),
    switchMap(action =>
      ajax({
        async: true,
        crossDomain: true,
        method: 'get',
        url: getTopStoriesUrl(),
      }).pipe(
        map(res => res.response as number[]),
        map(res => {
          const { count } = action.payload;
          return res.slice(0, count);
        }),
        map(res => TopStoryListLoad.success.get(res)),
        catchError((err: AjaxError) =>
          of(TopStoryListLoad.failure.get(err.stack || err.message)),
        ),
      ),
    ),
  );

export const epics = combineEpics(fetchTopStories);
