import styled from 'styled-components';

export const BalanceText = styled.p`
  font-size: 12px;
  color: ${props => props.insufficientCurrency ? '#f44250' : '#535456'};
`;

export const Input = styled.input`
  padding: 0.5em;
  font-size: 25px;
  color: "palevioletred";
  background: none;
  border: none;

  &:focus{
    border: none;
  }
`;

export const Indicator = styled.i`
  display: inline-block;
  margin-left: 20px;
  font-size: 22px;
`;
