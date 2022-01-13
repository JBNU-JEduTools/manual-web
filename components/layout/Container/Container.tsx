import styled from 'styled-components';
import { breakpoints } from 'utils/variables';

const Container = styled('div')`
  position: relative;
  margin-right: auto;
  width: 100%;
  max-width: 704px;
  @media only screen and (min-width: ${breakpoints.lg}px) {
    margin-left: 35%;
  }
  @media only screen and (max-width: ${breakpoints.lg}px) {
    margin-left: 25%;
  }
`;

export default Container;
