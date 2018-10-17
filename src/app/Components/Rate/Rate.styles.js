import styled from 'styled-components';
import { WHITE, BLUE, LIGHT_GRAY } from '../../../utils/styles.constants';

export const LiveRates = styled.p`
  font-size: 14px;
  color: ${BLUE};
  display: inline-block;
  border-radius: 15px;
  background: ${WHITE};
  margin: 5px;
  padding: 5px;
  border: 2px solid ${LIGHT_GRAY};
  &:before {
    content: '\\21DD';
  }
`;
