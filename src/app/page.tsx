'use client';

import { useState } from 'react';

import { FlexCol } from '@components/Flex';
import { Heading } from '@components/Heading';
import { MoodChips } from '@components/MoodChips';
import { Paragraph } from '@components/Paragraph';
import { PromptForm } from '@components/PromptForm';
import { PromptToolbar } from '@components/PromptToolbar';
import { RawResponse } from '@components/RawResponse';
import { useDiscovery } from '@hooks/discovery/useDiscovery';

export default function DiscoverPage() {
  const [prompt, setPrompt] = useState('');
  const { result, isLoading, error, submit } = useDiscovery();
  const isIdle = !isLoading && !error && !result;

  const handleMoodSelect = (mood: string) => {
    setPrompt((current) => (current.length === 0 ? mood : `${current}, ${mood}`));
  };

  return (
    <FlexCol $gap="xl">
      <FlexCol $gap="sm">
        <Heading $size="hero">What do you want to hear?</Heading>
        <Paragraph $size="lg" $color="muted">
          Describe a mood, an activity or a vibe. Vibify works out the rest.
        </Paragraph>
      </FlexCol>

      <PromptToolbar $gap="sm">
        <PromptForm value={prompt} onChange={setPrompt} onSubmit={submit} />
        <MoodChips value={prompt} onSelect={handleMoodSelect} />
      </PromptToolbar>

      {isLoading && <Paragraph $color="muted">Searching Spotify...</Paragraph>}
      {error && <Paragraph $color="muted">{error}</Paragraph>}
      {result && <RawResponse data={result} label="Spotify search result" />}
      {isIdle && <Paragraph $color="muted">Submit a prompt to search Spotify.</Paragraph>}
    </FlexCol>
  );
}
