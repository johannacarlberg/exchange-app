import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { CURRENCIES } from '../../../utils/constants';
import { setFromCurrency, setToCurrency } from "../../../utils/actions";
import { BalanceText, Input } from '../styles.js'

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
      setFromCurrency: fromCurrency => dispatch(setFromCurrency(fromCurrency)),
      setToCurrency: toCurrency => dispatch(setToCurrency(toCurrency)),
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
    props.state.value = event.target.value;
   }

  props.state.currency = CURRENCIES.find(el=> {return el.code === props.state.fromCurrency}) 


    return (
      <div>
        <select onChange={handleChange} value={props.state.fromCurrency}>
          {CURRENCIES.map(currency =>
            <option key={currency.code} value={currency.code}>
              {currency.code}
            </option>
            )}
        </select>
        <Input type="number" placeholder='0' onChange={updateInputValue} name="currency"></Input>
        <BalanceText>Balance: {props.state.currency.symbol}{Number(props.state.currency.balance).toFixed(2)}</BalanceText>
      </div>
    )
}

FromCurrencyConnected.defaultProps = {
  value: 0
};
  
FromCurrencyConnected.propTypes = {    
  fromCurrency: PropTypes.string.isRequired,
  value: PropTypes.number,
};

const FromCurrency = connect(mapStateToProps, mapDispatchToProps)(FromCurrencyConnected);

export default FromCurrency;
