import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import store from '../../../utils/store';
import { CURRENCIES } from '../../../utils/constants';
import { setFromValue } from '../../../utils/actions';
import { Button } from './ExchangeButton.styles';

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
      setFromValue: fromValue => dispatch(setFromValue(fromValue)),
  };
};

const ConnectedExchangeButton = (props) => {
  const {fromCurrency, fromValue} = store.getState();

  function onClick(e) {
    e.preventDefault();
    console.log('clicked')
  }
  props.state.currency = CURRENCIES.find(el=> {return el.code === fromCurrency})


  const insufficientCurrency = props.state.currency.balance < fromValue;
  const noAmount = !fromValue || fromValue <= 0;

  return <Button primary onClick={onClick} disabled={insufficientCurrency||noAmount}>Exchange</Button>;
};


ConnectedExchangeButton.propTypes = {    
  fromCurrency: PropTypes.string.isRequired
};

const ExchangeButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedExchangeButton);

export default ExchangeButton;
