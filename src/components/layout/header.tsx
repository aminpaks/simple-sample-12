import * as React from 'react';
import { StyledNavigationContainer } from './styled';

export const Header = ({ children }: { children: any }) => (
  <StyledNavigationContainer>{children}</StyledNavigationContainer>
);
