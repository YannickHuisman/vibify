'use client';

import { useState } from 'react';

import { Skeleton } from '@components/Skeleton';

import { StyledFrame, StyledPhoto, StyledSkeletonLayer } from './styles';

const loadedSources = new Set<string>();

interface ImageProps {
  src: string;
  alt: string;
  sizes?: string;
}

export function Image({ src, alt, sizes = '40px' }: ImageProps) {
  const [loadedSource, setLoadedSource] = useState<string | null>(null);

  const loaded = loadedSource === src || loadedSources.has(src);

  const handleLoad = () => {
    loadedSources.add(src);
    setLoadedSource(src);
  };

  return (
    <StyledFrame>
      {!loaded && (
        <StyledSkeletonLayer>
          <Skeleton $width="100%" $height="100%" $radius="0" />
        </StyledSkeletonLayer>
      )}
      <StyledPhoto src={src} alt={alt} fill sizes={sizes} $loaded={loaded} onLoad={handleLoad} />
    </StyledFrame>
  );
}
