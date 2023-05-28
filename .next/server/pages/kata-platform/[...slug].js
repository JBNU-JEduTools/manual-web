"use strict";
(() => {
var exports = {};
exports.id = 776;
exports.ids = [776];
exports.modules = {

/***/ 6378:
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
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8037);
/* harmony import */ var components_mdx_MDXComponents__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6646);
/* harmony import */ var components_layout_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4167);
/* harmony import */ var components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(953);
/* harmony import */ var components_layouts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6955);
/* harmony import */ var components_docs_Pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5075);
/* harmony import */ var components_docs_DocsSidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5754);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1664);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5390);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(5675);
/* harmony import */ var docs_toc_kata_platform_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(7266);
/* harmony import */ var docs_linking_toc_kata_platform_json__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8877);
/* harmony import */ var components_page_Markdown__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9881);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_19__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_11__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_19__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










// import { DocsHelpful } from 'components/docs/DocsHelpful';














const PlatformPageTemplate = ({ post , linking  })=>{
    const MDXContent = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_11__.useMDXComponent)(post.body.code);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    if (!router.isFallback && !post?.slug) {
        router.push('/404');
    }
    const onTocSidebarClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((e, url)=>{
        e.preventDefault();
        router.push(url);
    }, [
        router
    ]);
    const isItemSelected = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((url)=>{
        return url === router.asPath;
    }, [
        router
    ]);
    const isAccordionHeaderActive = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((url)=>{
        const [baseUrl] = router.asPath.split('#');
        return url === baseUrl;
    }, [
        router
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Page__WEBPACK_IMPORTED_MODULE_4__/* .Page */ .T, {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {
                navHidden: true,
                children: router.isFallback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    children: "Loading…"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_docs_DocsWrapper__WEBPACK_IMPORTED_MODULE_5__/* .DocsWrapper */ .D, {
                    children: [
                        docs_toc_kata_platform_json__WEBPACK_IMPORTED_MODULE_21__ && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "table-of-contents",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_DocsSidebar__WEBPACK_IMPORTED_MODULE_17__/* .SidebarLogo */ .p, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_18__["default"], {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_3__.UnstyledAnchor, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_20__["default"], {
                                                layout: "fixed",
                                                width: 150,
                                                height: 40,
                                                alt: "Kata Platform Documentations",
                                                src: "/assets/images/products/kata-platform-logo-docs.svg"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_TableOfContents__WEBPACK_IMPORTED_MODULE_8__/* .TocJsonWrapper */ .p, {
                                    tree: docs_toc_kata_platform_json__WEBPACK_IMPORTED_MODULE_21__,
                                    onClick: onTocSidebarClick,
                                    isItemSelected: isItemSelected,
                                    isAccordionHeaderActive: isAccordionHeaderActive
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Container__WEBPACK_IMPORTED_MODULE_13__/* .DocsContainer */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                                    items: [
                                        {
                                            url: '/',
                                            urlDisplay: 'Home'
                                        },
                                        {
                                            url: '/kata-platform',
                                            urlDisplay: 'Kata Platform'
                                        },
                                        {
                                            urlDisplay: post.section
                                        }, 
                                    ]
                                }),
                                post.id !== 'about' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_DocsHeader__WEBPACK_IMPORTED_MODULE_6__/* .DocsHeader */ .U, {
                                    title: post.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_page_Markdown__WEBPACK_IMPORTED_MODULE_23__/* .MarkdownContent */ .S, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXContent, {
                                        components: components_mdx_MDXComponents__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z
                                    })
                                }),
                                linking && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_Pagination__WEBPACK_IMPORTED_MODULE_16__/* .PaginationDocs */ .W, {
                                    prevPage: linking.previous,
                                    nextPage: linking.next
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlatformPageTemplate);
async function getStaticPaths() {
    return {
        paths: await contentlayer_generated__WEBPACK_IMPORTED_MODULE_19__/* .allKataPlatforms.map */ .hF.map((p)=>({
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
    const post1 = contentlayer_generated__WEBPACK_IMPORTED_MODULE_19__/* .allKataPlatforms.find */ .hF.find((post)=>JSON.stringify(post.slug) === slugStringify
    );
    const linking = docs_linking_toc_kata_platform_json__WEBPACK_IMPORTED_MODULE_22__[post1.id] || null;
    return {
        props: {
            post: post1,
            linking
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

/***/ }),

/***/ 8877:
/***/ ((module) => {

module.exports = JSON.parse('{"about":{"previous":null,"next":{"id":"benefits-with-kata-platform","url":"/kata-platform/introduction/benefits-with-kata-platform","title":"Benefits with Kata Platform"}},"benefits-with-kata-platform":{"previous":{"id":"about","url":"/kata-platform/introduction/about","title":"What is Kata Platform"},"next":{"id":"kata-platform-features","url":"/kata-platform/introduction/kata-platform-features","title":"Kata Platform Features"}},"kata-platform-features":{"previous":{"id":"benefits-with-kata-platform","url":"/kata-platform/introduction/benefits-with-kata-platform","title":"Benefits with Kata Platform"},"next":{"id":"all-use-cases","url":"/kata-platform/use-case/all-use-cases","title":"All Use Cases"}},"all-use-cases":{"previous":{"id":"kata-platform-features","url":"/kata-platform/introduction/kata-platform-features","title":"Kata Platform Features"},"next":{"id":"designing-conversation","url":"/kata-platform/documentation-content/designing-conversation","title":"Designing Conversation"}},"designing-conversation":{"previous":{"id":"all-use-cases","url":"/kata-platform/use-case/all-use-cases","title":"All Use Cases"},"next":{"id":"start-your-first-chatbot","url":"/kata-platform/documentation-content/start-your-first-chatbot","title":"Start Your First Chatbot"}},"start-your-first-chatbot":{"previous":{"id":"designing-conversation","url":"/kata-platform/documentation-content/designing-conversation","title":"Designing Conversation"},"next":{"id":"analyze-your-bot-conversations","url":"/kata-platform/documentation-content/analyze-your-bot-conversations","title":"Analyze Your Bot Conversations"}},"analyze-your-bot-conversations":{"previous":{"id":"start-your-first-chatbot","url":"/kata-platform/documentation-content/start-your-first-chatbot","title":"Start Your First Chatbot"},"next":{"id":"error-log","url":"/kata-platform/documentation-content/error-log","title":"Error Log"}},"error-log":{"previous":{"id":"analyze-your-bot-conversations","url":"/kata-platform/documentation-content/analyze-your-bot-conversations","title":"Analyze Your Bot Conversations"},"next":{"id":"how-to-deploy-your-chatbot-using-generic-channel","url":"/kata-platform/how-to/how-to-deploy-your-chatbot-using-generic-channel","title":"How to Deploy Your Chatbot Using Generic Channel"}},"how-to-deploy-your-chatbot-using-generic-channel":{"previous":{"id":"error-log","url":"/kata-platform/documentation-content/error-log","title":"Error Log"},"next":{"id":"how-to-improve-your-chatbot-intelligence-by-training-your-nlu","url":"/kata-platform/how-to/how-to-improve-your-chatbot-intelligence-by-training-your-nlu","title":"How to Improve Your Chatbot Intelligence by Training Your NLU"}},"how-to-improve-your-chatbot-intelligence-by-training-your-nlu":{"previous":{"id":"how-to-deploy-your-chatbot-using-generic-channel","url":"/kata-platform/how-to/how-to-deploy-your-chatbot-using-generic-channel","title":"How to Deploy Your Chatbot Using Generic Channel"},"next":{"id":"how-to-use-nlu-threshold-to-enhance-customer-experience","url":"/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience","title":"How to Use NLU Threshold to Enhance Customer Experience"}},"how-to-use-nlu-threshold-to-enhance-customer-experience":{"previous":{"id":"how-to-improve-your-chatbot-intelligence-by-training-your-nlu","url":"/kata-platform/how-to/how-to-improve-your-chatbot-intelligence-by-training-your-nlu","title":"How to Improve Your Chatbot Intelligence by Training Your NLU"},"next":{"id":"how-to-use-super-model-to-improve-your-bot-intelligence","url":"/kata-platform/how-to/how-to-use-super-model-to-improve-your-bot-intelligence","title":"How to Use Super Model (“Kata Entity”) to Improve Your Bot Intelligence"}},"how-to-use-super-model-to-improve-your-bot-intelligence":{"previous":{"id":"how-to-use-nlu-threshold-to-enhance-customer-experience","url":"/kata-platform/how-to/how-to-use-nlu-threshold-to-enhance-customer-experience","title":"How to Use NLU Threshold to Enhance Customer Experience"},"next":{"id":"how-to-use-training-data-generator-to-automate-generating-training-data","url":"/kata-platform/how-to/how-to-use-training-data-generator-to-automate-generating-training-data","title":"How to Use Training Data Generator to Automate Generating Training Data"}},"how-to-use-training-data-generator-to-automate-generating-training-data":{"previous":{"id":"how-to-use-super-model-to-improve-your-bot-intelligence","url":"/kata-platform/how-to/how-to-use-super-model-to-improve-your-bot-intelligence","title":"How to Use Super Model (“Kata Entity”) to Improve Your Bot Intelligence"},"next":{"id":"how-to-use-bulk-training-for-faster-training-process","url":"/kata-platform/how-to/how-to-use-bulk-training-for-faster-training-process","title":"How to Use Bulk Training to the Faster Training Process"}},"how-to-use-bulk-training-for-faster-training-process":{"previous":{"id":"how-to-use-training-data-generator-to-automate-generating-training-data","url":"/kata-platform/how-to/how-to-use-training-data-generator-to-automate-generating-training-data","title":"How to Use Training Data Generator to Automate Generating Training Data"},"next":{"id":"using-sync-api-to-access-third-party-application","url":"/kata-platform/how-to/using-sync-api-to-access-third-party-application","title":"Using Sync API to Access Third-Party Application"}},"using-sync-api-to-access-third-party-application":{"previous":{"id":"how-to-use-bulk-training-for-faster-training-process","url":"/kata-platform/how-to/how-to-use-bulk-training-for-faster-training-process","title":"How to Use Bulk Training to the Faster Training Process"},"next":{"id":"using-async-api-to-access-third-party-application","url":"/kata-platform/how-to/using-async-api-to-access-third-party-application","title":"Using Async API to Access Third-Party Application"}},"using-async-api-to-access-third-party-application":{"previous":{"id":"using-sync-api-to-access-third-party-application","url":"/kata-platform/how-to/using-sync-api-to-access-third-party-application","title":"Using Sync API to Access Third-Party Application"},"next":{"id":"how-to-change-error-messages-in-your-chatbot","url":"/kata-platform/how-to/how-to-change-error-messages-in-your-chatbot","title":"How to Change Error Messages in Your Chatbot to Match Them With Chatbot Persona"}},"how-to-change-error-messages-in-your-chatbot":{"previous":{"id":"using-async-api-to-access-third-party-application","url":"/kata-platform/how-to/using-async-api-to-access-third-party-application","title":"Using Async API to Access Third-Party Application"},"next":{"id":"general-faqs","url":"/kata-platform/faqs/general-faqs","title":"General FAQs"}},"general-faqs":{"previous":{"id":"how-to-change-error-messages-in-your-chatbot","url":"/kata-platform/how-to/how-to-change-error-messages-in-your-chatbot","title":"How to Change Error Messages in Your Chatbot to Match Them With Chatbot Persona"},"next":{"id":"bot-development-faqs","url":"/kata-platform/faqs/bot-development-faqs","title":"Bot Development FAQs"}},"bot-development-faqs":{"previous":{"id":"general-faqs","url":"/kata-platform/faqs/general-faqs","title":"General FAQs"},"next":{"id":"glossary-general","url":"/kata-platform/glossary/general","title":"General"}},"glossary-general":{"previous":{"id":"bot-development-faqs","url":"/kata-platform/faqs/bot-development-faqs","title":"Bot Development FAQs"},"next":{"id":"glossary-kata-platform","url":"/kata-platform/glossary/kata-platform","title":"Kata Platform"}},"glossary-kata-platform":{"previous":{"id":"glossary-general","url":"/kata-platform/glossary/general","title":"General"},"next":{"id":"glossary-inside-kata-flow","url":"/kata-platform/glossary/inside-kata-flow","title":"Inside Kata Flow"}},"glossary-inside-kata-flow":{"previous":{"id":"glossary-kata-platform","url":"/kata-platform/glossary/kata-platform","title":"Kata Platform"},"next":{"id":"glossary-coming-soon","url":"/kata-platform/glossary/coming-soon","title":"Coming Soon"}},"glossary-coming-soon":{"previous":{"id":"glossary-inside-kata-flow","url":"/kata-platform/glossary/inside-kata-flow","title":"Inside Kata Flow"},"next":{"id":"release-notes-version","url":"/kata-platform/release-notes/version","title":"Version"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,495,850,955,919,167,953,821,75], () => (__webpack_exec__(6378)));
module.exports = __webpack_exports__;

})();