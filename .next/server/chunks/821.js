"use strict";
exports.id = 821;
exports.ids = [821];
exports.modules = {

/***/ 112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "z": () => (/* reexport */ BackToTopButton_BackToTopButton)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/docs/BackToTopButton/BackToTopButton.tsx






const Wrapper = external_styled_components_default()('a')`
  display: inline-block;
  position: fixed;
  bottom: 24px;
  right: 24px;
  height: 48px;
  width: 48px;
  padding: 10px;
  background-color: ${react_.theme.colors.blue07};
  color: ${react_.theme.colors.white};
  cursor: pointer;
  z-index: ${variables/* layerIndexes.overlay */.J6.overlay - 1};
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);

  &:hover,
  &:focus {
    outline: none;
  }

  @media (min-width: ${variables/* breakpoints.lg */.AV.lg}px) and (max-width: ${variables/* breakpoints.xl */.AV.xl - 1}px) {
    z-index: ${variables/* layerIndexes.dialog */.J6.dialog + 2};
  }

  @media (min-width: ${variables/* breakpoints.xl */.AV.xl}px) {
    display: none;
  }
`;
const Inner = external_styled_components_default()('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;
const BackToTopButton = ({ className , href  })=>{
    const router = (0,router_.useRouter)();
    const handleBackToTop = ()=>{
        router.push('#');
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        className: className,
        href: href,
        "aria-label": "Back to Top",
        onClick: handleBackToTop,
        children: /*#__PURE__*/ jsx_runtime_.jsx(Inner, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M4.71 16.71L12 9.41L19.29 16.71C19.383 16.8037 19.4936 16.8781 19.6154 16.9289C19.7373 16.9797 19.868 17.0058 20 17.0058C20.132 17.0058 20.2627 16.9797 20.3846 16.9289C20.5064 16.8781 20.617 16.8037 20.71 16.71C20.8037 16.617 20.8781 16.5064 20.9289 16.3846C20.9797 16.2627 21.0058 16.132 21.0058 16C21.0058 15.868 20.9797 15.7373 20.9289 15.6154C20.8781 15.4936 20.8037 15.383 20.71 15.29L12.71 7.29C12.617 7.19627 12.5064 7.12188 12.3846 7.07111C12.2627 7.02034 12.132 6.9942 12 6.9942C11.868 6.9942 11.7373 7.02034 11.6154 7.07111C11.4936 7.12188 11.383 7.19627 11.29 7.29L3.29 15.29C3.1017 15.4783 2.99591 15.7337 2.99591 16C2.99591 16.2663 3.1017 16.5217 3.29 16.71C3.47831 16.8983 3.7337 17.0041 4 17.0041C4.2663 17.0041 4.5217 16.8983 4.71 16.71Z",
                    fill: react_.theme.colors.white
                })
            })
        })
    }));
};
/* harmony default export */ const BackToTopButton_BackToTopButton = (BackToTopButton);

;// CONCATENATED MODULE: ./components/docs/BackToTopButton/index.ts



/***/ }),

/***/ 2083:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "U": () => (/* reexport */ DocsHeader_DocsHeader)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/foundations/index.ts + 16 modules
var foundations = __webpack_require__(4994);
;// CONCATENATED MODULE: ./components/docs/DocsHeader/DocsHeader.tsx



const DocsHeader = ({ title , subtitle , margin  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(foundations/* Box */.xu, {
        as: "header",
        mb: 'xxl',
        mt: 'xxl',
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(foundations/* Heading */.X6, {
                as: "h1",
                fontSize: 36,
                fontWeight: 700,
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(foundations/* Text */.xv, {
                as: "p",
                size: 400,
                mt: "sm",
                children: subtitle
            })
        ]
    }));
};
DocsHeader.defaultProps = {
    subtitle: undefined,
    margin: 'xl'
};
/* harmony default export */ const DocsHeader_DocsHeader = (DocsHeader);

;// CONCATENATED MODULE: ./components/docs/DocsHeader/index.ts



/***/ }),

/***/ 5754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ DocsSidebar_SidebarLogo)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
;// CONCATENATED MODULE: ./components/docs/DocsSidebar/SidebarLogo.tsx



