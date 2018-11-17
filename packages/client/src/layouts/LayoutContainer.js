import * as React from 'react';
import { Container } from 'semantic-ui-react';

import MenuBar from '../components/MenuBar';

const container = ({ children }) => (
  <>
    <MenuBar />
    <Container>
      {children}
    </Container>
  </>
);

export default container;
