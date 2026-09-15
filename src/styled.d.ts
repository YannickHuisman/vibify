import type { Theme } from '@/theme';

import 'styled-components';

declare module 'styled-components' {
  // Module augmentation needs an interface, and this one is deliberately empty:
  // it only exists to point DefaultTheme at our Theme.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends Theme {}
}
