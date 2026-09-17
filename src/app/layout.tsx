import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

import { AppShell } from '@components/AppShell';
import { StyledComponentsRegistry } from '@components/StyledComponentsRegistry';

import { Providers } from './providers';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vibify',
  description: 'Describe a mood, an activity or a vibe, and discover music that fits.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <AppShell>{children}</AppShell>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
