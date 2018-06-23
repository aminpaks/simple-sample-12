interface Story {
  type: 'story';
  id: number;
  by: string;
  descendants: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  url: string;
}

interface StoryListState {
  error: ErrorState | null;
  list: Story[];
  loading: boolean;
}
