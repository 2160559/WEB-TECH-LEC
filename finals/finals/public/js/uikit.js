/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ajax__ = __webpack_require__(28);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return __WEBPACK_IMPORTED_MODULE_0__ajax__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return __WEBPACK_IMPORTED_MODULE_0__ajax__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation__ = __webpack_require__(32);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return __WEBPACK_IMPORTED_MODULE_1__animation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attr__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeAttr", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filterAttr", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "data", function() { return __WEBPACK_IMPORTED_MODULE_2__attr__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__class__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return __WEBPACK_IMPORTED_MODULE_3__class__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return __WEBPACK_IMPORTED_MODULE_3__class__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClasses", function() { return __WEBPACK_IMPORTED_MODULE_3__class__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "replaceClass", function() { return __WEBPACK_IMPORTED_MODULE_3__class__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return __WEBPACK_IMPORTED_MODULE_3__class__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toggleClass", function() { return __WEBPACK_IMPORTED_MODULE_3__class__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core__ = __webpack_require__(33);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$", function() { return __WEBPACK_IMPORTED_MODULE_4__core__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return __WEBPACK_IMPORTED_MODULE_4__core__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dimensions__ = __webpack_require__(16);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "positionAt", function() { return __WEBPACK_IMPORTED_MODULE_5__dimensions__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return __WEBPACK_IMPORTED_MODULE_5__dimensions__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "position", function() { return __WEBPACK_IMPORTED_MODULE_5__dimensions__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "height", function() { return __WEBPACK_IMPORTED_MODULE_5__dimensions__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "width", function() { return __WEBPACK_IMPORTED_MODULE_5__dimensions__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flipPosition", function() { return __WEBPACK_IMPORTED_MODULE_5__dimensions__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInView", function() { return __WEBPACK_IMPORTED_MODULE_5__dimensions__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scrolledOver", function() { return __WEBPACK_IMPORTED_MODULE_5__dimensions__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isReady", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "index", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "html", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prepend", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "append", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "before", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "after", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrapAll", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "wrapInner", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "unwrap", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fragment", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return __WEBPACK_IMPORTED_MODULE_6__dom__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__env__ = __webpack_require__(17);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRtl", function() { return __WEBPACK_IMPORTED_MODULE_7__env__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasTouch", function() { return __WEBPACK_IMPORTED_MODULE_7__env__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerDown", function() { return __WEBPACK_IMPORTED_MODULE_7__env__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerMove", function() { return __WEBPACK_IMPORTED_MODULE_7__env__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerUp", function() { return __WEBPACK_IMPORTED_MODULE_7__env__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerEnter", function() { return __WEBPACK_IMPORTED_MODULE_7__env__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerLeave", function() { return __WEBPACK_IMPORTED_MODULE_7__env__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "on", function() { return __WEBPACK_IMPORTED_MODULE_8__event__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "off", function() { return __WEBPACK_IMPORTED_MODULE_8__event__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "once", function() { return __WEBPACK_IMPORTED_MODULE_8__event__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return __WEBPACK_IMPORTED_MODULE_8__event__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return __WEBPACK_IMPORTED_MODULE_8__event__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toEventTargets", function() { return __WEBPACK_IMPORTED_MODULE_8__event__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "preventClick", function() { return __WEBPACK_IMPORTED_MODULE_8__event__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fastdom__ = __webpack_require__(34);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fastdom", function() { return __WEBPACK_IMPORTED_MODULE_9__fastdom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__filter__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVoidElement", function() { return __WEBPACK_IMPORTED_MODULE_10__filter__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return __WEBPACK_IMPORTED_MODULE_10__filter__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "selInput", function() { return __WEBPACK_IMPORTED_MODULE_10__filter__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInput", function() { return __WEBPACK_IMPORTED_MODULE_10__filter__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return __WEBPACK_IMPORTED_MODULE_10__filter__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "within", function() { return __WEBPACK_IMPORTED_MODULE_10__filter__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__lang__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ucfirst", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["L"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "startsWith", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "endsWith", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "includes", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWindow", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isDocument", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isJQuery", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNode", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNodeCollection", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["K"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toFloat", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNode", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["I"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNodes", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["J"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toMs", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["H"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "each", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "sortBy", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "intersectRect", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointInRect", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return __WEBPACK_IMPORTED_MODULE_11__lang__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mouse__ = __webpack_require__(35);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MouseTracker", function() { return __WEBPACK_IMPORTED_MODULE_12__mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__options__ = __webpack_require__(36);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return __WEBPACK_IMPORTED_MODULE_13__options__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__player__ = __webpack_require__(37);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return __WEBPACK_IMPORTED_MODULE_14__player__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__promise__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Promise", function() { return __WEBPACK_IMPORTED_MODULE_15__promise__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Deferred", function() { return __WEBPACK_IMPORTED_MODULE_15__promise__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selector__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "query", function() { return __WEBPACK_IMPORTED_MODULE_16__selector__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "queryAll", function() { return __WEBPACK_IMPORTED_MODULE_16__selector__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "find", function() { return __WEBPACK_IMPORTED_MODULE_16__selector__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "findAll", function() { return __WEBPACK_IMPORTED_MODULE_16__selector__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matches", function() { return __WEBPACK_IMPORTED_MODULE_16__selector__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "closest", function() { return __WEBPACK_IMPORTED_MODULE_16__selector__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "parents", function() { return __WEBPACK_IMPORTED_MODULE_16__selector__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "escape", function() { return __WEBPACK_IMPORTED_MODULE_16__selector__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__style__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "css", function() { return __WEBPACK_IMPORTED_MODULE_17__style__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return __WEBPACK_IMPORTED_MODULE_17__style__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return __WEBPACK_IMPORTED_MODULE_17__style__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getCssVar", function() { return __WEBPACK_IMPORTED_MODULE_17__style__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "propName", function() { return __WEBPACK_IMPORTED_MODULE_17__style__["e"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__touch__ = __webpack_require__(38);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return __WEBPACK_IMPORTED_MODULE_18__touch__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getPos", function() { return __WEBPACK_IMPORTED_MODULE_18__touch__["a"]; });




















/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = bind;
/* harmony export (immutable) */ __webpack_exports__["h"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["i"] = hyphenate;
/* harmony export (immutable) */ __webpack_exports__["d"] = camelize;
/* harmony export (immutable) */ __webpack_exports__["L"] = ucfirst;
/* harmony export (immutable) */ __webpack_exports__["C"] = startsWith;
/* harmony export (immutable) */ __webpack_exports__["g"] = endsWith;
/* harmony export (immutable) */ __webpack_exports__["j"] = includes;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isArray; });
/* harmony export (immutable) */ __webpack_exports__["o"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["u"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["v"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["y"] = isWindow;
/* harmony export (immutable) */ __webpack_exports__["n"] = isDocument;
/* harmony export (immutable) */ __webpack_exports__["p"] = isJQuery;
/* harmony export (immutable) */ __webpack_exports__["q"] = isNode;
/* harmony export (immutable) */ __webpack_exports__["r"] = isNodeCollection;
/* harmony export (immutable) */ __webpack_exports__["m"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["w"] = isString;
/* harmony export (immutable) */ __webpack_exports__["s"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["t"] = isNumeric;
/* harmony export (immutable) */ __webpack_exports__["x"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["E"] = toBoolean;
/* harmony export (immutable) */ __webpack_exports__["K"] = toNumber;
/* harmony export (immutable) */ __webpack_exports__["F"] = toFloat;
/* harmony export (immutable) */ __webpack_exports__["I"] = toNode;
/* harmony export (immutable) */ __webpack_exports__["J"] = toNodes;
/* harmony export (immutable) */ __webpack_exports__["G"] = toList;
/* harmony export (immutable) */ __webpack_exports__["H"] = toMs;
/* harmony export (immutable) */ __webpack_exports__["D"] = swap;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return assign; });
/* harmony export (immutable) */ __webpack_exports__["f"] = each;
/* harmony export (immutable) */ __webpack_exports__["B"] = sortBy;
/* harmony export (immutable) */ __webpack_exports__["e"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["z"] = noop;
/* harmony export (immutable) */ __webpack_exports__["k"] = intersectRect;
/* harmony export (immutable) */ __webpack_exports__["A"] = pointInRect;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dimensions; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function bind(fn, context) {
    return function (a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(context, arguments) : fn.call(context, a) : fn.call(context);
    };
}

var hasOwnProperty = Object.prototype.hasOwnProperty;


function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

var hyphenateRe = /([a-z\d])([A-Z])/g;

function hyphenate(str) {
    return str.replace(hyphenateRe, '$1-$2').toLowerCase();
}

var camelizeRE = /-(\w)/g;

function camelize(str) {
    return str.replace(camelizeRE, toUpper);
}

function toUpper(_, c) {
    return c ? c.toUpperCase() : '';
}

function ucfirst(str) {
    return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : '';
}

var strPrototype = String.prototype;
var startsWithFn = strPrototype.startsWith || function (search) {
    return this.lastIndexOf(search, 0) === 0;
};

function startsWith(str, search) {
    return startsWithFn.call(str, search);
}

var endsWithFn = strPrototype.endsWith || function (search) {
    return this.substr(-search.length) === search;
};

function endsWith(str, search) {
    return endsWithFn.call(str, search);
}

var includesFn = function includesFn(search) {
    return ~this.indexOf(search);
};
var includesStr = strPrototype.includes || includesFn;
var includesArray = Array.prototype.includes || includesFn;

function includes(obj, search) {
    return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
}

var isArray = Array.isArray;



function isFunction(obj) {
    return typeof obj === 'function';
}

function isObject(obj) {
    return obj !== null && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}

function isWindow(obj) {
    return isObject(obj) && obj === obj.window;
}

function isDocument(obj) {
    return isObject(obj) && obj.nodeType === 9;
}

function isJQuery(obj) {
    return isObject(obj) && !!obj.jquery;
}

function isNode(element) {
    return element instanceof Node || isObject(element) && element.nodeType === 1;
}

function isNodeCollection(element) {
    return element instanceof NodeList || element instanceof HTMLCollection;
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isNumeric(value) {
    return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
}

function isUndefined(value) {
    return value === void 0;
}

function toBoolean(value) {
    return isBoolean(value) ? value : value === 'true' || value === '1' || value === '' ? true : value === 'false' || value === '0' ? false : value;
}

function toNumber(value) {
    var number = Number(value);
    return !isNaN(number) ? number : false;
}

function toFloat(value) {
    return parseFloat(value) || 0;
}

function toNode(element) {
    return isNode(element) || isWindow(element) || isDocument(element) ? element : isNodeCollection(element) || isJQuery(element) ? element[0] : isArray(element) ? toNode(element[0]) : null;
}

var arrayProto = Array.prototype;
function toNodes(element) {
    return isNode(element) ? [element] : isNodeCollection(element) ? arrayProto.slice.call(element) : isArray(element) ? element.map(toNode).filter(Boolean) : isJQuery(element) ? element.toArray() : [];
}

function toList(value) {
    return isArray(value) ? value : isString(value) ? value.split(/,(?![^(]*\))/).map(function (value) {
        return isNumeric(value) ? toNumber(value) : toBoolean(value.trim());
    }) : [value];
}

function toMs(time) {
    return !time ? 0 : endsWith(time, 'ms') ? toFloat(time) : toFloat(time) * 1000;
}

function swap(value, a, b) {
    return value.replace(new RegExp(a + '|' + b, 'mg'), function (match) {
        return match === a ? b : a;
    });
}

var assign = Object.assign || function (target) {
    target = Object(target);

    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    for (var i = 0; i < args.length; i++) {
        var source = args[i];
        if (source !== null) {
            for (var key in source) {
                if (hasOwn(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
};

function each(obj, cb) {
    for (var key in obj) {
        if (cb.call(obj[key], obj[key], key) === false) {
            break;
        }
    }
}

// Compare by numbers only
function sortBy(collection, prop) {
    return collection.sort(function (a, b) {
        return a[prop] - b[prop];
    });
}

function clamp(number) {
    var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return Math.min(Math.max(number, min), max);
}

function noop() {}

function intersectRect(r1, r2) {
    return r1.left <= r2.right && r2.left <= r1.right && r1.top <= r2.bottom && r2.top <= r1.bottom;
}

function pointInRect(point, rect) {
    return intersectRect({ top: point.y, bottom: point.y, left: point.x, right: point.x }, rect);
}

var Dimensions = {
    ratio: function ratio(dimensions, prop, value) {
        var _ref;

        var aProp = prop === 'width' ? 'height' : 'width';

        return _ref = {}, _defineProperty(_ref, aProp, Math.round(value * dimensions[aProp] / dimensions[prop])), _defineProperty(_ref, prop, value), _ref;
    },
    contain: function contain(dimensions, maxDimensions) {
        var _this = this;

        dimensions = assign({}, dimensions);

        each(dimensions, function (_, prop) {
            return dimensions = dimensions[prop] > maxDimensions[prop] ? _this.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
        });

        return dimensions;
    },
    cover: function cover(dimensions, maxDimensions) {
        var _this2 = this;

        dimensions = this.contain(dimensions, maxDimensions);

        each(dimensions, function (_, prop) {
            return dimensions = dimensions[prop] < maxDimensions[prop] ? _this2.ratio(dimensions, prop, maxDimensions[prop]) : dimensions;
        });

        return dimensions;
    }
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__container__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__position__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__togglable__ = __webpack_require__(20);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__class__["a"]; });
/* unused harmony reexport Container */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__modal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__position__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__togglable__["a"]; });








/* harmony default export */ __webpack_exports__["e"] = (function (UIkit) {

    UIkit.mixin.class = __WEBPACK_IMPORTED_MODULE_0__class__["a" /* default */];
    UIkit.mixin.container = __WEBPACK_IMPORTED_MODULE_1__container__["a" /* default */];
    UIkit.mixin.modal = __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* default */];
    UIkit.mixin.position = __WEBPACK_IMPORTED_MODULE_3__position__["a" /* default */];
    UIkit.mixin.togglable = __WEBPACK_IMPORTED_MODULE_4__togglable__["a" /* default */];
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = on;
/* harmony export (immutable) */ __webpack_exports__["b"] = off;
/* harmony export (immutable) */ __webpack_exports__["d"] = once;
/* harmony export (immutable) */ __webpack_exports__["g"] = trigger;
/* harmony export (immutable) */ __webpack_exports__["a"] = createEvent;
/* harmony export (immutable) */ __webpack_exports__["f"] = toEventTargets;
/* harmony export (immutable) */ __webpack_exports__["e"] = preventClick;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__filter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang__ = __webpack_require__(1);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





function on() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var _getArgs = getArgs(args),
        _getArgs2 = _slicedToArray(_getArgs, 5),
        target = _getArgs2[0],
        type = _getArgs2[1],
        selector = _getArgs2[2],
        listener = _getArgs2[3],
        useCapture = _getArgs2[4];

    target = toEventTarget(target);

    if (selector) {
        listener = delegate(target, selector, listener);
    }

    if (listener.length > 1) {
        listener = detail(listener);
    }

    type.split(' ').forEach(function (type) {
        return target && target.addEventListener(type, listener, useCapture);
    });
    return function () {
        return off(target, type, listener, useCapture);
    };
}

function off(target, type, listener) {
    var useCapture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    target = toEventTarget(target);
    target && type.split(' ').forEach(function (type) {
        return target.removeEventListener(type, listener, useCapture);
    });
}

function once() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
    }

    var _getArgs3 = getArgs(args),
        _getArgs4 = _slicedToArray(_getArgs3, 6),
        element = _getArgs4[0],
        type = _getArgs4[1],
        selector = _getArgs4[2],
        listener = _getArgs4[3],
        useCapture = _getArgs4[4],
        condition = _getArgs4[5];

    var off = on(element, type, selector, function (e) {
        var result = !condition || condition(e);
        if (result) {
            off();
            listener(e, result);
        }
    }, useCapture);

    return off;
}

function trigger(target, event, detail) {
    return toEventTargets(target).reduce(function (notCanceled, target) {
        return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail));
    }, true);
}

function createEvent(e) {
    var bubbles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var cancelable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var detail = arguments[3];

    if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["w" /* isString */])(e)) {
        var event = document.createEvent('CustomEvent'); // IE 11
        event.initCustomEvent(e, bubbles, cancelable, detail);
        e = event;
    }

    return e;
}

function getArgs(args) {

    if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["w" /* isString */])(args[0])) {
        args[0] = Object(__WEBPACK_IMPORTED_MODULE_1__selector__["c" /* find */])(args[0]);
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["o" /* isFunction */])(args[2])) {
        args.splice(2, 0, false);
    }
    return args;
}

function delegate(element, selector, listener) {
    var _this = this;

    return function (e) {
        var target = e.target;

        var current = selector[0] === '>' ? Object(__WEBPACK_IMPORTED_MODULE_1__selector__["d" /* findAll */])(selector, element).reverse().filter(function (element) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__filter__["f" /* within */])(target, element);
        })[0] : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* closest */])(target, selector);

        if (current) {
            e.delegate = element;
            e.current = current;

            listener.call(_this, e);
        }
    };
}

function detail(listener) {
    return function (e) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__lang__["l" /* isArray */])(e.detail) ? listener.apply(listener, [e].concat(e.detail)) : listener(e);
    };
}

function isEventTarget(target) {
    return 'EventTarget' in window ? target instanceof EventTarget : target && 'addEventListener' in target;
}

function toEventTarget(target) {
    return isEventTarget(target) ? target : Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(target);
}

function toEventTargets(target) {
    return isEventTarget(target) ? [target] : Object(__WEBPACK_IMPORTED_MODULE_2__lang__["l" /* isArray */])(target) ? target.map(toEventTarget).filter(Boolean) : Object(__WEBPACK_IMPORTED_MODULE_2__lang__["J" /* toNodes */])(target);
}

function preventClick() {

    var timer = setTimeout(once(document, 'click', function (e) {

        e.preventDefault();
        e.stopImmediatePropagation();

        clearTimeout(timer);
    }, true));

    trigger(document, 'touchcancel');
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = attr;
/* harmony export (immutable) */ __webpack_exports__["d"] = hasAttr;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeAttr;
/* harmony export (immutable) */ __webpack_exports__["c"] = filterAttr;
/* harmony export (immutable) */ __webpack_exports__["b"] = data;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(1);


function attr(element, name, value) {

    if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["u" /* isObject */])(name)) {
        for (var key in name) {
            attr(element, key, name[key]);
        }
        return;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["x" /* isUndefined */])(value)) {
        element = Object(__WEBPACK_IMPORTED_MODULE_0__lang__["I" /* toNode */])(element);
        return element && element.getAttribute(name);
    } else {
        Object(__WEBPACK_IMPORTED_MODULE_0__lang__["J" /* toNodes */])(element).forEach(function (element) {

            if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["o" /* isFunction */])(value)) {
                value = value.call(element, attr(element, name));
            }

            if (value === null) {
                removeAttr(element, name);
            } else {
                element.setAttribute(name, value);
            }
        });
    }
}

function hasAttr(element, name) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__lang__["J" /* toNodes */])(element).some(function (element) {
        return element.hasAttribute(name);
    });
}

function removeAttr(element, name) {
    element = Object(__WEBPACK_IMPORTED_MODULE_0__lang__["J" /* toNodes */])(element);
    name.split(' ').forEach(function (name) {
        return element.forEach(function (element) {
            return element.removeAttribute(name);
        });
    });
}

function filterAttr(element, attribute, pattern, replacement) {
    attr(element, attribute, function (value) {
        return value ? value.replace(pattern, replacement) : value;
    });
}

function data(element, attribute) {
    for (var i = 0, attrs = [attribute, 'data-' + attribute]; i < attrs.length; i++) {
        if (hasAttr(element, attrs[i])) {
            return attr(element, attrs[i]);
        }
    }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = isVoidElement;
/* harmony export (immutable) */ __webpack_exports__["c"] = isVisible;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return selInput; });
/* harmony export (immutable) */ __webpack_exports__["b"] = isInput;
/* harmony export (immutable) */ __webpack_exports__["a"] = filter;
/* harmony export (immutable) */ __webpack_exports__["f"] = within;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selector__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(1);



var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
function isVoidElement(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).some(function (element) {
        return voidElements[element.tagName.toLowerCase()];
    });
}

function isVisible(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).some(function (element) {
        return element.offsetHeight || element.getBoundingClientRect().height;
    });
}

var selInput = 'input,select,textarea,button';
function isInput(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).some(function (element) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__selector__["e" /* matches */])(element, selInput);
    });
}

function filter(element, selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).filter(function (element) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__selector__["e" /* matches */])(element, selector);
    });
}

function within(element, selector) {
    return !Object(__WEBPACK_IMPORTED_MODULE_1__lang__["w" /* isString */])(selector) ? element === selector || (Object(__WEBPACK_IMPORTED_MODULE_1__lang__["n" /* isDocument */])(selector) ? selector.documentElement : Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(selector)).contains(Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(element)) // IE 11 document does not implement contains
    : Object(__WEBPACK_IMPORTED_MODULE_0__selector__["e" /* matches */])(element, selector) || Object(__WEBPACK_IMPORTED_MODULE_0__selector__["a" /* closest */])(element, selector);
}

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = query;
/* harmony export (immutable) */ __webpack_exports__["h"] = queryAll;
/* harmony export (immutable) */ __webpack_exports__["c"] = find;
/* harmony export (immutable) */ __webpack_exports__["d"] = findAll;
/* harmony export (immutable) */ __webpack_exports__["e"] = matches;
/* harmony export (immutable) */ __webpack_exports__["a"] = closest;
/* harmony export (immutable) */ __webpack_exports__["f"] = parents;
/* harmony export (immutable) */ __webpack_exports__["b"] = escape;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(1);



function query(selector, context) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(selector) || find(selector, isContextSelector(selector) ? context : document);
}

function queryAll(selector, context) {
    var nodes = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(selector);
    return nodes.length && nodes || findAll(selector, isContextSelector(selector) ? context : document);
}

function find(selector, context) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(_query(selector, context, 'querySelector'));
}

function findAll(selector, context) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(_query(selector, context, 'querySelectorAll'));
}

function _query(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    var queryFn = arguments[2];


    if (!selector || !Object(__WEBPACK_IMPORTED_MODULE_1__lang__["w" /* isString */])(selector)) {
        return null;
    }

    selector = selector.replace(contextSanitizeRe, '$1 *');

    var removes = void 0;

    if (isContextSelector(selector)) {

        removes = [];

        selector = selector.split(',').map(function (selector, i) {

            var ctx = context;

            selector = selector.trim();

            if (selector[0] === '!') {

                var selectors = selector.substr(1).trim().split(' ');
                ctx = closest(context.parentNode, selectors[0]);
                selector = selectors.slice(1).join(' ');
            }

            if (!ctx) {
                return null;
            }

            if (!ctx.id) {
                ctx.id = 'uk-' + Date.now() + i;
                removes.push(function () {
                    return Object(__WEBPACK_IMPORTED_MODULE_0__attr__["e" /* removeAttr */])(ctx, 'id');
                });
            }

            return '#' + escape(ctx.id) + ' ' + selector;
        }).filter(Boolean).join(',');

        context = document;
    }

    try {

        return context[queryFn](selector);
    } catch (e) {

        return null;
    } finally {

        removes && removes.forEach(function (remove) {
            return remove();
        });
    }
}

var contextSelectorRe = /(^|,)\s*[!>+~]/;
var contextSanitizeRe = /([!>+~])(?=\s+[!>+~]|\s*$)/g;

function isContextSelector(selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["w" /* isString */])(selector) && selector.match(contextSelectorRe);
}

var elProto = Element.prototype;
var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector;

function matches(element, selector) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).some(function (element) {
        return matchesFn.call(element, selector);
    });
}

var closestFn = elProto.closest || function (selector) {
    var ancestor = this;

    do {

        if (matches(ancestor, selector)) {
            return ancestor;
        }

        ancestor = ancestor.parentNode;
    } while (ancestor && ancestor.nodeType === 1);
};

function closest(element, selector) {

    if (Object(__WEBPACK_IMPORTED_MODULE_1__lang__["C" /* startsWith */])(selector, '>')) {
        selector = selector.slice(1);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["q" /* isNode */])(element) ? element.parentNode && closestFn.call(element, selector) : Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).map(function (element) {
        return element.parentNode && closestFn.call(element, selector);
    }).filter(Boolean);
}

function parents(element, selector) {
    var elements = [];
    var parent = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(element).parentNode;

    while (parent && parent.nodeType === 1) {

        if (matches(parent, selector)) {
            elements.push(parent);
        }

        parent = parent.parentNode;
    }

    return elements;
}

var escapeFn = window.CSS && CSS.escape || function (css) {
    return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) {
        return '\\' + match;
    });
};
function escape(css) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["w" /* isString */])(css) ? escapeFn.call(null, css) : '';
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Promise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Deferred; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(1);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* global setImmediate */


var Promise = 'Promise' in window ? window.Promise : PromiseFn;

var Deferred = function Deferred() {
    var _this = this;

    _classCallCheck(this, Deferred);

    this.promise = new Promise(function (resolve, reject) {
        _this.reject = reject;
        _this.resolve = resolve;
    });
};

/**
 * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
 */

var RESOLVED = 0;
var REJECTED = 1;
var PENDING = 2;

var async = 'setImmediate' in window ? setImmediate : setTimeout;

function PromiseFn(executor) {

    this.state = PENDING;
    this.value = undefined;
    this.deferred = [];

    var promise = this;

    try {
        executor(function (x) {
            promise.resolve(x);
        }, function (r) {
            promise.reject(r);
        });
    } catch (e) {
        promise.reject(e);
    }
}

PromiseFn.reject = function (r) {
    return new PromiseFn(function (resolve, reject) {
        reject(r);
    });
};

PromiseFn.resolve = function (x) {
    return new PromiseFn(function (resolve, reject) {
        resolve(x);
    });
};

PromiseFn.all = function all(iterable) {
    return new PromiseFn(function (resolve, reject) {
        var result = [];
        var count = 0;

        if (iterable.length === 0) {
            resolve(result);
        }

        function resolver(i) {
            return function (x) {
                result[i] = x;
                count += 1;

                if (count === iterable.length) {
                    resolve(result);
                }
            };
        }

        for (var i = 0; i < iterable.length; i += 1) {
            PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
        }
    });
};

PromiseFn.race = function race(iterable) {
    return new PromiseFn(function (resolve, reject) {
        for (var i = 0; i < iterable.length; i += 1) {
            PromiseFn.resolve(iterable[i]).then(resolve, reject);
        }
    });
};

var p = PromiseFn.prototype;

p.resolve = function resolve(x) {
    var promise = this;

    if (promise.state === PENDING) {
        if (x === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        var called = false;

        try {
            var then = x && x.then;

            if (x !== null && Object(__WEBPACK_IMPORTED_MODULE_0__lang__["u" /* isObject */])(x) && Object(__WEBPACK_IMPORTED_MODULE_0__lang__["o" /* isFunction */])(then)) {
                then.call(x, function (x) {
                    if (!called) {
                        promise.resolve(x);
                    }
                    called = true;
                }, function (r) {
                    if (!called) {
                        promise.reject(r);
                    }
                    called = true;
                });
                return;
            }
        } catch (e) {
            if (!called) {
                promise.reject(e);
            }
            return;
        }

        promise.state = RESOLVED;
        promise.value = x;
        promise.notify();
    }
};

p.reject = function reject(reason) {
    var promise = this;

    if (promise.state === PENDING) {
        if (reason === promise) {
            throw new TypeError('Promise settled with itself.');
        }

        promise.state = REJECTED;
        promise.value = reason;
        promise.notify();
    }
};

p.notify = function notify() {
    var _this2 = this;

    async(function () {
        if (_this2.state !== PENDING) {
            while (_this2.deferred.length) {
                var _deferred$shift = _this2.deferred.shift(),
                    _deferred$shift2 = _slicedToArray(_deferred$shift, 4),
                    onResolved = _deferred$shift2[0],
                    onRejected = _deferred$shift2[1],
                    resolve = _deferred$shift2[2],
                    reject = _deferred$shift2[3];

                try {
                    if (_this2.state === RESOLVED) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["o" /* isFunction */])(onResolved)) {
                            resolve(onResolved.call(undefined, _this2.value));
                        } else {
                            resolve(_this2.value);
                        }
                    } else if (_this2.state === REJECTED) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["o" /* isFunction */])(onRejected)) {
                            resolve(onRejected.call(undefined, _this2.value));
                        } else {
                            reject(_this2.value);
                        }
                    }
                } catch (e) {
                    reject(e);
                }
            }
        }
    });
};

p.then = function then(onResolved, onRejected) {
    var _this3 = this;

    return new PromiseFn(function (resolve, reject) {
        _this3.deferred.push([onResolved, onRejected, resolve, reject]);
        _this3.notify();
    });
};

p.catch = function (onRejected) {
    return this.then(undefined, onRejected);
};
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(29).setImmediate))

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["j"] = isReady;
/* harmony export (immutable) */ __webpack_exports__["l"] = ready;
/* harmony export (immutable) */ __webpack_exports__["i"] = index;
/* harmony export (immutable) */ __webpack_exports__["g"] = getIndex;
/* harmony export (immutable) */ __webpack_exports__["e"] = empty;
/* harmony export (immutable) */ __webpack_exports__["h"] = html;
/* harmony export (immutable) */ __webpack_exports__["k"] = prepend;
/* harmony export (immutable) */ __webpack_exports__["b"] = append;
/* harmony export (immutable) */ __webpack_exports__["d"] = before;
/* harmony export (immutable) */ __webpack_exports__["a"] = after;
/* harmony export (immutable) */ __webpack_exports__["m"] = remove;
/* harmony export (immutable) */ __webpack_exports__["o"] = wrapAll;
/* harmony export (immutable) */ __webpack_exports__["p"] = wrapInner;
/* harmony export (immutable) */ __webpack_exports__["n"] = unwrap;
/* harmony export (immutable) */ __webpack_exports__["f"] = fragment;
/* harmony export (immutable) */ __webpack_exports__["c"] = apply;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(1);



function isReady() {
    return document.readyState === 'complete' || document.readyState !== 'loading' && !document.documentElement.doScroll;
}

function ready(fn) {

    if (isReady()) {
        fn();
        return;
    }

    var handle = function handle() {
        unbind1();
        unbind2();
        fn();
    };
    var unbind1 = Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(document, 'DOMContentLoaded', handle);
    var unbind2 = Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(window, 'load', handle);
}

function index(element, ref) {
    return ref ? Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).indexOf(Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(ref)) : Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])((element = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(element)) && element.parentNode.children).indexOf(element);
}

