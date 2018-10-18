import React from 'react';
import PropTypes from 'prop-types';
import { BalanceText } from './Balance.styles';

const Balance = ({ symbol, balance, insufficientCurrency }) => (
  <BalanceText insufficientCurrency={insufficientCurrency}>
    {' '}
Balance:
    {symbol}
    {Number(balance).toFixed(2)}
  </BalanceText>
);


Balance.propTypes = {
  symbol: PropTypes.string.isRequired,
  balance: PropTypes.number,
  insufficientCurrency: PropTypes.bool,
};

Balance.defaultProps = {
  balance: 0,
  insufficientCurrency: false,
};
export default Balance;
