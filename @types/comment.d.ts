interface IComment {
  type: 'comment';
  id: number;
  by: string;
  kids: number[];
  parent: number;
  time: number;
  text: string;
}
interface CommentState {
  error: string | null;
  id: number;
  item: IComment | null;
  loading: boolean;
}

type CommentListState = CommentState[];
