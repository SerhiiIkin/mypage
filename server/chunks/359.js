"use strict";
exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CardContent_CardContent)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/Image/Image.tsx
var Image = __webpack_require__(303);
// EXTERNAL MODULE: ./components/A/A.tsx
var A = __webpack_require__(1370);
// EXTERNAL MODULE: ./components/Multilanguage.ts
var Multilanguage = __webpack_require__(499);
;// CONCATENATED MODULE: ./components/Arrow/Arrow.tsx

function Arrow() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        className: "rotate-180 ml-1",
        width: "20",
        height: "25",
        viewBox: "0 0 26 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.5 1.5L1 12L11.5 22.5",
                stroke: "",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M1 12H25",
                stroke: "",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
}
/* harmony default export */ const Arrow_Arrow = (Arrow);

;// CONCATENATED MODULE: ./components/CardContent/CardContent.tsx





function CardContent({ id , src , alt , title , styles  }) {
    const linkText = (0,Multilanguage/* default */.Z)("Більше", "More", "Mere");
    if (Array.isArray(src)) src = src[0];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styles.content,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: styles.imgContainer,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Image["default"], {
                    src: src,
                    quality: "50",
                    alt: alt
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: styles.textContainer,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: styles.h2,
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: styles.linkContainer,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(A/* default */.Z, {
                            href: "/portfolio/[id]",
                            as: `/portfolio/${id}`,
                            aStyles: styles.link,
                            text: linkText,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Arrow_Arrow, {})
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const CardContent_CardContent = (CardContent);


/***/ })

};
;