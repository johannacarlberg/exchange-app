import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputContainer,
  Container,
} from './Input.styles';

const InputBox = ({ value, indicator, onChange }) => {
  const dynamicWidth = value ? `${value.length * 20}px` : '20px';
  return (
    <Container>
      {value && <span>{indicator}</span>}
      <InputContainer width={dynamicWidth}>
        <Input type="text" pattern="[0-9.]*" onChange={onChange} value={value} placeholder="0" />
      </InputContainer>
    </Container>
  );
};

InputBox.defaultProps = {
  value: null,
};

InputBox.propTypes = {
  value: PropTypes.number,
  indicator: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputBox;
