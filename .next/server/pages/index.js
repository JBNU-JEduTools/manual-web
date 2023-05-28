"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 1779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CU": () => (/* binding */ DocsCard),
/* harmony export */   "s2": () => (/* binding */ DocsContent),
/* harmony export */   "Ih": () => (/* binding */ HeaderPortal),
/* harmony export */   "Jv": () => (/* binding */ DocsCardWrapper),
/* harmony export */   "ED": () => (/* binding */ TutorialWrapper),
/* harmony export */   "dI": () => (/* binding */ HeroWrapper),
/* harmony export */   "ee": () => (/* binding */ Anchor),
/* harmony export */   "hs": () => (/* binding */ HeaderSegment),
/* harmony export */   "TQ": () => (/* binding */ PortalWrapper),
/* harmony export */   "xU": () => (/* binding */ PortalTitle),
/* harmony export */   "w6": () => (/* binding */ PortalDescription)
/* harmony export */ });
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2706);



const DocsCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Card)`
  padding: 18px 36px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: #ffffff;
  height: fit-content;
  max-width: auto;
  z-index: 3;
  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md - 1}px`}) {
    width: 100%;
    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
  @media only screen and (width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md}px`}) {
    margin-right: 12px;
    width: 355px;
    max-width: 255px;
    margin-bottom: 12px;
  }
  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md + 1}px`}) {
    margin-right: 12px;
    width: 30%;
    margin-bottom: 12px;
  }
  img {
    margin-right: 24px;
  }
  &:hover {
    box-shadow: 0px 8px 16px 0px ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.greydark01};
  }
`;
const DocsContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box)`
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md - 1}px`}) {
    height: 30px;
  }
  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md}px`}) {
    height: 54px;
  }
`;
const HeaderPortal = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.white};
  margin-top: 48px;

  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg}px`}) {
    margin: 48px 16px 32px;
    text-align: center;
  }
`;
const DocsCardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box)`
  display: flex;
  justify-content: center;
  width: 70%;
  flex-direction: row;
  font-weight: 700;
  flex-wrap: wrap;
  align-items: center;

  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    width: 100%;
    padding-right: 16px;
    padding-left: 16px;
  }
  @media only screen and (width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg}px`}) {
    width: 100%;
  }
  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg + 1}px`}) {
    margin-top: 48px;
  }
`;
const TutorialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box)`
  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg}px`}) {
    padding-left: 10vw;
    padding-right: 10vw;
  }
  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.xl */ .AV.xl}px`}) {
    padding-left: 20vw;
    padding-right: 20vw;
  }
`;
const HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div')`
  position: absolute;

  @media only screen and (max-width: ${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md}px) {
    width: 140px !important;
  }
  @media only screen and (min-width: ${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md + 1}px) {
    width: 240px !important;
  }
  @media only screen and (min-width: ${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg + 1}px) {
    width: 385px !important;
  }
`;
const Anchor = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.UnstyledAnchor)`
  font-weight: 700;
  font-family: 'Inter-bold';
  color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.grey08};

  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg}px`}) {
    font-size: 16px;
  }

  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg + 1}px`}) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    text-decoration: none;
    color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.grey08};
  }
`;
const HeaderSegment = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  @media only screen and (max-width: ${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg - 1}px) {
    margin-bottom: 24px;
  }

  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg}px`}) {
    margin-bottom: 32px;
  }
`;
const PortalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box)`
  display: flex;
  padding-bottom: 48px;
  background-color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.blue07};
  margin-bottom: 48px;
`;
const PortalTitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Heading)`
  color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.greylight01};
  font-weight: 700;
  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md - 1}px`}) {
    font-size: 24px;
    line-height: 32px;
  }
  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md}px`}) {
    font-size: 36px;
    line-height: 44px;
  }
`;
const PortalDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text)`
  color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.greylight01};
  font-weight: 400;
  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.md */ .AV.md}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;


/***/ }),

/***/ 99:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Portal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6076);
/* harmony import */ var utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2706);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1779);






function Portal() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_5__/* .PortalWrapper */ .TQ, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .HeroWrapper */ .dI, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    width: 385,
                    height: 335,
                    layout: "responsive",
                    src: "/assets/images/portal-hero.svg",
                    alt: "Portal Hero"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: utils_variables__WEBPACK_IMPORTED_MODULE_4__/* .layerIndexes.flat */ .J6.flat,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_5__/* .HeaderPortal */ .Ih, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .PortalTitle */ .xU, {
                                children: "Kata Product Documentations 👋"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .PortalDescription */ .w6, {
                                children: "Find the comprehensive document and tutorials for our products"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .DocsCardWrapper */ .Jv, {
                        children: utils_constants__WEBPACK_IMPORTED_MODULE_3__/* .PRODUCTS.map */ .bQ.map((product, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .DocsCard */ .CU, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_5__/* .Anchor */ .ee, {
                                    href: product.url,
                                    target: product.externalUrl ? '_blank' : '',
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_5__/* .DocsContent */ .s2, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                                display: "flex",
                                                mr: 24,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                    layout: "fixed",
                                                    width: 32,
                                                    height: 32,
                                                    src: product.imgPath,
                                                    alt: product.name
                                                })
                                            }),
                                            product.name
                                        ]
                                    })
                                })
                            }, `${idx}-${product.name}`)
                        )
                    })
                ]
            })
        ]
    }));
};


