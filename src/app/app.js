import React, { Component } from 'react';
import { Container } from './styles';
import Exchange from './Components/Exchange/Exchange';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        let resp = [];
        console.log('rates', res.rates)
        resp.push(res.rates)
        this.setState({ response: res.rates })
      })
      .catch(err => console.log(err));
  }

  async callApi() {
    const response = await fetch('/api/rates/GBP')
    console.log('resoponse', response)
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  rates() {
    console.log(this.state.response);
    for(let i in this.state.response) { 
      console.log (i, this.state.response[i]) 
      return <li>{i}: {this.state.response[i]}</li>
    } 
  }

  render() {
   
    return (
      <Container className="App">
        Exchange app! 💅
        <Exchange />
      </Container>
    );
  }
}

export default App;
