import styled from 'styled-components';

import { FlexRow } from '@components/Flex';
import { buttonReset, reducedMotion } from '@/mixins';

export const StyledPromptForm = styled(FlexRow)`
  width: 100%;
`;

export const StyledSubmit = styled.button`
  ${buttonReset}
  flex-shrink: 0;
  height: 56px;
  padding: 0 ${({ theme }) => theme.space.xl};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.onAccent};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  box-shadow: ${({ theme }) => theme.shadows.card};
  transition:
    background ${({ theme }) => theme.durations.fast},
    transform ${({ theme }) => theme.durations.fast};

  &:hover:not(:disabled) {
    background: ${({ theme }) => theme.colors.orangeDark};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.surfaceSoft};
    color: ${({ theme }) => theme.colors.muted};
    box-shadow: none;
    cursor: not-allowed;
  }

  ${reducedMotion}
`;
