import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ethwrapper from 'charitydb';
import ethwrapperTransactions from 'charityfinances';
import ResponsiveContainer from './layouts/ResponsiveContainer';
import HomepageLayout from './pages/Home';
import PaymentPool from './pages/paymentPool';
import TransactionHistory from './pages/TransactionHistory';
import TransferFounds from './pages/TransferFounds';
import Myfunds from './pages/myFunds';
import MetaMaskLoading from './pages/MetaMaskLoading';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [isErrored, setErrored] = useState(false);


  useEffect(() => {
    if (!isLoaded && !isErrored) {
      ethwrapper.load().then(() => setLoaded(true)).catch(setErrored);
      ethwrapperTransactions.load().then(() => setLoaded(true)).catch(setErrored);
    }
  });
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        {isLoaded
          ? (
            <Switch>
              <Route exact path="/" component={HomepageLayout} />
              <Route props={ethwrapper.getCurrentAccount()} path="/donate" component={PaymentPool} />
              <Route path="/account" component={TransactionHistory} />
              <Route path="/transfer" component={TransferFounds} />
              <Route path="/myFunds" component={Myfunds} />
            </Switch>
          )
          : (
            <Switch>
              <Route exact path="/" component={HomepageLayout} />
              <Route path="/donate" component={MetaMaskLoading} />
              <Route path="/account" component={MetaMaskLoading} />
            </Switch>)}
      </ResponsiveContainer>
    </BrowserRouter>
  );
}

export default App;
