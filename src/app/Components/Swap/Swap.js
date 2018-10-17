import React from 'react';
import { connect } from 'react-redux';
import store from '../../../utils/store';
import { swapCurrencies } from '../../../utils/actions';
import { Button } from './Swap.styles';

const mapDispatchToProps = dispatch => {
  return {
    swapCurrencies: currencies => dispatch(swapCurrencies(currencies)),
  };
};

const ConnectedSwap = (props) => {
  const {fromCurrency, toCurrency} = store.getState();

  const swapCurrencies = () => {
      props.swapCurrencies({from: fromCurrency, to: toCurrency});
  };
      return <Button onClick={swapCurrencies} />
};

const Swap = connect(null, mapDispatchToProps)(ConnectedSwap);
export default Swap;
