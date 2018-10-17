import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CURRENCIES } from '../../../utils/constants';
import store from '../../../utils/store';
import { setFromCurrency, setToCurrency, setFromValue, setToValue } from '../../../utils/actions';
import Input from '../Input/Input';
import Balance from '../Balance/Balance';
import { ExchangeInputsContainer, SelectInputContainer, StyledSelectInput } from './FromCurrency.styles';

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
      setFromCurrency: fromCurrency => dispatch(setFromCurrency(fromCurrency)),
      setToCurrency: toCurrency => dispatch(setToCurrency(toCurrency)),
      setFromValue: fromValue => dispatch(setFromValue(fromValue)),
      setToValue: toValue => dispatch(setToValue(toValue)),
  };
};

const FromCurrencyConnected = (props) => {
  const {fromCurrency, toCurrency, fromValue, fromBalance, rate} = store.getState();

  function handleChange(event) {
    props.setFromCurrency(event.target.value);

    if(event.target.value === toCurrency){
      props.setToCurrency(fromCurrency);
    }
  } 

  function updateInputValue(event) {
    props.setFromValue(event.target.value);
    props.setToValue(Number(event.target.value * rate).toFixed(2));
   }

  const currency = CURRENCIES.find(el=> {return el.code === fromCurrency});

    return (
      <div>
        <ExchangeInputsContainer>
          <SelectInputContainer>
            <StyledSelectInput onChange={handleChange} value={fromCurrency}>
              {CURRENCIES.map(currency =>
                <option key={currency.code} value={currency.code}>
                  {currency.code}
                </option>
                )}
            </StyledSelectInput>
          </SelectInputContainer>
          <Input value={fromValue} onChange={updateInputValue} indicator='-'/>
        </ExchangeInputsContainer>
        <Balance insufficientCurrency={fromBalance < fromValue} symbol={currency.symbol} balance={Number(fromBalance).toFixed(2)} />
      </div>
    )
};

FromCurrencyConnected.propTypes = {    
  fromCurrency: PropTypes.string.isRequired,
  rate: PropTypes.number,
};

FromCurrencyConnected.defaultProps = {    
  rate: 0,
};


const FromCurrency = connect(mapStateToProps, mapDispatchToProps)(FromCurrencyConnected);

export default FromCurrency;
