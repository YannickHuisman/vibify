import { css } from 'styled-components';

export interface TextProps {
  $transform?: 'capitalize' | 'uppercase' | 'lowercase' | 'none';
  $numeric?: boolean;
  $truncate?: boolean;
}

export const textStyles = css<TextProps>`
  ${({ $transform }) => $transform && `text-transform: ${$transform};`}
  ${({ $numeric }) => $numeric && 'font-variant-numeric: tabular-nums;'}
  ${({ $truncate }) =>
    $truncate &&
    `
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;
