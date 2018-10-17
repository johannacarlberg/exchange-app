import styled from 'styled-components';

export const Button = styled.button`
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
