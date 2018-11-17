import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ResponsiveContainer from './layouts/ResponsiveContainer';
import HomepageLayout from './pages/Home';


class App extends Component {
  render() {
    return (
      <ResponsiveContainer>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomepageLayout} />
          </Switch>
        </BrowserRouter>
      </ResponsiveContainer>
    );
  }
}

export default App;
