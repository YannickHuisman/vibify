import { css } from 'styled-components';

import { belowMobile } from '@/mixins';
import type { Theme } from '@/theme';

export interface LayoutProps {
  $gap?: keyof Theme['space'];
  $align?: string;
  $justify?: string;
  $wrap?: boolean;
  $minWidth?: string;
  $hideBelowMobile?: boolean;
}

export const layoutStyles = css<LayoutProps>`
  ${({ $gap, theme }) => $gap && `gap: ${theme.space[$gap]};`}
  ${({ $align }) => $align && `align-items: ${$align};`}
  ${({ $justify }) => $justify && `justify-content: ${$justify};`}
  ${({ $wrap }) => $wrap && 'flex-wrap: wrap;'}
  ${({ $minWidth }) => $minWidth && `min-width: ${$minWidth};`}
  ${({ $hideBelowMobile }) =>
    $hideBelowMobile &&
    `
      ${belowMobile} {
        display: none;
      }
    `}
`;