function getIndex(i, elements) {
    var current = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var finite = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


    elements = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(elements);

    var _elements = elements,
        length = _elements.length;


    i = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["t" /* isNumeric */])(i) ? Object(__WEBPACK_IMPORTED_MODULE_1__lang__["K" /* toNumber */])(i) : i === 'next' ? current + 1 : i === 'previous' ? current - 1 : index(elements, i);

    if (finite) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["e" /* clamp */])(i, 0, length - 1);
    }

    i %= length;

    return i < 0 ? i + length : i;
}

function empty(element) {
    element = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(element);
    element.innerHTML = '';
    return element;
}

function html(parent, html) {
    parent = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(parent);
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["x" /* isUndefined */])(html) ? parent.innerHTML : append(parent.hasChildNodes() ? empty(parent) : parent, html);
}

function prepend(parent, element) {

    parent = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(parent);

    if (!parent.hasChildNodes()) {
        return append(parent, element);
    } else {
        return insertNodes(element, function (element) {
            return parent.insertBefore(element, parent.firstChild);
        });
    }
}

function append(parent, element) {
    parent = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(parent);
    return insertNodes(element, function (element) {
        return parent.appendChild(element);
    });
}

function before(ref, element) {
    ref = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(ref);
    return insertNodes(element, function (element) {
        return ref.parentNode.insertBefore(element, ref);
    });
}

function after(ref, element) {
    ref = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(ref);
    return insertNodes(element, function (element) {
        return ref.nextSibling ? before(ref.nextSibling, element) : append(ref.parentNode, element);
    });
}

function insertNodes(element, fn) {
    element = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["w" /* isString */])(element) ? fragment(element) : element;
    return element ? 'length' in element ? Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).map(fn) : fn(element) : null;
}

function remove(element) {
    Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).map(function (element) {
        return element.parentNode && element.parentNode.removeChild(element);
    });
}

function wrapAll(element, structure) {

    structure = Object(__WEBPACK_IMPORTED_MODULE_1__lang__["I" /* toNode */])(before(element, structure));

    while (structure.firstChild) {
        structure = structure.firstChild;
    }

    append(structure, element);

    return structure;
}

function wrapInner(element, structure) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).map(function (element) {
        return element.hasChildNodes ? wrapAll(Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element.childNodes), structure) : append(element, structure);
    }));
}

function unwrap(element) {
    Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).map(function (element) {
        return element.parentNode;
    }).filter(function (value, index, self) {
        return self.indexOf(value) === index;
    }).forEach(function (parent) {
        before(parent, parent.childNodes);
        remove(parent);
    });
}

var fragmentRE = /^\s*<(\w+|!)[^>]*>/;
var singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

function fragment(html) {

    var matches = singleTagRE.exec(html);
    if (matches) {
        return document.createElement(matches[1]);
    }

    var container = document.createElement('div');
    if (fragmentRE.test(html)) {
        container.insertAdjacentHTML('beforeend', html.trim());
    } else {
        container.textContent = html;
    }

    return container.childNodes.length > 1 ? Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(container.childNodes) : container.firstChild;
}

function apply(node, fn) {

    if (!node || node.nodeType !== 1) {
        return;
    }

    fn(node);
    node = node.firstElementChild;
    while (node) {
        apply(node, fn);
        node = node.nextElementSibling;
    }
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _translate; });
/* harmony export (immutable) */ __webpack_exports__["b"] = scale3d;

/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var css = UIkit.util.css;


    var Animations = {

        slide: {
            show: function show(dir) {
                return [{ transform: _translate(dir * -100) }, { transform: _translate() }];
            },
            percent: function percent(current) {
                return Animations.translated(current);
            },
            translate: function translate(percent, dir) {
                return [{ transform: _translate(dir * -100 * percent) }, { transform: _translate(dir * 100 * (1 - percent)) }];
            }
        },

        translated: function translated(el) {
            return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
        }
    };

    return Animations;
});

function _translate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '%';

    return 'translateX(' + value + (value ? unit : '') + ')'; // currently not translate3d to support IE, translate3d within translate3d does not work while transitioning
}

function scale3d(value) {
    return 'scale3d(' + value + ', ' + value + ', 1)';
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = css;
/* harmony export (immutable) */ __webpack_exports__["d"] = getStyles;
/* harmony export (immutable) */ __webpack_exports__["c"] = getStyle;
/* harmony export (immutable) */ __webpack_exports__["b"] = getCssVar;
/* harmony export (immutable) */ __webpack_exports__["e"] = propName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang__ = __webpack_require__(1);




var cssNumber = {
    'animation-iteration-count': true,
    'column-count': true,
    'fill-opacity': true,
    'flex-grow': true,
    'flex-shrink': true,
    'font-weight': true,
    'line-height': true,
    'opacity': true,
    'order': true,
    'orphans': true,
    'widows': true,
    'z-index': true,
    'zoom': true
};

function css(element, property, value) {

    return Object(__WEBPACK_IMPORTED_MODULE_2__lang__["J" /* toNodes */])(element).map(function (element) {

        if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["w" /* isString */])(property)) {

            property = propName(property);

            if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["x" /* isUndefined */])(value)) {
                return getStyle(element, property);
            } else if (!value && value !== 0) {
                element.style.removeProperty(property);
            } else {
                element.style[property] = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["t" /* isNumeric */])(value) && !cssNumber[property] ? value + 'px' : value;
            }
        } else if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["l" /* isArray */])(property)) {

            var styles = getStyles(element);

            return property.reduce(function (props, property) {
                props[property] = styles[propName(property)];
                return props;
            }, {});
        } else if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["u" /* isObject */])(property)) {
            Object(__WEBPACK_IMPORTED_MODULE_2__lang__["f" /* each */])(property, function (value, property) {
                return css(element, property, value);
            });
        }

        return element;
    })[0];
}

function getStyles(element, pseudoElt) {
    element = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element);
    return element.ownerDocument.defaultView.getComputedStyle(element, pseudoElt);
}

function getStyle(element, property, pseudoElt) {
    return getStyles(element, pseudoElt)[property];
}

var vars = {};

function getCssVar(name) {

    if (!(name in vars)) {

        /* usage in css: .var-name:before { content:"xyz" } */

        var element = Object(__WEBPACK_IMPORTED_MODULE_0__dom__["b" /* append */])(document.documentElement, document.createElement('div'));

        Object(__WEBPACK_IMPORTED_MODULE_1__class__["a" /* addClass */])(element, 'var-' + name);

        try {

            vars[name] = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');
            vars[name] = JSON.parse(vars[name]);
        } catch (e) {}

        document.documentElement.removeChild(element);
    }

    return vars[name];
}

var cssProps = {};

function propName(name) {

    var ret = cssProps[name];
    if (!ret) {
        ret = cssProps[name] = vendorPropName(name) || name;
    }
    return ret;
}

var cssPrefixes = ['webkit', 'moz', 'ms'];

var _document$createEleme = document.createElement('_'),
    style = _document$createEleme.style;

function vendorPropName(name) {

    name = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["i" /* hyphenate */])(name);

    if (name in style) {
        return name;
    }

    var i = cssPrefixes.length,
        prefixedName = void 0;

    while (i--) {
        prefixedName = '-' + cssPrefixes[i] + '-' + name;
        if (prefixedName in style) {
            return prefixedName;
        }
    }
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeClasses;
/* harmony export (immutable) */ __webpack_exports__["e"] = replaceClass;
/* harmony export (immutable) */ __webpack_exports__["b"] = hasClass;
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lang__ = __webpack_require__(1);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }




function addClass(element) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    apply(element, args, 'add');
}

function removeClass(element) {
    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
    }

    apply(element, args, 'remove');
}

function removeClasses(element, cls) {
    Object(__WEBPACK_IMPORTED_MODULE_0__attr__["c" /* filterAttr */])(element, 'class', new RegExp('(^|\\s)' + cls + '(?!\\S)', 'g'), '');
}

function replaceClass(element) {
    (arguments.length <= 1 ? undefined : arguments[1]) && removeClass(element, arguments.length <= 1 ? undefined : arguments[1]);
    (arguments.length <= 2 ? undefined : arguments[2]) && addClass(element, arguments.length <= 2 ? undefined : arguments[2]);
}

function hasClass(element, cls) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).some(function (element) {
        return element.classList.contains(cls);
    });
}

function toggleClass(element) {
    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
    }

    if (!args.length) {
        return;
    }

    args = getArgs(args);

    var force = !Object(__WEBPACK_IMPORTED_MODULE_1__lang__["w" /* isString */])(args[args.length - 1]) ? args.pop() : []; // in iOS 9.3 force === undefined evaluates to false

    args = args.filter(Boolean);

    Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).forEach(function (_ref) {
        var classList = _ref.classList;

        for (var i = 0; i < args.length; i++) {
            supports.Force ? classList.toggle.apply(classList, _toConsumableArray([args[i]].concat(force))) : classList[(!Object(__WEBPACK_IMPORTED_MODULE_1__lang__["x" /* isUndefined */])(force) ? force : !classList.contains(args[i])) ? 'add' : 'remove'](args[i]);
        }
    });
}

function apply(element, args, fn) {
    args = getArgs(args).filter(Boolean);

    args.length && Object(__WEBPACK_IMPORTED_MODULE_1__lang__["J" /* toNodes */])(element).forEach(function (_ref2) {
        var classList = _ref2.classList;

        supports.Multiple ? classList[fn].apply(classList, args) : args.forEach(function (cls) {
            return classList[fn](cls);
        });
    });
}

function getArgs(args) {
    return args.reduce(function (args, arg) {
        return args.concat.call(args, Object(__WEBPACK_IMPORTED_MODULE_1__lang__["w" /* isString */])(arg) && Object(__WEBPACK_IMPORTED_MODULE_1__lang__["j" /* includes */])(arg, ' ') ? arg.trim().split(' ') : arg);
    }, []);
}

var supports = {};

// IE 11
(function () {

    var list = document.createElement('_').classList;
    if (list) {
        list.add('a', 'b');
        list.toggle('c', false);
        supports.Multiple = list.contains('b');
        supports.Force = !list.contains('c');
    }
    list = null;
})();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hooks__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instance__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_index__ = __webpack_require__(0);







var UIkit = function UIkit(options) {
    this._init(options);
};

UIkit.util = __WEBPACK_IMPORTED_MODULE_5__util_index__;
UIkit.data = '__uikit__';
UIkit.prefix = 'uk-';
UIkit.options = {};

Object(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])(UIkit);
Object(__WEBPACK_IMPORTED_MODULE_1__hooks__["a" /* default */])(UIkit);
Object(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */])(UIkit);
Object(__WEBPACK_IMPORTED_MODULE_3__instance__["a" /* default */])(UIkit);
Object(__WEBPACK_IMPORTED_MODULE_4__component__["a" /* default */])(UIkit);

/* harmony default export */ __webpack_exports__["a"] = (UIkit);

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var connect = UIkit.connect,
        disconnect = UIkit.disconnect;


    if (!('MutationObserver' in window)) {
        return;
    }

    if (document.body) {

        init();
    } else {

        new MutationObserver(function () {

            if (document.body) {
                this.disconnect();
                init();
            }
        }).observe(document, { childList: true, subtree: true });
    }

    function init() {

        apply(document.body, connect);

        __WEBPACK_IMPORTED_MODULE_1__util_index__["fastdom"].flush();

        new MutationObserver(function (mutations) {
            return mutations.forEach(applyMutation);
        }).observe(document, {
            childList: true,
            subtree: true,
            characterData: true,
            attributes: true
        });

        UIkit._initialized = true;
    }

    function applyMutation(mutation) {
        var target = mutation.target,
            type = mutation.type;


        var update = type !== 'attributes' ? applyChildList(mutation) : applyAttribute(mutation);

        update && UIkit.update('update', target, true);
    }

    function applyAttribute(_ref) {
        var target = _ref.target,
            attributeName = _ref.attributeName;


        if (attributeName === 'href') {
            return true;
        }

        var name = Object(__WEBPACK_IMPORTED_MODULE_0__component__["b" /* getComponentName */])(attributeName);

        if (!name || !(name in UIkit.components)) {
            return;
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasAttr"])(target, attributeName)) {
            UIkit[name](target);
            return true;
        }

        var component = UIkit.getComponent(target, name);

        if (component) {
            component.$destroy();
            return true;
        }
    }

    function applyChildList(_ref2) {
        var addedNodes = _ref2.addedNodes,
            removedNodes = _ref2.removedNodes;


        for (var i = 0; i < addedNodes.length; i++) {
            apply(addedNodes[i], connect);
        }

        for (var _i = 0; _i < removedNodes.length; _i++) {
            apply(removedNodes[_i], disconnect);
        }

        return true;
    }

    function apply(node, fn) {

        if (node.nodeType !== 1 || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasAttr"])(node, 'uk-no-boot')) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            var next = node.nextElementSibling;
            apply(node, fn);
            node = next;
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getComponentName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var DATA = UIkit.data;

    UIkit.components = {};

    UIkit.component = function (id, options) {

        var name = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(id);

        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(options)) {
            options.name = name;
            options = UIkit.extend(options);
        } else if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(options)) {
            return UIkit.components[name];
        } else {
            options.options.name = name;
        }

        UIkit.components[name] = options;

        UIkit[name] = function (element, data) {

            if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(element)) {
                return new UIkit.components[name]({ data: element });
            }

            if (UIkit.components[name].options.functional) {
                return new UIkit.components[name]({ data: [].concat(Array.prototype.slice.call(arguments)) });
            }

            return element && element.nodeType ? init(element) : Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])(element).map(init)[0];

            function init(element) {

                var cmp = UIkit.getComponent(element, name);

                if (cmp && data) {
                    cmp.$reset(data);
                }

                return cmp || new UIkit.components[name]({ el: element, data: data || {} });
            }
        };

        if (UIkit._initialized && !options.options.functional) {
            __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].read(function () {
                return UIkit[name]('[uk-' + id + '],[data-uk-' + id + ']');
            });
        }

        return UIkit.components[name];
    };

    UIkit.getComponents = function (element) {
        return element && element[DATA] || {};
    };
    UIkit.getComponent = function (element, name) {
        return UIkit.getComponents(element)[name];
    };

    UIkit.connect = function (node) {

        if (node[DATA]) {
            for (var name in node[DATA]) {
                node[DATA][name]._callConnected();
            }
        }

        for (var i = 0; i < node.attributes.length; i++) {

            var _name = getComponentName(node.attributes[i].name);

            if (_name && _name in UIkit.components) {
                UIkit[_name](node);
            }
        }
    };

    UIkit.disconnect = function (node) {
        for (var name in node[DATA]) {
            node[DATA][name]._callDisconnected();
        }
    };
});

function getComponentName(attribute) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(attribute, 'uk-') || Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(attribute, 'data-uk-') ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(attribute.replace('data-uk-', '').replace('uk-', '')) : false;
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["f"] = positionAt;
/* harmony export (immutable) */ __webpack_exports__["d"] = offset;
/* harmony export (immutable) */ __webpack_exports__["e"] = position;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return height; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return width; });
/* harmony export (immutable) */ __webpack_exports__["a"] = flipPosition;
/* harmony export (immutable) */ __webpack_exports__["c"] = isInView;
/* harmony export (immutable) */ __webpack_exports__["g"] = scrolledOver;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang__ = __webpack_require__(1);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();





var dirs = {
    width: ['x', 'left', 'right'],
    height: ['y', 'top', 'bottom']
};

function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

    elAttach = getPos(elAttach);
    targetAttach = getPos(targetAttach);

    var flipped = { element: elAttach, target: targetAttach };

    if (!element || !target) {
        return flipped;
    }

    var dim = getDimensions(element);
    var targetDim = getDimensions(target);
    var position = targetDim;

    moveTo(position, elAttach, dim, -1);
    moveTo(position, targetAttach, targetDim, 1);

    elOffset = getOffsets(elOffset, dim.width, dim.height);
    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

    elOffset['x'] += targetOffset['x'];
    elOffset['y'] += targetOffset['y'];

    position.left += elOffset['x'];
    position.top += elOffset['y'];

    boundary = getDimensions(boundary || window(element));

    if (flip) {
        Object(__WEBPACK_IMPORTED_MODULE_2__lang__["f" /* each */])(dirs, function (_ref, prop) {
            var _ref2 = _slicedToArray(_ref, 3),
                dir = _ref2[0],
                align = _ref2[1],
                alignFlip = _ref2[2];

            if (!(flip === true || Object(__WEBPACK_IMPORTED_MODULE_2__lang__["j" /* includes */])(flip, dir))) {
                return;
            }

            var elemOffset = elAttach[dir] === align ? -dim[prop] : elAttach[dir] === alignFlip ? dim[prop] : 0;

            var targetOffset = targetAttach[dir] === align ? targetDim[prop] : targetAttach[dir] === alignFlip ? -targetDim[prop] : 0;

            if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                var centerOffset = dim[prop] / 2;
                var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                elAttach[dir] === 'center' && (apply(centerOffset, centerTargetOffset) || apply(-centerOffset, -centerTargetOffset)) || apply(elemOffset, targetOffset);
            }

            function apply(elemOffset, targetOffset) {

                var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;

                if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                    position[align] = newVal;

                    ['element', 'target'].forEach(function (el) {
                        flipped[el][dir] = !elemOffset ? flipped[el][dir] : flipped[el][dir] === dirs[prop][1] ? dirs[prop][2] : dirs[prop][1];
                    });

                    return true;
                }
            }
        });
    }

    offset(element, position);

    return flipped;
}

function offset(element, coordinates) {

    element = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element);

    if (coordinates) {

        var currentOffset = offset(element);
        var pos = Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, 'position');

        ['left', 'top'].forEach(function (prop) {
            if (prop in coordinates) {
                var value = Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, prop);
                element.style[prop] = coordinates[prop] - currentOffset[prop] + Object(__WEBPACK_IMPORTED_MODULE_2__lang__["F" /* toFloat */])(pos === 'absolute' && value === 'auto' ? position(element)[prop] : value) + 'px';
            }
        });

        return;
    }

    return getDimensions(element);
}

function getDimensions(element) {

    element = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element);

    var _window = window(element),
        top = _window.pageYOffset,
        left = _window.pageXOffset;

    if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["y" /* isWindow */])(element)) {

        var _height = element.innerHeight;
        var _width = element.innerWidth;

        return {
            top: top,
            left: left,
            height: _height,
            width: _width,
            bottom: top + _height,
            right: left + _width
        };
    }

    var display = false;
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__filter__["c" /* isVisible */])(element)) {
        display = element.style.display;
        element.style.display = 'block';
    }

    var rect = element.getBoundingClientRect();

    if (display !== false) {
        element.style.display = display;
    }

    return {
        height: rect.height,
        width: rect.width,
        top: rect.top + top,
        left: rect.left + left,
        bottom: rect.bottom + top,
        right: rect.right + left
    };
}

function position(element) {
    element = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element);

    var parent = offsetParent(element);
    var parentOffset = parent === docEl(element) ? { top: 0, left: 0 } : offset(parent);

    var _reduce = ['top', 'left'].reduce(function (props, prop) {
        var propName = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["L" /* ucfirst */])(prop);
        props[prop] -= parentOffset[prop] + (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["F" /* toFloat */])(Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, 'margin' + propName)) || 0) + (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["F" /* toFloat */])(Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(parent, 'border' + propName + 'Width')) || 0);
        return props;
    }, offset(element)),
        top = _reduce.top,
        left = _reduce.left;

    return { top: top, left: left };
}

function offsetParent(element) {

    var parent = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element).offsetParent;

    while (parent && Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(parent, 'position') === 'static') {
        parent = parent.offsetParent;
    }

    return parent || docEl(element);
}

var height = dimension('height');
var width = dimension('width');

function dimension(prop) {
    var propName = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["L" /* ucfirst */])(prop);
    return function (element, value) {

        element = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element);

        if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["x" /* isUndefined */])(value)) {

            if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["y" /* isWindow */])(element)) {
                return element['inner' + propName];
            }

            if (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["n" /* isDocument */])(element)) {
                var doc = element.documentElement;
                return Math.max(doc['offset' + propName], doc['scroll' + propName]);
            }

            value = Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, prop);
            value = value === 'auto' ? element['offset' + propName] : Object(__WEBPACK_IMPORTED_MODULE_2__lang__["F" /* toFloat */])(value) || 0;

            return value - boxModelAdjust(prop, element);
        } else {

            Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, prop, !value && value !== 0 ? '' : value + boxModelAdjust(prop, element) + 'px');
        }
    };
}

function boxModelAdjust(prop, element) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, 'boxSizing') === 'border-box' ? dirs[prop].slice(1).map(__WEBPACK_IMPORTED_MODULE_2__lang__["L" /* ucfirst */]).reduce(function (value, prop) {
        return value + Object(__WEBPACK_IMPORTED_MODULE_2__lang__["F" /* toFloat */])(Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, 'padding' + prop)) + Object(__WEBPACK_IMPORTED_MODULE_2__lang__["F" /* toFloat */])(Object(__WEBPACK_IMPORTED_MODULE_0__style__["a" /* css */])(element, 'border' + prop + 'Width'));
    }, 0) : 0;
}

function moveTo(position, attach, dim, factor) {
    Object(__WEBPACK_IMPORTED_MODULE_2__lang__["f" /* each */])(dirs, function (_ref3, prop) {
        var _ref4 = _slicedToArray(_ref3, 3),
            dir = _ref4[0],
            align = _ref4[1],
            alignFlip = _ref4[2];

        if (attach[dir] === alignFlip) {
            position[align] += dim[prop] * factor;
        } else if (attach[dir] === 'center') {
            position[align] += dim[prop] * factor / 2;
        }
    });
}

function getPos(pos) {

    var x = /left|center|right/;
    var y = /top|center|bottom/;

    pos = (pos || '').split(' ');

    if (pos.length === 1) {
        pos = x.test(pos[0]) ? pos.concat(['center']) : y.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
    }

    return {
        x: x.test(pos[0]) ? pos[0] : 'center',
        y: y.test(pos[1]) ? pos[1] : 'center'
    };
}

function getOffsets(offsets, width, height) {
    var _split = (offsets || '').split(' '),
        _split2 = _slicedToArray(_split, 2),
        x = _split2[0],
        y = _split2[1];

    return {
        x: x ? Object(__WEBPACK_IMPORTED_MODULE_2__lang__["F" /* toFloat */])(x) * (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["g" /* endsWith */])(x, '%') ? width / 100 : 1) : 0,
        y: y ? Object(__WEBPACK_IMPORTED_MODULE_2__lang__["F" /* toFloat */])(y) * (Object(__WEBPACK_IMPORTED_MODULE_2__lang__["g" /* endsWith */])(y, '%') ? height / 100 : 1) : 0
    };
}

function flipPosition(pos) {
    switch (pos) {
        case 'left':
            return 'right';
        case 'right':
            return 'left';
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        default:
            return pos;
    }
}

function isInView(element) {
    var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var left = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;


    element = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element);

    var win = window(element);
    return Object(__WEBPACK_IMPORTED_MODULE_1__filter__["c" /* isVisible */])(element) && Object(__WEBPACK_IMPORTED_MODULE_2__lang__["k" /* intersectRect */])(element.getBoundingClientRect(), {
        top: top,
        left: left,
        bottom: top + height(win),
        right: left + width(win)
    });
}

function scrolledOver(element) {

    if (!Object(__WEBPACK_IMPORTED_MODULE_1__filter__["c" /* isVisible */])(element)) {
        return 0;
    }

    element = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element);

    var win = window(element);
    var doc = document(element);
    var elHeight = element.offsetHeight;
    var top = positionTop(element);
    var vp = height(win);
    var vh = vp + Math.min(0, top - vp);
    var diff = Math.max(0, vp - (height(doc) - (top + elHeight)));

    return Object(__WEBPACK_IMPORTED_MODULE_2__lang__["e" /* clamp */])((vh + win.pageYOffset - top) / ((vh + (elHeight - (diff < vp ? diff : 0))) / 100) / 100);
}

function positionTop(element) {
    var top = 0;

    do {

        top += element.offsetTop;
    } while (element = element.offsetParent);

    return top;
}

function window(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__lang__["y" /* isWindow */])(element) ? element : document(element).defaultView;
}

function document(element) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(element).ownerDocument;
}

function docEl(element) {
    return document(element).documentElement;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isRtl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hasTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pointerDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return pointerMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return pointerUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pointerEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return pointerLeave; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attr__ = __webpack_require__(4);
/* global DocumentTouch */


var isRtl = Object(__WEBPACK_IMPORTED_MODULE_0__attr__["a" /* attr */])(document.documentElement, 'dir') === 'rtl';

var hasTouchEvents = 'ontouchstart' in window;
var hasPointerEvents = window.PointerEvent;
var hasTouch = hasTouchEvents || window.DocumentTouch && document instanceof DocumentTouch || navigator.maxTouchPoints; // IE >=11

var pointerDown = !hasTouch ? 'mousedown' : 'mousedown ' + (hasTouchEvents ? 'touchstart' : 'pointerdown');
var pointerMove = !hasTouch ? 'mousemove' : 'mousemove ' + (hasTouchEvents ? 'touchmove' : 'pointermove');
var pointerUp = !hasTouch ? 'mouseup' : 'mouseup ' + (hasTouchEvents ? 'touchend' : 'pointerup');
var pointerEnter = hasTouch && hasPointerEvents ? 'pointerenter' : 'mouseenter';
var pointerLeave = hasTouch && hasPointerEvents ? 'pointerleave' : 'mouseleave';

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({
    init: function init() {
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(this.$el, this.$name);
    }
});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        container: Boolean
    },

    defaults: {
        container: true
    },

    computed: {
        container: function container(_ref) {
            var container = _ref.container;

            return container === true && __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].container || container && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(container);
        }
    }

});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        cls: Boolean,
        animation: 'list',
        duration: Number,
        origin: String,
        transition: String,
        queued: Boolean
    },

    defaults: {
        cls: false,
        animation: [false],
        duration: 200,
        origin: false,
        transition: 'linear',
        queued: false,

        initProps: {
            overflow: '',
            height: '',
            paddingTop: '',
            paddingBottom: '',
            marginTop: '',
            marginBottom: ''
        },

        hideProps: {
            overflow: 'hidden',
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0
        }

    },

    computed: {
        hasAnimation: function hasAnimation(_ref) {
            var animation = _ref.animation;

            return !!animation[0];
        },
        hasTransition: function hasTransition(_ref2) {
            var animation = _ref2.animation;

            return this.hasAnimation && animation[0] === true;
        }
    },

    methods: {
        toggleElement: function toggleElement(targets, show, animate) {
            var _this = this;

            return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](function (resolve) {

                targets = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toNodes"])(targets);

                var all = function all(targets) {
                    return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].all(targets.map(function (el) {
                        return _this._toggleElement(el, show, animate);
                    }));
                };
                var toggled = targets.filter(function (el) {
                    return _this.isToggled(el);
                });
                var untoggled = targets.filter(function (el) {
                    return !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(toggled, el);
                });

                var p = void 0;

                if (!_this.queued || !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isUndefined"])(animate) || !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isUndefined"])(show) || !_this.hasAnimation || targets.length < 2) {

                    p = all(untoggled.concat(toggled));
                } else {
                    var _document = document,
                        body = _document.body;

                    var scroll = body.scrollTop;

                    var _toggled = _slicedToArray(toggled, 1),
                        el = _toggled[0];

                    var inProgress = __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].inProgress(el) && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(el, 'uk-animation-leave') || __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].inProgress(el) && el.style.height === '0px';

                    p = all(toggled);

                    if (!inProgress) {
                        p = p.then(function () {
                            var p = all(untoggled);
                            body.scrollTop = scroll;
                            return p;
                        });
                    }
                }

                p.then(resolve, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
            });
        },
        toggleNow: function toggleNow(targets, show) {
            var _this2 = this;

            return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](function (resolve) {
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].all(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toNodes"])(targets).map(function (el) {
                    return _this2._toggleElement(el, show, false);
                })).then(resolve, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
            });
        },
        isToggled: function isToggled(el) {
            var nodes = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toNodes"])(el || this.$el);
            return this.cls ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(nodes, this.cls.split(' ')[0]) : !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasAttr"])(nodes, 'hidden');
        },
        updateAria: function updateAria(el) {
            if (this.cls === false) {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(el, 'aria-hidden', !this.isToggled(el));
            }
        },
        _toggleElement: function _toggleElement(el, show, animate) {
            var _this3 = this;

            show = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isBoolean"])(show) ? show : __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].inProgress(el) ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(el, 'uk-animation-leave') : __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].inProgress(el) ? el.style.height === '0px' : !this.isToggled(el);

            if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(el, 'before' + (show ? 'show' : 'hide'), [this])) {
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].reject();
            }

            var promise = (animate === false || !this.hasAnimation ? this._toggleImmediate : this.hasTransition ? this._toggleHeight : this._toggleAnimation)(el, show);

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(el, show ? 'show' : 'hide', [this]);

            return promise.then(function () {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(el, show ? 'shown' : 'hidden', [_this3]);
                __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].update(null, el);
            });
        },
        _toggle: function _toggle(el, toggled) {

            if (!el) {
                return;
            }

            if (this.cls) {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(el, this.cls, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(this.cls, ' ') ? undefined : toggled);
            } else {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(el, 'hidden', !toggled ? '' : null);
            }

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])('[autofocus]', el).some(function (el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(el) && (el.focus() || true);
            });

            this.updateAria(el);
            __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].update(null, el);
        },
        _toggleImmediate: function _toggleImmediate(el, show) {
            this._toggle(el, show);
            return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].resolve();
        },
        _toggleHeight: function _toggleHeight(el, show) {
            var _this4 = this;

            var inProgress = __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].inProgress(el);
            var inner = el.hasChildNodes ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el.firstElementChild, 'marginTop')) + Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el.lastElementChild, 'marginBottom')) : 0;
            var currentHeight = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(el) ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(el) + (inProgress ? 0 : inner) : 0;

            __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].cancel(el);

            if (!this.isToggled(el)) {
                this._toggle(el, true);
            }

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(el, '');

            // Update child components first
            __WEBPACK_IMPORTED_MODULE_1__util_index__["fastdom"].flush();

            var endHeight = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(el) + (inProgress ? 0 : inner);
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(el, currentHeight);

            return (show ? __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].start(el, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({}, this.initProps, { overflow: 'hidden', height: endHeight }), Math.round(this.duration * (1 - currentHeight / endHeight)), this.transition) : __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].start(el, this.hideProps, Math.round(this.duration * (currentHeight / endHeight)), this.transition).then(function () {
                return _this4._toggle(el, false);
            })).then(function () {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el, _this4.initProps);
            });
        },
        _toggleAnimation: function _toggleAnimation(el, show) {
            var _this5 = this;

            __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(el);

            if (show) {
                this._toggle(el, true);
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].in(el, this.animation[0], this.duration, this.origin);
            }

            return __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].out(el, this.animation[1] || this.animation[0], this.duration, this.origin).then(function () {
                return _this5._toggle(el, false);
            });
        }
    }

});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_slideshow_animations__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_slideshow_transitioner__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slider_js__ = __webpack_require__(22);




