import * as React from 'react';
import { Link } from 'react-router-dom';
import { Header, Layout } from '../layout';

export class Home extends React.Component {
  public render() {
    return (
      <Layout
        header={
          <Header>
            <Link to="/top-stories">Top Stories</Link>
          </Header>
        }
      >
        <div>Home</div>
      </Layout>
    );
  }
}
