import React from 'react';
import { connect } from 'react-redux';
import store from '../../../utils/store';
import { swapCurrencies, swapBalances, swapValues } from '../../../utils/actions';
import { Button } from './Swap.styles';

const mapDispatchToProps = dispatch => {
  return {
    swapCurrencies: currencies => dispatch(swapCurrencies(currencies)),
    swapBalances: balances => dispatch(swapBalances(balances)),
    swapValues: values => dispatch(swapValues(values)),
  };
};

const ConnectedSwap = (props) => {
  const {fromCurrency, toCurrency, fromBalance, toBalance, fromValue, toValue} = store.getState();

  const swapCurrencies = () => {
    props.swapCurrencies({from: fromCurrency, to: toCurrency});
    props.swapBalances({from: fromBalance, to: toBalance});
    props.swapValues({from: fromValue, to: toValue});
  }

  return <Button onClick={swapCurrencies} />
};

const Swap = connect(null, mapDispatchToProps)(ConnectedSwap);
export default Swap;
