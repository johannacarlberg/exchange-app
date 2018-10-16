import React from 'react';
import PropTypes from 'prop-types';
import { Input, Indicator } from '../FromCurrency/styles'

const InputBox = (props) => {
  const b = 'hi';
  console.log(b)
  return (
    <div> 
    <Indicator>{props.indicator}</Indicator> 
    <Input onChange={props.onChange} value={props.value} placeholder="0"/>
  </div>
  )
};

InputBox.defaultProps = {
  };
  
  InputBox.propTypes = {

  };

export default InputBox;
