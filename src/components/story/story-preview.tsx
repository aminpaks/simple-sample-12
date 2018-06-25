import * as React from 'react';
import { FetchStoryQuery } from './fetch';
import { StoryCard } from './story-card';
import { StyledStoryContainer as Container } from './styled';

export const StoryPreview = ({
  id,
}: {
  id: number;
  loadComments?: boolean;
}) => (
  <Container>
    <FetchStoryQuery
      id={id}
      render={props => {
        if (props.loading) {
          return <div>Loading...</div>;
        }
        if (props.error) {
          return <div>Error: {props.error}</div>;
        }
        const { item } = props;
        return item && <StoryCard story={item} />;
      }}
    />
  </Container>
);
