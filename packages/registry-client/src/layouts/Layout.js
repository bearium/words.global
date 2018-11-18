import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Header, Icon } from 'semantic-ui-react';

import AddressContext from '../contexts/AddressContext';

export default class Layout extends React.Component {
  static contextType = AddressContext;

  render() {
    const { children } = this.props;

    const loading = typeof this.context === "undefined";

    return (
      <Container text>
        <Divider hidden />
          <Link to={this.context ? `/${this.context}` : ''}>
            <Button
              basic
              animated
              compact
              loading={loading}
              floated="right"
            >
              <Button.Content visible>
                Me
              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Link>
          <Header as="h1">
            <Link to="/">
              Address Registry
            </Link>
          </Header>
        <Divider section />
        {children}
      </Container>
    );
  }
}

