import * as React from 'react';
import { CommenterList } from '../comment/list';
import { FetchStoryQuery } from './fetch';
import { StoryCard } from './story-card';
import { StyledStoryContainer as Container } from './styled';

export const StoryFull = ({ id }: { id: number; loadComments?: boolean }) => (
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
        return (
          item && (
            <React.Fragment>
              <StoryCard story={item} />
              <CommenterList commentIds={item.kids} count={10} />
            </React.Fragment>
          )
        );
      }}
    />
  </Container>
);
