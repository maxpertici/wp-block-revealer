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

/***/ "./assets-src/js/wp-block-revealer.js":
/*!********************************************!*\
  !*** ./assets-src/js/wp-block-revealer.js ***!
  \********************************************/
/***/ (() => {

eval("jQuery(document).on('ready', function () {\n  /** \n   * Get storage and check options on launch\n   */\n  function wpbr_storage_setup() {\n    var wpbr_storage = window.localStorage;\n\n    var _launch_ls_wpbr_options__reveal = wpbr_storage.getItem('wpbr_options__reveal');\n\n    if (_launch_ls_wpbr_options__reveal === 'true') {\n      jQuery('#wpbkr-toogle-reveal').trigger('click');\n    }\n  }\n  /**\n   * \n   * @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e\n   */\n\n\n  document.onkeyup = function (e) {\n    // 18 : Alt\n    // 66 : B\n    // 67 : C\n    // 82 : R\n    // Enable / disable\n    // Ctrl + Alt + R\n    if (e.ctrlKey && e.altKey && e.which == 82) {\n      // console.log('wpbr');\n      // $('body').toggleClass('wp-block-revealer');\n      jQuery('#wpbkr-toogle-reveal').trigger('click');\n    }\n  };\n  /**\n   * \n   * \n   * \n   * \n   */\n\n\n  function wpbr_toggle_option() {\n    jQuery('.wp-block-revealer-options__toggle input').click(function (e) {\n      var wpbr_storage = window.localStorage;\n\n      if (jQuery(this).is(\":checked\")) {\n        jQuery(this).parent().addClass('option-active');\n        jQuery('body').addClass('wp-block-revealer--reveal');\n        wpbr_storage.setItem('wpbr_options__reveal', 'true');\n      } else {\n        jQuery(this).parent().removeClass('option-active');\n        jQuery('body').removeClass('wp-block-revealer--reveal');\n        wpbr_storage.setItem('wpbr_options__reveal', 'false');\n      }\n    });\n  }\n  /**\n   * Launch UI\n   */\n\n\n  var wpbkr_form__html = '<form class=\"wp-block-revealer-options__form\">';\n  wpbkr_form__html += '<span class=\"wp-block-revealer-options__toggle\">';\n  wpbkr_form__html += '<input type=\"checkbox\" id=\"wpbkr-toogle-reveal\" name=\"wpbkr-toogle\"><label for=\"wpbkr-toogle-reveal\">' + wpbr_words.option_reveal_block_label + '</label>';\n  wpbkr_form__html += '</span>';\n  wpbkr_form__html += '</form>'; // subscription method : https://github.com/WordPress/gutenberg/issues/10992\n\n  const {\n    subscribe\n  } = wp.data;\n  window.WPBR = {};\n  window.WPBR.editor_is_ready = false;\n  window.WPBR.watch = false;\n  const edior_is_ready_subscription = subscribe(() => {\n    let _blocks = wp.data.select('core/block-editor').getBlocks(); // has blocks, editor is ready : launch once\n    // if( ( _blocks.constructor === Array ) && (_blocks.length > 0 ) ){\n\n\n    if (_blocks.constructor === Array) {\n      if (jQuery('.edit-post-header-toolbar').length > 0) {\n        window.WPBR.editor_is_ready = true;\n\n        if (window.WPBR.watch === false) {\n          window.WPBR.watch = true;\n          setTimeout(function () {\n            // Ready — launch\n            jQuery('body').addClass('wp-block-revealer');\n            jQuery('.edit-post-header-toolbar').after('<div class=\"wp-block-revealer__toolbar\">' + wpbkr_form__html + '</div>');\n            wpbr_toggle_option();\n            wpbr_storage_setup();\n          }, 100);\n        }\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://wp-block-revealer/./assets-src/js/wp-block-revealer.js?");

/***/ }),

/***/ "./assets-src/scss/wp-block-revealer.scss":
/*!************************************************!*\
  !*** ./assets-src/scss/wp-block-revealer.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://wp-block-revealer/./assets-src/scss/wp-block-revealer.scss?");

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
/******/ 	__webpack_modules__["./assets-src/js/wp-block-revealer.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets-src/scss/wp-block-revealer.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;