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
  render() {
    const tempPane = (
      <Container>
        <Header>
          Total Donation: $100
        </Header>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Label>
                <Icon name="user" size="large" />
                You have helped this many people:
              </Label>
            </Grid.Column>
            <Grid.Column>
              <p>10</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2} style={{ textAlign: 'center' }}>
          <Grid.Row>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div>
                      <CircularProgressbar
                        percentage={66}
                        text="66%"
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p>This is a state about how you helped solve 1% of refugees problems</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div>
                      <CircularProgressbar
                        percentage={66}
                        text="66%"
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p>This is a state about how you helped solve 1% of refugees problems</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div>
                      <CircularProgressbar
                        percentage={66}
                        text="66%"
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p>This is a state about how you helped solve 1% of refugees problems</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <div>
                      <CircularProgressbar
                        percentage={66}
                        text="66%"
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <p>This is a state about how you helped solve 1% of refugees problems</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
    const panes = [
      { menuItem: 'Total', render: () => <Tab.Pane>{tempPane}</Tab.Pane> },
      { menuItem: 'Food', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
      { menuItem: 'Housing', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
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
