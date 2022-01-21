import { theme } from '@aksara-ui/react';
import { css } from 'styled-components';
import { breakpoints } from 'utils/variables';

export const styleJSX = css`
  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter';
    src: url('assets/fonts/Inter.woff') format('woff');
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter-bold';
    src: url('assets/fonts/Inter-Bold.woff') format('woff');
    font-weight: 700;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Inter', 'Inter-bold', sans-serif;
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter-bold', sans-serif;
  }

  a.header-anchor {
    color: #ffff;
    font-size: 20px;
  }

  a.header-anchor:hover {
    color: #2c2d33;
    text-decoration: none;
  }

  section nav {
    display: none;
  }

  .table-of-contents {
    position: fixed;
    border-right: 1px solid #eff2f5;
    left: 0;
    top: 64px;
    margin-bottom: 64px;
    padding-right: 24px;
    padding-left: 24px;
    width: 23%;
    height: -webkit-fill-available;
    overflow-y: auto;
  }

  @media only screen and (max-width: ${`${breakpoints.lg}px`}) {
    .table-of-contents {
      display: none;
    }
  }

  .isActive {
    border-radius: 12px;
    background-color: ${theme.colors.blue01};
    color: ${theme.colors.blue07} !important;
  }
`;
