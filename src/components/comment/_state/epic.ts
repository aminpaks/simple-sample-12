import { combineEpics, Epic } from 'redux-observable';
import { PlainAction } from 'redux-typed-actions';
import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { CommentLoad } from './actions';

const getCommentUrl = (id: number) =>
  `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

const fetchComment: Epic<PlainAction, PlainAction, RootState> = action$ =>
  action$.pipe(
    filter(CommentLoad.is),
    mergeMap(action =>
      ajax({
        async: true,
        crossDomain: true,
        method: 'get',
        url: getCommentUrl(action.payload.id),
      }).pipe(
        map(res => res.response as IComment),
        map(res => CommentLoad.success.get(res)),
        catchError((err: AjaxError) =>
          of(
            CommentLoad.failure.get({
              id: action.payload.id,
              message: err.stack || err.message,
            }),
          ),
        ),
      ),
    ),
  );

export const epics = combineEpics(fetchComment);
