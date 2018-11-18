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
    return (
      <>
        <Segment vertical>
          <Container text style={{ textAlign: 'center', marginTop: '20px' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Share Allocation
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Shares Allocated: 120
            </p>
            <p style={{ fontSize: '1.33em' }}>
              Shares Worth: 120
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
                  <Input fluid placeholder="Users Key" />
                </Grid.Column>
                <Grid.Column>
                  <Input labelPosition="right" type="text" placeholder="Shares" fluid onChange={this.handleCadChange} value={this.state.CAD} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={1}>
              <Grid.Row>
                <Button fluid onClick={this.cryptoRound}>
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
