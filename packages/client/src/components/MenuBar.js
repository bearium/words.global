import * as React from 'react';
import { Container, Menu, Responsive } from 'semantic-ui-react';


class MenuBar extends React.Component {
  render() {
    return (
      <Responsive>
        <Menu
          size="large"
          inverted
        >
          <Container>
            <Menu.Item>
              Home
            </Menu.Item>
            <Menu.Item>
              Store
            </Menu.Item>
            <Menu.Item>
              Build
            </Menu.Item>
            <Menu.Item>
              Guilds
            </Menu.Item>
            <Menu.Item position="right">
            </Menu.Item>
          </Container>
        </Menu>
      </Responsive>
    );
  }
}

export default MenuBar;
