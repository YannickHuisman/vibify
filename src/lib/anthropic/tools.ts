import type Anthropic from '@anthropic-ai/sdk';

import { SUGGESTION_COUNT } from './constants';

export const suggestTracksTool: Anthropic.Tool = {
  name: 'suggest_tracks',
  description: `Suggest ${SUGGESTION_COUNT} real, existing tracks that fit the mood, activity or vibe the user described. Call this whenever the request is clear enough to act on, even loosely.`,
  // Makes the API guarantee `input` matches this schema. Requires
  // `additionalProperties: false` and a full `required` array on every object.
  strict: true,
  input_schema: {
    type: 'object',
    properties: {
      reasoning: {
        type: 'string',
        description:
          'One sentence, shown to the user above the results, explaining what ties this set together. Write it to the user, not about them.',
      },
      suggestions: {
        type: 'array',
        description: `Exactly ${SUGGESTION_COUNT} tracks. Spread them across subgenres and eras instead of clustering on one sound. Repeating an artist is allowed when it genuinely serves the vibe.`,
        items: {
          type: 'object',
          properties: {
            artist: {
              type: 'string',
              description: 'Artist name as it is credited on Spotify.',
            },
            track: {
              type: 'string',
              description:
                'Track title only. No "- Remastered", no "(Live)", no featured-artist suffix — these break exact search.',
            },
          },
          required: ['artist', 'track'],
          additionalProperties: false,
        },
      },
    },
    required: ['reasoning', 'suggestions'],
    additionalProperties: false,
  },
};

export const rejectPromptTool: Anthropic.Tool = {
  name: 'reject_prompt',
  description:
    'Call this only when the request contains no mood, activity or vibe to work from — a bare artist or song name with nothing else, a factual question, or something unrelated to music. If any part of it can be read as a feeling, call suggest_tracks instead.',
  strict: true,
  input_schema: {
    type: 'object',
    properties: {
      message: {
        type: 'string',
        description:
          'One sentence shown to the user, in the language they wrote in. Say what Vibify searches on and give them a concrete way to rephrase. Never scold.',
      },
    },
    required: ['message'],
    additionalProperties: false,
  },
};
