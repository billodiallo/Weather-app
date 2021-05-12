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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_parsejson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/parsejson */ \"./src/modules/parsejson.js\");\n\n\n\nconst apiKey = '06d4a40aeec62ece3ab14b5fc03c4ec0';\n_modules_dom__WEBPACK_IMPORTED_MODULE_0__.searchForm.addEventListener('submit', event => {\n  event.preventDefault();\n  const currentCity = _modules_dom__WEBPACK_IMPORTED_MODULE_0__.checkCity.value;\n  const fetchWeather = async (city, unit) => {\n    const response = await fetch(\n      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`,\n    );\n    return response.json();\n  };\n\n  Promise.all([\n    fetchWeather(currentCity, 'metric'),\n    fetchWeather(currentCity, 'imperial'),\n  ])\n    .then(([celsiusData, FahrenheitData]) => {\n      (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.default)((0,_modules_parsejson__WEBPACK_IMPORTED_MODULE_1__.default)(celsiusData), (0,_modules_parsejson__WEBPACK_IMPORTED_MODULE_1__.default)(FahrenheitData).temp);\n    })\n    .catch(() => {\n      _modules_dom__WEBPACK_IMPORTED_MODULE_0__.errorMessage.textContent = \"I Couldn't fetch weather for this city 😩.\";\n    });\n  _modules_dom__WEBPACK_IMPORTED_MODULE_0__.errorMessage.textContent = '';\n  _modules_dom__WEBPACK_IMPORTED_MODULE_0__.searchForm.reset();\n  _modules_dom__WEBPACK_IMPORTED_MODULE_0__.checkCity.focus();\n  (0,_modules_dom__WEBPACK_IMPORTED_MODULE_0__.selectImage)(currentCity);\n});\n\n\n//# sourceURL=webpack://webpackk/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchForm\": () => (/* binding */ searchForm),\n/* harmony export */   \"checkCity\": () => (/* binding */ checkCity),\n/* harmony export */   \"errorMessage\": () => (/* binding */ errorMessage),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"selectImage\": () => (/* binding */ selectImage)\n/* harmony export */ });\nconst searchForm = document.querySelector('.control');\nconst checkCity = document.getElementById('cityInput');\nconst errorMessage = document.getElementById('warn');\n\nconst weatherImg = document.querySelector('.icon');\nconst desc = document.querySelector('.weather-status');\nconst currTemp = document.querySelector('.main-temp');\nconst currCity = document.querySelectorAll('.location>span');\nconst moreAbt = document.querySelectorAll('.more-info > p');\nconst displayCity = document.getElementById('weather-forecast');\nconst currDate = document.querySelector('.date');\nconst c = document.getElementById('switchF');\nconst d = document.getElementById('degrees');\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((data, tempF = null) => {\n  const list = document.createElement('li');\n  list.classList.add('city');\n  currCity[0].innerHTML = data.name;\n  currCity[1].innerHTML = data.country;\n  currDate.innerHTML = new Date();\n  currTemp.innerHTML = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(\n    data.temp,\n  )}°C`;\n  weatherImg.src = `https://openweathermap.org/img/wn/${data.icon}@2x.png`;\n  desc.innerHTML = data.description;\n  let currTempF = false;\n  const toggleTempF = (el, cc, tempInfo) => {\n    const cel = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(\n      tempInfo,\n    )}°C`;\n    const elTempF = `<i class='fa fa-thermometer-three-quarters'></i>${Math.round(\n      tempF,\n    )}°F`;\n    if (currTempF) {\n      cc.innerHTML = cel;\n      currTemp.innerHTML = cel;\n      el.innerHTML = 'Switch to °F';\n      currTempF = false;\n    } else {\n      cc.innerHTML = elTempF;\n      currTemp.innerHTML = elTempF;\n      el.innerHTML = 'Switch to °C';\n      currTempF = true;\n    }\n  };\n  moreAbt[0].innerHTML = `\n  <span class='b-feel'>Feels Like</span>\n  ${Math.round(data.feelsLike)}°C\n  `;\n  moreAbt[1].innerHTML = `\n  <i class='fa fa-temperature-high'></i>\n  <span class='b-feel'>Max temp</span>${Math.round(\n    data.tempMax,\n  )}°C, <i class='fa fa-temperature-low'></i>\n  <span class='b-feel'>Min temp</span>${Math.round(data.tempMin)}°C\n  `;\n  d.style.display = 'block';\n  d.addEventListener('click', () => {\n    toggleTempF(d, c, data.temp);\n  });\n  displayCity.className = 'show';\n});\n\nconst selectImage = () => {\n  const script = document.createElement('script');\n  document.head.appendChild(script);\n  window.abc = function abc(data) {\n    const body = document.querySelector('body');\n    body.style.background = `url('${data.items[2].media.m}') no-repeat`;\n    body.style.backgroundSize = 'cover';\n  };\n};\n\n\n//# sourceURL=webpack://webpackk/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/parsejson.js":
/*!**********************************!*\
  !*** ./src/modules/parsejson.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((json) => {\n  const { description, icon, main } = json.weather[0];\n  const { temp } = json.main;\n  const [name, country] = [json.name, json.sys.country];\n  const { dateTime } = Date(json.dt);\n  return {\n    description,\n    icon,\n    main,\n    temp,\n    name,\n    country,\n    tempMax: json.main.temp_max,\n    tempMin: json.main.temp_min,\n    feelsLike: json.main.feels_like,\n    dateTime,\n  };\n});\n\n\n//# sourceURL=webpack://webpackk/./src/modules/parsejson.js?");

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