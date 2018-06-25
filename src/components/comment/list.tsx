import * as React from 'react';
import { Commenter } from './commenter';
import { FetchCommentQuery } from './fetch';
import {
  StyledCommenterContainer as CommentContainer,
  StyledCommentListContainer as Container,
} from './styled';

export const CommenterList = ({
  commentIds,
  count = 30,
}: {
  commentIds: number[];
  count?: number;
  loadComments?: boolean;
}) =>
  commentIds && (
    <Container>
      <span>Top commenters: </span>
      {commentIds.slice(0, count).map(commentId => (
        <FetchCommentQuery
          key={String(commentId)}
          id={commentId}
          render={props => {
            if (props.loading) {
              return <CommentContainer>Loading...</CommentContainer>;
            }
            if (props.error) {
              return <CommentContainer>Error: {props.error}</CommentContainer>;
            }
            return props.item && <Commenter comment={props.item} />;
          }}
        />
      ))}
    </Container>
  );
