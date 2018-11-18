import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import ProfileProvider from './components/ProfileProvider';
import Layout from './layouts/Layout';
import LookUp from './pages/LookUp';
import Details from './pages/Details';
import Edit from './pages/Edit';

export default () => (
  <Router>
    <ProfileProvider>
      <Layout>
        <Switch>
          <Route exact path="/" render={(p) => <LookUp {...p} />} />
          <Route exact path="/:address" render={(p) => <Details {...p} />} />
          <Route exact path="/:address/edit" render={(p) => <Edit {...p} />} />
          <Route render={() => <p>Not found</p>} />
        </Switch>
      </Layout>
    </ProfileProvider>
  </Router>
);