const hasSidebar = external_styled_components_.css`
  background-color: ${react_.theme.colors.grey01};
`;
const hasNoSidebar = external_styled_components_.css`
  background-color: ${react_.theme.colors.white};
  border-bottom: 1px solid ${react_.theme.colors.grey02};
`;
const SidebarLogo = external_styled_components_default()('div')`
  display: flex;
  align-items: center;
  background: ${react_.theme.colors.white};
  justify-content: center;
  width: ${variables/* dimensions.widths.sidebar.lg */.MB.widths.sidebar.lg}px;
  padding: 0 24px;
  margin: 24px 0;
  width: 100%;
  cursor: pointer;

  ${(props)=>props.navHidden ? hasNoSidebar : hasSidebar
}

  @media (max-width: ${variables/* breakpoints.lg */.AV.lg - 1}px) {
    display: none;
  }
`;
/* harmony default export */ const DocsSidebar_SidebarLogo = (SidebarLogo);

;// CONCATENATED MODULE: ./components/docs/DocsSidebar/index.ts



/***/ }),

/***/ 6984:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* reexport */ DocsWrapper_DocsWrapper)
});

// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
;// CONCATENATED MODULE: ./components/docs/DocsWrapper/DocsWrapper.tsx



const DocsWrapper = external_styled_components_default()('article')`
  font-family: 'Inter', sans-serif;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  background-color: ${react_.theme.colors.white};

  @media (max-width: ${variables/* breakpoints.lg */.AV.lg - 1}px) {
    padding: 16px;
  }
  @media (min-width: ${variables/* breakpoints.lg */.AV.lg}px) {
    padding: 32px;
  }

  @media (max-width: ${variables/* breakpoints.lg */.AV.lg - 1}px) {
    overflow-x: auto;
  }
`;
/* harmony default export */ const DocsWrapper_DocsWrapper = (DocsWrapper);

;// CONCATENATED MODULE: ./components/docs/DocsWrapper/index.ts



/***/ }),

/***/ 6816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* reexport */ TocJsonWrapper/* default */.Z)
});

// UNUSED EXPORTS: TocFloatingButton

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
;// CONCATENATED MODULE: ./components/docs/TableOfContents/TocFloatingButton.tsx





const Wrapper = external_styled_components_default()('button')`
  display: inline-block;
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 0;
  background-color: ${(props)=>props.isOpen ? react_.theme.colors.red06 : react_.theme.colors.blue06
};
  color: ${react_.theme.colors.white};
  cursor: pointer;
  z-index: ${variables/* layerIndexes.overlay */.J6.overlay - 1};
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.15);

  &:hover,
  &:focus {
    outline: none;
  }

  @media (min-width: ${variables/* breakpoints.lg */.AV.lg}px) and (max-width: ${variables/* breakpoints.xl */.AV.xl - 1}px) {
    z-index: ${variables/* layerIndexes.dialog */.J6.dialog + 2};
  }

  @media (min-width: ${variables/* breakpoints.xl */.AV.xl}px) {
    display: none;
  }
`;
const Inner = external_styled_components_default()('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  &.is-open {
    & svg {
      transform: rotate(180deg);
    }
  }
