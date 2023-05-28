"use strict";
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 2373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const Container = ({ children  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        display: "flex",
        flexDirection: "column",
        flex: "1 1 auto",
        position: "relative",
        backgroundColor: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_1__.theme.colors.greylight02,
        width: '100%',
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 6563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ TutorialCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aksara_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8933);
/* harmony import */ var _aksara_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1401);
/* harmony import */ var _badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2630);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var components_image_NextImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9626);










const TutorialCard = ({ tutorial , index  })=>{
    const { title , imgSpot , id  } = tutorial;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_6__/* .Card */ .Zb, {
        index: index,
        display: 'flex',
        flexDirection: 'column',
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                position: 'relative',
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_image_NextImage__WEBPACK_IMPORTED_MODULE_9__/* .NextImage */ .o, {
                    src: imgSpot,
                    alt: title,
                    naturalHeight: 540,
                    naturalWidth: 1032
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CardContent, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        minHeight: "120px",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_badge__WEBPACK_IMPORTED_MODULE_7__/* .ProductBadge */ .o, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                        mr: 8,
                                        display: "flex",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
                                            width: 16,
                                            height: 16,
                                            layout: "fixed",
                                            src: "/assets/images/products/icon/kata-platform-icon.svg",
                                            alt: "Kata Platform"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                        fontSize: 12,
                                        fontWeight: 600,
                                        color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme.colors.greydark02,
                                        children: "Kata Platform"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                                scale: 700,
                                fontSize: 20,
                                color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme.colors.greydark02,
                                overflow: "hidden",
                                children: title
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        href: `/tutorials/${id}`,
                        passHref: true,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_6__/* .Anchor */ .ee, {
                            alignItems: 'end',
                            children: [
                                "View Article ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_icons__WEBPACK_IMPORTED_MODULE_1__.IconArrowRight, {
                                    width: 14
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    }, title));
};
const CardContent = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box)`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;


/***/ }),

/***/ 1401:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oy": () => (/* binding */ Cards),
/* harmony export */   "ee": () => (/* binding */ Anchor),
/* harmony export */   "Y2": () => (/* binding */ CardsWrapper),
/* harmony export */   "Zb": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_variables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2706);



const Cards = styled_components__WEBPACK_IMPORTED_MODULE_1___default()('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: ${(prop)=>prop && prop.mb ? prop.mb : '48px'
};

  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    flex-direction: column;
    margin-bottom: 24px;
    iframe,
    .yt-lite {
      width: 100% !important;
      height: 22vh;
      background-size: 100%;
      &:before {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }

  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg}px`}) {
    iframe,
    .yt-lite {
      width: 39vw;
      background-size: 100%;
      &:before {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }

  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.xl */ .AV.xl}px`}) {
    iframe,
    .yt-lite {
      width: 29vw;
      background-size: 100%;
      &:before {
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
      }
    }
  }
`;
const Anchor = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.UnstyledAnchor)`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.blue06};
  cursor: pointer;
  :hover {
    color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.blue08};
    text-decoration: underline;
  }
  svg {
    margin-left: 8px;
  }
  path {
    :hover {
      fill: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.blue08};
    }
    fill: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.blue06};
  }
`;
const CardsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box)`
  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    padding-left: 24px;
    padding-right: 24px;
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
const Card = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.Card)`
  border-radius: 8px;
  border: 1px solid ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.grey03};
  background-color: ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.white};
  cursor: default;
  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    max-width: 100% !important;
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
  @media only screen and (min-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_2__/* .breakpoints.lg */ .AV.lg}px`}) {
    width: 32%;
    margin-top: ${(props)=>props.index > 2 ? '32px' : '0px'
};
  }

  &:hover {
    box-shadow: 0px 8px 16px 0px ${_aksara_ui_react__WEBPACK_IMPORTED_MODULE_0__.theme.colors.greymed01};
  }
`;


/***/ })

};
;