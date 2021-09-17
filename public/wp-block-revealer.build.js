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

eval("jQuery(document).on('ready', function () {\n  /**\n   * \n   * Get storage and check options on launch\n   * \n   */\n  function wpbr_storage_setup() {\n    var _wpbr_storage = window.localStorage;\n\n    var _launch_ls_wpbr_options__reveal = _wpbr_storage.getItem('wpbr_options__reveal');\n\n    if (_launch_ls_wpbr_options__reveal === 'true') {\n      jQuery('#wpbkr-toogle-reveal').trigger('click');\n    }\n  }\n  /**\n   * \n   * \n   * \n   * \n   */\n  // @source : https://medium.com/@melwinalm/crcreating-keyboard-shortcuts-in-javascripteating-keyboard-shortcuts-in-javascript-763ca19beb9e\n\n\n  document.onkeyup = function (e) {\n    // 18 : Alt\n    // 66 : B\n    // 67 : C\n    // 82 : Ruto\n    // Enable / disable\n    // Ctrl + Alt + R\n    if (e.ctrlKey && e.altKey && e.which == 82) {\n      console.log('wpbr'); // $('body').toggleClass('wp-block-revealer');\n\n      jQuery('#wpbkr-toogle-reveal').trigger('click');\n    } // Copy classes\n    // Ctrl + Alt + C\n\n\n    if (e.ctrlKey && e.altKey && e.which == 67) {\n      // wpbr_cash_css_classes();\n      jQuery('#wpbkr-button-copy-classes').trigger('click');\n      /*\n      if( $('body').hasClass('wp-block-revealer--reveal') ){\n          var block_classes = document.querySelector(\".edit-post-visual-editor .is-hovered\").classList ;\n          try { wpbr_copyStringToClipboard( block_classes.value ); }\n          catch (error) { console.error(error); }\n      }\n      */\n      // Next\n      // someNodeList.forEach(callback[, thisArg]);\n      // check modules :  *__modules\n      // get classes + TAB\n    }\n  };\n  /**\n   * \n   * \n   * \n   * \n   */\n\n\n  function wpbr_cash_css_classes() {\n    var _target_classes = jQuery('.edit-post-visual-editor .is-selected').attr('class');\n\n    if (_target_classes == null) {\n      _target_classes = jQuery('.edit-post-visual-editor .is-hovered').attr('class');\n    }\n\n    if (_target_classes != null) {\n      try {\n        wpbr_copyStringToClipboard(_target_classes);\n      } catch (error) {\n        console.error(error);\n      }\n    }\n  }\n  /**\n   * \n   * \n   * \n   * \n   */\n\n  /**\n   * \n   * \n   * \n   */\n  // @source : https://techoverflow.net/2018/03/30/copying-strings-to-the-clipboard-using-pure-javascript/\n\n\n  function wpbr_copyStringToClipboard(str) {\n    // Create new element\n    var el = document.createElement('textarea'); // Set value (string to be copied)\n\n    el.value = str; // Set non-editable to avoid focus and move outside of view\n\n    el.setAttribute('readonly', '');\n    el.style = {\n      position: 'absolute',\n      left: '-9999px'\n    };\n    document.body.appendChild(el); // Select text inside element\n\n    el.select(); // Copy text to clipboard\n\n    document.execCommand('copy'); // Remove temporary element\n\n    document.body.removeChild(el);\n  }\n  /**\n   * \n   * \n   * \n   * \n   */\n\n\n  function wpbr_toggle_option() {\n    jQuery('.wp-block-revealer-options__toggle input').click(function (e) {\n      var _wpbr_storage = window.localStorage;\n\n      if (jQuery(this).is(\":checked\")) {\n        jQuery(this).parent().addClass('option-active');\n        jQuery('body').addClass('wp-block-revealer--reveal');\n\n        _wpbr_storage.setItem('wpbr_options__reveal', 'true');\n      } else {\n        jQuery(this).parent().removeClass('option-active');\n        jQuery('body').removeClass('wp-block-revealer--reveal');\n\n        _wpbr_storage.setItem('wpbr_options__reveal', 'false');\n      }\n    });\n  }\n\n  function wpbr_feature_button() {\n    jQuery('.wp-block-revealer-options__button input').click(function (e) {\n      wpbr_cash_css_classes();\n    });\n  }\n  /**\n   * \n   * Launch panel\n   * UI\n   * \n   */\n\n\n  wpbr_add_settings_panel(); // v02\n\n  var _wpbkr_html_panel = '<form class=\"wp-block-revealer-options__form\">';\n  _wpbkr_html_panel += '<span class=\"wp-block-revealer-options__toggle\">';\n  _wpbkr_html_panel += '<input type=\"checkbox\" id=\"wpbkr-toogle-reveal\" name=\"wpbkr-toogle\"><label for=\"wpbkr-toogle-reveal\">' + wpbr_words.option_reveal_block_label + '</label>';\n  _wpbkr_html_panel += '</span>';\n  _wpbkr_html_panel += '</form>';\n\n  function wpbr_add_settings_panel() {\n    // console.log( $('.interface-interface-skeleton__content') );\n    setTimeout(function () {\n      if (jQuery('.edit-post-header-toolbar').length > 0) {\n        // Ready — launch\n        jQuery('body').addClass('wp-block-revealer');\n        jQuery('.edit-post-header-toolbar').after('<div class=\"wp-block-revealer__toolbar\">' + _wpbkr_html_panel + '</div>');\n        wpbr_toggle_option();\n        wpbr_storage_setup();\n        /*\n        // v01\n        jQuery('.interface-interface-skeleton__content').prepend( '<div class=\"wp-block-revealer-options\">'+_wpbkr_html_panel+'</div>' );\n        wpbr_toggle_option();\n        wpbr_feature_button();\n        wpbr_storage_setup();\n        */\n      } else {\n        wpbr_add_settings_panel();\n      }\n    }, 330);\n  }\n});\n\n//# sourceURL=webpack://wp-block-revealer/./src/js/wp-block-revealer.js?");

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