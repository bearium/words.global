import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Input,
  Segment,
} from 'semantic-ui-react';
import charityDB from 'charitydb/lib/charityDB';
import charityFinances from 'charityfinances/lib/charityFinances';

class PaymentPool extends Component {

  constructor(props) {
    super(props);
    this.cryptoRound = this.cryptoRound.bind(this);
    this.handleCadChange = this.handleCadChange.bind(this);
    this.handleOrgChange = this.handleOrgChange.bind(this);
    this.TransferFunds = this.TransferFunds.bind(this);
    this.state = {
      CAD: '',
      ORG: '',
      user: '',
      totalShares: '',
    };
  }

  handleCadChange(data, { name, value }) {
    this.setState({ CAD: value });
  }

  handleOrgChange(event, data) {
    this.setState({ ORG: data.value });
  }

  updateUserStates() {
    this.setState({ user: charityDB.getCurrentAccount() });
    this.setState({ totalShares: charityFinances.totalShares(charityDB.getCurrentAccount()) });
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

  async TransferFunds() {
    console.log('transferring funds');
    const convertion = await this.cryptoRound();
    const isnum = /^\d+$/.test(this.state.CAD);
    if (!isnum || this.state.CAD === '0') {
      this.setState({ numerr: true });
    }

    if (!this.state.numerr) {

      console.log(this.state.ORG, this.state.CAD);
      charityFinances.addShares(this.state.ORG, this.state.CAD);
    }
    return null;
  }


  render() {
    console.log(this.state.totalShares);
    return (
      <>
        <Segment vertical>
          <Container text style={{ textAlign: 'center', marginTop: '20px' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Share Allocation
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Shares Allocated: {this.state.totalShares}
            </p>
            <p style={{ fontSize: '1.33em' }}>
              Shares Worth: $1
            </p>
            <p style={{ fontSize: '1.00em' }}>
              Please double check before allocating any funds.
            </p>
            <Divider
              as="h4"
              className="Transfer"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <p>Transfer</p>
            </Divider>
            <Grid columns={2} divided>
              <Grid.Row>
                <Grid.Column>
                  <Input fluid placeholder="Users Key" type="text" value={this.state.ORG} onChange={this.handleOrgChange} />
                </Grid.Column>
                <Grid.Column>
                  <Input step="1" labelPosition="right" type="number" placeholder="Shares" fluid onChange={this.handleCadChange} value={this.state.CAD} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={1}>
              <Grid.Row>
                <Button fluid onClick={this.TransferFunds}>
                  Transfer
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
