import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import store from '../../../utils/store';
import { updateFromBalance, updateToBalance, updateStatement } from '../../../utils/actions';
import { Button } from './ExchangeButton.styles';

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
    updateFromBalance: balances => dispatch(updateFromBalance(balances)),
    updateToBalance: balances => dispatch(updateToBalance(balances)),
    updateStatement: statement => dispatch(updateStatement(statement)),
  };
};

const ConnectedExchangeButton = (props) => {
  const {fromValue, toValue, from, to} = store.getState();
    console.log(props)
  console.log( store.getState())

  function onClick(e) {
    e.preventDefault();
    // const k = {currency: to.currency, newValue: (Number(from.balance)-Number(fromValue))}
    //
    // const k1 = {currency: from.currency, newValue: (Number(to.balance)+Number(toValue))}
    // props.updateStatement({k, k1})

    props.updateFromBalance({currency: from, from: Number(from.balance), to: Number(fromValue)})
    props.updateToBalance({currency: to, from: Number(to.balance), to: Number(toValue)})
  }

  const insufficientCurrency = from.balance < fromValue;
  const noAmount = !fromValue || fromValue <= 0;

  return <Button primary onClick={onClick} disabled={insufficientCurrency||noAmount}>Exchange</Button>;
};


ConnectedExchangeButton.propTypes = {    
  from: PropTypes.string.isRequired
};

const ExchangeButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedExchangeButton);

export default ExchangeButton;
