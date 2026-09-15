import styled from 'styled-components';

import { FlexRow } from '@components/Flex';
import { iconButton } from '@/mixins';

export const StyledTopBar = styled.header`
  grid-area: topbar;
  position: sticky;
  top: 0;
  z-index: 30;
  height: ${({ theme }) => theme.layout.topBarHeight};
  box-shadow: ${({ theme }) => theme.shadows.bar};
  background: ${({ theme }) => theme.colors.topBar};
  color: ${({ theme }) => theme.colors.topBarText};
`;

export const StyledTopBarInner = styled(FlexRow)`
  width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space.md};
  height: 100%;
`;

export const StyledMenuButton = styled.button`
  ${iconButton}
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  color: inherit;

  &:hover {
    background: ${({ theme }) => theme.colors.topBarHover};
  }
`;

export const StyledWordmark = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 700;
  letter-spacing: -0.02em;
`;

export const StyledAccent = styled.span`
  color: ${({ theme }) => theme.colors.ink};
`;
