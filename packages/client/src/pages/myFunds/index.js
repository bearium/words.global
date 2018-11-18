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
  constructor(props) {
    super(props);
    this.cryptoRound = this.cryptoRound.bind(this);
    this.handleCadChange = this.handleCadChange.bind(this);
    this.handleOrgChange = this.handleOrgChange.bind(this);
    this.state = {
      CAD: '',
      ORG: '',
    };
  }

  handleCadChange(text) {
    this.setState({ CAD: text.value });
  }

  handleOrgChange(event, data) {
    this.setState({ ORG: data.value });
  }

  async cryptoRound() {
    const data = await fetch('https://min-api.cryptocompare.com/data/price?extraParams=BlocHack&fsym=CAD&tsyms=ETH');
    if (data.Response) {
      if (data.Message.substr(0, 41) === 'There is no data for any of the toSymbols') {
        throw new Error('Unknown or invalid currency specifed: ETH');
      } else {
        throw new Error(data.Message);
      }
    }
    return await data.json();
  }

  render() {
    const organizations = [{ key: 'UNHCR', text: 'UNHCR', value: 'hash' }, {
      key: 'test',
      text: 'UNHCR2',
      value: 'hash2',
    }];
    return (
      <>
        <Segment vertical>
          <Container text style={{ textAlign: 'center', marginTop: '20px' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              My Funds
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Available Funds: $100
            </p>
            <Divider
              as="h4"
              className="Donation"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <p>Withdrawal</p>
            </Divider>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Dropdown
                    button
                    className="icon"
                    floating
                    fluid
                    labeled
                    icon="handshake"
                    value={this.state.ORG}
                    onChange={this.handleOrgChange}
                    options={organizations}
                    search
                    placeholder="Select Merchant"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Input labelPosition="right" type="text" placeholder="Amount" fluid onChange={this.handleCadChange} value={this.state.CAD}>
                    <Label basic>$</Label>
                    <input />
                    <Label>.00</Label>
                  </Input>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={1}>
              <Grid.Row>
                <Button fluid onClick={this.cryptoRound}>
                  Withdraw
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
