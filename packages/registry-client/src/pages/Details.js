import React from 'react';
import { Link } from 'react-router-dom';
import { List, Dimmer, Loader } from 'semantic-ui-react';

import ProfileContext from '../contexts/ProfileContext';

export default class Details extends React.Component {
  static contextType = ProfileContext;

  constructor(props) {
    super(props);
    this.state = {
      name: 'hullo',
      category: 'org',
    };
  }

  render() {
    const { name, category } = this.state;
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
          {address === this.context.address && (
            <Link to={`/${address}/edit`}>Edit</Link>
          )}
          <List size="massive">
            <List.Item>
              <List.Header as="strong">
                Address
              </List.Header>
              <List.Description>
                {address}
              </List.Description>
            </List.Item>
            <List.Item>
              <List.Header as="strong">
                Name
              </List.Header>
              <List.Description>
                {name}
              </List.Description>
            </List.Item>
            <List.Item>
              <List.Header as="strong">
                Category
              </List.Header>
              <List.Description>
                {category}
              </List.Description>
            </List.Item>
          </List>
        </>
      );
    }

    return content;
  }
}

