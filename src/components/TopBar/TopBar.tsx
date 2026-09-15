'use client';

import { Menu } from 'lucide-react';

import {
  StyledAccent,
  StyledMenuButton,
  StyledTopBar,
  StyledTopBarInner,
  StyledWordmark,
} from './styles';

interface TopBarProps {
  controls: string;
  expanded: boolean;
  onToggle: () => void;
}

export function TopBar({ controls, expanded, onToggle }: TopBarProps) {
  return (
    <StyledTopBar>
      <StyledTopBarInner $align="center" $gap="md">
        <StyledMenuButton
          type="button"
          aria-controls={controls}
          aria-expanded={expanded}
          aria-label="Toggle sidebar"
          onClick={onToggle}
        >
          <Menu size={20} />
        </StyledMenuButton>

        <StyledWordmark>
          Vibify<StyledAccent>.</StyledAccent>
        </StyledWordmark>
      </StyledTopBarInner>
    </StyledTopBar>
  );
}
