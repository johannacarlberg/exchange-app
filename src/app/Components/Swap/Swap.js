import React from 'react';
import { connect } from 'react-redux';
import { swapCurrencies } from '../../../utils/actions';
import { Button } from './Swap.styles';

const mapDispatchToProps = dispatch => {
  return {
    swapCurrencies: currencies => dispatch(swapCurrencies(currencies)),
  };
};

const ConnectedSwap = (props) => {
  const swapCurrencies = () => {
      props.swapCurrencies({from: props.fromCurrency, to: props.toCurrency});
  };
      return(<Button onClick={swapCurrencies}></Button>)
};

const Swap = connect(null, mapDispatchToProps)(ConnectedSwap);
export default Swap;
