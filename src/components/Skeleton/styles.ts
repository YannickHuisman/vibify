import styled, { keyframes } from 'styled-components';

import { reducedMotion } from '@/mixins';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.45; }
`;

export const StyledSkeleton = styled.div<{ $width?: string; $height?: string; $radius?: string }>`
  width: ${({ $width }) => $width ?? '100%'};
  height: ${({ $height }) => $height ?? '16px'};
  border-radius: ${({ $radius, theme }) => $radius ?? theme.radius.sm};
  background: ${({ theme }) => theme.colors.surfaceSoft};
  animation: ${pulse} 1.4s ease-in-out infinite;

  ${reducedMotion}
`;
