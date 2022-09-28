exports.id = 79;
exports.ids = [79];
exports.modules = {

/***/ 6672:
/***/ ((module) => {

// Exports
module.exports = {
	"ico": "Footer_ico__XIYJP",
	"mail": "Footer_mail__HVt_g",
	"facebook": "Footer_facebook__ZRNd8",
	"phone": "Footer_phone__8hEae",
	"linkedin": "Footer_linkedin__AVQhV",
	"telegram": "Footer_telegram__rzMzz",
	"h2": "Footer_h2__sx3tQ",
	"wrapper": "Footer_wrapper__aeYGw",
	"linksWrapper": "Footer_linksWrapper__RSs7T",
	"bg": "Footer_bg__R8sQR",
	"myText": "Footer_myText__hbQ9l"
};


/***/ }),

/***/ 2458:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "Header_header__UGy45",
	"btn": "Header_btn__wiQ_2",
	"active": "Header_active__P0tEJ",
	"showMenu": "Header_showMenu__DhqAM",
	"pLink": "Header_pLink__JE2wN",
	"span": "Header_span__n63Mx",
	"nav": "Header_nav__7Beov",
	"authorName": "Header_authorName__5Z67W"
};


/***/ }),

/***/ 8037:
/***/ ((module) => {

// Exports
module.exports = {
	"btn": "BurgerMenu_btn__QTpnu",
	"pulse": "BurgerMenu_pulse__39CVE",
	"active": "BurgerMenu_active__nG7Er"
};


/***/ }),

/***/ 6125:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "LayoutIndex_main__xlA3Q",
	"arrow": "LayoutIndex_arrow__CEoDv"
};


/***/ }),

/***/ 283:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Multilanguage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(499);

