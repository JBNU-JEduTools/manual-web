"use strict";
exports.id = 850;
exports.ids = [850];
exports.modules = {

/***/ 2701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ themeProps)
/* harmony export */ });
/* unused harmony export Theme */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2706);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_4__);





const themeProps = {
    ..._aksara_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme,
    colors: utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .colors */ .O9,
    space: utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .space */ .Dh,
    fonts: utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .fonts */ .Rq,
    breakpoints: [
        `${utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.sm */ .AV.sm}px`,
        `${utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.md */ .AV.md}px`,
        `${utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.lg */ .AV.lg}px`,
        `${utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .breakpoints.xl */ .AV.xl}px`
    ],
    fontSizes: {
        ..._aksara_ui_react__WEBPACK_IMPORTED_MODULE_4__.theme.fontSizes,
        heading: utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .headingSizes */ .$G,
        paragraph: utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .paragraphSizes */ .oH,
        text: utils_variables__WEBPACK_IMPORTED_MODULE_3__/* .textSizes */ .iH
    }
};
/**
 * Aksara theme provider
 */ const Theme = ({ children  })=>{
    return(/*#__PURE__*/ _jsx(ThemeProvider, {
        theme: themeProps,
        children: children
    }));
};


/***/ }),

/***/ 8911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_GlobalStyles)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
;// CONCATENATED MODULE: ./components/foundations/reset/styles/reboot.ts


const reboot = external_styled_components_.css`
  /*!
   * Bootstrap Reboot v4.1.2 (https://getbootstrap.com/)
   * Copyright 2011-2018 The Bootstrap Authors
   * Copyright 2011-2018 Twitter, Inc.
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
   */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  ${external_styled_components_.css`
    @-ms-viewport {
      width: device-width;
    }
  `}

  article,
  aside,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  nav,
  section {
    display: block;
  }

  body {
    margin: 0;
    font-family: 'Inter', sans-serif !important;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0e0e2c;
    text-align: left;
    background-color: ${react_.theme.colors.greylight02};
  }

  [tabindex='-1']:focus {
    outline: 0 !important;
  }

  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h1,
  h2,
  h3 {
    color: ${react_.theme.colors.greydark05};
  }

  h4,
  h5,
  h6 {
    color: #404145;
  }

  article section h1::before,
  article section h2::before,
  article section h3::before,
  article section h4::before,
  article section h5::before,
  article section h6::before {
    display: block;
    content: ' ';
    visibility: hidden;
    pointer-events: none;
    height: 64px;
    margin-top: -64px;
  }

  p,
  ol,
  ul,
  li {
    font-family: 'Inter', sans-serif !important;
    color: #0e0e2c;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  dfn {
    font-style: italic;
  }

  b,
  strong {
    font-family: 'Inter-bold';
    font-weight: bolder;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  section a {
    color: ${react_.theme.colors.blue07};
    text-decoration: underline;
    background-color: transparent;
    overflow-wrap: anywhere;
    -webkit-text-decoration-skip: objects;
  }

  section a:hover {
    color: ${react_.theme.colors.blue08};
    text-decoration: underline;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: Roboto Mono !important;
    font-size: 1em;
    font-weight: 500;
    background: ${react_.theme.colors.greylight03};
    color: ${react_.theme.colors.greydark02};
  }

  pre {
    margin-top: 0;
    margin-bottom: 1rem;
    border-radius: 8px;
    padding: 12px;
    color: ${react_.theme.colors.grey08};
    background: ${react_.theme.colors.greylight03};
    overflow: auto;
    -ms-overflow-style: scrollbar;
  }

  figure {
    margin: 0 0 1rem;
  }

  section img {
    margin: 24px auto;
    border: 1px solid ${react_.theme.colors.greylight04};
    max-height: 65vh;
  }

  section img.borderless {
    border: none;
  }

  img {
    vertical-align: middle;
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    color: #6c757d;
    text-align: left;
    caption-side: bottom;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  input[type='radio'],
  input[type='checkbox'] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: listbox;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    display: block;
    width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
    line-height: inherit;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: none;
  }

  [type='search']::-webkit-search-cancel-button,
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none !important;
  }

  .info {
    margin-top: 24px;
    margin-bottom: 24px;
    display: flex;
    width: 100%;
    justify-content: start;
    align-items: center;
    padding: 14px 16px;
    border-left: 1px solid ${react_.theme.colors.blue07};
    background-color: ${react_.theme.colors.blue01};

    img {
      margin-left: 18px;
      margin-right: 13px;
    }
    p {
      margin-top: auto;
      margin-left: 12px;
      overflow: auto;
    }
    a {
      color: ${react_.theme.colors.blue07};
    }
  }
`;
/* harmony default export */ const styles_reboot = (reboot);

// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
;// CONCATENATED MODULE: ./components/foundations/reset/styles/base.ts


const base = external_styled_components_.css`
  :root {
    font-size: ${variables/* textSizes.300.fontSize */.iH[300].fontSize}px;
    line-height: ${variables/* textSizes.300.lineHeight */.iH[300].lineHeight}px;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
  }

  a {
    color: ${variables/* colors.blue05 */.O9.blue05};
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${variables/* colors.indigo04 */.O9.indigo04};
      text-decoration: underline;
    }
  }

  img {
    display: block;
    max-width: 100%;
  }

  #root {
    transition: all 0.5s cubic-bezier(0.15, 1, 0.3, 1);
    -webkit-transition: all 0.5s cubic-bezier(0.15, 1, 0.3, 1);

    &.pushed-legend-right {
      transform: translateX(-280px);
    }
  }

  .noscroll {
    overflow: hidden;
  }

  .noselect {
    user-select: none;
  }

  .full-size {
    height: 100%;
    width: 100%;
  }

  .full-size-layout {
    height: 100%;
    min-height: 100vh;
    width: 100%;
  }

  .icon-middle {
    &::before {
      vertical-align: middle;
    }
  }

  .drag-handle {
    cursor: move;
    display: inline-block;

    &::before {
      content: '......';
      display: inline-block;
      width: 10px;
      word-break: break-word;
      white-space: normal;
      letter-spacing: 2px;
      line-height: 4.5px;
      text-align: center;
      height: 18px;
    }
  }

  /* https://github.com/reach/reach-ui/blob/master/packages/skip-nav/styles.css */
  [data-reach-skip-link] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    width: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    position: absolute;
  }

  [data-reach-skip-link]:focus {
    padding: 1rem;
    position: fixed;
    top: 10px;
    left: 10px;
    background: white;
    z-index: 100;
    width: auto;
    height: auto;
    clip: auto;
  }
`;
/* harmony default export */ const styles_base = (base);

;// CONCATENATED MODULE: ./components/foundations/reset/styles/code.ts



const code = external_styled_components_.css`
  /*

    Name:       Base16 Atelier Sulphurpool Light
    Author:     Bram de Haan (http://atelierbram.github.io/syntax-highlighting/atelier-schemes/sulphurpool)

    Prism template by Bram de Haan (http://atelierbram.github.io/syntax-highlighting/prism/)
    Original Base16 color scheme by Chris Kempson (https://github.com/chriskempson/base16)

  */
  code[class*='language-'],
  pre[class*='language-'] {
    font-family: Roboto Mono, Consolas, 'monospace';
    font-size: ${variables/* textSizes.300.fontSize */.iH[300].fontSize}px;
    line-height: ${variables/* textSizes.300.lineHeight */.iH[300].lineHeight}px;
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    background: ${react_.theme.colors.grey01};
    color: ${react_.theme.colors.greydark02};
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.1em;
    border-radius: 0.3em;
    background: none;
    color: ${react_.theme.colors.blue05};
    font-size: ${variables/* paragraphSizes.400.fontSize */.oH[400].fontSize}px;
    line-height: ${variables/* paragraphSizes.400.lineHeight */.oH[400].lineHeight}px;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #898ea4;
  }

  .token.punctuation {
    color: #5e6687;
  }

  .token.namespace {
    opacity: 0.7;
  }

  .token.operator,
  .token.boolean,
  .token.number {
    color: #c76b29;
  }

  .token.property {
    color: #c08b30;
  }

  .token.tag {
    color: #3d8fd1;
  }

  .token.string {
    color: #22a2c9;
  }

  .token.selector {
    color: #6679cc;
  }

  .token.attr-name {
    color: #c76b29;
  }

  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #22a2c9;
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #ac9739;
  }

  .token.statement,
  .token.regex,
  .token.atrule {
    color: #22a2c9;
  }

  .token.placeholder,
  .token.variable {
    color: #3d8fd1;
  }

  .token.deleted {
    text-decoration: line-through;
  }

  .token.inserted {
    border-bottom: 1px dotted #202746;
    text-decoration: none;
  }

  .token.italic {
    font-style: italic;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.important {
    color: #c94922;
  }

  .token.entity {
    cursor: help;
  }

  pre > code.highlight {
    outline: 0.4em solid #c94922;
    outline-offset: 0.4em;
  }

  blockquote {
    display: flex;
    margin-top: -30px;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;
    background: ${react_.theme.colors.greylight03};
    border: 1px solid ${react_.theme.colors.greylight04};
  }

  blockquote > p {
    font-size: 14px !important;
    color: #19191b !important;
  }

  /* overrides color-values for the Line Numbers plugin
   * http://prismjs.com/plugins/line-numbers/
   */
  .line-numbers .line-numbers-rows {
    border-right-color: #dfe2f1;
  }

  .line-numbers-rows > span:before {
    color: #979db4;
  }

  /* overrides color-values for the Line Highlight plugin
   * http://prismjs.com/plugins/line-highlight/
   */
  .line-highlight {
    background: rgba(107, 115, 148, 0.2);
    background: -webkit-linear-gradient(left, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
    background: linear-gradient(to right, rgba(107, 115, 148, 0.2) 70%, rgba(107, 115, 148, 0));
  }
`;
/* harmony default export */ const styles_code = (code);

