import React, { Component } from 'react';
import { Container, Headline } from './styles';
import Exchange from './Components/Exchange/Exchange';

class App extends Component {
  render(){
    return (
      <div className="App">
      <header>
        <Headline>Exchange</Headline>  
      </header> 
      <Container>
        Exchange app!
        <Exchange />
      </Container>
      </div> 
    );
  }
}

export default App;
