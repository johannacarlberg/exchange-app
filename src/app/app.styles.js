import styled, { injectGlobal } from 'styled-components';
import { LIGHT_GRAY } from '../utils/styles.constants';

injectGlobal`
  body {
    min-width: 320px;
  }
`;

export const Container = styled.div`
  position: relative;
  background: ${LIGHT_GRAY};
  border: 1px solid #bbb;
  width: 320px;
  margin: 100px auto 0;
  border-radius: 20px;
  font-family: "Futura New", Futura, Avenir, sans-serif;
`;

export const Headline = styled.h1`
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
  padding: 16px 0 0;
`;

export const ExchangeInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
