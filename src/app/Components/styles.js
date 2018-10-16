import styled from 'styled-components';

export const LiveRates = styled.p`
  font-size: 14px;
  color: #4c6eb2;
  display: inline-block;
  border-radius: 15px;
  background: #ffffff;
  margin: 5px;
  padding: 5px;
  border: 2px solid #f4f5f7;
  &:before {
    content: '\\21DD';
  }
`;

export const SwapButton = styled.button`
  border: none;
  border-radius: 10px;
  border: 2px solid #f4f5f7;
  background: #ffffff;
  font-size: 15px;
  color: #4c6eb2;

  &:before {
    content: '\\2195';
  }
`;

export const Button = styled.button`
  background: ${props => props.primary ? "#eb008d" : "#fff"};
  color: ${props => props.primary ? "#fff" : "#eb008d"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid #eb008d;
  border-radius: 20px;
  width: 80%;
  display: block;
  margin: auto;
  box-shadow: 0 5px 5px rgba(235,0,141, 0.4);
`;

export const TopContainer = styled.div`
  background: #fff;
  margin:0;
  height: 100px
  padding: 8px 16px;
`

export const MiddleContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 135px;
  width: 100%;
  text-align: center;
`

export const BottomContainer = styled.div`
  background: #f4f5f7;
  margin: 0;
  padding: 21px 16px;
`
