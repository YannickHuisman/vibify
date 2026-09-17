import { normalizeArtist, normalizeTrack } from './normalizeQuery';
import { spotifyFetch } from './spotifyFetch';
import type { Track, TrackQuery } from './types';

interface SearchResponse {
  tracks: {
    items: {
      id: string;
      name: string;
      uri: string;
      duration_ms: number;
      artists: { id: string; name: string }[];
      album: { name: string; images: { url: string }[] };
      external_urls: { spotify: string };
    }[];
  };
}

export async function searchTrack({ artist, track }: TrackQuery): Promise<Track | null> {
  const params = new URLSearchParams({
    q: `track:${quoted(normalizeTrack(track))} artist:${quoted(normalizeArtist(artist))}`,
    type: 'track',
    limit: '1',
    market: 'NL',
  });

  const { tracks } = await spotifyFetch<SearchResponse>(`/search?${params}`);
  const [hit] = tracks.items;

  if (!hit) {
    return null;
  }

  const [first] = hit.artists;
  const [cover] = hit.album.images;

  return {
    id: hit.id,
    name: hit.name,
    artist: first?.name ?? 'Unknown artist',
    artistId: first?.id ?? '',
    album: hit.album.name,
    image: cover?.url ?? null,
    url: hit.external_urls.spotify,
    uri: hit.uri,
    durationMs: hit.duration_ms,
  };
}

/** Field filters take a quoted phrase; a stray quote breaks the query. */
function quoted(value: string): string {
  return `"${value.replace(/"/g, '').trim()}"`;
}
