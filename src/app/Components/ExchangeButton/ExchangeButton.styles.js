import styled from 'styled-components';

export const Button = styled.button`
  background: ${props => props.disabled ? '#e29ec7' : '#eb008d'};
  color: #fff;
  font-size: 1em;
  padding: 0.25em 1em;
  border: ${props => props.disabled ? '2px solid #e29ec7': '2px solid #eb008d'};
  border-radius: 20px;
  width: 80%;
  display: block;
  margin: auto;
  box-shadow: 0 5px 5px rgba(235,0,141, 0.4);
`;
