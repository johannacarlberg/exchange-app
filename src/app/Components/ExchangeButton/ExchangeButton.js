import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import store from '../../../utils/store';
import { updateFromBalance, updateToBalance } from '../../../utils/actions';
import { Button } from './ExchangeButton.styles';

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
    updateFromBalance: balances => dispatch(updateFromBalance(balances)),
    updateToBalance: balances => dispatch(updateToBalance(balances)),

  };
};

const ConnectedExchangeButton = (props) => {
  const {fromValue, fromBalance, toBalance, toValue} = store.getState();

  function onClick(e) {
    e.preventDefault();
    props.updateFromBalance({from: Number(fromBalance), to:  Number(fromValue)})
    props.updateToBalance({from:  Number(toBalance), to:  Number(toValue)})
  }

  const insufficientCurrency = fromBalance < fromValue;
  const noAmount = !fromValue || fromValue <= 0;

  return <Button primary onClick={onClick} disabled={insufficientCurrency||noAmount}>Exchange</Button>;
};


ConnectedExchangeButton.propTypes = {    
  fromCurrency: PropTypes.string.isRequired
};

const ExchangeButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedExchangeButton);

export default ExchangeButton;
