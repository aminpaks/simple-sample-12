import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  StyledStoryCardContainer as Container,
  StyledStoryCardDetails as Details,
  StyledStoryCardTitle as Title,
} from './styled';

export const StoryCard = ({ story }: { story: IStory }) => (
  <Container>
    <Title>
      <Link to={`/story/${story.id}`}>{story.title}</Link>
    </Title>
    <Details>
      <span>{story.score} score</span>
      <span>by {story.by}</span>
      {story.kids ? (
        <span>{story.kids.length} comments</span>
      ) : (
        <span>no comments!</span>
      )}
    </Details>
  </Container>
);
