import styled from 'styled-components';
import { PINK, DARK_GRAY } from '../../../utils/styles.constants';

export const BalanceText = styled.p`
  font-size: 12px;
  color: ${props => props.insufficientCurrency ? PINK : DARK_GRAY};
`;
