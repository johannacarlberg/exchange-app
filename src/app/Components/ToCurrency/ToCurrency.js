import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCIES } from '../../../utils/constants';
import { connect } from "react-redux";
import { setToCurrency, setFromCurrency, setToValue, setFromValue } from "../../../utils/actions";
import Input from '../Input/Input';
import { BalanceText } from './styles'

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
  function handleChange(event) {
    console.log('called 1')
    props.setToCurrency(event.target.value);
    if(event.target.value === props.state.fromCurrency){
      props.setFromCurrency(props.state.toCurrency);
    }
  }

  function updateInputValue(event) {
    console.log(event.target.value)
    props.state.toValue = event.target.value;

    console.log(event.target.value)
    props.setToValue(event.target.value);
    props.setFromValue(event.target.value * 1/props.rate);
  }


  // const input = props.state.fromValue;
  // const rate = props.rate;

  // props.state.toValue = Number(rate*input).toFixed(2);
  const currency = CURRENCIES.find(el=> {return el.code === props.state.toCurrency}) 

  return (
    <div>
      <select onChange={handleChange} value={props.state.toCurrency}>
        {
          CURRENCIES.map(currency =>
          <option key={currency.code} value={currency.code}>
            {currency.code}
          </option>
          )}
      </select> 
      <Input value={props.state.toValue} onChange={updateInputValue} indicator='+'></Input>
      <BalanceText overDraft={currency.balance < props.state.value}>Balance: {currency.symbol}{Number(currency.balance).toFixed(2)}</BalanceText>
    </div>
  )
}

ConnectedToCurrency.defaultProps = {
    value: 0
  };
  
  ConnectedToCurrency.propTypes = {
    toCurrency: PropTypes.string.isRequired,
    value: PropTypes.number,
  };

  const ToCurrency = connect(mapStateToProps, mapDispatchToProps)(ConnectedToCurrency);

  export default ToCurrency;
