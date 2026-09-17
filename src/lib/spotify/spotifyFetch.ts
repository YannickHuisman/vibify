import { getToken } from './getToken';
import { SpotifyError } from './SpotifyError';

const API_BASE = 'https://api.spotify.com/v1';

export async function spotifyFetch<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { Authorization: `Bearer ${await getToken()}` },
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new SpotifyError(await errorMessage(response), response.status);
  }

  return (await response.json()) as T;
}

async function errorMessage(response: Response): Promise<string> {
  const retryAfter = response.headers.get('Retry-After');
  const retrySuffix = retryAfter ? ` (retry after ${retryAfter}s)` : '';

  try {
    const body = (await response.json()) as { error?: { message?: string } };

    if (body.error?.message) {
      return `Spotify: ${body.error.message}${retrySuffix}`;
    }
  } catch {}

  return `Spotify request failed (${response.status}).${retrySuffix}`;
}
