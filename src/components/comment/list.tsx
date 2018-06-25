import * as React from 'react';
import { Comment } from './comment';
import { Commenter } from './commenter';
import { FetchCommentListQuery } from './fetch-list';
import {
  StyledCommenterContainer as CommentContainer,
  StyledCommenterGroup as CommenterGroup,
  StyledCommentGroup as CommentGroup,
  StyledCommentListContainer as Container,
  StyledCommentListWrapper as Wrapper,
} from './styled';

export const CommenterList = ({
  commentIds,
  count = 30,
}: {
  commentIds: number[];
  count: number;
}) => (
  <Container>
    <FetchCommentListQuery
      ids={commentIds.slice(0, count)}
      render={props => {
        if (!props.isCompleted) {
          return <CommentContainer>Loading...</CommentContainer>;
        }
        return (
          <Wrapper>
            <CommenterGroup>
              <span>Top commenters: </span>
              {props.comments.map(comment => (
                <Commenter key={comment.id} comment={comment.item!} />
              ))}
            </CommenterGroup>
            <CommentGroup>
              <div>Comments</div>
              {props.comments.map(comment => (
                <Comment key={comment.id} comment={comment.item!} />
              ))}
            </CommentGroup>
          </Wrapper>
        );
      }}
    />
  </Container>
);
