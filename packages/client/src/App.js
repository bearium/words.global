import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LayoutContainer from './layouts/LayoutContainer';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <LayoutContainer>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit
              and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </LayoutContainer>
    );
  }
}

export default App;
