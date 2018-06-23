import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, StoryPage } from './components/main';

export class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/story/:id" component={StoryPage} />
          <Route exact={true} path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
