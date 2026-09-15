import styled from 'styled-components';

import { layoutStyles } from '@components/Flex';
import { textStyles } from '@components/Typography';

import type { StyledParagraphProps } from './types';

export const StyledParagraph = styled.p<StyledParagraphProps>`
  font-size: ${({ theme, $size = 'md' }) => theme.fontSizes[$size]};
  font-weight: ${({ $weight = 400 }) => $weight};
  color: ${({ theme, $color = 'text' }) => theme.colors[$color]};
  ${({ $align }) => $align && `text-align: ${$align};`}
  ${layoutStyles}
  ${textStyles}
`;
