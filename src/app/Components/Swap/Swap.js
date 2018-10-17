import React from 'react';
import { connect } from 'react-redux';
import store from '../../../utils/store';
import { swapCurrencies, swapBalances } from '../../../utils/actions';
import { Button } from './Swap.styles';

const mapDispatchToProps = dispatch => {
  return {
    swapCurrencies: currencies => dispatch(swapCurrencies(currencies)),
    swapBalances: balances => dispatch(swapBalances(balances)),
  };
};

const ConnectedSwap = (props) => {
  const {fromCurrency, toCurrency, fromBalance, toBalance } = store.getState();

  const swapCurrencies = () => {
    props.swapCurrencies({from: fromCurrency, to: toCurrency});
    props.swapBalances({from: fromBalance, to: toBalance});
  }

  return <Button onClick={swapCurrencies} />
};

const Swap = connect(null, mapDispatchToProps)(ConnectedSwap);
export default Swap;