`;
const TocFloatingButton = ({ className , tocIsOpen , onClick  })=>/*#__PURE__*/ _jsx(Wrapper, {
        className: className,
        onClick: onClick,
        isOpen: tocIsOpen,
        "aria-label": "Toggle Table of Contents",
        children: /*#__PURE__*/ _jsx(Inner, {
            isOpen: tocIsOpen,
            className: tocIsOpen ? 'is-open' : undefined,
            children: /*#__PURE__*/ _jsx("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ _jsx("path", {
                    d: "M4.71 16.71L12 9.41L19.29 16.71C19.383 16.8037 19.4936 16.8781 19.6154 16.9289C19.7373 16.9797 19.868 17.0058 20 17.0058C20.132 17.0058 20.2627 16.9797 20.3846 16.9289C20.5064 16.8781 20.617 16.8037 20.71 16.71C20.8037 16.617 20.8781 16.5064 20.9289 16.3846C20.9797 16.2627 21.0058 16.132 21.0058 16C21.0058 15.868 20.9797 15.7373 20.9289 15.6154C20.8781 15.4936 20.8037 15.383 20.71 15.29L12.71 7.29C12.617 7.19627 12.5064 7.12188 12.3846 7.07111C12.2627 7.02034 12.132 6.9942 12 6.9942C11.868 6.9942 11.7373 7.02034 11.6154 7.07111C11.4936 7.12188 11.383 7.19627 11.29 7.29L3.29 15.29C3.1017 15.4783 2.99591 15.7337 2.99591 16C2.99591 16.2663 3.1017 16.5217 3.29 16.71C3.47831 16.8983 3.7337 17.0041 4 17.0041C4.2663 17.0041 4.5217 16.8983 4.71 16.71Z",
                    fill: theme.colors.white
                })
            })
        })
    })
;
/* harmony default export */ const TableOfContents_TocFloatingButton = ((/* unused pure expression or super */ null && (TocFloatingButton)));

// EXTERNAL MODULE: ./components/docs/TableOfContents/TocJsonWrapper.tsx + 1 modules
var TocJsonWrapper = __webpack_require__(2889);
;// CONCATENATED MODULE: ./components/docs/TableOfContents/index.ts




/***/ }),

/***/ 4167:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* reexport */ Container_Container)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
;// CONCATENATED MODULE: ./components/layout/Container/Container.tsx


const Container = external_styled_components_default()('div')`
  position: relative;
  margin-right: auto;
  width: 100%;
  max-width: 704px;
  @media only screen and (min-width: ${variables/* breakpoints.lg */.AV.lg + 1}px) {
    margin-left: 35%;
  }
  @media only screen and (width: ${variables/* breakpoints.lg */.AV.lg}px) {
    margin-left: 25%;
  }
  @media only screen and (width: ${variables/* breakpoints.lg */.AV.lg - 1}px) {
    margin-left: 10%;
  }
`;
/* harmony default export */ const Container_Container = (Container);

;// CONCATENATED MODULE: ./components/layout/Container/index.ts



/***/ }),

/***/ 7029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "y": () => (/* reexport */ Page_NotFoundWrapper),
  "T": () => (/* reexport */ Page_Page)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/layout/Page/Page.tsx

const Page = external_styled_components_default()('div')`
  display: flex;
  height: 100vh;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
  background: white;
  padding: 0;
`;
/* harmony default export */ const Page_Page = (Page);

;// CONCATENATED MODULE: ./components/layout/Page/NotFoundWrapper.tsx

const NotFoundWrapper = external_styled_components_default()('div')`
  display: flex;
  flex: 1 1 auto;
  align-items: center;
  justify-content: center;
  padding: 0;
`;
/* harmony default export */ const Page_NotFoundWrapper = (NotFoundWrapper);

;// CONCATENATED MODULE: ./components/layout/Page/index.ts




/***/ }),

/***/ 6646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ mdx_MDXComponents)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/foundations/index.ts + 16 modules
var foundations = __webpack_require__(4994);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
// EXTERNAL MODULE: external "@aksara-ui/react"
var react_ = __webpack_require__(3436);
;// CONCATENATED MODULE: ./components/page/Markdown/MarkdownComponents.tsx






const UnorderedList = external_styled_components_default()('ul')`
  margin: ${variables/* space.sm */.Dh.sm}px 0;
`;
const HorizontalRule = external_styled_components_default()('hr')`
  margin: ${variables/* space.xl */.Dh.xl}px 0;
  border: none;
  border-top: 1px solid ${variables/* colors.grey02 */.O9.grey02};
