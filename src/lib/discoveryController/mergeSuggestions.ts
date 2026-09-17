import type { Track } from '@lib/spotify';

const RESULT_COUNT = 10;

export function mergeSuggestions(tracks: Track[]): Track[] {
  const seenTracks = new Set<string>();
  const merged: Track[] = [];

  for (const track of tracks) {
    if (merged.length === RESULT_COUNT) break;
    if (seenTracks.has(track.id)) continue;

    seenTracks.add(track.id);
    merged.push(track);
  }

  return merged;
}