function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_2__slider_js__["a" /* default */]);

    var mixin = UIkit.mixin,
        _UIkit$util = UIkit.util,
        addClass = _UIkit$util.addClass,
        assign = _UIkit$util.assign,
        fastdom = _UIkit$util.fastdom,
        isNumber = _UIkit$util.isNumber,
        removeClass = _UIkit$util.removeClass;


    var Animations = Object(__WEBPACK_IMPORTED_MODULE_0__internal_slideshow_animations__["a" /* default */])(UIkit);
    var Transitioner = Object(__WEBPACK_IMPORTED_MODULE_1__internal_slideshow_transitioner__["a" /* default */])(UIkit);

    UIkit.mixin.slideshow = {

        mixins: [mixin.slider],

        props: {
            animation: String
        },

        defaults: {
            animation: 'slide',
            clsActivated: 'uk-transition-active',
            Animations: Animations,
            Transitioner: Transitioner
        },

        computed: {
            animation: function animation(_ref) {
                var animation = _ref.animation,
                    Animations = _ref.Animations;

                return assign(animation in Animations ? Animations[animation] : Animations.slide, { name: animation });
            },
            transitionOptions: function transitionOptions() {
                return { animation: this.animation };
            }
        },

        events: {
            'itemshow itemhide itemshown itemhidden': function itemshowItemhideItemshownItemhidden(_ref2) {
                var target = _ref2.target;

                UIkit.update(null, target);
            },
            itemshow: function itemshow() {
                isNumber(this.prevIndex) && fastdom.flush(); // iOS 10+ will honor the video.play only if called from a gesture handler
            },
            beforeitemshow: function beforeitemshow(_ref3) {
                var target = _ref3.target;

                addClass(target, this.clsActive);
            },
            itemshown: function itemshown(_ref4) {
                var target = _ref4.target;

                addClass(target, this.clsActivated);
            },
            itemhidden: function itemhidden(_ref5) {
                var target = _ref5.target;

                removeClass(target, this.clsActive, this.clsActivated);
            }
        }

    };
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = speedUp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_slider_autoplay__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_slider_drag__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_slider_nav__ = __webpack_require__(98);




function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var _UIkit$util = UIkit.util,
        $ = _UIkit$util.$,
        assign = _UIkit$util.assign,
        clamp = _UIkit$util.clamp,
        fastdom = _UIkit$util.fastdom,
        _getIndex = _UIkit$util.getIndex,
        hasClass = _UIkit$util.hasClass,
        isNumber = _UIkit$util.isNumber,
        isRtl = _UIkit$util.isRtl,
        Promise = _UIkit$util.Promise,
        toNodes = _UIkit$util.toNodes,
        trigger = _UIkit$util.trigger;


    UIkit.mixin.slider = {

        attrs: true,

        mixins: [Object(__WEBPACK_IMPORTED_MODULE_0__internal_slider_autoplay__["a" /* default */])(UIkit), Object(__WEBPACK_IMPORTED_MODULE_1__internal_slider_drag__["a" /* default */])(UIkit), Object(__WEBPACK_IMPORTED_MODULE_2__internal_slider_nav__["a" /* default */])(UIkit)],

        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number
        },

        defaults: {
            easing: 'ease',
            finite: false,
            velocity: 1,
            index: 0,
            stack: [],
            percent: 0,
            clsActive: 'uk-active',
            clsActivated: false,
            Transitioner: false,
            transitionOptions: {}
        },

        computed: {
            duration: function duration(_ref, $el) {
                var velocity = _ref.velocity;

                return speedUp($el.offsetWidth / velocity);
            },
            length: function length() {
                return this.slides.length;
            },
            list: function list(_ref2, $el) {
                var selList = _ref2.selList;

                return $(selList, $el);
            },
            maxIndex: function maxIndex() {
                return this.length - 1;
            },
            slidesSelector: function slidesSelector(_ref3) {
                var selList = _ref3.selList;

                return selList + ' > *';
            },
            slides: function slides() {
                return toNodes(this.list.children);
            }
        },

        methods: {
            show: function show(index) {
                var _this = this;

                var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


                if (this.dragging || !this.length) {
                    return;
                }

                var stack = this.stack;

                var queueIndex = force ? 0 : stack.length;
                var reset = function reset() {
                    stack.splice(queueIndex, 1);

                    if (stack.length) {
                        _this.show(stack.shift(), true);
                    }
                };

                stack[force ? 'unshift' : 'push'](index);

                if (!force && stack.length > 1) {

                    if (stack.length === 2) {
                        this._transitioner.forward(Math.min(this.duration, 200));
                    }

                    return;
                }

                var prevIndex = this.index;
                var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
                var nextIndex = this.getIndex(index, this.index);
                var next = this.slides[nextIndex];

                if (prev === next) {
                    reset();
                    return;
                }

                this.dir = getDirection(index, prevIndex);
                this.prevIndex = prevIndex;
                this.index = nextIndex;

                prev && trigger(prev, 'beforeitemhide', [this]);
                if (!trigger(next, 'beforeitemshow', [this, prev])) {
                    this.index = this.prevIndex;
                    reset();
                    return;
                }

                var promise = this._show(prev, next, force).then(function () {

                    prev && trigger(prev, 'itemhidden', [_this]);
                    trigger(next, 'itemshown', [_this]);

                    return new Promise(function (resolve) {
                        fastdom.write(function () {
                            stack.shift();
                            if (stack.length) {
                                _this.show(stack.shift(), true);
                            } else {
                                _this._transitioner = null;
                            }
                            resolve();
                        });
                    });
                });

                prev && trigger(prev, 'itemhide', [this]);
                trigger(next, 'itemshow', [this]);

                return promise;
            },
            getIndex: function getIndex() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
                var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.index;

                return clamp(_getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
            },
            getValidIndex: function getValidIndex() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
                var prevIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.prevIndex;

                return this.getIndex(index, prevIndex);
            },
            _show: function _show(prev, next, force) {

                this._transitioner = this._getTransitioner(prev, next, this.dir, assign({
                    easing: force ? next.offsetWidth < 600 ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */
                    : 'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */
                    : this.easing
                }, this.transitionOptions));

                if (!force && !prev) {
                    this._transitioner.translate(1);
                    return Promise.resolve();
                }

                var length = this.stack.length;

                return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);
            },
            _getDistance: function _getDistance(prev, next) {
                return new this._getTransitioner(prev, prev !== next && next).getDistance();
            },
            _translate: function _translate(percent) {
                var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.prevIndex;
                var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.index;

                var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
                transitioner.translate(percent);
                return transitioner;
            },
            _getTransitioner: function _getTransitioner() {
                var prev = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.prevIndex;
                var next = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.index;
                var dir = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.dir || 1;
                var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.transitionOptions;

                return new this.Transitioner(isNumber(prev) ? this.slides[prev] : prev, isNumber(next) ? this.slides[next] : next, dir * (isRtl ? -1 : 1), options);
            }
        }

    };

    function getDirection(index, prevIndex) {
        return index === 'next' ? 1 : index === 'previous' ? -1 : index < prevIndex ? -1 : 1;
    }
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

function speedUp(x) {
    return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var mixin = UIkit.mixin,
        util = UIkit.util;
    var css = util.css,
        Dimensions = util.Dimensions,
        each = util.each,
        getImage = util.getImage,
        includes = util.includes,
        isNumber = util.isNumber,
        isUndefined = util.isUndefined,
        toFloat = util.toFloat;


    var _props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity'];

    mixin.parallax = {

        props: _props.reduce(function (props, prop) {
            props[prop] = 'list';
            return props;
        }, {
            media: 'media'
        }),

        defaults: _props.reduce(function (defaults, prop) {
            defaults[prop] = undefined;
            return defaults;
        }, {
            media: false
        }),

        computed: {
            props: function props(properties, $el) {
                var _this = this;

                return _props.reduce(function (props, prop) {

                    if (isUndefined(properties[prop])) {
                        return props;
                    }

                    var isColor = prop.match(/color/i);
                    var isCssProp = isColor || prop === 'opacity';

                    var pos = void 0,
                        bgPos = void 0,
                        diff = void 0;
                    var steps = properties[prop].slice(0);

                    if (isCssProp) {
                        css($el, prop, '');
                    }

                    if (steps.length < 2) {
                        steps.unshift((prop === 'scale' ? 1 : isCssProp ? css($el, prop) : 0) || 0);
                    }

                    var unit = includes(steps.join(''), '%') ? '%' : 'px';

                    if (isColor) {
                        var color = $el.style.color;

                        steps = steps.map(function (step) {
                            return parseColor($el, step);
                        });
                        $el.style.color = color;
                    } else {

                        steps = steps.map(toFloat);
                    }

                    if (prop.match(/^bg/)) {

                        css($el, 'background-position-' + prop[2], '');
                        bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

                        if (_this.covers) {

                            var min = Math.min.apply(Math, _toConsumableArray(steps));
                            var max = Math.max.apply(Math, _toConsumableArray(steps));
                            var down = steps.indexOf(min) < steps.indexOf(max);

                            diff = max - min;

                            steps = steps.map(function (step) {
                                return step - (down ? min : max);
                            });
                            pos = (down ? -diff : 0) + 'px';
                        } else {

                            pos = bgPos;
                        }
                    }

                    props[prop] = { steps: steps, unit: unit, pos: pos, bgPos: bgPos, diff: diff };

                    return props;
                }, {});
            },
            bgProps: function bgProps() {
                var _this2 = this;

                return ['bgx', 'bgy'].filter(function (bg) {
                    return bg in _this2.props;
                });
            },
            covers: function covers(_, $el) {
                return _covers($el);
            }
        },

        disconnected: function disconnected() {
            delete this._image;
        },


        update: [{
            read: function read(data) {
                var _this3 = this;

                data.active = !this.media || window.matchMedia(this.media).matches;

                if (data.image) {
                    data.image.dimEl = {
                        width: this.$el.offsetWidth,
                        height: this.$el.offsetHeight
                    };
                }

                if ('image' in data || !this.covers || !this.bgProps.length) {
                    return;
                }

                var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

                if (!src) {
                    return;
                }

                data.image = false;

                getImage(src).then(function (img) {
                    data.image = {
                        width: img.naturalWidth,
                        height: img.naturalHeight
                    };

                    _this3.$emit();
                });
            },
            write: function write(_ref) {
                var _this4 = this;

                var image = _ref.image,
                    active = _ref.active;


                if (!image) {
                    return;
                }

                if (!active) {
                    css(this.$el, { backgroundSize: '', backgroundRepeat: '' });
                    return;
                }

                var dimEl = image.dimEl;


                var dim = Dimensions.cover(image, dimEl);

                this.bgProps.forEach(function (prop) {
                    var _props$prop = _this4.props[prop],
                        diff = _props$prop.diff,
                        bgPos = _props$prop.bgPos,
                        steps = _props$prop.steps;

                    var attr = prop === 'bgy' ? 'height' : 'width';
                    var span = dim[attr] - dimEl[attr];

                    if (!bgPos.match(/%$|0px/)) {
                        return;
                    }

                    if (span < diff) {
                        dimEl[attr] = dim[attr] + diff - span;
                    } else if (span > diff) {

                        var bgPosFloat = parseFloat(bgPos);

                        if (bgPosFloat) {
                            _this4.props[prop].steps = steps.map(function (step) {
                                return step - (span - diff) / (100 / bgPosFloat);
                            });
                        }
                    }

                    dim = Dimensions.cover(image, dimEl);
                });

                css(this.$el, {
                    backgroundSize: dim.width + 'px ' + dim.height + 'px',
                    backgroundRepeat: 'no-repeat'
                });
            },


            events: ['load', 'resize']

        }],

        methods: {
            reset: function reset() {
                var _this5 = this;

                each(this.getCss(0), function (_, prop) {
                    return css(_this5.$el, prop, '');
                });
            },
            getCss: function getCss(percent) {
                var props = this.props;

                var translated = false;

                return Object.keys(props).reduce(function (css, prop) {
                    var _props$prop2 = props[prop],
                        steps = _props$prop2.steps,
                        unit = _props$prop2.unit,
                        pos = _props$prop2.pos;

                    var value = getValue(steps, percent);

                    switch (prop) {

                        // transforms
                        case 'x':
                        case 'y':

                            if (translated) {
                                break;
                            }

                            var _map = ['x', 'y'].map(function (dir) {
                                return prop === dir ? value + unit : props[dir] ? getValue(props[dir].steps, percent) + props[dir].unit : 0;
                            }),
                                _map2 = _slicedToArray(_map, 2),
                                x = _map2[0],
                                y = _map2[1];

                            translated = css.transform += ' translate3d(' + x + ', ' + y + ', 0)';
                            break;
                        case 'rotate':
                            css.transform += ' rotate(' + value + 'deg)';
                            break;
                        case 'scale':
                            css.transform += ' scale(' + value + ')';
                            break;

                        // bg image
                        case 'bgy':
                        case 'bgx':
                            css['background-position-' + prop[2]] = 'calc(' + pos + ' + ' + (value + unit) + ')';
                            break;

                        // color
                        case 'color':
                        case 'backgroundColor':
                        case 'borderColor':
                            var _getStep = getStep(steps, percent),
                                _getStep2 = _slicedToArray(_getStep, 3),
                                start = _getStep2[0],
                                end = _getStep2[1],
                                p = _getStep2[2];

                            css[prop] = 'rgba(' + start.map(function (value, i) {
                                value = value + p * (end[i] - value);
                                return i === 3 ? toFloat(value) : parseInt(value, 10);
                            }).join(',') + ')';
                            break;

                        // CSS Filter
                        case 'blur':
                            css.filter += ' blur(' + value + 'px)';
                            break;
                        case 'hue':
                            css.filter += ' hue-rotate(' + value + 'deg)';
                            break;
                        case 'fopacity':
                            css.filter += ' opacity(' + value + '%)';
                            break;
                        case 'grayscale':
                        case 'invert':
                        case 'saturate':
                        case 'sepia':
                            css.filter += ' ' + prop + '(' + value + '%)';
                            break;

                        default:
                            css[prop] = value;
                    }

                    return css;
                }, { transform: '', filter: '' });
            }
        }

    };

    function parseColor(el, color) {
        return css(css(el, 'color', color), 'color').split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function (n) {
            return toFloat(n);
        });
    }

    function getStep(steps, percent) {
        var count = steps.length - 1;
        var index = Math.min(Math.floor(count * percent), count - 1);
        var step = steps.slice(index, index + 2);

        step.push(percent === 1 ? 1 : percent % (1 / count) * count);

        return step;
    }

    function getValue(steps, percent) {
        var _getStep3 = getStep(steps, percent),
            _getStep4 = _slicedToArray(_getStep3, 3),
            start = _getStep4[0],
            end = _getStep4[1],
            p = _getStep4[2];

        return (isNumber(start) ? start + Math.abs(start - end) * p * (start < end ? 1 : -1) : +end).toFixed(2);
    }

    function _covers(el) {
        var backgroundSize = el.style.backgroundSize;

        var covers = css(css(el, 'backgroundSize', ''), 'backgroundSize') === 'cover';
        el.style.backgroundSize = backgroundSize;
        return covers;
    }
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var removeClass = UIkit.util.removeClass;


    return {

        update: [{
            write: function write() {

                if (this.stack.length || this.dragging) {
                    return;
                }

                var index = this.getValidIndex();
                delete this.index;
                removeClass(this.slides, this.clsActive, this.clsActivated);
                this.show(index);
            },


            events: ['load', 'resize']

        }]

    };
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_parallax__ = __webpack_require__(23);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit, parent) {

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_parallax__["a" /* default */]);

    var mixin = UIkit.mixin,
        _UIkit$util = UIkit.util,
        closest = _UIkit$util.closest,
        css = _UIkit$util.css,
        endsWith = _UIkit$util.endsWith,
        noop = _UIkit$util.noop,
        Transition = _UIkit$util.Transition;


    return {

        mixins: [mixin.parallax],

        computed: {
            item: function item() {
                var slider = UIkit.getComponent(closest(this.$el, '.uk-' + parent), parent);
                return slider && closest(this.$el, slider.slidesSelector);
            }
        },

        events: [{

            name: 'itemshown',

            self: true,

            el: function el() {
                return this.item;
            },
            handler: function handler() {
                css(this.$el, this.getCss(.5));
            }
        }, {
            name: 'itemin itemout',

            self: true,

            el: function el() {
                return this.item;
            },
            handler: function handler(_ref) {
                var type = _ref.type,
                    _ref$detail = _ref.detail,
                    percent = _ref$detail.percent,
                    duration = _ref$detail.duration,
                    timing = _ref$detail.timing,
                    dir = _ref$detail.dir;


                Transition.cancel(this.$el);
                css(this.$el, this.getCss(getCurrent(type, dir, percent)));

                Transition.start(this.$el, this.getCss(isIn(type) ? .5 : dir > 0 ? 1 : 0), duration, timing).catch(noop);
            }
        }, {
            name: 'transitioncanceled transitionend',

            self: true,

            el: function el() {
                return this.item;
            },
            handler: function handler() {
                Transition.cancel(this.$el);
            }
        }, {
            name: 'itemtranslatein itemtranslateout',

            self: true,

            el: function el() {
                return this.item;
            },
            handler: function handler(_ref2) {
                var type = _ref2.type,
                    _ref2$detail = _ref2.detail,
                    percent = _ref2$detail.percent,
                    dir = _ref2$detail.dir;

                Transition.cancel(this.$el);
                css(this.$el, this.getCss(getCurrent(type, dir, percent)));
            }
        }]

    };

    function isIn(type) {
        return endsWith(type, 'in');
    }

    function getCurrent(type, dir, percent) {

        percent /= 2;

        return !isIn(type) ? dir < 0 ? percent : 1 - percent : dir < 0 ? 1 - percent : percent;
    }
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27);
module.exports = __webpack_require__(109);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_boot__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uikit_core__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_countdown__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_grid_parallax__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_lightbox__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_notification__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_parallax__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_slider__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_slideshow__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_sortable__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_tooltip__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_upload__ = __webpack_require__(108);













__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2__components_countdown__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3__components_grid_parallax__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4__components_lightbox__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5__components_notification__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6__components_parallax__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_7__components_slider__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8__components_slideshow__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_9__components_sortable__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_10__components_tooltip__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_11__components_upload__["a" /* default */]);

if (BUNDLED) {
    Object(__WEBPACK_IMPORTED_MODULE_0__api_boot__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */]);

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ajax;
/* harmony export (immutable) */ __webpack_exports__["b"] = getImage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang__ = __webpack_require__(1);




function ajax(url, options) {
    return new __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */](function (resolve, reject) {

        var env = Object(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* assign */])({
            data: null,
            method: 'GET',
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: __WEBPACK_IMPORTED_MODULE_2__lang__["z" /* noop */],
            responseType: ''
        }, options);

        env.beforeSend(env);

        var xhr = env.xhr;


        for (var prop in env) {
            if (prop in xhr) {
                try {

                    xhr[prop] = env[prop];
                } catch (e) {}
            }
        }

        xhr.open(env.method.toUpperCase(), url);

        for (var header in env.headers) {
            xhr.setRequestHeader(header, env.headers[header]);
        }

        Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(xhr, 'load', function () {

            if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                resolve(xhr);
            } else {
                reject(Object(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* assign */])(Error(xhr.statusText), {
                    xhr: xhr,
                    status: xhr.status
                }));
            }
        });

        Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(xhr, 'error', function () {
            return reject(Object(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* assign */])(Error('Network Error'), { xhr: xhr }));
        });
        Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(xhr, 'timeout', function () {
            return reject(Object(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* assign */])(Error('Network Timeout'), { xhr: xhr }));
        });

        xhr.send(env.data);
    });
}

function getImage(src) {

    return new __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */](function (resolve, reject) {
        var img = new Image();

        img.onerror = reject;
        img.onload = function () {
            return resolve(img);
        };

        img.src = src;
    });
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(30);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(31)))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = transition;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Transition; });
/* harmony export (immutable) */ __webpack_exports__["c"] = animate;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__promise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class__ = __webpack_require__(11);







function transition(element, props) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
    var timing = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'linear';


    return __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */].all(Object(__WEBPACK_IMPORTED_MODULE_4__lang__["J" /* toNodes */])(element).map(function (element) {
        return new __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */](function (resolve, reject) {

            for (var name in props) {
                var value = Object(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* css */])(element, name);
                if (value === '') {
                    Object(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* css */])(element, name, value);
                }
            }

            var timer = setTimeout(function () {
                return Object(__WEBPACK_IMPORTED_MODULE_2__event__["g" /* trigger */])(element, 'transitionend');
            }, duration);

            Object(__WEBPACK_IMPORTED_MODULE_2__event__["d" /* once */])(element, 'transitionend transitioncanceled', function (_ref) {
                var type = _ref.type;

                clearTimeout(timer);
                Object(__WEBPACK_IMPORTED_MODULE_5__class__["c" /* removeClass */])(element, 'uk-transition');
                Object(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* css */])(element, {
                    'transition-property': '',
                    'transition-duration': '',
                    'transition-timing-function': ''
                });
                type === 'transitioncanceled' ? reject() : resolve();
            }, false, function (_ref2) {
                var target = _ref2.target;
                return element === target;
            });

            Object(__WEBPACK_IMPORTED_MODULE_5__class__["a" /* addClass */])(element, 'uk-transition');
            Object(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* css */])(element, Object(__WEBPACK_IMPORTED_MODULE_4__lang__["b" /* assign */])({
                'transition-property': Object.keys(props).map(__WEBPACK_IMPORTED_MODULE_3__style__["e" /* propName */]).join(','),
                'transition-duration': duration + 'ms',
                'transition-timing-function': timing
            }, props));
        });
    }));
}

var Transition = {

    start: transition,

    stop: function stop(element) {
        Object(__WEBPACK_IMPORTED_MODULE_2__event__["g" /* trigger */])(element, 'transitionend');
        return __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */].resolve();
    },
    cancel: function cancel(element) {
        Object(__WEBPACK_IMPORTED_MODULE_2__event__["g" /* trigger */])(element, 'transitioncanceled');
    },
    inProgress: function inProgress(element) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__class__["b" /* hasClass */])(element, 'uk-transition');
    }
};

var animationPrefix = 'uk-animation-';
var clsCancelAnimation = 'uk-cancel-animation';

function animate(element, animation) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 200;
    var _arguments = arguments;
    var origin = arguments[3];
    var out = arguments[4];


    return __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */].all(Object(__WEBPACK_IMPORTED_MODULE_4__lang__["J" /* toNodes */])(element).map(function (element) {
        return new __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */](function (resolve, reject) {

            if (Object(__WEBPACK_IMPORTED_MODULE_5__class__["b" /* hasClass */])(element, clsCancelAnimation)) {
                requestAnimationFrame(function () {
                    return __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */].resolve().then(function () {
                        return animate.apply(undefined, _arguments).then(resolve, reject);
                    });
                });
                return;
            }

            var cls = animation + ' ' + animationPrefix + (out ? 'leave' : 'enter');

            if (Object(__WEBPACK_IMPORTED_MODULE_4__lang__["C" /* startsWith */])(animation, animationPrefix)) {

                if (origin) {
                    cls += ' uk-transform-origin-' + origin;
                }

                if (out) {
                    cls += ' ' + animationPrefix + 'reverse';
                }
            }

            reset();

            Object(__WEBPACK_IMPORTED_MODULE_2__event__["d" /* once */])(element, 'animationend animationcancel', function (_ref3) {
                var type = _ref3.type;


                var hasReset = false;

                if (type === 'animationcancel') {
                    reject();
                    reset();
                } else {
                    resolve();
                    __WEBPACK_IMPORTED_MODULE_1__promise__["b" /* Promise */].resolve().then(function () {
                        hasReset = true;
                        reset();
                    });
                }

                requestAnimationFrame(function () {
                    if (!hasReset) {
                        Object(__WEBPACK_IMPORTED_MODULE_5__class__["a" /* addClass */])(element, clsCancelAnimation);

                        requestAnimationFrame(function () {
                            return Object(__WEBPACK_IMPORTED_MODULE_5__class__["c" /* removeClass */])(element, clsCancelAnimation);
                        });
                    }
                });
            }, false, function (_ref4) {
                var target = _ref4.target;
                return element === target;
            });

            Object(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* css */])(element, 'animationDuration', duration + 'ms');
            Object(__WEBPACK_IMPORTED_MODULE_5__class__["a" /* addClass */])(element, cls);

            function reset() {
                Object(__WEBPACK_IMPORTED_MODULE_3__style__["a" /* css */])(element, 'animationDuration', '');
                Object(__WEBPACK_IMPORTED_MODULE_5__class__["d" /* removeClasses */])(element, animationPrefix + '\\S*');
            }
        });
    }));
}

var _inProgress = new RegExp(animationPrefix + '(enter|leave)');
var Animation = {
    in: function _in(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, false);
    },
    out: function out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },
    inProgress: function inProgress(element) {
        return _inProgress.test(Object(__WEBPACK_IMPORTED_MODULE_0__attr__["a" /* attr */])(element, 'class'));
    },
    cancel: function cancel(element) {
        Object(__WEBPACK_IMPORTED_MODULE_2__event__["g" /* trigger */])(element, 'animationcancel');
    }
};

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = $;
/* harmony export (immutable) */ __webpack_exports__["b"] = $$;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang__ = __webpack_require__(1);




function $(selector, context) {
    return !Object(__WEBPACK_IMPORTED_MODULE_2__lang__["w" /* isString */])(selector) ? Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(selector) : isHtml(selector) ? Object(__WEBPACK_IMPORTED_MODULE_2__lang__["I" /* toNode */])(Object(__WEBPACK_IMPORTED_MODULE_0__dom__["f" /* fragment */])(selector)) : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["c" /* find */])(selector, context);
}

function $$(selector, context) {
    return !Object(__WEBPACK_IMPORTED_MODULE_2__lang__["w" /* isString */])(selector) ? Object(__WEBPACK_IMPORTED_MODULE_2__lang__["J" /* toNodes */])(selector) : isHtml(selector) ? Object(__WEBPACK_IMPORTED_MODULE_2__lang__["J" /* toNodes */])(Object(__WEBPACK_IMPORTED_MODULE_0__dom__["f" /* fragment */])(selector)) : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["d" /* findAll */])(selector, context);
}

function isHtml(str) {
    return str[0] === '<' || str.match(/^\s*</);
}

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fastdom; });
/*
    Based on:
    Copyright (c) 2016 Wilson Page wilsonpage@me.com
    https://github.com/wilsonpage/fastdom
*/

var fastdom = {

    reads: [],
    writes: [],

    read: function read(task) {
        this.reads.push(task);
        scheduleFlush();
        return task;
    },
    write: function write(task) {
        this.writes.push(task);
        scheduleFlush();
        return task;
    },
    clear: function clear(task) {
        return remove(this.reads, task) || remove(this.writes, task);
    },
    flush: function flush() {

        runTasks(this.reads);
        runTasks(this.writes.splice(0, this.writes.length));

        this.scheduled = false;

        if (this.reads.length || this.writes.length) {
            scheduleFlush();
        }
    }
};

function scheduleFlush() {
    if (!fastdom.scheduled) {
        fastdom.scheduled = true;
        requestAnimationFrame(fastdom.flush.bind(fastdom));
    }
}

function runTasks(tasks) {
    var task = void 0;
    while (task = tasks.shift()) {
        task();
    }
}

function remove(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
}

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = MouseTracker;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dimensions__ = __webpack_require__(16);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




function MouseTracker() {}

MouseTracker.prototype = {

    positions: [],
    position: null,

    init: function init() {
        var _this = this;

        this.positions = [];
        this.position = null;

        var ticking = false;
        this.unbind = Object(__WEBPACK_IMPORTED_MODULE_0__event__["c" /* on */])(document, 'mousemove', function (e) {

            if (ticking) {
                return;
            }

            setTimeout(function () {

                var time = Date.now();
                var length = _this.positions.length;


                if (length && time - _this.positions[length - 1].time > 100) {
                    _this.positions.splice(0, length);
                }

                _this.positions.push({ time: time, x: e.pageX, y: e.pageY });

                if (_this.positions.length > 5) {
                    _this.positions.shift();
                }

                ticking = false;
            }, 5);

            ticking = true;
        });
    },
    cancel: function cancel() {
        if (this.unbind) {
            this.unbind();
        }
    },
    movesTo: function movesTo(target) {

        if (this.positions.length < 2) {
            return false;
        }

        var p = Object(__WEBPACK_IMPORTED_MODULE_1__dimensions__["d" /* offset */])(target);
        var position = this.positions[this.positions.length - 1];

        var _positions = _slicedToArray(this.positions, 1),
            prevPos = _positions[0];

        if (p.left <= position.x && position.x <= p.right && p.top <= position.y && position.y <= p.bottom) {
            return false;
        }

        var points = [[{ x: p.left, y: p.top }, { x: p.right, y: p.bottom }], [{ x: p.right, y: p.top }, { x: p.left, y: p.bottom }]];

        if (p.right <= position.x) {
            // empty
        } else if (p.left >= position.x) {
            points[0].reverse();
            points[1].reverse();
        } else if (p.bottom <= position.y) {
            points[0].reverse();
        } else if (p.top >= position.y) {
            points[1].reverse();
        }

        return !!points.reduce(function (result, point) {
            return result + (slope(prevPos, point[0]) < slope(position, point[0]) && slope(prevPos, point[1]) > slope(position, point[1]));
        }, 0);
    }
};

function slope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeOptions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(1);


var strats = {};

// concat strategy
strats.args = strats.events = strats.init = strats.created = strats.beforeConnect = strats.connected = strats.ready = strats.beforeDisconnect = strats.disconnected = strats.destroy = function (parentVal, childVal) {

    parentVal = parentVal && !Object(__WEBPACK_IMPORTED_MODULE_0__lang__["l" /* isArray */])(parentVal) ? [parentVal] : parentVal;

    return childVal ? parentVal ? parentVal.concat(childVal) : Object(__WEBPACK_IMPORTED_MODULE_0__lang__["l" /* isArray */])(childVal) ? childVal : [childVal] : parentVal;
};

// update strategy
strats.update = function (parentVal, childVal) {
    return strats.args(parentVal, Object(__WEBPACK_IMPORTED_MODULE_0__lang__["o" /* isFunction */])(childVal) ? { read: childVal } : childVal);
};

// property strategy
strats.props = function (parentVal, childVal) {

    if (Object(__WEBPACK_IMPORTED_MODULE_0__lang__["l" /* isArray */])(childVal)) {
        childVal = childVal.reduce(function (value, key) {
            value[key] = String;
            return value;
        }, {});
    }

    return strats.methods(parentVal, childVal);
};

