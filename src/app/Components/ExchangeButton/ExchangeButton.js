import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { CURRENCIES } from '../../../utils/constants';
import { setFromValue } from "../../../utils/actions";
import { Button } from '../styles.js'

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
      setFromValue: fromValue => dispatch(setFromValue(fromValue)),
  };
};

const ConnectedExchangeButton = (props) => {
  console.log('toCurrency', props.state.toCurrency);
  console.log('fromCurrency', props.state.fromCurrency);

  function onClick(e) {
    e.preventDefault();
    console.log('clicked')
  }
  props.state.currency = CURRENCIES.find(el=> {return el.code === props.state.fromCurrency}) 


const insufficientCurrency = props.state.currency.balance < props.state.fromValue;
const noAmount = !props.state.fromValue || props.state.fromValue <= 0;

  return (<Button primary onClick={onClick} disabled={insufficientCurrency||noAmount}>Exchange</Button>
    )
};


ConnectedExchangeButton.propTypes = {    
  fromCurrency: PropTypes.string.isRequired
};

const ExchangeButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedExchangeButton);

export default ExchangeButton;
