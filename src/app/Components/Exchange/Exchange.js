import React from 'react';
import { connect } from "react-redux";

import store from '../../../utils/store';
import { setRate } from "../../../utils/actions";

import FromCurrency from '../FromCurrency/FromCurrency';
import ToCurrency from '../ToCurrency/ToCurrency';
import ExchangeButton from '../ExchangeButton/ExchangeButton';
import Swap from '../Swap/Swap';
import Rate from '../Rate/Rate';
import { POLL } from '../../../utils/constants';
import { TopContainer, MiddleContainer, BottomContainer } from './Exchange.styles';

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
    setRate: rate => dispatch(setRate(rate)),
  };
};

export class connectedExchange extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          from: {currency: 'GBP'},
          to: {currency: 'EUR'},
        };
    }

      componentDidMount() {
        this.requestRates(this.props.state.from.currency);
        console.log('this.props.state.fromCurrency', this.props.state.from.currency)
      }

      timeout = setInterval(() => {
        this.requestRates(this.props.state.from.currency);
      }, POLL);

      async callApi(baseRate){
        const response = await fetch('/api/rates/' + baseRate);
        const body = await response.json();

        // if (response.status !== 200) throw Error(body.message);

        if (response.status === 200) {
          return body;
        } else if ( response.status === 400) {
          alert('not found');
        } else {
          alert('something went wrong');
        }
      };

    requestRates = function requestRates(baseRate) {
      console.log('resuested new rates', baseRate)

      this.callApi(this.props.state.from.currency)
      .then(res => {
        this.props.setRate(res.rates[this.props.state.to.currency]);
      })
      .catch(err => console.log(err));
    };

      componentDidUpdate(prevProps) {
        if (this.props.state.from.currency !== prevProps.state.from.currency) {
          this.requestRates();
          this.setState({ fromCurrency:this.props.state.from.currency, toCurrency:this.props.state.to.currency })
        }
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }

    render () {
        return (
            <div>
              <TopContainer>
              <FromCurrency from={this.props.state.from.currency} rate={this.props.state.rate} />
              </TopContainer>
              <MiddleContainer>
              <Swap from={this.props.state.from.currency} to={this.props.state.to.currency} />
                <Rate
                  from={this.props.state.from.currency}
                  to={this.props.state.to.currency}
                  rate={this.props.state.rate}/>
              </MiddleContainer>
              <BottomContainer>
                <ToCurrency to={this.props.state.to.currency} rate={this.props.state.rate} toValue={this.props.state.toValue} />
                <ExchangeButton
                  from={this.props.state.from.currency}
                  to={this.props.state.to.currency} />
              </BottomContainer>
            </div>
        )
    }
}

const Exchange = connect(mapStateToProps, mapDispatchToProps)(connectedExchange);

export default Exchange;