// extend strategy
strats.computed = strats.defaults = strats.methods = function (parentVal, childVal) {
    return childVal ? parentVal ? Object(__WEBPACK_IMPORTED_MODULE_0__lang__["b" /* assign */])({}, parentVal, childVal) : childVal : parentVal;
};

// default strategy
var defaultStrat = function defaultStrat(parentVal, childVal) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__lang__["x" /* isUndefined */])(childVal) ? parentVal : childVal;
};

function mergeOptions(parent, child) {

    var options = {};

    if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i]);
        }
    }

    for (var key in parent) {
        mergeKey(key);
    }

    for (var _key in child) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__lang__["h" /* hasOwn */])(parent, _key)) {
            mergeKey(_key);
        }
    }

    function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key]);
    }

    return options;
}

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__attr__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promise__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var id = 0;

var Player = function () {
    function Player(el) {
        _classCallCheck(this, Player);

        this.id = ++id;
        this.el = Object(__WEBPACK_IMPORTED_MODULE_3__lang__["I" /* toNode */])(el);
    }

    _createClass(Player, [{
        key: 'isVideo',
        value: function isVideo() {
            return this.isYoutube() || this.isVimeo() || this.isHTML5();
        }
    }, {
        key: 'isHTML5',
        value: function isHTML5() {
            return this.el.tagName === 'VIDEO';
        }
    }, {
        key: 'isIFrame',
        value: function isIFrame() {
            return this.el.tagName === 'IFRAME';
        }
    }, {
        key: 'isYoutube',
        value: function isYoutube() {
            return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
        }
    }, {
        key: 'isVimeo',
        value: function isVimeo() {
            return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
        }
    }, {
        key: 'enableApi',
        value: function enableApi() {
            var _this = this;

            if (this.ready) {
                return this.ready;
            }

            var youtube = this.isYoutube();
            var vimeo = this.isVimeo();

            var poller = void 0;

            if (youtube || vimeo) {

                return this.ready = new __WEBPACK_IMPORTED_MODULE_2__promise__["b" /* Promise */](function (resolve) {

                    Object(__WEBPACK_IMPORTED_MODULE_1__event__["d" /* once */])(_this.el, 'load', function () {
                        if (youtube) {
                            var listener = function listener() {
                                return post(_this.el, { event: 'listening', id: _this.id });
                            };
                            poller = setInterval(listener, 100);
                            listener();
                        }
                    });

                    listen(function (data) {
                        return youtube && data.id === _this.id && data.event === 'onReady' || vimeo && Number(data.player_id) === _this.id;
                    }).then(function () {
                        resolve();
                        poller && clearInterval(poller);
                    });

                    Object(__WEBPACK_IMPORTED_MODULE_0__attr__["a" /* attr */])(_this.el, 'src', '' + _this.el.src + (Object(__WEBPACK_IMPORTED_MODULE_3__lang__["j" /* includes */])(_this.el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : 'api=1&player_id=' + _this.id));
                });
            }

            return __WEBPACK_IMPORTED_MODULE_2__promise__["b" /* Promise */].resolve();
        }
    }, {
        key: 'play',
        value: function play() {
            var _this2 = this;

            if (!this.isVideo()) {
                return;
            }

            if (this.isIFrame()) {
                this.enableApi().then(function () {
                    return post(_this2.el, { func: 'playVideo', method: 'play' });
                });
            } else if (this.isHTML5()) {
                try {
                    var promise = this.el.play();
                    if (promise) {
                        promise.catch(noop);
                    }
                } catch (e) {}
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            var _this3 = this;

            if (!this.isVideo()) {
                return;
            }

            if (this.isIFrame()) {
                this.enableApi().then(function () {
                    return post(_this3.el, { func: 'pauseVideo', method: 'pause' });
                });
            } else if (this.isHTML5()) {
                this.el.pause();
            }
        }
    }, {
        key: 'mute',
        value: function mute() {
            var _this4 = this;

            if (!this.isVideo()) {
                return;
            }

            if (this.isIFrame()) {
                this.enableApi().then(function () {
                    return post(_this4.el, { func: 'mute', method: 'setVolume', value: 0 });
                });
            } else if (this.isHTML5()) {
                this.el.muted = true;
                Object(__WEBPACK_IMPORTED_MODULE_0__attr__["a" /* attr */])(this.el, 'muted', '');
            }
        }
    }]);

    return Player;
}();

function post(el, cmd) {
    try {
        el.contentWindow.postMessage(JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_3__lang__["b" /* assign */])({ event: 'command' }, cmd)), '*');
    } catch (e) {}
}

function listen(cb) {

    return new __WEBPACK_IMPORTED_MODULE_2__promise__["b" /* Promise */](function (resolve) {

        Object(__WEBPACK_IMPORTED_MODULE_1__event__["d" /* once */])(window, 'message', function (_, data) {
            return resolve(data);
        }, false, function (_ref) {
            var data = _ref.data;


            if (!data || !Object(__WEBPACK_IMPORTED_MODULE_3__lang__["w" /* isString */])(data)) {
                return;
            }

            try {
                data = JSON.parse(data);
            } catch (e) {
                return;
            }

            return data && cb(data);
        });
    });
}

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = isTouch;
/* harmony export (immutable) */ __webpack_exports__["a"] = getPos;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filter__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__env__ = __webpack_require__(17);
/*
    Based on:
    Copyright (c) 2010-2016 Thomas Fuchs
    http://zeptojs.com/
*/





var touch = {},
    clickTimeout = void 0,
    swipeTimeout = void 0,
    tapTimeout = void 0,
    clicked = void 0;

function swipeDirection(_ref) {
    var x1 = _ref.x1,
        x2 = _ref.x2,
        y1 = _ref.y1,
        y2 = _ref.y2;

    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
}

function cancelAll() {
    clickTimeout && clearTimeout(clickTimeout);
    swipeTimeout && clearTimeout(swipeTimeout);
    tapTimeout && clearTimeout(tapTimeout);
    clickTimeout = swipeTimeout = tapTimeout = null;
    touch = {};
}

Object(__WEBPACK_IMPORTED_MODULE_0__dom__["l" /* ready */])(function () {

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(document, 'click', function () {
        return clicked = true;
    }, true);

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(document, __WEBPACK_IMPORTED_MODULE_3__env__["c" /* pointerDown */], function (e) {
        var target = e.target;

        var _getPos = getPos(e),
            x = _getPos.x,
            y = _getPos.y;

        var now = Date.now();
        var type = getType(e.type);

        if (touch.type && touch.type !== type) {
            return;
        }

        touch.el = 'tagName' in target ? target : target.parentNode;

        clickTimeout && clearTimeout(clickTimeout);

        touch.x1 = x;
        touch.y1 = y;

        if (touch.last && now - touch.last <= 250) {
            touch = {};
        }

        touch.type = type;
        touch.last = now;

        clicked = e.button > 0;
    });

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(document, __WEBPACK_IMPORTED_MODULE_3__env__["f" /* pointerMove */], function (e) {

        if (e.defaultPrevented) {
            return;
        }

        var _getPos2 = getPos(e),
            x = _getPos2.x,
            y = _getPos2.y;

        touch.x2 = x;
        touch.y2 = y;
    });

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(document, __WEBPACK_IMPORTED_MODULE_3__env__["g" /* pointerUp */], function (_ref2) {
        var type = _ref2.type,
            target = _ref2.target;


        if (touch.type !== getType(type)) {
            return;
        }

        // swipe
        if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {

            swipeTimeout = setTimeout(function () {
                if (touch.el) {
                    Object(__WEBPACK_IMPORTED_MODULE_2__event__["g" /* trigger */])(touch.el, 'swipe');
                    Object(__WEBPACK_IMPORTED_MODULE_2__event__["g" /* trigger */])(touch.el, 'swipe' + swipeDirection(touch));
                }
                touch = {};
            });

            // normal tap
        } else if ('last' in touch) {

            tapTimeout = setTimeout(function () {
                return Object(__WEBPACK_IMPORTED_MODULE_2__event__["g" /* trigger */])(touch.el, 'tap');
            });

            // trigger single click after 350ms of inactivity
            if (touch.el && type !== 'mouseup' && Object(__WEBPACK_IMPORTED_MODULE_1__filter__["f" /* within */])(target, touch.el)) {
                clickTimeout = setTimeout(function () {
                    clickTimeout = null;
                    if (touch.el && !clicked) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__event__["g" /* trigger */])(touch.el, 'click');
                    }
                    touch = {};
                }, 350);
            }
        } else {
            touch = {};
        }
    });

    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(document, 'touchcancel', cancelAll);
    Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(window, 'scroll', cancelAll);
});

var touching = false;
Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(document, 'touchstart', function () {
    return touching = true;
}, true);
Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(document, 'click', function () {
    touching = false;
});
Object(__WEBPACK_IMPORTED_MODULE_2__event__["c" /* on */])(document, 'touchcancel', function () {
    return touching = false;
}, true);

function isTouch(e) {
    return touching || e.pointerType === 'touch';
}

function getPos(e) {
    var touches = e.touches,
        changedTouches = e.changedTouches;

    var _ref3 = touches && touches[0] || changedTouches && changedTouches[0] || e,
        x = _ref3.pageX,
        y = _ref3.pageY;

    return { x: x, y: y };
}

function getType(type) {
    return type.slice(0, 5);
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_index__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_boot__ = __webpack_require__(13);





__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].version = VERSION;

Object(__WEBPACK_IMPORTED_MODULE_1__mixin_index__["e" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */]);
Object(__WEBPACK_IMPORTED_MODULE_2__core_index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */]);

if (!BUNDLED) {
    Object(__WEBPACK_IMPORTED_MODULE_3__api_boot__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */]);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var DATA = UIkit.data;

    UIkit.use = function (plugin) {

        if (plugin.installed) {
            return;
        }

        plugin.call(null, this);
        plugin.installed = true;

        return this;
    };

    UIkit.mixin = function (mixin, component) {
        component = (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(component) ? UIkit.components[component] : component) || this;
        mixin = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])({}, mixin);
        mixin.mixins = component.options.mixins;
        delete component.options.mixins;
        component.options = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(mixin, component.options);
    };

    UIkit.extend = function (options) {

        options = options || {};

        var Super = this;
        var Sub = function UIkitComponent(options) {
            this._init(options);
        };

        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.options = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(Super.options, options);

        Sub['super'] = Super;
        Sub.extend = Super.extend;

        return Sub;
    };

    UIkit.update = function (e, element) {
        var parents = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


        e = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["createEvent"])(e || 'update');
        element = element ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toNode"])(element) : document.body;

        if (parents) {

            do {

                update(element[DATA], e);
                element = element.parentNode;
            } while (element);
        } else {

            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["apply"])(element, function (element) {
                return update(element[DATA], e);
            });
        }
    };

    var container = void 0;
    Object.defineProperty(UIkit, 'container', {
        get: function get() {
            return container || document.body;
        },
        set: function set(element) {
            container = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(element);
        }
    });

    function update(data, e) {

        if (!data) {
            return;
        }

        for (var name in data) {
            if (data[name]._isReady) {
                data[name]._callUpdate(e);
            }
        }
    }
});

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.prototype._callHook = function (hook) {
        var _this = this;

        var handlers = this.$options[hook];

        if (handlers) {
            handlers.forEach(function (handler) {
                return handler.call(_this);
            });
        }
    };

    UIkit.prototype._callConnected = function () {
        var _this2 = this;

        if (this._connected) {
            return;
        }

        this._data = {};

        this._callHook('beforeConnect');
        this._connected = true;

        this._initEvents();
        this._initObserver();

        this._callHook('connected');

        if (!this._isReady) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["ready"])(function () {
                return _this2._callReady();
            });
        }

        this._callUpdate();
    };

    UIkit.prototype._callDisconnected = function () {

        if (!this._connected) {
            return;
        }

        this._callHook('beforeDisconnect');

        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }

        this._unbindEvents();
        this._callHook('disconnected');

        this._connected = false;
    };

    UIkit.prototype._callReady = function () {

        if (this._isReady) {
            return;
        }

        this._isReady = true;
        this._callHook('ready');
        this._resetComputeds();
        this._callUpdate();
    };

    UIkit.prototype._callUpdate = function (e) {
        var _this3 = this;

        e = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["createEvent"])(e || 'update');

        var _e = e,
            type = _e.type;


        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(['update', 'load', 'resize'], type)) {
            this._resetComputeds();
        }

        var updates = this.$options.update;
        var _frames = this._frames,
            reads = _frames.reads,
            writes = _frames.writes;


        if (!updates) {
            return;
        }

        updates.forEach(function (_ref, i) {
            var read = _ref.read,
                write = _ref.write,
                events = _ref.events;


            if (type !== 'update' && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(events, type)) {
                return;
            }

            if (read && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].reads, reads[i])) {
                reads[i] = __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].read(function () {

                    var result = read.call(_this3, _this3._data, e);

                    if (result === false && write) {
                        __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].clear(writes[i]);
                        delete writes[i];
                    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(result)) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])(_this3._data, result);
                    }
                    delete reads[i];
                });
            }

            if (write && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(__WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].writes, writes[i])) {
                writes[i] = __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].write(function () {
                    write.call(_this3, _this3._data, e);
                    delete writes[i];
                });
            }
        });
    };
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var uid = 0;

    UIkit.prototype.props = {};

    UIkit.prototype._init = function (options) {

        options = options || {};
        options = this.$options = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(this.constructor.options, options, this);

        this.$el = null;
        this.$name = UIkit.prefix + Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(this.$options.name);
        this.$props = {};

        this._frames = { reads: {}, writes: {} };
        this._events = [];

        this._uid = uid++;
        this._initData();
        this._initMethods();
        this._initComputeds();
        this._callHook('created');

        if (options.el) {
            this.$mount(options.el);
        }
    };

    UIkit.prototype._initData = function () {
        var _$options = this.$options,
            defaults = _$options.defaults,
            _$options$data = _$options.data,
            data = _$options$data === undefined ? {} : _$options$data,
            _$options$args = _$options.args,
            args = _$options$args === undefined ? [] : _$options$args,
            _$options$props = _$options.props,
            props = _$options$props === undefined ? {} : _$options$props,
            el = _$options.el;


        if (args.length && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(data)) {
            data = data.slice(0, args.length).reduce(function (data, value, index) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(value)) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])(data, value);
                } else {
                    data[args[index]] = value;
                }
                return data;
            }, {});
        }

        for (var key in Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])({}, defaults, props)) {
            this.$props[key] = this[key] = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(data, key) && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(data[key]) ? coerce(props[key], data[key], el) : defaults ? defaults[key] && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(defaults[key]) ? defaults[key].concat() : defaults[key] : null;
        }
    };

    UIkit.prototype._initMethods = function () {
        var methods = this.$options.methods;


        if (methods) {
            for (var key in methods) {
                this[key] = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["bind"])(methods[key], this);
            }
        }
    };

    UIkit.prototype._initComputeds = function () {
        var computed = this.$options.computed;


        this._resetComputeds();

        if (computed) {
            for (var key in computed) {
                registerComputed(this, key, computed[key]);
            }
        }
    };

    UIkit.prototype._resetComputeds = function () {
        this._computeds = {};
    };

    UIkit.prototype._initProps = function (props) {

        var key = void 0;

        this._resetComputeds();

        props = props || getProps(this.$options, this.$name);

        for (key in props) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(props[key])) {
                this.$props[key] = props[key];
            }
        }

        var exclude = [this.$options.computed, this.$options.methods];
        for (key in this.$props) {
            if (key in props && notIn(exclude, key)) {
                this[key] = this.$props[key];
            }
        }
    };

    UIkit.prototype._initEvents = function () {
        var _this = this;

        var events = this.$options.events;


        if (events) {

            events.forEach(function (event) {

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(event, 'handler')) {
                    for (var key in event) {
                        registerEvent(_this, event[key], key);
                    }
                } else {
                    registerEvent(_this, event);
                }
            });
        }
    };

    UIkit.prototype._unbindEvents = function () {
        this._events.forEach(function (unbind) {
            return unbind();
        });
        this._events = [];
    };

    UIkit.prototype._initObserver = function () {
        var _this2 = this;

        var _$options2 = this.$options,
            attrs = _$options2.attrs,
            props = _$options2.props,
            el = _$options2.el;

        if (this._observer || !props || !attrs) {
            return;
        }

        attrs = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(attrs) ? attrs : Object.keys(props).map(function (key) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(key);
        });

        this._observer = new MutationObserver(function () {

            var data = getProps(_this2.$options, _this2.$name);
            if (attrs.some(function (key) {
                return !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(data[key]) && data[key] !== _this2.$props[key];
            })) {
                _this2.$reset(data);
            }
        });

        this._observer.observe(el, { attributes: true, attributeFilter: attrs.concat([this.$name, 'data-' + this.$name]) });
    };

    function getProps(opts, name) {

        var data = {};
        var _opts$args = opts.args,
            args = _opts$args === undefined ? [] : _opts$args,
            _opts$props = opts.props,
            props = _opts$props === undefined ? {} : _opts$props,
            el = opts.el;


        if (!props) {
            return data;
        }

        for (var key in props) {
            var prop = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(key);
            if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasAttr"])(el, prop)) {

                var value = coerce(props[key], Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, prop), el);

                if (prop === 'target' && (!value || Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(value, '_'))) {
                    continue;
                }

                data[key] = value;
            }
        }

        var options = parseOptions(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["data"])(el, name), args);

        for (var _key in options) {
            var _prop = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(_key);
            if (props[_prop] !== undefined) {
                data[_prop] = coerce(props[_prop], options[_key], el);
            }
        }

        return data;
    }

    function parseOptions(options) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];


        try {

            return !options ? {} : Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(options, '{') ? JSON.parse(options) : args.length && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(options, ':') ? _defineProperty({}, args[0], options) : options.split(';').reduce(function (options, option) {
                var _option$split = option.split(/:(.+)/),
                    _option$split2 = _slicedToArray(_option$split, 2),
                    key = _option$split2[0],
                    value = _option$split2[1];

                if (key && value) {
                    options[key.trim()] = value.trim();
                }
                return options;
            }, {});
        } catch (e) {
            return {};
        }
    }

    function registerComputed(component, key, cb) {
        Object.defineProperty(component, key, {

            enumerable: true,

            get: function get() {
                var _computeds = component._computeds,
                    $props = component.$props,
                    $el = component.$el;


                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(_computeds, key)) {
                    _computeds[key] = cb.call(component, $props, $el);
                }

                return _computeds[key];
            },
            set: function set(value) {
                component._computeds[key] = value;
            }
        });
    }

    function registerEvent(component, event, key) {

        if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(event)) {
            event = { name: key, handler: event };
        }

        var _event = event,
            name = _event.name,
            el = _event.el,
            handler = _event.handler,
            capture = _event.capture,
            delegate = _event.delegate,
            filter = _event.filter,
            self = _event.self;

        el = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isFunction"])(el) ? el.call(component) : el || component.$el;

        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(el)) {
            el.forEach(function (el) {
                return registerEvent(component, Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])({}, event, { el: el }), key);
            });
            return;
        }

        if (!el || filter && !filter.call(component)) {
            return;
        }

        handler = detail(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(handler) ? component[handler] : Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["bind"])(handler, component));

        if (self) {
            handler = selfFilter(handler);
        }

        component._events.push(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(el, name, !delegate ? null : Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(delegate) ? delegate : delegate.call(component), handler, capture));
    }

    function selfFilter(handler) {
        return function selfHandler(e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return handler.call(null, e);
            }
        };
    }

    function notIn(options, key) {
        return options.every(function (arr) {
            return !arr || !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(arr, key);
        });
    }

    function detail(listener) {
        return function (e) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(e.detail) ? listener.apply(undefined, _toConsumableArray([e].concat(e.detail))) : listener(e);
        };
    }

    function coerce(type, value, context) {

        if (type === Boolean) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toBoolean"])(value);
        } else if (type === Number) {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toNumber"])(value);
        } else if (type === 'query') {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["query"])(value, context);
        } else if (type === 'list') {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toList"])(value);
        } else if (type === 'media') {
            return toMedia(value);
        }

        return type ? type(value) : value;
    }

    function toMedia(value) {

        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(value)) {
            if (value[0] === '@') {
                var name = 'media-' + value.substr(1);
                value = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toFloat"])(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["getCssVar"])(name));
            } else if (isNaN(value)) {
                return value;
            }
        }

        return value && !isNaN(value) ? '(min-width: ' + value + 'px)' : false;
    }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var DATA = UIkit.data;

    UIkit.prototype.$mount = function (el) {
        var name = this.$options.name;


        if (!el[DATA]) {
            el[DATA] = {};
        }

        if (el[DATA][name]) {
            return;
        }

        el[DATA][name] = this;

        this.$el = this.$options.el = this.$options.el || el;

        this._initProps();

        this._callHook('init');

        if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["within"])(el, document)) {
            this._callConnected();
        }
    };

    UIkit.prototype.$emit = function (e) {
        this._callUpdate(e);
    };

    UIkit.prototype.$update = function (e, parents) {
        UIkit.update(e, this.$options.el, parents);
    };

    UIkit.prototype.$reset = function (data) {
        this._callDisconnected();
        this._initProps(data);
        this._callConnected();
    };

    UIkit.prototype.$destroy = function () {
        var removeEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var _$options = this.$options,
            el = _$options.el,
            name = _$options.name;


        if (el) {
            this._callDisconnected();
        }

        this._callHook('destroy');

        if (!el || !el[DATA]) {
            return;
        }

        delete el[DATA][name];

        if (!Object.keys(el[DATA]).length) {
            delete el[DATA];
        }

        if (removeEl) {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["remove"])(this.$el);
        }
    };
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__class__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__container__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__togglable__ = __webpack_require__(20);





var active = void 0;

/* harmony default export */ __webpack_exports__["a"] = ({

    mixins: [__WEBPACK_IMPORTED_MODULE_1__class__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__container__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__togglable__["a" /* default */]],

    props: {
        selPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean
    },

    defaults: {
        cls: 'uk-open',
        escClose: true,
        bgClose: true,
        overlay: true,
        stack: false
    },

    computed: {
        panel: function panel(_ref, $el) {
            var selPanel = _ref.selPanel;

            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(selPanel, $el);
        },
        transitionElement: function transitionElement() {
            return this.panel;
        },
        transitionDuration: function transitionDuration() {
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toMs"])(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.transitionElement, 'transitionDuration'));
        }
    },

    events: [{

        name: 'click',

        delegate: function delegate() {
            return this.selClose;
        },
        handler: function handler(e) {
            e.preventDefault();
            this.hide();
        }
    }, {

        name: 'toggle',

        self: true,

        handler: function handler(e) {

            if (e.defaultPrevented) {
                return;
            }

            e.preventDefault();
            this.toggle();
        }
    }, {
        name: 'beforeshow',

        self: true,

        handler: function handler(e) {

            var prev = active && active !== this && active;

            active = this;

            if (prev) {
                if (this.stack) {
                    this.prev = prev;
                } else {
                    prev.hide().then(this.show);
                    e.preventDefault();
                    return;
                }
            }

            registerEvents();
        }
    }, {
        name: 'beforehide',

        self: true,

        handler: function handler() {

            active = active && active !== this && active || this.prev;

            if (!active) {
                deregisterEvents();
            }
        }
    }, {

        name: 'show',

        self: true,

        handler: function handler() {

            if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasClass"])(document.documentElement, this.clsPage)) {
                this.scrollbarWidth = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["width"])(window) - Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["width"])(document);
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(document.body, 'overflowY', this.scrollbarWidth && this.overlay ? 'scroll' : '');
            }

            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(document.documentElement, this.clsPage);
        }
    }, {

        name: 'hidden',

        self: true,

        handler: function handler() {
            var found = void 0,
                prev = this.prev;

            while (prev) {

                if (prev.clsPage === this.clsPage) {
                    found = true;
                    break;
                }

                prev = prev.prev;
            }

            if (!found) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClass"])(document.documentElement, this.clsPage);
            }

            !this.prev && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(document.body, 'overflowY', '');
        }
    }],

    methods: {
        toggle: function toggle() {
            return this.isToggled() ? this.hide() : this.show();
        },
        show: function show() {

            if (this.isToggled()) {
                return;
            }

            if (this.container && this.$el.parentNode !== this.container) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["append"])(this.container, this.$el);
                this._callConnected();
            }

            return this.toggleNow(this.$el, true);
        },
        hide: function hide() {
            if (this.isToggled()) {
                return this.toggleNow(this.$el, false);
            }
        },
        getActive: function getActive() {
            return active;
        },
        _toggleImmediate: function _toggleImmediate(el, show) {
            var _this = this;

            return new __WEBPACK_IMPORTED_MODULE_0__util_index__["Promise"](function (resolve) {
                return requestAnimationFrame(function () {
                    _this._toggle(el, show);

                    if (_this.transitionDuration) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["once"])(_this.transitionElement, 'transitionend', resolve, false, function (e) {
                            return e.target === _this.transitionElement;
                        });
                    } else {
                        resolve();
                    }
                });
            });
        }
    }

});

var events = void 0;

function registerEvents() {

    if (events) {
        return;
    }

    events = [Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(document, 'click', function (_ref2) {
        var target = _ref2.target,
            defaultPrevented = _ref2.defaultPrevented;

        if (active && active.bgClose && !defaultPrevented && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["within"])(target, active.panel || active.$el)) {
            active.hide();
        }
    }), Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(document, 'keydown', function (e) {
        if (e.keyCode === 27 && active && active.escClose) {
            e.preventDefault();
            active.hide();
        }
    })];
}

function deregisterEvents() {
    events && events.forEach(function (unbind) {
        return unbind();
    });
    events = null;
}

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = ({

    props: {
        pos: String,
        offset: null,
        flip: Boolean,
        clsPos: String
    },

    defaults: {
        pos: 'bottom-' + (!__WEBPACK_IMPORTED_MODULE_0__util_index__["isRtl"] ? 'left' : 'right'),
        flip: true,
        offset: false,
        clsPos: ''
    },

    computed: {
        pos: function pos(_ref) {
            var pos = _ref.pos;

            return (pos + (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(pos, '-') ? '-center' : '')).split('-');
        },
        dir: function dir() {
            return this.pos[0];
        },
        align: function align() {
            return this.pos[1];
        }
    },

    methods: {
        positionAt: function positionAt(element, target, boundary) {

            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClasses"])(element, this.clsPos + '-(top|bottom|left|right)(-[a-z]+)?');
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(element, { top: '', left: '' });

            var node = void 0;
            var offset = this.offset;


            offset = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isNumeric"])(offset) ? offset : (node = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(offset)) ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(node)[axis === 'x' ? 'left' : 'top'] - Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(target)[axis === 'x' ? 'right' : 'bottom'] : 0;

            var axis = this.getAxis();

            var _positionAt$target = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["positionAt"])(element, target, axis === 'x' ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["flipPosition"])(this.dir) + ' ' + this.align : this.align + ' ' + Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["flipPosition"])(this.dir), axis === 'x' ? this.dir + ' ' + this.align : this.align + ' ' + this.dir, axis === 'x' ? '' + (this.dir === 'left' ? -offset : offset) : ' ' + (this.dir === 'top' ? -offset : offset), null, this.flip, boundary).target,
                x = _positionAt$target.x,
                y = _positionAt$target.y;

            this.dir = axis === 'x' ? x : y;
            this.align = axis === 'x' ? y : x;

            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(element, this.clsPos + '-' + this.dir + '-' + this.align, this.offset === false);
        },
        getAxis: function getAxis() {
            return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
        }
    }

});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordion__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cover__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drop__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_custom__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gif__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__height_match__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__height_viewport__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__icon__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__leader__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__margin__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modal__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nav__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__offcanvas__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__responsive__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__scroll__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scrollspy__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__scrollspy_nav__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sticky__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__svg__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__switcher__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tab__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__toggle__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__video__ = __webpack_require__(90);





























