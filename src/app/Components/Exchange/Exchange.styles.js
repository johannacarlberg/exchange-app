import styled from 'styled-components';
import { WHITE, LIGHT_GRAY } from '../../../utils/styles.constants';

export const TopContainer = styled.div`
  background: ${WHITE};
  margin: 0;
  height: 100px
  padding: 8px 16px;
`;

export const MiddleContainer = styled.div`
  display: inline-block;
  position: absolute;
  top: 135px;
  width: 100%;
  text-align: center;
`;

export const BottomContainer = styled.div`
  background: ${LIGHT_GRAY};
  margin: 0;
  padding: 21px 16px;
`;
