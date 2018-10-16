import React from 'react';
import { connect } from "react-redux";

import FromCurrency from '../FromCurrency/FromCurrency';
import ToCurrency from '../ToCurrency/ToCurrency';
import Swap from '../Swap/Swap';
import Rate from '../Rate/Rate';
import { POLL } from '../../../utils/constants';

const mapStateToProps = state => {
  return {state}
};

export class connectedExchange extends React.Component {
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

      timeout = setInterval(() => {
        this.requestRates(this.props.state.fromCurrency);
      }, POLL);

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
   
      componentDidUpdate(prevProps) {
        if (this.props.state.fromCurrency !== prevProps.state.fromCurrency) {
          this.requestRates();
          this.setState({ fromCurrency:this.props.state.fromCurrency, toCurrency:this.props.state.toCurrency })
        }
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render () {
        return (
            <div>
                <FromCurrency fromCurrency={this.props.state.fromCurrency} />
                <Swap fromCurrency={this.props.state.fromCurrency} toCurrency={this.props.state.toCurrency}/>
                <Rate 
                    fromCurrency={this.props.state.fromCurrency} 
                    toCurrency={this.props.state.toCurrency} 
                    rate={this.state.rates[this.props.state.toCurrency]}/>
                <ToCurrency toCurrency={this.props.state.toCurrency} />
            </div>
        )
    }
}

const Exchange = connect(mapStateToProps, null)(connectedExchange);

export default Exchange;