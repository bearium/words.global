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
import TransactionHistory from './pages/TransactionHistory';
import TransferFounds from './pages/TransferFounds';
import Myfunds from './pages/myFunds';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ResponsiveContainer>
          <Switch>
            <Route exact path="/" component={HomepageLayout} />
            <Route path="/donate" component={PaymentPool} />
            <Route path="/account" component={TransactionHistory} />
            <Route path="/transfer" component={TransferFounds} />
            <Route path="/myFunds" component={Myfunds} />
          </Switch>
        </ResponsiveContainer>
      </BrowserRouter>
    );
  }
}

export default App;
