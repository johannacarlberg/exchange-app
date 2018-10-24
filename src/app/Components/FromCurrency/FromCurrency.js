import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CURRENCIES } from '../../../utils/constants';
import store from '../../../utils/store';
import {
  setFromCurrency,
  setToCurrency,
  setFromValue,
  setToValue,
} from '../../../utils/actions';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Balance from '../Balance/Balance';
import { ExchangeInputsContainer } from '../../app.styles';
import { InfoArea, MinimumAmount } from './FromCurrency.styles';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setFromCurrency: fromCurrency => dispatch(setFromCurrency(fromCurrency)),
  setToCurrency: toCurrency => dispatch(setToCurrency(toCurrency)),
  setFromValue: fromValue => dispatch(setFromValue(fromValue)),
  setToValue: toValue => dispatch(setToValue(toValue)),
});

const FromCurrencyConnected = (props) => {
  const {
    from,
    to,
    fromValue,
    statement,
  } = store.getState();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    props.setFromCurrency({
      currency: selectedValue,
      balance: statement[selectedValue],
    });

    if (fromValue) {
      props.setToValue(Number(fromValue * props.rate).toFixed(2));
    }

    if (selectedValue === to.currency) {
      props.setToCurrency({
        currency: from.currency,
        balance: statement[from.currency],
      });
    }
  };

  const updateInputValue = (event) => {
    const inputValue = event.target.value;
    const formattedInput = Number(inputValue);
    if(!isNaN(formattedInput)){
      props.setFromValue(inputValue);
      props.setToValue(Number(formattedInput * props.rate).toFixed(2));
    }
  };
  const currency = CURRENCIES.find(exchange => exchange.code === from.currency);
  const valueIsBelowMinimum = fromValue > 0.0 && fromValue < 0.1;

  return (
    <div>
      <ExchangeInputsContainer>
        <Select onChange={handleChange} currency={from} />
        <Input value={fromValue} onChange={updateInputValue} indicator={'\u2212'} />
      </ExchangeInputsContainer>
      <InfoArea>
        <Balance
          insufficientCurrency={from.balance < fromValue}
          symbol={currency.symbol}
          balance={Number(from.balance).toFixed(2)}
        />
        <MinimumAmount isBelowMinimum={valueIsBelowMinimum}>Minimum amount is {currency.symbol}0.10</MinimumAmount>
      </InfoArea>
    </div>
  );
};

FromCurrencyConnected.propTypes = {
  rate: PropTypes.number,
  setToValue: PropTypes.func.isRequired,
  setFromValue: PropTypes.func.isRequired,
  setFromCurrency: PropTypes.func.isRequired,
  setToCurrency: PropTypes.func.isRequired,
};

FromCurrencyConnected.defaultProps = {
  rate: 0,
};

const FromCurrency = connect(mapStateToProps, mapDispatchToProps)(FromCurrencyConnected);

export default FromCurrency;
