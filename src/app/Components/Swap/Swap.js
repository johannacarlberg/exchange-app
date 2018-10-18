import React from 'react';
import { connect } from 'react-redux';
import store from '../../../utils/store';
import { swapCurrencies,setToValue, setFromValue } from '../../../utils/actions';
import Button from './Swap.styles';

const mapDispatchToProps = dispatch => ({
  swapCurrencies: currencies => dispatch(swapCurrencies(currencies)),
  setFromValue: fromValue => dispatch(setFromValue(fromValue)),
  setToValue: toValue => dispatch(setToValue(toValue)),
});

const mapStateToProps = state => state;

const ConnectedSwap = (props) => {
  const {from, to} = store.getState();

  const swapCurrencies = () => {
    props.swapCurrencies({from: from, to: to});

    if(props.fromValue) {
      props.setToValue(Number(props.fromValue* 1/props.rate).toFixed(2));
    }
  }
  return <Button onClick={swapCurrencies} />
};

const Swap = connect(mapStateToProps, mapDispatchToProps)(ConnectedSwap);
export default Swap;
