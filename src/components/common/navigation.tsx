import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../layout';

export class Navigation extends React.Component {
  public render() {
    return (
      <Header>
        <Link to="/">Top Stories</Link>
        <Link to="/story/15234643">Flow or Typescript?</Link>
      </Header>
    );
  }
}
