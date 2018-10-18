import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCIES } from '../../../utils/constants';
import LiveRates from './Rate.styles';

const Rate = ({ from, to, rate }) => {
  const fromCurrency = CURRENCIES.find(exchange => exchange.code === from);
  const toCurrency = CURRENCIES.find(exchange => exchange.code === to);
  return <LiveRates>{` ${fromCurrency.symbol}1 = ${toCurrency.symbol}${Number(rate).toFixed(4)}`}</LiveRates>
};

Rate.defaultProps = {
  rate: 0,
};

Rate.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  rate: PropTypes.number,
};

export default Rate;
