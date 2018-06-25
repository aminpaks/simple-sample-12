import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Query } from '../common';
import { CommentLoad } from './_state';

interface QueryStaticProps {
  id: number;
}

const mapStateToProps = (
  { comments }: RootState,
  { id }: QueryStaticProps,
) => ({
  ...comments.find(item => item.id === id),
});
const mapDispatchToProps = (dispatch: Dispatch, props: QueryStaticProps) => ({
  onWillMount: () => dispatch(CommentLoad.get({ id: props.id })),
});

export const FetchCommentQuery = (connect(
  mapStateToProps,
  mapDispatchToProps,
)(Query) as any) as React.ComponentClass<
  QueryProps<CommentState> & QueryStaticProps
>;
