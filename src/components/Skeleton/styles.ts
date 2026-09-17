import styled, { keyframes } from 'styled-components';

import { belowMobile, reducedMotion } from '@/mixins';

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`;

interface StyledSkeletonProps {
  $width?: string;
  $height?: string;
  $radius?: string;
  $hideBelowMobile?: boolean;
}

export const StyledSkeleton = styled.div<StyledSkeletonProps>`
  width: ${({ $width }) => $width ?? '100%'};
  height: ${({ $height }) => $height ?? '16px'};
  border-radius: ${({ $radius, theme }) => $radius ?? theme.radius.sm};
  background: ${({ theme }) => theme.colors.skeleton};
  animation: ${pulse} 1.4s ease-in-out infinite;

  ${({ $hideBelowMobile }) =>
    $hideBelowMobile &&
    `
      ${belowMobile} {
        display: none;
      }
    `}

  ${reducedMotion}
`;
