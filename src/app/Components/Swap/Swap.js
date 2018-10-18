import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../../utils/store';
import { swapCurrencies, setToValue, setFromValue } from '../../../utils/actions';
import Button from './Swap.styles';

const mapDispatchToProps = dispatch => ({
  swapCurrencies: currencies => dispatch(swapCurrencies(currencies)),
  setFromValue: fromValue => dispatch(setFromValue(fromValue)),
  setToValue: toValue => dispatch(setToValue(toValue)),
});

const mapStateToProps = state => state;

const ConnectedSwap = (props) => {
  const { from, to } = store.getState();

  const onclick = () => {
    props.swapCurrencies({ from, to });

    if (props.fromValue) {
      props.setToValue(Number(props.fromValue * 1 / props.rate).toFixed(2));
    }
  };
  return (<Button onClick={onclick} />);
};

ConnectedSwap.propTypes = {
  rate: PropTypes.number,
  fromValue: PropTypes.string,
  swapCurrencies: PropTypes.func.isRequired,
  setToValue: PropTypes.func.isRequired,
};

ConnectedSwap.defaultProps = {
  rate: 0,
  fromValue: '',
};

const Swap = connect(mapStateToProps, mapDispatchToProps)(ConnectedSwap);
export default Swap;
