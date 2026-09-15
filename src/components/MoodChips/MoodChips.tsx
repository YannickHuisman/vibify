'use client';

import { Chip } from '@components/Chip';
import { FlexRow } from '@components/Flex';

const MOODS = ['gym', 'study', 'focus', 'party', 'chill', 'driving', 'sleep'];

interface MoodChipsProps {
  value: string;
  onSelect: (mood: string) => void;
}

export function MoodChips({ value, onSelect }: MoodChipsProps) {
  const lowerValue = value.toLowerCase();

  return (
    <FlexRow $gap="xs" $wrap>
      {MOODS.map((mood) => (
        <Chip
          key={mood}
          as="button"
          type="button"
          $active={lowerValue.includes(mood)}
          onClick={() => onSelect(mood)}
        >
          {mood}
        </Chip>
      ))}
    </FlexRow>
  );
}
