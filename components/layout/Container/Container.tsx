import styled from 'styled-components';

const Container = styled('div')`
  position: relative;
  margin-right: auto;
  width: 100%;
  max-width: 704px;
  @media only screen and (min-width: 1336px) {
    margin-left: 35%;
  }
  @media only screen and (width: 1280px) {
    margin-left: 30%;
  }
`;

export default Container;
