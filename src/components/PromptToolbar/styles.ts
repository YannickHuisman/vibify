import styled from 'styled-components';

import { FlexCol } from '@components/Flex';

export const StyledPromptToolbar = styled(FlexCol)`
  position: sticky;
  top: ${({ theme }) => theme.layout.topBarHeight};
  z-index: 10;
  margin: -${({ theme }) => theme.layout.mainPadding} -${({ theme }) => theme.layout.mainPadding};
  padding: ${({ theme }) => theme.layout.mainPadding};
  background: ${({ theme }) => theme.glass.toolbar};
  backdrop-filter: ${({ theme }) => theme.glass.blur};
`;
