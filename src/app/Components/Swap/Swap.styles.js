import styled from 'styled-components';
import { WHITE, BLUE, LIGHT_GRAY } from '../../../utils/styles.constants';

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  border: 2px solid ${LIGHT_GRAY};
  background: ${WHITE};
  color: ${BLUE};
  font-size: 15px;

  &:before {
    content: '\\2195';
  }
`;
