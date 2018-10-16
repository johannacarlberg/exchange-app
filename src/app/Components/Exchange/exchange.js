import React, { Component } from 'react';
import { connect } from "react-redux";

import FromCurrency from './FromCurrency/FromCurrency';
import ToCurrency from './ToCurrency/ToCurrency';

const mapStateToProps = state => {
  return {state}
};

export class connectedExchange extends Component {
    constructor() {
        super();
        this.state = {
          rates: [],
          fromCurrency: 'GBP',
          toCurrency: 'EUR'
        };
      }

      componentDidMount() {
        this.requestRates(this.props.state.fromCurrency)
      }

      async callApi(baseRate){
        const response = await fetch('/api/rates/' + baseRate)
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

    requestRates = function requestRates(baseRate) {
      this.callApi(this.props.state.fromCurrency)
      .then(res => {
        console.log('rates', res.rates)
        this.setState({ rates: res.rates})
      })
      .catch(err => console.log(err));
    }
     
    render () {
        return (
            <div>
                <FromCurrency fromCurrency={this.props.state.fromCurrency} value={0} />
                <ToCurrency toCurrency={this.props.state.toCurrency} value={2} />
            </div>
        )
    }
}

const Exchange = connect(mapStateToProps, null)(connectedExchange);

export default Exchange;