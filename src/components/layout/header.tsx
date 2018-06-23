import * as React from 'react';
import { StyledHeaderContainer } from './styled';

export class Header extends React.Component {
  public render() {
    const { children } = this.props;
    return <StyledHeaderContainer>HEADER{children}</StyledHeaderContainer>;
  }
}
