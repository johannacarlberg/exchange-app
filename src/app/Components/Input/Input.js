import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  Indicator,
  InputContainer,
  Container
} from './Input.styles';

const InputBox = ({ value, indicator, onChange }) => {
  const dynamicWidth = value ? `${value.length * 20}px` : '20px';
  return (
    <Container>
      {value && <Indicator>{indicator}</Indicator> }
      <InputContainer width={dynamicWidth}>
        <Input onChange={onChange} value={value} placeholder="0"/>
      </InputContainer>
    </Container>
  );
};

InputBox.defaultProps = {
  value: '',
};

InputBox.propTypes = {
  value: PropTypes.string,
  indicator: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputBox;

