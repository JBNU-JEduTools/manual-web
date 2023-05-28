"use strict";
(() => {
var exports = {};
exports.id = 650;
exports.ids = [650];
exports.modules = {

/***/ 8400:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_layout_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7029);
/* harmony import */ var components_docs_DocsWrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6984);
/* harmony import */ var components_docs_DocsHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2083);
/* harmony import */ var components_layout_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1919);
/* harmony import */ var components_docs_TableOfContents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6816);
/* harmony import */ var components_docs_BackToTopButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(112);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var components_layout_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4167);
/* harmony import */ var components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(953);
/* harmony import */ var components_layouts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6955);
/* harmony import */ var components_docs_DocsSidebar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5754);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1664);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(6076);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5390);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5675);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8037);
/* harmony import */ var components_mdx_MDXComponents__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6646);
/* harmony import */ var components_page_Markdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(9881);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_17__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_19__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_17__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










// import { DocsHelpful } from 'components/docs/DocsHelpful';












const TutorialPageTemplate = ({ post , toc  })=>{
    const MDXContent = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_19__.useMDXComponent)(post.body.code);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    if (!router.isFallback && !post?.slug) {
        router.push('/404');
    }
    const onTocSidebarClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((e, url)=>{
        e.preventDefault();
        router.push(url);
    }, []);
    const isItemSelected = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((tag)=>{
        // because toc based on one file only, the comparison is after # tag only
        return router.asPath.indexOf(tag) !== -1;
    }, [
        router
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Page__WEBPACK_IMPORTED_MODULE_4__/* .Page */ .T, {
        suppressHydrationWarning: true,
        docsPage: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            post.title,
                            " \xb7 Kata Platform Documentation"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: post.excerpt
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:title",
                        content: post.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:description",
                        content: post.excerpt
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                navHidden: true,
                children: router.isFallback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    children: "Loading…"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_docs_DocsWrapper__WEBPACK_IMPORTED_MODULE_5__/* .DocsWrapper */ .D, {
                    children: [
                        toc && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "table-of-contents",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_DocsSidebar__WEBPACK_IMPORTED_MODULE_14__/* .SidebarLogo */ .p, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_15__["default"], {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_3__.UnstyledAnchor, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                                layout: "fixed",
                                                width: 60,
                                                height: 40,
                                                src: "/assets/images/logo-docs.svg",
                                                alt: "Kata Documentations"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_TableOfContents__WEBPACK_IMPORTED_MODULE_8__/* .TocJsonWrapper */ .p, {
                                    tree: toc,
                                    onClick: onTocSidebarClick,
                                    isItemSelected: isItemSelected,
                                    isAccordionHeaderActive: isItemSelected
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Container__WEBPACK_IMPORTED_MODULE_11__/* .DocsContainer */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                    items: [
                                        {
                                            url: '/',
                                            urlDisplay: 'Home'
                                        },
                                        {
                                            url: '/tutorials',
                                            urlDisplay: 'All Tutorials'
                                        },
                                        {
                                            url: `/${post.product}`,
                                            urlDisplay: utils_constants__WEBPACK_IMPORTED_MODULE_16__/* .PRODUCTS_DICT */ .Ul[post.product]
                                        },
                                        {
                                            urlDisplay: 'Tutorial'
                                        }, 
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_DocsHeader__WEBPACK_IMPORTED_MODULE_6__/* .DocsHeader */ .U, {
                                    title: post.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_page_Markdown__WEBPACK_IMPORTED_MODULE_21__/* .MarkdownContent */ .S, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXContent, {
                                        components: components_mdx_MDXComponents__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Footer__WEBPACK_IMPORTED_MODULE_7__/* .FooterWrapper */ .V, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layout_Footer__WEBPACK_IMPORTED_MODULE_7__/* .Footer */ .$, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_BackToTopButton__WEBPACK_IMPORTED_MODULE_9__/* .BackToTopButton */ .z, {
                            href: "#"
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TutorialPageTemplate);
async function getStaticPaths() {
    return {
        paths: await contentlayer_generated__WEBPACK_IMPORTED_MODULE_17__/* .allTutorials.map */ .ez.map((p)=>({
                params: {
                    slug: p.slug
                }
            })
        ),
        fallback: false
    };
}
async function getStaticProps({ params  }) {
    const slugStringify = JSON.stringify(params.slug);
    const post1 = contentlayer_generated__WEBPACK_IMPORTED_MODULE_17__/* .allTutorials.find */ .ez.find((post)=>JSON.stringify(post.slug) === slugStringify
    );
    const toc = await __webpack_require__(1372)(`./${params?.slug[0]}.json`);
    return {
        props: {
            post: post1,
            toc
        }
    };
}

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

/***/ }),

/***/ 8037:
/***/ ((module) => {

module.exports = import("next-contentlayer/hooks");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,495,850,955,919,167,953,821], () => (__webpack_exec__(8400)));
module.exports = __webpack_exports__;

})();