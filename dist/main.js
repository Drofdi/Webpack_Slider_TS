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

/***/ "./src/ImgSlider.js":
/*!**************************!*\
  !*** ./src/ImgSlider.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImgSlider)\n/* harmony export */ });\nclass ImgSlider{\r\n    constructor(selectors,logics){\r\n    this.selectors = selectors\r\n    this.logics = logics\r\n    this.setEvents = this.setEvents.bind(this)\r\n    this.setEvents()\r\n}\r\n    setEvents(){\r\n        this.selectors.mainSlider.addEventListener('pointerdown', this.logics.pointerDown)\r\n        this.selectors.mainSlider.addEventListener('pointermove', this.logics.pointerMove)\r\n        this.selectors.mainSlider.addEventListener('pointerup',this.logics.pointerUp)\r\n        this.selectors.buttonBack.addEventListener('click', this.logics.backSlideButton)\r\n        this.selectors.buttonNext.addEventListener('click', this.logics.nextSlideButton)\r\n        this.selectors.headBut.addEventListener('click', this.logics.headButton)\r\n    }\r\n} \r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/ImgSlider.js?");

/***/ }),

/***/ "./src/ImgSliderSelectors.js":
/*!***********************************!*\
  !*** ./src/ImgSliderSelectors.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImgSliderSelectors),\n/* harmony export */   querySelectors: () => (/* binding */ querySelectors)\n/* harmony export */ });\nclass ImgSliderSelectors{\r\n    constructor(){\r\n        this.headBut = querySelectors.headButton\r\n        this.headInput = querySelectors.headInput\r\n        this.mainSlider = querySelectors.mainSlider\r\n        this.mainImgLine = querySelectors.mainImgLine\r\n        this.imgS = querySelectors.sliderImg\r\n        this.buttonBack = querySelectors.buttonBack\r\n        this.buttonNext = querySelectors.buttonNext\r\n    }\r\n}\r\n\r\nconst querySelectors = {\r\n       headButton : document.querySelector('.headButton'),\r\n       headInput : document.querySelector('.headInput'),\r\n       mainSlider : document.querySelector('.mainSlider'),\r\n       mainImgLine : document.querySelector('.mainImgLine'),\r\n       sliderImg : document.querySelectorAll('.sliderImg'),\r\n       buttonBack : document.querySelector('.back'),\r\n       buttonNext : document.querySelector('.next'),\r\n}\n\n//# sourceURL=webpack:///./src/ImgSliderSelectors.js?");

/***/ }),

