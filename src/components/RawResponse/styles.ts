import styled from 'styled-components';

import { cardSurface } from '@/mixins';

export const StyledRawResponse = styled.pre`
  ${cardSurface}
  margin: 0;
  padding: ${({ theme }) => theme.space.lg};
  overflow-x: auto;
  color: ${({ theme }) => theme.colors.text};
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.6;
  white-space: pre-wrap;
  word-break: break-word;
`;

export const StyledLabel = styled.span`
  color: ${({ theme }) => theme.colors.muted};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;
