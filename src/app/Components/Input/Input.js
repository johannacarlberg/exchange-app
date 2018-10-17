import React from 'react';
import { Input, Indicator, InputContainer } from './Input.styles';

const InputBox = (props) => {
  return (
    <InputContainer> 
    {/*{props.value && <Indicator>{props.indicator}</Indicator> }*/}
    <Input onChange={props.onChange} value={props.value} placeholder="0"/>
  </InputContainer>
  )
};

export default InputBox;
