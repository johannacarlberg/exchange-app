import React, { Component } from 'react';
import { Container, Headline } from './app.styles';
import Exchange from './Components/Exchange/Exchange';

class App extends Component {
  render(){
    return (
      <Container className="App">
        <Headline>Exchange</Headline> 
        <Exchange />
      </Container>
    );
  }
}

export default App;
