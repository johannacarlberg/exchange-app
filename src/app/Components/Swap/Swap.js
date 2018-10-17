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
  const {from, to} = store.getState();

  const swapCurrencies = () => {
    props.swapCurrencies({from: from, to: to});
  }

  return <Button onClick={swapCurrencies} />
};

const Swap = connect(null, mapDispatchToProps)(ConnectedSwap);
export default Swap;
