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
import Select from '../Select/Select';
import Balance from '../Balance/Balance';
import { ExchangeInputsContainer } from '../../app.styles';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  setToCurrency: toCurrency => dispatch(setToCurrency(toCurrency)),
  setFromCurrency: fromCurrency => dispatch(setFromCurrency(fromCurrency)),
  setFromValue: fromValue => dispatch(setFromValue(fromValue)),
  setToValue: toValue => dispatch(setToValue(toValue)),
});

const ConnectedToCurrency = (props) => {
  const {
    from,
    to,
    toValue,
    statement,
  } = store.getState();

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    props.setToCurrency({
      currency: selectedValue,
      balance: statement[selectedValue],
    });
    if (toValue) props.setFromValue(Number(toValue * props.rate).toFixed(2));

    if (selectedValue === from.currency) {
      props.setFromCurrency({
        currency: to.currency,
        balance: statement[to.currency],
      });
    }
  };

  const updateInputValue = (event) => {
    const inputValue = event.target.value;
    props.setToValue(inputValue);
    props.setFromValue(Number(inputValue * 1 / props.rate).toFixed(2));
  };

  const currency = CURRENCIES.find(exchange => exchange.code === to.currency);

  return (
    <div>
      <ExchangeInputsContainer>
        <Select onChange={handleChange} currency={to} />
        <Input value={toValue} onChange={updateInputValue} indicator={'\u002B'} />
      </ExchangeInputsContainer>
      <Balance symbol={currency.symbol} balance={to.balance} />
    </div>
  );
};

ConnectedToCurrency.propTypes = {
  rate: PropTypes.number,
  setFromValue: PropTypes.func.isRequired,
  setToValue: PropTypes.func.isRequired,
  setFromCurrency: PropTypes.func.isRequired,
  setToCurrency: PropTypes.func.isRequired,
};

ConnectedToCurrency.defaultProps = {
  rate: 0,
};

const ToCurrency = connect(mapStateToProps, mapDispatchToProps)(ConnectedToCurrency);

export default ToCurrency;
