'use client';

import { useState } from 'react';

import { FlexCol } from '@components/Flex';
import { Track } from '@components/Track';
import type { Track as SpotifyTrack } from '@/lib/spotify';

interface TracklistProps {
  tracks: SpotifyTrack[];
}

export function Tracklist({ tracks }: TracklistProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <FlexCol>
      {tracks.map((track, index) => (
        <Track
          key={track.id}
          track={track}
          index={index}
          isOpen={track.id === openId}
          onToggle={handleToggle}
        />
      ))}
    </FlexCol>
  );
}
