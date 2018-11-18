import React, { Component } from 'react';
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  Segment,
  Tab,
} from 'semantic-ui-react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class TransactionHistory extends Component {
  constructor(props) {
    super(props);
    this.refugee = 2500000;
    this.food = 400;
    this.housing = 300;
    this.education = 200;
    this.health = 100;
    this.total = this.food + this.housing + this.education + this.health;
    this.refugeeTotalHelp= 100;
    this.refugeeTotalPercent= ((this.refugeeTotalHelp*100)/this.refugee);
    this.foodPercent = ((this.food*100)/this.total);
    this.housingPercent = ((this.housing*100)/this.total);
    this.educationPercent = ((this.education*100)/this.total);
    this.healthPercent = ((this.health*100)/this.total);
  }
  render() {
    const totalPane = (
      <Container>
        <Header>
          Total Donation: ${this.total}
        </Header>
        <Grid  verticalAlign='middle' columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Label>
                <Icon name="user" size="large" />
                <span className="font-weight: bolder;">You have helped this many people: </span>
                <span className="font-weight: lighter;">{this.refugeeTotalHelp}</span>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid  verticalAlign='middle' columns={2} style={{ textAlign: 'center' }}>
          <Grid.Row>
            <Grid.Column>
              <Grid  verticalAlign='middle'>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div>
                      <CircularProgressbar
                        percentage={this.foodPercent}
                        text={this.foodPercent + "%"}
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p><Label>Food:</Label><br/>{this.foodPercent + "%"} of your donation was used to help with nutritional needs.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid  verticalAlign='middle'>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div>
                      <CircularProgressbar
                        percentage={this.housingPercent}
                        text={this.housingPercent + "%"}
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p><Label>Housing:</Label><br/>{this.housingPercent + "%"} of your donation was used to help with housing needs.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Grid  verticalAlign='middle'>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div>
                      <CircularProgressbar
                        percentage={this.educationPercent}
                        text={this.educationPercent + "%"}
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p><Label>Education:</Label><br/>{this.educationPercent + "%"} of your donation was used to help with education needs.s</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid  verticalAlign='middle'>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div>
                      <CircularProgressbar
                        percentage={this.healthPercent}
                        text={this.healthPercent + "%"}
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p><Label>Health:</Label><br/>{this.healthPercent + "%"} of your donation was used to help with health and hygiene needs.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row centered>
            <Grid.Column width={10}>
              <p style={{ textAlign: 'center' }}>Your donation helped <b>{this.refugeeTotalPercent}%</b> of the refugees.<br/><b>Thanks for your generous donations!</b></p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
    const foodPane = (
      <Container>
        <Header>
          Total Donation: ${this.food}
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column columns={1}>
              <Label>
                <Icon name="user" size="large" />
                <span className="font-weight: bolder;">You have helped this many people: </span>
                <span className="font-weight: lighter;">{this.refugeeTotalHelp}</span>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={1} style={{ textAlign: 'center' }}>
          <Grid.Row>
            <Grid.Column>
              <Grid>
                <Grid.Row centered>
                  <Grid.Column width={9}>
                    <div>
                      <CircularProgressbar
                        percentage={this.foodPercent}
                        text={this.foodPercent + "%"}
                      />
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={10}>
                    <p style={{ textAlign: 'center' }}><b>Thanks for your generous donations!</b></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
    const housePane = (
      <Container>
        <Header>
          Total Donation: ${this.housing}
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column columns={1}>
              <Label>
                <Icon name="user" size="large" />
                <span className="font-weight: bolder;">You have helped this many people: </span>
                <span className="font-weight: lighter;">{this.refugeeTotalHelp}</span>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={1} style={{ textAlign: 'center' }}>
          <Grid.Row>
            <Grid.Column>
              <Grid>
                <Grid.Row centered>
                  <Grid.Column width={9}>
                    <div>
                      <CircularProgressbar
                        percentage={this.housingPercent}
                        text={this.housingPercent + "%"}
                      />
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={10}>
                    <p style={{ textAlign: 'center' }}><b>Thanks for your generous donations!</b></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
    const educationPane = (
      <Container>
        <Header>
          Total Donation: ${this.education}
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column columns={1}>
              <Label>
                <Icon name="user" size="large" />
                <span className="font-weight: bolder;">You have helped this many people: </span>
                <span className="font-weight: lighter;">{this.refugeeTotalHelp}</span>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={1} style={{ textAlign: 'center' }}>
          <Grid.Row>
            <Grid.Column>
              <Grid>
                <Grid.Row centered>
                  <Grid.Column width={9}>
                    <div>
                      <CircularProgressbar
                        percentage={this.educationPercent}
                        text={this.educationPercent + "%"}
                      />
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={10}>
                    <p style={{ textAlign: 'center' }}><b>Thanks for your generous donations!</b></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
    const healthPane = (
      <Container>
        <Header>
          Total Donation: ${this.health}
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column columns={1}>
              <Label>
                <Icon name="user" size="large" />
                <span className="font-weight: bolder;">You have helped this many people: </span>
                <span className="font-weight: lighter;">{this.refugeeTotalHelp}</span>
              </Label>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={1} style={{ textAlign: 'center' }}>
          <Grid.Row>
            <Grid.Column>
              <Grid>
                <Grid.Row centered>
                  <Grid.Column width={9}>
                    <div>
                      <CircularProgressbar
                        percentage={this.healthPercent}
                        text={this.healthPercent + "%"}
                      />
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={10}>
                    <p style={{ textAlign: 'center' }}><b>Thanks for your generous donations!</b></p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
    const panes = [
      { menuItem: 'Total', render: () => <Tab.Pane>{totalPane}</Tab.Pane> },
      { menuItem: 'Food', render: () => <Tab.Pane>{foodPane}</Tab.Pane> },
      { menuItem: 'Housing', render: () => <Tab.Pane>{housePane}</Tab.Pane> },
      { menuItem: 'Education', render: () => <Tab.Pane>{educationPane}</Tab.Pane> },
      { menuItem: 'Health', render: () => <Tab.Pane>{healthPane}</Tab.Pane> },
    ];

    return (
      <>
        <Segment vertical>
          <Container text style={{ textAlign: 'center', marginTop: '20px' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              How I&#39;ve Helped!
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              below is the breakdown of how you helped everyone in need.
            </p>
            <Divider
              as="h4"
              className="Donation"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <p>Break Down</p>
            </Divider>
          </Container>
          <Container>
            <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
          </Container>
        </Segment>
      </>
    );
  }
}

export default TransactionHistory;
