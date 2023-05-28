"use strict";
exports.id = 420;
exports.ids = [420];
exports.modules = {

/***/ 4420:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ PaginationWithDetails)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_variables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2706);





const PaginationWithDetails = ({ current , totalPage , limit , limitList , totalItems , setLimit , setPage ,  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(PaginationWrapper, {
        alignItems: "center",
        justifyContent: "space-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PaginationDetailWrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.PaginationDetail, {
                    page: current,
                    limit: limit,
                    length: totalItems
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Pagination, {
                onSelect: setPage,
                current: current,
                total: totalPage
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.PaginationFilter, {
                selectedItem: limit,
                items: limitList,
                onChange: (changes)=>{
                    setLimit(changes);
                    setPage(1);
                }
            })
        ]
    }));
};
const PaginationWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box)`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_4__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    line-height: 64px;
    flex-direction: column;
    padding-left: 16px;
    padding-right: 16px;
  } ;
`;
const PaginationDetailWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box)`
  @media only screen and (max-width: ${`${utils_variables__WEBPACK_IMPORTED_MODULE_4__/* .breakpoints.lg */ .AV.lg - 1}px`}) {
    margin-bottom: 8x;
  }
`;


/***/ })

};
;