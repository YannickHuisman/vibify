import styled, { css } from 'styled-components';

import { belowMobile, buttonReset, reducedMotion } from '@/mixins';

const trackRowGrid = css`
  display: grid;
  grid-template-columns: 40px 1fr 1fr 64px;
  align-items: center;
  gap: ${({ theme }) => theme.space.md};
  width: 100%;
  padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.md};
  border-radius: ${({ theme }) => theme.radius.sm};

  ${belowMobile} {
    grid-template-columns: 32px 1fr 64px;
  }
`;

export const StyledTrackRow = styled.button<{ $open: boolean }>`
  ${buttonReset}
  ${trackRowGrid}
  text-align: left;
  transition: background ${({ theme }) => theme.durations.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceSoft};
  }

  ${({ $open, theme }) =>
    $open &&
    css`
      background: ${theme.colors.surfaceSoft};
    `}

  ${reducedMotion}
`;

export const StyledTrackSkeletonRow = styled.div`
  ${trackRowGrid}
  background: ${({ theme }) => theme.colors.surfaceSoft};
`;

export const StyledTrackImageFrame = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: ${({ theme }) => theme.radius.sm};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
`;

export const StyledTrackPanel = styled.div<{ $open: boolean }>`
  overflow: hidden;
  max-height: ${({ $open }) => ($open ? '100px' : '0')};
  transition: max-height ${({ theme }) => theme.durations.base} ease;

  ${reducedMotion}
`;

export const StyledTrackEmbed = styled.iframe`
  display: block;
  width: 100%;
  height: 80px;
  margin: ${({ theme }) => theme.space.sm} 0;
  border: 0;
  border-radius: ${({ theme }) => theme.radius.md};
`;
