interface QueryProps<T> {
  render: (props: T) => JSX.Element;
}

interface QueryBaseProps {
  onWillMount: Function;
  onDidMount: Function;
  onWillUnmount: Function;
}
