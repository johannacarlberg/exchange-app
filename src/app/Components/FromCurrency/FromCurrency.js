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
import Balance from '../Balance/Balance';
import { ExchangeInputsContainer, SelectInputContainer, StyledSelectInput } from './FromCurrency.styles';

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
    props.setFromCurrency({ currency: event.target.value, balance: statement[event.target.value] });

    if (fromValue) {
      props.setToValue(Number(fromValue * props.rate).toFixed(2));
    }

    if (event.target.value === to.currency) {
      props.setToCurrency({currency: from.currency, balance: statement[from.currency]});
    }
  };

  const updateInputValue = (event) => {
    props.setFromValue(event.target.value);
    props.setToValue(Number(event.target.value * props.rate).toFixed(2));
  };

  const currency = CURRENCIES.find(exchange => exchange.code === from.currency);

  return (
    <div>
      <ExchangeInputsContainer>
        <SelectInputContainer>
          <StyledSelectInput onChange={handleChange} value={from.currency}>
            {CURRENCIES.map(exchange =>(
              <option key={exchange.code} value={exchange.code}>
                {exchange.code}
              </option>
            ))}
          </StyledSelectInput>
        </SelectInputContainer>
        <Input value={fromValue} onChange={updateInputValue} indicator="-" />
      </ExchangeInputsContainer>
      <Balance
        insufficientCurrency={from.balance < fromValue}
        symbol={currency.symbol}
        balance={Number(from.balance).toFixed(2)}
      />
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
