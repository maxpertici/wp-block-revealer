"use strict";
(globalThis["webpackChunkblock_revealer"] = globalThis["webpackChunkblock_revealer"] || []).push([["src_js_App_js"],{

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.js */ "./src/js/Button.js");


function App() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "block-revealer-app"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Button_js__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
}

/***/ }),

/***/ "./src/js/Button.js":
/*!**************************!*\
  !*** ./src/js/Button.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage.js */ "./src/js/LocalStorage.js");



function Button() {
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const storage = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  function handleActiveChange(e) {
    // e.preventDefault();
    setActive(e.target.checked);
    storage.setReveal(e.target.checked);
  }
  const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('blue');
  function handleColorChange(e) {
    e.preventDefault();
    setColor(e.target.dataset.color);
    storage.setColor(e.target.dataset.color);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "wp-block-revealer-options__form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-revealer-options__toggle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: "wpbkr-toogle-reveal",
    name: "wpbkr-toogle",
    onClick: handleActiveChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "wpbkr-toogle-reveal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-revealer-options__color-swatch"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-color": "blue",
    onClick: handleColorChange,
    className: "wp-block-revealer-options__color wp-block-revealer-options__color--blue"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-color": "white",
    onClick: handleColorChange,
    className: "wp-block-revealer-options__color wp-block-revealer-options__color--white"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-color": "black",
    onClick: handleColorChange,
    className: "wp-block-revealer-options__color wp-block-revealer-options__color--black"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-revealer-options__indicator"
  }))));
}

/***/ }),

/***/ "./src/js/LocalStorage.js":
/*!********************************!*\
  !*** ./src/js/LocalStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStorage)
/* harmony export */ });
class LocalStorage {
  constructor() {}
  getColor() {
    return window.localStorage.getItem('wpbr_options__color');
  }
  getReveal() {
    return window.localStorage.getItem('wpbr_options__reveal');
  }
  setColor(color) {
    console.log('setColor', color);
    window.localStorage.setItem('wpbr_options__color', color);
  }
  setReveal(reveal) {
    console.log('setReveal', reveal);
    window.localStorage.setItem('wpbr_options__reveal', reveal);
  }
}

/***/ })

}]);
//# sourceMappingURL=src_js_App_js.js.map