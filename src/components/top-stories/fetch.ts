import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Query } from '../common';
import { TopStoryListLoad } from './_state';

interface QueryStaticProps {
  count: number;
}
interface QueryExtraRenderProps {
  fetch: typeof TopStoryListLoad.strictGet;
}

const mapStateToProps = ({ topStories }: RootState) => topStories;
const mapDispatchToProps = (dispatch: Dispatch, props: QueryStaticProps) => ({
  fetch: ({ count = props.count } = {}) =>
    dispatch(TopStoryListLoad.strictGet({ count })),
  onWillMount: () =>
    dispatch(TopStoryListLoad.strictGet({ count: props.count })),
});

export const FetchTopStoriesQuery = (connect(
  mapStateToProps,
  mapDispatchToProps,
)(Query) as any) as React.ComponentType<
  QueryProps<TopStoryListState & QueryExtraRenderProps> & QueryStaticProps
>;