/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    // core components
    UIkit.use(__WEBPACK_IMPORTED_MODULE_26__toggle__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__accordion__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_1__alert__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_27__video__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_3__cover__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_4__drop__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_5__dropdown__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_6__form_custom__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_9__height_match__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_10__height_viewport__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_13__margin__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_7__gif__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_8__grid__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_12__leader__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_14__modal__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_15__nav__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_16__navbar__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_17__offcanvas__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_18__responsive__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_19__scroll__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_20__scrollspy__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_21__scrollspy_nav__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_22__sticky__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_23__svg__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_11__icon__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_24__switcher__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_25__tab__["a" /* default */]);

    // core functionality
    UIkit.use(__WEBPACK_IMPORTED_MODULE_2__core__["a" /* default */]);
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('accordion', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */], __WEBPACK_IMPORTED_MODULE_0__mixin_index__["d" /* Togglable */]],

        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String
        },

        defaults: {
            targets: '> *',
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: 'uk-open',
            toggle: '> .uk-accordion-title',
            content: '> .uk-accordion-content',
            transition: 'ease'
        },

        computed: {
            items: function items(_ref, $el) {
                var targets = _ref.targets;

                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])(targets, $el);
            }
        },

        events: [{

            name: 'click',

            delegate: function delegate() {
                return this.targets + ' ' + this.$props.toggle;
            },
            handler: function handler(e) {
                e.preventDefault();
                this.toggle(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["index"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])(this.targets + ' ' + this.$props.toggle, this.$el), e.current));
            }
        }],

        connected: function connected() {

            if (this.active === false) {
                return;
            }

            var active = this.items[Number(this.active)];
            if (active && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(active, this.clsOpen)) {
                this.toggle(active, false);
            }
        },
        update: function update() {
            var _this = this;

            this.items.forEach(function (el) {
                return _this._toggleImmediate(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(_this.content, el), Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(el, _this.clsOpen));
            });

            var active = !this.collapsible && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.items, this.clsOpen) && this.items[0];
            if (active) {
                this.toggle(active, false);
            }
        },


        methods: {
            toggle: function toggle(item, animate) {
                var _this2 = this;

                var index = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["getIndex"])(item, this.items);
                var active = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["filter"])(this.items, '.' + this.clsOpen);

                item = this.items[index];

                item && [item].concat(!this.multiple && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(active, item) && active || []).forEach(function (el) {

                    var isItem = el === item;
                    var state = isItem && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(el, _this2.clsOpen);

                    if (!state && isItem && !_this2.collapsible && active.length < 2) {
                        return;
                    }

                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(el, _this2.clsOpen, state);

                    var content = el._wrapper ? el._wrapper.firstElementChild : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(_this2.content, el);

                    if (!el._wrapper) {
                        el._wrapper = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["wrapAll"])(content, '<div>');
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(el._wrapper, 'hidden', state ? '' : null);
                    }

                    _this2._toggleImmediate(content, true);
                    _this2.toggleElement(el._wrapper, state, animate).then(function () {
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(el, _this2.clsOpen) === state) {

                            if (!state) {
                                _this2._toggleImmediate(content, false);
                            }

                            el._wrapper = null;
                            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["unwrap"])(content);
                        }
                    });
                });
            }
        }

    });
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('alert', {

        attrs: true,

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */], __WEBPACK_IMPORTED_MODULE_0__mixin_index__["d" /* Togglable */]],

        args: 'animation',

        props: {
            close: String
        },

        defaults: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({ opacity: 0 }, __WEBPACK_IMPORTED_MODULE_0__mixin_index__["d" /* Togglable */].defaults.hideProps)
        },

        events: [{

            name: 'click',

            delegate: function delegate() {
                return this.selClose;
            },
            handler: function handler(e) {
                e.preventDefault();
                this.close();
            }
        }],

        methods: {
            close: function close() {
                var _this = this;

                this.toggleElement(this.$el).then(function () {
                    return _this.$destroy(true);
                });
            }
        }

    });
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["ready"])(function () {

        var scroll = 0;
        var started = 0;

        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(window, 'load resize', UIkit.update);
        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(window, 'scroll', function (e) {
            e.dir = scroll <= window.pageYOffset ? 'down' : 'up';
            e.scrollY = scroll = window.pageYOffset;
            UIkit.update(e);
        });

        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(document, 'animationstart', function (_ref) {
            var target = _ref.target;

            if ((Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {

                started++;
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(document.body, 'overflowX', 'hidden');
                setTimeout(function () {
                    if (! --started) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(document.body, 'overflowX', '');
                    }
                }, Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toMs"])(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(target, 'animationDuration')) + 100);
            }
        }, true);

        if (!__WEBPACK_IMPORTED_MODULE_0__util_index__["hasTouch"]) {
            return;
        }

        var cls = 'uk-hover';

        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(document, 'tap', function (_ref2) {
            var target = _ref2.target;
            return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])('.' + cls).forEach(function (el) {
                return !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["within"])(target, el) && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClass"])(el, cls);
            });
        });

        Object.defineProperty(UIkit, 'hoverSelector', {
            set: function set(selector) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(document, 'tap', selector, function (_ref3) {
                    var current = _ref3.current;
                    return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(current, cls);
                });
            }
        });

        UIkit.hoverSelector = '.uk-animation-toggle, .uk-transition-toggle, [uk-hover]';
    });
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('cover', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */], UIkit.components.video.options],

        props: {
            width: Number,
            height: Number
        },

        defaults: {
            automute: true
        },

        update: {
            write: function write() {

                var el = this.$el;

                if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(el)) {
                    return;
                }

                var _el$parentNode = el.parentNode,
                    height = _el$parentNode.offsetHeight,
                    width = _el$parentNode.offsetWidth;


                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el, { width: '', height: '' }), __WEBPACK_IMPORTED_MODULE_1__util_index__["Dimensions"].cover({
                    width: this.width || el.clientWidth,
                    height: this.height || el.clientHeight
                }, {
                    width: width + (width % 2 ? 1 : 0),
                    height: height + (height % 2 ? 1 : 0)
                }));
            },


            events: ['load', 'resize']

        },

        events: {
            loadedmetadata: function loadedmetadata() {
                this.$emit();
            }
        }

    });
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var active = void 0;

    UIkit.component('drop', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["c" /* Position */], __WEBPACK_IMPORTED_MODULE_0__mixin_index__["d" /* Togglable */]],

        args: 'pos',

        props: {
            mode: 'list',
            toggle: Boolean,
            boundary: 'query',
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },

        defaults: {
            mode: ['click', 'hover'],
            toggle: true,
            boundary: window,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            hoverIdle: 200,
            animation: ['uk-animation-fade'],
            cls: 'uk-open'
        },

        computed: {
            clsDrop: function clsDrop(_ref) {
                var clsDrop = _ref.clsDrop;

                return clsDrop || 'uk-' + this.$options.name;
            },
            clsPos: function clsPos() {
                return this.clsDrop;
            }
        },

        init: function init() {
            this.tracker = new __WEBPACK_IMPORTED_MODULE_1__util_index__["MouseTracker"]();
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, this.clsDrop);
        },
        connected: function connected() {
            var toggle = this.$props.toggle;

            this.toggle = toggle && UIkit.toggle(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(toggle) ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(toggle, this.$el) : this.$el.previousElementSibling, {
                target: this.$el,
                mode: this.mode
            });

            this.updateAria(this.$el);
        },


        events: [{

            name: 'click',

            delegate: function delegate() {
                return '.' + this.clsDrop + '-close';
            },
            handler: function handler(e) {
                e.preventDefault();
                this.hide(false);
            }
        }, {

            name: 'click',

            delegate: function delegate() {
                return 'a[href^="#"]';
            },
            handler: function handler(e) {

                if (e.defaultPrevented) {
                    return;
                }

                var id = e.target.hash;

                if (!id) {
                    e.preventDefault();
                }

                if (!id || !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(id, this.$el)) {
                    this.hide(false);
                }
            }
        }, {

            name: 'beforescroll',

            handler: function handler() {
                this.hide(false);
            }
        }, {

            name: 'toggle',

            self: true,

            handler: function handler(e, toggle) {

                e.preventDefault();

                if (this.isToggled()) {
                    this.hide(false);
                } else {
                    this.show(toggle, false);
                }
            }
        }, {

            name: __WEBPACK_IMPORTED_MODULE_1__util_index__["pointerEnter"],

            filter: function filter() {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(this.mode, 'hover');
            },
            handler: function handler(e) {

                if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e)) {
                    return;
                }

                if (active && active !== this && active.toggle && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(active.toggle.mode, 'hover') && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(e.target, active.toggle.$el) && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["pointInRect"])({ x: e.pageX, y: e.pageY }, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(active.$el))) {
                    active.hide(false);
                }

                e.preventDefault();
                this.show(this.toggle);
            }
        }, {

            name: 'toggleshow',

            handler: function handler(e, toggle) {

                if (toggle && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(toggle.target, this.$el)) {
                    return;
                }

                e.preventDefault();
                this.show(toggle || this.toggle);
            }
        }, {

            name: 'togglehide ' + __WEBPACK_IMPORTED_MODULE_1__util_index__["pointerLeave"],

            handler: function handler(e, toggle) {

                if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e) || toggle && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(toggle.target, this.$el)) {
                    return;
                }

                e.preventDefault();

                if (this.toggle && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(this.toggle.mode, 'hover')) {
                    this.hide();
                }
            }
        }, {

            name: 'beforeshow',

            self: true,

            handler: function handler() {
                this.clearTimers();
                this.position();
            }
        }, {

            name: 'show',

            self: true,

            handler: function handler() {
                this.tracker.init();
                if (this.toggle) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.toggle.$el, this.cls);
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.toggle.$el, 'aria-expanded', 'true');
                }
                registerEvent();
            }
        }, {

            name: 'beforehide',

            self: true,

            handler: function handler() {
                this.clearTimers();
            }
        }, {

            name: 'hide',

            handler: function handler(_ref2) {
                var target = _ref2.target;


                if (this.$el !== target) {
                    active = active === null && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(target, this.$el) && this.isToggled() ? this : active;
                    return;
                }

                active = this.isActive() ? null : active;

                if (this.toggle) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.toggle.$el, this.cls);
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.toggle.$el, 'aria-expanded', 'false');
                    this.toggle.$el.blur();
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])('a, button', this.toggle.$el).forEach(function (el) {
                        return el.blur();
                    });
                }

                this.tracker.cancel();
            }
        }],

        update: {
            write: function write() {

                if (this.isToggled() && !__WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].inProgress(this.$el)) {
                    this.position();
                }
            },


            events: ['resize']

        },

        methods: {
            show: function show(toggle) {
                var _this = this;

                var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


                var show = function show() {
                    return !_this.isToggled() && _this.toggleElement(_this.$el, true);
                };
                var tryShow = function tryShow() {

                    _this.toggle = toggle || _this.toggle;

                    _this.clearTimers();

                    if (_this.isActive()) {
                        return;
                    } else if (delay && active && active !== _this && active.isDelaying) {
                        _this.showTimer = setTimeout(_this.show, 10);
                        return;
                    } else if (_this.isParentOf(active)) {

                        if (active.hideTimer) {
                            active.hide(false);
                        } else {
                            return;
                        }
                    } else if (active && !_this.isChildOf(active) && !_this.isParentOf(active)) {

                        var prev = void 0;
                        while (active && active !== prev && !_this.isChildOf(active)) {
                            prev = active;
                            active.hide(false);
                        }
                    }

                    if (delay && _this.delayShow) {
                        _this.showTimer = setTimeout(show, _this.delayShow);
                    } else {
                        show();
                    }

                    active = _this;
                };

                if (toggle && this.toggle && toggle.$el !== this.toggle.$el) {

                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["once"])(this.$el, 'hide', tryShow);
                    this.hide(false);
                } else {
                    tryShow();
                }
            },
            hide: function hide() {
                var _this2 = this;

                var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


                var hide = function hide() {
                    return _this2.toggleNow(_this2.$el, false);
                };

                this.clearTimers();

                this.isDelaying = this.tracker.movesTo(this.$el);

                if (delay && this.isDelaying) {
                    this.hideTimer = setTimeout(this.hide, this.hoverIdle);
                } else if (delay && this.delayHide) {
                    this.hideTimer = setTimeout(hide, this.delayHide);
                } else {
                    hide();
                }
            },
            clearTimers: function clearTimers() {
                clearTimeout(this.showTimer);
                clearTimeout(this.hideTimer);
                this.showTimer = null;
                this.hideTimer = null;
                this.isDelaying = false;
            },
            isActive: function isActive() {
                return active === this;
            },
            isChildOf: function isChildOf(drop) {
                return drop && drop !== this && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(this.$el, drop.$el);
            },
            isParentOf: function isParentOf(drop) {
                return drop && drop !== this && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(drop.$el, this.$el);
            },
            position: function position() {

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClasses"])(this.$el, this.clsDrop + '-(stack|boundary)');
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, { top: '', left: '', display: 'block' });
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(this.$el, this.clsDrop + '-boundary', this.boundaryAlign);

                var boundary = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(this.boundary);
                var alignTo = this.boundaryAlign ? boundary : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(this.toggle.$el);

                if (this.align === 'justify') {
                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, prop, alignTo[prop]);
                } else if (this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, this.clsDrop + '-stack');
                }

                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'display', '');
            }
        }

    });

    UIkit.drop.getActive = function () {
        return active;
    };

    var registered = void 0;

    function registerEvent() {

        if (registered) {
            return;
        }

        registered = true;
        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(document, 'click', function (_ref3) {
            var target = _ref3.target,
                defaultPrevented = _ref3.defaultPrevented;

            var prev = void 0;

            if (defaultPrevented) {
                return;
            }

            while (active && active !== prev && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(target, active.$el) && !(active.toggle && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(target, active.toggle.$el))) {
                prev = active;
                active.hide(false);
            }
        });
    }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('dropdown', UIkit.components.drop.extend({ name: 'dropdown' }));
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('form-custom', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */]],

        args: 'target',

        props: {
            target: Boolean
        },

        defaults: {
            target: false
        },

        computed: {
            input: function input(_, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(__WEBPACK_IMPORTED_MODULE_1__util_index__["selInput"], $el);
            },
            state: function state() {
                return this.input.nextElementSibling;
            },
            target: function target(_ref, $el) {
                var target = _ref.target;

                return target && (target === true && this.input.parentNode === $el && this.input.nextElementSibling || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(target, $el));
            }
        },

        update: function update() {
            var target = this.target,
                input = this.input;


            if (!target) {
                return;
            }

            var option = void 0;

            target[Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isInput"])(target) ? 'value' : 'textContent'] = input.files && input.files[0] ? input.files[0].name : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["matches"])(input, 'select') && (option = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])('option', input).filter(function (el) {
                return el.selected;
            })[0]) ? option.textContent : input.value;
        },


        events: [{

            name: 'focusin focusout mouseenter mouseleave',

            delegate: __WEBPACK_IMPORTED_MODULE_1__util_index__["selInput"],

            handler: function handler(_ref2) {
                var type = _ref2.type,
                    current = _ref2.current;

                if (current === this.input) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(this.state, 'uk-' + (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(type, 'focus') ? 'focus' : 'hover'), Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(['focusin', 'mouseenter'], type));
                }
            }
        }, {

            name: 'change',

            handler: function handler() {
                this.$emit();
            }
        }]

    });
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    // Deprecated
    UIkit.component('gif', {

        update: {
            read: function read(data) {

                var inview = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(this.$el);

                if (!inview || data.isInView === inview) {
                    return false;
                }

                data.isInView = inview;
            },
            write: function write() {
                this.$el.src = this.$el.src;
            },


            events: ['scroll', 'load', 'resize']
        }

    });
});

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('grid', UIkit.components.margin.extend({

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */]],

        name: 'grid',

        defaults: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack'
        },

        update: {
            write: function write(_ref) {
                var stacks = _ref.stacks;


                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(this.$el, this.clsStack, stacks);
            },


            events: ['load', 'resize']

        }

    }));
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('height-match', {

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        defaults: {
            target: '> *',
            row: true
        },

        computed: {
            elements: function elements(_ref, $el) {
                var target = _ref.target;

                return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])(target, $el);
            }
        },

        update: {
            read: function read() {
                var _this = this;

                var lastOffset = false;

                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.elements, 'minHeight', '');

                return {
                    rows: !this.row ? [this.match(this.elements)] : this.elements.reduce(function (rows, el) {

                        if (lastOffset !== el.offsetTop) {
                            rows.push([el]);
                        } else {
                            rows[rows.length - 1].push(el);
                        }

                        lastOffset = el.offsetTop;

                        return rows;
                    }, []).map(function (elements) {
                        return _this.match(elements);
                    })
                };
            },
            write: function write(_ref2) {
                var rows = _ref2.rows;


                rows.forEach(function (_ref3) {
                    var height = _ref3.height,
                        elements = _ref3.elements;
                    return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(elements, 'minHeight', height);
                });
            },


            events: ['load', 'resize']

        },

        methods: {
            match: function match(elements) {

                if (elements.length < 2) {
                    return {};
                }

                var heights = [];
                var max = 0;

                elements.forEach(function (el) {

                    var style = void 0,
                        hidden = void 0;

                    if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(el)) {
                        style = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, 'style');
                        hidden = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, 'hidden');

                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, {
                            style: (style || '') + ';display:block !important;',
                            hidden: null
                        });
                    }

                    max = Math.max(max, el.offsetHeight);
                    heights.push(el.offsetHeight);

                    if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(style)) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, { style: style, hidden: hidden });
                    }
                });

                elements = elements.filter(function (el, i) {
                    return heights[i] < max;
                });

                return { height: max, elements: elements };
            }
        }

    });
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('height-viewport', {

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },

        defaults: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
        },

        update: {
            write: function write() {

                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, 'boxSizing', 'border-box');

                var viewport = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(window);
                var minHeight = void 0,
                    offsetTop = 0;

                if (this.expand) {

                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, { height: '', minHeight: '' });

                    var diff = viewport - offsetHeight(document.documentElement);

                    if (diff > 0) {
                        minHeight = offsetHeight(this.$el) + diff;
                    }
                } else {
                    var _offset = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(this.$el),
                        top = _offset.top;

                    if (top < viewport / 2 && this.offsetTop) {
                        offsetTop += top;
                    }

                    if (this.offsetBottom === true) {

                        offsetTop += offsetHeight(this.$el.nextElementSibling);
                    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isNumeric"])(this.offsetBottom)) {

                        offsetTop += viewport / 100 * this.offsetBottom;
                    } else if (this.offsetBottom && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["endsWith"])(this.offsetBottom, 'px')) {

                        offsetTop += Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toFloat"])(this.offsetBottom);
                    } else if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(this.offsetBottom)) {

                        offsetTop += offsetHeight(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["query"])(this.offsetBottom, this.$el));
                    }

                    // on mobile devices (iOS and Android) window.innerHeight !== 100vh
                    minHeight = offsetTop ? 'calc(100vh - ' + offsetTop + 'px)' : '100vh';
                }

                if (!minHeight) {
                    return;
                }

                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, { height: '', minHeight: minHeight });

                var elHeight = this.$el.offsetHeight;
                if (this.minHeight && this.minHeight > elHeight) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, 'minHeight', this.minHeight);
                }

                // IE 11 fix (min-height on a flex container won't apply to its flex items)
                if (viewport - offsetTop >= elHeight) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, 'height', minHeight);
                }
            },


            events: ['load', 'resize']

        }

    });

    function offsetHeight(el) {
        return el && el.offsetHeight || 0;
    }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg__);



















/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    var parsed = {};
    var icons = {
        spinner: __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg___default.a,
        totop: __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg___default.a,
        marker: __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg___default.a,
        'close-icon': __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg___default.a,
        'close-large': __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg___default.a,
        'navbar-toggle-icon': __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg___default.a,
        'overlay-icon': __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg___default.a,
        'pagination-next': __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg___default.a,
        'pagination-previous': __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg___default.a,
        'search-icon': __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg___default.a,
        'search-large': __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg___default.a,
        'search-navbar': __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg___default.a,
        'slidenav-next': __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg___default.a,
        'slidenav-next-large': __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg___default.a,
        'slidenav-previous': __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg___default.a,
        'slidenav-previous-large': __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg___default.a
    };

    UIkit.component('icon', UIkit.components.svg.extend({

        attrs: ['icon', 'ratio'],

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */]],

        name: 'icon',

        args: 'icon',

        props: ['icon'],

        defaults: { exclude: ['id', 'style', 'class', 'src', 'icon'] },

        init: function init() {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, 'uk-icon');

            if (__WEBPACK_IMPORTED_MODULE_1__util_index__["isRtl"]) {
                this.icon = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["swap"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["swap"])(this.icon, 'left', 'right'), 'previous', 'next');
            }
        },


        methods: {
            getSvg: function getSvg() {

                var icon = getIcon(this.icon);

                if (!icon) {
                    return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].reject('Icon not found.');
                }

                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"].resolve(icon);
            }
        }

    }));

    ['marker', 'navbar-toggle-icon', 'overlay-icon', 'pagination-previous', 'pagination-next', 'totop'].forEach(function (name) {
        return registerComponent(name);
    });

    ['slidenav-previous', 'slidenav-next'].forEach(function (name) {
        return registerComponent(name, {
            init: function init() {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, 'uk-slidenav');

                if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-slidenav-large')) {
                    this.icon += '-large';
                }
            }
        });
    });

    registerComponent('search-icon', {
        init: function init() {
            if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-search-icon') && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["parents"])(this.$el, '.uk-search-large').length) {
                this.icon = 'search-large';
            } else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["parents"])(this.$el, '.uk-search-navbar').length) {
                this.icon = 'search-navbar';
            }
        }
    });

    registerComponent('close', {
        init: function init() {
            this.icon = 'close-' + (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-close-large') ? 'large' : 'icon');
        }
    });

    registerComponent('spinner', {
        connected: function connected() {
            var _this = this;

            this.svg.then(function (svg) {
                return _this.ratio !== 1 && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('circle', svg), 'stroke-width', 1 / _this.ratio);
            }, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
        }
    });

    UIkit.icon.add = function (added) {
        Object.keys(added).forEach(function (name) {
            icons[name] = added[name];
            delete parsed[name];
        });

        if (UIkit._initialized) {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["apply"])(document.body, function (el) {
                var icon = UIkit.getComponent(el, 'icon');
                if (icon) {
                    icon.$reset();
                }
            });
        }
    };

    function registerComponent(name, mixin) {

        UIkit.component(name, UIkit.components.icon.extend({

            name: name,

            mixins: mixin ? [mixin] : [],

            defaults: {
                icon: name
            }

        }));
    }

    function getIcon(icon) {

        if (!icons[icon]) {
            return null;
        }

        if (!parsed[icon]) {
            parsed[icon] = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(icons[icon].trim());
        }

        return parsed[icon];
    }
});

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "/images/close-icon.svg?9652f4960cff4abc1521f38853837ef5";

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "/images/close-large.svg?b2767d6becdf2332e72897289a5b3c53";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "/images/marker.svg?e85b39a78a7bbdfa8ab713e0e1a192e5";

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "/images/navbar-toggle-icon.svg?6f00d26fd804a549e9b35b004cba552d";

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "/images/overlay-icon.svg?45d980667213049a92e53aaa8c4f8da8";

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "/images/pagination-next.svg?228f18c834c6e01773fa87024eb9183a";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "/images/pagination-previous.svg?7bc67a1779265456d2b8c0abc194f5a7";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "/images/search-icon.svg?d16a57020608fc1309fe08f9199989c2";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "/images/search-large.svg?10918d502ea37bdf74f6205a473db20d";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "/images/search-navbar.svg?5d4aed676d097f56932044a93f18a6cf";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "/images/slidenav-next.svg?9bb413cf26edba5cb4f586adbde97698";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "/images/slidenav-next-large.svg?8ac0ce4b76a692e1500abd997f6d9b2d";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "/images/slidenav-previous.svg?6e7704b458c51d53041555ca0509f995";

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "/images/slidenav-previous-large.svg?7355ec0656c39aef219720f52a3481eb";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "/images/spinner.svg?0c15308690898f570ef5ed09d7d958da";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "/images/totop.svg?da1d284eefdaec3eda29cd0ba8e8c143";

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('leader', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */]],

        props: {
            fill: String,
            media: 'media'
        },

        defaults: {
            fill: '',
            media: false,
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {
            fill: function fill(_ref) {
                var fill = _ref.fill;

                return fill || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["getCssVar"])('leader-fill');
            }
        },

        connected: function connected() {
            var _wrapInner = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["wrapInner"])(this.$el, '<span class="' + this.clsWrapper + '">');

            var _wrapInner2 = _slicedToArray(_wrapInner, 1);

            this.wrapper = _wrapInner2[0];
        },
        disconnected: function disconnected() {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["unwrap"])(this.wrapper.childNodes);
        },


        update: [{
            read: function read(_ref2) {
                var changed = _ref2.changed,
                    width = _ref2.width;


                var prev = width;

                width = Math.floor(this.$el.offsetWidth / 2);

                return {
                    width: width,
                    changed: changed || prev !== width,
                    hide: this.media && !window.matchMedia(this.media).matches
                };
            },
            write: function write(data) {

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(this.wrapper, this.clsHide, data.hide);

                if (data.changed) {
                    data.changed = false;
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.wrapper, this.attrFill, new Array(data.width).join(this.fill));
                }
            },


            events: ['load', 'resize']

        }]
    });
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('margin', {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        defaults: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        update: {
            read: function read(data) {

                var items = this.$el.children;

                if (!items.length || !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(this.$el)) {
                    return data.rows = false;
                }

                data.stacks = true;

                var rows = [[]];

                for (var i = 0; i < items.length; i++) {

                    var el = items[i];
                    var dim = el.getBoundingClientRect();

                    if (!dim.height) {
                        continue;
                    }

                    for (var j = rows.length - 1; j >= 0; j--) {

                        var row = rows[j];

                        if (!row[0]) {
                            row.push(el);
                            break;
                        }

                        var leftDim = row[0].getBoundingClientRect();

                        if (dim.top >= Math.floor(leftDim.bottom)) {
                            rows.push([el]);
                            break;
                        }

                        if (Math.floor(dim.bottom) > leftDim.top) {

                            data.stacks = false;

                            if (dim.left < leftDim.left && !__WEBPACK_IMPORTED_MODULE_0__util_index__["isRtl"]) {
                                row.unshift(el);
                                break;
                            }

                            row.push(el);
                            break;
                        }

                        if (j === 0) {
                            rows.unshift([el]);
                            break;
                        }
                    }
                }

                data.rows = rows;
            },
            write: function write(_ref) {
                var _this = this;

                var rows = _ref.rows;


                rows.forEach(function (row, i) {
                    return row.forEach(function (el, j) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(el, _this.margin, i !== 0);
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(el, _this.firstColumn, j === 0);
                    });
                });
            },


            events: ['load', 'resize']

        }

    });
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('modal', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Modal */]],

        defaults: {
            clsPage: 'uk-modal-page',
            selPanel: '.uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [{
            name: 'show',

            self: true,

            handler: function handler() {

                if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.panel, 'uk-margin-auto-vertical')) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, 'uk-flex');
                } else {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'display', 'block');
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(this.$el); // force reflow
            }
        }, {
            name: 'hidden',

            self: true,

            handler: function handler() {

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'display', '');
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.$el, 'uk-flex');
            }
        }]

    });

    UIkit.component('overflow-auto', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */]],

        computed: {
            modal: function modal(_, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["closest"])($el, '.uk-modal');
            },
            panel: function panel(_, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["closest"])($el, '.uk-modal-dialog');
            }
        },

        connected: function connected() {
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'minHeight', 150);
        },


        update: {
            write: function write() {

                if (!this.panel || !this.modal) {
                    return;
                }

                var current = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'maxHeight');

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'maxHeight', 150), 'maxHeight', Math.max(150, 150 + Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(this.modal) - this.panel.offsetHeight));
                if (current !== Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'maxHeight')) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.$el, 'resize');
                }
            },


            events: ['load', 'resize']

        }

    });

    UIkit.modal.dialog = function (content, options) {

        var dialog = UIkit.modal('\n            <div class="uk-modal">\n                <div class="uk-modal-dialog">' + content + '</div>\n             </div>\n        ', options);

        dialog.show();

        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(dialog.$el, 'hidden', function (_ref) {
            var target = _ref.target,
                currentTarget = _ref.currentTarget;

            if (target === currentTarget) {
                dialog.$destroy(true);
            }
        });

        return dialog;
    };

    UIkit.modal.alert = function (message, options) {

        options = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({ bgClose: false, escClose: false, labels: UIkit.modal.labels }, options);

        return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](function (resolve) {
            return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(UIkit.modal.dialog('\n                <div class="uk-modal-body">' + (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["html"])(message)) + '</div>\n                <div class="uk-modal-footer uk-text-right">\n                    <button class="uk-button uk-button-primary uk-modal-close" autofocus>' + options.labels.ok + '</button>\n                </div>\n            ', options).$el, 'hide', resolve);
        });
    };

    UIkit.modal.confirm = function (message, options) {

        options = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({ bgClose: false, escClose: true, labels: UIkit.modal.labels }, options);

        return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](function (resolve, reject) {

            var confirm = UIkit.modal.dialog('\n                <form>\n                    <div class="uk-modal-body">' + (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["html"])(message)) + '</div>\n                    <div class="uk-modal-footer uk-text-right">\n                        <button class="uk-button uk-button-default uk-modal-close" type="button">' + options.labels.cancel + '</button>\n                        <button class="uk-button uk-button-primary" autofocus>' + options.labels.ok + '</button>\n                    </div>\n                </form>\n            ', options);

            var resolved = false;

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(confirm.$el, 'submit', 'form', function (e) {
                e.preventDefault();
                resolve();
                resolved = true;
                confirm.hide();
            });
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(confirm.$el, 'hide', function () {
                if (!resolved) {
                    reject();
                }
            });
        });
    };

    UIkit.modal.prompt = function (message, value, options) {

        options = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({ bgClose: false, escClose: true, labels: UIkit.modal.labels }, options);

        return new __WEBPACK_IMPORTED_MODULE_1__util_index__["Promise"](function (resolve) {

            var prompt = UIkit.modal.dialog('\n                    <form class="uk-form-stacked">\n                        <div class="uk-modal-body">\n                            <label>' + (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["html"])(message)) + '</label>\n                            <input class="uk-input" autofocus>\n                        </div>\n                        <div class="uk-modal-footer uk-text-right">\n                            <button class="uk-button uk-button-default uk-modal-close" type="button">' + options.labels.cancel + '</button>\n                            <button class="uk-button uk-button-primary">' + options.labels.ok + '</button>\n                        </div>\n                    </form>\n                ', options),
                input = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('input', prompt.$el);

            input.value = value;

            var resolved = false;

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(prompt.$el, 'submit', 'form', function (e) {
                e.preventDefault();
                resolve(input.value);
                resolved = true;
                prompt.hide();
            });
            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["on"])(prompt.$el, 'hide', function () {
                if (!resolved) {
                    resolve(null);
                }
            });
        });
    };

    UIkit.modal.labels = {
        ok: 'Ok',
        cancel: 'Cancel'
    };
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('nav', UIkit.components.accordion.extend({

        name: 'nav',

        defaults: {
            targets: '> .uk-parent',
            toggle: '> a',
            content: '> ul'
        }

    }));
});

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('navbar', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */]],

        props: {
            dropdown: String,
            mode: 'list',
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: 'query',
            duration: Number
        },

        defaults: {
            dropdown: '.uk-navbar-nav > li',
            align: !__WEBPACK_IMPORTED_MODULE_1__util_index__["isRtl"] ? 'left' : 'right',
            clsDrop: 'uk-navbar-dropdown',
            mode: undefined,
            offset: undefined,
            delayShow: undefined,
            delayHide: undefined,
            boundaryAlign: undefined,
            flip: 'x',
            boundary: true,
            dropbar: false,
            dropbarMode: 'slide',
            dropbarAnchor: false,
            duration: 200
        },

        computed: {
            boundary: function boundary(_ref, $el) {
                var boundary = _ref.boundary,
                    boundaryAlign = _ref.boundaryAlign;

                return boundary === true || boundaryAlign ? $el : boundary;
            },
            pos: function pos(_ref2) {
                var align = _ref2.align;

                return 'bottom-' + align;
            }
        },

        beforeConnect: function beforeConnect() {
            var dropbar = this.$props.dropbar;


            this.dropbar = dropbar && (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(dropbar) && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(dropbar, this.$el) || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('<div></div>'));

            if (this.dropbar) {

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.dropbar, 'uk-navbar-dropbar');

                if (this.dropbarMode === 'slide') {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.dropbar, 'uk-navbar-dropbar-slide');
                }
            }
        },
        disconnected: function disconnected() {
            this.dropbar && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["remove"])(this.dropbar);
        },
        update: function update() {

            UIkit.drop(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])(this.dropdown + ' .' + this.clsDrop, this.$el).filter(function (el) {
                return !UIkit.getComponent(el, 'drop') && !UIkit.getComponent(el, 'dropdown');
            }), Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({}, this.$props, { boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset }));
        },


        events: [{
            name: 'mouseover',

            delegate: function delegate() {
                return this.dropdown;
            },
            handler: function handler(_ref3) {
                var current = _ref3.current;

                var active = this.getActive();
                if (active && active.toggle && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
                    active.hide(false);
                }
            }
        }, {
            name: 'mouseleave',

            el: function el() {
                return this.dropbar;
            },
            handler: function handler() {
                var active = this.getActive();

                if (active && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["matches"])(this.dropbar, ':hover')) {
                    active.hide();
                }
            }
        }, {
            name: 'beforeshow',

            capture: true,

            filter: function filter() {
                return this.dropbar;
            },
            handler: function handler() {

                if (!this.dropbar.parentNode) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["after"])(this.dropbarAnchor || this.$el, this.dropbar);
                }
            }
        }, {
            name: 'show',

            capture: true,

            filter: function filter() {
                return this.dropbar;
            },
            handler: function handler(_, drop) {
                var $el = drop.$el,
                    dir = drop.dir;


                this.clsDrop && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])($el, this.clsDrop + '-dropbar');

                if (dir === 'bottom') {
                    this.transitionTo($el.offsetHeight + Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])($el, 'marginTop')) + Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])($el, 'marginBottom')), $el);
                }
            }
        }, {
            name: 'beforehide',

            filter: function filter() {
                return this.dropbar;
            },
            handler: function handler(e, _ref4) {
                var $el = _ref4.$el;


                var active = this.getActive();

                if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["matches"])(this.dropbar, ':hover') && active && active.$el === $el) {
                    e.preventDefault();
                }
            }
        }, {
            name: 'hide',

            filter: function filter() {
                return this.dropbar;
            },
            handler: function handler(_, _ref5) {
                var $el = _ref5.$el;


                var active = this.getActive();

                if (!active || active && active.$el === $el) {
                    this.transitionTo(0);
                }
            }
        }],

        methods: {
            getActive: function getActive() {
                var active = UIkit.drop.getActive();
                return active && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["includes"])(active.mode, 'hover') && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(active.toggle.$el, this.$el) && active;
            },
            transitionTo: function transitionTo(newHeight, el) {
                var dropbar = this.dropbar;

                var oldHeight = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(dropbar) ? Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(dropbar) : 0;

                el = oldHeight < newHeight && el;

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el, { height: oldHeight, overflow: 'hidden' });
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(dropbar, oldHeight);

                __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].cancel([el, dropbar]);
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].start([el, dropbar], { height: newHeight }, this.duration).catch(__WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]).then(function () {
                    return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(el, { height: '', overflow: '' });
                });
            }
        }

    });
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



