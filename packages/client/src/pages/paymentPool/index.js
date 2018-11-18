import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Input,
  Label,
  Modal,
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
      CAD: 0,
      ORG: '',
      err: false,
      numerr: false,
    };
  }

  handleCadChange(event, data) {
    this.setState({ CAD: data.value });
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

  async TransferFunds() {
    const convertion = await this.cryptoRound();
    const isnum = /^\d+$/.test(this.state.CAD);
    if (!isnum || this.state.CAD === '0') {
      this.setState({ numerr: true });
    }

    if (!this.state.numerr) {

      const eth = this.state.CAD * convertion.ETH;
      const bigNum = charityFinances.getBigNumberConstructor();
      const wei = new bigNum(eth.toFixed(15)).times(1e18);
      let byName;
      try {
        if ((await charityDB.getOrganizationByName(this.state.ORG)).type.eq(0)){
          throw new Error("");
        }
        byName = true;
      } catch (e) {
        await charityDB.getOrganization(this.state.ORG);
        byName = false;
      }
      if (byName) {
        console.log("name");
        charityFinances.donateByName(this.state.ORG, wei);
      }
      else if (byName === false) {
        console.log("addrs");
        charityFinances.donateByAddress(this.state.ORG, wei);
      }
      else if (typeof byname === 'undefined') {
        this.setState({ err: false });
      }
    }
    return null;
  }

  RenderError() {
    if (this.state.err && this.state.numerr) {
      return (
        <p>
          Unfortunately we were unable to find that charity please
          checking spelling and or that you entered the correct
          hash as well please enter a valid dollar amount!
        </p>
      );
    }
    if (this.state.err) {
      return (
        <p>
          Unfortunately we were unable to find that charity please
          checking spelling and or that you entered the correct
          hash!
        </p>
      );
    }
    if (this.state.numerr) {
      return (
        <p>
          PLease enter a valid dollar amount!
        </p>
      );
    }
    return null;
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
                  <Input
                    fluid
                    icon="handshake"
                    value={this.state.ORG}
                    onChange={this.handleOrgChange}
                    options={organizations}
                    placeholder="Select Organization"
                  />
                </Grid.Column>
                <Grid.Column>
                  <Input labelPosition="right" type="number" placeholder="Amount" fluid onChange={this.handleCadChange} value={this.state.CAD}>
                    <Label basic>$</Label>
                    <input />
                    <Label>.00</Label>
                  </Input>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid columns={1}>
              <Grid.Row>
                <Button fluid onClick={this.TransferFunds}>
                  Donate Now
                </Button>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Modal open={this.state.err || this.state.numerr} basic size="small">
          <Header icon="frown" content="OOPS Something Went Wrong!" />
          <Modal.Content>
            {this.RenderError()}
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={() => this.setState({ err: false })}>
              <Icon name="checkmark" />
              Please try Again
            </Button>
          </Modal.Actions>
        </Modal>
      </>
    );
  }
}

export default PaymentPool;
