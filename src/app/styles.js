import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body {
    background: #fafafa;
  }
`
export const Container = styled.div`
  position: relative;
  background: #fff;
  max-width: 380px;
  margin: 0 auto;
  border-radius: 5px;
  font-family: "Futura New", Futura, Avenir, sans-serif;
`;

export const Headline = styled.h1`
  font-size: 1rem;
  font-weight: 100;
  text-align: center;
`
