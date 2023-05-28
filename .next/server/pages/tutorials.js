"use strict";
(() => {
var exports = {};
exports.id = 204;
exports.ids = [204];
exports.modules = {

/***/ 9800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2373);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1919);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_tutorials_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1401);
/* harmony import */ var components_tutorials_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4420);
/* harmony import */ var components_tutorials_TutorialCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6563);
/* harmony import */ var components_layouts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6955);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5390);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var utils_variables__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2706);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_10__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_10__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];













const TutorialTitle = styled_components__WEBPACK_IMPORTED_MODULE_11___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading)`
  color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_5__.theme.colors.greydark02};
  margin-bottom: 14px;

  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_12__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    font-size: 24px;
    line-height: 32px;
  }

  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_12__/* .breakpoints.lg */ .AV.lg}px`}) {
    font-size: 36px;
    line-height: 44px;
  }
`;
const TutorialDescription = styled_components__WEBPACK_IMPORTED_MODULE_11___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text)`
  color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_5__.theme.colors.greydark02};
  font-weight: 400;

  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_12__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }

  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_12__/* .breakpoints.lg */ .AV.lg}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;
const LIMIT = [
    6,
    9,
    12
];
const Index = ({ tutorialPosts  })=>{
    const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
    const [limit, setLimit] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(6);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
        navHidden: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Kata Product Documentations - Tutorials"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
                        display: "flex",
                        py: 32,
                        mb: 48,
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TutorialTitle, {
                                children: "Tutorials 📚"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TutorialDescription, {
                                children: "Find the tutorials for our products"
                            })
                        ]
                    }),
                    tutorialPosts.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_tutorials_components__WEBPACK_IMPORTED_MODULE_6__/* .CardsWrapper */ .Y2, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorials_components__WEBPACK_IMPORTED_MODULE_6__/* .Cards */ .oy, {
                                children: tutorialPosts.slice((page - 1) * limit, limit * page).map((tutorial, idx)=>{
                                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorials_TutorialCard__WEBPACK_IMPORTED_MODULE_8__/* .TutorialCard */ .F, {
                                        index: idx,
                                        tutorial: tutorial
                                    }, tutorial.id));
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorials_pagination__WEBPACK_IMPORTED_MODULE_7__/* .PaginationWithDetails */ .h, {
                                current: page,
                                setPage: setPage,
                                totalPage: Math.floor(tutorialPosts.length / limit + 1),
                                limit: limit,
                                setLimit: setLimit,
                                limitList: LIMIT,
                                totalItems: tutorialPosts.length
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__/* .FooterWrapper */ .V, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$, {})
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    const posts = [
        ...contentlayer_generated__WEBPACK_IMPORTED_MODULE_10__/* .allTutorials */ .ez
    ];
    return {
        props: {
            tutorialPosts: posts
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

});

/***/ }),

/***/ 8933:
/***/ ((module) => {

module.exports = require("@aksara-ui/icons");

/***/ }),

/***/ 3436:
/***/ ((module) => {

module.exports = require("@aksara-ui/react");

/***/ }),

/***/ 3904:
/***/ ((module) => {

module.exports = require("@styled-system/should-forward-prop");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 2733:
/***/ ((module) => {

module.exports = require("fuse.js");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ }),

/***/ 5834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 7008:
/***/ ((module) => {

module.exports = import("contentlayer/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,850,955,919,167,394,420], () => (__webpack_exec__(9800)));
module.exports = __webpack_exports__;

})();