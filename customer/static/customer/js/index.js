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

/***/ "./customer/src/index.js":
/*!*******************************!*\
  !*** ./customer/src/index.js ***!
  \*******************************/
/***/ (() => {

eval("window.optionsDateFormater = function (value, row) {\n  // const isActive = `<div style=\"display:inline-flex;align-items:center;color:${value ? 'green' : 'red'};\"><span class=\"material-icons\">toggle_${value ? 'on' : 'off'}</span></div>`\n  var settings = \"<div title=\\\"Editar\\\" style=\\\"display:inline-flex;align-items:center;\\\"><span class=\\\"material-icons btn-settings\\\">settings</span></div>\";\n  var addProduct = \"<div style=\\\"display:inline-flex;align-items:center;\\\"><span class=\\\"material-icons btn-settings\\\">add_shopping_cart</span></div>\";\n  var loading = \"<div class=\\\"spinner-border spinner-border-sm text-success\\\" role=\\\"status\\\" style=\\\"visibility:hidden;\\\"><span class=\\\"visually-hidden\\\">Loading...</span></div>\";\n  // const container = `<div style=\"display:flex;justify-content:space-between;align-items:center\">${isActive + settings + loading}</div>`\n  var container = \"<div style=\\\"display:flex;justify-content:space-between;align-items:center\\\">\".concat(settings + addProduct + loading, \"</div>\");\n  return container;\n};\n\n//# sourceURL=webpack://app/./customer/src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./customer/src/index.js"]();
/******/ 	
/******/ })()
;