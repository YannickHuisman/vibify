'use client';

import { useState } from 'react';

import { FlexCol } from '@components/Flex';
import { Heading } from '@components/Heading';
import { MoodChips } from '@components/MoodChips';
import { Paragraph } from '@components/Paragraph';
import { PromptForm } from '@components/PromptForm';
import { PromptToolbar } from '@components/PromptToolbar';
import { Tracklist, TracklistSkeleton } from '@components/Tracklist';
import { useDiscovery } from '@hooks/discovery/useDiscovery';

export default function DiscoverPage() {
  const [prompt, setPrompt] = useState('');
  const { outcome, isLoading, error, submit } = useDiscovery();

  const handleMoodSelect = (mood: string) => {
    setPrompt((current) => (current.length === 0 ? mood : `${current} ${mood}`));
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

      {isLoading && <TracklistSkeleton />}
      {!isLoading && error && <Paragraph $color="muted">{error}</Paragraph>}
      {!isLoading && outcome?.status === 'rejected' && (
        <Paragraph $color="muted">{outcome.message}</Paragraph>
      )}
      {!isLoading && outcome?.status === 'ok' && outcome.tracks.length > 0 && (
        <>
          <Paragraph $color="muted">{outcome.reasoning}</Paragraph>
          <Tracklist tracks={outcome.tracks} />
        </>
      )}
      {!isLoading && outcome?.status === 'ok' && outcome.tracks.length === 0 && (
        <Paragraph $color="muted">
          No matching tracks found. Try describing it differently.
        </Paragraph>
      )}
    </FlexCol>
  );
}