`;
const TableDefault = external_styled_components_default()('table')`
  width: 100%;
  margin: ${variables/* space.lg */.Dh.lg}px 0;
  font-size: ${variables/* textSizes.400.fontSize */.iH[400].fontSize}px;
  line-height: ${variables/* textSizes.400.lineHeight */.iH[400].lineHeight}px;
  border-collapse: collapse;

  thead {
    border: 1px solid ${variables/* colors.grey02 */.O9.grey02};

    th {
      border: 1px solid ${variables/* colors.grey02 */.O9.grey02};
      padding: ${variables/* space.xs */.Dh.xs}px ${variables/* space.sm */.Dh.sm}px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-align: left;
      color: ${react_.theme.colors.greydark02};
    }
  }

  tfoot {
    tr {
      border: 1px solid ${variables/* colors.grey02 */.O9.grey02};
      td {
        padding: ${variables/* space.xs */.Dh.xs}px ${variables/* space.sm */.Dh.sm}px;
        border: 1px solid ${variables/* colors.grey02 */.O9.grey02};
        vertical-align: top;
        font-style: normal;
        font-stretch: normal;
        font-weight: 700;
        letter-spacing: -0.01em;
        text-transform: uppercase;
      }
    }
  }

  tbody {
    tr {
      td {
        padding: ${variables/* space.xs */.Dh.xs}px ${variables/* space.sm */.Dh.sm}px;
        border: 1px solid ${variables/* colors.grey02 */.O9.grey02};
        min-width: 15vw;
        vertical-align: top;
        font-size: ${variables/* textSizes.400.fontSize */.iH[400].fontSize}px;
        line-height: ${variables/* textSizes.400.lineHeight */.iH[400].lineHeight}px;
        color: ${variables/* colors.grey07 */.O9.grey07};
        overflow-wrap: anywhere;
      }
    }
  }
`;
const TableBordered = external_styled_components_default()('table')`
  width: 100%;
  margin: ${variables/* space.lg */.Dh.lg}px 0;
  font-size: ${variables/* textSizes.300.fontSize */.iH[300].fontSize}px;
  line-height: ${variables/* textSizes.300.lineHeight */.iH[300].lineHeight}px;
  border-collapse: collapse;
  border: 2px solid ${variables/* colors.grey11 */.O9.grey11};

  thead {
    border-bottom: 1px solid ${variables/* colors.grey02 */.O9.grey02};
    th {
      padding: 14px 16px;
      font-style: normal;
      font-stretch: normal;
      font-weight: 700;
      letter-spacing: -0.01em;
      text-transform: uppercase;
      text-align: center;
      color: ${react_.theme.colors.greydark02};
    }
  }

  tbody {
    tr {
      td {
        padding: 14px 16px;
        min-width: 15vw;
        vertical-align: top;
        font-size: ${variables/* textSizes.400.fontSize */.iH[400].fontSize}px;
        line-height: ${variables/* textSizes.400.lineHeight */.iH[400].lineHeight}px;
        color: ${variables/* colors.grey12 */.O9.grey12};
        overflow-wrap: anywhere;
      }
      &:not(:last-child) {
        border-bottom: 1px solid ${variables/* colors.grey11 */.O9.grey11};
      }
    }
  }
`;
const H1 = external_styled_components_default()(foundations/* Heading */.X6)`
  font-weight: 700;
  color: ${react_.theme.colors.greydark05};
  @media only screen and (max-width: ${`${variables/* breakpoints.lg */.AV.lg - 1}px`}) {
    font-size: 20px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${`${variables/* breakpoints.lg */.AV.lg}px`}) {
    font-size: 36px;
    line-height: 44px;
  }
`;
const h1 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(H1, {
        as: "h1",
        ...props
    })
;
const h2 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(foundations/* Heading */.X6, {
        fontSize: 30,
        fontWeight: 700,
        as: "h2",
        my: "lg",
        color: react_.theme.colors.greydark05,
        ...props
    })
;
const h3 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(foundations/* Heading */.X6, {
        fontSize: 24,
        fontWeight: 700,
        as: "h3",
        my: "lg",
        color: react_.theme.colors.greydark05,
        ...props
    })
;
const h4 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(foundations/* Heading */.X6, {
        size: 400,
        as: "h4",
        color: react_.theme.colors.greydark02,
        my: "lg",
        ...props
    })
;
const h5 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(foundations/* Heading */.X6, {
        fontSize: 14,
        fontWeight: 700,
        as: "h5",
        my: "lg",
        color: react_.theme.colors.greydark02,
        ...props
    })
;
const h6 = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(foundations/* Heading */.X6, {
        size: 400,
        as: "h6",
        my: "lg",
        ...props
    })
;
const Paragraph = external_styled_components_default()(foundations/* Paragraph */.nv)`
  font-weight: 400;
  color: ${react_.theme.colors.greydark02};
  @media only screen and (max-width: ${`${variables/* breakpoints.lg */.AV.lg - 1}px`}) {
    font-size: 14px;
    line-height: 24px;
  }
  @media only screen and (min-width: ${`${variables/* breakpoints.lg */.AV.lg}px`}) {
    font-size: 16px;
    line-height: 28px;
  }
