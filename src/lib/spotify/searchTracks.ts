import { MOCK_TRACKS } from './mockTracks';
import { searchTrack } from './searchTrack';
import type { Track, TrackQuery } from './types';

const BATCH_SIZE = 5;

const useMockTracks = process.env.SPOTIFY_MOCK_SEARCH === 'true';

export async function searchTracks(queries: TrackQuery[]): Promise<Track[]> {
  if (useMockTracks) return MOCK_TRACKS;

  const tracks: Track[] = [];

  for (let start = 0; start < queries.length; start += BATCH_SIZE) {
    const batch = queries.slice(start, start + BATCH_SIZE);
    const results = await Promise.allSettled(batch.map(searchTrack));

    for (const result of results) {
      if (result.status === 'rejected') {
        console.warn('[spotify] lookup failed:', result.reason);
        continue;
      }

      if (result.value) {
        tracks.push(result.value);
      }
    }
  }

  return tracks;
}
