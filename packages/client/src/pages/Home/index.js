import React from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Segment,
} from 'semantic-ui-react';
import humanitarian from './humanitarian.jpg';

const HomepageLayout = () => (
  <>
    <Container text style={{ textAlign: 'center', paddingTop: '40px' }}>
      <Header
        as="h1"
        content="Become a donor now"
      />
      <Header
        as="h2"
        content="Sign up and watch your donations make a difference."
      />
      <Button primary size="huge">
        Get Started
        <Icon name="right arrow" />
      </Button>
    </Container>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Who you help
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              All your donation go to those in need, specifically selected
              by Organizations like UNHCR.
            </p>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Watch your donations make a difference
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Through our system all your money donated is able to be tracked and you will
              be able to see how your funds have made a difference in the lives of those in need
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image bordered style={{ width: 'auto' }} rounded size="large" src={humanitarian} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center">
            <Button size="huge">Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled="internally" columns="equal" stackable>
        <Grid.Row textAlign="center">
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              View your contributions
            </Header>
            <Button>View</Button>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Become an Organization
            </Header>
            <Button>Sign Up</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: '2em' }}>
          Why Choose Us
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Using cutting edge technology we ensure complete transparency in your donation.
          You always know where your money is and how it has changed the lives of those in need.
          We provide safe transactions that are always tracked for the users safety.
        </p>
        <Divider
          as="h4"
          className="header"
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <p>Partners</p>
        </Divider>
        <Header as="h3" style={{ fontSize: '2em' }}>
          How we know
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We will partner with great organizations such as UNHCR
          to always ensure that money is only sent to those in need.
        </p>
      </Container>
    </Segment>
  </>
);

export default HomepageLayout;
