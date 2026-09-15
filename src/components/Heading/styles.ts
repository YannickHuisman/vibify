import styled from 'styled-components';

import { layoutStyles } from '@components/Flex';
import { textStyles } from '@components/Typography';

import type { StyledHeadingProps } from './types';

export const StyledHeading = styled.h1<StyledHeadingProps>`
  font-size: ${({ theme, $size = 'display' }) => theme.fontSizes[$size]};
  font-weight: 700;
  ${layoutStyles}
  ${textStyles}
`;
