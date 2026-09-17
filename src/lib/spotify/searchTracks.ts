import { MOCK_TRACKS } from './mockTracks';
import { searchTrack } from './searchTrack';
import type { Track, TrackQuery } from './types';

const BATCH_SIZE = 5;

export async function searchTracks(queries: TrackQuery[], mock = false): Promise<Track[]> {
  if (mock) return MOCK_TRACKS;

  const tracks: Track[] = [];
  const failures: unknown[] = [];

  for (let start = 0; start < queries.length; start += BATCH_SIZE) {
    const batch = queries.slice(start, start + BATCH_SIZE);
    const results = await Promise.allSettled(batch.map(searchTrack));

    for (const result of results) {
      if (result.status === 'rejected') {
        console.warn('[spotify] lookup failed:', result.reason);
        failures.push(result.reason);
        continue;
      }

      if (result.value) {
        tracks.push(result.value);
      }
    }
  }

  // A few misses are a normal answer. Zero tracks with every lookup erroring is
  // Spotify being down or rate-limiting us, and saying "no matching tracks"
  // there would blame the user's prompt for our outage.
  if (tracks.length === 0 && failures.length > 0) {
    throw failures[0];
  }

  return tracks;
}
