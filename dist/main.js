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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayDOM)\n/* harmony export */ });\nfunction displayDOM(weather) {\n  const root = document.querySelector('#root');\n  root.innerHTML = '';\n  console.log(weather);\n\n  //Location\n  const location = document.createElement('h1');\n  location.textContent = `${weather.city}, ${weather.country}`;\n\n  //weather\n  const main = document.createElement('div');\n  main.classList.add('main');\n\n  //weather icon\n  const weatherIcon = document.createElement('img');\n  weatherIcon.classList.add('icon');\n  weatherIcon.src = `http://openweathermap.org/img/wn/${weather.icon}@2x.png`;\n\n  const temp = document.createElement('span');\n  temp.classList.add('temp');\n  temp.textContent = weather.temp + '℃';\n\n  main.append(weatherIcon, temp);\n\n  //weather information\n  const info = document.createElement('p');\n  info.textContent = `feels like ${weather.feelsLike}℃. ${weather.description}.`;\n\n  root.append(location, main, info);\n}\n\n\n//# sourceURL=webpack://weather-app/./src/displayDOM.js?");

/***/ }),

/***/ "./src/fetchWeatherData.js":
/*!*********************************!*\
  !*** ./src/fetchWeatherData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchData)\n/* harmony export */ });\nasync function fetchData(city) {\n  const response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=1f965b90a13724999861d4a7c8433f55`,\n    { mode: 'cors' }\n  );\n  const data = await response.json();\n\n  return data;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/fetchWeatherData.js?");

/***/ }),

/***/ "./src/getCurrentCity.js":
/*!*******************************!*\
  !*** ./src/getCurrentCity.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getCurrentCity)\n/* harmony export */ });\nasync function getCurrentCity(position) {\n  const latitude = position.coords.latitude;\n  const longitude = position.coords.longitude;\n  const API_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}.42159&longitude=${longitude}.0837&localityLanguage=en\n  `;\n\n  const fetchCity = await fetch(API_URL, { mode: 'cors' });\n  const data = await fetchCity.json();\n\n  const city = data.localityInfo.administrative[4].name;\n  return city;\n}\n\n\n//# sourceURL=webpack://weather-app/./src/getCurrentCity.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayDOM */ \"./src/displayDOM.js\");\n/* harmony import */ var _fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchWeatherData */ \"./src/fetchWeatherData.js\");\n/* harmony import */ var _getCurrentCity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getCurrentCity */ \"./src/getCurrentCity.js\");\n/* harmony import */ var _processData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./processData */ \"./src/processData.js\");\n\n\n\n\n\ndocument.querySelector('form').addEventListener('submit', (e) => {\n  e.preventDefault();\n  const city = document.querySelector('.city-input').value;\n\n  showWeather(city);\n\n  e.target.reset();\n});\n\nasync function displayCurrentCity(position) {\n  const city = await (0,_getCurrentCity__WEBPACK_IMPORTED_MODULE_2__.default)(position);\n  showWeather(city);\n}\n\nwindow.onload = () => {\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(displayCurrentCity);\n  }\n};\n\nasync function showWeather(city) {\n  const data = await (0,_fetchWeatherData__WEBPACK_IMPORTED_MODULE_1__.default)(city);\n  const weatherData = (0,_processData__WEBPACK_IMPORTED_MODULE_3__.default)(data);\n  (0,_displayDOM__WEBPACK_IMPORTED_MODULE_0__.default)(weatherData);\n}\n\nshowWeather('toronto');\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/processData.js":
/*!****************************!*\
  !*** ./src/processData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ processData)\n/* harmony export */ });\nfunction processData(data) {\n  const sky = data.weather[0].main;\n  const description = data.weather[0].description;\n  const temp = data.main.temp;\n  const feelsLike = data.main.feels_like;\n\n  const city = data.name;\n  const country = data.sys.country;\n\n  const icon = data.weather[0].icon;\n\n  return {\n    sky,\n    description,\n    temp,\n    feelsLike,\n    city,\n    country,\n    icon,\n  };\n}\n\n\n//# sourceURL=webpack://weather-app/./src/processData.js?");

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