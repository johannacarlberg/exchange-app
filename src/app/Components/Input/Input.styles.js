import styled from 'styled-components';
import { DARK_GRAY } from '../../../utils/styles.constants';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: ${props => props.width}; 
  max-width: 200px;
  display: block;  
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  border: none;
  text-align: right;
  width: 100%;
  background: none;
  font-size: 2rem;
  outline: none;
  color: ${DARK_GRAY};
`;

Input.displayName = 'Input';
