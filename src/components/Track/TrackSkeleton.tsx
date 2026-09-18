import { FlexCol, FlexRow } from '@components/Flex';
import { Skeleton } from '@components/Skeleton';

import { StyledTrackSkeletonRow } from './styles';

export function TrackSkeleton() {
  return (
    <StyledTrackSkeletonRow>
      <Skeleton $width="16px" $height="14px" />

      <FlexRow $gap="sm" $align="center" $minWidth="0">
        <Skeleton $width="40px" $height="40px" $radius="6px" />

        <FlexCol $gap="xs" $minWidth="250px">
          <Skeleton $width="70%" $height="14px" />
          <Skeleton $width="45%" $height="12px" />
        </FlexCol>
      </FlexRow>

      <Skeleton $width="60%" $height="14px" $hideBelowMobile />

      <Skeleton $width="32px" $height="14px" />
    </StyledTrackSkeletonRow>
  );
}
