import type { LayoutProps } from '@components/Flex';
import type { TextProps } from '@components/Typography';
import type { Theme } from '@/theme';

export interface StyledHeadingProps extends LayoutProps, TextProps {
  $size?: keyof Theme['fontSizes'];
}
