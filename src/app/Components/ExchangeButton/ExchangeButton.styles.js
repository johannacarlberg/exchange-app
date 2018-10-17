import styled from 'styled-components';
import { PINK, PALE_PINK, WHITE } from '../../../utils/styles.constants';

export const Button = styled.button`
  background: ${props => props.disabled ? PALE_PINK : PINK };
  color: ${ WHITE };
  font-size: 1em;
  padding: 0.25em 1em;
  border: ${props => props.disabled ? '2px solid ' + PALE_PINK: '2px solid ' + PINK};
  border-radius: 20px;
  width: 80%;
  display: block;
  margin: auto;
  box-shadow: 0 5px 5px rgba(235,0,141, 0.4);
`;
