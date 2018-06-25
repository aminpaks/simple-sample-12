import { isFunction } from 'lodash';
import * as React from 'react';

/**
 * A simple implementation of a Query component
 * Needs some LOVE, we don't have time for it :|
 */
export class Query extends React.Component<QueryProps<any> & QueryBaseProps> {
  constructor(props: any, context: any) {
    super(props, context);
    const { onWillMount } = props;
    if (isFunction(onWillMount)) {
      onWillMount();
    }
  }
  public componentDidMount() {
    const { onDidMount } = this.props;
    if (isFunction(onDidMount)) {
      onDidMount();
    }
  }
  public componentWillUnmount() {
    const { onWillUnmount } = this.props;
    if (isFunction(onWillUnmount)) {
      onWillUnmount();
    }
  }
  public render() {
    const {
      render,
      children,
      onDidMount,
      onWillMount,
      onWillUnmount,
      ...props
    } = this.props;
    if (isFunction(render)) {
      return render(props) || null;
    }
    return null;
  }
}