`;
const p = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
        mt: "sm",
        ...props
    })
;
const hr = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(HorizontalRule, {
        ...props
    })
;
const ul = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(UnorderedList, {
        ...props
    })
;
const ol = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(UnorderedList, {
        as: "ol",
        ...props
    })
;
const li = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(Paragraph, {
        as: "li",
        my: "xxs",
        ...props
    })
;
const table = (props)=>{
    const { className , ...rest } = props;
    if (className?.includes('bordered')) {
        return(/*#__PURE__*/ _jsx(TableBordered, {
            ...rest
        }));
    }
    return(/*#__PURE__*/ _jsx(TableDefault, {
        ...rest
    }));
};

// EXTERNAL MODULE: ./components/image/NextImage.tsx
var NextImage = __webpack_require__(9626);
;// CONCATENATED MODULE: ./components/mdx/Image.tsx




const ImageWrapper = (props)=>{
    const { className , ...rest } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        className: className,
        marginY: 24,
        textAlign: "center",
        position: 'relative',
        ...rest
    }));
};
const CaptionWrapper = (props)=>{
    const { className , ...rest } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        className: className,
        backgroundColor: react_.theme.colors.greylight03,
        borderTop: `1px solid ${react_.theme.colors.greylight04}`,
        color: react_.theme.colors.greydark02,
        p: 16,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'left',
        ...rest
    }));
};
const FigureWrapper = (props)=>{
    const { className , ...rest } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        className: className,
        marginY: 16,
        border: `1px solid ${react_.theme.colors.greylight04}`,
        ...rest
    }));
};
const FigureImage = (props)=>{
    const { src , alt , caption , ...rest } = props;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(FigureWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ImageWrapper, {
                marginY: 0,
                children: /*#__PURE__*/ jsx_runtime_.jsx(NextImage/* NextImage */.o, {
                    src: src,
                    alt: alt,
                    ...rest
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CaptionWrapper, {
                children: caption && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            mr: 5,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                children: caption.title
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                            children: caption.description
                        })
                    ]
                })
            })
        ]
    }));
};
const Components = {
    FigureImage,
    ImageWrapper,
    NextImage: NextImage/* NextImage */.o
};
/* harmony default export */ const Image = (Components);

;// CONCATENATED MODULE: ./components/mdx/Table.tsx



const Table = external_styled_components_default()(react_.Table)`
  table-layout: fixed;
  width: 100%;
  margin: ${variables/* space.lg */.Dh.lg}px 0;
  font-size: ${variables/* textSizes.300.fontSize */.iH[300].fontSize}px;
  line-height: ${variables/* textSizes.300.lineHeight */.iH[300].lineHeight}px;
  border-collapse: collapse;
  border: 2px solid ${variables/* colors.grey11 */.O9.grey11};
`;
const TableHead = external_styled_components_default()(react_.TableHead)`
  border-bottom: 1px solid ${variables/* colors.grey02 */.O9.grey02};
`;
const TableHeadRow = external_styled_components_default()(react_.TableHeadRow)``;
const TableHeadCell = external_styled_components_default()(react_.TableHeadCell)`
  padding: 14px 16px;
  letter-spacing: -0.01em;
  border: 1px solid ${variables/* colors.grey02 */.O9.grey02};

  &,
  p,
  span,
  li {
    font-style: normal;
    font-weight: 700;
    font-stretch: normal;
    color: ${react_.theme.colors.greydark02};
    margin: 0;
    font-size: 16px;
    line-height: 24px;
  }
