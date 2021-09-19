/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/wp-block-revealer.js":
/*!*************************************!*\
  !*** ./src/js/wp-block-revealer.js ***!
  \*************************************/
/***/ (() => {

eval("jQuery(document).on('ready', function () {\n  /** \n   * Get storage and check options on launch\n   */\n  function wpbkr_storage__setup() {\n    var wpbr_storage = window.localStorage;\n    var launch_wpbkr__color = wpbr_storage.getItem('wpbr_options__color');\n\n    if (launch_wpbkr__color === 'blue' || launch_wpbkr__color === 'white' || launch_wpbkr__color === 'black') {\n      wpkr_set__color(launch_wpbkr__color);\n    }\n\n    var launch_wpbkr__reveal = wpbr_storage.getItem('wpbr_options__reveal');\n\n    if (launch_wpbkr__reveal === 'true') {\n      jQuery('#wpbkr-toogle-reveal').trigger('click');\n    }\n  }\n  /**\n   * Handle shortcut\n   * Enable / disable\n   * @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e\n   */\n\n\n  document.onkeyup = function (e) {\n    // Ctrl + Alt + R\n    if (e.ctrlKey && e.altKey && e.which == 82) {\n      jQuery('#wpbkr-toogle-reveal').trigger('click');\n    }\n  };\n  /**\n   * Overide css color variable\n   */\n\n\n  function wpkr_set__color(color) {\n    jQuery('body').css('--wpbr--editor--shadow--color', 'var( --wpbr--color--' + color + ' )').css('--wpbr--editor--shadow--color-hover', 'var( --wpbr--color--' + color + '-hover )');\n  }\n  /**\n   * Handle toggles : bind clicks\n   */\n\n\n  function wpbkr_options__toggle() {\n    jQuery('.wp-block-revealer-options__toggle input').on('click', function (e) {\n      var wpbr_storage = window.localStorage;\n\n      if (jQuery(this).is(\":checked\")) {\n        jQuery(this).parent().addClass('option-active');\n        jQuery('body').addClass('wp-block-revealer--reveal');\n        wpbr_storage.setItem('wpbr_options__reveal', 'true');\n      } else {\n        jQuery(this).parent().removeClass('option-active');\n        jQuery('body').removeClass('wp-block-revealer--reveal');\n        wpbr_storage.setItem('wpbr_options__reveal', 'false');\n      }\n    });\n    jQuery('.wp-block-revealer-options__toggle input').on('contextmenu', function (e) {\n      e.preventDefault(); // open color swatch\n\n      if (jQuery(this).parent().hasClass('swatch-open')) {\n        jQuery(this).parent().removeClass('swatch-open');\n      } else {\n        jQuery(this).parent().addClass('swatch-open');\n      }\n\n      return false;\n    });\n    jQuery('.wp-block-revealer-options__toggle').on('click', '.wp-block-revealer-options__color', function (e) {\n      e.preventDefault();\n      wpkr_set__color(jQuery(this).data('color'));\n      var wpbr_storage = window.localStorage;\n      wpbr_storage.setItem('wpbr_options__color', jQuery(this).data('color')); // focus out\n\n      jQuery('wp-block-revealer-options__toggle, wp-block-revealer-options__toggle *').focusout();\n      jQuery('.wp-block-revealer-options__toggle.swatch-open').removeClass('swatch-open');\n      return false;\n    });\n  }\n  /**\n   * Launch UI\n   */\n\n\n  var wpbkr_form__html = '<form class=\"wp-block-revealer-options__form\">';\n  wpbkr_form__html += '<div class=\"wp-block-revealer-options__toggle\">';\n  wpbkr_form__html += '<input type=\"checkbox\" id=\"wpbkr-toogle-reveal\" name=\"wpbkr-toogle\">';\n  wpbkr_form__html += '<label for=\"wpbkr-toogle-reveal\">' + wpbr_words.options__reveal_block_label + '</label>';\n  wpbkr_form__html += '<div class=\"wp-block-revealer-options__color-swatch\">';\n  wpbkr_form__html += '<button data-color=\"blue\"  class=\"wp-block-revealer-options__color wp-block-revealer-options__color--blue\"></button>';\n  wpbkr_form__html += '<button data-color=\"white\" class=\"wp-block-revealer-options__color wp-block-revealer-options__color--white\"></button>';\n  wpbkr_form__html += '<button data-color=\"black\" class=\"wp-block-revealer-options__color wp-block-revealer-options__color--black\"></button>';\n  wpbkr_form__html += '</div>';\n  wpbkr_form__html += '<div class=\"wp-block-revealer-options__indicator\"></div>';\n  wpbkr_form__html += '</div>';\n  wpbkr_form__html += '</form>';\n  const {\n    subscribe\n  } = wp.data; // subscription method : https://github.com/WordPress/gutenberg/issues/10992\n\n  window.WPBKR = {};\n  window.WPBKR.editor_is_ready = false;\n  window.WPBKR.watch = false;\n  const edior_is_ready_subscription = subscribe(() => {\n    let _blocks = wp.data.select('core/block-editor').getBlocks(); // has blocks, editor seems ready : launch once\n\n\n    if (_blocks.constructor === Array) {\n      if (window.WPBKR.watch === false) {\n        if (jQuery('.edit-post-header-toolbar').length > 0) {\n          window.WPBKR.editor_is_ready = true;\n          window.WPBKR.watch = true;\n          setTimeout(function () {\n            // Ready — launch\n            jQuery('body').addClass('wp-block-revealer');\n            jQuery('.edit-post-header-toolbar').after('<div class=\"wp-block-revealer__toolbar\">' + wpbkr_form__html + '</div>');\n            wpbkr_options__toggle();\n            wpbkr_storage__setup();\n          }, 80);\n        }\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://wp-block-revealer/./src/js/wp-block-revealer.js?");

/***/ }),

/***/ "./src/scss/wp-block-revealer.scss":
/*!*****************************************!*\
  !*** ./src/scss/wp-block-revealer.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wp-block-revealer/./src/scss/wp-block-revealer.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/js/wp-block-revealer.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scss/wp-block-revealer.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;