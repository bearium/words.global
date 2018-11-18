import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Container,
  Grid,
  Icon,
  Header,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';


class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children, location: { pathname } } = this.props;
    const { fixed } = this.state;
    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as={Link} to="/" active={pathname === '/'}>
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/donate" active={pathname === '/donate'}>Payments</Menu.Item>
                <Menu.Item as={Link} to="/account" active={pathname === '/account'}>Account</Menu.Item>
                <Menu.Item as={Link} to="/transfer" active={pathname === '/transfer'}>Transfer</Menu.Item>
                <Menu.Item as={Link} to="/myFunds" active={pathname === '/myFunds'}>Withdraw</Menu.Item>
                <Menu.Item position="right">
                </Menu.Item>
              </Container>
            </Menu>
          </Segment>
        </Visibility>
        <Segment className="footer-margin">
        {children}
        </Segment>
        <Segment className="footer" inverted vertical>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item>Sitemap</List.Item>
                    <List.Item as="a" href="http://www.unhcr.org/get-involved.html">Contact Us</List.Item>
                    <List.Item as="a" href="http://www.unhcr.org/who-we-help.html">Who We Help</List.Item>
                    <List.Item as="a" href="http://www.unhcr.org/figures-at-a-glance.html">Figures at a Glance</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a" href="http://www.unhcr.org/asylum-seekers.html">Asylum-seekers</List.Item>
                    <List.Item as="a" href="http://www.unhcr.org/refugees.html">Refugees</List.Item>
                    <List.Item as="a" href="http://www.unhcr.org/stateless-people.html">Stateless People</List.Item>
                    <List.Item as="a" href="http://www.unhcr.org/safeguarding-individuals.html">Safeguarding Individuals</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Donate
                  </Header>
                  <p>
                    Donating money is an easy and trackable process. You can give any amount and all of it will go straight to helping people who are really in need. We make sure your donations goes to right places.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
    );
  }
}


DesktopContainer.propTypes = {
  children: PropTypes.node,
};

class MobileContainer extends Component {
  state = {};

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  };

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened });

  render() {
    const { children, location: { pathname } } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation="uncover" inverted vertical visible={sidebarOpened}>
            <Menu.Item as={Link} to="/" active={pathname === '/'}>
              Home
            </Menu.Item>
            <Menu.Item as={Link} to="/donate" active={pathname === '/donate'}>Payments</Menu.Item>
            <Menu.Item as={Link} to="/account" active={pathname === '/account'}>Account</Menu.Item>
            <Menu.Item as={Link} to="/transfer" active={pathname === '/transfer'}>Transfer</Menu.Item>
            <Menu.Item as={Link} to="/myFunds" active={pathname === '/myFunds'}>Withdraw</Menu.Item>
            <Menu.Item position="right">
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              inverted
              textAlign="center"
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size="large">
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name="sidebar"/>
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            {children}
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
              <Container>
                <Grid divided inverted stackable>
                  <Grid.Row>
                    <Grid.Column width={3}>
                      <Header inverted as="h4" content="About" />
                      <List link inverted>
                        <List.Item as="a">Sitemap</List.Item>
                        <List.Item as="a" href="http://www.unhcr.org/get-involved.html">Contact Us</List.Item>
                        <List.Item as="a" href="http://www.unhcr.org/who-we-help.html">Who We Help</List.Item>
                        <List.Item as="a" href="http://www.unhcr.org/figures-at-a-glance.html">Figures at a Glance</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                      <Header inverted as="h4" content="Services" />
                      <List link inverted>
                        <List.Item as="a" href="http://www.unhcr.org/asylum-seekers.html">Asylum-seekers</List.Item>
                        <List.Item as="a" href="http://www.unhcr.org/refugees.html">Refugees</List.Item>
                        <List.Item as="a" href="http://www.unhcr.org/stateless-people.html">Stateless People</List.Item>
                        <List.Item as="a" href="http://www.unhcr.org/safeguarding-individuals.html">Safeguarding Individuals</List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                      <Header as="h4" inverted>
                        Donate
                      </Header>
                      <p>
                        Donating money is an easy and trackable process. You can give any amount and all of it will go straight to helping people who are really in need. We make sure your donations goes to right places.
                      </p>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
};

const ResponsiveContainer = ({ children, ...props }) => (
  <div className="wrapper">
    <DesktopContainer {...props}>{children}</DesktopContainer>
    <MobileContainer {...props}>{children}</MobileContainer>
  </div>

);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
};

export default withRouter(ResponsiveContainer);