var scroll = void 0;

/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('offcanvas', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Modal */]],

        args: 'mode',

        props: {
            content: String,
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },

        defaults: {
            content: '.uk-offcanvas-content',
            mode: 'slide',
            flip: false,
            overlay: false,
            clsPage: 'uk-offcanvas-page',
            clsContainer: 'uk-offcanvas-container',
            selPanel: '.uk-offcanvas-bar',
            clsFlip: 'uk-offcanvas-flip',
            clsContent: 'uk-offcanvas-content',
            clsContentAnimation: 'uk-offcanvas-content-animation',
            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
            clsMode: 'uk-offcanvas',
            clsOverlay: 'uk-offcanvas-overlay',
            selClose: '.uk-offcanvas-close'
        },

        computed: {
            content: function content(_ref) {
                var content = _ref.content;

                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(content) || document.body;
            },
            clsFlip: function clsFlip(_ref2) {
                var flip = _ref2.flip,
                    clsFlip = _ref2.clsFlip;

                return flip ? clsFlip : '';
            },
            clsOverlay: function clsOverlay(_ref3) {
                var overlay = _ref3.overlay,
                    clsOverlay = _ref3.clsOverlay;

                return overlay ? clsOverlay : '';
            },
            clsMode: function clsMode(_ref4) {
                var mode = _ref4.mode,
                    clsMode = _ref4.clsMode;

                return clsMode + '-' + mode;
            },
            clsSidebarAnimation: function clsSidebarAnimation(_ref5) {
                var mode = _ref5.mode,
                    clsSidebarAnimation = _ref5.clsSidebarAnimation;

                return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
            },
            clsContentAnimation: function clsContentAnimation(_ref6) {
                var mode = _ref6.mode,
                    clsContentAnimation = _ref6.clsContentAnimation;

                return mode !== 'push' && mode !== 'reveal' ? '' : clsContentAnimation;
            },
            transitionElement: function transitionElement(_ref7) {
                var mode = _ref7.mode;

                return mode === 'reveal' ? this.panel.parentNode : this.panel;
            }
        },

        update: {
            write: function write() {

                if (this.getActive() === this) {

                    if (this.overlay || this.clsContentAnimation) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["width"])(this.content, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["width"])(window) - this.scrollbarWidth);
                    }

                    if (this.overlay) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(this.content, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(window));
                        if (scroll) {
                            this.content.scrollTop = scroll.y;
                        }
                    }
                }
            },


            events: ['resize']

        },

        events: [{

            name: 'click',

            delegate: function delegate() {
                return 'a[href^="#"]';
            },
            handler: function handler(_ref8) {
                var current = _ref8.current;

                if (current.hash && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(current.hash, this.content)) {
                    scroll = null;
                    this.hide();
                }
            }
        }, {

            name: 'beforescroll',

            filter: function filter() {
                return this.overlay;
            },
            handler: function handler(e, scroll, target) {
                if (scroll && target && this.isToggled() && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(target, this.content)) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["once"])(this.$el, 'hidden', function () {
                        return scroll.scrollTo(target);
                    });
                    e.preventDefault();
                }
            }
        }, {
            name: 'show',

            self: true,

            handler: function handler() {

                scroll = scroll || { x: window.pageXOffset, y: window.pageYOffset };

                if (this.mode === 'reveal' && !Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.panel, this.clsMode)) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["wrapAll"])(this.panel, '<div>');
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.panel.parentNode, this.clsMode);
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(document.documentElement, 'overflowY', (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? 'scroll' : '');
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(document.body, this.clsContainer, this.clsFlip, this.clsOverlay);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(document.body); // force reflow
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.content, this.clsContentAnimation);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, this.clsOverlay);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'display', 'block');
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(this.$el); // force reflow
            }
        }, {
            name: 'hide',

            self: true,

            handler: function handler() {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.content, this.clsContentAnimation);

                var active = this.getActive();
                if (this.mode === 'none' || active && active !== this && active !== this.prev) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.panel, 'transitionend');
                }
            }
        }, {
            name: 'hidden',

            self: true,

            handler: function handler() {

                if (this.mode === 'reveal') {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["unwrap"])(this.panel);
                }

                if (!this.overlay) {
                    scroll = { x: window.pageXOffset, y: window.pageYOffset };
                } else if (!scroll) {
                    var _content = this.content,
                        x = _content.scrollLeft,
                        y = _content.scrollTop;

                    scroll = { x: x, y: y };
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.panel, this.clsSidebarAnimation, this.clsMode);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.$el, this.clsOverlay);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'display', '');
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(document.body, this.clsContainer, this.clsFlip, this.clsOverlay);
                document.body.scrollTop = scroll.y;

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(document.documentElement, 'overflowY', '');

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["width"])(this.content, '');
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(this.content, '');

                window.scrollTo(scroll.x, scroll.y);

                scroll = null;
            }
        }, {
            name: 'swipeLeft swipeRight',

            handler: function handler(e) {

                if (this.isToggled() && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e) && (e.type === 'swipeLeft' && !this.flip || e.type === 'swipeRight' && this.flip)) {
                    this.hide();
                }
            }
        }]

    });
});

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('responsive', {

        props: ['width', 'height'],

        init: function init() {
            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(this.$el, 'uk-responsive-width');
        },


        update: {
            read: function read() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(this.$el) && this.width && this.height ? { width: Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["width"])(this.$el.parentNode), height: this.height } : false;
            },
            write: function write(dim) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(this.$el, __WEBPACK_IMPORTED_MODULE_0__util_index__["Dimensions"].contain({ height: this.height, width: this.width }, dim).height);
            },


            events: ['load', 'resize']

        }

    });
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('scroll', {

        props: {
            duration: Number,
            offset: Number
        },

        defaults: {
            duration: 1000,
            offset: 0
        },

        methods: {
            scrollTo: function scrollTo(el) {
                var _this = this;

                el = el && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(el) || document.body;

                var docHeight = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(document);
                var winHeight = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(window);

                var target = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(el).top - this.offset;
                if (target + winHeight > docHeight) {
                    target = docHeight - winHeight;
                }

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(this.$el, 'beforescroll', [this, el])) {
                    return;
                }

                var start = Date.now();
                var startY = window.pageYOffset;
                var step = function step() {

                    var currentY = startY + (target - startY) * ease(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["clamp"])((Date.now() - start) / _this.duration));

                    window.scrollTo(window.pageXOffset, currentY);

                    // scroll more if we have not reached our destination
                    if (currentY !== target) {
                        requestAnimationFrame(step);
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(_this.$el, 'scrolled', [_this, el]);
                    }
                };

                step();
            }
        },

        events: {
            click: function click(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["escape"])(this.$el.hash).substr(1));
            }
        }

    });

    function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
    }
});

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('scrollspy', {

        args: 'cls',

        props: {
            cls: 'list',
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        defaults: {
            cls: [],
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        },

        computed: {
            elements: function elements(_ref, $el) {
                var target = _ref.target;

                return target ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])(target, $el) : [$el];
            }
        },

        update: [{
            write: function write() {
                if (this.hidden) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["filter"])(this.elements, ':not(.' + this.inViewClass + ')'), 'visibility', 'hidden');
                }
            }
        }, {
            read: function read(els) {
                var _this = this;

                // Let child components be applied at least once first
                if (!UIkit._initialized) {

                    if (document.readyState === 'complete') {
                        requestAnimationFrame(function () {
                            return _this.$emit();
                        });
                    }

                    return false;
                }

                this.elements.forEach(function (el, i) {

                    var elData = els[i];

                    if (!elData || elData.el !== el) {
                        var cls = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["data"])(el, 'uk-scrollspy-class');
                        elData = { el: el, toggles: cls && cls.split(',') || _this.cls };
                    }

                    elData.show = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(el, _this.offsetTop, _this.offsetLeft);
                    els[i] = elData;
                });
            },
            write: function write(els) {
                var _this2 = this;

                var index = this.elements.length === 1 ? 1 : 0;

                this.elements.forEach(function (el, i) {

                    var elData = els[i];
                    var cls = elData.toggles[i] || elData.toggles[0];

                    if (elData.show && !elData.inview && !elData.timer) {

                        var show = function show() {
                            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(el, 'visibility', '');
                            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(el, _this2.inViewClass);
                            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(el, cls);

                            Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(el, 'inview');

                            UIkit.update(null, el);

                            elData.inview = true;
                            delete elData.timer;
                        };

                        if (_this2.delay && index) {
                            elData.timer = setTimeout(show, _this2.delay * index);
                        } else {
                            show();
                        }

                        index++;
                    } else if (!elData.show && elData.inview && _this2.repeat) {

                        if (elData.timer) {
                            clearTimeout(elData.timer);
                            delete elData.timer;
                        }

                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(el, 'visibility', _this2.hidden ? 'hidden' : '');
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClass"])(el, _this2.inViewClass);
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["toggleClass"])(el, cls);

                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(el, 'outview');

                        UIkit.update(null, el);

                        elData.inview = false;
                    }
                });
            },


            events: ['scroll', 'load', 'resize']

        }]

    });
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('scrollspy-nav', {

        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },

        defaults: {
            cls: 'uk-active',
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
        },

        computed: {
            links: function links(_, $el) {
                return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])('a[href^="#"]', $el).filter(function (el) {
                    return el.hash;
                });
            },
            elements: function elements() {
                return this.closest ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["closest"])(this.links, this.closest) : this.links;
            },
            targets: function targets() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$$"])(this.links.map(function (el) {
                    return el.hash;
                }).join(','));
            }
        },

        update: [{
            read: function read() {
                if (this.scroll) {
                    UIkit.scroll(this.links, { offset: this.offset || 0 });
                }
            }
        }, {
            read: function read(data) {
                var _this = this;

                var scroll = window.pageYOffset + this.offset + 1;
                var max = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(document) - Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["height"])(window) + this.offset;

                data.active = false;

                this.targets.every(function (el, i) {
                    var _offset = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(el),
                        top = _offset.top;

                    var last = i + 1 === _this.targets.length;

                    if (!_this.overflow && (i === 0 && top > scroll || last && top + el.offsetTop < scroll)) {
                        return false;
                    }

                    if (!last && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["offset"])(_this.targets[i + 1]).top <= scroll) {
                        return true;
                    }

                    if (scroll >= max) {
                        for (var j = _this.targets.length - 1; j > i; j--) {
                            if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(_this.targets[j])) {
                                el = _this.targets[j];
                                break;
                            }
                        }
                    }

                    return !(data.active = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["filter"])(_this.links, '[href="#' + el.id + '"]')));
                });
            },
            write: function write(_ref) {
                var active = _ref.active;


                this.links.forEach(function (el) {
                    return el.blur();
                });
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClass"])(this.elements, this.cls);

                if (active) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(this.$el, 'active', [active, Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["addClass"])(this.closest ? Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["closest"])(active, this.closest) : active, this.cls)]);
                }
            },


            events: ['scroll', 'load', 'resize']

        }]

    });
});

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('sticky', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */]],

        attrs: true,

        props: {
            top: null,
            bottom: Boolean,
            offset: Number,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: 'query',
            showOnUp: Boolean,
            media: 'media',
            target: Number
        },

        defaults: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: '',
            clsActive: 'uk-active',
            clsInactive: '',
            clsFixed: 'uk-sticky-fixed',
            clsBelow: 'uk-sticky-below',
            selTarget: '',
            widthElement: false,
            showOnUp: false,
            media: false,
            target: false
        },

        computed: {
            selTarget: function selTarget(_ref, $el) {
                var selTarget = _ref.selTarget;

                return selTarget && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(selTarget, $el) || $el;
            }
        },

        connected: function connected() {

            this.placeholder = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('<div class="uk-sticky-placeholder"></div>');
            this.widthElement = this.$props.widthElement || this.placeholder;

            if (!this.isActive) {
                this.hide();
            }
        },
        disconnected: function disconnected() {

            if (this.isActive) {
                this.isActive = false;
                this.hide();
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.selTarget, this.clsInactive);
            }

            Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["remove"])(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
        },
        ready: function ready() {
            var _this = this;

            if (!(this.target && location.hash && window.pageYOffset > 0)) {
                return;
            }

            var target = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(location.hash);

            if (target) {
                __WEBPACK_IMPORTED_MODULE_1__util_index__["fastdom"].read(function () {
                    var _offset = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(target),
                        top = _offset.top;

                    var elTop = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(_this.$el).top;
                    var elHeight = _this.$el.offsetHeight;

                    if (elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                        window.scrollTo(0, top - elHeight - _this.target - _this.offset);
                    }
                });
            }
        },


        events: [{
            name: 'active',

            self: true,

            handler: function handler() {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["replaceClass"])(this.selTarget, this.clsInactive, this.clsActive);
            }
        }, {
            name: 'inactive',

            self: true,

            handler: function handler() {
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["replaceClass"])(this.selTarget, this.clsActive, this.clsInactive);
            }
        }],

        update: [{
            write: function write() {
                var placeholder = this.placeholder;

                var outerHeight = (this.isActive ? placeholder : this.$el).offsetHeight;

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(placeholder, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({ height: Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, 'position') !== 'absolute' ? outerHeight : '' }, Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])));

                if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["within"])(placeholder, document)) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["after"])(this.$el, placeholder);
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(placeholder, 'hidden', '');
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.widthElement, 'hidden', null);
                this.width = this.widthElement.offsetWidth;
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.widthElement, 'hidden', this.isActive ? null : '');

                this.topOffset = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(this.isActive ? placeholder : this.$el).top;
                this.bottomOffset = this.topOffset + outerHeight;

                var bottom = parseProp('bottom', this);

                this.top = Math.max(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(parseProp('top', this)), this.topOffset) - this.offset;
                this.bottom = bottom && bottom - outerHeight;
                this.inactive = this.media && !window.matchMedia(this.media).matches;

                if (this.isActive) {
                    this.update();
                }
            },


            events: ['load', 'resize']

        }, {
            read: function read(_, _ref2) {
                var _ref2$scrollY = _ref2.scrollY,
                    scrollY = _ref2$scrollY === undefined ? window.pageYOffset : _ref2$scrollY;

                return {
                    scroll: this.scroll = scrollY,
                    visible: Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isVisible"])(this.$el)
                };
            },
            write: function write(_ref3) {
                var _this2 = this;

                var visible = _ref3.visible,
                    scroll = _ref3.scroll;

                var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                    dir = _ref4.dir;

                if (scroll < 0 || !visible || this.disabled || this.showOnUp && !dir) {
                    return;
                }

                if (this.inactive || scroll < this.top || this.showOnUp && (scroll <= this.top || dir === 'down' || dir === 'up' && !this.isActive && scroll <= this.bottomOffset)) {

                    if (!this.isActive) {
                        return;
                    }

                    this.isActive = false;

                    if (this.animation && scroll > this.topOffset) {
                        __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(this.$el);
                        __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].out(this.$el, this.animation).then(function () {
                            return _this2.hide();
                        }, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
                    } else {
                        this.hide();
                    }
                } else if (this.isActive) {

                    this.update();
                } else if (this.animation) {

                    __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(this.$el);
                    this.show();
                    __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].in(this.$el, this.animation).catch(__WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
                } else {
                    this.show();
                }
            },


            events: ['scroll']

        }],

        methods: {
            show: function show() {

                this.isActive = true;
                this.update();
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.placeholder, 'hidden', null);
            },
            hide: function hide() {

                if (!this.isActive || Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.selTarget, this.clsActive)) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.$el, 'inactive');
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.$el, this.clsFixed, this.clsBelow);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, { position: '', top: '', width: '' });
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.placeholder, 'hidden', '');
            },
            update: function update() {

                var active = this.top !== 0 || this.scroll > this.top;
                var top = Math.max(0, this.offset);

                if (this.bottom && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.scroll;
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["css"])(this.$el, {
                    position: 'fixed',
                    top: top + 'px',
                    width: this.width
                });

                if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.selTarget, this.clsActive)) {

                    if (!active) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.$el, 'inactive');
                    }
                } else if (active) {
                    Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["trigger"])(this.$el, 'active');
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toggleClass"])(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(this.$el, this.clsFixed);
            }
        }

    });

    function parseProp(prop, _ref5) {
        var $props = _ref5.$props,
            $el = _ref5.$el,
            propOffset = _ref5[prop + 'Offset'];


        var value = $props[prop];

        if (!value) {
            return;
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isNumeric"])(value)) {

            return propOffset + Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(value);
        } else if (Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(value) && value.match(/^-?\d+vh$/)) {

            return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["height"])(window) * Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["toFloat"])(value) / 100;
        } else {

            var el = value === true ? $el.parentNode : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(value, $el);

            if (el) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["offset"])(el).top + el.offsetHeight;
            }
        }
    }
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();



var svgs = {};

/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('svg', {

        attrs: true,

        props: {
            id: String,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            'class': String
        },

        defaults: {
            ratio: 1,
            id: false,
            exclude: ['src'],
            'class': ''
        },

        init: function init() {
            this.class += ' uk-svg';
        },
        connected: function connected() {
            var _this = this;

            if (!this.icon && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.src, '#')) {

                var parts = this.src.split('#');

                if (parts.length > 1) {
                    var _parts = _slicedToArray(parts, 2);

                    this.src = _parts[0];
                    this.icon = _parts[1];
                }
            }

            this.svg = this.getSvg().then(function (svg) {

                var el = void 0;

                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(svg)) {

                    if (_this.icon && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(svg, '<symbol')) {
                        svg = parseSymbols(svg, _this.icon) || svg;
                    }

                    el = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(svg.substr(svg.indexOf('<svg')));
                } else {
                    el = svg.cloneNode(true);
                }

                if (!el) {
                    return __WEBPACK_IMPORTED_MODULE_0__util_index__["Promise"].reject('SVG not found.');
                }

                var dimensions = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, 'viewBox');

                if (dimensions) {
                    dimensions = dimensions.split(' ');
                    _this.width = _this.$props.width || dimensions[2];
                    _this.height = _this.$props.height || dimensions[3];
                }

                _this.width *= _this.ratio;
                _this.height *= _this.ratio;

                for (var prop in _this.$options.props) {
                    if (_this[prop] && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(_this.exclude, prop)) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(el, prop, _this[prop]);
                    }
                }

                if (!_this.id) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeAttr"])(el, 'id');
                }

                if (_this.width && !_this.height) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeAttr"])(el, 'height');
                }

                if (_this.height && !_this.width) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeAttr"])(el, 'width');
                }

                var root = _this.$el;
                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVoidElement"])(root) || root.tagName === 'CANVAS') {

                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(root, { hidden: true, id: null });

                    var next = root.nextElementSibling;
                    if (next && el.isEqualNode(next)) {
                        el = next;
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["after"])(root, el);
                    }
                } else {

                    var last = root.lastElementChild;
                    if (last && el.isEqualNode(last)) {
                        el = last;
                    } else {
                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["append"])(root, el);
                    }
                }

                _this.svgEl = el;

                return el;
            }, __WEBPACK_IMPORTED_MODULE_0__util_index__["noop"]);
        },
        disconnected: function disconnected() {
            var _this2 = this;

            if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVoidElement"])(this.$el)) {
                Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["attr"])(this.$el, { hidden: null, id: this.id || null });
            }

            if (this.svg) {
                this.svg.then(function (svg) {
                    return (!_this2._connected || svg !== _this2.svgEl) && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["remove"])(svg);
                }, __WEBPACK_IMPORTED_MODULE_0__util_index__["noop"]);
            }

            this.svg = this.svgEl = null;
        },


        methods: {
            getSvg: function getSvg() {
                var _this3 = this;

                if (!this.src) {
                    return __WEBPACK_IMPORTED_MODULE_0__util_index__["Promise"].reject();
                }

                if (svgs[this.src]) {
                    return svgs[this.src];
                }

                svgs[this.src] = new __WEBPACK_IMPORTED_MODULE_0__util_index__["Promise"](function (resolve, reject) {

                    if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["startsWith"])(_this3.src, 'data:')) {
                        resolve(decodeURIComponent(_this3.src.split(',')[1]));
                    } else {

                        Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["ajax"])(_this3.src).then(function (xhr) {
                            return resolve(xhr.response);
                        }, function () {
                            return reject('SVG not found.');
                        });
                    }
                });

                return svgs[this.src];
            }
        }

    });

    var symbolRe = /<symbol(.*?id=(['"])(.*?)\2[^]*?<\/)symbol>/g;
    var symbols = {};

    function parseSymbols(svg, icon) {

        if (!symbols[svg]) {

            symbols[svg] = {};

            var match = void 0;
            while (match = symbolRe.exec(svg)) {
                symbols[svg][match[3]] = '<svg xmlns="http://www.w3.org/2000/svg"' + match[1] + 'svg>';
            }
        }

        return symbols[svg][icon];
    }
});

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('switcher', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["d" /* Togglable */]],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
        },

        defaults: {
            connect: '~.uk-switcher',
            toggle: '> *',
            active: 0,
            swiping: true,
            cls: 'uk-active',
            clsContainer: 'uk-switcher',
            attrItem: 'uk-switcher-item',
            queued: true
        },

        computed: {
            connects: function connects(_ref, $el) {
                var connect = _ref.connect;

                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["queryAll"])(connect, $el);
            },
            toggles: function toggles(_ref2, $el) {
                var toggle = _ref2.toggle;

                return Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["$$"])(toggle, $el);
            }
        },

        events: [{

            name: 'click',

            delegate: function delegate() {
                return this.toggle + ':not(.uk-disabled)';
            },
            handler: function handler(e) {
                e.preventDefault();
                this.show(e.current);
            }
        }, {
            name: 'click',

            el: function el() {
                return this.connects;
            },
            delegate: function delegate() {
                return '[' + this.attrItem + '],[data-' + this.attrItem + ']';
            },
            handler: function handler(e) {
                e.preventDefault();
                this.show(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["data"])(e.current, this.attrItem));
            }
        }, {
            name: 'swipeRight swipeLeft',

            filter: function filter() {
                return this.swiping;
            },
            el: function el() {
                return this.connects;
            },
            handler: function handler(e) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e)) {
                    return;
                }

                e.preventDefault();
                if (!window.getSelection().toString()) {
                    this.show(e.type === 'swipeLeft' ? 'next' : 'previous');
                }
            }
        }],

        update: function update() {
            var _this = this;

            this.connects.forEach(function (list) {
                return _this.updateAria(list.children);
            });
            this.show(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["filter"])(this.toggles, '.' + this.cls)[0] || this.toggles[this.active] || this.toggles[0]);
        },


        methods: {
            show: function show(item) {
                var _this2 = this;

                var length = this.toggles.length;

                var prev = !!this.connects.length && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["index"])(Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["filter"])(this.connects[0].children, '.' + this.cls)[0]);
                var hasPrev = prev >= 0;
                var dir = item === 'previous' ? -1 : 1;

                var toggle = void 0,
                    next = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["getIndex"])(item, this.toggles, prev);

                for (var i = 0; i < length; i++, next = (next + dir + length) % length) {
                    if (!Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["matches"])(this.toggles[next], '.uk-disabled, [disabled]')) {
                        toggle = this.toggles[next];
                        break;
                    }
                }

                if (!toggle || prev >= 0 && Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(toggle, this.cls) || prev === next) {
                    return;
                }

                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.toggles, this.cls);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(this.toggles, 'aria-expanded', false);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["addClass"])(toggle, this.cls);
                Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["attr"])(toggle, 'aria-expanded', true);

                this.connects.forEach(function (list) {
                    if (!hasPrev) {
                        _this2.toggleNow(list.children[next]);
                    } else {
                        _this2.toggleElement([list.children[prev], list.children[next]]);
                    }
                });
            }
        }

    });
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('tab', UIkit.components.switcher.extend({

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["a" /* Class */]],

        name: 'tab',

        props: {
            media: 'media'
        },

        defaults: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        init: function init() {

            var cls = Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-tab-left') ? 'uk-tab-left' : Object(__WEBPACK_IMPORTED_MODULE_1__util_index__["hasClass"])(this.$el, 'uk-tab-right') ? 'uk-tab-right' : false;

            if (cls) {
                UIkit.toggle(this.$el, { cls: cls, mode: 'media', media: this.media });
            }
        }
    }));
});

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('toggle', {

        mixins: [UIkit.mixin.togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list',
            media: 'media'
        },

        defaults: {
            href: false,
            target: false,
            mode: 'click',
            queued: true,
            media: false
        },

        computed: {
            target: function target(_ref, $el) {
                var href = _ref.href,
                    target = _ref.target;

                target = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["queryAll"])(target || href, $el);
                return target.length && target || [$el];
            }
        },

        events: [{

            name: __WEBPACK_IMPORTED_MODULE_0__util_index__["pointerEnter"] + ' ' + __WEBPACK_IMPORTED_MODULE_0__util_index__["pointerLeave"],

            filter: function filter() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.mode, 'hover');
            },
            handler: function handler(e) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isTouch"])(e)) {
                    this.toggle('toggle' + (e.type === __WEBPACK_IMPORTED_MODULE_0__util_index__["pointerEnter"] ? 'show' : 'hide'));
                }
            }
        }, {

            name: 'click',

            filter: function filter() {
                return Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.mode, 'click') || __WEBPACK_IMPORTED_MODULE_0__util_index__["hasTouch"];
            },
            handler: function handler(e) {

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isTouch"])(e) && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.mode, 'click')) {
                    return;
                }

                // TODO better isToggled handling
                var link = void 0;
                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["closest"])(e.target, 'a[href="#"], button') || (link = Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["closest"])(e.target, 'a[href]')) && (this.cls || !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(this.target) || link.hash && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["matches"])(this.target, link.hash))) {
                    Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["once"])(document, 'click', function (e) {
                        return e.preventDefault();
                    });
                }

                this.toggle();
            }
        }],

        update: {
            write: function write() {

                if (!Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["includes"])(this.mode, 'media') || !this.media) {
                    return;
                }

                var toggled = this.isToggled(this.target);
                if (window.matchMedia(this.media).matches ? !toggled : toggled) {
                    this.toggle();
                }
            },


            events: ['load', 'resize']

        },

        methods: {
            toggle: function toggle(type) {
                if (Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["trigger"])(this.target, type || 'toggle', [this])) {
                    this.toggleElement(this.target);
                }
            }
        }

    });
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {

    UIkit.component('video', {

        args: 'autoplay',

        props: {
            automute: Boolean,
            autoplay: Boolean
        },

        defaults: {
            automute: false,
            autoplay: true
        },

        computed: {
            inView: function inView(_ref) {
                var autoplay = _ref.autoplay;

                return autoplay === 'inview';
            }
        },

        connected: function connected() {

            if (this.inView && !Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasAttr"])(this.$el, 'preload')) {
                this.$el.preload = 'none';
            }
        },
        ready: function ready() {

            this.player = new __WEBPACK_IMPORTED_MODULE_0__util_index__["Player"](this.$el);

            if (this.automute) {
                this.player.mute();
            }
        },


        update: [{
            read: function read(_, _ref2) {
                var type = _ref2.type;


                return !this.player || (type === 'scroll' || type === 'resize') && !this.inView ? false : {
                    visible: Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVisible"])(this.$el) && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["css"])(this.$el, 'visibility') !== 'hidden',
                    inView: this.inView && Object(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(this.$el)
                };
            },
            write: function write(_ref3) {
                var visible = _ref3.visible,
                    inView = _ref3.inView;


                if (!visible || this.inView && !inView) {
                    this.player.pause();
                } else if (this.autoplay === true || this.inView && inView) {
                    this.player.play();
                }
            },


            events: ['load', 'resize', 'scroll']

        }]

    });
});

