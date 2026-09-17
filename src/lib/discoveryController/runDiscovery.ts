import { suggestTracks } from '@lib/anthropic';
import { searchTracks } from '@lib/spotify';

import { mergeSuggestions } from './mergeSuggestions';
import type { DiscoveryOutcome } from './types';

export async function runDiscovery(prompt: string, mock = false): Promise<DiscoveryOutcome> {
  const suggestion = await suggestTracks(prompt);

  if (suggestion.status === 'rejected') {
    console.log(`[llm] rejected: ${suggestion.message}`);

    return suggestion;
  }

  const hits = await searchTracks(suggestion.suggestions, mock);

  console.log(`[llm] ${suggestion.reasoning}`);
  console.table(suggestion.suggestions);
  console.log(
    `[spotify] ${mock ? 'mock tracks, nothing verified' : `${hits.length}/${suggestion.suggestions.length} verified`}`,
  );

  return {
    status: 'ok',
    reasoning: suggestion.reasoning,
    tracks: mergeSuggestions(hits),
  };
}
