import NextImage from 'next/image';
import styled from 'styled-components';

import { reducedMotion } from '@/mixins';

export const StyledFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const StyledSkeletonLayer = styled.div`
  position: absolute;
  inset: 0;
`;

export const StyledPhoto = styled(NextImage)<{ $loaded: boolean }>`
  object-fit: cover;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 750ms ease;

  ${reducedMotion}
`;
