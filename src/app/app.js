import React from 'react';
import { Container, Headline } from './app.styles';
import Exchange from './Components/Exchange/Exchange';

const App = () => (
  <Container className="App">
    <Headline>Exchange</Headline>
    <Exchange />
  </Container>
);

export default App;