/***/ }),

/***/ 3898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_tutorials_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1779);
/* harmony import */ var components_tutorials_TutorialCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6563);






const Tutorials = ({ tutorials  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        mb: 48,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .HeaderSegment */ .hs, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                        scale: 700,
                        fontSize: 24,
                        color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.greydark02,
                        children: "Tutorials"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.UnstyledAnchor, {
                        fontSize: 16,
                        href: "/tutorials",
                        cursor: "pointer",
                        color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.blue07,
                        _hover: {
                            textDecoration: 'underline',
                            color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.blue09,
                            fontWeight: 500
                        },
                        fontWeight: 500,
                        children: "See all"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorials_components__WEBPACK_IMPORTED_MODULE_2__/* .Cards */ .oy, {
                children: tutorials.map((tutorial, idx)=>{
                    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_tutorials_TutorialCard__WEBPACK_IMPORTED_MODULE_5__/* .TutorialCard */ .F, {
                        index: idx,
                        tutorial: tutorial
                    }, tutorial.id));
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tutorials);


/***/ }),

/***/ 3968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_tutorials_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1401);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1779);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(495);
/* harmony import */ var react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_variables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2706);








const VideoTitle = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text)`
  color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.greydark02};
  text-align: center;
  margin-bottom: 10px;
  margin-top: 12px;
  font-weight: 700;

  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }

  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.lg */ .AV.lg}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;
const VideoTutorial = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VideoTutorialWrapper, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .HeaderSegment */ .hs, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                        scale: 700,
                        fontSize: 24,
                        mb: 0,
                        color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.greydark02,
                        children: "Video Tutorial"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.UnstyledAnchor, {
                        fontSize: 16,
                        href: "https://www.youtube.com/channel/UCrud2GevnuhBNM7C7RjakVg/playlists",
                        target: "_blank",
                        cursor: "pointer",
                        color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.blue07,
                        _hover: {
                            textDecoration: 'underline',
                            color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.blue09,
                            fontWeight: 500
                        },
                        fontWeight: 500,
                        children: "See all"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_tutorials_components__WEBPACK_IMPORTED_MODULE_2__/* .Cards */ .oy, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VideoWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_5___default()), {
                                id: "fTMnCy9NE2w",
                                title: "Self-Onboarding",
                                thumbnail: "/assets/images/thumbnail/self-onboarding.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoTitle, {
                                children: "Kata Omnichat 2.0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(VideoWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_lite_youtube_embed__WEBPACK_IMPORTED_MODULE_5___default()), {
                                id: "eFWbrAObOXg",
                                title: "How to Set Up Qios",
                                thumbnail: "/assets/images/thumbnail/how-to-set-up-qios.png"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(VideoTitle, {
                                children: "Qios Tutorial"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoTutorial);
const VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box)`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${utils_variables__WEBPACK_IMPORTED_MODULE_7__/* .breakpoints.lg */ .AV.lg - 1}px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;
const VideoTutorialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box)`
  margin-bottom: 48px;
`;


/***/ }),

/***/ 7536:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2373);
/* harmony import */ var _components_portal_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(99);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_layout_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1919);
/* harmony import */ var components_portal_tutorials__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3898);
/* harmony import */ var components_portal_videotutorial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3968);
/* harmony import */ var components_portal_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1779);
/* harmony import */ var components_layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6955);
/* harmony import */ var contentlayer_generated__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5390);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([contentlayer_generated__WEBPACK_IMPORTED_MODULE_9__]);
contentlayer_generated__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const Index = ({ tutorialPosts  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_layouts__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        navHidden: true,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: "Kata Product Documentations"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_portal_portal__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_portal_components__WEBPACK_IMPORTED_MODULE_7__/* .TutorialWrapper */ .ED, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_portal_tutorials__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                tutorials: tutorialPosts
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_portal_videotutorial__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
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
    const posts = contentlayer_generated__WEBPACK_IMPORTED_MODULE_9__/* .allTutorials.slice */ .ez.slice(0, 6);
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
var __webpack_exports__ = __webpack_require__.X(0, [730,61,495,850,955,919,167,394], () => (__webpack_exec__(7536)));
module.exports = __webpack_exports__;

})();