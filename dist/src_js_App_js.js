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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalStorage.js */ "./src/js/LocalStorage.js");
/* harmony import */ var _GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalSignal.js */ "./src/js/GlobalSignal.js");
/* harmony import */ var _preact_signals_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @preact/signals-react */ "./node_modules/@preact/signals-react/dist/signals.module.js");
/* harmony import */ var _Editor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Editor.js */ "./src/js/Editor.js");







function Button() {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // storage
  const storage = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  const editor = new _Editor_js__WEBPACK_IMPORTED_MODULE_5__["default"]();

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // states
  const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('blue');
  const [checked, setChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // setter
  function setButtonReveal(value) {
    setActive(value);
    setChecked(value);
    storage.setReveal(value);
    editor.setReveal(value);
    _GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalReveal.value = value;
  }
  function setButtonColor(value) {
    setColor(value);
    storage.setColor(value);
    editor.setColor(value);
    _GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalColor.value = value;
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // handles
  function handleActiveChange(e) {
    // e.preventDefault();
    setButtonReveal(e.target.checked);
    // GlobalSignalColor.value = e.target.checked;
  }
  function handleColorChange(e) {
    e.preventDefault();
    setButtonColor(e.target.dataset.color);
    // GlobalSignalColor.value = e.target.dataset.color;
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Effects

  // on mount
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setButtonReveal(_GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalColor.value);
    setButtonColor(_GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalColor.value);
  }, []);

  // on state update
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setButtonReveal(active);
    _GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalReveal.value = active;
  }, [active]);

  // on state update
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setButtonColor(color);
    _GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalColor.value = color;
  }, [color]);

  // on signal update
  (0,_preact_signals_react__WEBPACK_IMPORTED_MODULE_4__.effect)(() => {
    if (_GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalColor.value !== color) {
      setButtonColor(_GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalColor.value);
    }
    if (_GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalReveal.value !== active) {
      setButtonReveal(_GlobalSignal_js__WEBPACK_IMPORTED_MODULE_3__.GlobalSignalReveal.value);
    }
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // markup
  let toggleClass = active ? 'wp-block-revealer-options__toggle option-active' : 'wp-block-revealer-options__toggle';

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // Return

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    className: "wp-block-revealer-options__form"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: toggleClass
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    id: "wpbkr-toogle-reveal",
    name: "wpbkr-toogle",
    defaultChecked: checked,
    onChange: handleActiveChange
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    for: "wpbkr-toogle-reveal"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Reveal', 'wp-block-revealer'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-revealer-options__color-swatch"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-color": "blue",
    onClick: handleColorChange,
    className: "wp-block-revealer-options__color wp-block-revealer-options__color--blue"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Blue', 'wp-block-revealer'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-color": "white",
    onClick: handleColorChange,
    className: "wp-block-revealer-options__color wp-block-revealer-options__color--white"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('White', 'wp-block-revealer'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    "data-color": "black",
    onClick: handleColorChange,
    className: "wp-block-revealer-options__color wp-block-revealer-options__color--black"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "screen-reader-text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Black', 'wp-block-revealer')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-revealer-options__indicator"
  }))));
}

/***/ }),

/***/ "./src/js/Colors.js":
/*!**************************!*\
  !*** ./src/js/Colors.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Colors)
/* harmony export */ });
class Colors {
  constructor() {
    this.colors = {
      "blue": "#1989c1",
      "white": "#b1b1b1",
      "black": "#444343"
    };
  }
  findColor(hex) {
    let colors = this.colors;
    Object.keys(colors).forEach(key => {
      if (hex === colors[key]) {
        return key;
      }
    });
    return '';
  }
}

/***/ }),

/***/ "./src/js/Editor.js":
/*!**************************!*\
  !*** ./src/js/Editor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var _Colors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Colors.js */ "./src/js/Colors.js");
/* harmony import */ var _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorage.js */ "./src/js/LocalStorage.js");


class Editor {
  constructor() {}
  init({
    reveal = false,
    color = 'blue'
  }) {
    this.setPluginClass('wp-block-revealer');
    this.setColor(color);
    this.setReveal(reveal);
    this.bodyNodeObserver();
    this.storage = new _LocalStorage_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.colors = new _Colors_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  bodyNodeObserver() {
    let body = this.domBody();
    if (body) {
      let observer = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
          /**
           * Compare class with storage values
           */

          let styles = getComputedStyle(mutation.target);
          let color = styles.getPropertyValue('--wpbr--editor--shadow--color');
          let colore_name = this.colors.findColor(color);
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            // Color
            if (colore_name !== this.storage.getColor()) {
              this.setColor(this.storage.getColor());
            }

            // Reveal
            // mutation.target.classList.add('wp-block-revealer');

            if (true === this.storage.getReveal() && !mutation.target.classList.contains('wp-block-revealer--reveal')) {
              this.setReveal(this.storage.getReveal());
            }
            if (false === this.storage.getReveal() && mutation.target.classList.contains('wp-block-revealer--reveal')) {
              this.setReveal(this.storage.getReveal());
            }
          }
        }
      });
      observer.observe(body, {
        attributes: true,
        childList: true,
        subtree: true
      });
    }
  }
  getBody() {
    return this.domBody();
  }
  isPostEditorIframe() {
    return document.querySelector('.block-editor-writing-flow') ? false : true;
  }
  domBody() {
    let body = null;
    let node = this.isPostEditorIframe() ? document.querySelector('iframe[name="editor-canvas"]') : document.querySelector('.block-editor-writing-flow');
    if (node && this.isPostEditorIframe()) {
      body = node.contentWindow.document.body;
    }
    if (node && !this.isPostEditorIframe()) {
      body = document.querySelector('body');
    }
    return body;
  }
  setPluginClass(className) {
    let body = this.domBody();
    if (body) {
      body.classList.add(className);
    }
  }
  setColor(color) {
    let body = this.domBody();
    body.style.setProperty('--wpbr--editor--shadow--color', 'var( --wpbr--color--' + color + ' )');
    body.style.setProperty('--wpbr--editor--shadow--color-hover', 'var( --wpbr--color--' + color + '-hover )');
  }
  setReveal(reveal) {
    let body = this.domBody();
    if (reveal) {
      body.classList.add('wp-block-revealer--reveal');
    } else {
      body.classList.remove('wp-block-revealer--reveal');
    }
  }
}

/***/ }),

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
//# sourceMappingURL=src_js_App_js.js.map