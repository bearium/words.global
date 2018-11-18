import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import ethwrapper from 'charitydb';
import ResponsiveContainer from './layouts/ResponsiveContainer';
import HomepageLayout from './pages/Home';
import PaymentPool from './pages/paymentPool';
import TransactionHistory from './pages/TransactionHistory';
import TransferFounds from './pages/TransferFounds';
import Myfunds from './pages/myFunds';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [isErrored, setErrored] = useState(false);

  if (isErrored) {
    window.open('https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047', '_blank');
  }

  useEffect(() => {
    if (!isLoaded && !isErrored) {
      ethwrapper.load().then(() => setLoaded(true)).catch(setErrored);
    }
  });

  console.log('rendering App');

  if (isErrored) {
    return (
      <div className="App">
        Waiting for MetaMask to be installed...
      </div>
    );
}
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        {isLoaded
          ? (
            <Switch>
              <Route exact path="/" component={HomepageLayout} />
              <Route path="/donate" component={PaymentPool} />
              <Route path="/account" component={TransactionHistory} />
              <Route path="/transfer" component={TransferFounds} />
              <Route path="/myFunds" component={Myfunds} />
            </Switch>
          )
          : 'Loading...'}
      </ResponsiveContainer>
    </BrowserRouter>
  );
}

export default App;
