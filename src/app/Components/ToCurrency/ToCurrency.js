import React from 'react';
import PropTypes from 'prop-types';
import { CURRENCIES } from '../../../utils/constants';
import { connect } from "react-redux";
import { setToCurrency, setFromCurrency } from "../../../utils/actions";
import { BalanceText, Input, Indicator } from './styles'

const mapStateToProps = state => {
  return {state}
};

const mapDispatchToProps = dispatch => {
  return {
    setToCurrency: toCurrency => dispatch(setToCurrency(toCurrency)),
    setFromCurrency: fromCurrency => dispatch(setFromCurrency(fromCurrency))
  };
};

const ConnectedToCurrency = (props) => {
  function handleChange(event) {
    props.setToCurrency(event.target.value);
    if(event.target.value === props.state.fromCurrency){
      props.setFromCurrency(props.state.toCurrency);
    }
  }

  function updateInputValue(event) {
    console.log(event.target.value)
    props.state.value = event.target.value;
  }

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
      <Indicator /> 
      <Input type="number" placeholder="0" onChange={updateInputValue}  name="currency"></Input>
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
