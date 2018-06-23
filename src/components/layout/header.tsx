import * as React from 'react';
import { StyledNavigationContainer } from './styled';

export const Header = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => <StyledNavigationContainer>{children}</StyledNavigationContainer>;
