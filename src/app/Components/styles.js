import styled from 'styled-components';

export const BalanceText = styled.p`
  font-size: 12px;
  color: ${props => props.overDraft ? '#f44250' : '#535456'};
`;

export const LiveRates = styled.p`
  font-size: 14px;
  color: #4c6eb2;
  display: inline-block;
  border-radius: 15px;
  background: #ffffff;
  margin: 5px;
  padding: 5px;
  border: 2px solid #f4f5f7;
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
  border: 2px solid #f4f5f7;
  background: #ffffff;
  font-size: 15px;
  color: #4c6eb2;
  &:before{
    content: '\\2195';
  }
`;

export const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


export const TopContainer = styled.div`
  margin:0;
  height: 150px
`

export const BottomContainer = styled.div`
  background: #f4f5f7;
  margin:0;
  height: 150px;
`
export const MiddleContainer = styled.div`
  top: 191px;
  display: inline-block;
  position: fixed;
`