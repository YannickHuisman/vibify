'use client';

import { Paragraph } from '@components/Paragraph';

import { StyledSidebar, StyledSidebarBody, StyledSidebarNote } from './styles';

interface SidebarProps {
  id: string;
  open: boolean;
}

export function Sidebar({ id, open }: SidebarProps) {
  return (
    <StyledSidebar id={id} $open={open}>
      <StyledSidebarBody $gap="md" $align="flex-start">
        <Paragraph $size="sm" $color="muted">
          Menu item
        </Paragraph>

        <StyledSidebarNote>Powered by Spotify</StyledSidebarNote>
      </StyledSidebarBody>
    </StyledSidebar>
  );
}
