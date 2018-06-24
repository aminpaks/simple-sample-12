import * as React from 'react';
import { Navigation } from '../common';
import { Layout } from '../layout';
import { StoryList } from '../story';
import { FetchTopStoriesQuery as TopStoriesQuery } from '../top-stories';

export const HomePage = () => (
  <Layout header={<Navigation />}>
    <div>Home</div>
    <TopStoriesQuery
      count={30} /* Could be coming from props */
      render={props => {
        if (props.loading) {
          return <div>Loading...</div>;
        }
        if (props.error) {
          return <div>Error: {props.error.message}</div>;
        }
        return <StoryList />;
      }}
    />
  </Layout>
);
