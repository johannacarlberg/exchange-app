import styled from 'styled-components';
import { PINK } from '../../../utils/styles.constants';

export const InfoArea = styled.div`
  display: block;
`;

export const MinimumAmount = styled.p`
  color: ${PINK};
  font-size: 12px;
  float: right;
  display: ${props => props.isBelowMinimum ? 'inline-block' : 'none'};
`;
