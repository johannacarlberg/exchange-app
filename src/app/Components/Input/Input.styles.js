import styled from 'styled-components';
import { DARK_GRAY } from '../../../utils/styles.constants';

export const Container = styled.div`
  height: 40px;
`;

export const InputContainer = styled.div`
  width: ${props => props.width}; 
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

export const Indicator = styled.i`
  padding-top:20px;
  display: inline-block;
`;
