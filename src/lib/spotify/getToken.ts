import { SpotifyError } from './SpotifyError';

const TOKEN_URL = 'https://accounts.spotify.com/api/token';
let cached: { value: string; expiresAt: number } | null = null;

export async function getToken(): Promise<string> {
  if (cached && cached.expiresAt > Date.now()) {
    return cached.value;
  }

  const id = process.env.SPOTIFY_CLIENT_ID;
  const secret = process.env.SPOTIFY_CLIENT_SECRET;

  if (!id || !secret) {
    throw new SpotifyError('SPOTIFY_CLIENT_ID / SPOTIFY_CLIENT_SECRET are not set.', 500);
  }

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${Buffer.from(`${id}:${secret}`).toString('base64')}`,
    },
    body: new URLSearchParams({ grant_type: 'client_credentials' }),
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new SpotifyError(`Could not get a Spotify token (${response.status}).`, response.status);
  }

  const body = (await response.json()) as { access_token: string; expires_in: number };
  cached = { value: body.access_token, expiresAt: Date.now() + (body.expires_in - 60) * 1000 };

  return cached.value;
}