;// CONCATENATED MODULE: ./components/foundations/reset/components/GlobalStyles.ts




const GlobalStyles = external_styled_components_.createGlobalStyle`
${styles_reboot}
${styles_base}
${styles_code}
`;
/* harmony default export */ const components_GlobalStyles = (GlobalStyles);


/***/ }),

/***/ 2706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O9": () => (/* binding */ colors),
/* harmony export */   "Rq": () => (/* binding */ fonts),
/* harmony export */   "$G": () => (/* binding */ headingSizes),
/* harmony export */   "iH": () => (/* binding */ textSizes),
/* harmony export */   "oH": () => (/* binding */ paragraphSizes),
/* harmony export */   "Dh": () => (/* binding */ space),
/* harmony export */   "AV": () => (/* binding */ breakpoints),
/* harmony export */   "J6": () => (/* binding */ layerIndexes),
/* harmony export */   "MB": () => (/* binding */ dimensions)
/* harmony export */ });
/* unused harmony export systemFonts */
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__);

/** Color values mapped by Aksara color ID. */ const colors = {
    ..._aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors,
    // Blue
    /** Blue01 - Glitter */ blue01: '#e7f1fc',
    /** Blue02 - Pale Aqua */ blue02: '#b9d7f8',
    /** Blue03 - Jordy Blue */ blue03: '#8bbdf3',
    /** Blue04 - Blue Jeans */ blue04: '#5ca3ef',
    /** Blue05 - Bleu de France */ blue05: '#2e89ea',
    /** Blue06 - Brandeis Blue */ blue06: '#006fe6',
    /** Blue07 - Absolute Zero */ blue07: '#005bbd',
    /** Blue08 - Usafa Blue */ blue08: '#004793',
    /** Blue09 - Dark Midnight Blue */ blue09: '#003369',
    /** blue10 - Maastricht Blue */ blue10: '#001f3f',
    // Indigo
    /** Indigo01 - Soap */ indigo01: '#e7eaf4',
    /** Indigo02 - Light Steel Blue */ indigo02: '#b9c0df',
    /** Indigo03 - Ceil */ indigo03: '#8b97c9',
    /** Indigo04 - Glaucous */ indigo04: '#5c6db4',
    /** Indigo05 - Pigment Blue */ indigo05: '#2e449f',
    /** Indigo06 - Indigo */ indigo06: '#001b8a',
    /** Indigo07 - Dark Imperial Blue */ indigo07: '#001771',
    /** Indigo08 - Royal Blue */ indigo08: '#001258',
    /** Indigo09 - Maastricht Blue */ indigo09: '#000d3f',
    /** Indigo10 - Black Indigo */ indigo10: '#000826',
    // Turquoise
    /** Turquoise01 - Bubbles */ turquoise01: '#e7fafd',
    /** Turquoise02 - Diamond */ turquoise02: '#b9f1f9',
    /** Turquoise03 - Pale Cyan */ turquoise03: '#8be7f5',
    /** Turquoise04 - Sky Blue */ turquoise04: '#5cdef1',
    /** Turquoise05 - Turquoise Surf */ turquoise05: '#2ed5ed',
    /** Turquoise06 - Turquoise */ turquoise06: '#00cce9',
    /** Turquoise07 - Bondi Blue */ turquoise07: '#00a7bf',
    /** Turquoise08 - Teal */ turquoise08: '#008295',
    /** Turquoise09 - Bubbles */ turquoise09: '#005d6a',
    /** Turquoise10 - Bubbles */ turquoise10: '#003840',
    // Green
    /** Green01 - Honeydew */ green01: '#f2f8f0',
    /** Green02 - Timbrewolf */ green02: '#daecd3',
    /** Green03 - Celadon */ green03: '#c1e0b7',
    /** Green04 - Granny Smith Apple */ green04: '#a9d49a',
    /** Green05 - Pistachio */ green05: '#90c87d',
    /** Green06 - Green Bud */ green06: '#78bc61',
    /** Green07 - Palm Leaf */ green07: '#639a50',
    /** Green08 - Fern Green */ green08: '#4d783e',
    /** Green09 - Mughal Green */ green09: '#37562d',
    /** Green10 - Leather Jacket */ green10: '#21341b',
    // Yellow
    /** Yellow01 - Seashell */ yellow01: '#fff7ed',
    /** Yellow02 - Lumber */ yellow02: '#ffe7ca',
    /** Yellow03 - Tuscan */ yellow03: '#ffd7a8',
    /** Yellow04 - Topaz */ yellow04: '#ffc885',
    /** Yellow05 - Rajah */ yellow05: '#ffb862',
    /** Yellow06 - Yellow Orange */ yellow06: '#ffa940',
    /** Yellow07 - Bronze */ yellow07: '#d18b35',
    /** Yellow08 - Liver */ yellow08: '#a36c29',
    /** Yellow09 - Drab */ yellow09: '#744d1e',
    /** Yellow10 - Pullman */ yellow10: '#462f12',
    // Red
    /** Red01 - Linen */ red01: '#fce9e8',
    /** Red02 - Spanish Pink */ red02: '#f7bfbc',
    /** Red03 - Salmon Pink */ red03: '#f2958f',
    /** Red04 - Pastel */ red04: '#ed6b63',
    /** Red05 - Vermilion */ red05: '#e84136',
    /** Red06 - Crimson */ red06: '#e3170a',
    /** Red07 - Orange */ red07: '#ba1309',
    /** Red08 - Sangria */ red08: '#910f07',
    /** Red09 - Rosewood */ red09: '#680b05',
    /** Red10 - Bean */ red10: '#3e0703',
    // Grey
    grey01: '#fafafa',
    grey02: '#edeeee',
    grey03: '#cacece',
    grey04: '#858e8d',
    grey05: '#626e6d',
    grey06: '#404e4d',
    grey07: '#293232',
    grey08: '#1e2423',
    grey09: '#2C2D33',
    grey10: '#060807',
    grey11: '#eff2f5',
    grey12: '#313f4e',
    // Helper colors
    white: '#fff',
    black: '#000'
};
const systemFonts = "Inter, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'";
const fonts = {
    system: systemFonts,
    brand: `Inter, ${systemFonts}`,
    // sansSerif: `Inter, ${systemFonts}`,
    monospace: "'SF Mono', Inconsolata, Menlo, Monaco, Consolas, 'Courier New', Courier, monospace;"
};
/** Heading size values mapped by size number. */ const headingSizes = {
    900: {
        fontSize: 42,
        lineHeight: 48,
        letterSpacing: -0.2
    },
    800: {
        fontSize: 35,
        lineHeight: 40,
        letterSpacing: -0.2
    },
    700: {
        fontSize: 29,
        lineHeight: 32,
        letterSpacing: -0.2
    },
    600: {
        fontSize: 24,
        lineHeight: 28,
        letterSpacing: -0.05
    },
    500: {
        fontSize: 20,
        lineHeight: 24,
        letterSpacing: -0.05
    },
    400: {
        fontSize: 16,
        lineHeight: 20,
        letterSpacing: -0.05
    },
    300: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.05
    },
    200: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0
    },
    100: {
        fontSize: 12,
        lineHeight: 16,
        letterSpacing: 0.5
    }
};
/** Text size values mapped by size number. */ const textSizes = {
    500: {
        fontSize: 20,
        lineHeight: 24
    },
    400: {
        fontSize: 16,
        lineHeight: 20
    },
    300: {
        fontSize: 14,
        lineHeight: 20
    },
    200: {
        fontSize: 12,
        lineHeight: 16
    }
};
/** Text size values mapped by size number. */ const paragraphSizes = {
    400: {
        fontSize: 16,
        lineHeight: 24
    },
    300: {
        fontSize: 14,
        lineHeight: 24
    }
};
/** Space values (in px) mapped by size designators */ const space = {
    /** Equivalent to 2px */ xxxs: 2,
    /** Equivalent to 4px */ xxs: 4,
    /** Equivalent to 8px */ xs: 8,
    /** Equivalent to 12px */ sm: 12,
    /** Equivalent to 16px */ md: 16,
    /** Equivalent to 24px */ lg: 24,
    /** Equivalent to 32px */ xl: 32,
    /** Equivalent to 48px */ xxl: 48
};
/** Breakpoint values (in px) mapped by size designators */ const breakpoints = {
    /** 0px */ xs: 0,
    /** 320px */ sm: 320,
    /** 768px*/ md: 768,
    /** 1024px */ lg: 1024,
    /** 1440px */ xl: 1440,
    /** 1920px*/ xxl: 1920,
    /** 2048px*/ xxxl: 2048
};
const layerIndexes = {
    base: 0,
    flat: 1,
    floating: 2,
    stickyNav: 8,
    overlay: 16,
    dialog: 24,
    popout: 32
};
const dimensions = {
    widths: {
        sidebar: {
            sm: 240,
            md: 280,
            lg: 200
        },
        containerPadding: space.lg
    },
    heights: {
        header: 64
    }
};


/***/ })

};
;