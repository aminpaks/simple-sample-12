import * as React from 'react';
import { match } from 'react-router-dom';
import { Navigation } from '../common';
import { Layout } from '../layout';
import { StoryFull } from '../story';

export class StoryPage extends React.Component<{
  match: match<{ id: string }>;
}> {
  public render() {
    const { id } = this.props.match.params;
    const storyId = parseInt(id, 10);
    return (
      <Layout header={<Navigation />}>
        <StoryFull id={storyId} loadComments={true} />
      </Layout>
    );
  }
}
