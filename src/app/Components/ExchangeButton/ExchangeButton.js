import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import store from '../../../utils/store';
import { updateFromBalance, updateToBalance, updateStatement } from '../../../utils/actions';
import Button from './ExchangeButton.styles';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  updateFromBalance: balances => dispatch(updateFromBalance(balances)),
  updateToBalance: balances => dispatch(updateToBalance(balances)),
  updateStatement: balances => dispatch(updateStatement(balances)),
});

const ConnectedExchangeButton = (props) => {
  const {
    fromValue,
    toValue,
    from,
    to,
  } = store.getState();

  function onClick(e) {
    e.preventDefault();
    const fromBalance = Number(from.balance) - Number(fromValue);
    const toBalance = Number(to.balance) + Number(toValue);

    props.updateFromBalance({
      currency: from,
      fromBalance,
    });

    props.updateToBalance({
      currency: to,
      toBalance,
    });

    props.updateStatement({
      fromCurrency: from.currency,
      fromBalance,
      toCurrency: to.currency,
      toBalance,
    });
  }

  const insufficientCurrency = from.balance < fromValue;
  const noAmount = !fromValue || fromValue < 0.1;

  return (
    <Button onClick={onClick} disabled={insufficientCurrency || noAmount}>
      Exchange
    </Button>
  );
};

ConnectedExchangeButton.propTypes = {
  updateToBalance: PropTypes.func.isRequired,
  updateFromBalance: PropTypes.func.isRequired,
  updateStatement: PropTypes.func.isRequired,
};

const ExchangeButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedExchangeButton);

export default ExchangeButton;
