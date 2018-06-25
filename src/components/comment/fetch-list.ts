import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Query } from '../common';
import { CommentLoad } from './_state';

interface QueryStaticProps {
  ids: number[];
}

const mapStateToProps = (
  { comments }: RootState,
  { ids }: QueryStaticProps,
) => ({
  comments: comments.filter(item => ids.find(id => id === item.id)),
  isCompleted: ids.every(id => {
    const found = comments.find(item => item.id === id);
    return !!found && !!found.item && !found.loading;
  }),
});
const mapDispatchToProps = (dispatch: Dispatch, props: QueryStaticProps) => ({
  onWillMount: () => {
    props.ids.forEach(id => dispatch(CommentLoad.get({ id })));
  },
});

export const FetchCommentListQuery = (connect(
  mapStateToProps,
  mapDispatchToProps,
)(Query) as any) as React.ComponentClass<
  QueryProps<{ comments: CommentState[]; isCompleted: boolean }> &
    QueryStaticProps
>;
