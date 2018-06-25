import * as React from 'react';
import { StyledCommenterContainer as Container } from './styled';

export const Commenter = ({ comment }: { comment: IComment }) => (
  <Container>{comment.by}</Container>
);
