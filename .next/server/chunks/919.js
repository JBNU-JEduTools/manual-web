"use strict";
exports.id = 919;
exports.ids = [919];
exports.modules = {

/***/ 1919:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$": () => (/* reexport */ Footer_Footer),
  "V": () => (/* reexport */ Footer_FooterWrapper)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "date-fns"
var external_date_fns_ = __webpack_require__(4146);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
// EXTERNAL MODULE: ./utils/constants.js
var constants = __webpack_require__(6076);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/layout/Footer/Footer.tsx








const Wrapper = external_styled_components_default()('footer')`
  padding-top: 24px;
  padding-bottom: 24px;
  border-top: 1px solid ${react_.theme.colors.grey04};
`;
const Inner = external_styled_components_default()('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${`${variables/* breakpoints.md */.AV.md}px`}) {
    text-align: center;
    flex-direction: column;
  }
`;
const SocialMediaList = external_styled_components_default()('ul')`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const SocialMediaListItem = external_styled_components_default()('li')`
  margin: 0;
  margin-left: 8px;
  margin-right: 8px;

  @media only screen and (max-width: ${variables/* breakpoints.md */.AV.md}px) {
    margin-left: 10px;
    margin-right: 10px;
  }

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
const SocialMediaLink = external_styled_components_default()(react_.UnstyledAnchor)`
  display: inline-block;
  color: inherit;
  vertical-align: middle;
  width: 16px;
  height: 16px;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  img {
    width: 16px;
    height: 16px;
  }
`;
const FooterSection = external_styled_components_default()('div')`
  line-height: 18px;
  @media (max-width: ${variables/* breakpoints.md */.AV.md - 1}px) {
    &:not(:first-child) {
      margin-top: ${variables/* space.sm */.Dh.sm}px;
    }
  }
`;
const Footer = ()=>{
    const date = new Date();
    const dateLastUpdated = new Date('15 March 2022');
    const socials = constants/* SOCIALS */.GT;
    return(/*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Inner, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FooterSection, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            as: "p",
                            scale: 200,
                            fontSize: 12,
                            color: react_.theme.colors.greymed04,
                            children: [
                                "\xa9 ",
                                (0,external_date_fns_.format)(date, 'yyyy'),
                                " Kata.ai. All rights reserved."
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                            as: "p",
                            scale: 200,
                            fontSize: 12,
                            color: react_.theme.colors.greymed04,
                            children: [
                                "Version v4.0.0. Last updated ",
                                (0,external_date_fns_.format)(dateLastUpdated, 'd MMMM yyyy'),
                                "."
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(FooterSection, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaList, {
                        children: socials.map((social)=>/*#__PURE__*/ jsx_runtime_.jsx(SocialMediaListItem, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(SocialMediaLink, {
                                    href: social.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        width: 16,
                                        height: 16,
                                        layout: "fixed",
                                        src: `/assets/images/${social.imgpath}`,
                                        alt: social.name
                                    })
                                })
                            }, social.name)
                        )
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./components/layout/Footer/FooterWrapper.tsx



const FooterWrapper = external_styled_components_default()('div')`
  @media screen and (min-width: ${variables/* breakpoints.lg */.AV.lg}px) {
    margin-top: ${react_.theme.space.xxl}px;
  }

  @media screen and (max-width: ${variables/* breakpoints.lg */.AV.lg - 1}px) {
    margin-top: 24px;
  }
`;
/* harmony default export */ const Footer_FooterWrapper = (FooterWrapper);

;// CONCATENATED MODULE: ./components/layout/Footer/index.ts




/***/ })

};
;