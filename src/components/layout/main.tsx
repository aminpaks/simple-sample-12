import * as React from 'react';
import {
  StyledLayoutContainer,
  StyledLayoutContent,
  StyledLayoutFooter,
  StyledLayoutHeader,
} from './styled';

export const Layout = ({ header, children }: { header?: JSX.Element, children: JSX.Element }) => (
  <StyledLayoutContainer>
    {header && <StyledLayoutHeader>{header}</StyledLayoutHeader>}
    <StyledLayoutContent>{children}</StyledLayoutContent>
    <StyledLayoutFooter>Powered by <a href="https://reactjs.org/" target="_blank">React</a></StyledLayoutFooter>
  </StyledLayoutContainer>
)
