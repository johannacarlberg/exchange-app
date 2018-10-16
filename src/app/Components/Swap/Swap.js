import React from 'react';
import { connect } from "react-redux";
import { swapCurrencies } from "../../../utils/actions";
import { SwapButton } from '../styles.js'

const mapDispatchToProps = dispatch => {
  return {
    swapCurrencies: currencies => dispatch(swapCurrencies(currencies)),
  };
};

const ConnectedSwap = (props) => {
  const swapCurrencies = () => {
      props.swapCurrencies({from: props.fromCurrency, to: props.toCurrency});
  }
      return(<SwapButton onClick={swapCurrencies}></SwapButton>)
};

const Swap = connect(null, mapDispatchToProps)(ConnectedSwap);
export default Swap;