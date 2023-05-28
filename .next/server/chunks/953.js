"use strict";
exports.id = 953;
exports.ids = [953];
exports.modules = {

/***/ 953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3436);
/* harmony import */ var _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _aksara_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8933);
/* harmony import */ var _aksara_ui_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_aksara_ui_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);





const BreadcrumbItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default()(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.BreadcrumbItem)`
  color: ${(props)=>!props.href && _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme.colors.greymed05
};
  &:hover {
    text-decoration: none;
    color: ${(props)=>!props.href && _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme.colors.greymed05
};
  }
`;
const Breadcrumb = ({ items  })=>{
    const arrTmp = [];
    items.map((item)=>{
        if (item.url) {
            arrTmp.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BreadcrumbItem, {
                href: item.url,
                children: item.urlDisplay
            }));
        } else {
            arrTmp.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BreadcrumbItem, {
                style: {
                    color: _aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.theme.colors.greydark02
                },
                children: item.urlDisplay
            }));
        }
    });
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_aksara_ui_react__WEBPACK_IMPORTED_MODULE_2__.Breadcrumb, {
        items: arrTmp,
        separator: _aksara_ui_icons__WEBPACK_IMPORTED_MODULE_3__.IconChevronRight
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ })

};
;