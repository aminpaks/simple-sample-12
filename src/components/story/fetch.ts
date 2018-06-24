import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Query } from '../common';
import { StoryLoad } from './_state';

interface QueryStaticProps {
  id: number;
}

const mapStateToProps = ({ stories }: RootState, { id }: QueryStaticProps) => ({
  ...stories.find(item => item.id === id),
});
const mapDispatchToProps = (dispatch: Dispatch, props: QueryStaticProps) => ({
  fetch: () => dispatch(StoryLoad.strictGet({ id: props.id })),
  onWillMount: () => dispatch(StoryLoad.get({ id: props.id })),
});

export const FetchStoryQuery = (connect(
  mapStateToProps,
  mapDispatchToProps,
)(Query) as any) as React.ComponentClass<
  QueryProps<StoryState> & QueryStaticProps
>;
