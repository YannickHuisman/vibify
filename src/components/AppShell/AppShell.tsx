'use client';

import { type ReactNode, useId, useState } from 'react';

import { Sidebar } from '@components/Sidebar';
import { TopBar } from '@components/TopBar';
import { useIsMobile } from '@hooks/ui/useIsMobile';

import { StyledMain, StyledShell } from './styles';

export function AppShell({ children }: { children: ReactNode }) {
  const sidebarId = useId();
  const isMobile = useIsMobile();
  const [override, setOverride] = useState<boolean | null>(null);
  const isOpen = override ?? !isMobile;

  return (
    <StyledShell $open={isOpen} $auto={override === null} $animate={override !== null}>
      <TopBar controls={sidebarId} expanded={isOpen} onToggle={() => setOverride(!isOpen)} />
      <Sidebar id={sidebarId} open={isOpen} />
      <StyledMain>{children}</StyledMain>
    </StyledShell>
  );
}
