import { useSyncExternalStore } from 'react';

import { theme } from '@/theme';

const QUERY = `(max-width: ${theme.breakpoints.mobile - 1}px)`;

function subscribe(onStoreChange: () => void) {
  const list = window.matchMedia(QUERY);
  list.addEventListener('change', onStoreChange);
  return () => list.removeEventListener('change', onStoreChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

// Defaults to mobile on the server so the first client render never flashes
// a desktop layout before hydration can read the real viewport.
const getServerSnapshot = () => true;

export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
