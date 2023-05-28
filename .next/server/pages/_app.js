"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
;// CONCATENATED MODULE: ./styles/global.ts



const styleJSX = external_styled_components_.css`
  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter';
    src: url('/assets/fonts/Inter.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Inter-bold';
    src: url('/assets/fonts/Inter-Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'SF Pro Text';
    src: url('/assets/fonts/SF-Pro-Text.woff') format('woff');
    font-weight: 700;
    font-display: swap;
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto Mono';
    src: url('/assets/fonts/RobotoMono.woff') format('woff');
    font-display: swap;
  }

  @font-face {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto Mono Bold';
    src: url('/assets/fonts/RobotoMono-Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
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
    top: 0;
    padding-right: 24px;
    padding-left: 24px;
    padding-bottom: 16px;
    width: 23%;
    max-width: 320px;
    height: 100%;
    overflow-y: auto;
    z-index: 10;
    background-color: #fff;
  }

  @media only screen and (max-width: ${`${variables/* breakpoints.lg */.AV.lg - 1}px`}) {
    .table-of-contents {
      display: none;
    }
  }

  .isActive {
    border-radius: 12px;
    background-color: ${react_.theme.colors.blue01};
    color: ${react_.theme.colors.blue07} !important;
  }
`;

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./components/foundations/reset/components/GlobalStyles.ts + 3 modules
var GlobalStyles = __webpack_require__(8911);
// EXTERNAL MODULE: ./components/Theme.tsx
var Theme = __webpack_require__(2701);
;// CONCATENATED MODULE: ./pages/_app.tsx








function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.AksaraProvider, {
        disableInjection: true,
        theme: Theme/* themeProps */.Y,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "apple-touch-icon",
                        sizes: "180x180",
                        href: "/favicons/apple-touch-icon.png",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: "/favicons/favicon-32x32.png",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "/favicons/favicon-16x16.png",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "manifest",
                        href: "/favicons/site.webmanifest",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "mask-icon",
                        href: "/favicons/safari-pinned-tab.svg",
                        color: "#5bbad5",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "/favicons/favicon.ico",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: "favicons/favicon-16x16.png",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileColor",
                        content: react_.theme.colors.blue06,
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "msapplication-TileImage",
                        content: "/ms-icon-144x144.png",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: react_.theme.colors.blue06,
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "publisher",
                        content: "PT. YesBoss Group Indonesia",
                        className: `jsx-${styleJSX.__hash}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "Kata AI Tech Team",
                        className: `jsx-${styleJSX.__hash}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps,
                className: `jsx-${styleJSX.__hash}` + " " + (pageProps && pageProps.className != null && pageProps.className || "")
            }),
            jsx_runtime_.jsx((style_default()), {
                id: styleJSX.__hash,
                children: styleJSX
            })
        ]
    }));
};


/***/ }),

/***/ 3436:
/***/ ((module) => {

module.exports = require("@aksara-ui/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [850], () => (__webpack_exec__(450)));
module.exports = __webpack_exports__;

})();