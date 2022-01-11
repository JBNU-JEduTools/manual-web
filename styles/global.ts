import { css } from 'styled-components';


export const styleJSX = css`

@font-face {
  font-family: 'Inter';
  src: url('assets/fonts/Inter.woff') format('woff');
}

html,
body {
  font-family: 'Inter', sans-serif;
  scroll-behavior: smooth;
}

a.header-anchor {
  color: #ffff;
  font-size: 20px;
}

a.header-anchor:hover {
  color: #2c2d33;
  text-decoration: none;
}

.table-of-contents {
  position: fixed;
  border-right: 1px solid #eff2f5;
  left: 0;
  top: 64px;
  margin-bottom: 64px;
  padding-right: 24px;
  width: 25%;
  height: -webkit-fill-available;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
}

.table-of-contents li {
  font-size: 14px;
  margin-top: 8px;
}

.table-of-contents li a {
  padding: 8px 16px;
}

.table-of-contents ul {
  list-style-type: none;
}

.table-of-contents a {
  color: #404145;

  &:hover {
    color: #2d302e;
  }
}

.table-of-contents ul > li {
  font-weight: 700;
}

.table-of-contents ul > li > ul {
  padding-left: 16px;
  margin-left: 16px;
  border-left: 1px solid #eff2f5;
}

.table-of-contents ul > li > ul > li {
  font-weight: 400;
}
`;
