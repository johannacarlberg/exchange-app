import React from 'react';
import { connect } from 'react-redux';

import { setRate } from '../../../utils/actions';
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

export class ConnectedExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: { currency: 'GBP' },
      to: { currency: 'EUR' },
    };
  }

  componentDidMount() {
    this.requestRates(this.props.state.from.currency);
  }

  timeout = setInterval(() => {
    this.requestRates(this.props.state.from.currency);
  }, POLL);

  async callApi(baseRate){
    const response = await fetch('/api/rates/' + baseRate);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  requestRates = () => {
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
          <Swap from={this.props.state.from.currency} to={this.props.state.to.currency} toValue={this.props.state.toValue} fromValue={this.props.state.fromValue} rate={this.props.state.rate} />
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

ConnectedExchange.propTypes = {
  setRate: PropTypes.func.isRequired,
};

const Exchange = connect(mapStateToProps, mapDispatchToProps)(ConnectedExchange);

export default Exchange;
