import * as React from 'react';
import { FetchStoryQuery } from './fetch';
import { StyledStoryContainer as Container } from './styled';

export const Story = ({ id }: { id: number }) => (
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
        return (
          <div>
            The Story NO: {id}: {JSON.stringify(props.item)}
          </div>
        );
      }}
    />
  </Container>
);
