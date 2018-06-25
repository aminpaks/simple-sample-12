import * as React from 'react';
import { StyledCommentContainer as Container } from './styled';

export const Comment = ({ comment }: { comment: IComment }) => (
  <Container>Comment::{comment.id}</Container>
);
