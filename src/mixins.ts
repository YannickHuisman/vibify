import { css } from 'styled-components';

import { theme } from '@/theme';

export const belowMobile = `@media (max-width: ${theme.breakpoints.mobile - 1}px)`;
export const fromMobile = `@media (min-width: ${theme.breakpoints.mobile}px)`;

export const reducedMotion = css`
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    animation: none;
  }
`;

export const buttonReset = css`
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  cursor: pointer;
`;

export const iconButton = css`
  ${buttonReset}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.pill};
`;

export const cardSurface = css`
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.card};
`;

export const pageContainer = css`
  width: 100%;
  max-width: ${({ theme }) => theme.layout.contentWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.layout.mainPadding};
`;
