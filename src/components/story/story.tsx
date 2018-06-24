import * as React from 'react';
import { Link } from 'react-router-dom';
import { FetchStoryQuery } from './fetch';
import {
  StyledStoryContainer as Container,
  StyledStoryDetails as Details,
  StyledStoryTitle as Title,
} from './styled';

export const Story = ({ id }: { id: number; loadComments?: boolean }) => (
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
              <Title>
                <Link to={`/story/${item.id}`}>{item.title}</Link>
              </Title>
              <Details>
                <span>{item.score} score</span>
                <span>by {item.by}</span>
                {item.kids ? (
                  <span>{item.kids.length} comments</span>
                ) : (
                  <span>no comments!</span>
                )}
              </Details>
            </React.Fragment>
          )
        );
      }}
    />
  </Container>
);
