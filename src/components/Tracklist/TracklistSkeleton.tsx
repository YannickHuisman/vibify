import { FlexCol } from '@components/Flex';
import { TrackSkeleton } from '@components/Track';

const SKELETON_ROW_COUNT = 10;

export function TracklistSkeleton() {
  return (
    <FlexCol>
      {Array.from({ length: SKELETON_ROW_COUNT }).map((_, index) => (
        <TrackSkeleton key={index} />
      ))}
    </FlexCol>
  );
}