/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var _UIkit$util = UIkit.util,
        $ = _UIkit$util.$,
        empty = _UIkit$util.empty,
        html = _UIkit$util.html;


    UIkit.component('countdown', {

        mixins: [UIkit.mixin.class],

        attrs: true,

        props: {
            date: String,
            clsWrapper: String
        },

        defaults: {
            date: '',
            clsWrapper: '.uk-countdown-%unit%'
        },

        computed: {
            date: function date(_ref) {
                var date = _ref.date;

                return Date.parse(date);
            },
            days: function days(_ref2, $el) {
                var clsWrapper = _ref2.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'days'), $el);
            },
            hours: function hours(_ref3, $el) {
                var clsWrapper = _ref3.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'hours'), $el);
            },
            minutes: function minutes(_ref4, $el) {
                var clsWrapper = _ref4.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'minutes'), $el);
            },
            seconds: function seconds(_ref5, $el) {
                var clsWrapper = _ref5.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'seconds'), $el);
            },
            units: function units() {
                var _this = this;

                return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) {
                    return _this[unit];
                });
            }
        },

        connected: function connected() {
            this.start();
        },
        disconnected: function disconnected() {
            var _this2 = this;

            this.stop();
            this.units.forEach(function (unit) {
                return empty(_this2[unit]);
            });
        },


        events: [{

            name: 'visibilitychange',

            el: document,

            handler: function handler() {
                if (document.hidden) {
                    this.stop();
                } else {
                    this.start();
                }
            }
        }],

        update: {
            write: function write() {
                var _this3 = this;

                var timespan = getTimeSpan(this.date);

                if (timespan.total <= 0) {

                    this.stop();

                    timespan.days = timespan.hours = timespan.minutes = timespan.seconds = 0;
                }

                this.units.forEach(function (unit) {

                    var digits = String(Math.floor(timespan[unit]));

                    digits = digits.length < 2 ? '0' + digits : digits;

                    var el = _this3[unit];
                    if (el.textContent !== digits) {
                        digits = digits.split('');

                        if (digits.length !== el.children.length) {
                            html(el, digits.map(function () {
                                return '<span></span>';
                            }).join(''));
                        }

                        digits.forEach(function (digit, i) {
                            return el.children[i].textContent = digit;
                        });
                    }
                });
            }
        },

        methods: {
            start: function start() {
                var _this4 = this;

                this.stop();

                if (this.date && this.units.length) {
                    this.$emit();
                    this.timer = setInterval(function () {
                        return _this4.$emit();
                    }, 1000);
                }
            },
            stop: function stop() {

                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }
            }
        }

    });

    function getTimeSpan(date) {

        var total = date - Date.now();

        return {
            total: total,
            seconds: total / 1000 % 60,
            minutes: total / 1000 / 60 % 60,
            hours: total / 1000 / 60 / 60 % 24,
            days: total / 1000 / 60 / 60 / 24
        };
    }
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var _UIkit$util = UIkit.util,
        addClass = _UIkit$util.addClass,
        css = _UIkit$util.css,
        scrolledOver = _UIkit$util.scrolledOver,
        sortBy = _UIkit$util.sortBy,
        toFloat = _UIkit$util.toFloat;


    UIkit.component('grid-parallax', UIkit.components.grid.extend({

        props: {
            target: String,
            translate: Number
        },

        defaults: {
            target: false,
            translate: 150
        },

        computed: {
            translate: function translate(_ref) {
                var translate = _ref.translate;

                return Math.abs(translate);
            }
        },

        init: function init() {
            addClass(this.$el, 'uk-grid');
        },
        disconnected: function disconnected() {
            this.reset();
            css(this.$el, 'marginBottom', '');
        },


        update: [{
            read: function read(_ref2) {
                var rows = _ref2.rows;

                return {
                    columns: rows && rows[0] && rows[0].length || 0,
                    rows: rows && rows.map(function (elements) {
                        return sortBy(elements, 'offsetLeft');
                    })
                };
            },
            write: function write(_ref3) {
                var columns = _ref3.columns;

                css(this.$el, 'marginBottom', columns > 1 ? this.translate + toFloat(css(css(this.$el, 'marginBottom', ''), 'marginBottom')) : '');
            },


            events: ['load', 'resize']
        }, {
            read: function read() {
                return { scrolled: scrolledOver(this.$el) * this.translate };
            },
            write: function write(_ref4) {
                var rows = _ref4.rows,
                    columns = _ref4.columns,
                    scrolled = _ref4.scrolled;


                if (!rows || columns === 1 || !scrolled) {
                    return this.reset();
                }

                rows.forEach(function (row) {
                    return row.forEach(function (el, i) {
                        return css(el, 'transform', 'translateY(' + (i % 2 ? scrolled : scrolled / 8) + 'px)');
                    });
                });
            },


            events: ['scroll', 'load', 'resize']
        }],

        methods: {
            reset: function reset() {
                css(this.$el.children, 'transform', '');
            }
        }

    }));

    UIkit.components.gridParallax.options.update.unshift({
        read: function read() {
            this.reset();
        },


        events: ['load', 'resize']

    });
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__internal_lightbox_panel__ = __webpack_require__(94);


function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__internal_lightbox_panel__["a" /* default */]);

    var util = UIkit.util;
    var $$ = util.$$,
        assign = util.assign,
        data = util.data,
        index = util.index;
    var options = UIkit.components.lightboxPanel.options;


    UIkit.component('lightbox', {

        attrs: true,

        props: assign({ toggle: String }, options.props),

        defaults: assign({ toggle: 'a' }, Object.keys(options.props).reduce(function (defaults, key) {
            defaults[key] = options.defaults[key];
            return defaults;
        }, {})),

        computed: {
            toggles: function toggles(_ref, $el) {
                var toggle = _ref.toggle;

                return $$(toggle, $el);
            }
        },

        disconnected: function disconnected() {
            this._destroy();
        },


        events: [{

            name: 'click',

            delegate: function delegate() {
                return this.toggle + ':not(.uk-disabled)';
            },
            handler: function handler(e) {
                e.preventDefault();
                e.current.blur();
                this.show(index(this.toggles, e.current));
            }
        }],

        update: function update(data) {

            if (this.panel && this.animation) {
                this.panel.$props.animation = this.animation;
                this.panel.$emit();
            }

            if (!this.panel || data.toggles && isEqualList(data.toggles, this.toggles)) {
                return;
            }

            data.toggles = this.toggles;
            this._destroy();
            this._init();
        },


        methods: {
            _init: function _init() {
                return this.panel = this.panel || UIkit.lightboxPanel(assign({}, this.$props, {
                    items: this.toggles.reduce(function (items, el) {
                        items.push(['href', 'caption', 'type', 'poster', 'alt'].reduce(function (obj, attr) {
                            obj[attr === 'href' ? 'source' : attr] = data(el, attr);
                            return obj;
                        }, {}));
                        return items;
                    }, [])
                }));
            },
            _destroy: function _destroy() {
                if (this.panel) {
                    this.panel.$destroy(true);
                    this.panel = null;
                }
            },
            show: function show(index) {

                if (!this.panel) {
                    this._init();
                }

                return this.panel.show(index);
            },
            hide: function hide() {

                return this.panel && this.panel.hide();
            }
        }

    });

    function isEqualList(listA, listB) {
        return listA.length === listB.length && listA.every(function (el, i) {
            return el !== listB[i];
        });
    }
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lightbox_animations__ = __webpack_require__(99);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();




function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__["a" /* default */]);

    var mixin = UIkit.mixin,
        util = UIkit.util;
    var $ = util.$,
        addClass = util.addClass,
        ajax = util.ajax,
        append = util.append,
        assign = util.assign,
        attr = util.attr,
        css = util.css,
        getImage = util.getImage,
        html = util.html,
        index = util.index,
        on = util.on,
        pointerDown = util.pointerDown,
        pointerMove = util.pointerMove,
        removeClass = util.removeClass,
        Transition = util.Transition,
        trigger = util.trigger;


    var Animations = Object(__WEBPACK_IMPORTED_MODULE_1__lightbox_animations__["a" /* default */])(UIkit);

    UIkit.component('lightbox-panel', {

        mixins: [mixin.container, mixin.modal, mixin.togglable, mixin.slideshow],

        functional: true,

        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },

        defaults: {
            preload: 1,
            videoAutoplay: false,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            selList: '.uk-lightbox-items',
            attrItem: 'uk-lightbox-item',
            selClose: '.uk-close-large',
            pauseOnHover: false,
            velocity: 2,
            Animations: Animations,
            template: '<div class="uk-lightbox uk-overflow-hidden">\n                            <ul class="uk-lightbox-items"></ul>\n                            <div class="uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque">\n                                <button class="uk-lightbox-toolbar-icon uk-close-large" type="button" uk-close></button>\n                             </div>\n                            <a class="uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade" href="#" uk-slidenav-previous uk-lightbox-item="previous"></a>\n                            <a class="uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade" href="#" uk-slidenav-next uk-lightbox-item="next"></a>\n                            <div class="uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque"></div>\n                        </div>'
        },

        created: function created() {
            var _this = this;

            this.$mount(append(this.container, this.template));

            this.caption = $('.uk-lightbox-caption', this.$el);

            this.items.forEach(function () {
                return append(_this.list, '<li></li>');
            });
        },


        events: [{

            name: pointerMove + ' ' + pointerDown + ' keydown',

            handler: 'showControls'

        }, {

            name: 'click',

            self: true,

            delegate: function delegate() {
                return this.slidesSelector;
            },
            handler: function handler(e) {
                e.preventDefault();
                this.hide();
            }
        }, {

            name: 'shown',

            self: true,

            handler: 'showControls'
        }, {

            name: 'hide',

            self: true,

            handler: function handler() {

                this.hideControls();

                removeClass(this.slides, this.clsActive);
                Transition.stop(this.slides);
            }
        }, {

            name: 'keyup',

            el: document,

            handler: function handler(e) {

                if (!this.isToggled(this.$el)) {
                    return;
                }

                switch (e.keyCode) {
                    case 37:
                        this.show('previous');
                        break;
                    case 39:
                        this.show('next');
                        break;
                }
            }
        }, {

            name: 'beforeitemshow',

            handler: function handler(e) {

                if (this.isToggled()) {
                    return;
                }

                this.preventCatch = true;

                e.preventDefault();

                this.toggleNow(this.$el, true);

                this.animation = Animations['scale'];
                removeClass(e.target, this.clsActive);
                this.stack.splice(1, 0, this.index);
            }
        }, {

            name: 'itemshow',

            handler: function handler(_ref) {
                var target = _ref.target;


                var i = index(target);

                var _getItem = this.getItem(i),
                    caption = _getItem.caption;

                css(this.caption, 'display', caption ? '' : 'none');
                html(this.caption, caption);

                for (var j = 0; j <= this.preload; j++) {
                    this.loadItem(this.getIndex(i + j));
                    this.loadItem(this.getIndex(i - j));
                }
            }
        }, {

            name: 'itemshown',

            handler: function handler() {
                this.preventCatch = false;
            }
        }, {

            name: 'itemload',

            handler: function handler(_, item) {
                var _this2 = this;

                var source = item.source,
                    type = item.type,
                    alt = item.alt;


                this.setItem(item, '<span uk-spinner></span>');

                if (!source) {
                    return;
                }

                var matches = void 0;

                // Image
                if (type === 'image' || source.match(/\.(jp(e)?g|png|gif|svg)$/i)) {

                    getImage(source).then(function (img) {
                        return _this2.setItem(item, '<img width="' + img.width + '" height="' + img.height + '" src="' + source + '" alt="' + (alt ? alt : '') + '">');
                    }, function () {
                        return _this2.setError(item);
                    });

                    // Video
                } else if (type === 'video' || source.match(/\.(mp4|webm|ogv)$/i)) {

                    var video = $('<video controls playsinline' + (item.poster ? ' poster="' + item.poster + '"' : '') + ' uk-video="autoplay: ' + this.videoAutoplay + '"></video>');
                    attr(video, 'src', source);

                    on(video, 'error', function () {
                        return _this2.setError(item);
                    });
                    on(video, 'loadedmetadata', function () {
                        attr(video, { width: video.videoWidth, height: video.videoHeight });
                        _this2.setItem(item, video);
                    });

                    // Iframe
                } else if (type === 'iframe') {

                    this.setItem(item, '<iframe class="uk-lightbox-iframe" src="' + source + '" frameborder="0" allowfullscreen></iframe>');

                    // YouTube
                } else if (matches = source.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/watch\?v=([^&\s]+)/) || source.match(/()youtu\.be\/(.*)/)) {
                    var _matches = matches,
                        _matches2 = _slicedToArray(_matches, 3),
                        id = _matches2[2];

                    var setIframe = function setIframe() {
                        var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 640;
                        var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 450;
                        return _this2.setItem(item, getIframe('//www.youtube' + (matches[1] || '') + '.com/embed/' + id, width, height, _this2.videoAutoplay));
                    };

                    getImage('//img.youtube.com/vi/' + id + '/maxresdefault.jpg').then(function (_ref2) {
                        var width = _ref2.width,
                            height = _ref2.height;

                        // YouTube default 404 thumb, fall back to low resolution
                        if (width === 120 && height === 90) {
                            getImage('//img.youtube.com/vi/' + id + '/0.jpg').then(function (_ref3) {
                                var width = _ref3.width,
                                    height = _ref3.height;
                                return setIframe(width, height);
                            }, setIframe);
                        } else {
                            setIframe(width, height);
                        }
                    }, setIframe);

                    // Vimeo
                } else if (matches = source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) {

                    ajax('//vimeo.com/api/oembed.json?maxwidth=1920&url=' + encodeURI(source), { responseType: 'json' }).then(function (_ref4) {
                        var _ref4$response = _ref4.response,
                            height = _ref4$response.height,
                            width = _ref4$response.width;
                        return _this2.setItem(item, getIframe('//player.vimeo.com/video/' + matches[2], width, height, _this2.videoAutoplay));
                    });
                }
            }
        }],

        methods: {
            loadItem: function loadItem() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;


                var item = this.getItem(index);

                if (item.content) {
                    return;
                }

                trigger(this.$el, 'itemload', [item]);
            },
            getItem: function getItem() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;

                return this.items[index] || {};
            },
            setItem: function setItem(item, content) {
                assign(item, { content: content });
                var el = html(this.slides[this.items.indexOf(item)], content);
                trigger(this.$el, 'itemloaded', [this, el]);
                UIkit.update(null, el);
            },
            setError: function setError(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },
            showControls: function showControls() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                addClass(this.$el, 'uk-active', 'uk-transition-active');
            },
            hideControls: function hideControls() {
                removeClass(this.$el, 'uk-active', 'uk-transition-active');
            }
        }

    });

    function getIframe(src, width, height, autoplay) {
        return '<iframe src="' + src + '" width="' + width + '" height="' + height + '" style="max-width: 100%; box-sizing: border-box;" frameborder="0" allowfullscreen uk-video="autoplay: ' + autoplay + '" uk-responsive></iframe>';
    }
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var _UIkit$util = UIkit.util,
        createEvent = _UIkit$util.createEvent,
        clamp = _UIkit$util.clamp,
        css = _UIkit$util.css,
        Deferred = _UIkit$util.Deferred,
        noop = _UIkit$util.noop,
        Promise = _UIkit$util.Promise,
        Transition = _UIkit$util.Transition,
        trigger = _UIkit$util.trigger;


    function Transitioner(prev, next, dir, _ref) {
        var animation = _ref.animation,
            easing = _ref.easing;
        var _percent = animation.percent,
            _translate = animation.translate,
            _animation$show = animation.show,
            show = _animation$show === undefined ? noop : _animation$show;

        var props = show(dir);
        var deferred = new Deferred();

        return {

            dir: dir,

            show: function show(duration) {
                var _this = this;

                var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var linear = arguments[2];


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                triggerUpdate(next, 'itemin', { percent: percent, duration: duration, timing: timing, dir: dir });
                triggerUpdate(prev, 'itemout', { percent: 1 - percent, duration: duration, timing: timing, dir: dir });

                Promise.all([Transition.start(next, props[1], duration, timing), Transition.start(prev, props[0], duration, timing)]).then(function () {
                    _this.reset();
                    deferred.resolve();
                }, noop);

                return deferred.promise;
            },
            stop: function stop() {
                return Transition.stop([next, prev]);
            },
            cancel: function cancel() {
                Transition.cancel([next, prev]);
            },
            reset: function reset() {
                for (var prop in props[0]) {
                    css([next, prev], prop, '');
                }
            },
            forward: function forward(duration) {
                var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.percent();

                Transition.cancel([next, prev]);
                return this.show(duration, percent, true);
            },
            translate: function translate(percent) {

                this.reset();

                var props = _translate(percent, dir);
                css(next, props[1]);
                css(prev, props[0]);
                triggerUpdate(next, 'itemtranslatein', { percent: percent, dir: dir });
                triggerUpdate(prev, 'itemtranslateout', { percent: 1 - percent, dir: dir });
            },
            percent: function percent() {
                return _percent(prev || next, next, dir);
            },
            getDistance: function getDistance() {
                return prev.offsetWidth;
            }
        };
    }

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    return Transitioner;
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var pointerDown = UIkit.util.pointerDown;


    return {

        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },

        defaults: {
            autoplay: false,
            autoplayInterval: 7000,
            pauseOnHover: true
        },

        connected: function connected() {
            this.startAutoplay();
        },
        disconnected: function disconnected() {
            this.stopAutoplay();
        },


        events: [{

            name: 'visibilitychange',

            el: document,

            handler: function handler() {
                if (document.hidden) {
                    this.stopAutoplay();
                } else {
                    this.startAutoplay();
                }
            }
        }, {

            name: pointerDown,
            handler: 'stopAutoplay'

        }, {

            name: 'mouseenter',

            filter: function filter() {
                return this.autoplay;
            },
            handler: function handler() {
                this.isHovering = true;
            }
        }, {

            name: 'mouseleave',

            filter: function filter() {
                return this.autoplay;
            },
            handler: function handler() {
                this.isHovering = false;
            }
        }],

        methods: {
            startAutoplay: function startAutoplay() {
                var _this = this;

                this.stopAutoplay();

                if (this.autoplay) {
                    this.interval = setInterval(function () {
                        return !(_this.isHovering && _this.pauseOnHover) && !_this.stack.length && _this.show('next');
                    }, this.autoplayInterval);
                }
            },
            stopAutoplay: function stopAutoplay() {
                if (this.interval) {
                    clearInterval(this.interval);
                }
            }
        }

    };
});

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var _UIkit$util = UIkit.util,
        getPos = _UIkit$util.getPos,
        includes = _UIkit$util.includes,
        isRtl = _UIkit$util.isRtl,
        isTouch = _UIkit$util.isTouch,
        off = _UIkit$util.off,
        on = _UIkit$util.on,
        pointerDown = _UIkit$util.pointerDown,
        pointerMove = _UIkit$util.pointerMove,
        pointerUp = _UIkit$util.pointerUp,
        preventClick = _UIkit$util.preventClick,
        trigger = _UIkit$util.trigger;


    return {

        defaults: {
            threshold: 10,
            preventCatch: false
        },

        init: function init() {
            var _this = this;

            ['start', 'move', 'end'].forEach(function (key) {

                var fn = _this[key];
                _this[key] = function (e) {

                    var pos = getPos(e).x * (isRtl ? -1 : 1);

                    _this.prevPos = pos !== _this.pos ? _this.pos : _this.prevPos;
                    _this.pos = pos;

                    fn(e);
                };
            });
        },


        events: [{

            name: pointerDown,

            delegate: function delegate() {
                return this.slidesSelector;
            },
            handler: function handler(e) {

                if (!isTouch(e) && hasTextNodesOnly(e.target) || e.button > 0 || this.length < 2 || this.preventCatch) {
                    return;
                }

                this.start(e);
            }
        }, {
            name: 'dragstart',

            handler: function handler(e) {
                e.preventDefault();
            }
        }],

        methods: {
            start: function start() {

                this.drag = this.pos;

                if (this._transitioner) {

                    this.percent = this._transitioner.percent();
                    this.drag += this._transitioner.getDistance() * this.percent * this.dir;

                    this._transitioner.translate(this.percent);
                    this._transitioner.cancel();

                    this.dragging = true;

                    this.stack = [];
                } else {
                    this.prevIndex = this.index;
                }

                this.unbindMove = on(document, pointerMove, this.move, { capture: true, passive: false });
                on(window, 'scroll', this.unbindMove);
                on(document, pointerUp, this.end, true);
            },
            move: function move(e) {
                var _this2 = this;

                var distance = this.pos - this.drag;

                if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                    return;
                }

                e.cancelable && e.preventDefault();

                this.dragging = true;
                this.dir = distance < 0 ? 1 : -1;

                var slides = this.slides;
                var prevIndex = this.prevIndex;

                var dis = Math.abs(distance);
                var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                while (nextIndex !== prevIndex && dis > width) {

                    this.drag -= width * this.dir;

                    prevIndex = nextIndex;
                    dis -= width;
                    nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                    width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;
                }

                this.percent = dis / width;

                var prev = slides[prevIndex];
                var next = slides[nextIndex];
                var changed = this.index !== nextIndex;
                var edge = prevIndex === nextIndex;

                var itemShown = void 0;

                [this.index, this.prevIndex].filter(function (i) {
                    return !includes([nextIndex, prevIndex], i);
                }).forEach(function (i) {
                    trigger(slides[i], 'itemhidden', [_this2]);

                    if (edge) {
                        itemShown = true;
                        _this2.prevIndex = prevIndex;
                    }
                });

                if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
                    trigger(slides[this.index], 'itemshown', [this]);
                }

                if (changed) {
                    this.prevIndex = prevIndex;
                    this.index = nextIndex;

                    !edge && trigger(prev, 'beforeitemhide', [this]);
                    trigger(next, 'beforeitemshow', [this]);
                }

                this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

                if (changed) {
                    !edge && trigger(prev, 'itemhide', [this]);
                    trigger(next, 'itemshow', [this]);
                }
            },
            end: function end() {

                off(window, 'scroll', this.unbindMove);
                this.unbindMove();
                off(document, pointerUp, this.end, true);

                if (this.dragging) {

                    this.dragging = null;

                    if (this.index === this.prevIndex) {
                        this.percent = 1 - this.percent;
                        this.dir *= -1;
                        this._show(false, this.index, true);
                        this._transitioner = null;
                    } else {

                        var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                        this.index = dirChange ? this.index : this.prevIndex;

                        if (dirChange) {
                            this.percent = 1 - this.percent;
                        }

                        this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
                    }

                    preventClick();
                }

                this.drag = this.percent = null;
            }
        }

    };

    function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
    }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var _UIkit$util = UIkit.util,
        $ = _UIkit$util.$,
        $$ = _UIkit$util.$$,
        data = _UIkit$util.data,
        html = _UIkit$util.html,
        toggleClass = _UIkit$util.toggleClass,
        toNumber = _UIkit$util.toNumber;


    return {

        defaults: {
            selNav: false
        },

        computed: {
            nav: function nav(_ref, $el) {
                var selNav = _ref.selNav;

                return $(selNav, $el);
            },
            navItemSelector: function navItemSelector(_ref2) {
                var attrItem = _ref2.attrItem;

                return '[' + attrItem + '],[data-' + attrItem + ']';
            },
            navItems: function navItems(_, $el) {
                return $$(this.navItemSelector, $el);
            }
        },

        update: [{
            write: function write() {
                var _this = this;

                if (this.nav && this.length !== this.nav.children.length) {
                    html(this.nav, this.slides.map(function (_, i) {
                        return '<li ' + _this.attrItem + '="' + i + '"><a href="#"></a></li>';
                    }).join(''));
                }

                toggleClass($$(this.navItemSelector, this.$el).concat(this.nav), 'uk-hidden', !this.maxIndex);

                this.updateNav();
            },


            events: ['load', 'resize']

        }],

        events: [{

            name: 'click',

            delegate: function delegate() {
                return this.navItemSelector;
            },
            handler: function handler(e) {
                e.preventDefault();
                e.current.blur();
                this.show(data(e.current, this.attrItem));
            }
        }, {

            name: 'itemshow',
            handler: 'updateNav'

        }],

        methods: {
            updateNav: function updateNav() {
                var _this2 = this;

                var i = this.getValidIndex();
                this.navItems.forEach(function (el) {

                    var cmd = data(el, _this2.attrItem);

                    toggleClass(el, _this2.clsActive, toNumber(cmd) === i);
                    toggleClass(el, 'uk-invisible', _this2.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= _this2.maxIndex));
                });
            }
        }

    };
});

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var mixin = UIkit.mixin,
        _UIkit$util = UIkit.util,
        assign = _UIkit$util.assign,
        css = _UIkit$util.css;


    return assign({}, mixin.slideshow.defaults.Animations, {

        fade: {
            show: function show() {
                return [{ opacity: 0 }, { opacity: 1 }];
            },
            percent: function percent(current) {
                return 1 - css(current, 'opacity');
            },
            translate: function translate(percent) {
                return [{ opacity: 1 - percent }, { opacity: percent }];
            }
        },

        scale: {
            show: function show() {
                return [{ opacity: 0, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 - .2) }, { opacity: 1, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1) }];
            },
            percent: function percent(current) {
                return 1 - css(current, 'opacity');
            },
            translate: function translate(percent) {
                return [{ opacity: 1 - percent, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 - .2 * percent) }, { opacity: percent, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 - .2 + .2 * percent) }];
            }
        }

    });
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function plugin(UIkit) {
    var _events;

    if (plugin.installed) {
        return;
    }

    var _UIkit$util = UIkit.util,
        append = _UIkit$util.append,
        apply = _UIkit$util.apply,
        closest = _UIkit$util.closest,
        css = _UIkit$util.css,
        pointerEnter = _UIkit$util.pointerEnter,
        pointerLeave = _UIkit$util.pointerLeave,
        remove = _UIkit$util.remove,
        toFloat = _UIkit$util.toFloat,
        Transition = _UIkit$util.Transition,
        trigger = _UIkit$util.trigger;

    var containers = {};

    UIkit.component('notification', {

        functional: true,

        args: ['message', 'status'],

        defaults: {
            message: '',
            status: '',
            timeout: 5000,
            group: null,
            pos: 'top-center',
            clsClose: 'uk-notification-close',
            clsMsg: 'uk-notification-message'
        },

        created: function created() {

            if (!containers[this.pos]) {
                containers[this.pos] = append(UIkit.container, '<div class="uk-notification uk-notification-' + this.pos + '"></div>');
            }

            var container = css(containers[this.pos], 'display', 'block');

            this.$mount(append(container, '<div class="' + this.clsMsg + (this.status ? ' ' + this.clsMsg + '-' + this.status : '') + '">\n                    <a href="#" class="' + this.clsClose + '" data-uk-close></a>\n                    <div>' + this.message + '</div>\n                </div>'));
        },
        ready: function ready() {
            var _this = this;

            var marginBottom = toFloat(css(this.$el, 'marginBottom'));
            Transition.start(css(this.$el, { opacity: 0, marginTop: -this.$el.offsetHeight, marginBottom: 0 }), { opacity: 1, marginTop: 0, marginBottom: marginBottom }).then(function () {
                if (_this.timeout) {
                    _this.timer = setTimeout(_this.close, _this.timeout);
                }
            });
        },


        events: (_events = {
            click: function click(e) {
                if (closest(e.target, 'a[href="#"]')) {
                    e.preventDefault();
                }
                this.close();
            }
        }, _defineProperty(_events, pointerEnter, function () {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        }), _defineProperty(_events, pointerLeave, function () {
            if (this.timeout) {
                this.timer = setTimeout(this.close, this.timeout);
            }
        }), _events),

        methods: {
            close: function close(immediate) {
                var _this2 = this;

                var removeFn = function removeFn() {

                    trigger(_this2.$el, 'close', [_this2]);
                    remove(_this2.$el);

                    if (!containers[_this2.pos].children.length) {
                        css(containers[_this2.pos], 'display', 'none');
                    }
                };

                if (this.timer) {
                    clearTimeout(this.timer);
                }

                if (immediate) {
                    removeFn();
                } else {
                    Transition.start(this.$el, {
                        opacity: 0,
                        marginTop: -this.$el.offsetHeight,
                        marginBottom: 0
                    }).then(removeFn);
                }
            }
        }

    });

    UIkit.notification.closeAll = function (group, immediate) {
        apply(document.body, function (el) {
            var notification = UIkit.getComponent(el, 'notification');
            if (notification && (!group || group === notification.group)) {
                notification.close(immediate);
            }
        });
    };
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_parallax__ = __webpack_require__(23);


function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_parallax__["a" /* default */]);

    var mixin = UIkit.mixin,
        util = UIkit.util;
    var clamp = util.clamp,
        css = util.css,
        scrolledOver = util.scrolledOver,
        query = util.query;


    UIkit.component('parallax', {

        mixins: [mixin.parallax],

        props: {
            target: String,
            viewport: Number,
            easing: Number
        },

        defaults: {
            target: false,
            viewport: 1,
            easing: 1
        },

        computed: {
            target: function target(_ref, $el) {
                var target = _ref.target;

                return target && query(target, $el) || $el;
            }
        },

        update: [{
            read: function read(_ref2) {
                var percent = _ref2.percent;

                return {
                    prev: percent,
                    percent: ease(scrolledOver(this.target) / (this.viewport || 1), this.easing)
                };
            },
            write: function write(_ref3, _ref4) {
                var prev = _ref3.prev,
                    percent = _ref3.percent,
                    active = _ref3.active;
                var type = _ref4.type;


                if (type !== 'scroll') {
                    prev = false;
                }

                if (!active) {
                    this.reset();
                    return;
                }

                if (prev !== percent) {
                    css(this.$el, this.getCss(percent));
                }
            },


            events: ['scroll', 'load', 'resize']
        }]

    });

    function ease(percent, easing) {
        return clamp(percent * (1 - (easing - easing * percent)));
    }
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_slider__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_internal_slider_reactive__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_slider_transitioner__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__internal_slider_parallax__ = __webpack_require__(25);





