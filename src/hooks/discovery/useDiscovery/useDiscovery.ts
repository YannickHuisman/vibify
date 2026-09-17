'use client';

import { useState } from 'react';

import type { DiscoveryOutcome } from '@lib/discoveryController';

export function useDiscovery() {
  const [outcome, setOutcome] = useState<DiscoveryOutcome | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (prompt: string, mock = false) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/discover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, mock }),
      });

      const body = (await response.json()) as DiscoveryOutcome | { error: string };

      if ('error' in body) {
        throw new Error(body.error);
      }

      setOutcome(body);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Something went wrong.');
      setOutcome(null);
    } finally {
      setIsLoading(false);
    }
  };

  return { outcome, isLoading, error, submit };
}