function HeaderText() {
    const fullName = (0,_components_Multilanguage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Сергій Ікін", "Serhii Ikin", "Serhii Ikin");
    const home = (0,_components_Multilanguage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Домашня", "Home", "Hjem");
    const about = (0,_components_Multilanguage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Про мене", "About me", "Om mig");
    const portfolio = (0,_components_Multilanguage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Портфоліо", "Portfolio", "Portef\xf8lje");
    return {
        fullName,
        home,
        about,
        portfolio
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderText);


/***/ }),

/***/ 1370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function A({ href , text , pStyles , aStyles , children , as  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: pStyles,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: href,
            as: as,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                className: aStyles,
                children: [
                    text,
                    " ",
                    children
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (A);


/***/ }),

/***/ 4079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ LayoutIndex_LayoutIndex)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./Sections/Footer/Footer.module.scss
var Footer_module = __webpack_require__(6672);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./Sections/Footer/Footer.tsx



function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: (Footer_module_default()).bg,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (Footer_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: (Footer_module_default()).h2,
                    children: "Contacts"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Footer_module_default()).linksWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_classnames_default()((Footer_module_default()).ico, (Footer_module_default()).mail),
                            target: "_blank",
                            href: "mailto:messileonl@gmail.com",
                            rel: "noreferrer",
                            children: "messileonl@gmail.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_classnames_default()((Footer_module_default()).ico, (Footer_module_default()).facebook),
                            target: "_blank",
                            href: "https://www.facebook.com/profile.php?id=100007424714728",
                            rel: "noreferrer",
                            children: "Facebook"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_classnames_default()((Footer_module_default()).ico, (Footer_module_default()).phone),
                            target: "_blank",
                            href: "tel:+4550246519",
                            rel: "noreferrer",
                            children: "+4550246519"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_classnames_default()((Footer_module_default()).ico, (Footer_module_default()).linkedin),
                            target: "_blank",
                            href: "https://www.linkedin.com/in/serhii-ikin-608054227/",
                            rel: "noreferrer",
                            children: "Linkedin"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_classnames_default()((Footer_module_default()).ico, (Footer_module_default()).telegram),
                            target: "_blank",
                            href: "https://t.me/IkinSerhii",
                            rel: "noreferrer",
                            children: "Telegram"
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Footer_Footer = (Footer);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./store/Slices/languageSlice.ts
var languageSlice = __webpack_require__(2611);
// EXTERNAL MODULE: ./Sections/Header/HeaderText.ts
var HeaderText = __webpack_require__(283);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
;// CONCATENATED MODULE: ./hooks/redux.ts

const useAppDispatch = ()=>(0,external_react_redux_.useDispatch)();
const useAppSelector = external_react_redux_.useSelector;

// EXTERNAL MODULE: ./components/A/A.tsx
var A = __webpack_require__(1370);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/BurgerMenu/BurgerMenu.module.scss
var BurgerMenu_module = __webpack_require__(8037);
var BurgerMenu_module_default = /*#__PURE__*/__webpack_require__.n(BurgerMenu_module);
;// CONCATENATED MODULE: ./components/BurgerMenu/BurgerMenu.tsx



function BurgerMenu({ active , onBurgerMenuClick  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: onBurgerMenuClick,
        className: external_classnames_default()((BurgerMenu_module_default()).btn, active ? (BurgerMenu_module_default()).active : ""),
        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
    });
}
/* harmony default export */ const BurgerMenu_BurgerMenu = (BurgerMenu);

// EXTERNAL MODULE: ./Sections/Header/Header.module.scss
var Header_module = __webpack_require__(2458);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./Sections/Header/Header.tsx










function Header() {
    const dispatch = useAppDispatch();
    const text = (0,HeaderText/* default */.Z)();
    const language = useAppSelector((state)=>state.language.language);
    const { route  } = (0,router_.useRouter)();
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    function onBurgerMenuClick() {
        setActive((prev)=>!prev);
    }
    function onLanguageBtnClick(event) {
        const lang = event.currentTarget.dataset.lang;
        switch(lang){
            case "UKR":
                dispatch((0,languageSlice/* ukr */.Fq)(lang));
                break;
            case "ENG":
                dispatch((0,languageSlice/* eng */.PI)(lang));
                break;
            case "DK":
                dispatch((0,languageSlice.dk)(lang));
                break;
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (Header_module_default()).authorName,
                children: text.fullName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: " hidden sm:inline"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                onClick: ()=>setActive(false),
                className: external_classnames_default()(active ? (Header_module_default()).showMenu : (Header_module_default()).nav),
                children: [
                    route === "/" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Header_module_default()).span,
                        children: text?.home
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(A/* default */.Z, {
                        pStyles: (Header_module_default()).pLink,
                        href: "/",
                        text: text?.home
                    }),
                    route === "/about" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Header_module_default()).span,
                        children: text?.about
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(A/* default */.Z, {
                        pStyles: (Header_module_default()).pLink,
                        href: "/about",
                        text: text?.about
                    }),
                    route === "/portfolio" ? /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: (Header_module_default()).span,
                        children: text?.portfolio
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(A/* default */.Z, {
                        pStyles: (Header_module_default()).pLink,
                        href: "/portfolio",
                        text: text?.portfolio
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: onLanguageBtnClick,
                        "data-lang": "UKR",
                        disabled: language === "UKR",
                        className: external_classnames_default()(`${(Header_module_default()).btn} ${language === "UKR" ? (Header_module_default()).active : ""} `),
                        children: "UKR"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: onLanguageBtnClick,
                        "data-lang": "ENG",
                        disabled: language === "ENG",
                        className: external_classnames_default()(`${(Header_module_default()).btn} ${language === "ENG" ? (Header_module_default()).active : ""} `),
                        children: "ENG"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: onLanguageBtnClick,
                        "data-lang": "DK",
                        disabled: language === "DK",
                        className: external_classnames_default()(`${(Header_module_default()).btn} ${language === "DK" ? (Header_module_default()).active : ""} `),
                        children: "DK"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(BurgerMenu_BurgerMenu, {
                active: active,
                onBurgerMenuClick: onBurgerMenuClick
            })
        ]
    });
}
/* harmony default export */ const Header_Header = (Header);

// EXTERNAL MODULE: external "react-scroll-to-top"
var external_react_scroll_to_top_ = __webpack_require__(5337);
var external_react_scroll_to_top_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_to_top_);
// EXTERNAL MODULE: ./components/LayoutIndex/LayoutIndex.module.scss
var LayoutIndex_module = __webpack_require__(6125);
var LayoutIndex_module_default = /*#__PURE__*/__webpack_require__.n(LayoutIndex_module);
;// CONCATENATED MODULE: ./components/LayoutIndex/LayoutIndex.tsx






function LayoutIndex({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Serhii Ikin page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Serhii Ikin page"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "Serhii,Ikin, react, next"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: (LayoutIndex_module_default()).main,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_scroll_to_top_default()), {
                smooth: true,
                className: (LayoutIndex_module_default()).arrow
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Footer, {})
        ]
    });
}
/* harmony default export */ const LayoutIndex_LayoutIndex = (LayoutIndex);


/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

function Multilanguage(ukr, eng, dk) {
    const lang = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector)((state)=>state.language.language);
    function LanguageItem(ukr, eng, dk) {
        this.ukr = ukr;
        this.eng = eng;
        this.dk = dk;
    }
    if (!eng && !dk) {
        eng = ukr;
        dk = ukr;
    }
    const text = new LanguageItem(ukr, eng, dk);
    switch(lang){
        case "UKR":
            return text.ukr;
        case "ENG":
            return text.eng;
        case "DK":
            return text.dk;
        default:
            return text.dk;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Multilanguage);


/***/ }),

/***/ 2611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fq": () => (/* binding */ ukr),
/* harmony export */   "PI": () => (/* binding */ eng),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dk": () => (/* binding */ dk)
/* harmony export */ });
/* unused harmony export languageSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    language: "DK"
};
const languageSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "language",
    initialState,
    reducers: {
        ukr: (state, action)=>{
            state.language = action.payload;
        },
        eng: (state, action)=>{
            state.language = action.payload;
        },
        dk: (state, action)=>{
            state.language = action.payload;
        }
    }
});
const { ukr , eng , dk  } = languageSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (languageSlice.reducer);


/***/ })

};
;