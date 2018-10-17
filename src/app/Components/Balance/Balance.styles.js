import styled from 'styled-components';

export const BalanceText = styled.p`
  font-size: 12px;
  color: ${props => props.insufficientCurrency ? '#eb008d' : '#535456'};
`;
