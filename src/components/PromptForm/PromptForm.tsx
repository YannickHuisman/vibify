'use client';

import type { FormEvent } from 'react';

import { PromptInput } from '@components/form/PromptInput';

import { StyledPromptForm, StyledSubmit } from './styles';

interface PromptFormProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (prompt: string) => void;
}

export function PromptForm({ value, onChange, onSubmit }: PromptFormProps) {
  const trimmed = value.trim();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(trimmed);
  };

  return (
    <StyledPromptForm as="form" onSubmit={handleSubmit} $gap="sm" $align="center">
      <PromptInput
        value={value}
        onChange={onChange}
        placeholder="upbeat music but for focus"
        ariaLabel="Describe a mood, activity or vibe"
      />

      <StyledSubmit type="submit" disabled={trimmed.length === 0}>
        Discover
      </StyledSubmit>
    </StyledPromptForm>
  );
}
