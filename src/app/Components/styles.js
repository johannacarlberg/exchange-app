import styled from 'styled-components';

export const BalanceText = styled.p`
  font-size: 12px;
  color: ${props => props.overDraft ? '#f44250' : '#535456'};
`;

export const LiveRates = styled.p`
  font-size: 14px;
  color: #4c6eb2;
  display: inline-block;
  border-radius: 10px;
  background: #ffffff;
  margin: 5px;
  padding: 5px;
  border: #535456;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  font-size: 25px;
  color: "palevioletred";
  background: none;
  border: none;
`;

export const SwapButton = styled.button`
  border: none;
  border-radius: 10px;
  background: #ffffff;
  color: #4c6eb2;
`;
