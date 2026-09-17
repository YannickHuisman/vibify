import type { Track } from '@lib/spotify';

export type DiscoveryOutcome =
  { status: 'ok'; reasoning: string; tracks: Track[] } | { status: 'rejected'; message: string };
