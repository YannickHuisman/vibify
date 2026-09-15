'use client';

import { useState } from 'react';

export interface DiscoveryRequest {
  prompt: string;
}

export function useDiscovery() {
  const [request, setRequest] = useState<DiscoveryRequest | null>(null);

  const submit = (prompt: string) => {
    setRequest({ prompt });
  };

  return { request, submit };
}
