"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 5075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "W": () => (/* reexport */ Pagination_Pagination)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/foundations/index.ts + 16 modules
var foundations = __webpack_require__(4994);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
;// CONCATENATED MODULE: ./components/docs/Pagination/Pagination.tsx







const Wrapper = external_styled_components_default()('aside')`
  margin-top: ${variables/* space.xl */.Dh.xl}px;
  margin-bottom: ${variables/* space.xl */.Dh.xl}px;
  border-collapse: collapse;
  border-radius: 4px;
`;
const WrapperInner = external_styled_components_default()('div')`
  display: flex;
  flex-direction: column;

  @media (min-width: ${variables/* breakpoints.md */.AV.md}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const PaginationButton = external_styled_components_default()('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: ${variables/* colors.grey02 */.O9.grey02};

  svg {
    g {
      fill: ${variables/* colors.grey07 */.O9.grey07};
    }
  }

  &:first-child {
    margin-top: 16px;
    margin-right: 24px;
  }

  &:last-child {
    margin-top: 16px;
    margin-left: 24px;
  }
`;
const PaginationTitle = external_styled_components_default()(foundations/* Heading */.X6)`
  overflow: hidden;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
const PaginationHeading = external_styled_components_default()(foundations/* Text */.xv)``;
const PaginationLink = external_styled_components_default()(next_link["default"])`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    ${PaginationButton} {
      background-color: ${variables/* colors.grey03 */.O9.grey03};

      svg {
        g {
          fill: ${variables/* colors.grey07 */.O9.grey07};
        }
      }
    }

    ${PaginationTitle} {
      color: ${variables/* colors.blue06 */.O9.blue06};
    }
  }

  &:focus {
    ${PaginationButton} {
      background-color: ${variables/* colors.blue07 */.O9.blue07};

      svg {
        g {
          fill: ${variables/* colors.white */.O9.white};
        }
      }
    }

    ${PaginationTitle} {
      color: ${variables/* colors.grey07 */.O9.grey07};
    }
  }
`;
const PaginationItem = external_styled_components_default()('div')`
  display: flex;
  position: relative;
  flex: 1 0 auto;
  align-items: center;
  padding: 0 ${variables/* space.md */.Dh.md}px;
  overflow: hidden;
  background-color: ${variables/* colors.grey01 */.O9.grey01};
  border-radius: 4px;
  padding: 24px;

  &:first-child {
    justify-content: flex-start;
    text-align: left;
  }

  &:last-child {
    margin-top: ${variables/* space.md */.Dh.md}px;
    justify-content: flex-end;
    text-align: right;
  }

  @media (min-width: ${variables/* breakpoints.md */.AV.md}px) {
    flex: 1 0 50%;

    &:not(:first-child) {
      border-left: none;
    }

    &:first-child {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right: none;
    }

    &:last-child {
      margin-top: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: none;
    }
  }
`;
const PaginationBlock = external_styled_components_default()('div')``;
const Pagination = ({ prevPage , nextPage  })=>/*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(WrapperInner, {
            children: [
                prevPage && /*#__PURE__*/ jsx_runtime_.jsx(PaginationItem, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PaginationLink, {
                        href: prevPage.url,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            display: "flex",
                            cursor: 'pointer',
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    id: "ic-chevron-left",
                                                    d: "M.238 8.565l7.329 7.187a.837.837 0 0 0 1.164 0 .795.795 0 0 0 0-1.14L1.984 7.994l6.747-6.617a.796.796 0 0 0 0-1.141.837.837 0 0 0-1.165 0L.237 7.423a.804.804 0 0 0 .001 1.142z"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                fill: "none",
                                                fillRule: "evenodd",
                                                transform: "translate(8 4)",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                                                        id: "ic-chevron-left-mask",
                                                        fill: "#fff",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                            xlinkHref: "#ic-chevron-left"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                        fill: "none",
                                                        fillRule: "nonzero",
                                                        xlinkHref: "#ic-chevron-left"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        fill: "none",
                                                        mask: "url(#ic-chevron-left-mask)",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M-8-4h24v24H-8z"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PaginationBlock, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(PaginationHeading, {
                                            size: 200,
                                            color: "grey04",
                                            display: "block",
                                            children: "Previous"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(PaginationTitle, {
                                            size: 400,
                                            children: prevPage.title
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                }),
                nextPage && /*#__PURE__*/ jsx_runtime_.jsx(PaginationItem, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(PaginationLink, {
                        href: nextPage.url,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            display: "flex",
                            cursor: 'pointer',
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PaginationBlock, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(PaginationHeading, {
                                            size: 200,
                                            color: "grey04",
                                            display: "block",
                                            children: "Next"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(PaginationTitle, {
                                            size: 400,
                                            children: nextPage.title
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(PaginationButton, {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    id: "ic-chevron-right",
                                                    d: "M8.742 7.423L1.414.236a.837.837 0 0 0-1.165 0 .795.795 0 0 0 0 1.14l6.747 6.618L.25 14.61a.796.796 0 0 0 0 1.141.837.837 0 0 0 1.165 0l7.328-7.187a.803.803 0 0 0 0-1.142z"
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                                                fill: "none",
                                                fillRule: "evenodd",
                                                transform: "translate(8 4)",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("mask", {
                                                        id: "ic-chevron-right-mask",
                                                        fill: "#fff",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                            xlinkHref: "#ic-chevron-right"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("use", {
                                                        fill: "none",
                                                        fillRule: "nonzero",
                                                        xlinkHref: "#ic-chevron-right"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                                        fill: "none",
                                                        mask: "url(#ic-chevron-right-mask)",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            d: "M-8-4h24v24H-8z"
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    })
;
/* harmony default export */ const Pagination_Pagination = (Pagination);

;// CONCATENATED MODULE: ./components/docs/Pagination/index.ts



/***/ })

};
;