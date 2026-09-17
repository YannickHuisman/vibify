'use client';

import { FlexCol, FlexRow } from '@components/Flex';
import { Image } from '@components/Image';
import { Paragraph } from '@components/Paragraph';
import { formatDuration } from '@/helpers';
import type { Track as SpotifyTrack } from '@/lib/spotify';

import {
  StyledTrackEmbed,
  StyledTrackImageFrame,
  StyledTrackPanel,
  StyledTrackRow,
} from './styles';

interface TrackProps {
  track: SpotifyTrack;
  index: number;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export function Track({ track, index, isOpen, onToggle }: TrackProps) {
  const panelId = `track-panel-${track.id}`;

  return (
    <FlexCol>
      <StyledTrackRow
        type="button"
        $open={isOpen}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => onToggle(track.id)}
      >
        <Paragraph as="span" $size="sm" $color="muted" $numeric>
          {index + 1}
        </Paragraph>

        <FlexRow as="span" $gap="sm" $align="center" $minWidth="0">
          {track.image && (
            <StyledTrackImageFrame>
              <Image src={track.image} alt="" />
            </StyledTrackImageFrame>
          )}
          {!track.image && <StyledTrackImageFrame />}

          <FlexCol as="span" $minWidth="0">
            <Paragraph
              as="span"
              $size="md"
              $weight={500}
              $color={isOpen ? 'orange' : 'text'}
              $truncate
            >
              {track.name}
            </Paragraph>
            <Paragraph as="span" $size="sm" $color="muted" $truncate>
              {track.artist}
            </Paragraph>
          </FlexCol>
        </FlexRow>

        <Paragraph as="span" $size="sm" $color="muted" $truncate $hideBelowMobile>
          {track.album}
        </Paragraph>

        <Paragraph as="span" $size="sm" $color="muted" $align="right" $numeric>
          {formatDuration(track.durationMs)}
        </Paragraph>
      </StyledTrackRow>

      <StyledTrackPanel id={panelId} $open={isOpen}>
        {isOpen && (
          <StyledTrackEmbed
            src={`https://open.spotify.com/embed/track/${track.id}`}
            title={`${track.name} by ${track.artist} on Spotify`}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        )}
      </StyledTrackPanel>
    </FlexCol>
  );
}
