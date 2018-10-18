import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import store from '../../../utils/store';
import { updateFromBalance, updateToBalance } from '../../../utils/actions';
import Button from './ExchangeButton.styles';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  updateFromBalance: balances => dispatch(updateFromBalance(balances)),
  updateToBalance: balances => dispatch(updateToBalance(balances)),
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
    props.updateFromBalance({
      currency: from,
      from: Number(from.balance),
      to: Number(fromValue),
    });
    props.updateToBalance({
      currency: to,
      from: Number(to.balance),
      to: Number(toValue),
    });
  }

  const insufficientCurrency = from.balance < fromValue;
  const noAmount = !fromValue || fromValue <= 0;

  return (
    <Button onClick={onClick} disabled={insufficientCurrency || noAmount}>
      Exchange
    </Button>
  );
};

ConnectedExchangeButton.propTypes = {
  updateToBalance: PropTypes.func.isRequired,
  updateFromBalance: PropTypes.func.isRequired,
};

const ExchangeButton = connect(mapStateToProps, mapDispatchToProps)(ConnectedExchangeButton);

export default ExchangeButton;
