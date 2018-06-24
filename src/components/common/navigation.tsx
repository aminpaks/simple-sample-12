import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '../layout';

export const Navigation = () => (
  <Header>
    <Link to="/">Top Stories</Link>
    <Link to="/story/15234643">Flow or Typescript?</Link>
  </Header>
);
