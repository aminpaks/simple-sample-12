import * as React from 'react';
import { Story } from './story';

export class StoryList extends React.Component<{ storyIds: number[] }> {
  public render() {
    const { storyIds } = this.props;
    return (
      <div>
        <div>Top Story list</div>
        <div>
          {storyIds.map(storyId => <Story key={storyId} id={storyId} />)}
        </div>
      </div>
    );
  }
}
