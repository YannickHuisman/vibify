'use client';

import { X } from 'lucide-react';

import { StyledClear, StyledPromptControl, StyledPromptInput } from './styles';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  ariaLabel?: string;
  clearLabel?: string;
}

export function PromptInput({
  value,
  onChange,
  placeholder,
  ariaLabel,
  clearLabel = 'Clear prompt',
}: PromptInputProps) {
  const hasValue = value.length > 0;

  const handleClear = () => {
    onChange('');
  };

  return (
    <StyledPromptInput>
      <StyledPromptControl
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label={ariaLabel}
      />

      {hasValue && (
        <StyledClear type="button" onClick={handleClear} aria-label={clearLabel}>
          <X size={18} />
        </StyledClear>
      )}
    </StyledPromptInput>
  );
}
