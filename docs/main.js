/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contactPage=()=>{\n    const placeholder = document.createElement(\"div\")\n    const headerEl= document.createElement(\"header\")\n    const h1El = document.createElement(\"h1\")\n    h1El.innerHTML=\"borger palace\"\n    const subTitleEl = document.createElement(\"h2\")\n    subTitleEl.innerHTML=\"contact us!\"\n\n    const textBodyEl = document.createElement(\"p\")\n    textBodyEl.innerHTML=\"contact details here\"\n    headerEl.append(h1El,subTitleEl)\n    placeholder.classList.add(\"card\")\n    placeholder.append(headerEl, textBodyEl)\n    return placeholder\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);\n\n//# sourceURL=webpack://top-restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst homePage=()=>{\n    const placeholder = document.createElement(\"div\")\n    const headerEl= document.createElement(\"header\")\n    const h1El = document.createElement(\"h1\")\n    h1El.innerHTML=\"borger palace\"\n    const subTitleEl = document.createElement(\"h2\")\n    subTitleEl.innerHTML=\"your number 1 stop for burgers & more\"\n\n    const textBodyEl = document.createElement(\"p\")\n    textBodyEl.innerHTML=\"we serve up borgers most of the time. we don't have fixed opening hours, since we're usually frying up patties every day, but if you'd like to check if we're open before showing up, feel free to message our telegram bot at\"\n    headerEl.append(h1El,subTitleEl)\n    placeholder.classList.add(\"card\")\n    placeholder.append(headerEl, textBodyEl)\n    return placeholder\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\n\n//# sourceURL=webpack://top-restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\n\n\nconst container = document.getElementById(\"content\")\n\ncontainer.append((0,_nav__WEBPACK_IMPORTED_MODULE_3__.default)(),(0,_home__WEBPACK_IMPORTED_MODULE_0__.default)())\n\nconst navLinks = document.querySelectorAll(\"a\")\n\nfunction updateContent(e){\n    const card = document.querySelector(\".card\")\n    switch (this.title) {\n        case \"home\":\n            console.log(container);\n            card.remove()\n            container.append((0,_home__WEBPACK_IMPORTED_MODULE_0__.default)())\n            break;\n        case \"menu\":\n            card.remove()\n            container.append((0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)())\n            break;\n        case \"contact us\":\n            card.remove()\n            container.append((0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)())\n            break;\n        default:\n            break;\n    }\n}\n\nnavLinks.forEach(link=>{\n    link.addEventListener(\"click\",updateContent)\n})\n\n//# sourceURL=webpack://top-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPage=()=>{\n    const placeholder = document.createElement(\"div\")\n    const headerEl= document.createElement(\"header\")\n    const h1El = document.createElement(\"h1\")\n    h1El.innerHTML=\"borger palace\"\n    const subTitleEl = document.createElement(\"h2\")\n    subTitleEl.innerHTML=\"our menu\"\n\n    let menuItems = [\n        { name: \"cool beans burger\", weight: \"850g\", description: \"for the cool kids\" },\n        { name: \"hungry hippo burger\", height: \"1320g\", description: \"for all you hungry bois\" },\n        { name: \"tasty truffle burger\", height: \"420g\", description: \"tastieee\" }\n    ];\n\n    let table = document.createElement(\"table\")\n    table.classList.add(\"menu-table\")\n    table.createTHead()\n    let row = table.insertRow();\n    for (let i = 0; i < menuItems.length; i++) {\n        const item = menuItems[i];\n        let th = document.createElement(\"th\")\n        let text = document.createTextNode(item.name)\n        th.appendChild(text)\n        row.appendChild(th)\n    }\n\n    const textBodyEl = document.createElement(\"p\")\n    textBodyEl.innerHTML=\"menu page menu page\"\n    headerEl.append(h1El,subTitleEl)\n    placeholder.classList.add(\"card\")\n    console.log(table);\n    placeholder.append(headerEl, textBodyEl,table)\n    return placeholder\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://top-restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//generate nav bar\n//<nav><li>home</li><li>menu</li><li>contact us</li></nav>\n\nconst navBar=()=>{\n    const nav = document.createElement(\"nav\")\n    const entries=[\"home\",\"menu\",\"contact us\"]\n    \n    for (let i = 0; i < entries.length; i++) {\n        const element = entries[i];\n        let entry = document.createElement(\"li\")\n        let linkText = document.createTextNode(element);\n        let a = document.createElement('a');\n        a.append(linkText)\n        a.title = element;\n        entry.appendChild(a)\n        nav.append(entry)\n    }\n\n    return nav\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n//# sourceURL=webpack://top-restaurant/./src/nav.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;