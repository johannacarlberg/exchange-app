import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CURRENCIES } from '../../../utils/constants';
import store from '../../../utils/store';
import {
  setToCurrency,
  setFromCurrency,
  setToValue,
  setFromValue,
} from '../../../utils/actions';
import Input from '../Input/Input';
import Balance from '../Balance/Balance';

// TODO REFACTOR AND PULL THIS OUT
import { ExchangeInputsContainer, SelectInputContainer, StyledSelectInput } from '../FromCurrency/FromCurrency.styles';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setToCurrency: toCurrency => dispatch(setToCurrency(toCurrency)),
  setFromCurrency: fromCurrency => dispatch(setFromCurrency(fromCurrency)),
  setFromValue: fromValue => dispatch(setFromValue(fromValue)),
  setToValue: toValue => dispatch(setToValue(toValue)),
});

const ConnectedToCurrency = (props) => {
  const { from, to, toValue, statement } = store.getState();

  function handleChange(event) {
    props.setToCurrency({currency: event.target.value, balance: statement[event.target.value]});
    if(toValue) props.setFromValue(Number(toValue * props.rate).toFixed(2));

    if(event.target.value === from.currency){
      props.setFromCurrency({currency: to.currency, balance: statement[to.currency]});
    }
  }

  function updateInputValue(event) {
    props.setToValue(event.target.value);
    props.setFromValue(Number(event.target.value * 1 / props.rate).toFixed(2));
  }

  const currency = CURRENCIES.find(exchange => exchange.code === to.currency);

  return (
    <div>
      <ExchangeInputsContainer>
        <SelectInputContainer>
          <StyledSelectInput onChange={handleChange} value={to.currency}>
            {CURRENCIES.map(exchange => (
              <option key={exchange.code} value={exchange.code}>
                {exchange.code}
              </option>
            ))}
          </StyledSelectInput>
        </SelectInputContainer>
        <Input value={toValue} onChange={updateInputValue} indicator="+" />
      </ExchangeInputsContainer>
      <Balance symbol={currency.symbol} balance={to.balance} />
    </div>
  );
};

ConnectedToCurrency.defaultProps = {
  rate: 0,
};

ConnectedToCurrency.propTypes = {
  rate: PropTypes.number,
};

const ToCurrency = connect(mapStateToProps, mapDispatchToProps)(ConnectedToCurrency);

export default ToCurrency;