/***/ "./src/SliderLogics.js":
/*!*****************************!*\
  !*** ./src/SliderLogics.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Sliderlogics)\n/* harmony export */ });\nclass Sliderlogics{\r\n    constructor(selectors,timer){\r\n    this.selectors = selectors\r\n    this.timer = timer\r\n    this.x1 = 0\r\n    this.x2 = 0\r\n    this.offset = 0\r\n    this.numberOfPictures = 1\r\n    this.isMouseOn\r\n    this.interval\r\n\r\n    this.headButton = this.headButton.bind(this)\r\n    this.pointerDown = this.pointerDown.bind(this)\r\n    this.pointerMove = this.pointerMove.bind(this)\r\n    this.pointerUp = this.pointerUp.bind(this)\r\n    this.backSlide = this.backSlide.bind(this)\r\n    this.nextSlide = this.nextSlide.bind(this)\r\n    this.backSlideButton = this.backSlideButton.bind(this)\r\n    this.nextSlideButton = this.nextSlideButton.bind(this)\r\n    }\r\n\r\n    headButton(){\r\n        this.numberOfPictures = this.selectors.headInput.value\r\n        if (this.numberOfPictures < 1 || this.numberOfPictures > 3){\r\n            throw new Error(\"Введите значение от 1 до 3\")\r\n        }\r\n        if (this.numberOfPictures == 1){\r\n            this.offset = 0\r\n            this.selectors.mainImgLine.style.left = 0 + '%'\r\n            for(let img of this.selectors.imgS){\r\n                img.style.width = 100 + '%'  \r\n            }\r\n        }    \r\n        if (this.numberOfPictures == 2){\r\n            this.offset = 0\r\n            this.selectors.mainImgLine.style.left = 0 + '%'\r\n            for(let img of this.selectors.imgS){\r\n                img.style.width = 50 + '%' \r\n            }\r\n        }\r\n        if (this.numberOfPictures == 3){\r\n            this.offset = 0\r\n            this.selectors.mainImgLine.style.left = 0 + '%'\r\n            for(let img of this.selectors.imgS){\r\n                img.style.width = 33.333 + '%'\r\n            }\r\n        }  \r\n    }\r\n\r\n    pointerDown(event){\r\n        this.isMouseOn = true\r\n        this.x1 = event.screenX\r\n        this.selectors.mainSlider.addEventListener('pointermove', this.pointerMove)\r\n    }\r\n\r\n    pointerUp(){\r\n        this.selectors.mainSlider.removeEventListener('pointermove', this.pointerMove)\r\n    }\r\n\r\n    pointerMove(event){\r\n        this.x2 = event.screenX\r\n        if(this.isMouseOn){\r\n        if (this.x1 > this.x2){\r\n            this.nextSlide()\r\n            this.isMouseOn = false\r\n            this.timer.destroyTimer()\r\n            this.timer.timer()\r\n        } else if (this.x2 > this.x1){\r\n            this.backSlide()\r\n            this.isMouseOn = false\r\n            this.timer.destroyTimer()\r\n            this.timer.timer()\r\n        }\r\n    }\r\n    }\r\n\r\n    backSlideButton(){\r\n        this.backSlide()\r\n        this.timer.destroyTimer()\r\n        this.timer.timer()\r\n    }\r\n\r\n    nextSlideButton(){\r\n        this.nextSlide()\r\n        this.timer.destroyTimer()\r\n        this.timer.timer()\r\n    }\r\n\r\n\r\n    backSlide(){\r\n        if (this.numberOfPictures == 1){\r\n            this.offset -= 100\r\n                if (this.offset < 0){\r\n                    this.offset = 100 * (this.selectors.imgS.length - 1)\r\n                }\r\n                this.selectors.mainImgLine.style.left = -this.offset + '%'\r\n            }   \r\n            if (this.numberOfPictures == 2){\r\n                this.offset -= 50\r\n                if (this.offset < 0){\r\n                    this.offset = 50 * (this.selectors.imgS.length - 2)\r\n                }\r\n                this.selectors.mainImgLine.style.left = -this.offset + '%'\r\n            }\r\n            if (this.numberOfPictures == 3){\r\n                this.offset -= 33.33\r\n                if (this.offset < 0){\r\n                    this.offset = 33.33 * (this.selectors.imgS.length - 3)\r\n                }\r\n                this.selectors.mainImgLine.style.left = -this.offset + '%'\r\n            }\r\n    }\r\n\r\n    nextSlide(){\r\n        if (this.numberOfPictures == 1){\r\n            this.offset += 100\r\n            if (this.offset > 100 * (this.selectors.imgS.length - 1)){\r\n                this.offset = 0\r\n            }\r\n            this.selectors.mainImgLine.style.left = -this.offset + '%'\r\n        }\r\n        if (this.numberOfPictures == 2){\r\n            this.offset += 50\r\n            if (this.offset > 50 * (this.selectors.imgS.length - 2)){\r\n                this.offset = 0\r\n            }\r\n            this.selectors.mainImgLine.style.left = -this.offset + '%'\r\n        }\r\n        if (this.numberOfPictures == 3){\r\n            this.offset += 33.33\r\n            if (this.offset > 33.33 * (this.selectors.imgS.length - 3)){\r\n                this.offset = 0\r\n            }\r\n            this.selectors.mainImgLine.style.left = -this.offset + '%'\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/SliderLogics.js?");

/***/ }),

/***/ "./src/Timer.js":
/*!**********************!*\
  !*** ./src/Timer.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Timer)\n/* harmony export */ });\nclass Timer{\r\n    constructor(logics){\r\n        this.logics = logics\r\n        this.timer = this.timer.bind(this)\r\n        this.destroyTimer = this.destroyTimer.bind(this)\r\n    }\r\n\r\n    timer(){\r\n        this.interval = setInterval(this.logics.nextSlide, 5000)\r\n    }\r\n\r\n    destroyTimer(){\r\n        clearInterval(this.interval)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/Timer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ImgSlider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImgSlider.js */ \"./src/ImgSlider.js\");\n/* harmony import */ var _Timer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Timer.js */ \"./src/Timer.js\");\n/* harmony import */ var _SliderLogics_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SliderLogics.js */ \"./src/SliderLogics.js\");\n/* harmony import */ var _ImgSliderSelectors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImgSliderSelectors.js */ \"./src/ImgSliderSelectors.js\");\n\r\n\r\n\r\n\r\n\r\nlet selectors = new _ImgSliderSelectors_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]()\r\nlet logics = new _SliderLogics_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](selectors, null) \r\nlet timer = new _Timer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](logics) \r\nlogics.timer = timer\r\nlet slider = new _ImgSlider_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](selectors, logics)\r\ntimer.timer()\n\n//# sourceURL=webpack:///./src/index.js?");

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