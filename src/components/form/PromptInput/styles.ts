import styled, { css } from 'styled-components';

import { buttonReset } from '@/mixins';

export const StyledPromptInput = styled.div`
  position: relative;
  width: 100%;
`;

export const StyledPromptControl = styled.input`
  width: 100%;
  height: 56px;
  padding: 0 48px 0 ${({ theme }) => theme.space.lg};
  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition: box-shadow ${({ theme }) => theme.durations.base};

  &::placeholder {
    color: ${({ theme }) => theme.colors.muted};
  }

  &:focus {
    outline: none;
  }
`;

const slot = css`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled.span`
  ${slot}
  color: ${({ theme }) => theme.colors.muted};
  pointer-events: none;
`;

export const StyledClear = styled.button`
  ${buttonReset}
  ${slot}
  padding: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.radius.pill};
  color: ${({ theme }) => theme.colors.muted};

  &:hover {
    background: ${({ theme }) => theme.colors.surfaceSoft};
    color: ${({ theme }) => theme.colors.text};
  }
`;
