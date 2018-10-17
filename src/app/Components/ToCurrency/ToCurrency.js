import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CURRENCIES } from '../../../utils/constants';
import store from '../../../utils/store';
import { setToCurrency, setFromCurrency, setToValue, setFromValue } from "../../../utils/actions";
import Input from '../Input/Input';
import Balance from '../Balance/Balance';

// TODO REFACTOR AND PULL THIS OUT
import { ExchangeInputsContainer, SelectInputContainer, StyledSelectInput } from '../FromCurrency/FromCurrency.styles';

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
    setToCurrency: toCurrency => dispatch(setToCurrency(toCurrency)),
    setFromCurrency: fromCurrency => dispatch(setFromCurrency(fromCurrency)),
    setFromValue: fromValue => dispatch(setFromValue(fromValue)),
    setToValue: toValue => dispatch(setToValue(toValue)),
  };
};

const ConnectedToCurrency = (props) => {
  const {fromCurrency, toCurrency, toValue, toBalance} = store.getState();

  function handleChange(event) {
    props.setToCurrency(event.target.value);
    if(event.target.value === fromCurrency){
      props.setFromCurrency(toCurrency);
    }
  }

  function updateInputValue(event) {
    props.setToValue(event.target.value);
    props.setFromValue(Number(event.target.value * 1/props.rate).toFixed(2));
   }

  const currency = CURRENCIES.find(el=> {return el.code === toCurrency});

  return (
    <div>
      <ExchangeInputsContainer>
          <SelectInputContainer>
            <StyledSelectInput onChange={handleChange} value={toCurrency}>
        {
          CURRENCIES.map(currency =>
          <option key={currency.code} value={currency.code}>
            {currency.code}
          </option>
          )}
        </StyledSelectInput>
          </SelectInputContainer>
      <Input value={toValue} onChange={updateInputValue} indicator='+' />
      </ExchangeInputsContainer>
      <Balance symbol={currency.symbol} balance={Number(toBalance).toFixed(2)}/>
    </div>
  )
};

ConnectedToCurrency.defaultProps = {
    value: 0
  };
  
  ConnectedToCurrency.propTypes = {
    toCurrency: PropTypes.string.isRequired,
    value: PropTypes.number,
  };

  const ToCurrency = connect(mapStateToProps, mapDispatchToProps)(ConnectedToCurrency);

  export default ToCurrency;
