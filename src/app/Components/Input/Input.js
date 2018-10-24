import React from 'react';
import PropTypes from 'prop-types';
import {
  Input,
  InputContainer,
  Container,
} from './Input.styles';

const InputBox = ({ value, indicator, onChange, onKeyDown }) => {
  const dynamicWidth = value ? `${value.length * 20}px` : '20px';
  return (
    <Container>
      {value && <span>{indicator}</span>}
      <InputContainer width={dynamicWidth}>
        <Input onChange={onChange} onKeyDown={onKeyDown} value={value} placeholder="0" />
      </InputContainer>
    </Container>
  );
};

InputBox.defaultProps = {
  value: undefined,
};

InputBox.propTypes = {
  value: PropTypes.number,
  indicator: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};

export default InputBox;
