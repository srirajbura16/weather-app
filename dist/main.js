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

/***/ "./src/displayDOM.js":
/*!***************************!*\
  !*** ./src/displayDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayDOM)\n/* harmony export */ });\nfunction displayDOM(weather) {\n  console.log(weather);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/displayDOM.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ \"./src/weatherData.js\");\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processData */ \"./src/processData.js\");\n/* harmony import */ var _displayDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayDOM */ \"./src/displayDOM.js\");\n\n\n\ndocument.querySelector('form').addEventListener('submit', e => {\n  e.preventDefault();\n  const city = document.querySelector('.city-input').value;\n  (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.default)(city)\n    .then(weatherData => {\n      console.log(weatherData);\n      return (0,_processData__WEBPACK_IMPORTED_MODULE_1__.default)(weatherData);\n    })\n    .then(data => {\n      (0,_displayDOM__WEBPACK_IMPORTED_MODULE_2__.default)(data);\n    })\n    .catch(err => {\n      console.log(err);\n    });\n});\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/processData.js":
/*!****************************!*\
  !*** ./src/processData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ processData)\n/* harmony export */ });\nfunction processData(data) {\n  const sky = data.weather[0].main;\n  const description = data.weather[0].description;\n  const temp = data.main.temp;\n  const feelsLike = data.main.feels_like;\n\n  const city = data.name;\n  const country = data.sys.country;\n\n  return {\n    sky,\n    description,\n    temp,\n    feelsLike,\n    city,\n    country,\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./src/processData.js?");

/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getWeatherData)\n/* harmony export */ });\nasync function getWeatherData(city) {\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1f965b90a13724999861d4a7c8433f55`,\n    { mode: 'cors' }\n  );\n  const weatherData = await response.json();\n\n  return weatherData;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/weatherData.js?");

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