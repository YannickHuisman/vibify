# Vibify

Music discovery that runs on a description instead of filters. You type "rainy sunday, nothing to do"
and get a tracklist back.

Live at https://vibify-bay.vercel.app

Built for the Incentro Creative AI Developer assessment.

## Running it

Needs Node 18.18+ (Next's floor) and pnpm. Developed on Node 25 with pnpm 10.

```
pnpm install
pnpm dev
```

`.env`:

```
ANTHROPIC_API_KEY=
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
NEXT_PUBLIC_SPOTIFY_MOCK_SEARCH=false
```

Spotify credentials come from a Client Credentials app on developer.spotify.com. No user login, no
redirect URI.

Other scripts: `pnpm typecheck`, `pnpm lint`, `pnpm build`.

## How it works

The prompt is posted to `/api/discover`. From there:

1. Claude gets the prompt and has to answer with a tool call. Either `suggest_tracks` with 12
   artist/track pairs, or `reject_prompt` when there is no mood in the request to work with.
2. Zod parses the tool input. A malformed call fails the request instead of getting patched up.
3. Each suggestion is looked up through Spotify's `/search`, five at a time. Anything that does not
   resolve is dropped.
4. What survives is deduped by track id and capped at 10.

Asking for 12 and showing 10 is deliberate. The model invents a track now and then, and Spotify does
not carry everything, so the overshoot covers the misses without leaving a half-empty list.

## Decisions

**The model picks the music, Spotify only confirms it exists.**
Spotify deprecated `/recommendations`, `/audio-features` and `/related-artists` in November 2024 and
new apps cannot use them, which rules out the obvious build. So the taste sits in the LLM and Spotify
is reduced to a lookup: does this track exist, and what is its id, cover and duration. That split
turned out to be the better one anyway. "Music for staring out of a train window" is not something
you can express in audio features.

**Client Credentials only.**
Search and public metadata do not need a logged-in user, and adding OAuth would put a login wall in
front of a demo that does not need one. If this ever had to write playlists to someone's account,
that changes.

**Suggestions are normalised before the lookup.**
The model writes "Calvin Harris feat. Rihanna" and "Bohemian Rhapsody - Remastered 2011". Spotify
matches field filters as exact phrases against its own canonical names, so both of those find
nothing at all. `normalizeQuery.ts` strips featured artists and version suffixes first. It only
removes markers it recognises, so "Live and Let Die" keeps its title.

**Two tools instead of one tool with a nullable field.**
A rejection needs a different shape than a suggestion. Anthropic's strict schemas require every
property to be listed in `required`, so folding both into one tool would have meant sending a fake
empty suggestion list every time the model declined. Two tools with `tool_choice: any` keeps both
shapes honest.

**Mock mode is a button, not just an env var.**
Spotify's rate limit is easy to hit while building, and a 429 in the middle of a live demo is worse.
The toggle under the prompt swaps the Spotify call for a fixture of real tracks, so the UI can be
shown with no API access at all. The env var only decides what the toggle starts on.

**Failures say what actually failed.**
If every Spotify lookup errors, the request fails with Spotify's own status and message. Returning an
empty list would read as "nothing matched your prompt", which blames the user for our outage.

## Structure

```
src/
  app/          pages and the /api/discover handler
  components/   UI, one folder per component
  hooks/
  lib/
    anthropic/            prompt, tools, schemas, the model call
    spotify/              token, search, normalising, mock fixture
    discoveryController/  the pipeline that ties the two together
```

Components are one folder each: `Foo.tsx` when there is logic, `styles.ts` for the styled-components,
`index.ts` as the barrel. The three `lib` folders only expose what their `index.ts` exports, so the
route handler never reaches into a helper directly.
