import * as React from 'react';
import { match } from 'react-router-dom';
import { Navigation } from '../common';
import { Layout } from '../layout';

export class StoryPage extends React.Component<{
  match: match<{ id: number }>;
}> {
  public render() {
    return (
      <Layout header={<Navigation />}>
        <div>Story {this.props.match.params.id}</div>
      </Layout>
    );
  }
}
