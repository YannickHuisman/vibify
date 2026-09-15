import styled, { css } from 'styled-components';

import { FlexCol } from '@components/Flex';
import { belowMobile, reducedMotion } from '@/mixins';

export const StyledSidebar = styled.aside<{ $open: boolean }>`
  grid-area: sidebar;
  align-self: start;
  position: sticky;
  top: ${({ theme }) => theme.layout.topBarHeight};
  height: calc(100vh - ${({ theme }) => theme.layout.topBarHeight});
  z-index: 20;
  background: ${({ theme }) => theme.colors.surface};
  overflow: hidden;

  ${belowMobile} {
    position: fixed;
    inset: ${({ theme }) => theme.layout.topBarHeight} 0 0 0;
    width: 100%;
    box-shadow: ${({ theme }) => theme.shadows.bar};
    transition: transform ${({ theme }) => theme.durations.base};
    ${({ $open }) =>
      !$open &&
      css`
        transform: translateX(-100%);
      `}
    ${reducedMotion}
  }
`;

export const StyledSidebarBody = styled(FlexCol)`
  padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.md};
  width: ${({ theme }) => theme.layout.sidebarWidth};

  ${belowMobile} {
    width: 100%;
  }
`;

export const StyledSidebarNote = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.muted};
`;
