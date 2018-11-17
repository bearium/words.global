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
import PaymentPool from './pages/paymentPool';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ResponsiveContainer>
          <Switch>
            <Route exact path="/" component={HomepageLayout}/>
            <Route path="/donate" component={PaymentPool}/>
          </Switch>
        </ResponsiveContainer>
      </BrowserRouter>
    );
  }
}

export default App;
