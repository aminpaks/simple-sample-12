interface IStory {
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

interface StoryState {
  error: string | null;
  id: number;
  item: IStory | null;
  loading: boolean;
}

type StoryListState = StoryState[];
