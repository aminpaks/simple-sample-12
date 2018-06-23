import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './components/home';

export class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