`;
const TableBody = react_.TableBody;
const TableBodyRow = external_styled_components_default()(react_.TableBodyRow)`
  &:not(:last-child) {
    border-bottom: 1px solid ${variables/* colors.grey11 */.O9.grey11};
  }
`;
const TableBodyCell = external_styled_components_default()(react_.TableBodyCell)`
  padding: 14px 16px;
  min-width: 15vw;
  vertical-align: top;
  overflow-wrap: anywhere;
  border: 1px solid ${variables/* colors.grey02 */.O9.grey02};
  &,
  p,
  span,
  li {
    font-size: ${variables/* textSizes.400.fontSize */.iH[400].fontSize}px;
    line-height: ${variables/* textSizes.400.lineHeight */.iH[400].lineHeight}px;
    color: ${react_.theme.colors.greydark02};
    margin: 0;
  }
`;
// eslint-disable-next-line import/no-anonymous-default-export
const Table_Components = {
    Table,
    TableHead,
    TableHeadCell,
    TableHeadRow,
    TableBody,
    TableBodyRow,
    TableBodyCell
};
/* harmony default export */ const mdx_Table = (Table_Components);

// EXTERNAL MODULE: ./node_modules/react-lite-youtube-embed/dist/index.jsx
var dist = __webpack_require__(495);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./components/mdx/YoutubeEmbed.tsx



const YoutubeEmbedWrapper = (props)=>{
    const { className , ...rest } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        className: className,
        marginY: 22,
        ...rest
    }));
};
const YoutubeEmbed = (dist_default());
const YoutubeEmbed_Components = {
    YoutubeEmbedWrapper,
    YoutubeEmbed
};
/* harmony default export */ const mdx_YoutubeEmbed = (YoutubeEmbed_Components);

;// CONCATENATED MODULE: ./components/mdx/MDXComponents.tsx




const MDXComponents = {
    ...Image,
    ...mdx_YoutubeEmbed,
    ...mdx_Table,
    h1: h1,
    h2: h2,
    h3: h3,
    h4: h4,
    h5: h5,
    h6: h6,
    p: p,
    hr: hr,
    ul: ul,
    ol: ol,
    li: li
};
/* harmony default export */ const mdx_MDXComponents = (MDXComponents);


/***/ }),

/***/ 9881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* reexport */ Markdown_MarkdownContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/variables.ts
var variables = __webpack_require__(2706);
;// CONCATENATED MODULE: ./components/page/Markdown/MarkdownContent.tsx




const Section = external_styled_components_default()('section')`
  h1,
  h2,
  h3 {
    &:first-child {
      margin-top: 0 !important;
    }
  }

  .gatsby-highlight {
    margin: ${variables/* space.sm */.Dh.sm}px 0;
  }

  a[href^='#fn-'],
  a[href^='#fnref-'] {
    display: inline-block;
    margin-left: 0.1rem;
    font-weight: bold;
  }

  .footnotes {
    margin-top: 2rem;
    font-size: 85%;
    li[id^='fn-'] {
      p {
        // Remark for some reason puts the footnote reflink *after* the 'p' tag.
        display: inline;
      }
    }
  }

  /* iframe {
    margin-top: 24px;
    margin-bottom: 24px;
    width: 100%;
    height: 250px;

    @media only screen and (min-width: ${variables/* breakpoints.md */.AV.md}px) {
      height: 400px;
    }
  } */

  .lead {
    font-size: 1.25rem;
    font-weight: 300;

    @media (min-width: ${variables/* breakpoints.md */.AV.md}) {
      font-size: 1.5rem;
    }
  }
`;
const MarkdownContent = ({ className , html , children  })=>{
    if (html) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(Section, {
            className: className,
            dangerouslySetInnerHTML: {
                __html: html
            }
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(Section, {
        className: className,
        children: children
    }));
};
/* harmony default export */ const Markdown_MarkdownContent = (MarkdownContent);

;// CONCATENATED MODULE: ./components/page/Markdown/index.ts



/***/ })

};
;