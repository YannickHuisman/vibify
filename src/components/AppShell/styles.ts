import styled, { css } from 'styled-components';

import { fromMobile, pageContainer, reducedMotion } from '@/mixins';

export const StyledShell = styled.div<{ $open: boolean; $auto: boolean; $animate: boolean }>`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    'topbar topbar'
    'sidebar main';
  grid-template-rows: auto 1fr;
  grid-template-columns: 0 1fr;

  ${({ $auto, theme }) =>
    $auto &&
    css`
      ${fromMobile} {
        grid-template-columns: ${theme.layout.sidebarWidth} 1fr;
      }
    `}

  ${({ $auto, $open, theme }) =>
    !$auto &&
    $open &&
    css`
      ${fromMobile} {
        grid-template-columns: ${theme.layout.sidebarWidth} 1fr;
      }
    `}

  transition: ${({ $animate, theme }) =>
    $animate ? `grid-template-columns ${theme.durations.base} ease` : 'none'};
  ${reducedMotion}
`;

export const StyledMain = styled.main`
  ${pageContainer}
  grid-area: main;
  min-width: 0;
  padding-top: ${({ theme }) => theme.space.xxl};
  padding-bottom: ${({ theme }) => theme.space.xxl};
`;
