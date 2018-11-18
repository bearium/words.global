import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Header } from 'semantic-ui-react';

import ProfileContext from '../contexts/ProfileContext';

export default class Layout extends React.Component {
  static contextType = ProfileContext;

  render() {
    const { children } = this.props;

    const loading = typeof this.context === "undefined";

    return (
      <Container text>
        <Divider hidden />
          <Link to={this.context ? `/${this.context}/edit` : ''}>
            <Button compact loading={loading} floated="right">
              Edit
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

