import * as React from 'react';
import {
  StyledCommentContainer as Container,
  StyledCommentText as Text,
} from './styled';

export const Comment = ({ comment }: { comment: IComment }) => (
  <Container>
    <div>{comment.by} says:</div>
    <Text dangerouslySetInnerHTML={{ __html: comment.text }} />
  </Container>
);