function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_slider__["a" /* default */]);

    var mixin = UIkit.mixin,
        _UIkit$util = UIkit.util,
        $ = _UIkit$util.$,
        $$ = _UIkit$util.$$,
        addClass = _UIkit$util.addClass,
        css = _UIkit$util.css,
        data = _UIkit$util.data,
        includes = _UIkit$util.includes,
        isNumeric = _UIkit$util.isNumeric,
        isUndefined = _UIkit$util.isUndefined,
        toggleClass = _UIkit$util.toggleClass,
        toFloat = _UIkit$util.toFloat;

    var Transitioner = Object(__WEBPACK_IMPORTED_MODULE_2__internal_slider_transitioner__["a" /* default */])(UIkit);

    UIkit.component('slider-parallax', Object(__WEBPACK_IMPORTED_MODULE_3__internal_slider_parallax__["a" /* default */])(UIkit, 'slider'));

    UIkit.component('slider', {

        mixins: [mixin.class, mixin.slider, Object(__WEBPACK_IMPORTED_MODULE_1__mixin_internal_slider_reactive__["a" /* default */])(UIkit)],

        props: {
            center: Boolean,
            sets: Boolean
        },

        defaults: {
            center: false,
            sets: false,
            attrItem: 'uk-slider-item',
            selList: '.uk-slider-items',
            selNav: '.uk-slider-nav',
            clsContainer: 'uk-slider-container',
            Transitioner: Transitioner
        },

        computed: {
            avgWidth: function avgWidth() {
                return Transitioner.getWidth(this.list) / this.length;
            },
            finite: function finite(_ref) {
                var finite = _ref.finite;

                return finite || Transitioner.getWidth(this.list) < this.list.offsetWidth + Transitioner.getMaxWidth(this.list) + this.center;
            },
            maxIndex: function maxIndex() {

                if (!this.finite || this.center && !this.sets) {
                    return this.length - 1;
                }

                if (this.center) {
                    return this.sets[this.sets.length - 1];
                }

                css(this.slides, 'order', '');

                var max = Transitioner.getMax(this.list);
                var i = this.length;

                while (i--) {
                    if (Transitioner.getElLeft(this.list.children[i], this.list) < max) {
                        return Math.min(i + 1, this.length - 1);
                    }
                }

                return 0;
            },
            sets: function sets(_ref2) {
                var _this = this;

                var sets = _ref2.sets;


                var width = this.list.offsetWidth / (this.center ? 2 : 1);

                var left = 0;
                var leftCenter = width;
                var slideLeft = 0;

                sets = sets && this.slides.reduce(function (sets, slide, i) {

                    var slideWidth = slide.offsetWidth;
                    var slideRight = slideLeft + slideWidth;

                    if (slideRight > left) {

                        if (!_this.center && i > _this.maxIndex) {
                            i = _this.maxIndex;
                        }

                        if (!includes(sets, i)) {

                            var cmp = _this.slides[i + 1];
                            if (_this.center && cmp && slideWidth < leftCenter - cmp.offsetWidth / 2) {
                                leftCenter -= slideWidth;
                            } else {
                                leftCenter = width;
                                sets.push(i);
                                left = slideLeft + width + (_this.center ? slideWidth / 2 : 0);
                            }
                        }
                    }

                    slideLeft += slideWidth;

                    return sets;
                }, []);

                return sets && sets.length && sets;
            },
            transitionOptions: function transitionOptions() {
                return {
                    center: this.center,
                    list: this.list
                };
            }
        },

        connected: function connected() {
            toggleClass(this.$el, this.clsContainer, !$('.' + this.clsContainer, this.$el));
        },


        update: {
            write: function write() {
                var _this2 = this;

                $$('[' + this.attrItem + '],[data-' + this.attrItem + ']', this.$el).forEach(function (el) {
                    var index = data(el, _this2.attrItem);
                    _this2.maxIndex && toggleClass(el, 'uk-hidden', isNumeric(index) && (_this2.sets && !includes(_this2.sets, toFloat(index)) || index > _this2.maxIndex));
                });
            },


            events: ['load', 'resize']

        },

        events: {
            beforeitemshow: function beforeitemshow(e) {

                if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                    this.index = this.getValidIndex();
                }

                var diff = Math.abs(this.index - this.prevIndex + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0));

                if (!this.dragging && diff > 1) {

                    for (var i = 0; i < diff; i++) {
                        this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
                    }

                    e.preventDefault();
                    return;
                }

                this.duration = Object(__WEBPACK_IMPORTED_MODULE_0__mixin_slider__["b" /* speedUp */])(this.avgWidth / this.velocity) * ((this.dir < 0 || !this.slides[this.prevIndex] ? this.slides[this.index] : this.slides[this.prevIndex]).offsetWidth / this.avgWidth);

                this.reorder();
            },
            itemshow: function itemshow() {
                !isUndefined(this.prevIndex) && addClass(this._getTransitioner().getItemIn(), this.clsActive);
            },
            itemshown: function itemshown() {
                var _this3 = this;

                var actives = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (slide) {
                    return toggleClass(slide, _this3.clsActive, includes(actives, slide));
                });
                (!this.sets || includes(this.sets, toFloat(this.index))) && this.slides.forEach(function (slide) {
                    return toggleClass(slide, _this3.clsActivated, includes(actives, slide));
                });
            }
        },

        methods: {
            reorder: function reorder() {
                var _this4 = this;

                css(this.slides, 'order', '');

                if (this.finite) {
                    return;
                }

                var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;

                this.slides.forEach(function (slide, i) {
                    return css(slide, 'order', _this4.dir > 0 && i < index ? 1 : _this4.dir < 0 && i >= _this4.index ? -1 : '');
                });

                if (!this.center) {
                    return;
                }

                var next = this.slides[index];
                var width = this.list.offsetWidth / 2 - next.offsetWidth / 2;
                var j = 0;

                while (width > 0) {
                    var slideIndex = this.getIndex(--j + index, index);
                    var slide = this.slides[slideIndex];

                    css(slide, 'order', slideIndex > index ? -2 : -1);
                    width -= slide.offsetWidth;
                }
            },
            getValidIndex: function getValidIndex() {
                var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.index;
                var prevIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.prevIndex;


                index = this.getIndex(index, prevIndex);

                if (!this.sets) {
                    return index;
                }

                var prev = void 0;

                do {

                    if (includes(this.sets, index)) {
                        return index;
                    }

                    prev = index;
                    index = this.getIndex(index + this.dir, prevIndex);
                } while (index !== prev);

                return index;
            }
        }

    });
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var _UIkit$util = UIkit.util,
        assign = _UIkit$util.assign,
        clamp = _UIkit$util.clamp,
        createEvent = _UIkit$util.createEvent,
        css = _UIkit$util.css,
        Deferred = _UIkit$util.Deferred,
        includes = _UIkit$util.includes,
        index = _UIkit$util.index,
        isRtl = _UIkit$util.isRtl,
        noop = _UIkit$util.noop,
        sortBy = _UIkit$util.sortBy,
        toNodes = _UIkit$util.toNodes,
        Transition = _UIkit$util.Transition,
        trigger = _UIkit$util.trigger;


    var Transitioner = assign(function (prev, next, dir, _ref) {
        var center = _ref.center,
            easing = _ref.easing,
            list = _ref.list;


        var deferred = new Deferred();

        var from = prev ? Transitioner.getLeft(prev, list, center) : Transitioner.getLeft(next, list, center) + next.offsetWidth * dir,
            to = next ? Transitioner.getLeft(next, list, center) : from + prev.offsetWidth * dir * (isRtl ? -1 : 1);

        return {

            dir: dir,

            show: function show(duration) {
                var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                var linear = arguments[2];


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                prev && this.updateTranslates();
                percent = prev ? percent : clamp(percent, 0, 1);
                triggerUpdate(this.getItemIn(), 'itemin', { percent: percent, duration: duration, timing: timing, dir: dir });
                prev && triggerUpdate(this.getItemIn(true), 'itemout', { percent: 1 - percent, duration: duration, timing: timing, dir: dir });

                Transition.start(list, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-to * (isRtl ? -1 : 1), 'px') }, duration, timing).then(deferred.resolve, noop);

                return deferred.promise;
            },
            stop: function stop() {
                return Transition.stop(list);
            },
            cancel: function cancel() {
                Transition.cancel(list);
            },
            reset: function reset() {
                css(list, 'transform', '');
            },
            forward: function forward(duration) {
                var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.percent();

                Transition.cancel(list);
                return this.show(duration, percent, true);
            },
            translate: function translate(percent) {

                var distance = this.getDistance() * dir * (isRtl ? -1 : 1);

                css(list, 'transform', Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(clamp(-to + (distance - distance * percent), -Transitioner.getWidth(list), list.offsetWidth) * (isRtl ? -1 : 1), 'px'));

                this.updateTranslates();

                if (prev) {
                    percent = clamp(percent, -1, 1);
                    triggerUpdate(this.getItemIn(), 'itemtranslatein', { percent: percent, dir: dir });
                    triggerUpdate(this.getItemIn(true), 'itemtranslateout', { percent: 1 - percent, dir: dir });
                }
            },
            percent: function percent() {
                return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
            },
            getDistance: function getDistance() {
                return Math.abs(to - from);
            },
            getItemIn: function getItemIn() {
                var out = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;


                var actives = this.getActives();
                var all = sortBy(slides(list), 'offsetLeft');
                var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);

                return ~i && all[i + (prev && !out ? dir : 0)];
            },
            getActives: function getActives() {

                var left = Transitioner.getLeft(prev || next, list, center);

                return sortBy(slides(list).filter(function (slide) {
                    var slideLeft = Transitioner.getElLeft(slide, list);
                    return slideLeft >= left && slideLeft + slide.offsetWidth <= list.offsetWidth + left;
                }), 'offsetLeft');
            },
            updateTranslates: function updateTranslates() {

                var actives = this.getActives();

                slides(list).forEach(function (slide) {
                    var isActive = includes(actives, slide);

                    triggerUpdate(slide, 'itemtranslate' + (isActive ? 'in' : 'out'), {
                        percent: isActive ? 1 : 0,
                        dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
                    });
                });
            }
        };
    }, {
        getLeft: function getLeft(el, list, center) {

            var left = this.getElLeft(el, list);

            return center ? left - this.center(el, list) : Math.min(left, this.getMax(list));
        },
        getMax: function getMax(list) {
            return Math.max(0, this.getWidth(list) - list.offsetWidth);
        },
        getWidth: function getWidth(list) {
            return slides(list).reduce(function (right, el) {
                return el.offsetWidth + right;
            }, 0);
        },
        getMaxWidth: function getMaxWidth(list) {
            return slides(list).reduce(function (right, el) {
                return Math.max(right, el.offsetWidth);
            }, 0);
        },
        center: function center(el, list) {
            return list.offsetWidth / 2 - el.offsetWidth / 2;
        },
        getElLeft: function getElLeft(el, list) {
            return (el.offsetLeft + (isRtl ? el.offsetWidth - list.offsetWidth : 0)) * (isRtl ? -1 : 1);
        }
    });

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    function slides(list) {
        return toNodes(list.children);
    }

    return Transitioner;
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__internal_slideshow_animations__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__internal_slider_parallax__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixin_internal_slider_reactive__ = __webpack_require__(24);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();






function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__["a" /* default */]);

    var mixin = UIkit.mixin,
        height = UIkit.util.height;


    var Animations = Object(__WEBPACK_IMPORTED_MODULE_1__internal_slideshow_animations__["a" /* default */])(UIkit);

    UIkit.component('slideshow-parallax', Object(__WEBPACK_IMPORTED_MODULE_2__internal_slider_parallax__["a" /* default */])(UIkit, 'slideshow'));

    UIkit.component('slideshow', {

        mixins: [mixin.class, mixin.slideshow, Object(__WEBPACK_IMPORTED_MODULE_3__mixin_internal_slider_reactive__["a" /* default */])(UIkit)],

        props: {
            ratio: String,
            minHeight: Boolean,
            maxHeight: Boolean
        },

        defaults: {
            ratio: '16:9',
            minHeight: false,
            maxHeight: false,
            selList: '.uk-slideshow-items',
            attrItem: 'uk-slideshow-item',
            selNav: '.uk-slideshow-nav',
            Animations: Animations
        },

        update: {
            read: function read() {
                var _ratio$split$map = this.ratio.split(':').map(Number),
                    _ratio$split$map2 = _slicedToArray(_ratio$split$map, 2),
                    width = _ratio$split$map2[0],
                    height = _ratio$split$map2[1];

                height = height * this.$el.offsetWidth / width;

                if (this.minHeight) {
                    height = Math.max(this.minHeight, height);
                }

                if (this.maxHeight) {
                    height = Math.min(this.maxHeight, height);
                }

                return { height: height };
            },
            write: function write(_ref) {
                var hgt = _ref.height;

                height(this.list, Math.floor(hgt));
            },


            events: ['load', 'resize']

        }

    });
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (function (UIkit) {
    var mixin = UIkit.mixin,
        _UIkit$util = UIkit.util,
        assign = _UIkit$util.assign,
        css = _UIkit$util.css;


    var Animations = assign({}, mixin.slideshow.defaults.Animations, {

        fade: {
            show: function show() {
                return [{ opacity: 0, zIndex: 0 }, { zIndex: -1 }];
            },
            percent: function percent(current) {
                return 1 - css(current, 'opacity');
            },
            translate: function translate(percent) {
                return [{ opacity: 1 - percent, zIndex: 0 }, { zIndex: -1 }];
            }
        },

        scale: {
            show: function show() {
                return [{ opacity: 0, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 + .5), zIndex: 0 }, { zIndex: -1 }];
            },
            percent: function percent(current) {
                return 1 - css(current, 'opacity');
            },
            translate: function translate(percent) {
                return [{ opacity: 1 - percent, transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["b" /* scale3d */])(1 + .5 * percent), zIndex: 0 }, { zIndex: -1 }];
            }
        },

        pull: {
            show: function show(dir) {
                return dir < 0 ? [{ transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(30), zIndex: -1 }, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(), zIndex: 0 }] : [{ transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-100), zIndex: 0 }, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(), zIndex: -1 }];
            },
            percent: function percent(current, next, dir) {
                return dir < 0 ? 1 - Animations.translated(next) : Animations.translated(current);
            },
            translate: function translate(percent, dir) {
                return dir < 0 ? [{ transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(30 * percent), zIndex: -1 }, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-100 * (1 - percent)), zIndex: 0 }] : [{ transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-percent * 100), zIndex: 0 }, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(30 * (1 - percent)), zIndex: -1 }];
            }
        },

        push: {
            show: function show(dir) {
                return dir < 0 ? [{ transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(100), zIndex: 0 }, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(), zIndex: -1 }] : [{ transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-30), zIndex: -1 }, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(), zIndex: 0 }];
            },
            percent: function percent(current, next, dir) {
                return dir > 0 ? 1 - Animations.translated(next) : Animations.translated(current);
            },
            translate: function translate(percent, dir) {
                return dir < 0 ? [{ transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(percent * 100), zIndex: 0 }, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-30 * (1 - percent)), zIndex: -1 }] : [{ transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(-30 * percent), zIndex: -1 }, { transform: Object(__WEBPACK_IMPORTED_MODULE_0__mixin_internal_slideshow_animations__["c" /* translate */])(100 * (1 - percent)), zIndex: 0 }];
            }
        }

    });

    return Animations;
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var mixin = UIkit.mixin,
        util = UIkit.util;
    var addClass = util.addClass,
        after = util.after,
        assign = util.assign,
        append = util.append,
        attr = util.attr,
        before = util.before,
        closest = util.closest,
        css = util.css,
        height = util.height,
        fastdom = util.fastdom,
        getPos = util.getPos,
        includes = util.includes,
        index = util.index,
        isInput = util.isInput,
        noop = util.noop,
        offset = util.offset,
        off = util.off,
        on = util.on,
        pointerDown = util.pointerDown,
        pointerMove = util.pointerMove,
        pointerUp = util.pointerUp,
        position = util.position,
        preventClick = util.preventClick,
        Promise = util.Promise,
        _remove = util.remove,
        removeClass = util.removeClass,
        toggleClass = util.toggleClass,
        toNodes = util.toNodes,
        Transition = util.Transition,
        trigger = util.trigger,
        within = util.within;


    UIkit.component('sortable', {

        mixins: [mixin.class],

        props: {
            group: String,
            animation: Number,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },

        defaults: {
            group: false,
            animation: 150,
            threshold: 5,
            clsItem: 'uk-sortable-item',
            clsPlaceholder: 'uk-sortable-placeholder',
            clsDrag: 'uk-sortable-drag',
            clsDragState: 'uk-drag',
            clsBase: 'uk-sortable',
            clsNoDrag: 'uk-sortable-nodrag',
            clsEmpty: 'uk-sortable-empty',
            clsCustom: '',
            handle: false
        },

        init: function init() {
            var _this = this;

            ['init', 'start', 'move', 'end'].forEach(function (key) {
                var fn = _this[key];
                _this[key] = function (e) {
                    _this.scrollY = window.pageYOffset;

                    var _getPos = getPos(e),
                        x = _getPos.x,
                        y = _getPos.y;

                    _this.pos = { x: x, y: y };

                    fn(e);
                };
            });
        },


        events: _defineProperty({}, pointerDown, 'init'),

        update: {
            write: function write() {

                if (this.clsEmpty) {
                    toggleClass(this.$el, this.clsEmpty, !this.$el.children.length);
                }

                if (!this.drag) {
                    return;
                }

                offset(this.drag, { top: this.pos.y + this.origin.top, left: this.pos.x + this.origin.left });

                var _offset = offset(this.drag),
                    top = _offset.top;

                var bottom = top + this.drag.offsetHeight;
                var scroll = void 0;

                if (top > 0 && top < this.scrollY) {
                    scroll = this.scrollY - 5;
                } else if (bottom < height(document) && bottom > height(window) + this.scrollY) {
                    scroll = this.scrollY + 5;
                }

                scroll && setTimeout(function () {
                    return window.scrollTo(window.scrollX, scroll);
                }, 5);
            }
        },

        methods: {
            init: function init(e) {
                var target = e.target,
                    button = e.button,
                    defaultPrevented = e.defaultPrevented;

                var _toNodes$filter = toNodes(this.$el.children).filter(function (el) {
                    return within(target, el);
                }),
                    _toNodes$filter2 = _slicedToArray(_toNodes$filter, 1),
                    placeholder = _toNodes$filter2[0];

                if (!placeholder || isInput(e.target) || this.handle && !within(target, this.handle) || button > 0 || within(target, '.' + this.clsNoDrag) || defaultPrevented) {
                    return;
                }

                e.preventDefault();

                this.touched = [this];
                this.placeholder = placeholder;
                this.origin = assign({ target: target, index: index(placeholder) }, this.pos);

                on(document, pointerMove, this.move);
                on(document, pointerUp, this.end);
                on(window, 'scroll', this.scroll);

                if (!this.threshold) {
                    this.start(e);
                }
            },
            start: function start(e) {

                this.drag = append(UIkit.container, this.placeholder.outerHTML.replace(/^<li/i, '<div').replace(/li>$/i, 'div>'));

                css(this.drag, assign({
                    boxSizing: 'border-box',
                    width: this.placeholder.offsetWidth,
                    height: this.placeholder.offsetHeight
                }, css(this.placeholder, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));
                attr(this.drag, 'uk-no-boot', '');
                addClass(this.drag, this.clsDrag, this.clsCustom);

                height(this.drag.firstElementChild, height(this.placeholder.firstElementChild));

                var _offset2 = offset(this.placeholder),
                    left = _offset2.left,
                    top = _offset2.top;

                assign(this.origin, { left: left - this.pos.x, top: top - this.pos.y });

                addClass(this.placeholder, this.clsPlaceholder);
                addClass(this.$el.children, this.clsItem);
                addClass(document.documentElement, this.clsDragState);

                trigger(this.$el, 'start', [this, this.placeholder, this.drag]);

                this.move(e);
            },
            move: function move(e) {

                if (!this.drag) {

                    if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                        this.start(e);
                    }

                    return;
                }

                this.$emit();

                var target = e.type === 'mousemove' ? e.target : document.elementFromPoint(this.pos.x - document.body.scrollLeft, this.pos.y - document.body.scrollTop);

                var sortable = getSortable(target);
                var previous = getSortable(this.placeholder);
                var move = sortable !== previous;

                if (!sortable || within(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
                    return;
                }

                target = sortable.$el === target.parentNode && target || toNodes(sortable.$el.children).filter(function (element) {
                    return within(target, element);
                })[0];

                if (move) {
                    previous.remove(this.placeholder);
                } else if (!target) {
                    return;
                }

                sortable.insert(this.placeholder, target);

                if (!includes(this.touched, sortable)) {
                    this.touched.push(sortable);
                }
            },
            scroll: function scroll() {
                var scroll = window.pageYOffset;
                if (scroll !== this.scrollY) {
                    this.pos.y += scroll - this.scrollY;
                    this.scrollY = scroll;
                    this.$emit();
                }
            },
            end: function end(e) {

                off(document, pointerMove, this.move);
                off(document, pointerUp, this.end);
                off(window, 'scroll', this.scroll);

                if (!this.drag) {

                    if (e.type !== 'mouseup' && within(e.target, 'a[href]')) {
                        location.href = closest(e.target, 'a[href]').href;
                    }

                    return;
                }

                preventClick();

                var sortable = getSortable(this.placeholder);

                if (this === sortable) {
                    if (this.origin.index !== index(this.placeholder)) {
                        trigger(this.$el, 'moved', [this, this.placeholder]);
                    }
                } else {
                    trigger(sortable.$el, 'added', [sortable, this.placeholder]);
                    trigger(this.$el, 'removed', [this, this.placeholder]);
                }

                trigger(this.$el, 'stop', [this]);

                _remove(this.drag);
                this.drag = null;

                var classes = this.touched.map(function (sortable) {
                    return sortable.clsPlaceholder + ' ' + sortable.clsItem;
                }).join(' ');
                this.touched.forEach(function (sortable) {
                    return removeClass(sortable.$el.children, classes);
                });

                removeClass(document.documentElement, this.clsDragState);
            },
            insert: function insert(element, target) {
                var _this2 = this;

                addClass(this.$el.children, this.clsItem);

                var insert = function insert() {

                    if (target) {

                        if (!within(element, _this2.$el) || isPredecessor(element, target)) {
                            before(target, element);
                        } else {
                            after(target, element);
                        }
                    } else {
                        append(_this2.$el, element);
                    }
                };

                if (this.animation) {
                    this.animate(insert);
                } else {
                    insert();
                }
            },
            remove: function remove(element) {

                if (!within(element, this.$el)) {
                    return;
                }

                if (this.animation) {
                    this.animate(function () {
                        return _remove(element);
                    });
                } else {
                    _remove(element);
                }
            },
            animate: function animate(action) {
                var _this3 = this;

                var props = [];
                var children = toNodes(this.$el.children);
                var reset = { position: '', width: '', height: '', pointerEvents: '', top: '', left: '', bottom: '', right: '' };

                children.forEach(function (el) {
                    props.push(assign({
                        position: 'absolute',
                        pointerEvents: 'none',
                        width: el.offsetWidth,
                        height: el.offsetHeight
                    }, position(el)));
                });

                action();

                children.forEach(Transition.cancel);
                css(this.$el.children, reset);
                this.$update('update', true);
                fastdom.flush();

                css(this.$el, 'minHeight', height(this.$el));

                var positions = children.map(function (el) {
                    return position(el);
                });
                Promise.all(children.map(function (el, i) {
                    return Transition.start(css(el, props[i]), positions[i], _this3.animation);
                })).then(function () {
                    css(_this3.$el, 'minHeight', '');
                    css(children, reset);
                    _this3.$update('update', true);
                    fastdom.flush();
                }, noop);
            }
        }

    });

    function getSortable(element) {
        return element && (UIkit.getComponent(element, 'sortable') || getSortable(element.parentNode));
    }

    function isPredecessor(element, target) {
        return element.parentNode === target.parentNode && index(element) > index(target);
    }
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function plugin(UIkit) {
    var _events;

    if (plugin.installed) {
        return;
    }

    var util = UIkit.util,
        mixin = UIkit.mixin;
    var append = util.append,
        attr = util.attr,
        flipPosition = util.flipPosition,
        hasAttr = util.hasAttr,
        includes = util.includes,
        isTouch = util.isTouch,
        isVisible = util.isVisible,
        matches = util.matches,
        on = util.on,
        pointerDown = util.pointerDown,
        pointerEnter = util.pointerEnter,
        pointerLeave = util.pointerLeave,
        remove = util.remove,
        within = util.within;


    var actives = [];

    UIkit.component('tooltip', {

        attrs: true,

        args: 'title',

        mixins: [mixin.container, mixin.togglable, mixin.position],

        props: {
            delay: Number,
            title: String
        },

        defaults: {
            pos: 'top',
            title: '',
            delay: 0,
            animation: ['uk-animation-scale-up'],
            duration: 100,
            cls: 'uk-active',
            clsPos: 'uk-tooltip'
        },

        beforeConnect: function beforeConnect() {
            this._hasTitle = hasAttr(this.$el, 'title');
            attr(this.$el, { title: '', 'aria-expanded': false });
        },
        disconnected: function disconnected() {
            this.hide();
            attr(this.$el, { title: this._hasTitle ? this.title : null, 'aria-expanded': null });
        },


        methods: {
            show: function show() {
                var _this = this;

                if (includes(actives, this)) {
                    return;
                }

                actives.forEach(function (active) {
                    return active.hide();
                });
                actives.push(this);

                this._unbind = on(document, 'click', function (e) {
                    return !within(e.target, _this.$el) && _this.hide();
                });

                clearTimeout(this.showTimer);

                this.tooltip = append(this.container, '<div class="' + this.clsPos + '" aria-hidden><div class="' + this.clsPos + '-inner">' + this.title + '</div></div>');

                attr(this.$el, 'aria-expanded', true);

                this.positionAt(this.tooltip, this.$el);

                this.origin = this.getAxis() === 'y' ? flipPosition(this.dir) + '-' + this.align : this.align + '-' + flipPosition(this.dir);

                this.showTimer = setTimeout(function () {

                    _this.toggleElement(_this.tooltip, true);

                    _this.hideTimer = setInterval(function () {

                        if (!isVisible(_this.$el)) {
                            _this.hide();
                        }
                    }, 150);
                }, this.delay);
            },
            hide: function hide() {

                var index = actives.indexOf(this);

                if (!~index || matches(this.$el, 'input') && this.$el === document.activeElement) {
                    return;
                }

                actives.splice(index, 1);

                clearTimeout(this.showTimer);
                clearInterval(this.hideTimer);
                attr(this.$el, 'aria-expanded', false);
                this.toggleElement(this.tooltip, false);
                this.tooltip && remove(this.tooltip);
                this.tooltip = false;
                this._unbind();
            }
        },

        events: (_events = {}, _defineProperty(_events, 'focus ' + pointerEnter + ' ' + pointerDown, function undefined(e) {
            if (e.type !== pointerDown || !isTouch(e)) {
                this.show();
            }
        }), _defineProperty(_events, 'blur', 'hide'), _defineProperty(_events, pointerLeave, function (e) {
            if (!isTouch(e)) {
                this.hide();
            }
        }), _events)

    });
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var _UIkit$util = UIkit.util,
        addClass = _UIkit$util.addClass,
        ajax = _UIkit$util.ajax,
        matches = _UIkit$util.matches,
        noop = _UIkit$util.noop,
        on = _UIkit$util.on,
        removeClass = _UIkit$util.removeClass,
        trigger = _UIkit$util.trigger;


    UIkit.component('upload', {

        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },

        defaults: {
            allow: false,
            clsDragover: 'uk-dragover',
            concurrent: 1,
            maxSize: 0,
            mime: false,
            msgInvalidMime: 'Invalid File Type: %s',
            msgInvalidName: 'Invalid File Name: %s',
            msgInvalidSize: 'Invalid File Size: %s Bytes Max',
            multiple: false,
            name: 'files[]',
            params: {},
            type: 'POST',
            url: '',
            abort: noop,
            beforeAll: noop,
            beforeSend: noop,
            complete: noop,
            completeAll: noop,
            error: noop,
            fail: noop,
            load: noop,
            loadEnd: noop,
            loadStart: noop,
            progress: noop
        },

        events: {
            change: function change(e) {

                if (!matches(e.target, 'input[type="file"]')) {
                    return;
                }

                e.preventDefault();

                if (e.target.files) {
                    this.upload(e.target.files);
                }

                e.target.value = '';
            },
            drop: function drop(e) {
                stop(e);

                var transfer = e.dataTransfer;

                if (!transfer || !transfer.files) {
                    return;
                }

                removeClass(this.$el, this.clsDragover);

                this.upload(transfer.files);
            },
            dragenter: function dragenter(e) {
                stop(e);
            },
            dragover: function dragover(e) {
                stop(e);
                addClass(this.$el, this.clsDragover);
            },
            dragleave: function dragleave(e) {
                stop(e);
                removeClass(this.$el, this.clsDragover);
            }
        },

        methods: {
            upload: function upload(files) {
                var _this = this;

                if (!files.length) {
                    return;
                }

                trigger(this.$el, 'upload', [files]);

                for (var i = 0; i < files.length; i++) {

                    if (this.maxSize && this.maxSize * 1000 < files[i].size) {
                        this.fail(this.msgInvalidSize.replace('%s', this.allow));
                        return;
                    }

                    if (this.allow && !match(this.allow, files[i].name)) {
                        this.fail(this.msgInvalidName.replace('%s', this.allow));
                        return;
                    }

                    if (this.mime && !match(this.mime, files[i].type)) {
                        this.fail(this.msgInvalidMime.replace('%s', this.mime));
                        return;
                    }
                }

                if (!this.multiple) {
                    files = [files[0]];
                }

                this.beforeAll(this, files);

                var chunks = chunk(files, this.concurrent);
                var upload = function upload(files) {

                    var data = new FormData();

                    files.forEach(function (file) {
                        return data.append(_this.name, file);
                    });

                    for (var key in _this.params) {
                        data.append(key, _this.params[key]);
                    }

                    ajax(_this.url, {
                        data: data,
                        method: _this.type,
                        beforeSend: function beforeSend(env) {
                            var xhr = env.xhr;

                            xhr.upload && on(xhr.upload, 'progress', _this.progress);
                            ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) {
                                return on(xhr, type.toLowerCase(), _this[type]);
                            });

                            _this.beforeSend(env);
                        }
                    }).then(function (xhr) {

                        _this.complete(xhr);

                        if (chunks.length) {
                            upload(chunks.shift());
                        } else {
                            _this.completeAll(xhr);
                        }
                    }, function (e) {
                        return _this.error(e.message);
                    });
                };

                upload(chunks.shift());
            }
        }

    });

    function match(pattern, path) {
        return path.match(new RegExp('^' + pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.') + '$', 'i'));
    }

    function chunk(files, size) {
        var chunks = [];
        for (var i = 0; i < files.length; i += size) {
            var _chunk = [];
            for (var j = 0; j < size; j++) {
                _chunk.push(files[i + j]);
            }
            chunks.push(_chunk);
        }
        return chunks;
    }

    function stop(e) {
        e.preventDefault();
        e.stopPropagation();
    }
}

if (!BUNDLED && typeof window !== 'undefined' && window.UIkit) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = (plugin);

/***/ }),
/* 109 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: \r\nundefined\r\n                                               ^\r\n      Undefined variable: \"$inverse-global-color\".\r\n      in C:\\Users\\JunJun\\Desktop\\webtek\\webtek\\resources\\assets\\sass\\components\\base.scss (line 596, column 49)\n    at runLoaders (C:\\Users\\JunJun\\Desktop\\webtek\\webtek\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at C:\\Users\\JunJun\\Desktop\\webtek\\webtek\\node_modules\\loader-runner\\lib\\LoaderRunner.js:364:11\n    at C:\\Users\\JunJun\\Desktop\\webtek\\webtek\\node_modules\\loader-runner\\lib\\LoaderRunner.js:230:18\n    at context.callback (C:\\Users\\JunJun\\Desktop\\webtek\\webtek\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at Object.asyncSassJobQueue.push [as callback] (C:\\Users\\JunJun\\Desktop\\webtek\\webtek\\node_modules\\sass-loader\\lib\\loader.js:55:13)\n    at Object.done [as callback] (C:\\Users\\JunJun\\Desktop\\webtek\\webtek\\node_modules\\neo-async\\async.js:7974:18)\n    at options.error (C:\\Users\\JunJun\\Desktop\\webtek\\webtek\\node_modules\\node-sass\\lib\\index.js:294:32)");

/***/ })
/******/ ]);