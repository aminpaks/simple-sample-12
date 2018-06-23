import * as React from 'react';
import { Navigation } from '../common';
import { Layout } from '../layout';

export class StoryPage extends React.Component {
  public render() {
    return (
      <Layout header={<Navigation />}>
        <div>Story</div>
      </Layout>
    );
  }
}
