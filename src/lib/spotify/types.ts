export interface TrackQuery {
  artist: string;
  track: string;
}

export interface Track {
  id: string;
  name: string;
  artist: string;
  artistId: string;
  album: string;
  image: string | null;
  url: string;
  uri: string;
  durationMs: number;
}
