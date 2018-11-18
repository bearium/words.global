import React from 'react';

import ethw from 'charitydb';
import AddressContext from '../contexts/AddressContext';

const METAMASK = 'https://metamask.io/';

export default class AddressProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: undefined,
    };
  }

  async componentDidMount() {
    try {
      await ethw.load();
    }
    catch (e) {
      if (e.denied === true) {
        alert('You must allow access to MetaMask to use the Address Registry');
        throw e;
      }
      window.location = METAMASK;
      return;
    }
    const address = ethw.getCurrentAccount();

    this.setState({ address });
  }

  render() {
    return (
      <AddressContext.Provider value={this.state.address}>
        {this.props.children}
      </AddressContext.Provider>
    );
  }
};
