import type { TrackQuery } from '@lib/spotify';

export type SuggestionResult =
  | { status: 'ok'; reasoning: string; suggestions: TrackQuery[] }
  | { status: 'rejected'; message: string };
