import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";

import { CURRENCIES } from '../../../utils/constants';
import { setFromCurrency, setToCurrency, setFromValue, setToValue } from "../../../utils/actions";
import Input from '../Input/Input';
import { BalanceText } from './styles'

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
  function handleChange(event) {
    props.setFromCurrency(event.target.value);
    if(event.target.value === props.state.toCurrency){
      props.setToCurrency(props.state.fromCurrency);
    }
  } 

  function updateInputValue(event) {
    props.setFromValue(event.target.value);
    props.setToValue(Number(event.target.value * props.rate).toFixed(2));
   }

  props.state.currency = CURRENCIES.find(el=> {return el.code === props.state.fromCurrency}) 
  const insufficientCurrency = props.state.currency.balance < props.state.fromValue;


    return (
      <div>
        <select onChange={handleChange} value={props.state.fromCurrency}>
          {CURRENCIES.map(currency =>
            <option key={currency.code} value={currency.code}>
              {currency.code}
            </option>
            )}
        </select>
        <Input value={props.state.fromValue} onChange={updateInputValue} indicator='-'/>
        <BalanceText insufficientCurrency={insufficientCurrency}>Balance: {props.state.currency.symbol}{Number(props.state.currency.balance).toFixed(2)}</BalanceText>
      </div>
    )
}

FromCurrencyConnected.propTypes = {    
  fromCurrency: PropTypes.string.isRequired,
  rate: PropTypes.number,
};

FromCurrencyConnected.defaultProps = {    
  rate: 0,
};


const FromCurrency = connect(mapStateToProps, mapDispatchToProps)(FromCurrencyConnected);

export default FromCurrency;
