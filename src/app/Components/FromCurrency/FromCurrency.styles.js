import styled from 'styled-components';

export const ExchangeInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledSelectInput = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  -o-appearance: none;
  appearance: none;
  background: none;
  border: none;
  font-size: 1.5rem;
`;

export const SelectInputContainer = styled.div`
  float: left;
  &:after {
    content: "\\2304";
    font-size: 1.5rem;
    margin-top: -5px;
  }
`;
