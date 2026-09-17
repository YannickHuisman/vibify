import Anthropic from '@anthropic-ai/sdk';

import { MAX_TOKENS, MODEL } from './constants';
import { SYSTEM_PROMPT } from './prompt';
import { rejectPromptSchema, suggestTracksSchema } from './schemas';
import { rejectPromptTool, suggestTracksTool } from './tools';
import type { SuggestionResult } from './types';

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function suggestTracks(prompt: string): Promise<SuggestionResult> {
  const response = await anthropic.messages.create({
    model: MODEL,
    max_tokens: MAX_TOKENS,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: prompt }],
    tools: [suggestTracksTool, rejectPromptTool],
    // `any` still forces a tool call — it just lets the model pick which one.
    tool_choice: { type: 'any' },
  });

  const toolUse = response.content.find(
    (block): block is Anthropic.ToolUseBlock => block.type === 'tool_use',
  );

  if (!toolUse) {
    throw new Error('The model replied without calling a tool.');
  }

  if (toolUse.name === rejectPromptTool.name) {
    const { message } = rejectPromptSchema.parse(toolUse.input);
    return { status: 'rejected', message };
  }

  const { reasoning, suggestions } = suggestTracksSchema.parse(toolUse.input);
  return { status: 'ok', reasoning, suggestions };
}
