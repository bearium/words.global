import React from 'react';
import { Link } from 'react-router-dom';
import { List, Dimmer, Loader } from 'semantic-ui-react';
import ethw from 'charitydb';

import AddressContext from '../contexts/AddressContext';
import typeToString from '../helpers/typeToString';

export default class Details extends React.Component {
  static contextType = AddressContext;

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      fullName: '',
      type: -1,
    };
  }

  async updateProfile() {
    if (typeof this.context === 'undefined') {
      return;
    }

    const { match: { params: { address } } } = this.props;

    this.setState({
      profile: await ethw.getOrganization(address),
    });
  }

  componentDidMount() {
    this.updateProfile();
  }

  componentDidUpdate() {
    this.updateProfile();
  }

  render() {
    const { name, fullName, type } = this.state;
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
                {address}
              </List.Description>
            </List.Item>
            <List.Item>
              <List.Header as="strong">
                Name
              </List.Header>
              <List.Description>
                {name || <em>Not entered</em>}
              </List.Description>
            </List.Item>
            <List.Item>
              <List.Header as="strong">
                Full Name
              </List.Header>
              <List.Description>
                {fullName || <em>Not entered</em>}
              </List.Description>
            </List.Item>
            <List.Item>
              <List.Header as="strong">
                Type
              </List.Header>
              <List.Description>
                {typeToString(type) || <em>Not entered</em>}
              </List.Description>
            </List.Item>
          </List>
        </>
      );
    }

    return content;
  }
}

