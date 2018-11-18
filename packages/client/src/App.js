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
  const [isLoaded1, setLoaded1] = useState(false);
  const [isLoaded2, setLoaded2] = useState(false);
  const [isErrored, setErrored] = useState(false);


  useEffect(() => {
    if (!isLoaded && !isErrored) {
      ethwrapper.load().then(() => setLoaded1(true)).catch(setErrored);
      ethwrapperTransactions.load().then(() => setLoaded2(true)).catch(setErrored);
    }
  });

  const isLoaded = isLoaded1 && isLoaded2;
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
