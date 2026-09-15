import type { LayoutProps } from '@components/Flex';
import type { TextProps } from '@components/Typography';
import type { Theme } from '@/theme';

export interface StyledParagraphProps extends LayoutProps, TextProps {
  $size?: keyof Theme['fontSizes'];
  $weight?: 400 | 500 | 600 | 700;
  $color?: keyof Theme['colors'];
  $align?: 'left' | 'center' | 'right';
}
