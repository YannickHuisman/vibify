import styled from 'styled-components';

import { type LayoutProps, layoutStyles } from './layout';

export const StyledFlexRow = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  ${layoutStyles}
`;

export const StyledFlexCol = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  ${layoutStyles}
`;
