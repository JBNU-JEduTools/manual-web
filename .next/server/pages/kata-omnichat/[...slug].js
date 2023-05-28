"use strict";
(() => {
var exports = {};
exports.id = 943;
exports.ids = [943];
exports.modules = {

/***/ 899:
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
/* harmony import */ var components_page_Markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9881);
/* harmony import */ var components_layout_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4167);
/* harmony import */ var components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(953);
/* harmony import */ var components_layouts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6955);
/* harmony import */ var components_docs_Pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5075);
/* harmony import */ var components_docs_DocsSidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5754);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1664);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5390);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(5675);
/* harmony import */ var docs_toc_kata_omnichat_json__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(51);
/* harmony import */ var docs_linking_toc_kata_omnichat_json__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3344);
/* harmony import */ var next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8037);
/* harmony import */ var components_mdx_MDXComponents__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(6646);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_18__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_22__]);
([contentlayer_generated__WEBPACK_IMPORTED_MODULE_18__, next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_22__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);










// import { DocsHelpful } from 'components/docs/DocsHelpful';














const OmnichatPageTemplate = ({ post , linking  })=>{
    const MDXContent = (0,next_contentlayer_hooks__WEBPACK_IMPORTED_MODULE_22__.useMDXComponent)(post.body.code);
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
                            " \xb7 Kata Omnichat Documentation"
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_layouts__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                navHidden: true,
                children: router.isFallback ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    children: "Loading…"
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_docs_DocsWrapper__WEBPACK_IMPORTED_MODULE_5__/* .DocsWrapper */ .D, {
                    children: [
                        docs_toc_kata_omnichat_json__WEBPACK_IMPORTED_MODULE_20__ && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "table-of-contents",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_DocsSidebar__WEBPACK_IMPORTED_MODULE_16__/* .SidebarLogo */ .p, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_17__["default"], {
                                        href: "/",
                                        passHref: true,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_3__.UnstyledAnchor, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_19__["default"], {
                                                layout: "fixed",
                                                width: 150,
                                                height: 40,
                                                alt: "Kata Omnichat Documentations",
                                                src: "/assets/images/products/kata-omnichat-logo-docs.svg"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_TableOfContents__WEBPACK_IMPORTED_MODULE_8__/* .TocJsonWrapper */ .p, {
                                    tree: docs_toc_kata_omnichat_json__WEBPACK_IMPORTED_MODULE_20__,
                                    onClick: onTocSidebarClick,
                                    isItemSelected: isItemSelected,
                                    isAccordionHeaderActive: isAccordionHeaderActive
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layout_Container__WEBPACK_IMPORTED_MODULE_12__/* .DocsContainer */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_breadcrumb_breadcrumb__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                    items: [
                                        {
                                            url: '/',
                                            urlDisplay: 'Home'
                                        },
                                        {
                                            url: '/kata-omnichat',
                                            urlDisplay: 'Kata Omnichat'
                                        },
                                        {
                                            urlDisplay: post.section
                                        }, 
                                    ]
                                }),
                                post.id !== 'about' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_DocsHeader__WEBPACK_IMPORTED_MODULE_6__/* .DocsHeader */ .U, {
                                    title: post.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_page_Markdown__WEBPACK_IMPORTED_MODULE_11__/* .MarkdownContent */ .S, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXContent, {
                                        components: components_mdx_MDXComponents__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z
                                    })
                                }),
                                linking && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_docs_Pagination__WEBPACK_IMPORTED_MODULE_15__/* .PaginationDocs */ .W, {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OmnichatPageTemplate);
async function getStaticPaths() {
    return {
        paths: await contentlayer_generated__WEBPACK_IMPORTED_MODULE_18__/* .allKataOmnichats.map */ .xj.map((p)=>({
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
    const post1 = contentlayer_generated__WEBPACK_IMPORTED_MODULE_18__/* .allKataOmnichats.find */ .xj.find((post)=>JSON.stringify(post.slug) === slugStringify
    );
    const linking = docs_linking_toc_kata_omnichat_json__WEBPACK_IMPORTED_MODULE_21__[post1.id] || null;
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

/***/ 3344:
/***/ ((module) => {

module.exports = JSON.parse('{"what-is-kata-omnichat":{"previous":null,"next":{"id":"benefits-with-kata-omnichat","url":"/kata-omnichat/introduction/benefits-with-kata-omnichat","title":"Benefits with Kata Omnichat"}},"benefits-with-kata-omnichat":{"previous":{"id":"what-is-kata-omnichat","url":"/kata-omnichat/introduction/what-is-kata-omnichat","title":"What is Kata Omnichat"},"next":{"id":"prepare-your-instagram-business-account","url":"/kata-omnichat/before-you-start/prepare-your-instagram-business-account","title":"Prepare your Instagram Business account"}},"prepare-your-instagram-business-account":{"previous":{"id":"benefits-with-kata-omnichat","url":"/kata-omnichat/introduction/benefits-with-kata-omnichat","title":"Benefits with Kata Omnichat"},"next":{"id":"prepare-your-waba-account","url":"/kata-omnichat/before-you-start/prepare-your-waba-account","title":"Prepare your WABA account"}},"prepare-your-waba-account":{"previous":{"id":"prepare-your-instagram-business-account","url":"/kata-omnichat/before-you-start/prepare-your-instagram-business-account","title":"Prepare your Instagram Business account"},"next":{"id":"register-your-account-first","url":"/kata-omnichat/getting-started/register-your-account-first","title":"Register your account first"}},"register-your-account-first":{"previous":{"id":"prepare-your-waba-account","url":"/kata-omnichat/before-you-start/prepare-your-waba-account","title":"Prepare your WABA account"},"next":{"id":"connect-your-instagram-messaging-inbox","url":"/kata-omnichat/getting-started/connect-your-instagram-messaging-inbox","title":"Connect your Instagram Messaging inbox"}},"connect-your-instagram-messaging-inbox":{"previous":{"id":"register-your-account-first","url":"/kata-omnichat/getting-started/register-your-account-first","title":"Register your account first"},"next":{"id":"connect-your-waba-inbox","url":"/kata-omnichat/getting-started/connect-your-waba-inbox","title":"Connect your WABA inbox"}},"connect-your-waba-inbox":{"previous":{"id":"connect-your-instagram-messaging-inbox","url":"/kata-omnichat/getting-started/connect-your-instagram-messaging-inbox","title":"Connect your Instagram Messaging inbox"},"next":{"id":"setup-agent-bot-in-kata-omnichat","url":"/kata-omnichat/configure-your-agent-chatbot/setup-agent-bot-in-kata-omnichat","title":"Setup Agent Bot in Kata Omnichat"}},"setup-agent-bot-in-kata-omnichat":{"previous":{"id":"connect-your-waba-inbox","url":"/kata-omnichat/getting-started/connect-your-waba-inbox","title":"Connect your WABA inbox"},"next":{"id":"create-agent-bot-from-kata-platform","url":"/kata-omnichat/configure-your-agent-chatbot/create-agent-bot-from-kata-platform","title":"Create Agent Bot from Kata Platform"}},"create-agent-bot-from-kata-platform":{"previous":{"id":"setup-agent-bot-in-kata-omnichat","url":"/kata-omnichat/configure-your-agent-chatbot/setup-agent-bot-in-kata-omnichat","title":"Setup Agent Bot in Kata Omnichat"},"next":{"id":"dashboard-update-profile","url":"/kata-omnichat/how-to-use-the-dashboard/update-profile","title":"Update profile"}},"dashboard-update-profile":{"previous":{"id":"create-agent-bot-from-kata-platform","url":"/kata-omnichat/configure-your-agent-chatbot/create-agent-bot-from-kata-platform","title":"Create Agent Bot from Kata Platform"},"next":{"id":"dashboard-change-password","url":"/kata-omnichat/how-to-use-the-dashboard/change-password","title":"Change password"}},"dashboard-change-password":{"previous":{"id":"dashboard-update-profile","url":"/kata-omnichat/how-to-use-the-dashboard/update-profile","title":"Update profile"},"next":{"id":"configure-account-introduction","url":"/kata-omnichat/configure-your-account/introduction","title":"Introduction"}},"configure-account-introduction":{"previous":{"id":"dashboard-change-password","url":"/kata-omnichat/how-to-use-the-dashboard/change-password","title":"Change password"},"next":{"id":"configure-account-how-to-use","url":"/kata-omnichat/configure-your-account/how-to-use","title":"How to use"}},"configure-account-how-to-use":{"previous":{"id":"configure-account-introduction","url":"/kata-omnichat/configure-your-account/introduction","title":"Introduction"},"next":{"id":"inbox-add-inbox","url":"/kata-omnichat/manage-inbox/add-inbox","title":"Add inbox"}},"inbox-add-inbox":{"previous":{"id":"configure-account-how-to-use","url":"/kata-omnichat/configure-your-account/how-to-use","title":"How to use"},"next":{"id":"inbox-add-agents","url":"/kata-omnichat/manage-inbox/add-agents","title":"Add agents"}},"inbox-add-agents":{"previous":{"id":"inbox-add-inbox","url":"/kata-omnichat/manage-inbox/add-inbox","title":"Add inbox"},"next":{"id":"manage-agents-to-inbox","url":"/kata-omnichat/manage-inbox-settings/manage-agents-to-inbox","title":"Manage agents to inbox"}},"manage-agents-to-inbox":{"previous":{"id":"inbox-add-agents","url":"/kata-omnichat/manage-inbox/add-agents","title":"Add agents"},"next":{"id":"set-up-quick-reply","url":"/kata-omnichat/manage-inbox-settings/set-up-quick-reply","title":"Set up quick reply"}},"set-up-quick-reply":{"previous":{"id":"manage-agents-to-inbox","url":"/kata-omnichat/manage-inbox-settings/manage-agents-to-inbox","title":"Manage agents to inbox"},"next":{"id":"set-up-business-hours","url":"/kata-omnichat/manage-inbox-settings/set-up-business-hours","title":"Set up business hours"}},"set-up-business-hours":{"previous":{"id":"set-up-quick-reply","url":"/kata-omnichat/manage-inbox-settings/set-up-quick-reply","title":"Set up quick reply"},"next":{"id":"set-up-ice-breaker","url":"/kata-omnichat/manage-inbox-settings/set-up-ice-breaker","title":"Set Up Ice Breaker"}},"set-up-ice-breaker":{"previous":{"id":"set-up-business-hours","url":"/kata-omnichat/manage-inbox-settings/set-up-business-hours","title":"Set up business hours"},"next":{"id":"add-agent","url":"/kata-omnichat/manage-agent/add-agent","title":"Add agent"}},"add-agent":{"previous":{"id":"set-up-ice-breaker","url":"/kata-omnichat/manage-inbox-settings/set-up-ice-breaker","title":"Set Up Ice Breaker"},"next":{"id":"edit-agent","url":"/kata-omnichat/manage-agent/edit-agent","title":"Edit agent"}},"edit-agent":{"previous":{"id":"add-agent","url":"/kata-omnichat/manage-agent/add-agent","title":"Add agent"},"next":{"id":"delete-agent","url":"/kata-omnichat/manage-agent/delete-agent","title":"Delete agent"}},"delete-agent":{"previous":{"id":"edit-agent","url":"/kata-omnichat/manage-agent/edit-agent","title":"Edit agent"},"next":{"id":"received-the-invitation","url":"/kata-omnichat/manage-agent/received-the-invitation","title":"Received the invitation as administrator or agent"}},"received-the-invitation":{"previous":{"id":"delete-agent","url":"/kata-omnichat/manage-agent/delete-agent","title":"Delete agent"},"next":{"id":"admin-view-conversation","url":"/kata-omnichat/manage-your-conversation/admin-view-conversation","title":"Admin view conversation"}},"admin-view-conversation":{"previous":{"id":"received-the-invitation","url":"/kata-omnichat/manage-agent/received-the-invitation","title":"Received the invitation as administrator or agent"},"next":{"id":"agent-view-conversation","url":"/kata-omnichat/manage-your-conversation/agent-view-conversation","title":"Agent view conversation"}},"agent-view-conversation":{"previous":{"id":"admin-view-conversation","url":"/kata-omnichat/manage-your-conversation/admin-view-conversation","title":"Admin view conversation"},"next":{"id":"whatsapp-business-conversation-using-bot","url":"/kata-omnichat/manage-your-conversation/whatsapp-business-conversation-using-bot","title":"Whatsapp Business conversation using a bot"}},"whatsapp-business-conversation-using-bot":{"previous":{"id":"agent-view-conversation","url":"/kata-omnichat/manage-your-conversation/agent-view-conversation","title":"Agent view conversation"},"next":{"id":"whatsapp-business-conversation-in-agent-side","url":"/kata-omnichat/manage-your-conversation/whatsapp-business-conversation-in-agent-side","title":"Whatsapp Business API conversation in agent-side (with or without bot)"}},"whatsapp-business-conversation-in-agent-side":{"previous":{"id":"whatsapp-business-conversation-using-bot","url":"/kata-omnichat/manage-your-conversation/whatsapp-business-conversation-using-bot","title":"Whatsapp Business conversation using a bot"},"next":{"id":"conversation-in-customer-side-using-bot","url":"/kata-omnichat/manage-your-conversation/conversation-in-customer-side-using-bot","title":"Conversation in Customer-side using bot"}},"conversation-in-customer-side-using-bot":{"previous":{"id":"whatsapp-business-conversation-in-agent-side","url":"/kata-omnichat/manage-your-conversation/whatsapp-business-conversation-in-agent-side","title":"Whatsapp Business API conversation in agent-side (with or without bot)"},"next":{"id":"conversation-in-customer-side-without-bot","url":"/kata-omnichat/manage-your-conversation/conversation-in-customer-side-without-bot","title":"Conversation in Customer-side for Instagram Messaging (without bot)"}},"conversation-in-customer-side-without-bot":{"previous":{"id":"conversation-in-customer-side-using-bot","url":"/kata-omnichat/manage-your-conversation/conversation-in-customer-side-using-bot","title":"Conversation in Customer-side using bot"},"next":{"id":"see-conversation-between-chatbot-and-customer","url":"/kata-omnichat/manage-your-conversation/see-conversation-between-chatbot-and-customer","title":"See Conversation between Chatbot and Customer"}},"see-conversation-between-chatbot-and-customer":{"previous":{"id":"conversation-in-customer-side-without-bot","url":"/kata-omnichat/manage-your-conversation/conversation-in-customer-side-without-bot","title":"Conversation in Customer-side for Instagram Messaging (without bot)"},"next":{"id":"using-private-notes-in-conversations","url":"/kata-omnichat/manage-your-conversation/using-private-notes-in-conversations","title":"Using private notes in conversations"}},"using-private-notes-in-conversations":{"previous":{"id":"see-conversation-between-chatbot-and-customer","url":"/kata-omnichat/manage-your-conversation/see-conversation-between-chatbot-and-customer","title":"See Conversation between Chatbot and Customer"},"next":{"id":"manual-agent-assignment","url":"/kata-omnichat/manage-your-conversation/manual-agent-assignment","title":"Manual Agent Assignment"}},"manual-agent-assignment":{"previous":{"id":"using-private-notes-in-conversations","url":"/kata-omnichat/manage-your-conversation/using-private-notes-in-conversations","title":"Using private notes in conversations"},"next":{"id":"auto-agent-assignment","url":"/kata-omnichat/manage-your-conversation/auto-agent-assignment","title":"Auto agent assignment"}},"auto-agent-assignment":{"previous":{"id":"manual-agent-assignment","url":"/kata-omnichat/manage-your-conversation/manual-agent-assignment","title":"Manual Agent Assignment"},"next":{"id":"resolve-conversation","url":"/kata-omnichat/manage-your-conversation/resolve-conversation","title":"Resolve conversation"}},"resolve-conversation":{"previous":{"id":"auto-agent-assignment","url":"/kata-omnichat/manage-your-conversation/auto-agent-assignment","title":"Auto agent assignment"},"next":{"id":"take-over-bot","url":"/kata-omnichat/manage-your-conversation/take-over-bot","title":"Take-over bot"}},"take-over-bot":{"previous":{"id":"resolve-conversation","url":"/kata-omnichat/manage-your-conversation/resolve-conversation","title":"Resolve conversation"},"next":{"id":"mute-conversation","url":"/kata-omnichat/manage-your-conversation/mute-conversation","title":"Mute conversation"}},"mute-conversation":{"previous":{"id":"take-over-bot","url":"/kata-omnichat/manage-your-conversation/take-over-bot","title":"Take-over bot"},"next":{"id":"download-transcript","url":"/kata-omnichat/manage-your-conversation/download-transcript","title":"Download transcript"}},"download-transcript":{"previous":{"id":"mute-conversation","url":"/kata-omnichat/manage-your-conversation/mute-conversation","title":"Mute conversation"},"next":{"id":"view-contact","url":"/kata-omnichat/manage-your-contact/view-contact","title":"View contact"}},"view-contact":{"previous":{"id":"download-transcript","url":"/kata-omnichat/manage-your-conversation/download-transcript","title":"Download transcript"},"next":{"id":"add-contact","url":"/kata-omnichat/manage-your-contact/add-contact","title":"Add contact"}},"add-contact":{"previous":{"id":"view-contact","url":"/kata-omnichat/manage-your-contact/view-contact","title":"View contact"},"next":{"id":"add-label","url":"/kata-omnichat/manage-label/add-label","title":"Add label"}},"add-label":{"previous":{"id":"add-contact","url":"/kata-omnichat/manage-your-contact/add-contact","title":"Add contact"},"next":{"id":"add-conversation-to-a-label","url":"/kata-omnichat/manage-label/add-conversation-to-a-label","title":"Add conversation to a label"}},"add-conversation-to-a-label":{"previous":{"id":"add-label","url":"/kata-omnichat/manage-label/add-label","title":"Add label"},"next":{"id":"add-teams","url":"/kata-omnichat/manage-teams/add-teams","title":"Add teams"}},"add-teams":{"previous":{"id":"add-conversation-to-a-label","url":"/kata-omnichat/manage-label/add-conversation-to-a-label","title":"Add conversation to a label"},"next":{"id":"set-up-canned-responses","url":"/kata-omnichat/canned-response/set-up-canned-responses","title":"Set up canned responses"}},"set-up-canned-responses":{"previous":{"id":"add-teams","url":"/kata-omnichat/manage-teams/add-teams","title":"Add teams"},"next":{"id":"email-notification-introduction","url":"/kata-omnichat/setup-email-notification/introduction","title":"Introduction"}},"email-notification-introduction":{"previous":{"id":"set-up-canned-responses","url":"/kata-omnichat/canned-response/set-up-canned-responses","title":"Set up canned responses"},"next":{"id":"email-notification-how-to-use","url":"/kata-omnichat/setup-email-notification/how-to-use","title":"How to use"}},"email-notification-how-to-use":{"previous":{"id":"email-notification-introduction","url":"/kata-omnichat/setup-email-notification/introduction","title":"Introduction"},"next":{"id":"access-token-introduction","url":"/kata-omnichat/get-access-token/introduction","title":"Introduction"}},"access-token-introduction":{"previous":{"id":"email-notification-how-to-use","url":"/kata-omnichat/setup-email-notification/how-to-use","title":"How to use"},"next":{"id":"access-token-how-to-use","url":"/kata-omnichat/get-access-token/how-to-use","title":"How to use"}},"access-token-how-to-use":{"previous":{"id":"access-token-introduction","url":"/kata-omnichat/get-access-token/introduction","title":"Introduction"},"next":{"id":"audio-notification-introduction","url":"/kata-omnichat/enable-audio-notification/introduction","title":"Introduction"}},"audio-notification-introduction":{"previous":{"id":"access-token-how-to-use","url":"/kata-omnichat/get-access-token/how-to-use","title":"How to use"},"next":{"id":"audio-notification-how-to-use","url":"/kata-omnichat/enable-audio-notification/how-to-use","title":"How to use"}},"audio-notification-how-to-use":{"previous":{"id":"audio-notification-introduction","url":"/kata-omnichat/enable-audio-notification/introduction","title":"Introduction"},"next":{"id":"change-your-status-introduction","url":"/kata-omnichat/change-your-status/introduction","title":"Introduction"}},"change-your-status-introduction":{"previous":{"id":"audio-notification-how-to-use","url":"/kata-omnichat/enable-audio-notification/how-to-use","title":"How to use"},"next":{"id":"change-your-status-how-to-use","url":"/kata-omnichat/change-your-status/how-to-use","title":"How to use"}},"change-your-status-how-to-use":{"previous":{"id":"change-your-status-introduction","url":"/kata-omnichat/change-your-status/introduction","title":"Introduction"},"next":{"id":"view-report","url":"/kata-omnichat/reports/view-report","title":"View report"}},"view-report":{"previous":{"id":"change-your-status-how-to-use","url":"/kata-omnichat/change-your-status/how-to-use","title":"How to use"},"next":{"id":"download-report","url":"/kata-omnichat/reports/download-report","title":"Download report"}},"download-report":{"previous":{"id":"view-report","url":"/kata-omnichat/reports/view-report","title":"View report"},"next":{"id":"release-notes-version","url":"/kata-omnichat/release-notes/version","title":"Version"}}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,495,850,955,919,167,953,821,75], () => (__webpack_exec__(899)));
module.exports = __webpack_exports__;

})();