import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, Dimmer, Loader } from 'semantic-ui-react';
import ethw from 'charitydb';

import AddressContext from '../contexts/AddressContext';
import typeToString from '../helpers/typeToString';

export default class Details extends React.Component {
  static contextType = AddressContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      profile: undefined,
      type: -1,
    };
  }

  async updateProfile() {
    console.log('why1');
    if (typeof this.context === 'undefined') {
      return;
    }

    const { match: { params: { address } } } = this.props;

    console.time('why');
    const profile = await ethw.getOrganization(address);
    console.timeEnd('why');

    console.log('before setState', profile);
    this.setState({ profile });
  }

  componentDidMount() {
    this.updateProfile();
  }

  componentDidUpdate(prevState, prevProps) {
    if (typeof this.state.profile === 'undefined') {
      this.updateProfile();
    }
  }

  render() {
    const { profile } = this.state;
    const { match: { params: { address } } } = this.props;

    let content;
    if (typeof this.context === "undefined") {
      content = (
        <Dimmer active inverted>
          <Loader inverted content="Loading" />
        </Dimmer>
      );
    }
    else {
      content = (
        <>
          {address === this.context && (
            <Link to={`/${address}/edit`}>Edit</Link>
          )}
          <List size="massive">
            <List.Item>
              <List.Header as="strong">
                Address
              </List.Header>
              <List.Description style={{ wordWrap: 'break-word' }}>
                {profile && profile.address}
              </List.Description>
            </List.Item>
            <Divider hidden />
            <List.Item>
              <List.Header as="strong">
                Name
              </List.Header>
              <List.Description>
                {(profile && profile.name) || <em>Not entered</em>}
              </List.Description>
            </List.Item>
            <Divider hidden />
            <List.Item>
              <List.Header as="strong">
                Type
              </List.Header>
              <List.Description>
                {(profile && typeToString(profile.type)) || <em>Not entered</em>}
              </List.Description>
            </List.Item>
          </List>
        </>
      );
    }

    return content;
  }
}

