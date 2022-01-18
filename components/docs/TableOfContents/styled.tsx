import { UnstyledAnchor, theme, Text } from '@aksara-ui/react';
import styled from 'styled-components';

export const TocAnchor = styled(UnstyledAnchor)`
  width: inherit;
  color: ${theme.colors.grey09};
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
  &:active {
    border-radius: 12px;
    background-color: ${theme.colors.blue01};
    color: ${theme.colors.blue07};
  }
  &:hover {
    border-radius: 12px;
    background-color: ${theme.colors.blue01};
    color: ${theme.colors.blue07};
  }
  &:focus {
    outline: none;
  }
`;

export const TocHeader = styled(Text)`
  /* Header/Header 5 */
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  /* Dark Grey */
  color: #404145;
`;

export const TocText = styled(Text)`
  color: ${theme.colors.grey09};
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  padding: 8px 16px;
`;
