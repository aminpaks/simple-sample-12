import * as React from 'react';
import { Navigation } from '../common';
import { Layout } from '../layout';
import { StoryList } from '../story';

export class HomePage extends React.Component {
  public render() {
    return (
      <Layout header={<Navigation />}>
        <div>Home</div>
        <StoryList />
      </Layout>
    );
  }
}
