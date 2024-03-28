"use strict";
(globalThis["webpackChunkblock_revealer"] = globalThis["webpackChunkblock_revealer"] || []).push([["src_js_KeyboardShortcuts_js"],{

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

/***/ "./src/js/KeyboardShortcuts.js":
/*!*************************************!*\
  !*** ./src/js/KeyboardShortcuts.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ KeyboardShortcuts)
/* harmony export */ });
/* harmony import */ var _Editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.js */ "./src/js/Editor.js");
/* harmony import */ var _GlobalSignal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalSignal.js */ "./src/js/GlobalSignal.js");
/**
 * KeyboardShortcuts
 */



class KeyboardShortcuts {
  constructor() {}
  bind() {
    let editor = new _Editor_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

    // Ctrl + Alt + R
    // https://www.delftstack.com/howto/javascript/javascript-keyboard-shortcut/

    // body
    editor.getBody().addEventListener('keydown', e => {
      // console.log( 'shortcut' );
      // console.log(e);

      if (e.ctrlKey && e.altKey && e.keyCode === 82) {
        _GlobalSignal_js__WEBPACK_IMPORTED_MODULE_1__.GlobalSignalReveal.value = !_GlobalSignal_js__WEBPACK_IMPORTED_MODULE_1__.GlobalSignalReveal.value;
      }
    });

    // document
    if (document.body !== editor.getBody()) {
      document.addEventListener('keydown', e => {
        if (e.ctrlKey && e.altKey && e.keyCode === 82) {
          _GlobalSignal_js__WEBPACK_IMPORTED_MODULE_1__.GlobalSignalReveal.value = !_GlobalSignal_js__WEBPACK_IMPORTED_MODULE_1__.GlobalSignalReveal.value;
        }
      });
    }
  }
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
//# sourceMappingURL=src_js_KeyboardShortcuts_js.js.map