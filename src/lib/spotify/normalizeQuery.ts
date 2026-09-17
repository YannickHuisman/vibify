/**
 * The model writes names the way people say them. Spotify stores its own
 * canonical strings, and `searchTrack` matches them as quoted phrases — so
 * anything extra in the string misses the lookup entirely rather than just
 * ranking lower. `artist:"Calvin Harris feat. Rihanna"` matches no artist at
 * all, because no artist is called that.
 *
 * Both patterns require something before the marker, so a name that genuinely
 * starts with one ("Ft. Lauderdale", "(Don't Fear) The Reaper") is left alone.
 */

/** "Calvin Harris feat. Rihanna" -> "Calvin Harris". Also "(feat. X)" in a title. */
const FEATURED = /\s+[([]?\s*\b(?:feat|ft|featuring)\b\.?\s+.*$/i;

/**
 * Known version markers only, never a guess: "Bohemian Rhapsody - Remastered
 * 2011" loses its suffix, "Live and Let Die" keeps its title.
 */
const VERSION =
  /\s*[-–—([]\s*(?:\d{4}\s+)?(?:remaster(?:ed)?|live|radio edit|single version|album version|mono|stereo|deluxe|extended|bonus track)\b.*$/i;

/** Spotify's artist field holds the primary artist alone. */
export function normalizeArtist(artist: string): string {
  return artist.replace(FEATURED, '').trim();
}

export function normalizeTrack(track: string): string {
  return track.replace(FEATURED, '').replace(VERSION, '').trim();
}
