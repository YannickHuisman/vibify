import styled, { css } from 'styled-components';

export const StyledChip = styled.span<{ $active?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.space.xs} ${({ theme }) => theme.space.md};
  border: none;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme, $active }) =>
    $active ? theme.colors.orangeSoft : theme.colors.surfaceSoft};
  color: ${({ theme, $active }) => ($active ? theme.colors.orange : theme.colors.muted)};
  font: inherit;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: background ${({ theme }) => theme.durations.fast}, color ${({ theme }) => theme.durations.fast};

  ${({ $active, theme }) =>
    !$active &&
    css`
      &:hover {
        background: ${theme.colors.background};
        color: ${theme.colors.text};
      }
    `}
`;
