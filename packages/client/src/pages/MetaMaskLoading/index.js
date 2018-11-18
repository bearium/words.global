import React, { Component } from 'react';
import {
  Button,
  Container,
  Header,
  Segment,
} from 'semantic-ui-react';
class MetaMaskLoading extends Component {
  render() {
    return (
      <>
        <Segment vertical>
          <Container text style={{ textAlign: 'center', marginTop: '20px' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              You must add MetaMask to your browser to continue!
            </Header>
            <p>Please create an account</p>
            <Button as="a" href="https://metamask.io/">Add Now</Button>
          </Container>
          <Container style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>
              If you need help adding meta mask go
              <a href="https://blog.wetrust.io/how-to-install-and-use-metamask-7210720ca047"> here</a>
            </p>
          </Container>
        </Segment>
      </>
    );
  }
}

export default MetaMaskLoading;
