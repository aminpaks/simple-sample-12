import * as React from 'react';
import { StoryPreview } from './story-preview';
import {
  StyledStoryListBody as Body,
  StyledStoryListContainer as Container,
  StyledStoryListHeader as Header,
} from './styled';

export class StoryList extends React.Component<{ storyIds: number[] }> {
  public render() {
    const { storyIds } = this.props;
    return (
      <Container>
        <Header>Top Stories</Header>
        <Body>
          {storyIds.map(storyId => <StoryPreview key={storyId} id={storyId} />)}
        </Body>
      </Container>
    );
  }
}
