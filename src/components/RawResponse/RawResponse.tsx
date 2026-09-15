'use client';

import { FlexCol } from '@components/Flex';

import { StyledLabel, StyledRawResponse } from './styles';

interface RawResponseProps {
  data: unknown;
  label?: string;
}

export function RawResponse({ data, label = 'Raw response' }: RawResponseProps) {
  return (
    <FlexCol $gap="sm">
      <StyledLabel>{label}</StyledLabel>
      <StyledRawResponse>{JSON.stringify(data, null, 2)}</StyledRawResponse>
    </FlexCol>
  );
}
