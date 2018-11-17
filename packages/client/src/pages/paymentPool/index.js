import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Input,
  Label,
  Segment,
} from 'semantic-ui-react';

class PaymentPool extends Component {
  render() {
    const organizations = [{ key: 'UNHCR', text: 'UNHCR', value: 'hash' }, {
      key: 'test',
      text: 'UNHCR',
      value: 'hash'
    }];
    return (
      <>
      <Segment style={{ textAlign: 'center', padding: '8em 0em' }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Donate now
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Its simple! Select the organization. Choose how mush to donate and that is all!
          </p>
          <Divider
            as="h4"
            className="Donation"
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <p>Donation</p>
          </Divider>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <Dropdown
                  button
                  className="icon"
                  floating
                  labeled
                  icon="handshake"
                  options={organizations}
                  search
                  text="Select Organization"
                />
              </Grid.Column>
              <Grid.Column>
                <Input labelPosition="right" type="text" placeholder="Amount">
                  <Label basic>$</Label>
                  <input/>
                  <Label>.00</Label>
                </Input>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={1}>
            <Grid.Row>
              <Button fluid>
                Donate Now
              </Button>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      </>
    );
  }
}

export default PaymentPool;
