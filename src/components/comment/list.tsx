import * as React from 'react';
import { Comment } from './comment';

export const CommentList = ({
  commentIds,
  count = 30,
}: {
  commentIds: number[];
  count: number;
  loadComments?: boolean;
}) => (
  <div>
    Comment List:{' '}
    {commentIds &&
      commentIds
        .slice(0, count)
        .map(commentId => <Comment key={String(commentId)} id={commentId} />)}
  </div>
);
