import React from 'react';

//import ethw from 'whatever';
import ProfileContext from '../contexts/ProfileContext';

const METAMASK = 'https://metamask.io/';

export default class ProfileProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      profile: undefined,
    };
  }

  async componentDidMount() {
    let profile;
    try {
      //      profile = await ethw.getUserAddress()
      //        .then(ethw.getRegistryEntry);
    }
    catch (e) {
      window.location = METAMASK;
      return;
    }

    this.setState({ profile });
  }

  render() {
    return (
      <ProfileContext.Provider value={this.state.profile}>
        {this.props.children}
      </ProfileContext.Provider>
    );
  }
};
