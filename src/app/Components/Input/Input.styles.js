import styled from 'styled-components';
import { DARK_GRAY } from '../../../utils/styles.constants';

export const InputContainer = styled.div`
// TODO do this 
  &::before {
    content: '-';
  }
`;

export const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  border: none;
  text-align: right;
  background: none;
  font-size: 2rem;
  outline: none;
  width: 200px;
  color: ${DARK_GRAY};
`;

export const Indicator = styled.i`

`;
