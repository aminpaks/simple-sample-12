interface QueryProps<T> {
  render: (props: T) => JSX.Element | null | boolean;
}

interface QueryBaseProps {
  onWillMount: Function;
  onDidMount: Function;
  onWillUnmount: Function;
}
