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

export const ConnectedExchangeButton = (props) => {
  const {
    toValue,
    from,
    to,
  } = store.getState();

  function onClick(e) {
    e.preventDefault();
    const fromBalance = Number(from.balance) - Number(props.fromValue);
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

  const insufficientCurrency = from.balance < props.fromValue;
  const noAmount = !props.fromValue || props.fromValue < 0.1;

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
  fromValue: PropTypes.string,
};

ConnectedExchangeButton.defaultProps = {
  fromValue: undefined,
};

const ExchangeButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedExchangeButton);

export default ExchangeButton;
