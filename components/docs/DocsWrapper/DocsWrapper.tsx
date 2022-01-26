import { breakpoints } from 'utils/variables';
import styled from 'styled-components';

const DocsWrapper = styled('article')`
  font-family: 'Inter', sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  padding: 32px;

  @media (max-width: ${breakpoints.lg - 1}px) {
    overflow-x: auto;
  }
`;

export default DocsWrapper;
