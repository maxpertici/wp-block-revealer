"use strict";
(globalThis["webpackChunkblock_revealer"] = globalThis["webpackChunkblock_revealer"] || []).push([["src_js_GlobalSignal_js"],{

/***/ "./src/js/GlobalSignal.js":
/*!********************************!*\
  !*** ./src/js/GlobalSignal.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalSignalColor: () => (/* binding */ GlobalSignalColor),
/* harmony export */   GlobalSignalReveal: () => (/* binding */ GlobalSignalReveal)
/* harmony export */ });
/* harmony import */ var _preact_signals_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @preact/signals-react */ "./node_modules/@preact/signals-react/dist/signals.module.js");
/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage.js */ "./src/js/LocalStorage.js");


const storage = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
const GlobalSignalReveal = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.signal)(storage.getReveal());
const GlobalSignalColor = (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_0__.signal)(storage.getColor());


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
    return window.localStorage.getItem('wpbr_options__reveal') === 'true' ? true : false;
  }
  setColor(color) {
    // console.log( 'setColor', color );
    window.localStorage.setItem('wpbr_options__color', color);
  }
  setReveal(reveal) {
    let revealValue = reveal === true ? 'true' : 'false';
    window.localStorage.setItem('wpbr_options__reveal', revealValue);
  }
}

/***/ })

}]);
//# sourceMappingURL=src_js_GlobalSignal_js.js.map