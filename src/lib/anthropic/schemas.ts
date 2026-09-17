import { z } from 'zod';

/**
 * These mirror the tool schemas in `tools.ts` on purpose, and the duplication is
 * not redundant.
 *
 * The tool schema is the *request* — it tells the model what to produce. These
 * are the *check* on the way back, because the SDK types `tool_use.input` as
 * `unknown`. Parsing is what turns that into something we can rely on.
 */
export const suggestTracksSchema = z.object({
  reasoning: z.string().min(1),
  suggestions: z.array(z.object({ artist: z.string().min(1), track: z.string().min(1) })).min(1),
});

export const rejectPromptSchema = z.object({
  message: z.string().min(1),
});
