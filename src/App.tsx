import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { store } from './_state';
import { HomePage, StoryPage } from './components/main';

export class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact={true} path="/story/:id" component={StoryPage} />
            <Route exact={true} path="/" component={HomePage} />
          </Switch>
        </Provider>
      </BrowserRouter>
    );
  }
}
