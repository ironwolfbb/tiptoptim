/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = "text/javascript";
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + "a5e9ddfe" + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
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
/******/ 	__webpack_require__.p = "/local/build/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./local/assets/scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./local/assets/images recursive \\.(png|jpe?g|gif)$":
/*!************************************************!*\
  !*** ./local/assets/images \.(png|jpe?g|gif)$ ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./html/partner-1.png": "./local/assets/images/html/partner-1.png",
	"./html/partner-2.png": "./local/assets/images/html/partner-2.png",
	"./html/partner-3.png": "./local/assets/images/html/partner-3.png",
	"./html/partner-4.png": "./local/assets/images/html/partner-4.png",
	"./html/partner-5.png": "./local/assets/images/html/partner-5.png",
	"./html/partner-6.png": "./local/assets/images/html/partner-6.png",
	"./html/partner-7.png": "./local/assets/images/html/partner-7.png",
	"./html/partner-8.png": "./local/assets/images/html/partner-8.png",
	"./html/portfolio-1.png": "./local/assets/images/html/portfolio-1.png",
	"./html/portfolio-10.png": "./local/assets/images/html/portfolio-10.png",
	"./html/portfolio-11.png": "./local/assets/images/html/portfolio-11.png",
	"./html/portfolio-12.png": "./local/assets/images/html/portfolio-12.png",
	"./html/portfolio-13.png": "./local/assets/images/html/portfolio-13.png",
	"./html/portfolio-14.png": "./local/assets/images/html/portfolio-14.png",
	"./html/portfolio-15.png": "./local/assets/images/html/portfolio-15.png",
	"./html/portfolio-16.png": "./local/assets/images/html/portfolio-16.png",
	"./html/portfolio-17.png": "./local/assets/images/html/portfolio-17.png",
	"./html/portfolio-18.png": "./local/assets/images/html/portfolio-18.png",
	"./html/portfolio-19.png": "./local/assets/images/html/portfolio-19.png",
	"./html/portfolio-2.png": "./local/assets/images/html/portfolio-2.png",
	"./html/portfolio-20.png": "./local/assets/images/html/portfolio-20.png",
	"./html/portfolio-21.png": "./local/assets/images/html/portfolio-21.png",
	"./html/portfolio-22.png": "./local/assets/images/html/portfolio-22.png",
	"./html/portfolio-23.png": "./local/assets/images/html/portfolio-23.png",
	"./html/portfolio-24.png": "./local/assets/images/html/portfolio-24.png",
	"./html/portfolio-25.png": "./local/assets/images/html/portfolio-25.png",
	"./html/portfolio-26.png": "./local/assets/images/html/portfolio-26.png",
	"./html/portfolio-27.png": "./local/assets/images/html/portfolio-27.png",
	"./html/portfolio-28.png": "./local/assets/images/html/portfolio-28.png",
	"./html/portfolio-29.png": "./local/assets/images/html/portfolio-29.png",
	"./html/portfolio-3.png": "./local/assets/images/html/portfolio-3.png",
	"./html/portfolio-30.png": "./local/assets/images/html/portfolio-30.png",
	"./html/portfolio-4.png": "./local/assets/images/html/portfolio-4.png",
	"./html/portfolio-5.png": "./local/assets/images/html/portfolio-5.png",
	"./html/portfolio-6.png": "./local/assets/images/html/portfolio-6.png",
	"./html/portfolio-7.png": "./local/assets/images/html/portfolio-7.png",
	"./html/portfolio-8.png": "./local/assets/images/html/portfolio-8.png",
	"./html/portfolio-9.png": "./local/assets/images/html/portfolio-9.png",
	"./html/team-1.jpg": "./local/assets/images/html/team-1.jpg",
	"./html/team-2.jpg": "./local/assets/images/html/team-2.jpg",
	"./html/team-3.jpg": "./local/assets/images/html/team-3.jpg",
	"./html/team-4.jpg": "./local/assets/images/html/team-4.jpg",
	"./html/team-5.jpg": "./local/assets/images/html/team-5.jpg",
	"./html/team-6.jpg": "./local/assets/images/html/team-6.jpg",
	"./html/team-7.jpg": "./local/assets/images/html/team-7.jpg",
	"./html/team-8.jpg": "./local/assets/images/html/team-8.jpg",
	"./html/team-9.jpg": "./local/assets/images/html/team-9.jpg"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./local/assets/images recursive \\.(png|jpe?g|gif)$";

/***/ }),

/***/ "./local/assets/images/html/partner-1.png":
/*!************************************************!*\
  !*** ./local/assets/images/html/partner-1.png ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/partner-1.0c338c79.png";

/***/ }),

/***/ "./local/assets/images/html/partner-2.png":
/*!************************************************!*\
  !*** ./local/assets/images/html/partner-2.png ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/partner-2.4e502d04.png";

/***/ }),

/***/ "./local/assets/images/html/partner-3.png":
/*!************************************************!*\
  !*** ./local/assets/images/html/partner-3.png ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/partner-3.a4911526.png";

/***/ }),

/***/ "./local/assets/images/html/partner-4.png":
/*!************************************************!*\
  !*** ./local/assets/images/html/partner-4.png ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/partner-4.baf8e605.png";

/***/ }),

/***/ "./local/assets/images/html/partner-5.png":
/*!************************************************!*\
  !*** ./local/assets/images/html/partner-5.png ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/partner-5.407f3c75.png";

/***/ }),

/***/ "./local/assets/images/html/partner-6.png":
/*!************************************************!*\
  !*** ./local/assets/images/html/partner-6.png ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/partner-6.a44b231b.png";

/***/ }),

/***/ "./local/assets/images/html/partner-7.png":
/*!************************************************!*\
  !*** ./local/assets/images/html/partner-7.png ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/partner-7.ddb2d3df.png";

/***/ }),

/***/ "./local/assets/images/html/partner-8.png":
/*!************************************************!*\
  !*** ./local/assets/images/html/partner-8.png ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/partner-8.ddb96cfe.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-1.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-1.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-1.76c605f8.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-10.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-10.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-10.0ced697c.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-11.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-11.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-11.023bb620.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-12.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-12.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-12.9ba19719.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-13.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-13.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-13.9981702b.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-14.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-14.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-14.764c03d8.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-15.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-15.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-15.3f80c1fc.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-16.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-16.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-16.4e8f8a75.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-17.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-17.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-17.7e612d9d.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-18.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-18.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-18.1dee938b.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-19.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-19.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-19.011fbc76.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-2.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-2.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-2.50020f17.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-20.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-20.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-20.d9a37482.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-21.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-21.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-21.5d9ddfe3.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-22.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-22.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-22.83b4d33e.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-23.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-23.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-23.54c394a0.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-24.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-24.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-24.4ff89bf5.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-25.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-25.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-25.3a551ca4.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-26.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-26.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-26.9193fffc.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-27.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-27.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-27.78744af0.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-28.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-28.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-28.6d6f4c68.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-29.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-29.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-29.41c0c8e2.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-3.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-3.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-3.ced579d5.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-30.png":
/*!***************************************************!*\
  !*** ./local/assets/images/html/portfolio-30.png ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-30.4f2818bf.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-4.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-4.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-4.ce0e8746.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-5.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-5.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-5.a5e3e7dd.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-6.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-6.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-6.4f61a3df.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-7.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-7.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-7.0c9f1828.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-8.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-8.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-8.a91e4538.png";

/***/ }),

/***/ "./local/assets/images/html/portfolio-9.png":
/*!**************************************************!*\
  !*** ./local/assets/images/html/portfolio-9.png ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/portfolio-9.d03c1915.png";

/***/ }),

/***/ "./local/assets/images/html/team-1.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-1.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-1.aaa7f994.jpg";

/***/ }),

/***/ "./local/assets/images/html/team-2.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-2.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-2.f26de132.jpg";

/***/ }),

/***/ "./local/assets/images/html/team-3.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-3.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-3.d9412f41.jpg";

/***/ }),

/***/ "./local/assets/images/html/team-4.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-4.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-4.9d0a952b.jpg";

/***/ }),

/***/ "./local/assets/images/html/team-5.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-5.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-5.2378498f.jpg";

/***/ }),

/***/ "./local/assets/images/html/team-6.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-6.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-6.cf8b31af.jpg";

/***/ }),

/***/ "./local/assets/images/html/team-7.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-7.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-7.5b832e1b.jpg";

/***/ }),

/***/ "./local/assets/images/html/team-8.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-8.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-8.de86d3f1.jpg";

/***/ }),

/***/ "./local/assets/images/html/team-9.jpg":
/*!*********************************************!*\
  !*** ./local/assets/images/html/team-9.jpg ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = "/local/build/images/team-9.450f47fe.jpg";

/***/ }),

/***/ "./local/assets/scripts/components/bounce-field/index.js":
/*!***************************************************************!*\
  !*** ./local/assets/scripts/components/bounce-field/index.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BounceField = function () {
  function BounceField(props) {
    _classCallCheck(this, BounceField);

    this.init = props.init;
    this.wrapSelector = document.querySelectorAll(props.wrapSelector);
    this.wrapActiveClass = props.wrapActiveClass;
    this.fieldSelector = props.fieldSelector;

    if (this.init) {
      this.render();
    }
  }

  _createClass(BounceField, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var _loop = function _loop(i) {
        var field = _this.wrapSelector[i].querySelector(_this.fieldSelector);

        if (field) {
          field.addEventListener('focus', function () {
            _this.wrapSelector[i].classList.add(_this.wrapActiveClass);
          });

          field.addEventListener('focusout', function () {
            if (field.value <= 0) {
              _this.wrapSelector[i].classList.remove(_this.wrapActiveClass);
            }
          });
        }
      };

      for (var i = 0; i < this.wrapSelector.length; i += 1) {
        _loop(i);
      }
    }
  }]);

  return BounceField;
}();

exports.default = BounceField;

/***/ }),

/***/ "./local/assets/scripts/components/menu/index.js":
/*!*******************************************************!*\
  !*** ./local/assets/scripts/components/menu/index.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu(props) {
    _classCallCheck(this, Menu);

    this.init = props.init;
    this.buttonSelector = document.querySelectorAll(props.buttonSelector);
    this.bodyLockClass = props.bodyLockClass;

    if (props.wrapSelector === '' || document.querySelectorAll(props.wrapSelector) === undefined || document.querySelectorAll(props.wrapSelector).length === 0) {
      this.wrapSelector = document.querySelectorAll('body');
    } else {
      this.wrapSelector = document.querySelectorAll(props.wrapSelector);
    }
    if (this.init) {
      this.render();
    }
  }

  _createClass(Menu, [{
    key: 'render',
    value: function render() {
      var _this = this;

      for (var i = 0; i < this.buttonSelector.length; i += 1) {
        this.buttonSelector[i].addEventListener('click', function () {
          for (var j = 0; j < _this.wrapSelector.length; j += 1) {
            _this.wrapSelector[j].classList.toggle(_this.bodyLockClass);
          }
        });
      }
    }
  }]);

  return Menu;
}();

exports.default = Menu;

/***/ }),

/***/ "./local/assets/scripts/components/modal-video/index.js":
/*!**************************************************************!*\
  !*** ./local/assets/scripts/components/modal-video/index.js ***!
  \**************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ModalVideo = function () {
  function ModalVideo(props) {
    _classCallCheck(this, ModalVideo);

    this.init = props.init;
    this.modal = document.querySelector(props.modalSelector);
    this.openers = document.querySelectorAll(props.openerSelector);
    this.closer = document.querySelectorAll(props.closerSelector);
    this.modalClassActive = props.modalClassActive;
    this.modalFrameSelector = document.querySelector(props.modalFrameSelector);
    this.body = document.querySelector('body');

    if (this.init) {
      this.modalOpen();
      this.modalClose();
    }
  }

  _createClass(ModalVideo, [{
    key: 'modalOpen',
    value: function modalOpen() {
      var _this = this;

      var _loop = function _loop(i) {
        _this.openers[i].addEventListener('click', function () {
          _this.modal.classList.add(_this.modalClassActive);
          _this.modalFrameSelector.src = '';
          _this.modalFrameSelector.src = _this.openers[i].dataset.src;
          _this.body.classList.add('modal-opened');
        });
      };

      for (var i = 0; i < this.openers.length; i += 1) {
        _loop(i);
      }
    }
  }, {
    key: 'modalClose',
    value: function modalClose() {
      var _this2 = this;

      for (var i = 0; i < this.closer.length; i += 1) {
        this.closer[i].addEventListener('click', function () {
          _this2.modal.classList.remove(_this2.modalClassActive);
          _this2.modalFrameSelector.src = '';
          _this2.body.classList.remove('modal-opened');
        });
      }
    }
  }]);

  return ModalVideo;
}();

exports.default = ModalVideo;

/***/ }),

/***/ "./local/assets/scripts/components/success/index.js":
/*!**********************************************************!*\
  !*** ./local/assets/scripts/components/success/index.js ***!
  \**********************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Success = function () {
    function Success(props) {
        _classCallCheck(this, Success);

        this.init = props.init;
        this.modalSelector = props.modalSelector;
        this.modalClose = props.modalClose;
        this.bodyClass = props.bodyClass;

        if (this.init) {
            this.render();
        }
    }

    _createClass(Success, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var modal = document.querySelector(this.modalSelector);
            if (!modal) return;

            var close = modal.querySelectorAll(this.modalClose);
            var body = document.querySelector('body');

            for (var i = 0; i < close.length; i += 1) {
                close[i].addEventListener('click', function () {
                    body.classList.remove(_this.bodyClass);
                });
            }
        }
    }]);

    return Success;
}();

exports.default = Success;

/***/ }),

/***/ "./local/assets/scripts/components/tabs/index.js":
/*!*******************************************************!*\
  !*** ./local/assets/scripts/components/tabs/index.js ***!
  \*******************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tabs = function () {
  function Tabs(props) {
    _classCallCheck(this, Tabs);

    this.init = props.init;
    this.tabPanel = props.tabPanel;
    this.tabButton = props.tabButton;
    this.tabButtonActive = props.tabButtonActive;
    this.textWrap = props.textWrap;
    this.text = props.text;
    this.textActive = props.textActive;
    this.item = props.item;
    this.itemDisable = props.itemDisable;
    this.target = props.target;

    if (this.init) {
      this.render();
    }
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var tabPanel = document.querySelector(this.tabPanel);
      if (!tabPanel) return;
      var buttons = tabPanel.querySelectorAll(this.tabButton);
      var textWrap = document.querySelector(this.textWrap);
      var texts = textWrap.querySelectorAll(this.text);
      var items = document.querySelectorAll(this.item);

      var _loop = function _loop(i) {
        buttons[i].addEventListener('click', function () {
          buttons[i].classList.add(_this.tabButtonActive);
          _this.removeActiveButton(buttons, i);
          var target = buttons[i].dataset.category;
          var text = textWrap.querySelector('[' + _this.target + '=' + target + ']');
          _this.removeActiveText(texts, i);
          text.classList.add(_this.textActive);

          if (target === 'all') {
            for (var j = 0; j < items.length; j += 1) {
              items[j].classList.remove(_this.itemDisable);
            }
          } else {
            _this.switch(items, target);
          }
        });
      };

      for (var i = 0; i < buttons.length; i += 1) {
        _loop(i);
      }
    }
  }, {
    key: 'removeActiveButton',
    value: function removeActiveButton(buttons, index) {
      for (var i = 0; i < buttons.length; i += 1) {
        if (i === index) continue;
        buttons[i].classList.remove(this.tabButtonActive);
      }
    }
  }, {
    key: 'removeActiveText',
    value: function removeActiveText(texts, index) {
      for (var i = 0; i < texts.length; i += 1) {
        if (i === index) continue;
        texts[i].classList.remove(this.textActive);
      }
    }
  }, {
    key: 'switch',
    value: function _switch(items, target) {
      for (var i = 0; i < items.length; i += 1) {
        items[i].dataset.category === target ? items[i].classList.remove(this.itemDisable) : items[i].classList.add(this.itemDisable);
      }
    }
  }]);

  return Tabs;
}();

exports.default = Tabs;

/***/ }),

/***/ "./local/assets/scripts/main.js":
/*!**************************************!*\
  !*** ./local/assets/scripts/main.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Router = __webpack_require__(/*! ./util/Router */ "./local/assets/scripts/util/Router.js");

var _Router2 = _interopRequireDefault(_Router);

var _common = __webpack_require__(/*! ./routes/common */ "./local/assets/scripts/routes/common.js");

var _common2 = _interopRequireDefault(_common);

var _index = __webpack_require__(/*! ./components/menu/index */ "./local/assets/scripts/components/menu/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./components/modal-video/index */ "./local/assets/scripts/components/modal-video/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ./components/tabs/index */ "./local/assets/scripts/components/tabs/index.js");

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ./components/bounce-field/index */ "./local/assets/scripts/components/bounce-field/index.js");

var _index8 = _interopRequireDefault(_index7);

__webpack_require__(/*! ./swiper/index */ "./local/assets/scripts/swiper/index.js");

__webpack_require__(/*! ./photoswipe/index */ "./local/assets/scripts/photoswipe/index.js");

var _aos = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");

var _aos2 = _interopRequireDefault(_aos);

var _index9 = __webpack_require__(/*! ./components/success/index */ "./local/assets/scripts/components/success/index.js");

var _index10 = _interopRequireDefault(_index9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import pageMain module on-demand only when body has `page_main` class
/* global jQuery */

// import local dependencies
var pageMain = function pageMain() {
    return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, /*! ./routes/pageMain */ "./local/assets/scripts/routes/pageMain.js"));
};

/** Populate Router instance with DOM routes */
var routes = new _Router2.default({
    // All pages
    common: _common2.default,
    // Main page
    pageMain: pageMain
});

var menu = new _index2.default({
    init: true,
    buttonSelector: '[data-menu-mobile]',
    bodyLockClass: 'menu-opened',
    wrapSelector: '' // default body
});

var success = new _index10.default({
    init: true,
    modalSelector: '.modal-success',
    modalClose: '[data-close]',
    bodyClass: 'modal-success-opened'
});

var modalVideo = new _index4.default({
    init: true,
    modalSelector: '.modal-video',
    openerSelector: '[data-modal-open]',
    closerSelector: '[data-modal-close]',
    modalClassActive: 'modal-video--show',
    modalFrameSelector: '.modal-video__frame'
});

var tabs = new _index6.default({
    init: true,
    tabPanel: '.tabs',
    tabButton: '.tabs__button',
    tabButtonActive: 'tabs__button--active',
    textWrap: '.portfolio__top',
    text: '.portfolio__desc',
    textActive: 'portfolio__desc--active',
    item: '.portfolio__item',
    itemDisable: 'portfolio__item--disable',
    target: 'data-category'
});

var bounceField = new _index8.default({
    init: true,
    wrapSelector: '.form__item',
    wrapActiveClass: 'form__item--active',
    fieldSelector: '.form__field'
});

_aos2.default.init({
    once: true
});

__webpack_require__(/*! ../../assets/images */ "./local/assets/images recursive \\.(png|jpe?g|gif)$");

/***/ }),

/***/ "./local/assets/scripts/photoswipe/index.js":
/*!**************************************************!*\
  !*** ./local/assets/scripts/photoswipe/index.js ***!
  \**************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _photoswipe = __webpack_require__(/*! photoswipe */ "./node_modules/photoswipe/dist/photoswipe.js");

var _photoswipe2 = _interopRequireDefault(_photoswipe);

var _photoswipeUiDefault = __webpack_require__(/*! photoswipe/dist/photoswipe-ui-default */ "./node_modules/photoswipe/dist/photoswipe-ui-default.js");

var _photoswipeUiDefault2 = _interopRequireDefault(_photoswipeUiDefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var photoswipeArea = document.querySelectorAll('[data-photoswipe]');
var pswpElement = document.querySelectorAll('.pswp')[0];

function mapToArr(obj) {
  return Object.keys(obj).map(function (id) {
    return obj[id];
  });
}

if (photoswipeArea.length > 0 && photoswipeArea) {
  var _loop = function _loop(i) {
    var photosMap = photoswipeArea[i].querySelectorAll('[data-image]');
    var items = {};
    var options = {
      history: false,
      focus: false,
      showAnimationDuration: 0
    };

    var _loop2 = function _loop2(j) {
      var size = photosMap[j].dataset.size.split('x');

      items[j] = {
        src: photosMap[j].dataset.image,
        w: parseInt(size[0], 10),
        h: parseInt(size[1], 10)
      };

      photosMap[j].addEventListener('click', function () {
        var photosList = mapToArr(items);
        var gallery = new _photoswipe2.default(pswpElement, _photoswipeUiDefault2.default, photosList, options);
        gallery.init();
        gallery.goTo(j);
      });
    };

    for (var j = 0; j < photosMap.length; j += 1) {
      _loop2(j);
    }
  };

  for (var i = 0; i < photoswipeArea.length; i += 1) {
    _loop(i);
  }
}

/***/ }),

/***/ "./local/assets/scripts/routes/common.js":
/*!***********************************************!*\
  !*** ./local/assets/scripts/routes/common.js ***!
  \***********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueInvoker = __webpack_require__(/*! ../util/vueInvoker */ "./local/assets/scripts/util/vueInvoker.js");

var _vueInvoker2 = _interopRequireDefault(_vueInvoker);

var _collection = __webpack_require__(/*! ../vue/collection */ "./local/assets/scripts/vue/collection.js");

var _collection2 = _interopRequireDefault(_collection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  init: function init() {
    // JavaScript to be fired on all pages

    _vueInvoker2.default.init(_collection2.default);
  },
  finalize: function finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  }
};

/***/ }),

/***/ "./local/assets/scripts/swiper/index.js":
/*!**********************************************!*\
  !*** ./local/assets/scripts/swiper/index.js ***!
  \**********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _swiper = __webpack_require__(/*! swiper/dist/js/swiper.min */ "./node_modules/swiper/dist/js/swiper.min.js");

var _swiper2 = _interopRequireDefault(_swiper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stagesSliderList = [];
var stagesSlider = document.querySelectorAll('.stages__slider');

if (stagesSlider && stagesSlider.length > 0) {
  for (var i = 0; i < stagesSlider.length; i += 1) {
    stagesSliderList[i] = new _swiper2.default(stagesSlider[i], {
      slidesPerView: 2,
      pagination: {
        el: '.stages__pagination',
        type: 'bullets',
        bulletElement: 'button',
        clickable: true,
        dynamicBullets: true
      },
      breakpoints: {
        520: {
          slidesPerView: 1
        }
      }
    });
  }
}

var tabsList = [];
var tabs = document.querySelectorAll('.tabs');

if (tabs && tabs.length > 0) {
  for (var _i = 0; _i < tabs.length; _i += 1) {
    tabsList[_i] = new _swiper2.default(tabs[_i], {
      slidesPerView: 'auto',
      followFinger: false,
      breakpoints: {
        768: {
          followFinger: true
        }
      }
    });
  }
}

/***/ }),

/***/ "./local/assets/scripts/util/Router.js":
/*!*********************************************!*\
  !*** ./local/assets/scripts/util/Router.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _camelCase = __webpack_require__(/*! ./camelCase */ "./local/assets/scripts/util/camelCase.js");

var _camelCase2 = _interopRequireDefault(_camelCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DOM-based Routing
 * @link https://github.com/roots/sage/blob/master/resources/assets/scripts/util/Router.js
 * Based on {@link http://goo.gl/EUTi53|Markup-based Unobtrusive Comprehensive DOM-ready Execution} by Paul Irish
 *
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
 */
var Router = function () {
  /**
     * Create a new Router
     * @param {Object} routes
     */
  function Router(routes) {
    _classCallCheck(this, Router);

    this.routes = routes;
  }

  /**
     * Fire Router events
     * @param {string} route DOM-based route derived from body classes (`<body class="...">`)
     * @param {string} [event] Events on the route. By default, `init` and `finalize` events are called.
     * @param {string} [arg] Any custom argument to be passed to the event.
     */


  _createClass(Router, [{
    key: 'fire',
    value: function fire(route) {
      var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'init';
      var arg = arguments[2];

      var fire = route !== '' && this.routes[route];

      if (fire) {
        var routeInstance = this.routes[route];
        var isDynamic = false;

        if (typeof routeInstance === 'function') {
          routeInstance = routeInstance();
          isDynamic = true;
        }

        Promise.resolve(routeInstance).then(function (resolvedRoute) {
          if (isDynamic) {
            resolvedRoute = resolvedRoute.default;
          }
          if (typeof resolvedRoute[event] === 'function') {
            resolvedRoute[event](arg);
          }
        });
      }
    }

    /**
       * Automatically load and fire Router events
       *
       * Events are fired in the following order:
       *  * common init
       *  * page-specific init
       *  * page-specific finalize
       *  * common finalize
       */

  }, {
    key: 'loadEvents',
    value: function loadEvents() {
      var _this = this;

      // Fire common init JS
      this.fire('common');

      // Fire page-specific init JS, and then finalize JS
      document.body.className.toLowerCase().replace(/-/g, '_').split(/\s+/).map(_camelCase2.default).forEach(function (className) {
        _this.fire(className);
        _this.fire(className, 'finalize');
      });

      // Fire common finalize JS
      this.fire('common', 'finalize');
    }
  }]);

  return Router;
}();

exports.default = Router;

/***/ }),

/***/ "./local/assets/scripts/util/camelCase.js":
/*!************************************************!*\
  !*** ./local/assets/scripts/util/camelCase.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * the most terrible camelizer on the internet, guaranteed!
 * @link https://github.com/roots/sage/blob/master/resources/assets/scripts/util/camelCase.js
 * @param {string} str String that isn't camel-case, e.g., CAMeL_CaSEiS-harD
 * @return {string} String converted to camel-case, e.g., camelCaseIsHard
 *
 */
exports.default = function (str) {
  return '' + str.charAt(0).toLowerCase() + str.replace(/[\W_]/g, '|').split('|').map(function (part) {
    return '' + part.charAt(0).toUpperCase() + part.slice(1);
  }).join('').slice(1);
};

/***/ }),

/***/ "./local/assets/scripts/util/logger.js":
/*!*********************************************!*\
  !*** ./local/assets/scripts/util/logger.js ***!
  \*********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Обертка над console, выводящая сообщения только, когда
 * глобальная переменная DEBUG === true
 */

/*  global DEBUG */

/* eslint-disable no-console */

exports.default = {
  info: function info() {
    var _console;

    if (this.check()) (_console = console).info.apply(_console, arguments);
  },
  warn: function warn() {
    var _console2;

    if (this.check()) (_console2 = console).warn.apply(_console2, arguments);
  },
  error: function error() {
    var _console3;

    if (this.check()) (_console3 = console).error.apply(_console3, arguments);
  },
  check: function check() {
    return true === true;
  }
};

/***/ }),

/***/ "./local/assets/scripts/util/vueInvoker.js":
/*!*************************************************!*\
  !*** ./local/assets/scripts/util/vueInvoker.js ***!
  \*************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");

var _vue2 = _interopRequireDefault(_vue);

var _logger = __webpack_require__(/*! ./logger */ "./local/assets/scripts/util/logger.js");

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Модуль для автоматической инициализации Vue компонентов на странице сайта
 *
 * Метод `init(components)` Загружает компоненты в соответствующие элементы на странице и передает в них данные
 *
 * Например вместо блока:
 *
 * <div class="vue-component" data-component="DemoApp" data-initial='{"test": "data"}'></div>
 *
 * Будет подключен компонент DemoApp (если тот присутствует в объекте-коллекции `components`)
 *
 * и в его свойство initial будет передан JSON-объект {"test": "data"}
 *
 */

exports.default = {
  init: function init(components, options) {
    var _this = this;

    this.options = Object.assign(this.options, options);

    var nodes = Array.from(document.querySelectorAll(this.options.selector));

    var collection = [];

    nodes.forEach(function (item) {
      var initialData = item.dataset[_this.options.initialDataAttr];

      if (initialData !== undefined) {
        try {
          initialData = JSON.parse(initialData);
        } catch (e) {
          _logger2.default.warn(e);
        }
      }

      if (components[item.dataset[_this.options.componentDataAttr]] !== undefined) {
        collection.push(_this.createComponentInstance(item, components[item.dataset[_this.options.componentDataAttr]], initialData));
      }
    });

    return collection;
  },


  options: {
    selector: '.vue-component',
    componentDataAttr: 'component',
    initialDataAttr: 'initial'
  },

  createComponentInstance: function createComponentInstance(element, component, data) {
    return new _vue2.default({
      el: element,
      render: function render(h) {
        return h(component, {
          props: { initial: data }
        });
      }
    });
  }
};

/***/ }),

/***/ "./local/assets/scripts/vue/collection.js":
/*!************************************************!*\
  !*** ./local/assets/scripts/vue/collection.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Здесь определяется коллекция Vue компонентов
 * Для модуля vueInvoker
 */

exports.default = {};

/***/ }),

/***/ "./node_modules/aos/dist/aos.js":
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe-ui-default.js":
/*!***************************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe-ui-default.js ***!
  \***************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipeUI_Default = factory();
	}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});


/***/ }),

/***/ "./node_modules/photoswipe/dist/photoswipe.js":
/*!****************************************************!*\
  !*** ./node_modules/photoswipe/dist/photoswipe.js ***!
  \****************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
(function (root, factory) { 
	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipe = factory();
	}
})(this, function () {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var framework = {
	features: null,
	bind: function(target, type, listener, unbind) {
		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
		type = type.split(' ');
		for(var i = 0; i < type.length; i++) {
			if(type[i]) {
				target[methodName]( type[i], listener, false);
			}
		}
	},
	isArray: function(obj) {
		return (obj instanceof Array);
	},
	createEl: function(classes, tag) {
		var el = document.createElement(tag || 'div');
		if(classes) {
			el.className = classes;
		}
		return el;
	},
	getScrollY: function() {
		var yOffset = window.pageYOffset;
		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
	},
	unbind: function(target, type, listener) {
		framework.bind(target,type,listener,true);
	},
	removeClass: function(el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
	},
	addClass: function(el, className) {
		if( !framework.hasClass(el,className) ) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function(el, className) {
		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	getChildByClass: function(parentEl, childClassName) {
		var node = parentEl.firstChild;
		while(node) {
			if( framework.hasClass(node, childClassName) ) {
				return node;
			}
			node = node.nextSibling;
		}
	},
	arraySearch: function(array, value, key) {
		var i = array.length;
		while(i--) {
			if(array[i][key] === value) {
				return i;
			} 
		}
		return -1;
	},
	extend: function(o1, o2, preventOverwrite) {
		for (var prop in o2) {
			if (o2.hasOwnProperty(prop)) {
				if(preventOverwrite && o1.hasOwnProperty(prop)) {
					continue;
				}
				o1[prop] = o2[prop];
			}
		}
	},
	easing: {
		sine: {
			out: function(k) {
				return Math.sin(k * (Math.PI / 2));
			},
			inOut: function(k) {
				return - (Math.cos(Math.PI * k) - 1) / 2;
			}
		},
		cubic: {
			out: function(k) {
				return --k * k * k + 1;
			}
		}
		/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
	},

	/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
	detectFeatures: function() {
		if(framework.features) {
			return framework.features;
		}
		var helperEl = framework.createEl(),
			helperStyle = helperEl.style,
			vendor = '',
			features = {};

		// IE8 and below
		features.oldIE = document.all && !document.addEventListener;

		features.touch = 'ontouchstart' in window;

		if(window.requestAnimationFrame) {
			features.raf = window.requestAnimationFrame;
			features.caf = window.cancelAnimationFrame;
		}

		features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

		// fix false-positive detection of old Android in new IE
		// (IE11 ua string contains "Android 4.0")
		
		if(!features.pointerEvent) { 

			var ua = navigator.userAgent;

			// Detect if device is iPhone or iPod and if it's older than iOS 8
			// http://stackoverflow.com/a/14223920
			// 
			// This detection is made because of buggy top/bottom toolbars
			// that don't trigger window.resize event.
			// For more info refer to _isFixedPosition variable in core.js

			if (/iP(hone|od)/.test(navigator.platform)) {
				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				if(v && v.length > 0) {
					v = parseInt(v[1], 10);
					if(v >= 1 && v < 8 ) {
						features.isOldIOSPhone = true;
					}
				}
			}

			// Detect old Android (before KitKat)
			// due to bugs related to position:fixed
			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
			
			var match = ua.match(/Android\s([0-9\.]*)/);
			var androidversion =  match ? match[1] : 0;
			androidversion = parseFloat(androidversion);
			if(androidversion >= 1 ) {
				if(androidversion < 4.4) {
					features.isOldAndroid = true; // for fixed position bug & performance
				}
				features.androidVersion = androidversion; // for touchend bug
			}	
			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
		}
		
		var styleChecks = ['transform', 'perspective', 'animationName'],
			vendors = ['', 'webkit','Moz','ms','O'],
			styleCheckItem,
			styleName;

		for(var i = 0; i < 4; i++) {
			vendor = vendors[i];

			for(var a = 0; a < 3; a++) {
				styleCheckItem = styleChecks[a];

				// uppercase first letter of property name, if vendor is present
				styleName = vendor + (vendor ? 
										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
										styleCheckItem);
			
				if(!features[styleCheckItem] && styleName in helperStyle ) {
					features[styleCheckItem] = styleName;
				}
			}

			if(vendor && !features.raf) {
				vendor = vendor.toLowerCase();
				features.raf = window[vendor+'RequestAnimationFrame'];
				if(features.raf) {
					features.caf = window[vendor+'CancelAnimationFrame'] || 
									window[vendor+'CancelRequestAnimationFrame'];
				}
			}
		}
			
		if(!features.raf) {
			var lastTime = 0;
			features.raf = function(fn) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			features.caf = function(id) { clearTimeout(id); };
		}

		// Detect SVG support
		features.svg = !!document.createElementNS && 
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

		framework.features = features;

		return features;
	}
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

	framework.bind = function(target, type, listener, unbind) {
		
		type = type.split(' ');

		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
			evName,
			_handleEv = function() {
				listener.handleEvent.call(listener);
			};

		for(var i = 0; i < type.length; i++) {
			evName = type[i];
			if(evName) {

				if(typeof listener === 'object' && listener.handleEvent) {
					if(!unbind) {
						listener['oldIE' + evName] = _handleEv;
					} else {
						if(!listener['oldIE' + evName]) {
							return false;
						}
					}

					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
				} else {
					target[methodName]( 'on' + evName, listener);
				}

			}
		}
	};
	
}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25, 
	NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
	allowPanToNext:true,
	spacing: 0.12,
	bgOpacity: 1,
	mouseUsed: false,
	loop: true,
	pinchToClose: true,
	closeOnScroll: true,
	closeOnVerticalDrag: true,
	verticalDragRange: 0.75,
	hideAnimationDuration: 333,
	showAnimationDuration: 333,
	showHideOpacity: false,
	focus: true,
	escKey: true,
	arrowKeys: true,
	mainScrollEndFriction: 0.35,
	panEndFriction: 0.35,
	isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
    	if(isMouseClick) {
    		return 1;
    	} else {
    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
    	}
    },
    maxSpreadZoom: 1.33,
	modal: true,

	// not fully implemented yet
	scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() { 
		return {x:0,y:0}; 
	};

var _isOpen,
	_isDestroying,
	_closedByScroll,
	_currentItemIndex,
	_containerStyle,
	_containerShiftIndex,
	_currPanDist = _getEmptyPoint(),
	_startPanOffset = _getEmptyPoint(),
	_panOffset = _getEmptyPoint(),
	_upMoveEvents, // drag move, drag end & drag cancel events array
	_downEvents, // drag start events array
	_globalEventHandlers,
	_viewportSize = {},
	_currZoomLevel,
	_startZoomLevel,
	_translatePrefix,
	_translateSufix,
	_updateSizeInterval,
	_itemsNeedUpdate,
	_currPositionIndex = 0,
	_offset = {},
	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
	_itemHolders,
	_prevItemIndex,
	_indexDiff = 0, // difference of indexes since last content update
	_dragStartEvent,
	_dragMoveEvent,
	_dragEndEvent,
	_dragCancelEvent,
	_transformKey,
	_pointerEventEnabled,
	_isFixedPosition = true,
	_likelyTouchDevice,
	_modules = [],
	_requestAF,
	_cancelAF,
	_initalClassName,
	_initalWindowScrollY,
	_oldIE,
	_currentWindowScrollY,
	_features,
	_windowVisibleSize = {},
	_renderMaxResolution = false,
	_orientationChangeTimeout,


	// Registers PhotoSWipe module (History, Controller ...)
	_registerModule = function(name, module) {
		framework.extend(self, module.publicMethods);
		_modules.push(name);
	},

	_getLoopedId = function(index) {
		var numSlides = _getNumItems();
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	
	// Micro bind/trigger
	_listeners = {},
	_listen = function(name, fn) {
		if(!_listeners[name]) {
			_listeners[name] = [];
		}
		return _listeners[name].push(fn);
	},
	_shout = function(name) {
		var listeners = _listeners[name];

		if(listeners) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(self, args);
			}
		}
	},

	_getCurrentTime = function() {
		return new Date().getTime();
	},
	_applyBgOpacity = function(opacity) {
		_bgOpacity = opacity;
		self.bg.style.opacity = opacity * _options.bgOpacity;
	},

	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
		}
			
		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
	},
	_applyCurrentZoomPan = function( allowRenderResolution ) {
		if(_currZoomElementStyle) {

			if(allowRenderResolution) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					if(!_renderMaxResolution) {
						_setImageSize(self.currItem, false, true);
						_renderMaxResolution = true;
					}
				} else {
					if(_renderMaxResolution) {
						_setImageSize(self.currItem);
						_renderMaxResolution = false;
					}
				}
			}
			

			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
		}
	},
	_applyZoomPanToItem = function(item) {
		if(item.container) {

			_applyZoomTransform(item.container.style, 
								item.initialPosition.x, 
								item.initialPosition.y, 
								item.initialZoomLevel,
								item);
		}
	},
	_setTranslateX = function(x, elStyle) {
		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
	},
	_moveMainScroll = function(x, dragging) {

		if(!_options.loop && dragging) {
			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				delta = Math.round(x - _mainScrollPos.x);

			if( (newSlideIndexOffset < 0 && delta > 0) || 
				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
			} 
		}
		
		_mainScrollPos.x = x;
		_setTranslateX(x, _containerStyle);
	},
	_calculatePanOffset = function(axis, zoomLevel) {
		var m = _midZoomPoint[axis] - _offset[axis];
		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
	},
	
	_equalizePoints = function(p1, p2) {
		p1.x = p2.x;
		p1.y = p2.y;
		if(p2.id) {
			p1.id = p2.id;
		}
	},
	_roundPoint = function(p) {
		p.x = Math.round(p.x);
		p.y = Math.round(p.y);
	},

	_mouseMoveTimeout = null,
	_onFirstMouseMove = function() {
		// Wait until mouse move event is fired at least twice during 100ms
		// We do this, because some mobile browsers trigger it on touchstart
		if(_mouseMoveTimeout ) { 
			framework.unbind(document, 'mousemove', _onFirstMouseMove);
			framework.addClass(template, 'pswp--has_mouse');
			_options.mouseUsed = true;
			_shout('mouseUsed');
		}
		_mouseMoveTimeout = setTimeout(function() {
			_mouseMoveTimeout = null;
		}, 100);
	},

	_bindEvents = function() {
		framework.bind(document, 'keydown', self);

		if(_features.transform) {
			// don't bind click event in browsers that don't support transform (mostly IE8)
			framework.bind(self.scrollWrap, 'click', self);
		}
		

		if(!_options.mouseUsed) {
			framework.bind(document, 'mousemove', _onFirstMouseMove);
		}

		framework.bind(window, 'resize scroll orientationchange', self);

		_shout('bindEvents');
	},

	_unbindEvents = function() {
		framework.unbind(window, 'resize scroll orientationchange', self);
		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
		framework.unbind(document, 'keydown', self);
		framework.unbind(document, 'mousemove', _onFirstMouseMove);

		if(_features.transform) {
			framework.unbind(self.scrollWrap, 'click', self);
		}

		if(_isDragging) {
			framework.unbind(window, _upMoveEvents, self);
		}

		clearTimeout(_orientationChangeTimeout);

		_shout('unbindEvents');
	},
	
	_calculatePanBounds = function(zoomLevel, update) {
		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
		if(update) {
			_currPanBounds = bounds;
		}
		return bounds;
	},
	
	_getMinZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.initialZoomLevel;
	},
	_getMaxZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.w > 0 ? _options.maxSpreadZoom : 1;
	},

	// Return true if offset is out of the bounds
	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
		if(destZoomLevel === self.currItem.initialZoomLevel) {
			destPanOffset[axis] = self.currItem.initialPosition[axis];
			return true;
		} else {
			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

			if(destPanOffset[axis] > destPanBounds.min[axis]) {
				destPanOffset[axis] = destPanBounds.min[axis];
				return true;
			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
				destPanOffset[axis] = destPanBounds.max[axis];
				return true;
			}
		}
		return false;
	},

	_setupTransforms = function() {

		if(_transformKey) {
			// setup 3d transforms
			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
			_translateSufix = _features.perspective ? ', 0px)' : ')';	
			return;
		}

		// Override zoom/pan/move functions in case old browser is used (most likely IE)
		// (so they use left/top/width/height, instead of CSS transform)
	
		_transformKey = 'left';
		framework.addClass(template, 'pswp--ie');

		_setTranslateX = function(x, elStyle) {
			elStyle.left = x + 'px';
		};
		_applyZoomPanToItem = function(item) {

			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				s = item.container.style,
				w = zoomRatio * item.w,
				h = zoomRatio * item.h;

			s.width = w + 'px';
			s.height = h + 'px';
			s.left = item.initialPosition.x + 'px';
			s.top = item.initialPosition.y + 'px';

		};
		_applyCurrentZoomPan = function() {
			if(_currZoomElementStyle) {

				var s = _currZoomElementStyle,
					item = self.currItem,
					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';


				s.left = _panOffset.x + 'px';
				s.top = _panOffset.y + 'px';
			}
			
		};
	},

	_onKeyDown = function(e) {
		var keydownAction = '';
		if(_options.escKey && e.keyCode === 27) { 
			keydownAction = 'close';
		} else if(_options.arrowKeys) {
			if(e.keyCode === 37) {
				keydownAction = 'prev';
			} else if(e.keyCode === 39) { 
				keydownAction = 'next';
			}
		}

		if(keydownAction) {
			// don't do anything if special key pressed to prevent from overriding default browser actions
			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
				if(e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				} 
				self[keydownAction]();
			}
		}
	},

	_onGlobalClick = function(e) {
		if(!e) {
			return;
		}

		// don't allow click event to pass through when triggering after drag or some other gesture
		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
			e.preventDefault();
			e.stopPropagation();
		}
	},

	_updatePageScrollOffset = function() {
		self.setScrollOffset(0, framework.getScrollY());		
	};
	


	



// Micro animation engine
var _animations = {},
	_numAnimations = 0,
	_stopAnimation = function(name) {
		if(_animations[name]) {
			if(_animations[name].raf) {
				_cancelAF( _animations[name].raf );
			}
			_numAnimations--;
			delete _animations[name];
		}
	},
	_registerStartAnimation = function(name) {
		if(_animations[name]) {
			_stopAnimation(name);
		}
		if(!_animations[name]) {
			_numAnimations++;
			_animations[name] = {};
		}
	},
	_stopAllAnimations = function() {
		for (var prop in _animations) {

			if( _animations.hasOwnProperty( prop ) ) {
				_stopAnimation(prop);
			} 
			
		}
	},
	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
		var startAnimTime = _getCurrentTime(), t;
		_registerStartAnimation(name);

		var animloop = function(){
			if ( _animations[name] ) {
				
				t = _getCurrentTime() - startAnimTime; // time diff
				//b - beginning (start prop)
				//d - anim duration

				if ( t >= d ) {
					_stopAnimation(name);
					onUpdate(endProp);
					if(onComplete) {
						onComplete();
					}
					return;
				}
				onUpdate( (endProp - b) * easingFn(t/d) + b );

				_animations[name].raf = _requestAF(animloop);
			}
		};
		animloop();
	};
	


var publicMethods = {

	// make a few local variables and functions public
	shout: _shout,
	listen: _listen,
	viewportSize: _viewportSize,
	options: _options,

	isMainScrollAnimating: function() {
		return _mainScrollAnimating;
	},
	getZoomLevel: function() {
		return _currZoomLevel;
	},
	getCurrentIndex: function() {
		return _currentItemIndex;
	},
	isDragging: function() {
		return _isDragging;
	},	
	isZooming: function() {
		return _isZooming;
	},
	setScrollOffset: function(x,y) {
		_offset.x = x;
		_currentWindowScrollY = _offset.y = y;
		_shout('updateScrollOffset', _offset);
	},
	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
		_panOffset.x = panX;
		_panOffset.y = panY;
		_currZoomLevel = zoomLevel;
		_applyCurrentZoomPan( allowRenderResolution );
	},

	init: function() {

		if(_isOpen || _isDestroying) {
			return;
		}

		var i;

		self.framework = framework; // basic functionality
		self.template = template; // root DOM element of PhotoSwipe
		self.bg = framework.getChildByClass(template, 'pswp__bg');

		_initalClassName = template.className;
		_isOpen = true;
				
		_features = framework.detectFeatures();
		_requestAF = _features.raf;
		_cancelAF = _features.caf;
		_transformKey = _features.transform;
		_oldIE = _features.oldIE;
		
		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

		_containerStyle = self.container.style; // for fast access

		// Objects that hold slides (there are only 3 in DOM)
		self.itemHolders = _itemHolders = [
			{el:self.container.children[0] , wrap:0, index: -1},
			{el:self.container.children[1] , wrap:0, index: -1},
			{el:self.container.children[2] , wrap:0, index: -1}
		];

		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

		_setupTransforms();

		// Setup global events
		_globalEventHandlers = {
			resize: self.updateSize,

			// Fixes: iOS 10.3 resize event
			// does not update scrollWrap.clientWidth instantly after resize
			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
			orientationchange: function() {
				clearTimeout(_orientationChangeTimeout);
				_orientationChangeTimeout = setTimeout(function() {
					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
						self.updateSize();
					}
				}, 500);
			},
			scroll: _updatePageScrollOffset,
			keydown: _onKeyDown,
			click: _onGlobalClick
		};

		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
		if(!_features.animationName || !_features.transform || oldPhone) {
			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
		}

		// init modules
		for(i = 0; i < _modules.length; i++) {
			self['init' + _modules[i]]();
		}
		
		// init
		if(UiClass) {
			var ui = self.ui = new UiClass(self, framework);
			ui.init();
		}

		_shout('firstUpdate');
		_currentItemIndex = _currentItemIndex || _options.index || 0;
		// validate index
		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
			_currentItemIndex = 0;
		}
		self.currItem = _getItemAt( _currentItemIndex );

		
		if(_features.isOldIOSPhone || _features.isOldAndroid) {
			_isFixedPosition = false;
		}
		
		template.setAttribute('aria-hidden', 'false');
		if(_options.modal) {
			if(!_isFixedPosition) {
				template.style.position = 'absolute';
				template.style.top = framework.getScrollY() + 'px';
			} else {
				template.style.position = 'fixed';
			}
		}

		if(_currentWindowScrollY === undefined) {
			_shout('initialLayout');
			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
		}
		
		// add classes to root element of PhotoSwipe
		var rootClasses = 'pswp--open ';
		if(_options.mainClass) {
			rootClasses += _options.mainClass + ' ';
		}
		if(_options.showHideOpacity) {
			rootClasses += 'pswp--animate_opacity ';
		}
		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
		rootClasses += _features.svg ? ' pswp--svg' : '';
		framework.addClass(template, rootClasses);

		self.updateSize();

		// initial update
		_containerShiftIndex = -1;
		_indexDiff = null;
		for(i = 0; i < NUM_HOLDERS; i++) {
			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
		}

		if(!_oldIE) {
			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
		}	

		_listen('initialZoomInEnd', function() {
			self.setContent(_itemHolders[0], _currentItemIndex-1);
			self.setContent(_itemHolders[2], _currentItemIndex+1);

			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

			if(_options.focus) {
				// focus causes layout, 
				// which causes lag during the animation, 
				// that's why we delay it untill the initial zoom transition ends
				template.focus();
			}
			 

			_bindEvents();
		});

		// set content for center slide (first time)
		self.setContent(_itemHolders[1], _currentItemIndex);
		
		self.updateCurrItem();

		_shout('afterInit');

		if(!_isFixedPosition) {

			// On all versions of iOS lower than 8.0, we check size of viewport every second.
			// 
			// This is done to detect when Safari top & bottom bars appear, 
			// as this action doesn't trigger any events (like resize). 
			// 
			// On iOS8 they fixed this.
			// 
			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
			
			_updateSizeInterval = setInterval(function() {
				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
					self.updateSize();
				}
			}, 1000);
		}

		framework.addClass(template, 'pswp--visible');
	},

	// Close the gallery, then destroy it
	close: function() {
		if(!_isOpen) {
			return;
		}

		_isOpen = false;
		_isDestroying = true;
		_shout('close');
		_unbindEvents();

		_showOrHide(self.currItem, null, true, self.destroy);
	},

	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
	destroy: function() {
		_shout('destroy');

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}
		
		template.setAttribute('aria-hidden', 'true');
		template.className = _initalClassName;

		if(_updateSizeInterval) {
			clearInterval(_updateSizeInterval);
		}

		framework.unbind(self.scrollWrap, _downEvents, self);

		// we unbind scroll event at the end, as closing animation may depend on it
		framework.unbind(window, 'scroll', self);

		_stopDragUpdateLoop();

		_stopAllAnimations();

		_listeners = null;
	},

	/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
	panTo: function(x,y,force) {
		if(!force) {
			if(x > _currPanBounds.min.x) {
				x = _currPanBounds.min.x;
			} else if(x < _currPanBounds.max.x) {
				x = _currPanBounds.max.x;
			}

			if(y > _currPanBounds.min.y) {
				y = _currPanBounds.min.y;
			} else if(y < _currPanBounds.max.y) {
				y = _currPanBounds.max.y;
			}
		}
		
		_panOffset.x = x;
		_panOffset.y = y;
		_applyCurrentZoomPan();
	},
	
	handleEvent: function (e) {
		e = e || window.event;
		if(_globalEventHandlers[e.type]) {
			_globalEventHandlers[e.type](e);
		}
	},


	goTo: function(index) {

		index = _getLoopedId(index);

		var diff = index - _currentItemIndex;
		_indexDiff = diff;

		_currentItemIndex = index;
		self.currItem = _getItemAt( _currentItemIndex );
		_currPositionIndex -= diff;
		
		_moveMainScroll(_slideSize.x * _currPositionIndex);
		

		_stopAllAnimations();
		_mainScrollAnimating = false;

		self.updateCurrItem();
	},
	next: function() {
		self.goTo( _currentItemIndex + 1);
	},
	prev: function() {
		self.goTo( _currentItemIndex - 1);
	},

	// update current zoom/pan objects
	updateCurrZoomItem: function(emulateSetContent) {
		if(emulateSetContent) {
			_shout('beforeChange', 0);
		}

		// itemHolder[1] is middle (current) item
		if(_itemHolders[1].el.children.length) {
			var zoomElement = _itemHolders[1].el.children[0];
			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
				_currZoomElementStyle = zoomElement.style;
			} else {
				_currZoomElementStyle = null;
			}
		} else {
			_currZoomElementStyle = null;
		}
		
		_currPanBounds = self.currItem.bounds;	
		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

		_panOffset.x = _currPanBounds.center.x;
		_panOffset.y = _currPanBounds.center.y;

		if(emulateSetContent) {
			_shout('afterChange');
		}
	},


	invalidateCurrItems: function() {
		_itemsNeedUpdate = true;
		for(var i = 0; i < NUM_HOLDERS; i++) {
			if( _itemHolders[i].item ) {
				_itemHolders[i].item.needsUpdate = true;
			}
		}
	},

	updateCurrItem: function(beforeAnimation) {

		if(_indexDiff === 0) {
			return;
		}

		var diffAbs = Math.abs(_indexDiff),
			tempHolder;

		if(beforeAnimation && diffAbs < 2) {
			return;
		}


		self.currItem = _getItemAt( _currentItemIndex );
		_renderMaxResolution = false;
		
		_shout('beforeChange', _indexDiff);

		if(diffAbs >= NUM_HOLDERS) {
			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
			diffAbs = NUM_HOLDERS;
		}
		for(var i = 0; i < diffAbs; i++) {
			if(_indexDiff > 0) {
				tempHolder = _itemHolders.shift();
				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

				_containerShiftIndex++;
				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
			} else {
				tempHolder = _itemHolders.pop();
				_itemHolders.unshift( tempHolder ); // move last to first

				_containerShiftIndex--;
				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
			}
			
		}

		// reset zoom/pan on previous item
		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

			var prevItem = _getItemAt(_prevItemIndex);
			if(prevItem.initialZoomLevel !== _currZoomLevel) {
				_calculateItemSize(prevItem , _viewportSize );
				_setImageSize(prevItem);
				_applyZoomPanToItem( prevItem ); 				
			}

		}

		// reset diff after update
		_indexDiff = 0;

		self.updateCurrZoomItem();

		_prevItemIndex = _currentItemIndex;

		_shout('afterChange');
		
	},



	updateSize: function(force) {
		
		if(!_isFixedPosition && _options.modal) {
			var windowScrollY = framework.getScrollY();
			if(_currentWindowScrollY !== windowScrollY) {
				template.style.top = windowScrollY + 'px';
				_currentWindowScrollY = windowScrollY;
			}
			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
				return;
			}
			_windowVisibleSize.x = window.innerWidth;
			_windowVisibleSize.y = window.innerHeight;

			//template.style.width = _windowVisibleSize.x + 'px';
			template.style.height = _windowVisibleSize.y + 'px';
		}



		_viewportSize.x = self.scrollWrap.clientWidth;
		_viewportSize.y = self.scrollWrap.clientHeight;

		_updatePageScrollOffset();

		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
		_slideSize.y = _viewportSize.y;

		_moveMainScroll(_slideSize.x * _currPositionIndex);

		_shout('beforeResize'); // even may be used for example to switch image sources


		// don't re-calculate size on inital size update
		if(_containerShiftIndex !== undefined) {

			var holder,
				item,
				hIndex;

			for(var i = 0; i < NUM_HOLDERS; i++) {
				holder = _itemHolders[i];
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

				hIndex = _currentItemIndex+i-1;

				if(_options.loop && _getNumItems() > 2) {
					hIndex = _getLoopedId(hIndex);
				}

				// update zoom level on items and refresh source (if needsUpdate)
				item = _getItemAt( hIndex );

				// re-render gallery item if `needsUpdate`,
				// or doesn't have `bounds` (entirely new slide object)
				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

					self.cleanSlide( item );
					
					self.setContent( holder, hIndex );

					// if "center" slide
					if(i === 1) {
						self.currItem = item;
						self.updateCurrZoomItem(true);
					}

					item.needsUpdate = false;

				} else if(holder.index === -1 && hIndex >= 0) {
					// add content first time
					self.setContent( holder, hIndex );
				}
				if(item && item.container) {
					_calculateItemSize(item, _viewportSize);
					_setImageSize(item);
					_applyZoomPanToItem( item );
				}
				
			}
			_itemsNeedUpdate = false;
		}	

		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
		_currPanBounds = self.currItem.bounds;

		if(_currPanBounds) {
			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;
			_applyCurrentZoomPan( true );
		}
		
		_shout('resize');
	},
	
	// Zoom current item to
	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
		/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

		if(centerPoint) {
			_startZoomLevel = _currZoomLevel;
			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
			_equalizePoints(_startPanOffset, _panOffset);
		}

		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
			destPanOffset = {};

		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

		var initialZoomLevel = _currZoomLevel;
		var initialPanOffset = {
			x: _panOffset.x,
			y: _panOffset.y
		};

		_roundPoint(destPanOffset);

		var onUpdate = function(now) {
			if(now === 1) {
				_currZoomLevel = destZoomLevel;
				_panOffset.x = destPanOffset.x;
				_panOffset.y = destPanOffset.y;
			} else {
				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
			}

			if(updateFn) {
				updateFn(now);
			}

			_applyCurrentZoomPan( now === 1 );
		};

		if(speed) {
			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
		} else {
			onUpdate(1);
		}
	}


};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
	_gestureCheckSpeedTime,

	// pool of objects that are used during dragging of zooming
	p = {}, // first point
	p2 = {}, // second point (for zoom gesture)
	delta = {},
	_currPoint = {},
	_startPoint = {},
	_currPointers = [],
	_startMainScrollPos = {},
	_releaseAnimData,
	_posPoints = [], // array of points during dragging, used to determine type of gesture
	_tempPoint = {},

	_isZoomingIn,
	_verticalDragInitiated,
	_oldAndroidTouchEndTimeout,
	_currZoomedItemIndex = 0,
	_centerPoint = _getEmptyPoint(),
	_lastReleaseTime = 0,
	_isDragging, // at least one pointer is down
	_isMultitouch, // at least two _pointers are down
	_zoomStarted, // zoom level changed during zoom gesture
	_moved,
	_dragAnimFrame,
	_mainScrollShifted,
	_currentPoints, // array of current touch points
	_isZooming,
	_currPointsDistance,
	_startPointsDistance,
	_currPanBounds,
	_mainScrollPos = _getEmptyPoint(),
	_currZoomElementStyle,
	_mainScrollAnimating, // true, if animation after swipe gesture is running
	_midZoomPoint = _getEmptyPoint(),
	_currCenterPoint = _getEmptyPoint(),
	_direction,
	_isFirstMove,
	_opacityChanged,
	_bgOpacity,
	_wasOverInitialZoom,

	_isEqualPoints = function(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	},
	_isNearbyPoints = function(touch0, touch1) {
		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
	},
	_calculatePointsDistance = function(p1, p2) {
		_tempPoint.x = Math.abs( p1.x - p2.x );
		_tempPoint.y = Math.abs( p1.y - p2.y );
		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
	},
	_stopDragUpdateLoop = function() {
		if(_dragAnimFrame) {
			_cancelAF(_dragAnimFrame);
			_dragAnimFrame = null;
		}
	},
	_dragUpdateLoop = function() {
		if(_isDragging) {
			_dragAnimFrame = _requestAF(_dragUpdateLoop);
			_renderMovement();
		}
	},
	_canPan = function() {
		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
	},
	
	// find the closest parent DOM element
	_closestElement = function(el, fn) {
	  	if(!el || el === document) {
	  		return false;
	  	}

	  	// don't search elements above pswp__scroll-wrap
	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
	  		return false;
	  	}

	  	if( fn(el) ) {
	  		return el;
	  	}

	  	return _closestElement(el.parentNode, fn);
	},

	_preventObj = {},
	_preventDefaultEventBehaviour = function(e, isDown) {
	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

		_shout('preventDragEvent', e, isDown, _preventObj);
		return _preventObj.prevent;

	},
	_convertTouchToPoint = function(touch, p) {
		p.x = touch.pageX;
		p.y = touch.pageY;
		p.id = touch.identifier;
		return p;
	},
	_findCenterOfPoints = function(p1, p2, pCenter) {
		pCenter.x = (p1.x + p2.x) * 0.5;
		pCenter.y = (p1.y + p2.y) * 0.5;
	},
	_pushPosPoint = function(time, x, y) {
		if(time - _gestureCheckSpeedTime > 50) {
			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
			o.x = x;
			o.y = y; 
			_posPoints.push(o);
			_gestureCheckSpeedTime = time;
		}
	},

	_calculateVerticalDragOpacityRatio = function() {
		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
	},

	
	// points pool, reused during touch events
	_ePoint1 = {},
	_ePoint2 = {},
	_tempPointsArr = [],
	_tempCounter,
	_getTouchPoints = function(e) {
		// clean up previous points, without recreating array
		while(_tempPointsArr.length > 0) {
			_tempPointsArr.pop();
		}

		if(!_pointerEventEnabled) {
			if(e.type.indexOf('touch') > -1) {

				if(e.touches && e.touches.length > 0) {
					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
					if(e.touches.length > 1) {
						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
					}
				}
				
			} else {
				_ePoint1.x = e.pageX;
				_ePoint1.y = e.pageY;
				_ePoint1.id = '';
				_tempPointsArr[0] = _ePoint1;//_ePoint1;
			}
		} else {
			_tempCounter = 0;
			// we can use forEach, as pointer events are supported only in modern browsers
			_currPointers.forEach(function(p) {
				if(_tempCounter === 0) {
					_tempPointsArr[0] = p;
				} else if(_tempCounter === 1) {
					_tempPointsArr[1] = p;
				}
				_tempCounter++;

			});
		}
		return _tempPointsArr;
	},

	_panOrMoveMainScroll = function(axis, delta) {

		var panFriction,
			overDiff = 0,
			newOffset = _panOffset[axis] + delta[axis],
			startOverDiff,
			dir = delta[axis] > 0,
			newMainScrollPosition = _mainScrollPos.x + delta.x,
			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			newPanPos,
			newMainScrollPos;

		// calculate fdistance over the bounds and friction
		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
			panFriction = _options.panEndFriction;
			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
			// Looks not as nice as was expected. Left for history.
			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
		} else {
			panFriction = 1;
		}
		
		newOffset = _panOffset[axis] + delta[axis] * panFriction;

		// move main scroll or start panning
		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


			if(!_currZoomElementStyle) {
				
				newMainScrollPos = newMainScrollPosition;

			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
				
				if(dir) {
					if(newOffset > _currPanBounds.min[axis]) {
						panFriction = _options.panEndFriction;
						overDiff = _currPanBounds.min[axis] - newOffset;
						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
					}
					
					// drag right
					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;
						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}
					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
						
					}

				} else {

					if(newOffset < _currPanBounds.max[axis] ) {
						panFriction =_options.panEndFriction;
						overDiff = newOffset - _currPanBounds.max[axis];
						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
					}

					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;

						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}

					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
					}

				}


				//
			}

			if(axis === 'x') {

				if(newMainScrollPos !== undefined) {
					_moveMainScroll(newMainScrollPos, true);
					if(newMainScrollPos === _startMainScrollPos.x) {
						_mainScrollShifted = false;
					} else {
						_mainScrollShifted = true;
					}
				}

				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
					if(newPanPos !== undefined) {
						_panOffset.x = newPanPos;
					} else if(!_mainScrollShifted) {
						_panOffset.x += delta.x * panFriction;
					}
				}

				return newMainScrollPos !== undefined;
			}

		}

		if(!_mainScrollAnimating) {
			
			if(!_mainScrollShifted) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					_panOffset[axis] += delta[axis] * panFriction;
				
				}
			}

			
		}
		
	},

	// Pointerdown/touchstart/mousedown handler
	_onDragStart = function(e) {

		// Allow dragging only via left mouse button.
		// As this handler is not added in IE8 - we ignore e.which
		// 
		// http://www.quirksmode.org/js/events_properties.html
		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
		if(e.type === 'mousedown' && e.button > 0  ) {
			return;
		}

		if(_initialZoomRunning) {
			e.preventDefault();
			return;
		}

		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
			return;
		}

		if(_preventDefaultEventBehaviour(e, true)) {
			e.preventDefault();
		}



		_shout('pointerDown');

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex < 0) {
				pointerIndex = _currPointers.length;
			}
			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
		}
		


		var startPointsList = _getTouchPoints(e),
			numPoints = startPointsList.length;

		_currentPoints = null;

		_stopAllAnimations();

		// init drag
		if(!_isDragging || numPoints === 1) {

			

			_isDragging = _isFirstMove = true;
			framework.bind(window, _upMoveEvents, self);

			_isZoomingIn = 
				_wasOverInitialZoom = 
				_opacityChanged = 
				_verticalDragInitiated = 
				_mainScrollShifted = 
				_moved = 
				_isMultitouch = 
				_zoomStarted = false;

			_direction = null;

			_shout('firstTouchStart', startPointsList);

			_equalizePoints(_startPanOffset, _panOffset);

			_currPanDist.x = _currPanDist.y = 0;
			_equalizePoints(_currPoint, startPointsList[0]);
			_equalizePoints(_startPoint, _currPoint);

			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

			_posPoints = [{
				x: _currPoint.x,
				y: _currPoint.y
			}];

			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

			//_mainScrollAnimationEnd(true);
			_calculatePanBounds( _currZoomLevel, true );
			
			// Start rendering
			_stopDragUpdateLoop();
			_dragUpdateLoop();
			
		}

		// init zoom
		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
			_startZoomLevel = _currZoomLevel;
			_zoomStarted = false; // true if zoom changed at least once

			_isZooming = _isMultitouch = true;
			_currPanDist.y = _currPanDist.x = 0;

			_equalizePoints(_startPanOffset, _panOffset);

			_equalizePoints(p, startPointsList[0]);
			_equalizePoints(p2, startPointsList[1]);

			_findCenterOfPoints(p, p2, _currCenterPoint);

			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
		}


	},

	// Pointermove/touchmove/mousemove handler
	_onDragMove = function(e) {

		e.preventDefault();

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex > -1) {
				var p = _currPointers[pointerIndex];
				p.x = e.pageX;
				p.y = e.pageY; 
			}
		}

		if(_isDragging) {
			var touchesList = _getTouchPoints(e);
			if(!_direction && !_moved && !_isZooming) {

				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
					// if main scroll position is shifted – direction is always horizontal
					_direction = 'h';
				} else {
					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
					// check the direction of movement
					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
						_direction = diff > 0 ? 'h' : 'v';
						_currentPoints = touchesList;
					}
				}
				
			} else {
				_currentPoints = touchesList;
			}
		}	
	},
	// 
	_renderMovement =  function() {

		if(!_currentPoints) {
			return;
		}

		var numPoints = _currentPoints.length;

		if(numPoints === 0) {
			return;
		}

		_equalizePoints(p, _currentPoints[0]);

		delta.x = p.x - _currPoint.x;
		delta.y = p.y - _currPoint.y;

		if(_isZooming && numPoints > 1) {
			// Handle behaviour for more than 1 point

			_currPoint.x = p.x;
			_currPoint.y = p.y;
		
			// check if one of two points changed
			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
				return;
			}

			_equalizePoints(p2, _currentPoints[1]);


			if(!_zoomStarted) {
				_zoomStarted = true;
				_shout('zoomGestureStarted');
			}
			
			// Distance between two points
			var pointsDistance = _calculatePointsDistance(p,p2);

			var zoomLevel = _calculateZoomLevel(pointsDistance);

			// slightly over the of initial zoom level
			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
				_wasOverInitialZoom = true;
			}

			// Apply the friction if zoom level is out of the bounds
			var zoomFriction = 1,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( zoomLevel < minZoomLevel ) {
				
				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
					// fade out background if zooming out
					var minusDiff = minZoomLevel - zoomLevel;
					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

					_applyBgOpacity(percent);
					_shout('onPinchClose', percent);
					_opacityChanged = true;
				} else {
					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
				}
				
			} else if ( zoomLevel > maxZoomLevel ) {
				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
				if(zoomFriction > 1) {
					zoomFriction = 1;
				}
				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
			}

			if(zoomFriction < 0) {
				zoomFriction = 0;
			}

			// distance between touch points after friction is applied
			_currPointsDistance = pointsDistance;

			// _centerPoint - The point in the middle of two pointers
			_findCenterOfPoints(p, p2, _centerPoint);
		
			// paning with two pointers pressed
			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
			_equalizePoints(_currCenterPoint, _centerPoint);

			_panOffset.x = _calculatePanOffset('x', zoomLevel);
			_panOffset.y = _calculatePanOffset('y', zoomLevel);

			_isZoomingIn = zoomLevel > _currZoomLevel;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan();

		} else {

			// handle behaviour for one point (dragging or panning)

			if(!_direction) {
				return;
			}

			if(_isFirstMove) {
				_isFirstMove = false;

				// subtract drag distance that was used during the detection direction  

				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
					delta.x -= _currentPoints[0].x - _startPoint.x;
				}
				
				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
					delta.y -= _currentPoints[0].y - _startPoint.y;
				}
			}

			_currPoint.x = p.x;
			_currPoint.y = p.y;

			// do nothing if pointers position hasn't changed
			if(delta.x === 0 && delta.y === 0) {
				return;
			}

			if(_direction === 'v' && _options.closeOnVerticalDrag) {
				if(!_canPan()) {
					_currPanDist.y += delta.y;
					_panOffset.y += delta.y;

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					_verticalDragInitiated = true;
					_shout('onVerticalDrag', opacityRatio);

					_applyBgOpacity(opacityRatio);
					_applyCurrentZoomPan();
					return ;
				}
			}

			_pushPosPoint(_getCurrentTime(), p.x, p.y);

			_moved = true;
			_currPanBounds = self.currItem.bounds;
			
			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
			if(!mainScrollChanged) {
				_panOrMoveMainScroll('y', delta);

				_roundPoint(_panOffset);
				_applyCurrentZoomPan();
			}

		}

	},
	
	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
	_onDragRelease = function(e) {

		if(_features.isOldAndroid ) {

			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
				return;
			}

			// on Android (v4.1, 4.2, 4.3 & possibly older) 
			// ghost mousedown/up event isn't preventable via e.preventDefault,
			// which causes fake mousedown event
			// so we block mousedown/up for 600ms
			if( e.type.indexOf('touch') > -1 ) {
				clearTimeout(_oldAndroidTouchEndTimeout);
				_oldAndroidTouchEndTimeout = setTimeout(function() {
					_oldAndroidTouchEndTimeout = 0;
				}, 600);
			}
			
		}

		_shout('pointerUp');

		if(_preventDefaultEventBehaviour(e, false)) {
			e.preventDefault();
		}

		var releasePoint;

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			
			if(pointerIndex > -1) {
				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

				if(navigator.pointerEnabled) {
					releasePoint.type = e.pointerType || 'mouse';
				} else {
					var MSPOINTER_TYPES = {
						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
						3: 'pen' // event.MSPOINTER_TYPE_PEN
					};
					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

					if(!releasePoint.type) {
						releasePoint.type = e.pointerType || 'mouse';
					}
				}

			}
		}

		var touchList = _getTouchPoints(e),
			gestureType,
			numPoints = touchList.length;

		if(e.type === 'mouseup') {
			numPoints = 0;
		}

		// Do nothing if there were 3 touch points or more
		if(numPoints === 2) {
			_currentPoints = null;
			return true;
		}

		// if second pointer released
		if(numPoints === 1) {
			_equalizePoints(_startPoint, touchList[0]);
		}				


		// pointer hasn't moved, send "tap release" point
		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
			if(!releasePoint) {
				if(e.type === 'mouseup') {
					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
				} else if(e.changedTouches && e.changedTouches[0]) {
					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
				}		
			}

			_shout('touchRelease', e, releasePoint);
		}

		// Difference in time between releasing of two last touch points (zoom gesture)
		var releaseTimeDiff = -1;

		// Gesture completed, no pointers left
		if(numPoints === 0) {
			_isDragging = false;
			framework.unbind(window, _upMoveEvents, self);

			_stopDragUpdateLoop();

			if(_isZooming) {
				// Two points released at the same time
				releaseTimeDiff = 0;
			} else if(_lastReleaseTime !== -1) {
				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
			}
		}
		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
		
		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
			gestureType = 'zoom';
		} else {
			gestureType = 'swipe';
		}

		if(_isZooming && numPoints < 2) {
			_isZooming = false;

			// Only second point released
			if(numPoints === 1) {
				gestureType = 'zoomPointerUp';
			}
			_shout('zoomGestureEnded');
		}

		_currentPoints = null;
		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
			// nothing to animate
			return;
		}
	
		_stopAllAnimations();

		
		if(!_releaseAnimData) {
			_releaseAnimData = _initDragReleaseAnimationData();
		}
		
		_releaseAnimData.calculateSwipeSpeed('x');


		if(_verticalDragInitiated) {

			var opacityRatio = _calculateVerticalDragOpacityRatio();

			if(opacityRatio < _options.verticalDragRange) {
				self.close();
			} else {
				var initalPanY = _panOffset.y,
					initialBgOpacity = _bgOpacity;

				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
					
					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
					_applyCurrentZoomPan();
				});

				_shout('onVerticalDrag', 1);
			}

			return;
		}


		// main scroll 
		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
			if(itemChanged) {
				return;
			}
			gestureType = 'zoomPointerUp';
		}

		// prevent zoom/pan animation when main scroll animation runs
		if(_mainScrollAnimating) {
			return;
		}
		
		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
		if(gestureType !== 'swipe') {
			_completeZoomGesture();
			return;
		}
	
		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
			_completePanGesture(_releaseAnimData);
		}
	},


	// Returns object with data about gesture
	// It's created only once and then reused
	_initDragReleaseAnimationData  = function() {
		// temp local vars
		var lastFlickDuration,
			tempReleasePos;

		// s = this
		var s = {
			lastFlickOffset: {},
			lastFlickDist: {},
			lastFlickSpeed: {},
			slowDownRatio:  {},
			slowDownRatioReverse:  {},
			speedDecelerationRatio:  {},
			speedDecelerationRatioAbs:  {},
			distanceOffset:  {},
			backAnimDestination: {},
			backAnimStarted: {},
			calculateSwipeSpeed: function(axis) {
				

				if( _posPoints.length > 1) {
					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
					tempReleasePos = _posPoints[_posPoints.length-2][axis];
				} else {
					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
					tempReleasePos = _startPoint[axis];
				}
				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
				if(s.lastFlickDist[axis] > 20) {
					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
				} else {
					s.lastFlickSpeed[axis] = 0;
				}
				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
					s.lastFlickSpeed[axis] = 0;
				}
				
				s.slowDownRatio[axis] = 0.95;
				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
				s.speedDecelerationRatio[axis] = 1;
			},

			calculateOverBoundsAnimOffset: function(axis, speed) {
				if(!s.backAnimStarted[axis]) {

					if(_panOffset[axis] > _currPanBounds.min[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.min[axis];
						
					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.max[axis];
					}

					if(s.backAnimDestination[axis] !== undefined) {
						s.slowDownRatio[axis] = 0.7;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

							s.lastFlickSpeed[axis] = 0;
							s.backAnimStarted[axis] = true;

							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
								s.backAnimDestination[axis], 
								speed || 300, 
								framework.easing.sine.out, 
								function(pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								}
							);

						}
					}
				}
			},

			// Reduces the speed by slowDownRatio (per 10ms)
			calculateAnimOffset: function(axis) {
				if(!s.backAnimStarted[axis]) {
					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
												s.slowDownRatioReverse[axis] - 
												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
					_panOffset[axis] += s.distanceOffset[axis];

				}
			},

			panAnimLoop: function() {
				if ( _animations.zoomPan ) {
					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

					s.now = _getCurrentTime();
					s.timeDiff = s.now - s.lastNow;
					s.lastNow = s.now;
					
					s.calculateAnimOffset('x');
					s.calculateAnimOffset('y');

					_applyCurrentZoomPan();
					
					s.calculateOverBoundsAnimOffset('x');
					s.calculateOverBoundsAnimOffset('y');


					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

						// round pan position
						_panOffset.x = Math.round(_panOffset.x);
						_panOffset.y = Math.round(_panOffset.y);
						_applyCurrentZoomPan();
						
						_stopAnimation('zoomPan');
						return;
					}
				}

			}
		};
		return s;
	},

	_completePanGesture = function(animData) {
		// calculate swipe speed for Y axis (paanning)
		animData.calculateSwipeSpeed('y');

		_currPanBounds = self.currItem.bounds;
		
		animData.backAnimDestination = {};
		animData.backAnimStarted = {};

		// Avoid acceleration animation if speed is too low
		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
			animData.calculateOverBoundsAnimOffset('x');
			animData.calculateOverBoundsAnimOffset('y');
			return true;
		}

		// Animation loop that controls the acceleration after pan gesture ends
		_registerStartAnimation('zoomPan');
		animData.lastNow = _getCurrentTime();
		animData.panAnimLoop();
	},


	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
		var itemChanged;
		if(!_mainScrollAnimating) {
			_currZoomedItemIndex = _currentItemIndex;
		}


		
		var itemsDiff;

		if(gestureType === 'swipe') {
			var totalShiftDist = _currPoint.x - _startPoint.x,
				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
			// and last flick gesture was in right direction
			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
				// go to prev item
				itemsDiff = -1;
			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
				// go to next item
				itemsDiff = 1;
			}
		}

		var nextCircle;

		if(itemsDiff) {
			
			_currentItemIndex += itemsDiff;

			if(_currentItemIndex < 0) {
				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
				nextCircle = true;
			} else if(_currentItemIndex >= _getNumItems()) {
				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
				nextCircle = true;
			}

			if(!nextCircle || _options.loop) {
				_indexDiff += itemsDiff;
				_currPositionIndex -= itemsDiff;
				itemChanged = true;
			}
			

			
		}

		var animateToX = _slideSize.x * _currPositionIndex;
		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
		var finishAnimDuration;


		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
			// "return to current" duration, e.g. when dragging from slide 0 to -1
			finishAnimDuration = 333; 
		} else {
			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
									333;

			finishAnimDuration = Math.min(finishAnimDuration, 400);
			finishAnimDuration = Math.max(finishAnimDuration, 250);
		}

		if(_currZoomedItemIndex === _currentItemIndex) {
			itemChanged = false;
		}
		
		_mainScrollAnimating = true;
		
		_shout('mainScrollAnimStart');

		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
			_moveMainScroll,
			function() {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;
				
				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}
				
				_shout('mainScrollAnimComplete');
			}
		);

		if(itemChanged) {
			self.updateCurrItem(true);
		}

		return itemChanged;
	},

	_calculateZoomLevel = function(touchesDistance) {
		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
	},

	// Resets zoom if it's out of bounds
	_completeZoomGesture = function() {
		var destZoomLevel = _currZoomLevel,
			minZoomLevel = _getMinZoomLevel(),
			maxZoomLevel = _getMaxZoomLevel();

		if ( _currZoomLevel < minZoomLevel ) {
			destZoomLevel = minZoomLevel;
		} else if ( _currZoomLevel > maxZoomLevel ) {
			destZoomLevel = maxZoomLevel;
		}

		var destOpacity = 1,
			onUpdate,
			initialOpacity = _bgOpacity;

		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
			//_closedByScroll = true;
			self.close();
			return true;
		}

		if(_opacityChanged) {
			onUpdate = function(now) {
				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
			};
		}

		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
		return true;
	};


_registerModule('Gestures', {
	publicMethods: {

		initGestures: function() {

			// helper function that builds touch/pointer/mouse events
			var addEventNames = function(pref, down, move, up, cancel) {
				_dragStartEvent = pref + down;
				_dragMoveEvent = pref + move;
				_dragEndEvent = pref + up;
				if(cancel) {
					_dragCancelEvent = pref + cancel;
				} else {
					_dragCancelEvent = '';
				}
			};

			_pointerEventEnabled = _features.pointerEvent;
			if(_pointerEventEnabled && _features.touch) {
				// we don't need touch events, if browser supports pointer events
				_features.touch = false;
			}

			if(_pointerEventEnabled) {
				if(navigator.pointerEnabled) {
					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
				} else {
					// IE10 pointer events are case-sensitive
					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
				}
			} else if(_features.touch) {
				addEventNames('touch', 'start', 'move', 'end', 'cancel');
				_likelyTouchDevice = true;
			} else {
				addEventNames('mouse', 'down', 'move', 'up');	
			}

			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
			_downEvents = _dragStartEvent;

			if(_pointerEventEnabled && !_likelyTouchDevice) {
				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
			}
			// make variable public
			self.likelyTouchDevice = _likelyTouchDevice; 
			
			_globalEventHandlers[_dragStartEvent] = _onDragStart;
			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

			if(_dragCancelEvent) {
				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
			}

			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
			if(_features.touch) {
				_downEvents += ' mousedown';
				_upMoveEvents += ' mousemove mouseup';
				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
			}

			if(!_likelyTouchDevice) {
				// don't allow pan to next slide from zoomed state on Desktop
				_options.allowPanToNext = false;
			}
		}

	}
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */


var _showOrHideTimeout,
	_showOrHide = function(item, img, out, completeFn) {

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}

		_initialZoomRunning = true;
		_initialContentSet = true;
		
		// dimensions of small thumbnail {x:,y:,w:}.
		// Height is optional, as calculated based on large image.
		var thumbBounds; 
		if(item.initialLayout) {
			thumbBounds = item.initialLayout;
			item.initialLayout = null;
		} else {
			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
		}

		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

		var onComplete = function() {
			_stopAnimation('initialZoom');
			if(!out) {
				_applyBgOpacity(1);
				if(img) {
					img.style.display = 'block';
				}
				framework.addClass(template, 'pswp--animated-in');
				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
			} else {
				self.template.removeAttribute('style');
				self.bg.removeAttribute('style');
			}

			if(completeFn) {
				completeFn();
			}
			_initialZoomRunning = false;
		};

		// if bounds aren't provided, just open gallery without animation
		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

			_shout('initialZoom' + (out ? 'Out' : 'In') );

			_currZoomLevel = item.initialZoomLevel;
			_equalizePoints(_panOffset,  item.initialPosition );
			_applyCurrentZoomPan();

			template.style.opacity = out ? 0 : 1;
			_applyBgOpacity(1);

			if(duration) {
				setTimeout(function() {
					onComplete();
				}, duration);
			} else {
				onComplete();
			}

			return;
		}

		var startAnimation = function() {
			var closeWithRaf = _closedByScroll,
				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
			
			// apply hw-acceleration to image
			if(item.miniImg) {
				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
			}

			if(!out) {
				_currZoomLevel = thumbBounds.w / item.w;
				_panOffset.x = thumbBounds.x;
				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
				_applyCurrentZoomPan();
			}

			_registerStartAnimation('initialZoom');
			
			if(out && !closeWithRaf) {
				framework.removeClass(template, 'pswp--animated-in');
			}

			if(fadeEverything) {
				if(out) {
					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
				} else {
					setTimeout(function() {
						framework.addClass(template, 'pswp--animate_opacity');
					}, 30);
				}
			}

			_showOrHideTimeout = setTimeout(function() {

				_shout('initialZoom' + (out ? 'Out' : 'In') );
				

				if(!out) {

					// "in" animation always uses CSS transitions (instead of rAF).
					// CSS transition work faster here, 
					// as developer may also want to animate other things, 
					// like ui on top of sliding area, which can be animated just via CSS
					
					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset,  item.initialPosition );
					_applyCurrentZoomPan();
					_applyBgOpacity(1);

					if(fadeEverything) {
						template.style.opacity = 1;
					} else {
						_applyBgOpacity(1);
					}

					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
				} else {

					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
					var destZoomLevel = thumbBounds.w / item.w,
						initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						initialZoomLevel = _currZoomLevel,
						initalBgOpacity = _bgOpacity,
						onUpdate = function(now) {
							
							if(now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}
							
							_applyCurrentZoomPan();
							if(fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
							}
						};

					if(closeWithRaf) {
						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
					} else {
						onUpdate(1);
						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					}
				}
			
			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
		};
		startAnimation();

		
	};

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/

var _items,
	_tempPanAreaSize = {},
	_imagesToAppendPool = [],
	_initialContentSet,
	_initialZoomRunning,
	_controllerDefaultOptions = {
		index: 0,
		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
		forceProgressiveLoading: false, // TODO
		preload: [1,1],
		getNumItemsFn: function() {
			return _items.length;
		}
	};


var _getItemAt,
	_getNumItems,
	_initialIsLoop,
	_getZeroBounds = function() {
		return {
			center:{x:0,y:0}, 
			max:{x:0,y:0}, 
			min:{x:0,y:0}
		};
	},
	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
		var bounds = item.bounds;

		// position of element when it's centered
		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

		// maximum pan position
		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
							Math.round(_tempPanAreaSize.x - realPanElementW) : 
							bounds.center.x;
		
		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
							bounds.center.y;
		
		// minimum pan position
		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
	},
	_calculateItemSize = function(item, viewportSize, zoomLevel) {

		if (item.src && !item.loadError) {
			var isInitial = !zoomLevel;
			
			if(isInitial) {
				if(!item.vGap) {
					item.vGap = {top:0,bottom:0};
				}
				// allows overriding vertical margin for individual items
				_shout('parseVerticalMargin', item);
			}


			_tempPanAreaSize.x = viewportSize.x;
			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

			if (isInitial) {
				var hRatio = _tempPanAreaSize.x / item.w;
				var vRatio = _tempPanAreaSize.y / item.h;

				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

				var scaleMode = _options.scaleMode;

				if (scaleMode === 'orig') {
					zoomLevel = 1;
				} else if (scaleMode === 'fit') {
					zoomLevel = item.fitRatio;
				}

				if (zoomLevel > 1) {
					zoomLevel = 1;
				}

				item.initialZoomLevel = zoomLevel;
				
				if(!item.bounds) {
					// reuse bounds object
					item.bounds = _getZeroBounds(); 
				}
			}

			if(!zoomLevel) {
				return;
			}

			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

			if (isInitial && zoomLevel === item.initialZoomLevel) {
				item.initialPosition = item.bounds.center;
			}

			return item.bounds;
		} else {
			item.w = item.h = 0;
			item.initialZoomLevel = item.fitRatio = 1;
			item.bounds = _getZeroBounds();
			item.initialPosition = item.bounds.center;

			// if it's not image, we return zero bounds (content is not zoomable)
			return item.bounds;
		}
		
	},

	


	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
		

		if(item.loadError) {
			return;
		}

		if(img) {

			item.imageAppended = true;
			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
			
			baseDiv.appendChild(img);

			if(keepPlaceholder) {
				setTimeout(function() {
					if(item && item.loaded && item.placeholder) {
						item.placeholder.style.display = 'none';
						item.placeholder = null;
					}
				}, 500);
			}
		}
	},
	


	_preloadImage = function(item) {
		item.loading = true;
		item.loaded = false;
		var img = item.img = framework.createEl('pswp__img', 'img');
		var onComplete = function() {
			item.loading = false;
			item.loaded = true;

			if(item.loadComplete) {
				item.loadComplete(item);
			} else {
				item.img = null; // no need to store image object
			}
			img.onload = img.onerror = null;
			img = null;
		};
		img.onload = onComplete;
		img.onerror = function() {
			item.loadError = true;
			onComplete();
		};		

		img.src = item.src;// + '?a=' + Math.random();

		return img;
	},
	_checkForError = function(item, cleanUp) {
		if(item.src && item.loadError && item.container) {

			if(cleanUp) {
				item.container.innerHTML = '';
			}

			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
			return true;
			
		}
	},
	_setImageSize = function(item, img, maxRes) {
		if(!item.src) {
			return;
		}

		if(!img) {
			img = item.container.lastChild;
		}

		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
		
		if(item.placeholder && !item.loaded) {
			item.placeholder.style.width = w + 'px';
			item.placeholder.style.height = h + 'px';
		}

		img.style.width = w + 'px';
		img.style.height = h + 'px';
	},
	_appendImagesPool = function() {

		if(_imagesToAppendPool.length) {
			var poolItem;

			for(var i = 0; i < _imagesToAppendPool.length; i++) {
				poolItem = _imagesToAppendPool[i];
				if( poolItem.holder.index === poolItem.index ) {
					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
				}
			}
			_imagesToAppendPool = [];
		}
	};
	


_registerModule('Controller', {

	publicMethods: {

		lazyLoadItem: function(index) {
			index = _getLoopedId(index);
			var item = _getItemAt(index);

			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
				return;
			}

			_shout('gettingData', index, item);

			if (!item.src) {
				return;
			}

			_preloadImage(item);
		},
		initController: function() {
			framework.extend(_options, _controllerDefaultOptions, true);
			self.items = _items = items;
			_getItemAt = self.getItemAt;
			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



			_initialIsLoop = _options.loop;
			if(_getNumItems() < 3) {
				_options.loop = false; // disable loop if less then 3 items
			}

			_listen('beforeChange', function(diff) {

				var p = _options.preload,
					isNext = diff === null ? true : (diff >= 0),
					preloadBefore = Math.min(p[0], _getNumItems() ),
					preloadAfter = Math.min(p[1], _getNumItems() ),
					i;


				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
					self.lazyLoadItem(_currentItemIndex+i);
				}
				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
					self.lazyLoadItem(_currentItemIndex-i);
				}
			});

			_listen('initialLayout', function() {
				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			});

			_listen('mainScrollAnimComplete', _appendImagesPool);
			_listen('initialZoomInEnd', _appendImagesPool);



			_listen('destroy', function() {
				var item;
				for(var i = 0; i < _items.length; i++) {
					item = _items[i];
					// remove reference to DOM elements, for GC
					if(item.container) {
						item.container = null; 
					}
					if(item.placeholder) {
						item.placeholder = null;
					}
					if(item.img) {
						item.img = null;
					}
					if(item.preloader) {
						item.preloader = null;
					}
					if(item.loadError) {
						item.loaded = item.loadError = false;
					}
				}
				_imagesToAppendPool = null;
			});
		},


		getItemAt: function(index) {
			if (index >= 0) {
				return _items[index] !== undefined ? _items[index] : false;
			}
			return false;
		},

		allowProgressiveImg: function() {
			// 1. Progressive image loading isn't working on webkit/blink 
			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
			//    
			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
			//    That's why it's disabled on touch devices (mainly because of swipe transition)
			//    
			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

			// Don't allow progressive loading on non-large touch devices
			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
		},

		setContent: function(holder, index) {

			if(_options.loop) {
				index = _getLoopedId(index);
			}

			var prevItem = self.getItemAt(holder.index);
			if(prevItem) {
				prevItem.container = null;
			}
	
			var item = self.getItemAt(index),
				img;
			
			if(!item) {
				holder.el.innerHTML = '';
				return;
			}

			// allow to override data
			_shout('gettingData', index, item);

			holder.index = index;
			holder.item = item;

			// base container DIV is created only once for each of 3 holders
			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

			

			if(!item.src && item.html) {
				if(item.html.tagName) {
					baseDiv.appendChild(item.html);
				} else {
					baseDiv.innerHTML = item.html;
				}
			}

			_checkForError(item);

			_calculateItemSize(item, _viewportSize);
			
			if(item.src && !item.loadError && !item.loaded) {

				item.loadComplete = function(item) {

					// gallery closed before image finished loading
					if(!_isOpen) {
						return;
					}

					// check if holder hasn't changed while image was loading
					if(holder && holder.index === index ) {
						if( _checkForError(item, true) ) {
							item.loadComplete = item.img = null;
							_calculateItemSize(item, _viewportSize);
							_applyZoomPanToItem(item);

							if(holder.index === _currentItemIndex) {
								// recalculate dimensions
								self.updateCurrZoomItem();
							}
							return;
						}
						if( !item.imageAppended ) {
							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
								_imagesToAppendPool.push({
									item:item,
									baseDiv:baseDiv,
									img:item.img,
									index:index,
									holder:holder,
									clearPlaceholder:true
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
							}
						} else {
							// remove preloader & mini-img
							if(!_initialZoomRunning && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}
					}

					item.loadComplete = null;
					item.img = null; // no need to store image element after it's added

					_shout('imageLoadComplete', index, item);
				};

				if(framework.features.transform) {
					
					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
					if(item.msrc) {
						placeholder.src = item.msrc;
					}
					
					_setImageSize(item, placeholder);

					baseDiv.appendChild(placeholder);
					item.placeholder = placeholder;

				}
				

				

				if(!item.loading) {
					_preloadImage(item);
				}


				if( self.allowProgressiveImg() ) {
					// just append image
					if(!_initialContentSet && _features.transform) {
						_imagesToAppendPool.push({
							item:item, 
							baseDiv:baseDiv, 
							img:item.img, 
							index:index, 
							holder:holder
						});
					} else {
						_appendImage(index, item, baseDiv, item.img, true, true);
					}
				}
				
			} else if(item.src && !item.loadError) {
				// image object is created every time, due to bugs of image loading & delay when switching images
				img = framework.createEl('pswp__img', 'img');
				img.style.opacity = 1;
				img.src = item.src;
				_setImageSize(item, img);
				_appendImage(index, item, baseDiv, img, true);
			}
			

			if(!_initialContentSet && index === _currentItemIndex) {
				_currZoomElementStyle = baseDiv.style;
				_showOrHide(item, (img ||item.img) );
			} else {
				_applyZoomPanToItem(item);
			}

			holder.el.innerHTML = '';
			holder.el.appendChild(baseDiv);
		},

		cleanSlide: function( item ) {
			if(item.img ) {
				item.img.onload = item.img.onerror = null;
			}
			item.loaded = item.loading = item.img = item.imageAppended = false;
		}

	}
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */

var tapTimer,
	tapReleasePoint = {},
	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
		var e = document.createEvent( 'CustomEvent' ),
			eDetail = {
				origEvent:origEvent, 
				target:origEvent.target, 
				releasePoint: releasePoint, 
				pointerType:pointerType || 'touch'
			};

		e.initCustomEvent( 'pswpTap', true, true, eDetail );
		origEvent.target.dispatchEvent(e);
	};

_registerModule('Tap', {
	publicMethods: {
		initTap: function() {
			_listen('firstTouchStart', self.onTapStart);
			_listen('touchRelease', self.onTapRelease);
			_listen('destroy', function() {
				tapReleasePoint = {};
				tapTimer = null;
			});
		},
		onTapStart: function(touchList) {
			if(touchList.length > 1) {
				clearTimeout(tapTimer);
				tapTimer = null;
			}
		},
		onTapRelease: function(e, releasePoint) {
			if(!releasePoint) {
				return;
			}

			if(!_moved && !_isMultitouch && !_numAnimations) {
				var p0 = releasePoint;
				if(tapTimer) {
					clearTimeout(tapTimer);
					tapTimer = null;

					// Check if taped on the same place
					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
						_shout('doubleTap', p0);
						return;
					}
				}

				if(releasePoint.type === 'mouse') {
					_dispatchTapEvent(e, releasePoint, 'mouse');
					return;
				}

				var clickedTagName = e.target.tagName.toUpperCase();
				// avoid double tap delay on buttons and elements that have class pswp__single-tap
				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
					_dispatchTapEvent(e, releasePoint);
					return;
				}

				_equalizePoints(tapReleasePoint, p0);

				tapTimer = setTimeout(function() {
					_dispatchTapEvent(e, releasePoint);
					tapTimer = null;
				}, 300);
			}
		}
	}
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */

var _wheelDelta;
	
_registerModule('DesktopZoom', {

	publicMethods: {

		initDesktopZoom: function() {

			if(_oldIE) {
				// no zoom for old IE (<=8)
				return;
			}

			if(_likelyTouchDevice) {
				// if detected hardware touch support, we wait until mouse is used,
				// and only then apply desktop-zoom features
				_listen('mouseUsed', function() {
					self.setupDesktopZoom();
				});
			} else {
				self.setupDesktopZoom(true);
			}

		},

		setupDesktopZoom: function(onInit) {

			_wheelDelta = {};

			var events = 'wheel mousewheel DOMMouseScroll';
			
			_listen('bindEvents', function() {
				framework.bind(template, events,  self.handleMouseWheel);
			});

			_listen('unbindEvents', function() {
				if(_wheelDelta) {
					framework.unbind(template, events, self.handleMouseWheel);
				}
			});

			self.mouseZoomedIn = false;

			var hasDraggingClass,
				updateZoomable = function() {
					if(self.mouseZoomedIn) {
						framework.removeClass(template, 'pswp--zoomed-in');
						self.mouseZoomedIn = false;
					}
					if(_currZoomLevel < 1) {
						framework.addClass(template, 'pswp--zoom-allowed');
					} else {
						framework.removeClass(template, 'pswp--zoom-allowed');
					}
					removeDraggingClass();
				},
				removeDraggingClass = function() {
					if(hasDraggingClass) {
						framework.removeClass(template, 'pswp--dragging');
						hasDraggingClass = false;
					}
				};

			_listen('resize' , updateZoomable);
			_listen('afterChange' , updateZoomable);
			_listen('pointerDown', function() {
				if(self.mouseZoomedIn) {
					hasDraggingClass = true;
					framework.addClass(template, 'pswp--dragging');
				}
			});
			_listen('pointerUp', removeDraggingClass);

			if(!onInit) {
				updateZoomable();
			}
			
		},

		handleMouseWheel: function(e) {

			if(_currZoomLevel <= self.currItem.fitRatio) {
				if( _options.modal ) {

					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
						e.preventDefault();
					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
						// close PhotoSwipe
						// if browser supports transforms & scroll changed enough
						_closedByScroll = true;
						self.close();
					}

				}
				return true;
			}

			// allow just one event to fire
			e.stopPropagation();

			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
			_wheelDelta.x = 0;

			if('deltaX' in e) {
				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
					// 18 - average line height
					_wheelDelta.x = e.deltaX * 18;
					_wheelDelta.y = e.deltaY * 18;
				} else {
					_wheelDelta.x = e.deltaX;
					_wheelDelta.y = e.deltaY;
				}
			} else if('wheelDelta' in e) {
				if(e.wheelDeltaX) {
					_wheelDelta.x = -0.16 * e.wheelDeltaX;
				}
				if(e.wheelDeltaY) {
					_wheelDelta.y = -0.16 * e.wheelDeltaY;
				} else {
					_wheelDelta.y = -0.16 * e.wheelDelta;
				}
			} else if('detail' in e) {
				_wheelDelta.y = e.detail;
			} else {
				return;
			}

			_calculatePanBounds(_currZoomLevel, true);

			var newPanX = _panOffset.x - _wheelDelta.x,
				newPanY = _panOffset.y - _wheelDelta.y;

			// only prevent scrolling in nonmodal mode when not at edges
			if (_options.modal ||
				(
				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
				) ) {
				e.preventDefault();
			}

			// TODO: use rAF instead of mousewheel?
			self.panTo(newPanX, newPanY);
		},

		toggleDesktopZoom: function(centerPoint) {
			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
			
			self.mouseZoomedIn = !zoomOut;

			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
		}

	}
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */


var _historyDefaultOptions = {
	history: true,
	galleryUID: 1
};

var _historyUpdateTimeout,
	_hashChangeTimeout,
	_hashAnimCheckTimeout,
	_hashChangedByScript,
	_hashChangedByHistory,
	_hashReseted,
	_initialHash,
	_historyChanged,
	_closedFromURL,
	_urlChangedOnce,
	_windowLoc,

	_supportsPushState,

	_getHash = function() {
		return _windowLoc.hash.substring(1);
	},
	_cleanHistoryTimeouts = function() {

		if(_historyUpdateTimeout) {
			clearTimeout(_historyUpdateTimeout);
		}

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}
	},

	// pid - Picture index
	// gid - Gallery index
	_parseItemIndexFromURL = function() {
		var hash = _getHash(),
			params = {};

		if(hash.length < 5) { // pid=1
			return params;
		}

		var i, vars = hash.split('&');
		for (i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');	
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(_options.galleryPIDs) {
			// detect custom pid in hash and search for it among the items collection
			var searchfor = params.pid;
			params.pid = 0; // if custom pid cannot be found, fallback to the first item
			for(i = 0; i < _items.length; i++) {
				if(_items[i].pid === searchfor) {
					params.pid = i;
					break;
				}
			}
		} else {
			params.pid = parseInt(params.pid,10)-1;
		}
		if( params.pid < 0 ) {
			params.pid = 0;
		}
		return params;
	},
	_updateHash = function() {

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}


		if(_numAnimations || _isDragging) {
			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
			// that's why we update hash only when no animations running
			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
			return;
		}
		
		if(_hashChangedByScript) {
			clearTimeout(_hashChangeTimeout);
		} else {
			_hashChangedByScript = true;
		}


		var pid = (_currentItemIndex + 1);
		var item = _getItemAt( _currentItemIndex );
		if(item.hasOwnProperty('pid')) {
			// carry forward any custom pid assigned to the item
			pid = item.pid;
		}
		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

		if(!_historyChanged) {
			if(_windowLoc.hash.indexOf(newHash) === -1) {
				_urlChangedOnce = true;
			}
			// first time - add new hisory record, then just replace
		}

		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

		if( _supportsPushState ) {

			if('#' + newHash !== window.location.hash) {
				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
			}

		} else {
			if(_historyChanged) {
				_windowLoc.replace( newURL );
			} else {
				_windowLoc.hash = newHash;
			}
		}
		
		

		_historyChanged = true;
		_hashChangeTimeout = setTimeout(function() {
			_hashChangedByScript = false;
		}, 60);
	};



	

_registerModule('History', {

	

	publicMethods: {
		initHistory: function() {

			framework.extend(_options, _historyDefaultOptions, true);

			if( !_options.history ) {
				return;
			}


			_windowLoc = window.location;
			_urlChangedOnce = false;
			_closedFromURL = false;
			_historyChanged = false;
			_initialHash = _getHash();
			_supportsPushState = ('pushState' in history);


			if(_initialHash.indexOf('gid=') > -1) {
				_initialHash = _initialHash.split('&gid=')[0];
				_initialHash = _initialHash.split('?gid=')[0];
			}
			

			_listen('afterChange', self.updateURL);
			_listen('unbindEvents', function() {
				framework.unbind(window, 'hashchange', self.onHashChange);
			});


			var returnToOriginal = function() {
				_hashReseted = true;
				if(!_closedFromURL) {

					if(_urlChangedOnce) {
						history.back();
					} else {

						if(_initialHash) {
							_windowLoc.hash = _initialHash;
						} else {
							if (_supportsPushState) {

								// remove hash from url without refreshing it or scrolling to top
								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
							} else {
								_windowLoc.hash = '';
							}
						}
					}
					
				}

				_cleanHistoryTimeouts();
			};


			_listen('unbindEvents', function() {
				if(_closedByScroll) {
					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
					// this is done to keep the scroll position
					returnToOriginal();
				}
			});
			_listen('destroy', function() {
				if(!_hashReseted) {
					returnToOriginal();
				}
			});
			_listen('firstUpdate', function() {
				_currentItemIndex = _parseItemIndexFromURL().pid;
			});

			

			
			var index = _initialHash.indexOf('pid=');
			if(index > -1) {
				_initialHash = _initialHash.substring(0, index);
				if(_initialHash.slice(-1) === '&') {
					_initialHash = _initialHash.slice(0, -1);
				}
			}
			

			setTimeout(function() {
				if(_isOpen) { // hasn't destroyed yet
					framework.bind(window, 'hashchange', self.onHashChange);
				}
			}, 40);
			
		},
		onHashChange: function() {

			if(_getHash() === _initialHash) {

				_closedFromURL = true;
				self.close();
				return;
			}
			if(!_hashChangedByScript) {

				_hashChangedByHistory = true;
				self.goTo( _parseItemIndexFromURL().pid );
				_hashChangedByHistory = false;
			}
			
		},
		updateURL: function() {

			// Delay the update of URL, to avoid lag during transition, 
			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
			
			_cleanHistoryTimeouts();
			

			if(_hashChangedByHistory) {
				return;
			}

			if(!_historyChanged) {
				_updateHash(); // first time
			} else {
				_historyUpdateTimeout = setTimeout(_updateHash, 800);
			}
		}
	
	}
});


/*>>history*/
	framework.extend(self, publicMethods); };
	return PhotoSwipe;
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! dynamic exports provided */
/*! all exports used */
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

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/swiper/dist/js/swiper.min.js":
/*!***************************************************!*\
  !*** ./node_modules/swiper/dist/js/swiper.min.js ***!
  \***************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Swiper 4.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 1, 2018
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Swiper=t()}(this,function(){"use strict";var f="undefined"==typeof document?{body:{},addEventListener:function(){},removeEventListener:function(){},activeElement:{blur:function(){},nodeName:""},querySelector:function(){return null},querySelectorAll:function(){return[]},getElementById:function(){return null},createEvent:function(){return{initEvent:function(){}}},createElement:function(){return{children:[],childNodes:[],style:{},setAttribute:function(){},getElementsByTagName:function(){return[]}}},location:{hash:""}}:document,Y="undefined"==typeof window?{document:f,navigator:{userAgent:""},location:{},history:{},CustomEvent:function(){return this},addEventListener:function(){},removeEventListener:function(){},getComputedStyle:function(){return{getPropertyValue:function(){return""}}},Image:function(){},Date:function(){},screen:{},setTimeout:function(){},clearTimeout:function(){}}:window,l=function(e){for(var t=0;t<e.length;t+=1)this[t]=e[t];return this.length=e.length,this};function L(e,t){var a=[],i=0;if(e&&!t&&e instanceof l)return e;if(e)if("string"==typeof e){var s,r,n=e.trim();if(0<=n.indexOf("<")&&0<=n.indexOf(">")){var o="div";for(0===n.indexOf("<li")&&(o="ul"),0===n.indexOf("<tr")&&(o="tbody"),0!==n.indexOf("<td")&&0!==n.indexOf("<th")||(o="tr"),0===n.indexOf("<tbody")&&(o="table"),0===n.indexOf("<option")&&(o="select"),(r=f.createElement(o)).innerHTML=n,i=0;i<r.childNodes.length;i+=1)a.push(r.childNodes[i])}else for(s=t||"#"!==e[0]||e.match(/[ .<>:~]/)?(t||f).querySelectorAll(e.trim()):[f.getElementById(e.trim().split("#")[1])],i=0;i<s.length;i+=1)s[i]&&a.push(s[i])}else if(e.nodeType||e===Y||e===f)a.push(e);else if(0<e.length&&e[0].nodeType)for(i=0;i<e.length;i+=1)a.push(e[i]);return new l(a)}function r(e){for(var t=[],a=0;a<e.length;a+=1)-1===t.indexOf(e[a])&&t.push(e[a]);return t}L.fn=l.prototype,L.Class=l,L.Dom7=l;var t={addClass:function(e){if(void 0===e)return this;for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.add(t[a]);return this},removeClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.remove(t[a]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var t=e.split(" "),a=0;a<t.length;a+=1)for(var i=0;i<this.length;i+=1)void 0!==this[i]&&void 0!==this[i].classList&&this[i].classList.toggle(t[a]);return this},attr:function(e,t){var a=arguments;if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var i=0;i<this.length;i+=1)if(2===a.length)this[i].setAttribute(e,t);else for(var s in e)this[i][s]=e[s],this[i].setAttribute(s,e[s]);return this},removeAttr:function(e){for(var t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},data:function(e,t){var a;if(void 0!==t){for(var i=0;i<this.length;i+=1)(a=this[i]).dom7ElementDataStorage||(a.dom7ElementDataStorage={}),a.dom7ElementDataStorage[e]=t;return this}if(a=this[0]){if(a.dom7ElementDataStorage&&e in a.dom7ElementDataStorage)return a.dom7ElementDataStorage[e];var s=a.getAttribute("data-"+e);return s||void 0}},transform:function(e){for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransform=e,a.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var a=this[t].style;a.webkitTransitionDuration=e,a.transitionDuration=e}return this},on:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],r=t[1],n=t[2],s=t[3];function o(e){var t=e.target;if(t){var a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),L(t).is(r))n.apply(t,a);else for(var i=L(t).parents(),s=0;s<i.length;s+=1)L(i[s]).is(r)&&n.apply(i[s],a)}}function l(e){var t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof t[1]&&(i=(e=t)[0],n=e[1],s=e[2],r=void 0),s||(s=!1);for(var d,p=i.split(" "),c=0;c<this.length;c+=1){var u=this[c];if(r)for(d=0;d<p.length;d+=1){var h=p[d];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[h]||(u.dom7LiveListeners[h]=[]),u.dom7LiveListeners[h].push({listener:n,proxyListener:o}),u.addEventListener(h,o,s)}else for(d=0;d<p.length;d+=1){var v=p[d];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[v]||(u.dom7Listeners[v]=[]),u.dom7Listeners[v].push({listener:n,proxyListener:l}),u.addEventListener(v,l,s)}}return this},off:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];var i=t[0],s=t[1],r=t[2],n=t[3];"function"==typeof t[1]&&(i=(e=t)[0],r=e[1],n=e[2],s=void 0),n||(n=!1);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var d=o[l],p=0;p<this.length;p+=1){var c=this[p],u=void 0;if(!s&&c.dom7Listeners?u=c.dom7Listeners[d]:s&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[d]),u&&u.length)for(var h=u.length-1;0<=h;h-=1){var v=u[h];r&&v.listener===r?(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1)):r||(c.removeEventListener(d,v.proxyListener,n),u.splice(h,1))}}return this},trigger:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=e[0].split(" "),i=e[1],s=0;s<a.length;s+=1)for(var r=a[s],n=0;n<this.length;n+=1){var o=this[n],l=void 0;try{l=new Y.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})}catch(e){(l=f.createEvent("Event")).initEvent(r,!0,!0),l.detail=i}o.dom7EventData=e.filter(function(e,t){return 0<t}),o.dispatchEvent(l),o.dom7EventData=[],delete o.dom7EventData}return this},transitionEnd:function(t){var a,i=["webkitTransitionEnd","transitionend"],s=this;function r(e){if(e.target===this)for(t.call(this,e),a=0;a<i.length;a+=1)s.off(i[a],r)}if(t)for(a=0;a<i.length;a+=1)s.on(i[a],r);return this},outerWidth:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(0<this.length){if(e){var t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(0<this.length){var e=this[0],t=e.getBoundingClientRect(),a=f.body,i=e.clientTop||a.clientTop||0,s=e.clientLeft||a.clientLeft||0,r=e===Y?Y.scrollY:e.scrollTop,n=e===Y?Y.scrollX:e.scrollLeft;return{top:t.top+r-i,left:t.left+n-s}}return null},css:function(e,t){var a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(var i in e)this[a].style[i]=e[i];return this}if(this[0])return Y.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(this[t],t,this[t]))return this;return this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){var t,a,i=this[0];if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(t=L(e),a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}if(e===f)return i===f;if(e===Y)return i===Y;if(e.nodeType||e instanceof l){for(t=e.nodeType?[e]:e,a=0;a<t.length;a+=1)if(t[a]===i)return!0;return!1}return!1},index:function(){var e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var t,a=this.length;return new l(a-1<e?[]:e<0?(t=a+e)<0?[]:[this[t]]:[this[e]])},append:function(){for(var e,t=[],a=arguments.length;a--;)t[a]=arguments[a];for(var i=0;i<t.length;i+=1){e=t[i];for(var s=0;s<this.length;s+=1)if("string"==typeof e){var r=f.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof l)for(var n=0;n<e.length;n+=1)this[s].appendChild(e[n]);else this[s].appendChild(e)}return this},prepend:function(e){var t,a;for(t=0;t<this.length;t+=1)if("string"==typeof e){var i=f.createElement("div");for(i.innerHTML=e,a=i.childNodes.length-1;0<=a;a-=1)this[t].insertBefore(i.childNodes[a],this[t].childNodes[0])}else if(e instanceof l)for(a=0;a<e.length;a+=1)this[t].insertBefore(e[a],this[t].childNodes[0]);else this[t].insertBefore(e,this[t].childNodes[0]);return this},next:function(e){return 0<this.length?e?this[0].nextElementSibling&&L(this[0].nextElementSibling).is(e)?new l([this[0].nextElementSibling]):new l([]):this[0].nextElementSibling?new l([this[0].nextElementSibling]):new l([]):new l([])},nextAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.nextElementSibling;){var i=a.nextElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},prev:function(e){if(0<this.length){var t=this[0];return e?t.previousElementSibling&&L(t.previousElementSibling).is(e)?new l([t.previousElementSibling]):new l([]):t.previousElementSibling?new l([t.previousElementSibling]):new l([])}return new l([])},prevAll:function(e){var t=[],a=this[0];if(!a)return new l([]);for(;a.previousElementSibling;){var i=a.previousElementSibling;e?L(i).is(e)&&t.push(i):t.push(i),a=i}return new l(t)},parent:function(e){for(var t=[],a=0;a<this.length;a+=1)null!==this[a].parentNode&&(e?L(this[a].parentNode).is(e)&&t.push(this[a].parentNode):t.push(this[a].parentNode));return L(r(t))},parents:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].parentNode;i;)e?L(i).is(e)&&t.push(i):t.push(i),i=i.parentNode;return L(r(t))},closest:function(e){var t=this;return void 0===e?new l([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].querySelectorAll(e),s=0;s<i.length;s+=1)t.push(i[s]);return new l(t)},children:function(e){for(var t=[],a=0;a<this.length;a+=1)for(var i=this[a].childNodes,s=0;s<i.length;s+=1)e?1===i[s].nodeType&&L(i[s]).is(e)&&t.push(i[s]):1===i[s].nodeType&&t.push(i[s]);return new l(r(t))},remove:function(){for(var e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i;for(a=0;a<e.length;a+=1){var s=L(e[a]);for(i=0;i<s.length;i+=1)this[this.length]=s[i],this.length+=1}return this},styles:function(){return this[0]?Y.getComputedStyle(this[0],null):{}}};Object.keys(t).forEach(function(e){L.fn[e]=t[e]});var e,a,i,V={deleteProps:function(e){var t=e;Object.keys(t).forEach(function(e){try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})},nextTick:function(e,t){return void 0===t&&(t=0),setTimeout(e,t)},now:function(){return Date.now()},getTranslate:function(e,t){var a,i,s;void 0===t&&(t="x");var r=Y.getComputedStyle(e,null);return Y.WebKitCSSMatrix?(6<(i=r.transform||r.webkitTransform).split(",").length&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new Y.WebKitCSSMatrix("none"===i?"":i)):a=(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(i=Y.WebKitCSSMatrix?s.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=Y.WebKitCSSMatrix?s.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0},parseUrlQuery:function(e){var t,a,i,s,r={},n=e||Y.location.href;if("string"==typeof n&&n.length)for(s=(a=(n=-1<n.indexOf("?")?n.replace(/\S*\?/,""):"").split("&").filter(function(e){return""!==e})).length,t=0;t<s;t+=1)i=a[t].replace(/#\S+/g,"").split("="),r[decodeURIComponent(i[0])]=void 0===i[1]?void 0:decodeURIComponent(i[1])||"";return r},isObject:function(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object},extend:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];for(var a=Object(e[0]),i=1;i<e.length;i+=1){var s=e[i];if(null!=s)for(var r=Object.keys(Object(s)),n=0,o=r.length;n<o;n+=1){var l=r[n],d=Object.getOwnPropertyDescriptor(s,l);void 0!==d&&d.enumerable&&(V.isObject(a[l])&&V.isObject(s[l])?V.extend(a[l],s[l]):!V.isObject(a[l])&&V.isObject(s[l])?(a[l]={},V.extend(a[l],s[l])):a[l]=s[l])}}return a}},F=(i=f.createElement("div"),{touch:Y.Modernizr&&!0===Y.Modernizr.touch||!!("ontouchstart"in Y||Y.DocumentTouch&&f instanceof Y.DocumentTouch),pointerEvents:!!(Y.navigator.pointerEnabled||Y.PointerEvent||"maxTouchPoints"in Y.navigator),prefixedPointerEvents:!!Y.navigator.msPointerEnabled,transition:(a=i.style,"transition"in a||"webkitTransition"in a||"MozTransition"in a),transforms3d:Y.Modernizr&&!0===Y.Modernizr.csstransforms3d||(e=i.style,"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e),flexbox:function(){for(var e=i.style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a+=1)if(t[a]in e)return!0;return!1}(),observer:"MutationObserver"in Y||"WebkitMutationObserver"in Y,passiveListener:function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});Y.addEventListener("testPassiveListener",null,t)}catch(e){}return e}(),gestures:"ongesturestart"in Y}),s=function(e){void 0===e&&(e={});var t=this;t.params=e,t.eventsListeners={},t.params&&t.params.on&&Object.keys(t.params.on).forEach(function(e){t.on(e,t.params.on[e])})},n={components:{configurable:!0}};s.prototype.on=function(e,t,a){var i=this;if("function"!=typeof t)return i;var s=a?"unshift":"push";return e.split(" ").forEach(function(e){i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][s](t)}),i},s.prototype.once=function(i,s,e){var r=this;if("function"!=typeof s)return r;return r.on(i,function e(){for(var t=[],a=arguments.length;a--;)t[a]=arguments[a];s.apply(r,t),r.off(i,e)},e)},s.prototype.off=function(e,i){var s=this;return s.eventsListeners&&e.split(" ").forEach(function(a){void 0===i?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].length&&s.eventsListeners[a].forEach(function(e,t){e===i&&s.eventsListeners[a].splice(t,1)})}),s},s.prototype.emit=function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];var a,i,s,r=this;return r.eventsListeners&&("string"==typeof e[0]||Array.isArray(e[0])?(a=e[0],i=e.slice(1,e.length),s=r):(a=e[0].events,i=e[0].data,s=e[0].context||r),(Array.isArray(a)?a:a.split(" ")).forEach(function(e){if(r.eventsListeners&&r.eventsListeners[e]){var t=[];r.eventsListeners[e].forEach(function(e){t.push(e)}),t.forEach(function(e){e.apply(s,i)})}})),r},s.prototype.useModulesParams=function(a){var i=this;i.modules&&Object.keys(i.modules).forEach(function(e){var t=i.modules[e];t.params&&V.extend(a,t.params)})},s.prototype.useModules=function(i){void 0===i&&(i={});var s=this;s.modules&&Object.keys(s.modules).forEach(function(e){var a=s.modules[e],t=i[e]||{};a.instance&&Object.keys(a.instance).forEach(function(e){var t=a.instance[e];s[e]="function"==typeof t?t.bind(s):t}),a.on&&s.on&&Object.keys(a.on).forEach(function(e){s.on(e,a.on[e])}),a.create&&a.create.bind(s)(t)})},n.components.set=function(e){this.use&&this.use(e)},s.installModule=function(t){for(var e=[],a=arguments.length-1;0<a--;)e[a]=arguments[a+1];var i=this;i.prototype.modules||(i.prototype.modules={});var s=t.name||Object.keys(i.prototype.modules).length+"_"+V.now();return(i.prototype.modules[s]=t).proto&&Object.keys(t.proto).forEach(function(e){i.prototype[e]=t.proto[e]}),t.static&&Object.keys(t.static).forEach(function(e){i[e]=t.static[e]}),t.install&&t.install.apply(i,e),i},s.use=function(e){for(var t=[],a=arguments.length-1;0<a--;)t[a]=arguments[a+1];var i=this;return Array.isArray(e)?(e.forEach(function(e){return i.installModule(e)}),i):i.installModule.apply(i,[e].concat(t))},Object.defineProperties(s,n);var o={updateSize:function(){var e,t,a=this,i=a.$el;e=void 0!==a.params.width?a.params.width:i[0].clientWidth,t=void 0!==a.params.height?a.params.height:i[0].clientHeight,0===e&&a.isHorizontal()||0===t&&a.isVertical()||(e=e-parseInt(i.css("padding-left"),10)-parseInt(i.css("padding-right"),10),t=t-parseInt(i.css("padding-top"),10)-parseInt(i.css("padding-bottom"),10),V.extend(a,{width:e,height:t,size:a.isHorizontal()?e:t}))},updateSlides:function(){var e=this,t=e.params,a=e.$wrapperEl,i=e.size,s=e.rtlTranslate,r=e.wrongRTL,n=e.virtual&&t.virtual.enabled,o=n?e.virtual.slides.length:e.slides.length,l=a.children("."+e.params.slideClass),d=n?e.virtual.slides.length:l.length,p=[],c=[],u=[],h=t.slidesOffsetBefore;"function"==typeof h&&(h=t.slidesOffsetBefore.call(e));var v=t.slidesOffsetAfter;"function"==typeof v&&(v=t.slidesOffsetAfter.call(e));var f=e.snapGrid.length,m=e.snapGrid.length,g=t.spaceBetween,b=-h,w=0,y=0;if(void 0!==i){var x,T;"string"==typeof g&&0<=g.indexOf("%")&&(g=parseFloat(g.replace("%",""))/100*i),e.virtualSize=-g,s?l.css({marginLeft:"",marginTop:""}):l.css({marginRight:"",marginBottom:""}),1<t.slidesPerColumn&&(x=Math.floor(d/t.slidesPerColumn)===d/e.params.slidesPerColumn?d:Math.ceil(d/t.slidesPerColumn)*t.slidesPerColumn,"auto"!==t.slidesPerView&&"row"===t.slidesPerColumnFill&&(x=Math.max(x,t.slidesPerView*t.slidesPerColumn)));for(var E,S=t.slidesPerColumn,C=x/S,M=C-(t.slidesPerColumn*C-d),k=0;k<d;k+=1){T=0;var P=l.eq(k);if(1<t.slidesPerColumn){var z=void 0,$=void 0,L=void 0;"column"===t.slidesPerColumnFill?(L=k-($=Math.floor(k/S))*S,(M<$||$===M&&L===S-1)&&S<=(L+=1)&&(L=0,$+=1),z=$+L*x/S,P.css({"-webkit-box-ordinal-group":z,"-moz-box-ordinal-group":z,"-ms-flex-order":z,"-webkit-order":z,order:z})):$=k-(L=Math.floor(k/C))*C,P.css("margin-"+(e.isHorizontal()?"top":"left"),0!==L&&t.spaceBetween&&t.spaceBetween+"px").attr("data-swiper-column",$).attr("data-swiper-row",L)}if("none"!==P.css("display")){if("auto"===t.slidesPerView){var I=Y.getComputedStyle(P[0],null),D=P[0].style.transform,O=P[0].style.webkitTransform;D&&(P[0].style.transform="none"),O&&(P[0].style.webkitTransform="none"),T=t.roundLengths?e.isHorizontal()?P.outerWidth(!0):P.outerHeight(!0):e.isHorizontal()?parseFloat(I.getPropertyValue("width"))+parseFloat(I.getPropertyValue("margin-left"))+parseFloat(I.getPropertyValue("margin-right")):parseFloat(I.getPropertyValue("height"))+parseFloat(I.getPropertyValue("margin-top"))+parseFloat(I.getPropertyValue("margin-bottom")),D&&(P[0].style.transform=D),O&&(P[0].style.webkitTransform=O),t.roundLengths&&(T=Math.floor(T))}else T=(i-(t.slidesPerView-1)*g)/t.slidesPerView,t.roundLengths&&(T=Math.floor(T)),l[k]&&(e.isHorizontal()?l[k].style.width=T+"px":l[k].style.height=T+"px");l[k]&&(l[k].swiperSlideSize=T),u.push(T),t.centeredSlides?(b=b+T/2+w/2+g,0===w&&0!==k&&(b=b-i/2-g),0===k&&(b=b-i/2-g),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b)):(t.roundLengths&&(b=Math.floor(b)),y%t.slidesPerGroup==0&&p.push(b),c.push(b),b=b+T+g),e.virtualSize+=T+g,w=T,y+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+v,s&&r&&("slide"===t.effect||"coverflow"===t.effect)&&a.css({width:e.virtualSize+t.spaceBetween+"px"}),F.flexbox&&!t.setWrapperSize||(e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"})),1<t.slidesPerColumn&&(e.virtualSize=(T+t.spaceBetween)*x,e.virtualSize=Math.ceil(e.virtualSize/t.slidesPerColumn)-t.spaceBetween,e.isHorizontal()?a.css({width:e.virtualSize+t.spaceBetween+"px"}):a.css({height:e.virtualSize+t.spaceBetween+"px"}),t.centeredSlides)){E=[];for(var A=0;A<p.length;A+=1){var N=p[A];t.roundLengths&&(N=Math.floor(N)),p[A]<e.virtualSize+p[0]&&E.push(N)}p=E}if(!t.centeredSlides){E=[];for(var H=0;H<p.length;H+=1){var G=p[H];t.roundLengths&&(G=Math.floor(G)),p[H]<=e.virtualSize-i&&E.push(G)}p=E,1<Math.floor(e.virtualSize-i)-Math.floor(p[p.length-1])&&p.push(e.virtualSize-i)}if(0===p.length&&(p=[0]),0!==t.spaceBetween&&(e.isHorizontal()?s?l.css({marginLeft:g+"px"}):l.css({marginRight:g+"px"}):l.css({marginBottom:g+"px"})),t.centerInsufficientSlides){var B=0;if(u.forEach(function(e){B+=e+(t.spaceBetween?t.spaceBetween:0)}),(B-=t.spaceBetween)<i){var X=(i-B)/2;p.forEach(function(e,t){p[t]=e-X}),c.forEach(function(e,t){c[t]=e+X})}}V.extend(e,{slides:l,snapGrid:p,slidesGrid:c,slidesSizesGrid:u}),d!==o&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),c.length!==m&&e.emit("slidesGridLengthChange"),(t.watchSlidesProgress||t.watchSlidesVisibility)&&e.updateSlidesOffset()}},updateAutoHeight:function(e){var t,a=this,i=[],s=0;if("number"==typeof e?a.setTransition(e):!0===e&&a.setTransition(a.params.speed),"auto"!==a.params.slidesPerView&&1<a.params.slidesPerView)for(t=0;t<Math.ceil(a.params.slidesPerView);t+=1){var r=a.activeIndex+t;if(r>a.slides.length)break;i.push(a.slides.eq(r)[0])}else i.push(a.slides.eq(a.activeIndex)[0]);for(t=0;t<i.length;t+=1)if(void 0!==i[t]){var n=i[t].offsetHeight;s=s<n?n:s}s&&a.$wrapperEl.css("height",s+"px")},updateSlidesOffset:function(){for(var e=this.slides,t=0;t<e.length;t+=1)e[t].swiperSlideOffset=this.isHorizontal()?e[t].offsetLeft:e[t].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.slides,s=t.rtlTranslate;if(0!==i.length){void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset();var r=-e;s&&(r=e),i.removeClass(a.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(var n=0;n<i.length;n+=1){var o=i[n],l=(r+(a.centeredSlides?t.minTranslate():0)-o.swiperSlideOffset)/(o.swiperSlideSize+a.spaceBetween);if(a.watchSlidesVisibility){var d=-(r-o.swiperSlideOffset),p=d+t.slidesSizesGrid[n];(0<=d&&d<t.size||0<p&&p<=t.size||d<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(n),i.eq(n).addClass(a.slideVisibleClass))}o.progress=s?-l:l}t.visibleSlides=L(t.visibleSlides)}},updateProgress:function(e){void 0===e&&(e=this&&this.translate||0);var t=this,a=t.params,i=t.maxTranslate()-t.minTranslate(),s=t.progress,r=t.isBeginning,n=t.isEnd,o=r,l=n;0===i?n=r=!(s=0):(r=(s=(e-t.minTranslate())/i)<=0,n=1<=s),V.extend(t,{progress:s,isBeginning:r,isEnd:n}),(a.watchSlidesProgress||a.watchSlidesVisibility)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),n&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!n)&&t.emit("fromEdge"),t.emit("progress",s)},updateSlidesClasses:function(){var e,t=this,a=t.slides,i=t.params,s=t.$wrapperEl,r=t.activeIndex,n=t.realIndex,o=t.virtual&&i.virtual.enabled;a.removeClass(i.slideActiveClass+" "+i.slideNextClass+" "+i.slidePrevClass+" "+i.slideDuplicateActiveClass+" "+i.slideDuplicateNextClass+" "+i.slideDuplicatePrevClass),(e=o?t.$wrapperEl.find("."+i.slideClass+'[data-swiper-slide-index="'+r+'"]'):a.eq(r)).addClass(i.slideActiveClass),i.loop&&(e.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+n+'"]').addClass(i.slideDuplicateActiveClass));var l=e.nextAll("."+i.slideClass).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=a.eq(0)).addClass(i.slideNextClass);var d=e.prevAll("."+i.slideClass).eq(0).addClass(i.slidePrevClass);i.loop&&0===d.length&&(d=a.eq(-1)).addClass(i.slidePrevClass),i.loop&&(l.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+l.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicateNextClass),d.hasClass(i.slideDuplicateClass)?s.children("."+i.slideClass+":not(."+i.slideDuplicateClass+')[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass):s.children("."+i.slideClass+"."+i.slideDuplicateClass+'[data-swiper-slide-index="'+d.attr("data-swiper-slide-index")+'"]').addClass(i.slideDuplicatePrevClass))},updateActiveIndex:function(e){var t,a=this,i=a.rtlTranslate?a.translate:-a.translate,s=a.slidesGrid,r=a.snapGrid,n=a.params,o=a.activeIndex,l=a.realIndex,d=a.snapIndex,p=e;if(void 0===p){for(var c=0;c<s.length;c+=1)void 0!==s[c+1]?i>=s[c]&&i<s[c+1]-(s[c+1]-s[c])/2?p=c:i>=s[c]&&i<s[c+1]&&(p=c+1):i>=s[c]&&(p=c);n.normalizeSlideIndex&&(p<0||void 0===p)&&(p=0)}if((t=0<=r.indexOf(i)?r.indexOf(i):Math.floor(p/n.slidesPerGroup))>=r.length&&(t=r.length-1),p!==o){var u=parseInt(a.slides.eq(p).attr("data-swiper-slide-index")||p,10);V.extend(a,{snapIndex:t,realIndex:u,previousIndex:o,activeIndex:p}),a.emit("activeIndexChange"),a.emit("snapIndexChange"),l!==u&&a.emit("realIndexChange"),a.emit("slideChange")}else t!==d&&(a.snapIndex=t,a.emit("snapIndexChange"))},updateClickedSlide:function(e){var t=this,a=t.params,i=L(e.target).closest("."+a.slideClass)[0],s=!1;if(i)for(var r=0;r<t.slides.length;r+=1)t.slides[r]===i&&(s=!0);if(!i||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(L(i).attr("data-swiper-slide-index"),10):t.clickedIndex=L(i).index(),a.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var d={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");var t=this.params,a=this.rtlTranslate,i=this.translate,s=this.$wrapperEl;if(t.virtualTranslate)return a?-i:i;var r=V.getTranslate(s[0],e);return a&&(r=-r),r||0},setTranslate:function(e,t){var a=this,i=a.rtlTranslate,s=a.params,r=a.$wrapperEl,n=a.progress,o=0,l=0;a.isHorizontal()?o=i?-e:e:l=e,s.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),s.virtualTranslate||(F.transforms3d?r.transform("translate3d("+o+"px, "+l+"px, 0px)"):r.transform("translate("+o+"px, "+l+"px)")),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?o:l;var d=a.maxTranslate()-a.minTranslate();(0===d?0:(e-a.minTranslate())/d)!==n&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]}};var p={setTransition:function(e,t){this.$wrapperEl.transition(e),this.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.params,r=a.previousIndex;s.autoHeight&&a.updateAutoHeight();var n=t;if(n||(n=r<i?"next":i<r?"prev":"reset"),a.emit("transitionStart"),e&&i!==r){if("reset"===n)return void a.emit("slideResetTransitionStart");a.emit("slideChangeTransitionStart"),"next"===n?a.emit("slideNextTransitionStart"):a.emit("slidePrevTransitionStart")}},transitionEnd:function(e,t){void 0===e&&(e=!0);var a=this,i=a.activeIndex,s=a.previousIndex;a.animating=!1,a.setTransition(0);var r=t;if(r||(r=s<i?"next":i<s?"prev":"reset"),a.emit("transitionEnd"),e&&i!==s){if("reset"===r)return void a.emit("slideResetTransitionEnd");a.emit("slideChangeTransitionEnd"),"next"===r?a.emit("slideNextTransitionEnd"):a.emit("slidePrevTransitionEnd")}}};var c={slideTo:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=this,r=e;r<0&&(r=0);var n=s.params,o=s.snapGrid,l=s.slidesGrid,d=s.previousIndex,p=s.activeIndex,c=s.rtlTranslate;if(s.animating&&n.preventInteractionOnTransition)return!1;var u=Math.floor(r/n.slidesPerGroup);u>=o.length&&(u=o.length-1),(p||n.initialSlide||0)===(d||0)&&a&&s.emit("beforeSlideChangeStart");var h,v=-o[u];if(s.updateProgress(v),n.normalizeSlideIndex)for(var f=0;f<l.length;f+=1)-Math.floor(100*v)>=Math.floor(100*l[f])&&(r=f);if(s.initialized&&r!==p){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(p||0)!==r)return!1}return h=p<r?"next":r<p?"prev":"reset",c&&-v===s.translate||!c&&v===s.translate?(s.updateActiveIndex(r),n.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==n.effect&&s.setTranslate(v),"reset"!==h&&(s.transitionStart(a,h),s.transitionEnd(a,h)),!1):(0!==t&&F.transition?(s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(a,h))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd))):(s.setTransition(0),s.setTranslate(v),s.updateActiveIndex(r),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,i),s.transitionStart(a,h),s.transitionEnd(a,h)),!0)},slideToLoop:function(e,t,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===a&&(a=!0);var s=e;return this.params.loop&&(s+=this.loopedSlides),this.slideTo(s,t,a,i)},slideNext:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating;return s.loop?!r&&(i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft,i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)):i.slideTo(i.activeIndex+s.slidesPerGroup,e,t,a)},slidePrev:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.params,r=i.animating,n=i.snapGrid,o=i.slidesGrid,l=i.rtlTranslate;if(s.loop){if(r)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}var p,c=d(l?i.translate:-i.translate),u=n.map(function(e){return d(e)}),h=(o.map(function(e){return d(e)}),n[u.indexOf(c)],n[u.indexOf(c)-1]);return void 0!==h&&(p=o.indexOf(h))<0&&(p=i.activeIndex-1),i.slideTo(p,e,t,a)},slideReset:function(e,t,a){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,a)},slideToClosest:function(e,t,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);var i=this,s=i.activeIndex,r=Math.floor(s/i.params.slidesPerGroup);if(r<i.snapGrid.length-1){var n=i.rtlTranslate?i.translate:-i.translate,o=i.snapGrid[r];(i.snapGrid[r+1]-o)/2<n-o&&(s=i.params.slidesPerGroup)}return i.slideTo(s,e,t,a)},slideToClickedSlide:function(){var e,t=this,a=t.params,i=t.$wrapperEl,s="auto"===a.slidesPerView?t.slidesPerViewDynamic():a.slidesPerView,r=t.clickedIndex;if(a.loop){if(t.animating)return;e=parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10),a.centeredSlides?r<t.loopedSlides-s/2||r>t.slides.length-t.loopedSlides+s/2?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),V.nextTick(function(){t.slideTo(r)})):t.slideTo(r):r>t.slides.length-s?(t.loopFix(),r=i.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]:not(.'+a.slideDuplicateClass+")").eq(0).index(),V.nextTick(function(){t.slideTo(r)})):t.slideTo(r)}else t.slideTo(r)}};var u={loopCreate:function(){var i=this,e=i.params,t=i.$wrapperEl;t.children("."+e.slideClass+"."+e.slideDuplicateClass).remove();var s=t.children("."+e.slideClass);if(e.loopFillGroupWithBlank){var a=e.slidesPerGroup-s.length%e.slidesPerGroup;if(a!==e.slidesPerGroup){for(var r=0;r<a;r+=1){var n=L(f.createElement("div")).addClass(e.slideClass+" "+e.slideBlankClass);t.append(n)}s=t.children("."+e.slideClass)}}"auto"!==e.slidesPerView||e.loopedSlides||(e.loopedSlides=s.length),i.loopedSlides=parseInt(e.loopedSlides||e.slidesPerView,10),i.loopedSlides+=e.loopAdditionalSlides,i.loopedSlides>s.length&&(i.loopedSlides=s.length);var o=[],l=[];s.each(function(e,t){var a=L(t);e<i.loopedSlides&&l.push(t),e<s.length&&e>=s.length-i.loopedSlides&&o.push(t),a.attr("data-swiper-slide-index",e)});for(var d=0;d<l.length;d+=1)t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));for(var p=o.length-1;0<=p;p-=1)t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))},loopFix:function(){var e,t=this,a=t.params,i=t.activeIndex,s=t.slides,r=t.loopedSlides,n=t.allowSlidePrev,o=t.allowSlideNext,l=t.snapGrid,d=t.rtlTranslate;t.allowSlidePrev=!0,t.allowSlideNext=!0;var p=-l[i]-t.getTranslate();i<r?(e=s.length-3*r+i,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p)):("auto"===a.slidesPerView&&2*r<=i||i>=s.length-r)&&(e=-s.length+i+r,e+=r,t.slideTo(e,0,!1,!0)&&0!==p&&t.setTranslate((d?-t.translate:t.translate)-p));t.allowSlidePrev=n,t.allowSlideNext=o},loopDestroy:function(){var e=this.$wrapperEl,t=this.params,a=this.slides;e.children("."+t.slideClass+"."+t.slideDuplicateClass).remove(),a.removeAttr("data-swiper-slide-index")}};var h={setGrabCursor:function(e){if(!(F.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked)){var t=this.el;t.style.cursor="move",t.style.cursor=e?"-webkit-grabbing":"-webkit-grab",t.style.cursor=e?"-moz-grabbin":"-moz-grab",t.style.cursor=e?"grabbing":"grab"}},unsetGrabCursor:function(){F.touch||this.params.watchOverflow&&this.isLocked||(this.el.style.cursor="")}};var v={appendSlide:function(e){var t=this,a=t.$wrapperEl,i=t.params;if(i.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(var s=0;s<e.length;s+=1)e[s]&&a.append(e[s]);else a.append(e);i.loop&&t.loopCreate(),i.observer&&F.observer||t.update()},prependSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&t.loopDestroy();var r=s+1;if("object"==typeof e&&"length"in e){for(var n=0;n<e.length;n+=1)e[n]&&i.prepend(e[n]);r=s+e.length}else i.prepend(e);a.loop&&t.loopCreate(),a.observer&&F.observer||t.update(),t.slideTo(r,0,!1)},addSlide:function(e,t){var a=this,i=a.$wrapperEl,s=a.params,r=a.activeIndex;s.loop&&(r-=a.loopedSlides,a.loopDestroy(),a.slides=i.children("."+s.slideClass));var n=a.slides.length;if(e<=0)a.prependSlide(t);else if(n<=e)a.appendSlide(t);else{for(var o=e<r?r+1:r,l=[],d=n-1;e<=d;d-=1){var p=a.slides.eq(d);p.remove(),l.unshift(p)}if("object"==typeof t&&"length"in t){for(var c=0;c<t.length;c+=1)t[c]&&i.append(t[c]);o=e<r?r+t.length:r}else i.append(t);for(var u=0;u<l.length;u+=1)i.append(l[u]);s.loop&&a.loopCreate(),s.observer&&F.observer||a.update(),s.loop?a.slideTo(o+a.loopedSlides,0,!1):a.slideTo(o,0,!1)}},removeSlide:function(e){var t=this,a=t.params,i=t.$wrapperEl,s=t.activeIndex;a.loop&&(s-=t.loopedSlides,t.loopDestroy(),t.slides=i.children("."+a.slideClass));var r,n=s;if("object"==typeof e&&"length"in e){for(var o=0;o<e.length;o+=1)r=e[o],t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1);n=Math.max(n,0)}else r=e,t.slides[r]&&t.slides.eq(r).remove(),r<n&&(n-=1),n=Math.max(n,0);a.loop&&t.loopCreate(),a.observer&&F.observer||t.update(),a.loop?t.slideTo(n+t.loopedSlides,0,!1):t.slideTo(n,0,!1)},removeAllSlides:function(){for(var e=[],t=0;t<this.slides.length;t+=1)e.push(t);this.removeSlide(e)}},m=function(){var e=Y.navigator.userAgent,t={ios:!1,android:!1,androidChrome:!1,desktop:!1,windows:!1,iphone:!1,ipod:!1,ipad:!1,cordova:Y.cordova||Y.phonegap,phonegap:Y.cordova||Y.phonegap},a=e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),i=e.match(/(Android);?[\s\/]+([\d.]+)?/),s=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!s&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(a&&(t.os="windows",t.osVersion=a[2],t.windows=!0),i&&!a&&(t.os="android",t.osVersion=i[2],t.android=!0,t.androidChrome=0<=e.toLowerCase().indexOf("chrome")),(s||n||r)&&(t.os="ios",t.ios=!0),n&&!r&&(t.osVersion=n[2].replace(/_/g,"."),t.iphone=!0),s&&(t.osVersion=s[2].replace(/_/g,"."),t.ipad=!0),r&&(t.osVersion=r[3]?r[3].replace(/_/g,"."):null,t.iphone=!0),t.ios&&t.osVersion&&0<=e.indexOf("Version/")&&"10"===t.osVersion.split(".")[0]&&(t.osVersion=e.toLowerCase().split("version/")[1].split(" ")[0]),t.desktop=!(t.os||t.android||t.webView),t.webView=(n||s||r)&&e.match(/.*AppleWebKit(?!.*Safari)/i),t.os&&"ios"===t.os){var o=t.osVersion.split("."),l=f.querySelector('meta[name="viewport"]');t.minimalUi=!t.webView&&(r||n)&&(1*o[0]==7?1<=1*o[1]:7<1*o[0])&&l&&0<=l.getAttribute("content").indexOf("minimal-ui")}return t.pixelRatio=Y.devicePixelRatio||1,t}();function g(){var e=this,t=e.params,a=e.el;if(!a||0!==a.offsetWidth){t.breakpoints&&e.setBreakpoint();var i=e.allowSlideNext,s=e.allowSlidePrev,r=e.snapGrid;if(e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),t.freeMode){var n=Math.min(Math.max(e.translate,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses(),t.autoHeight&&e.updateAutoHeight()}else e.updateSlidesClasses(),("auto"===t.slidesPerView||1<t.slidesPerView)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.allowSlidePrev=s,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}}var b={attachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl;e.onTouchStart=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches;if(!t.animating||!i.preventInteractionOnTransition){var r=e;if(r.originalEvent&&(r=r.originalEvent),a.isTouchEvent="touchstart"===r.type,(a.isTouchEvent||!("which"in r)||3!==r.which)&&!(!a.isTouchEvent&&"button"in r&&0<r.button||a.isTouched&&a.isMoved))if(i.noSwiping&&L(r.target).closest(i.noSwipingSelector?i.noSwipingSelector:"."+i.noSwipingClass)[0])t.allowClick=!0;else if(!i.swipeHandler||L(r).closest(i.swipeHandler)[0]){s.currentX="touchstart"===r.type?r.targetTouches[0].pageX:r.pageX,s.currentY="touchstart"===r.type?r.targetTouches[0].pageY:r.pageY;var n=s.currentX,o=s.currentY,l=i.edgeSwipeDetection||i.iOSEdgeSwipeDetection,d=i.edgeSwipeThreshold||i.iOSEdgeSwipeThreshold;if(!l||!(n<=d||n>=Y.screen.width-d)){if(V.extend(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=n,s.startY=o,a.touchStartTime=V.now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,0<i.threshold&&(a.allowThresholdMove=!1),"touchstart"!==r.type){var p=!0;L(r.target).is(a.formElements)&&(p=!1),f.activeElement&&L(f.activeElement).is(a.formElements)&&f.activeElement!==r.target&&f.activeElement.blur();var c=p&&t.allowTouchMove&&i.touchStartPreventDefault;(i.touchStartForcePreventDefault||c)&&r.preventDefault()}t.emit("touchStart",r)}}}}.bind(e),e.onTouchMove=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=e;if(n.originalEvent&&(n=n.originalEvent),a.isTouched){if(!a.isTouchEvent||"mousemove"!==n.type){var o="touchmove"===n.type?n.targetTouches[0].pageX:n.pageX,l="touchmove"===n.type?n.targetTouches[0].pageY:n.pageY;if(n.preventedByNestedSwiper)return s.startX=o,void(s.startY=l);if(!t.allowTouchMove)return t.allowClick=!1,void(a.isTouched&&(V.extend(s,{startX:o,startY:l,currentX:o,currentY:l}),a.touchStartTime=V.now()));if(a.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop)if(t.isVertical()){if(l<s.startY&&t.translate<=t.maxTranslate()||l>s.startY&&t.translate>=t.minTranslate())return a.isTouched=!1,void(a.isMoved=!1)}else if(o<s.startX&&t.translate<=t.maxTranslate()||o>s.startX&&t.translate>=t.minTranslate())return;if(a.isTouchEvent&&f.activeElement&&n.target===f.activeElement&&L(n.target).is(a.formElements))return a.isMoved=!0,void(t.allowClick=!1);if(a.allowTouchCallbacks&&t.emit("touchMove",n),!(n.targetTouches&&1<n.targetTouches.length)){s.currentX=o,s.currentY=l;var d,p=s.currentX-s.startX,c=s.currentY-s.startY;if(!(t.params.threshold&&Math.sqrt(Math.pow(p,2)+Math.pow(c,2))<t.params.threshold))if(void 0===a.isScrolling&&(t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?a.isScrolling=!1:25<=p*p+c*c&&(d=180*Math.atan2(Math.abs(c),Math.abs(p))/Math.PI,a.isScrolling=t.isHorizontal()?d>i.touchAngle:90-d>i.touchAngle)),a.isScrolling&&t.emit("touchMoveOpposite",n),void 0===a.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(a.startMoving=!0)),a.isScrolling)a.isTouched=!1;else if(a.startMoving){t.allowClick=!1,n.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&n.stopPropagation(),a.isMoved||(i.loop&&t.loopFix(),a.startTranslate=t.getTranslate(),t.setTransition(0),t.animating&&t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),a.allowMomentumBounce=!1,!i.grabCursor||!0!==t.allowSlideNext&&!0!==t.allowSlidePrev||t.setGrabCursor(!0),t.emit("sliderFirstMove",n)),t.emit("sliderMove",n),a.isMoved=!0;var u=t.isHorizontal()?p:c;s.diff=u,u*=i.touchRatio,r&&(u=-u),t.swipeDirection=0<u?"prev":"next",a.currentTranslate=u+a.startTranslate;var h=!0,v=i.resistanceRatio;if(i.touchReleaseOnEdges&&(v=0),0<u&&a.currentTranslate>t.minTranslate()?(h=!1,i.resistance&&(a.currentTranslate=t.minTranslate()-1+Math.pow(-t.minTranslate()+a.startTranslate+u,v))):u<0&&a.currentTranslate<t.maxTranslate()&&(h=!1,i.resistance&&(a.currentTranslate=t.maxTranslate()+1-Math.pow(t.maxTranslate()-a.startTranslate-u,v))),h&&(n.preventedByNestedSwiper=!0),!t.allowSlideNext&&"next"===t.swipeDirection&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!t.allowSlidePrev&&"prev"===t.swipeDirection&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),0<i.threshold){if(!(Math.abs(u)>i.threshold||a.allowThresholdMove))return void(a.currentTranslate=a.startTranslate);if(!a.allowThresholdMove)return a.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,a.currentTranslate=a.startTranslate,void(s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}i.followFinger&&((i.freeMode||i.watchSlidesProgress||i.watchSlidesVisibility)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&(0===a.velocities.length&&a.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:a.touchStartTime}),a.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:V.now()})),t.updateProgress(a.currentTranslate),t.setTranslate(a.currentTranslate))}}}}else a.startMoving&&a.isScrolling&&t.emit("touchMoveOpposite",n)}.bind(e),e.onTouchEnd=function(e){var t=this,a=t.touchEventsData,i=t.params,s=t.touches,r=t.rtlTranslate,n=t.$wrapperEl,o=t.slidesGrid,l=t.snapGrid,d=e;if(d.originalEvent&&(d=d.originalEvent),a.allowTouchCallbacks&&t.emit("touchEnd",d),a.allowTouchCallbacks=!1,!a.isTouched)return a.isMoved&&i.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,void(a.startMoving=!1);i.grabCursor&&a.isMoved&&a.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);var p,c=V.now(),u=c-a.touchStartTime;if(t.allowClick&&(t.updateClickedSlide(d),t.emit("tap",d),u<300&&300<c-a.lastClickTime&&(a.clickTimeout&&clearTimeout(a.clickTimeout),a.clickTimeout=V.nextTick(function(){t&&!t.destroyed&&t.emit("click",d)},300)),u<300&&c-a.lastClickTime<300&&(a.clickTimeout&&clearTimeout(a.clickTimeout),t.emit("doubleTap",d))),a.lastClickTime=V.now(),V.nextTick(function(){t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||0===s.diff||a.currentTranslate===a.startTranslate)return a.isTouched=!1,a.isMoved=!1,void(a.startMoving=!1);if(a.isTouched=!1,a.isMoved=!1,a.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-a.currentTranslate,i.freeMode){if(p<-t.minTranslate())return void t.slideTo(t.activeIndex);if(p>-t.maxTranslate())return void(t.slides.length<l.length?t.slideTo(l.length-1):t.slideTo(t.slides.length-1));if(i.freeModeMomentum){if(1<a.velocities.length){var h=a.velocities.pop(),v=a.velocities.pop(),f=h.position-v.position,m=h.time-v.time;t.velocity=f/m,t.velocity/=2,Math.abs(t.velocity)<i.freeModeMinimumVelocity&&(t.velocity=0),(150<m||300<V.now()-h.time)&&(t.velocity=0)}else t.velocity=0;t.velocity*=i.freeModeMomentumVelocityRatio,a.velocities.length=0;var g=1e3*i.freeModeMomentumRatio,b=t.velocity*g,w=t.translate+b;r&&(w=-w);var y,x,T=!1,E=20*Math.abs(t.velocity)*i.freeModeMomentumBounceRatio;if(w<t.maxTranslate())i.freeModeMomentumBounce?(w+t.maxTranslate()<-E&&(w=t.maxTranslate()-E),y=t.maxTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.maxTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(w>t.minTranslate())i.freeModeMomentumBounce?(w-t.minTranslate()>E&&(w=t.minTranslate()+E),y=t.minTranslate(),T=!0,a.allowMomentumBounce=!0):w=t.minTranslate(),i.loop&&i.centeredSlides&&(x=!0);else if(i.freeModeSticky){for(var S,C=0;C<l.length;C+=1)if(l[C]>-w){S=C;break}w=-(w=Math.abs(l[S]-w)<Math.abs(l[S-1]-w)||"next"===t.swipeDirection?l[S]:l[S-1])}if(x&&t.once("transitionEnd",function(){t.loopFix()}),0!==t.velocity)g=r?Math.abs((-w-t.translate)/t.velocity):Math.abs((w-t.translate)/t.velocity);else if(i.freeModeSticky)return void t.slideToClosest();i.freeModeMomentumBounce&&T?(t.updateProgress(y),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&a.allowMomentumBounce&&(t.emit("momentumBounce"),t.setTransition(i.speed),t.setTranslate(y),n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))})):t.velocity?(t.updateProgress(w),t.setTransition(g),t.setTranslate(w),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd(function(){t&&!t.destroyed&&t.transitionEnd()}))):t.updateProgress(w),t.updateActiveIndex(),t.updateSlidesClasses()}else if(i.freeModeSticky)return void t.slideToClosest();(!i.freeModeMomentum||u>=i.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}else{for(var M=0,k=t.slidesSizesGrid[0],P=0;P<o.length;P+=i.slidesPerGroup)void 0!==o[P+i.slidesPerGroup]?p>=o[P]&&p<o[P+i.slidesPerGroup]&&(k=o[(M=P)+i.slidesPerGroup]-o[P]):p>=o[P]&&(M=P,k=o[o.length-1]-o[o.length-2]);var z=(p-o[M])/k;if(u>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(z>=i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M)),"prev"===t.swipeDirection&&(z>1-i.longSwipesRatio?t.slideTo(M+i.slidesPerGroup):t.slideTo(M))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&t.slideTo(M+i.slidesPerGroup),"prev"===t.swipeDirection&&t.slideTo(M)}}}.bind(e),e.onClick=function(e){this.allowClick||(this.params.preventClicks&&e.preventDefault(),this.params.preventClicksPropagation&&this.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}.bind(e);var r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(F.touch||!F.pointerEvents&&!F.prefixedPointerEvents){if(F.touch){var o=!("touchstart"!==a.start||!F.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.addEventListener(a.start,e.onTouchStart,o),r.addEventListener(a.move,e.onTouchMove,F.passiveListener?{passive:!1,capture:n}:n),r.addEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!m.ios&&!m.android||t.simulateTouch&&!F.touch&&m.ios)&&(r.addEventListener("mousedown",e.onTouchStart,!1),f.addEventListener("mousemove",e.onTouchMove,n),f.addEventListener("mouseup",e.onTouchEnd,!1))}else r.addEventListener(a.start,e.onTouchStart,!1),f.addEventListener(a.move,e.onTouchMove,n),f.addEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.addEventListener("click",e.onClick,!0),e.on(m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",g,!0)},detachEvents:function(){var e=this,t=e.params,a=e.touchEvents,i=e.el,s=e.wrapperEl,r="container"===t.touchEventsTarget?i:s,n=!!t.nested;if(F.touch||!F.pointerEvents&&!F.prefixedPointerEvents){if(F.touch){var o=!("onTouchStart"!==a.start||!F.passiveListener||!t.passiveListeners)&&{passive:!0,capture:!1};r.removeEventListener(a.start,e.onTouchStart,o),r.removeEventListener(a.move,e.onTouchMove,n),r.removeEventListener(a.end,e.onTouchEnd,o)}(t.simulateTouch&&!m.ios&&!m.android||t.simulateTouch&&!F.touch&&m.ios)&&(r.removeEventListener("mousedown",e.onTouchStart,!1),f.removeEventListener("mousemove",e.onTouchMove,n),f.removeEventListener("mouseup",e.onTouchEnd,!1))}else r.removeEventListener(a.start,e.onTouchStart,!1),f.removeEventListener(a.move,e.onTouchMove,n),f.removeEventListener(a.end,e.onTouchEnd,!1);(t.preventClicks||t.preventClicksPropagation)&&r.removeEventListener("click",e.onClick,!0),e.off(m.ios||m.android?"resize orientationchange observerUpdate":"resize observerUpdate",g)}};var w,y={setBreakpoint:function(){var e=this,t=e.activeIndex,a=e.initialized,i=e.loopedSlides;void 0===i&&(i=0);var s=e.params,r=s.breakpoints;if(r&&(!r||0!==Object.keys(r).length)){var n=e.getBreakpoint(r);if(n&&e.currentBreakpoint!==n){var o=n in r?r[n]:void 0;o&&["slidesPerView","spaceBetween","slidesPerGroup"].forEach(function(e){var t=o[e];void 0!==t&&(o[e]="slidesPerView"!==e||"AUTO"!==t&&"auto"!==t?"slidesPerView"===e?parseFloat(t):parseInt(t,10):"auto")});var l=o||e.originalParams,d=s.loop&&l.slidesPerView!==s.slidesPerView;V.extend(e.params,l),V.extend(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),e.currentBreakpoint=n,d&&a&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",l)}}},getBreakpoint:function(e){if(e){var t=!1,a=[];Object.keys(e).forEach(function(e){a.push(e)}),a.sort(function(e,t){return parseInt(e,10)-parseInt(t,10)});for(var i=0;i<a.length;i+=1){var s=a[i];this.params.breakpointsInverse?s<=Y.innerWidth&&(t=s):s>=Y.innerWidth&&!t&&(t=s)}return t||"max"}}},I={isIE:!!Y.navigator.userAgent.match(/Trident/g)||!!Y.navigator.userAgent.match(/MSIE/g),isEdge:!!Y.navigator.userAgent.match(/Edge/g),isSafari:(w=Y.navigator.userAgent.toLowerCase(),0<=w.indexOf("safari")&&w.indexOf("chrome")<0&&w.indexOf("android")<0),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Y.navigator.userAgent)};var x={init:!0,direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,preventInteractionOnTransition:!1,edgeSwipeDetection:!1,edgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsInverse:!1,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!1,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!0,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopFillGroupWithBlank:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0},T={update:o,translate:d,transition:p,slide:c,loop:u,grabCursor:h,manipulation:v,events:b,breakpoints:y,checkOverflow:{checkOverflow:function(){var e=this,t=e.isLocked;e.isLocked=1===e.snapGrid.length,e.allowSlideNext=!e.isLocked,e.allowSlidePrev=!e.isLocked,t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock"),t&&t!==e.isLocked&&(e.isEnd=!1,e.navigation.update())}},classes:{addClasses:function(){var t=this.classNames,a=this.params,e=this.rtl,i=this.$el,s=[];s.push(a.direction),a.freeMode&&s.push("free-mode"),F.flexbox||s.push("no-flexbox"),a.autoHeight&&s.push("autoheight"),e&&s.push("rtl"),1<a.slidesPerColumn&&s.push("multirow"),m.android&&s.push("android"),m.ios&&s.push("ios"),(I.isIE||I.isEdge)&&(F.pointerEvents||F.prefixedPointerEvents)&&s.push("wp8-"+a.direction),s.forEach(function(e){t.push(a.containerModifierClass+e)}),i.addClass(t.join(" "))},removeClasses:function(){var e=this.$el,t=this.classNames;e.removeClass(t.join(" "))}},images:{loadImage:function(e,t,a,i,s,r){var n;function o(){r&&r()}e.complete&&s?o():t?((n=new Y.Image).onload=o,n.onerror=o,i&&(n.sizes=i),a&&(n.srcset=a),t&&(n.src=t)):o()},preloadImages:function(){var e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(var a=0;a<e.imagesToLoad.length;a+=1){var i=e.imagesToLoad[a];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}}},E={},S=function(u){function h(){for(var e,t,s,a=[],i=arguments.length;i--;)a[i]=arguments[i];1===a.length&&a[0].constructor&&a[0].constructor===Object?s=a[0]:(t=(e=a)[0],s=e[1]),s||(s={}),s=V.extend({},s),t&&!s.el&&(s.el=t),u.call(this,s),Object.keys(T).forEach(function(t){Object.keys(T[t]).forEach(function(e){h.prototype[e]||(h.prototype[e]=T[t][e])})});var r=this;void 0===r.modules&&(r.modules={}),Object.keys(r.modules).forEach(function(e){var t=r.modules[e];if(t.params){var a=Object.keys(t.params)[0],i=t.params[a];if("object"!=typeof i||null===i)return;if(!(a in s&&"enabled"in i))return;!0===s[a]&&(s[a]={enabled:!0}),"object"!=typeof s[a]||"enabled"in s[a]||(s[a].enabled=!0),s[a]||(s[a]={enabled:!1})}});var n=V.extend({},x);r.useModulesParams(n),r.params=V.extend({},n,E,s),r.originalParams=V.extend({},r.params),r.passedParams=V.extend({},s);var o=(r.$=L)(r.params.el);if(t=o[0]){if(1<o.length){var l=[];return o.each(function(e,t){var a=V.extend({},s,{el:t});l.push(new h(a))}),l}t.swiper=r,o.data("swiper",r);var d,p,c=o.children("."+r.params.wrapperClass);return V.extend(r,{$el:o,el:t,$wrapperEl:c,wrapperEl:c[0],classNames:[],slides:L(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:function(){return"horizontal"===r.params.direction},isVertical:function(){return"vertical"===r.params.direction},rtl:"rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction"),rtlTranslate:"horizontal"===r.params.direction&&("rtl"===t.dir.toLowerCase()||"rtl"===o.css("direction")),wrongRTL:"-webkit-box"===c.css("display"),activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:(d=["touchstart","touchmove","touchend"],p=["mousedown","mousemove","mouseup"],F.pointerEvents?p=["pointerdown","pointermove","pointerup"]:F.prefixedPointerEvents&&(p=["MSPointerDown","MSPointerMove","MSPointerUp"]),r.touchEventsTouch={start:d[0],move:d[1],end:d[2]},r.touchEventsDesktop={start:p[0],move:p[1],end:p[2]},F.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,formElements:"input, select, option, textarea, button, video",lastClickTime:V.now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.useModules(),r.params.init&&r.init(),r}}u&&(h.__proto__=u);var e={extendedDefaults:{configurable:!0},defaults:{configurable:!0},Class:{configurable:!0},$:{configurable:!0}};return((h.prototype=Object.create(u&&u.prototype)).constructor=h).prototype.slidesPerViewDynamic=function(){var e=this,t=e.params,a=e.slides,i=e.slidesGrid,s=e.size,r=e.activeIndex,n=1;if(t.centeredSlides){for(var o,l=a[r].swiperSlideSize,d=r+1;d<a.length;d+=1)a[d]&&!o&&(n+=1,s<(l+=a[d].swiperSlideSize)&&(o=!0));for(var p=r-1;0<=p;p-=1)a[p]&&!o&&(n+=1,s<(l+=a[p].swiperSlideSize)&&(o=!0))}else for(var c=r+1;c<a.length;c+=1)i[c]-i[r]<s&&(n+=1);return n},h.prototype.update=function(){var a=this;if(a&&!a.destroyed){var e=a.snapGrid,t=a.params;t.breakpoints&&a.setBreakpoint(),a.updateSize(),a.updateSlides(),a.updateProgress(),a.updateSlidesClasses(),a.params.freeMode?(i(),a.params.autoHeight&&a.updateAutoHeight()):(("auto"===a.params.slidesPerView||1<a.params.slidesPerView)&&a.isEnd&&!a.params.centeredSlides?a.slideTo(a.slides.length-1,0,!1,!0):a.slideTo(a.activeIndex,0,!1,!0))||i(),t.watchOverflow&&e!==a.snapGrid&&a.checkOverflow(),a.emit("update")}function i(){var e=a.rtlTranslate?-1*a.translate:a.translate,t=Math.min(Math.max(e,a.maxTranslate()),a.minTranslate());a.setTranslate(t),a.updateActiveIndex(),a.updateSlidesClasses()}},h.prototype.init=function(){var e=this;e.initialized||(e.emit("beforeInit"),e.params.breakpoints&&e.setBreakpoint(),e.addClasses(),e.params.loop&&e.loopCreate(),e.updateSize(),e.updateSlides(),e.params.watchOverflow&&e.checkOverflow(),e.params.grabCursor&&e.setGrabCursor(),e.params.preloadImages&&e.preloadImages(),e.params.loop?e.slideTo(e.params.initialSlide+e.loopedSlides,0,e.params.runCallbacksOnInit):e.slideTo(e.params.initialSlide,0,e.params.runCallbacksOnInit),e.attachEvents(),e.initialized=!0,e.emit("init"))},h.prototype.destroy=function(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);var a=this,i=a.params,s=a.$el,r=a.$wrapperEl,n=a.slides;return void 0===a.params||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),i.loop&&a.loopDestroy(),t&&(a.removeClasses(),s.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(function(e){a.off(e)}),!1!==e&&(a.$el[0].swiper=null,a.$el.data("swiper",null),V.deleteProps(a)),a.destroyed=!0),null},h.extendDefaults=function(e){V.extend(E,e)},e.extendedDefaults.get=function(){return E},e.defaults.get=function(){return x},e.Class.get=function(){return u},e.$.get=function(){return L},Object.defineProperties(h,e),h}(s),C={name:"device",proto:{device:m},static:{device:m}},M={name:"support",proto:{support:F},static:{support:F}},k={name:"browser",proto:{browser:I},static:{browser:I}},P={name:"resize",create:function(){var e=this;V.extend(e,{resize:{resizeHandler:function(){e&&!e.destroyed&&e.initialized&&(e.emit("beforeResize"),e.emit("resize"))},orientationChangeHandler:function(){e&&!e.destroyed&&e.initialized&&e.emit("orientationchange")}}})},on:{init:function(){Y.addEventListener("resize",this.resize.resizeHandler),Y.addEventListener("orientationchange",this.resize.orientationChangeHandler)},destroy:function(){Y.removeEventListener("resize",this.resize.resizeHandler),Y.removeEventListener("orientationchange",this.resize.orientationChangeHandler)}}},z={func:Y.MutationObserver||Y.WebkitMutationObserver,attach:function(e,t){void 0===t&&(t={});var a=this,i=new z.func(function(e){if(1!==e.length){var t=function(){a.emit("observerUpdate",e[0])};Y.requestAnimationFrame?Y.requestAnimationFrame(t):Y.setTimeout(t,0)}else a.emit("observerUpdate",e[0])});i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.observer.observers.push(i)},init:function(){var e=this;if(F.observer&&e.params.observer){if(e.params.observeParents)for(var t=e.$el.parents(),a=0;a<t.length;a+=1)e.observer.attach(t[a]);e.observer.attach(e.$el[0],{childList:!1}),e.observer.attach(e.$wrapperEl[0],{attributes:!1})}},destroy:function(){this.observer.observers.forEach(function(e){e.disconnect()}),this.observer.observers=[]}},$={name:"observer",params:{observer:!1,observeParents:!1},create:function(){V.extend(this,{observer:{init:z.init.bind(this),attach:z.attach.bind(this),destroy:z.destroy.bind(this),observers:[]}})},on:{init:function(){this.observer.init()},destroy:function(){this.observer.destroy()}}},D={update:function(e){var t=this,a=t.params,i=a.slidesPerView,s=a.slidesPerGroup,r=a.centeredSlides,n=t.params.virtual,o=n.addSlidesBefore,l=n.addSlidesAfter,d=t.virtual,p=d.from,c=d.to,u=d.slides,h=d.slidesGrid,v=d.renderSlide,f=d.offset;t.updateActiveIndex();var m,g,b,w=t.activeIndex||0;m=t.rtlTranslate?"right":t.isHorizontal()?"left":"top",r?(g=Math.floor(i/2)+s+o,b=Math.floor(i/2)+s+l):(g=i+(s-1)+o,b=s+l);var y=Math.max((w||0)-b,0),x=Math.min((w||0)+g,u.length-1),T=(t.slidesGrid[y]||0)-(t.slidesGrid[0]||0);function E(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load()}if(V.extend(t.virtual,{from:y,to:x,offset:T,slidesGrid:t.slidesGrid}),p===y&&c===x&&!e)return t.slidesGrid!==h&&T!==f&&t.slides.css(m,T+"px"),void t.updateProgress();if(t.params.virtual.renderExternal)return t.params.virtual.renderExternal.call(t,{offset:T,from:y,to:x,slides:function(){for(var e=[],t=y;t<=x;t+=1)e.push(u[t]);return e}()}),void E();var S=[],C=[];if(e)t.$wrapperEl.find("."+t.params.slideClass).remove();else for(var M=p;M<=c;M+=1)(M<y||x<M)&&t.$wrapperEl.find("."+t.params.slideClass+'[data-swiper-slide-index="'+M+'"]').remove();for(var k=0;k<u.length;k+=1)y<=k&&k<=x&&(void 0===c||e?C.push(k):(c<k&&C.push(k),k<p&&S.push(k)));C.forEach(function(e){t.$wrapperEl.append(v(u[e],e))}),S.sort(function(e,t){return t-e}).forEach(function(e){t.$wrapperEl.prepend(v(u[e],e))}),t.$wrapperEl.children(".swiper-slide").css(m,T+"px"),E()},renderSlide:function(e,t){var a=this,i=a.params.virtual;if(i.cache&&a.virtual.cache[t])return a.virtual.cache[t];var s=i.renderSlide?L(i.renderSlide.call(a,e,t)):L('<div class="'+a.params.slideClass+'" data-swiper-slide-index="'+t+'">'+e+"</div>");return s.attr("data-swiper-slide-index")||s.attr("data-swiper-slide-index",t),i.cache&&(a.virtual.cache[t]=s),s},appendSlide:function(e){this.virtual.slides.push(e),this.virtual.update(!0)},prependSlide:function(e){var t=this;if(t.virtual.slides.unshift(e),t.params.virtual.cache){var a=t.virtual.cache,i={};Object.keys(a).forEach(function(e){i[e+1]=a[e]}),t.virtual.cache=i}t.virtual.update(!0),t.slideNext(0)}},O={name:"virtual",params:{virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,addSlidesBefore:0,addSlidesAfter:0}},create:function(){var e=this;V.extend(e,{virtual:{update:D.update.bind(e),appendSlide:D.appendSlide.bind(e),prependSlide:D.prependSlide.bind(e),renderSlide:D.renderSlide.bind(e),slides:e.params.virtual.slides,cache:{}}})},on:{beforeInit:function(){var e=this;if(e.params.virtual.enabled){e.classNames.push(e.params.containerModifierClass+"virtual");var t={watchSlidesProgress:!0};V.extend(e.params,t),V.extend(e.originalParams,t),e.params.initialSlide||e.virtual.update()}},setTranslate:function(){this.params.virtual.enabled&&this.virtual.update()}}},A={handle:function(e){var t=this,a=t.rtlTranslate,i=e;i.originalEvent&&(i=i.originalEvent);var s=i.keyCode||i.charCode;if(!t.allowSlideNext&&(t.isHorizontal()&&39===s||t.isVertical()&&40===s))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&37===s||t.isVertical()&&38===s))return!1;if(!(i.shiftKey||i.altKey||i.ctrlKey||i.metaKey||f.activeElement&&f.activeElement.nodeName&&("input"===f.activeElement.nodeName.toLowerCase()||"textarea"===f.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(37===s||39===s||38===s||40===s)){var r=!1;if(0<t.$el.parents("."+t.params.slideClass).length&&0===t.$el.parents("."+t.params.slideActiveClass).length)return;var n=Y.innerWidth,o=Y.innerHeight,l=t.$el.offset();a&&(l.left-=t.$el[0].scrollLeft);for(var d=[[l.left,l.top],[l.left+t.width,l.top],[l.left,l.top+t.height],[l.left+t.width,l.top+t.height]],p=0;p<d.length;p+=1){var c=d[p];0<=c[0]&&c[0]<=n&&0<=c[1]&&c[1]<=o&&(r=!0)}if(!r)return}t.isHorizontal()?(37!==s&&39!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),(39===s&&!a||37===s&&a)&&t.slideNext(),(37===s&&!a||39===s&&a)&&t.slidePrev()):(38!==s&&40!==s||(i.preventDefault?i.preventDefault():i.returnValue=!1),40===s&&t.slideNext(),38===s&&t.slidePrev()),t.emit("keyPress",s)}},enable:function(){this.keyboard.enabled||(L(f).on("keydown",this.keyboard.handle),this.keyboard.enabled=!0)},disable:function(){this.keyboard.enabled&&(L(f).off("keydown",this.keyboard.handle),this.keyboard.enabled=!1)}},N={name:"keyboard",params:{keyboard:{enabled:!1,onlyInViewport:!0}},create:function(){V.extend(this,{keyboard:{enabled:!1,enable:A.enable.bind(this),disable:A.disable.bind(this),handle:A.handle.bind(this)}})},on:{init:function(){this.params.keyboard.enabled&&this.keyboard.enable()},destroy:function(){this.keyboard.enabled&&this.keyboard.disable()}}};var H={lastScrollTime:V.now(),event:-1<Y.navigator.userAgent.indexOf("firefox")?"DOMMouseScroll":function(){var e="onwheel",t=e in f;if(!t){var a=f.createElement("div");a.setAttribute(e,"return;"),t="function"==typeof a[e]}return!t&&f.implementation&&f.implementation.hasFeature&&!0!==f.implementation.hasFeature("","")&&(t=f.implementation.hasFeature("Events.wheel","3.0")),t}()?"wheel":"mousewheel",normalize:function(e){var t=0,a=0,i=0,s=0;return"detail"in e&&(a=e.detail),"wheelDelta"in e&&(a=-e.wheelDelta/120),"wheelDeltaY"in e&&(a=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=a,a=0),i=10*t,s=10*a,"deltaY"in e&&(s=e.deltaY),"deltaX"in e&&(i=e.deltaX),(i||s)&&e.deltaMode&&(1===e.deltaMode?(i*=40,s*=40):(i*=800,s*=800)),i&&!t&&(t=i<1?-1:1),s&&!a&&(a=s<1?-1:1),{spinX:t,spinY:a,pixelX:i,pixelY:s}},handleMouseEnter:function(){this.mouseEntered=!0},handleMouseLeave:function(){this.mouseEntered=!1},handle:function(e){var t=e,a=this,i=a.params.mousewheel;if(!a.mouseEntered&&!i.releaseOnEdges)return!0;t.originalEvent&&(t=t.originalEvent);var s=0,r=a.rtlTranslate?-1:1,n=H.normalize(t);if(i.forceToAxis)if(a.isHorizontal()){if(!(Math.abs(n.pixelX)>Math.abs(n.pixelY)))return!0;s=n.pixelX*r}else{if(!(Math.abs(n.pixelY)>Math.abs(n.pixelX)))return!0;s=n.pixelY}else s=Math.abs(n.pixelX)>Math.abs(n.pixelY)?-n.pixelX*r:-n.pixelY;if(0===s)return!0;if(i.invert&&(s=-s),a.params.freeMode){a.params.loop&&a.loopFix();var o=a.getTranslate()+s*i.sensitivity,l=a.isBeginning,d=a.isEnd;if(o>=a.minTranslate()&&(o=a.minTranslate()),o<=a.maxTranslate()&&(o=a.maxTranslate()),a.setTransition(0),a.setTranslate(o),a.updateProgress(),a.updateActiveIndex(),a.updateSlidesClasses(),(!l&&a.isBeginning||!d&&a.isEnd)&&a.updateSlidesClasses(),a.params.freeModeSticky&&(clearTimeout(a.mousewheel.timeout),a.mousewheel.timeout=V.nextTick(function(){a.slideToClosest()},300)),a.emit("scroll",t),a.params.autoplay&&a.params.autoplayDisableOnInteraction&&a.autoplay.stop(),o===a.minTranslate()||o===a.maxTranslate())return!0}else{if(60<V.now()-a.mousewheel.lastScrollTime)if(s<0)if(a.isEnd&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slideNext(),a.emit("scroll",t);else if(a.isBeginning&&!a.params.loop||a.animating){if(i.releaseOnEdges)return!0}else a.slidePrev(),a.emit("scroll",t);a.mousewheel.lastScrollTime=(new Y.Date).getTime()}return t.preventDefault?t.preventDefault():t.returnValue=!1,!1},enable:function(){var e=this;if(!H.event)return!1;if(e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.on("mouseenter",e.mousewheel.handleMouseEnter),t.on("mouseleave",e.mousewheel.handleMouseLeave),t.on(H.event,e.mousewheel.handle),e.mousewheel.enabled=!0},disable:function(){var e=this;if(!H.event)return!1;if(!e.mousewheel.enabled)return!1;var t=e.$el;return"container"!==e.params.mousewheel.eventsTarged&&(t=L(e.params.mousewheel.eventsTarged)),t.off(H.event,e.mousewheel.handle),!(e.mousewheel.enabled=!1)}},G={update:function(){var e=this,t=e.params.navigation;if(!e.params.loop){var a=e.navigation,i=a.$nextEl,s=a.$prevEl;s&&0<s.length&&(e.isBeginning?s.addClass(t.disabledClass):s.removeClass(t.disabledClass),s[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass)),i&&0<i.length&&(e.isEnd?i.addClass(t.disabledClass):i.removeClass(t.disabledClass),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](t.lockClass))}},onPrevClick:function(e){e.preventDefault(),this.isBeginning&&!this.params.loop||this.slidePrev()},onNextClick:function(e){e.preventDefault(),this.isEnd&&!this.params.loop||this.slideNext()},init:function(){var e,t,a=this,i=a.params.navigation;(i.nextEl||i.prevEl)&&(i.nextEl&&(e=L(i.nextEl),a.params.uniqueNavElements&&"string"==typeof i.nextEl&&1<e.length&&1===a.$el.find(i.nextEl).length&&(e=a.$el.find(i.nextEl))),i.prevEl&&(t=L(i.prevEl),a.params.uniqueNavElements&&"string"==typeof i.prevEl&&1<t.length&&1===a.$el.find(i.prevEl).length&&(t=a.$el.find(i.prevEl))),e&&0<e.length&&e.on("click",a.navigation.onNextClick),t&&0<t.length&&t.on("click",a.navigation.onPrevClick),V.extend(a.navigation,{$nextEl:e,nextEl:e&&e[0],$prevEl:t,prevEl:t&&t[0]}))},destroy:function(){var e=this,t=e.navigation,a=t.$nextEl,i=t.$prevEl;a&&a.length&&(a.off("click",e.navigation.onNextClick),a.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",e.navigation.onPrevClick),i.removeClass(e.params.navigation.disabledClass))}},B={update:function(){var e=this,t=e.rtl,s=e.params.pagination;if(s.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var r,a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,n=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?((r=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup))>a-1-2*e.loopedSlides&&(r-=a-2*e.loopedSlides),n-1<r&&(r-=n),r<0&&"bullets"!==e.params.paginationType&&(r=n+r)):r=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===s.type&&e.pagination.bullets&&0<e.pagination.bullets.length){var o,l,d,p=e.pagination.bullets;if(s.dynamicBullets&&(e.pagination.bulletSize=p.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),i.css(e.isHorizontal()?"width":"height",e.pagination.bulletSize*(s.dynamicMainBullets+4)+"px"),1<s.dynamicMainBullets&&void 0!==e.previousIndex&&(e.pagination.dynamicBulletIndex+=r-e.previousIndex,e.pagination.dynamicBulletIndex>s.dynamicMainBullets-1?e.pagination.dynamicBulletIndex=s.dynamicMainBullets-1:e.pagination.dynamicBulletIndex<0&&(e.pagination.dynamicBulletIndex=0)),o=r-e.pagination.dynamicBulletIndex,d=((l=o+(Math.min(p.length,s.dynamicMainBullets)-1))+o)/2),p.removeClass(s.bulletActiveClass+" "+s.bulletActiveClass+"-next "+s.bulletActiveClass+"-next-next "+s.bulletActiveClass+"-prev "+s.bulletActiveClass+"-prev-prev "+s.bulletActiveClass+"-main"),1<i.length)p.each(function(e,t){var a=L(t),i=a.index();i===r&&a.addClass(s.bulletActiveClass),s.dynamicBullets&&(o<=i&&i<=l&&a.addClass(s.bulletActiveClass+"-main"),i===o&&a.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),i===l&&a.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next"))});else if(p.eq(r).addClass(s.bulletActiveClass),s.dynamicBullets){for(var c=p.eq(o),u=p.eq(l),h=o;h<=l;h+=1)p.eq(h).addClass(s.bulletActiveClass+"-main");c.prev().addClass(s.bulletActiveClass+"-prev").prev().addClass(s.bulletActiveClass+"-prev-prev"),u.next().addClass(s.bulletActiveClass+"-next").next().addClass(s.bulletActiveClass+"-next-next")}if(s.dynamicBullets){var v=Math.min(p.length,s.dynamicMainBullets+4),f=(e.pagination.bulletSize*v-e.pagination.bulletSize)/2-d*e.pagination.bulletSize,m=t?"right":"left";p.css(e.isHorizontal()?m:"top",f+"px")}}if("fraction"===s.type&&(i.find("."+s.currentClass).text(s.formatFractionCurrent(r+1)),i.find("."+s.totalClass).text(s.formatFractionTotal(n))),"progressbar"===s.type){var g;g=s.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";var b=(r+1)/n,w=1,y=1;"horizontal"===g?w=b:y=b,i.find("."+s.progressbarFillClass).transform("translate3d(0,0,0) scaleX("+w+") scaleY("+y+")").transition(e.params.speed)}"custom"===s.type&&s.renderCustom?(i.html(s.renderCustom(e,r+1,n)),e.emit("paginationRender",e,i[0])):e.emit("paginationUpdate",e,i[0]),i[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](s.lockClass)}},render:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,i=e.pagination.$el,s="";if("bullets"===t.type){for(var r=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length,n=0;n<r;n+=1)t.renderBullet?s+=t.renderBullet.call(e,n,t.bulletClass):s+="<"+t.bulletElement+' class="'+t.bulletClass+'"></'+t.bulletElement+">";i.html(s),e.pagination.bullets=i.find("."+t.bulletClass)}"fraction"===t.type&&(s=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):'<span class="'+t.currentClass+'"></span> / <span class="'+t.totalClass+'"></span>',i.html(s)),"progressbar"===t.type&&(s=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):'<span class="'+t.progressbarFillClass+'"></span>',i.html(s)),"custom"!==t.type&&e.emit("paginationRender",e.pagination.$el[0])}},init:function(){var a=this,e=a.params.pagination;if(e.el){var t=L(e.el);0!==t.length&&(a.params.uniqueNavElements&&"string"==typeof e.el&&1<t.length&&1===a.$el.find(e.el).length&&(t=a.$el.find(e.el)),"bullets"===e.type&&e.clickable&&t.addClass(e.clickableClass),t.addClass(e.modifierClass+e.type),"bullets"===e.type&&e.dynamicBullets&&(t.addClass(""+e.modifierClass+e.type+"-dynamic"),a.pagination.dynamicBulletIndex=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&t.addClass(e.progressbarOppositeClass),e.clickable&&t.on("click","."+e.bulletClass,function(e){e.preventDefault();var t=L(this).index()*a.params.slidesPerGroup;a.params.loop&&(t+=a.loopedSlides),a.slideTo(t)}),V.extend(a.pagination,{$el:t,el:t[0]}))}},destroy:function(){var e=this,t=e.params.pagination;if(t.el&&e.pagination.el&&e.pagination.$el&&0!==e.pagination.$el.length){var a=e.pagination.$el;a.removeClass(t.hiddenClass),a.removeClass(t.modifierClass+t.type),e.pagination.bullets&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&a.off("click","."+t.bulletClass)}}},X={setTranslate:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=e.rtlTranslate,i=e.progress,s=t.dragSize,r=t.trackSize,n=t.$dragEl,o=t.$el,l=e.params.scrollbar,d=s,p=(r-s)*i;a?0<(p=-p)?(d=s-p,p=0):r<-p+s&&(d=r+p):p<0?(d=s+p,p=0):r<p+s&&(d=r-p),e.isHorizontal()?(F.transforms3d?n.transform("translate3d("+p+"px, 0, 0)"):n.transform("translateX("+p+"px)"),n[0].style.width=d+"px"):(F.transforms3d?n.transform("translate3d(0px, "+p+"px, 0)"):n.transform("translateY("+p+"px)"),n[0].style.height=d+"px"),l.hide&&(clearTimeout(e.scrollbar.timeout),o[0].style.opacity=1,e.scrollbar.timeout=setTimeout(function(){o[0].style.opacity=0,o.transition(400)},1e3))}},setTransition:function(e){this.params.scrollbar.el&&this.scrollbar.el&&this.scrollbar.$dragEl.transition(e)},updateSize:function(){var e=this;if(e.params.scrollbar.el&&e.scrollbar.el){var t=e.scrollbar,a=t.$dragEl,i=t.$el;a[0].style.width="",a[0].style.height="";var s,r=e.isHorizontal()?i[0].offsetWidth:i[0].offsetHeight,n=e.size/e.virtualSize,o=n*(r/e.size);s="auto"===e.params.scrollbar.dragSize?r*n:parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?a[0].style.width=s+"px":a[0].style.height=s+"px",i[0].style.display=1<=n?"none":"",e.params.scrollbarHide&&(i[0].style.opacity=0),V.extend(t,{trackSize:r,divider:n,moveDivider:o,dragSize:s}),t.$el[e.params.watchOverflow&&e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}},setDragPosition:function(e){var t,a=this,i=a.scrollbar,s=a.rtlTranslate,r=i.$el,n=i.dragSize,o=i.trackSize;t=((a.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY)-r.offset()[a.isHorizontal()?"left":"top"]-n/2)/(o-n),t=Math.max(Math.min(t,1),0),s&&(t=1-t);var l=a.minTranslate()+(a.maxTranslate()-a.minTranslate())*t;a.updateProgress(l),a.setTranslate(l),a.updateActiveIndex(),a.updateSlidesClasses()},onDragStart:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar,s=t.$wrapperEl,r=i.$el,n=i.$dragEl;t.scrollbar.isTouched=!0,e.preventDefault(),e.stopPropagation(),s.transition(100),n.transition(100),i.setDragPosition(e),clearTimeout(t.scrollbar.dragTimeout),r.transition(0),a.hide&&r.css("opacity",1),t.emit("scrollbarDragStart",e)},onDragMove:function(e){var t=this.scrollbar,a=this.$wrapperEl,i=t.$el,s=t.$dragEl;this.scrollbar.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),a.transition(0),i.transition(0),s.transition(0),this.emit("scrollbarDragMove",e))},onDragEnd:function(e){var t=this,a=t.params.scrollbar,i=t.scrollbar.$el;t.scrollbar.isTouched&&(t.scrollbar.isTouched=!1,a.hide&&(clearTimeout(t.scrollbar.dragTimeout),t.scrollbar.dragTimeout=V.nextTick(function(){i.css("opacity",0),i.transition(400)},1e3)),t.emit("scrollbarDragEnd",e),a.snapOnRelease&&t.slideToClosest())},enableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!F.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!F.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};F.touch?(r.addEventListener(a.start,e.scrollbar.onDragStart,n),r.addEventListener(a.move,e.scrollbar.onDragMove,n),r.addEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.addEventListener(i.start,e.scrollbar.onDragStart,n),f.addEventListener(i.move,e.scrollbar.onDragMove,n),f.addEventListener(i.end,e.scrollbar.onDragEnd,o))}},disableDraggable:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.touchEventsTouch,i=e.touchEventsDesktop,s=e.params,r=t.$el[0],n=!(!F.passiveListener||!s.passiveListeners)&&{passive:!1,capture:!1},o=!(!F.passiveListener||!s.passiveListeners)&&{passive:!0,capture:!1};F.touch?(r.removeEventListener(a.start,e.scrollbar.onDragStart,n),r.removeEventListener(a.move,e.scrollbar.onDragMove,n),r.removeEventListener(a.end,e.scrollbar.onDragEnd,o)):(r.removeEventListener(i.start,e.scrollbar.onDragStart,n),f.removeEventListener(i.move,e.scrollbar.onDragMove,n),f.removeEventListener(i.end,e.scrollbar.onDragEnd,o))}},init:function(){var e=this;if(e.params.scrollbar.el){var t=e.scrollbar,a=e.$el,i=e.params.scrollbar,s=L(i.el);e.params.uniqueNavElements&&"string"==typeof i.el&&1<s.length&&1===a.find(i.el).length&&(s=a.find(i.el));var r=s.find("."+e.params.scrollbar.dragClass);0===r.length&&(r=L('<div class="'+e.params.scrollbar.dragClass+'"></div>'),s.append(r)),V.extend(t,{$el:s,el:s[0],$dragEl:r,dragEl:r[0]}),i.draggable&&t.enableDraggable()}},destroy:function(){this.scrollbar.disableDraggable()}},R={setTransform:function(e,t){var a=this.rtl,i=L(e),s=a?-1:1,r=i.attr("data-swiper-parallax")||"0",n=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y"),l=i.attr("data-swiper-parallax-scale"),d=i.attr("data-swiper-parallax-opacity");if(n||o?(n=n||"0",o=o||"0"):this.isHorizontal()?(n=r,o="0"):(o=r,n="0"),n=0<=n.indexOf("%")?parseInt(n,10)*t*s+"%":n*t*s+"px",o=0<=o.indexOf("%")?parseInt(o,10)*t+"%":o*t+"px",null!=d){var p=d-(d-1)*(1-Math.abs(t));i[0].style.opacity=p}if(null==l)i.transform("translate3d("+n+", "+o+", 0px)");else{var c=l-(l-1)*(1-Math.abs(t));i.transform("translate3d("+n+", "+o+", 0px) scale("+c+")")}},setTranslate:function(){var i=this,e=i.$el,t=i.slides,s=i.progress,r=i.snapGrid;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,s)}),t.each(function(e,t){var a=t.progress;1<i.params.slidesPerGroup&&"auto"!==i.params.slidesPerView&&(a+=Math.ceil(e/2)-s*(r.length-1)),a=Math.min(Math.max(a,-1),1),L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){i.parallax.setTransform(t,a)})})},setTransition:function(s){void 0===s&&(s=this.params.speed);this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e,t){var a=L(t),i=parseInt(a.attr("data-swiper-parallax-duration"),10)||s;0===s&&(i=0),a.transition(i)})}},q={getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var t=e.targetTouches[0].pageX,a=e.targetTouches[0].pageY,i=e.targetTouches[1].pageX,s=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-a,2))},onGestureStart:function(e){var t=this,a=t.params.zoom,i=t.zoom,s=i.gesture;if(i.fakeGestureTouched=!1,i.fakeGestureMoved=!1,!F.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;i.fakeGestureTouched=!0,s.scaleStart=q.getDistanceBetweenTouches(e)}s.$slideEl&&s.$slideEl.length||(s.$slideEl=L(e.target).closest(".swiper-slide"),0===s.$slideEl.length&&(s.$slideEl=t.slides.eq(t.activeIndex)),s.$imageEl=s.$slideEl.find("img, svg, canvas"),s.$imageWrapEl=s.$imageEl.parent("."+a.containerClass),s.maxRatio=s.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==s.$imageWrapEl.length)?(s.$imageEl.transition(0),t.zoom.isScaling=!0):s.$imageEl=void 0},onGestureChange:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!F.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.fakeGestureMoved=!0,i.scaleMove=q.getDistanceBetweenTouches(e)}i.$imageEl&&0!==i.$imageEl.length&&(F.gestures?this.zoom.scale=e.scale*a.currentScale:a.scale=i.scaleMove/i.scaleStart*a.currentScale,a.scale>i.maxRatio&&(a.scale=i.maxRatio-1+Math.pow(a.scale-i.maxRatio+1,.5)),a.scale<t.minRatio&&(a.scale=t.minRatio+1-Math.pow(t.minRatio-a.scale+1,.5)),i.$imageEl.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var t=this.params.zoom,a=this.zoom,i=a.gesture;if(!F.gestures){if(!a.fakeGestureTouched||!a.fakeGestureMoved)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!m.android)return;a.fakeGestureTouched=!1,a.fakeGestureMoved=!1}i.$imageEl&&0!==i.$imageEl.length&&(a.scale=Math.max(Math.min(a.scale,i.maxRatio),t.minRatio),i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(i.$slideEl=void 0))},onTouchStart:function(e){var t=this.zoom,a=t.gesture,i=t.image;a.$imageEl&&0!==a.$imageEl.length&&(i.isTouched||(m.android&&e.preventDefault(),i.isTouched=!0,i.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))},onTouchMove:function(e){var t=this,a=t.zoom,i=a.gesture,s=a.image,r=a.velocity;if(i.$imageEl&&0!==i.$imageEl.length&&(t.allowClick=!1,s.isTouched&&i.$slideEl)){s.isMoved||(s.width=i.$imageEl[0].offsetWidth,s.height=i.$imageEl[0].offsetHeight,s.startX=V.getTranslate(i.$imageWrapEl[0],"x")||0,s.startY=V.getTranslate(i.$imageWrapEl[0],"y")||0,i.slideWidth=i.$slideEl[0].offsetWidth,i.slideHeight=i.$slideEl[0].offsetHeight,i.$imageWrapEl.transition(0),t.rtl&&(s.startX=-s.startX,s.startY=-s.startY));var n=s.width*a.scale,o=s.height*a.scale;if(!(n<i.slideWidth&&o<i.slideHeight)){if(s.minX=Math.min(i.slideWidth/2-n/2,0),s.maxX=-s.minX,s.minY=Math.min(i.slideHeight/2-o/2,0),s.maxY=-s.minY,s.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,s.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!s.isMoved&&!a.isScaling){if(t.isHorizontal()&&(Math.floor(s.minX)===Math.floor(s.startX)&&s.touchesCurrent.x<s.touchesStart.x||Math.floor(s.maxX)===Math.floor(s.startX)&&s.touchesCurrent.x>s.touchesStart.x))return void(s.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(s.minY)===Math.floor(s.startY)&&s.touchesCurrent.y<s.touchesStart.y||Math.floor(s.maxY)===Math.floor(s.startY)&&s.touchesCurrent.y>s.touchesStart.y))return void(s.isTouched=!1)}e.preventDefault(),e.stopPropagation(),s.isMoved=!0,s.currentX=s.touchesCurrent.x-s.touchesStart.x+s.startX,s.currentY=s.touchesCurrent.y-s.touchesStart.y+s.startY,s.currentX<s.minX&&(s.currentX=s.minX+1-Math.pow(s.minX-s.currentX+1,.8)),s.currentX>s.maxX&&(s.currentX=s.maxX-1+Math.pow(s.currentX-s.maxX+1,.8)),s.currentY<s.minY&&(s.currentY=s.minY+1-Math.pow(s.minY-s.currentY+1,.8)),s.currentY>s.maxY&&(s.currentY=s.maxY-1+Math.pow(s.currentY-s.maxY+1,.8)),r.prevPositionX||(r.prevPositionX=s.touchesCurrent.x),r.prevPositionY||(r.prevPositionY=s.touchesCurrent.y),r.prevTime||(r.prevTime=Date.now()),r.x=(s.touchesCurrent.x-r.prevPositionX)/(Date.now()-r.prevTime)/2,r.y=(s.touchesCurrent.y-r.prevPositionY)/(Date.now()-r.prevTime)/2,Math.abs(s.touchesCurrent.x-r.prevPositionX)<2&&(r.x=0),Math.abs(s.touchesCurrent.y-r.prevPositionY)<2&&(r.y=0),r.prevPositionX=s.touchesCurrent.x,r.prevPositionY=s.touchesCurrent.y,r.prevTime=Date.now(),i.$imageWrapEl.transform("translate3d("+s.currentX+"px, "+s.currentY+"px,0)")}}},onTouchEnd:function(){var e=this.zoom,t=e.gesture,a=e.image,i=e.velocity;if(t.$imageEl&&0!==t.$imageEl.length){if(!a.isTouched||!a.isMoved)return a.isTouched=!1,void(a.isMoved=!1);a.isTouched=!1,a.isMoved=!1;var s=300,r=300,n=i.x*s,o=a.currentX+n,l=i.y*r,d=a.currentY+l;0!==i.x&&(s=Math.abs((o-a.currentX)/i.x)),0!==i.y&&(r=Math.abs((d-a.currentY)/i.y));var p=Math.max(s,r);a.currentX=o,a.currentY=d;var c=a.width*e.scale,u=a.height*e.scale;a.minX=Math.min(t.slideWidth/2-c/2,0),a.maxX=-a.minX,a.minY=Math.min(t.slideHeight/2-u/2,0),a.maxY=-a.minY,a.currentX=Math.max(Math.min(a.currentX,a.maxX),a.minX),a.currentY=Math.max(Math.min(a.currentY,a.maxY),a.minY),t.$imageWrapEl.transition(p).transform("translate3d("+a.currentX+"px, "+a.currentY+"px,0)")}},onTransitionEnd:function(){var e=this.zoom,t=e.gesture;t.$slideEl&&this.previousIndex!==this.activeIndex&&(t.$imageEl.transform("translate3d(0,0,0) scale(1)"),t.$imageWrapEl.transform("translate3d(0,0,0)"),t.$slideEl=void 0,t.$imageEl=void 0,t.$imageWrapEl=void 0,e.scale=1,e.currentScale=1)},toggle:function(e){var t=this.zoom;t.scale&&1!==t.scale?t.out():t.in(e)},in:function(e){var t,a,i,s,r,n,o,l,d,p,c,u,h,v,f,m,g=this,b=g.zoom,w=g.params.zoom,y=b.gesture,x=b.image;(y.$slideEl||(y.$slideEl=g.clickedSlide?L(g.clickedSlide):g.slides.eq(g.activeIndex),y.$imageEl=y.$slideEl.find("img, svg, canvas"),y.$imageWrapEl=y.$imageEl.parent("."+w.containerClass)),y.$imageEl&&0!==y.$imageEl.length)&&(y.$slideEl.addClass(""+w.zoomedSlideClass),void 0===x.touchesStart.x&&e?(t="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,a="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(t=x.touchesStart.x,a=x.touchesStart.y),b.scale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,b.currentScale=y.$imageWrapEl.attr("data-swiper-zoom")||w.maxRatio,e?(f=y.$slideEl[0].offsetWidth,m=y.$slideEl[0].offsetHeight,i=y.$slideEl.offset().left+f/2-t,s=y.$slideEl.offset().top+m/2-a,o=y.$imageEl[0].offsetWidth,l=y.$imageEl[0].offsetHeight,d=o*b.scale,p=l*b.scale,h=-(c=Math.min(f/2-d/2,0)),v=-(u=Math.min(m/2-p/2,0)),(r=i*b.scale)<c&&(r=c),h<r&&(r=h),(n=s*b.scale)<u&&(n=u),v<n&&(n=v)):n=r=0,y.$imageWrapEl.transition(300).transform("translate3d("+r+"px, "+n+"px,0)"),y.$imageEl.transition(300).transform("translate3d(0,0,0) scale("+b.scale+")"))},out:function(){var e=this,t=e.zoom,a=e.params.zoom,i=t.gesture;i.$slideEl||(i.$slideEl=e.clickedSlide?L(e.clickedSlide):e.slides.eq(e.activeIndex),i.$imageEl=i.$slideEl.find("img, svg, canvas"),i.$imageWrapEl=i.$imageEl.parent("."+a.containerClass)),i.$imageEl&&0!==i.$imageEl.length&&(t.scale=1,t.currentScale=1,i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),i.$slideEl.removeClass(""+a.zoomedSlideClass),i.$slideEl=void 0)},enable:function(){var e=this,t=e.zoom;if(!t.enabled){t.enabled=!0;var a=!("touchstart"!==e.touchEvents.start||!F.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};F.gestures?(e.$wrapperEl.on("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.on(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.on(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.on(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.on(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}},disable:function(){var e=this,t=e.zoom;if(t.enabled){e.zoom.enabled=!1;var a=!("touchstart"!==e.touchEvents.start||!F.passiveListener||!e.params.passiveListeners)&&{passive:!0,capture:!1};F.gestures?(e.$wrapperEl.off("gesturestart",".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off("gesturechange",".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off("gestureend",".swiper-slide",t.onGestureEnd,a)):"touchstart"===e.touchEvents.start&&(e.$wrapperEl.off(e.touchEvents.start,".swiper-slide",t.onGestureStart,a),e.$wrapperEl.off(e.touchEvents.move,".swiper-slide",t.onGestureChange,a),e.$wrapperEl.off(e.touchEvents.end,".swiper-slide",t.onGestureEnd,a)),e.$wrapperEl.off(e.touchEvents.move,"."+e.params.zoom.containerClass,t.onTouchMove)}}},W={loadInSlide:function(e,l){void 0===l&&(l=!0);var d=this,p=d.params.lazy;if(void 0!==e&&0!==d.slides.length){var c=d.virtual&&d.params.virtual.enabled?d.$wrapperEl.children("."+d.params.slideClass+'[data-swiper-slide-index="'+e+'"]'):d.slides.eq(e),t=c.find("."+p.elementClass+":not(."+p.loadedClass+"):not(."+p.loadingClass+")");!c.hasClass(p.elementClass)||c.hasClass(p.loadedClass)||c.hasClass(p.loadingClass)||(t=t.add(c[0])),0!==t.length&&t.each(function(e,t){var i=L(t);i.addClass(p.loadingClass);var s=i.attr("data-background"),r=i.attr("data-src"),n=i.attr("data-srcset"),o=i.attr("data-sizes");d.loadImage(i[0],r||s,n,o,!1,function(){if(null!=d&&d&&(!d||d.params)&&!d.destroyed){if(s?(i.css("background-image",'url("'+s+'")'),i.removeAttr("data-background")):(n&&(i.attr("srcset",n),i.removeAttr("data-srcset")),o&&(i.attr("sizes",o),i.removeAttr("data-sizes")),r&&(i.attr("src",r),i.removeAttr("data-src"))),i.addClass(p.loadedClass).removeClass(p.loadingClass),c.find("."+p.preloaderClass).remove(),d.params.loop&&l){var e=c.attr("data-swiper-slide-index");if(c.hasClass(d.params.slideDuplicateClass)){var t=d.$wrapperEl.children('[data-swiper-slide-index="'+e+'"]:not(.'+d.params.slideDuplicateClass+")");d.lazy.loadInSlide(t.index(),!1)}else{var a=d.$wrapperEl.children("."+d.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');d.lazy.loadInSlide(a.index(),!1)}}d.emit("lazyImageReady",c[0],i[0])}}),d.emit("lazyImageLoad",c[0],i[0])})}},load:function(){var i=this,t=i.$wrapperEl,a=i.params,s=i.slides,e=i.activeIndex,r=i.virtual&&a.virtual.enabled,n=a.lazy,o=a.slidesPerView;function l(e){if(r){if(t.children("."+a.slideClass+'[data-swiper-slide-index="'+e+'"]').length)return!0}else if(s[e])return!0;return!1}function d(e){return r?L(e).attr("data-swiper-slide-index"):L(e).index()}if("auto"===o&&(o=0),i.lazy.initialImageLoaded||(i.lazy.initialImageLoaded=!0),i.params.watchSlidesVisibility)t.children("."+a.slideVisibleClass).each(function(e,t){var a=r?L(t).attr("data-swiper-slide-index"):L(t).index();i.lazy.loadInSlide(a)});else if(1<o)for(var p=e;p<e+o;p+=1)l(p)&&i.lazy.loadInSlide(p);else i.lazy.loadInSlide(e);if(n.loadPrevNext)if(1<o||n.loadPrevNextAmount&&1<n.loadPrevNextAmount){for(var c=n.loadPrevNextAmount,u=o,h=Math.min(e+u+Math.max(c,u),s.length),v=Math.max(e-Math.max(u,c),0),f=e+o;f<h;f+=1)l(f)&&i.lazy.loadInSlide(f);for(var m=v;m<e;m+=1)l(m)&&i.lazy.loadInSlide(m)}else{var g=t.children("."+a.slideNextClass);0<g.length&&i.lazy.loadInSlide(d(g));var b=t.children("."+a.slidePrevClass);0<b.length&&i.lazy.loadInSlide(d(b))}}},j={LinearSpline:function(e,t){var a,i,s,r,n,o=function(e,t){for(i=-1,a=e.length;1<a-i;)e[s=a+i>>1]<=t?i=s:a=s;return a};return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(n=o(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0},this},getInterpolateFunction:function(e){var t=this;t.controller.spline||(t.controller.spline=t.params.loop?new j.LinearSpline(t.slidesGrid,e.slidesGrid):new j.LinearSpline(t.snapGrid,e.snapGrid))},setTranslate:function(e,t){var a,i,s=this,r=s.controller.control;function n(e){var t=s.rtlTranslate?-s.translate:s.translate;"slide"===s.params.controller.by&&(s.controller.getInterpolateFunction(e),i=-s.controller.spline.interpolate(-t)),i&&"container"!==s.params.controller.by||(a=(e.maxTranslate()-e.minTranslate())/(s.maxTranslate()-s.minTranslate()),i=(t-s.minTranslate())*a+e.minTranslate()),s.params.controller.inverse&&(i=e.maxTranslate()-i),e.updateProgress(i),e.setTranslate(i,s),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(r))for(var o=0;o<r.length;o+=1)r[o]!==t&&r[o]instanceof S&&n(r[o]);else r instanceof S&&t!==r&&n(r)},setTransition:function(t,e){var a,i=this,s=i.controller.control;function r(e){e.setTransition(t,i),0!==t&&(e.transitionStart(),e.params.autoHeight&&V.nextTick(function(){e.updateAutoHeight()}),e.$wrapperEl.transitionEnd(function(){s&&(e.params.loop&&"slide"===i.params.controller.by&&e.loopFix(),e.transitionEnd())}))}if(Array.isArray(s))for(a=0;a<s.length;a+=1)s[a]!==e&&s[a]instanceof S&&r(s[a]);else s instanceof S&&e!==s&&r(s)}},U={makeElFocusable:function(e){return e.attr("tabIndex","0"),e},addElRole:function(e,t){return e.attr("role",t),e},addElLabel:function(e,t){return e.attr("aria-label",t),e},disableEl:function(e){return e.attr("aria-disabled",!0),e},enableEl:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){var t=this,a=t.params.a11y;if(13===e.keyCode){var i=L(e.target);t.navigation&&t.navigation.$nextEl&&i.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?t.a11y.notify(a.lastSlideMessage):t.a11y.notify(a.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&i.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?t.a11y.notify(a.firstSlideMessage):t.a11y.notify(a.prevSlideMessage)),t.pagination&&i.is("."+t.params.pagination.bulletClass)&&i[0].click()}},notify:function(e){var t=this.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},updateNavigation:function(){var e=this;if(!e.params.loop){var t=e.navigation,a=t.$nextEl,i=t.$prevEl;i&&0<i.length&&(e.isBeginning?e.a11y.disableEl(i):e.a11y.enableEl(i)),a&&0<a.length&&(e.isEnd?e.a11y.disableEl(a):e.a11y.enableEl(a))}},updatePagination:function(){var i=this,s=i.params.a11y;i.pagination&&i.params.pagination.clickable&&i.pagination.bullets&&i.pagination.bullets.length&&i.pagination.bullets.each(function(e,t){var a=L(t);i.a11y.makeElFocusable(a),i.a11y.addElRole(a,"button"),i.a11y.addElLabel(a,s.paginationBulletMessage.replace(/{{index}}/,a.index()+1))})},init:function(){var e=this;e.$el.append(e.a11y.liveRegion);var t,a,i=e.params.a11y;e.navigation&&e.navigation.$nextEl&&(t=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(a=e.navigation.$prevEl),t&&(e.a11y.makeElFocusable(t),e.a11y.addElRole(t,"button"),e.a11y.addElLabel(t,i.nextSlideMessage),t.on("keydown",e.a11y.onEnterKey)),a&&(e.a11y.makeElFocusable(a),e.a11y.addElRole(a,"button"),e.a11y.addElLabel(a,i.prevSlideMessage),a.on("keydown",e.a11y.onEnterKey)),e.pagination&&e.params.pagination.clickable&&e.pagination.bullets&&e.pagination.bullets.length&&e.pagination.$el.on("keydown","."+e.params.pagination.bulletClass,e.a11y.onEnterKey)},destroy:function(){var e,t,a=this;a.a11y.liveRegion&&0<a.a11y.liveRegion.length&&a.a11y.liveRegion.remove(),a.navigation&&a.navigation.$nextEl&&(e=a.navigation.$nextEl),a.navigation&&a.navigation.$prevEl&&(t=a.navigation.$prevEl),e&&e.off("keydown",a.a11y.onEnterKey),t&&t.off("keydown",a.a11y.onEnterKey),a.pagination&&a.params.pagination.clickable&&a.pagination.bullets&&a.pagination.bullets.length&&a.pagination.$el.off("keydown","."+a.params.pagination.bulletClass,a.a11y.onEnterKey)}},K={init:function(){var e=this;if(e.params.history){if(!Y.history||!Y.history.pushState)return e.params.history.enabled=!1,void(e.params.hashNavigation.enabled=!0);var t=e.history;t.initialized=!0,t.paths=K.getPathValues(),(t.paths.key||t.paths.value)&&(t.scrollToSlide(0,t.paths.value,e.params.runCallbacksOnInit),e.params.history.replaceState||Y.addEventListener("popstate",e.history.setHistoryPopState))}},destroy:function(){this.params.history.replaceState||Y.removeEventListener("popstate",this.history.setHistoryPopState)},setHistoryPopState:function(){this.history.paths=K.getPathValues(),this.history.scrollToSlide(this.params.speed,this.history.paths.value,!1)},getPathValues:function(){var e=Y.location.pathname.slice(1).split("/").filter(function(e){return""!==e}),t=e.length;return{key:e[t-2],value:e[t-1]}},setHistory:function(e,t){if(this.history.initialized&&this.params.history.enabled){var a=this.slides.eq(t),i=K.slugify(a.attr("data-history"));Y.location.pathname.includes(e)||(i=e+"/"+i);var s=Y.history.state;s&&s.value===i||(this.params.history.replaceState?Y.history.replaceState({value:i},null,i):Y.history.pushState({value:i},null,i))}},slugify:function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")},scrollToSlide:function(e,t,a){var i=this;if(t)for(var s=0,r=i.slides.length;s<r;s+=1){var n=i.slides.eq(s);if(K.slugify(n.attr("data-history"))===t&&!n.hasClass(i.params.slideDuplicateClass)){var o=n.index();i.slideTo(o,e,a)}}else i.slideTo(0,e,a)}},_={onHashCange:function(){var e=this,t=f.location.hash.replace("#","");if(t!==e.slides.eq(e.activeIndex).attr("data-hash")){var a=e.$wrapperEl.children("."+e.params.slideClass+'[data-hash="'+t+'"]').index();if(void 0===a)return;e.slideTo(a)}},setHash:function(){var e=this;if(e.hashNavigation.initialized&&e.params.hashNavigation.enabled)if(e.params.hashNavigation.replaceState&&Y.history&&Y.history.replaceState)Y.history.replaceState(null,null,"#"+e.slides.eq(e.activeIndex).attr("data-hash")||"");else{var t=e.slides.eq(e.activeIndex),a=t.attr("data-hash")||t.attr("data-history");f.location.hash=a||""}},init:function(){var e=this;if(!(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)){e.hashNavigation.initialized=!0;var t=f.location.hash.replace("#","");if(t)for(var a=0,i=e.slides.length;a<i;a+=1){var s=e.slides.eq(a);if((s.attr("data-hash")||s.attr("data-history"))===t&&!s.hasClass(e.params.slideDuplicateClass)){var r=s.index();e.slideTo(r,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&L(Y).on("hashchange",e.hashNavigation.onHashCange)}},destroy:function(){this.params.hashNavigation.watchState&&L(Y).off("hashchange",this.hashNavigation.onHashCange)}},Z={run:function(){var e=this,t=e.slides.eq(e.activeIndex),a=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(a=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),e.autoplay.timeout=V.nextTick(function(){e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(e.slides.length-1,e.params.speed,!0,!0),e.emit("autoplay")):(e.slidePrev(e.params.speed,!0,!0),e.emit("autoplay")):e.params.loop?(e.loopFix(),e.slideNext(e.params.speed,!0,!0),e.emit("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?e.autoplay.stop():(e.slideTo(0,e.params.speed,!0,!0),e.emit("autoplay")):(e.slideNext(e.params.speed,!0,!0),e.emit("autoplay"))},a)},start:function(){var e=this;return void 0===e.autoplay.timeout&&(!e.autoplay.running&&(e.autoplay.running=!0,e.emit("autoplayStart"),e.autoplay.run(),!0))},stop:function(){var e=this;return!!e.autoplay.running&&(void 0!==e.autoplay.timeout&&(e.autoplay.timeout&&(clearTimeout(e.autoplay.timeout),e.autoplay.timeout=void 0),e.autoplay.running=!1,e.emit("autoplayStop"),!0))},pause:function(e){var t=this;t.autoplay.running&&(t.autoplay.paused||(t.autoplay.timeout&&clearTimeout(t.autoplay.timeout),t.autoplay.paused=!0,0!==e&&t.params.autoplay.waitForTransition?(t.$wrapperEl[0].addEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].addEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd)):(t.autoplay.paused=!1,t.autoplay.run())))}},Q={setTranslate:function(){for(var e=this,t=e.slides,a=0;a<t.length;a+=1){var i=e.slides.eq(a),s=-i[0].swiperSlideOffset;e.params.virtualTranslate||(s-=e.translate);var r=0;e.isHorizontal()||(r=s,s=0);var n=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(i[0].progress),0):1+Math.min(Math.max(i[0].progress,-1),0);i.css({opacity:n}).transform("translate3d("+s+"px, "+r+"px, 0px)")}},setTransition:function(e){var a=this,t=a.slides,i=a.$wrapperEl;if(t.transition(e),a.params.virtualTranslate&&0!==e){var s=!1;t.transitionEnd(function(){if(!s&&a&&!a.destroyed){s=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)i.trigger(e[t])}})}}},J={setTranslate:function(){var e,t=this,a=t.$el,i=t.$wrapperEl,s=t.slides,r=t.width,n=t.height,o=t.rtlTranslate,l=t.size,d=t.params.cubeEffect,p=t.isHorizontal(),c=t.virtual&&t.params.virtual.enabled,u=0;d.shadow&&(p?(0===(e=i.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),i.append(e)),e.css({height:r+"px"})):0===(e=a.find(".swiper-cube-shadow")).length&&(e=L('<div class="swiper-cube-shadow"></div>'),a.append(e)));for(var h=0;h<s.length;h+=1){var v=s.eq(h),f=h;c&&(f=parseInt(v.attr("data-swiper-slide-index"),10));var m=90*f,g=Math.floor(m/360);o&&(m=-m,g=Math.floor(-m/360));var b=Math.max(Math.min(v[0].progress,1),-1),w=0,y=0,x=0;f%4==0?(w=4*-g*l,x=0):(f-1)%4==0?(w=0,x=4*-g*l):(f-2)%4==0?(w=l+4*g*l,x=l):(f-3)%4==0&&(w=-l,x=3*l+4*l*g),o&&(w=-w),p||(y=w,w=0);var T="rotateX("+(p?0:-m)+"deg) rotateY("+(p?m:0)+"deg) translate3d("+w+"px, "+y+"px, "+x+"px)";if(b<=1&&-1<b&&(u=90*f+90*b,o&&(u=90*-f-90*b)),v.transform(T),d.slideShadows){var E=p?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=p?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(p?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(p?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=Math.max(-b,0)),S.length&&(S[0].style.opacity=Math.max(b,0))}}if(i.css({"-webkit-transform-origin":"50% 50% -"+l/2+"px","-moz-transform-origin":"50% 50% -"+l/2+"px","-ms-transform-origin":"50% 50% -"+l/2+"px","transform-origin":"50% 50% -"+l/2+"px"}),d.shadow)if(p)e.transform("translate3d(0px, "+(r/2+d.shadowOffset)+"px, "+-r/2+"px) rotateX(90deg) rotateZ(0deg) scale("+d.shadowScale+")");else{var C=Math.abs(u)-90*Math.floor(Math.abs(u)/90),M=1.5-(Math.sin(2*C*Math.PI/360)/2+Math.cos(2*C*Math.PI/360)/2),k=d.shadowScale,P=d.shadowScale/M,z=d.shadowOffset;e.transform("scale3d("+k+", 1, "+P+") translate3d(0px, "+(n/2+z)+"px, "+-n/2/P+"px) rotateX(-90deg)")}var $=I.isSafari||I.isUiWebView?-l/2:0;i.transform("translate3d(0px,0,"+$+"px) rotateX("+(t.isHorizontal()?0:u)+"deg) rotateY("+(t.isHorizontal()?-u:0)+"deg)")},setTransition:function(e){var t=this.$el;this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),this.params.cubeEffect.shadow&&!this.isHorizontal()&&t.find(".swiper-cube-shadow").transition(e)}},ee={setTranslate:function(){for(var e=this,t=e.slides,a=e.rtlTranslate,i=0;i<t.length;i+=1){var s=t.eq(i),r=s[0].progress;e.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s[0].progress,1),-1));var n=-180*r,o=0,l=-s[0].swiperSlideOffset,d=0;if(e.isHorizontal()?a&&(n=-n):(d=l,o=-n,n=l=0),s[0].style.zIndex=-Math.abs(Math.round(r))+t.length,e.params.flipEffect.slideShadows){var p=e.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),c=e.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===p.length&&(p=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"left":"top")+'"></div>'),s.append(p)),0===c.length&&(c=L('<div class="swiper-slide-shadow-'+(e.isHorizontal()?"right":"bottom")+'"></div>'),s.append(c)),p.length&&(p[0].style.opacity=Math.max(-r,0)),c.length&&(c[0].style.opacity=Math.max(r,0))}s.transform("translate3d("+l+"px, "+d+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){var a=this,t=a.slides,i=a.activeIndex,s=a.$wrapperEl;if(t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),a.params.virtualTranslate&&0!==e){var r=!1;t.eq(i).transitionEnd(function(){if(!r&&a&&!a.destroyed){r=!0,a.animating=!1;for(var e=["webkitTransitionEnd","transitionend"],t=0;t<e.length;t+=1)s.trigger(e[t])}})}}},te={setTranslate:function(){for(var e=this,t=e.width,a=e.height,i=e.slides,s=e.$wrapperEl,r=e.slidesSizesGrid,n=e.params.coverflowEffect,o=e.isHorizontal(),l=e.translate,d=o?t/2-l:a/2-l,p=o?n.rotate:-n.rotate,c=n.depth,u=0,h=i.length;u<h;u+=1){var v=i.eq(u),f=r[u],m=(d-v[0].swiperSlideOffset-f/2)/f*n.modifier,g=o?p*m:0,b=o?0:p*m,w=-c*Math.abs(m),y=o?0:n.stretch*m,x=o?n.stretch*m:0;Math.abs(x)<.001&&(x=0),Math.abs(y)<.001&&(y=0),Math.abs(w)<.001&&(w=0),Math.abs(g)<.001&&(g=0),Math.abs(b)<.001&&(b=0);var T="translate3d("+x+"px,"+y+"px,"+w+"px)  rotateX("+b+"deg) rotateY("+g+"deg)";if(v.transform(T),v[0].style.zIndex=1-Math.abs(Math.round(m)),n.slideShadows){var E=o?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),S=o?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");0===E.length&&(E=L('<div class="swiper-slide-shadow-'+(o?"left":"top")+'"></div>'),v.append(E)),0===S.length&&(S=L('<div class="swiper-slide-shadow-'+(o?"right":"bottom")+'"></div>'),v.append(S)),E.length&&(E[0].style.opacity=0<m?m:0),S.length&&(S[0].style.opacity=0<-m?-m:0)}}(F.pointerEvents||F.prefixedPointerEvents)&&(s[0].style.perspectiveOrigin=d+"px 50%")},setTransition:function(e){this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}},ae={init:function(){var e=this,t=e.params.thumbs,a=e.constructor;t.swiper instanceof a?(e.thumbs.swiper=t.swiper,V.extend(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),V.extend(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1})):V.isObject(t.swiper)&&(e.thumbs.swiper=new a(V.extend({},t.swiper,{watchSlidesVisibility:!0,watchSlidesProgress:!0,slideToClickedSlide:!1})),e.thumbs.swiperCreated=!0),e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",e.thumbs.onThumbClick)},onThumbClick:function(){var e=this,t=e.thumbs.swiper;if(t){var a=t.clickedIndex,i=t.clickedSlide;if(!(i&&L(i).hasClass(e.params.thumbs.slideThumbActiveClass)||null==a)){var s;if(s=t.params.loop?parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"),10):a,e.params.loop){var r=e.activeIndex;e.slides.eq(r).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,r=e.activeIndex);var n=e.slides.eq(r).prevAll('[data-swiper-slide-index="'+s+'"]').eq(0).index(),o=e.slides.eq(r).nextAll('[data-swiper-slide-index="'+s+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r<r-n?o:n}e.slideTo(s)}}},update:function(e){var t=this,a=t.thumbs.swiper;if(a){var i="auto"===a.params.slidesPerView?a.slidesPerViewDynamic():a.params.slidesPerView;if(t.realIndex!==a.realIndex){var s,r=a.activeIndex;if(a.params.loop){a.slides.eq(r).hasClass(a.params.slideDuplicateClass)&&(a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft,r=a.activeIndex);var n=a.slides.eq(r).prevAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index(),o=a.slides.eq(r).nextAll('[data-swiper-slide-index="'+t.realIndex+'"]').eq(0).index();s=void 0===n?o:void 0===o?n:o-r==r-n?r:o-r<r-n?o:n}else s=t.realIndex;a.visibleSlidesIndexes.indexOf(s)<0&&(a.params.centeredSlides?s=r<s?s-Math.floor(i/2)+1:s+Math.floor(i/2)-1:r<s&&(s=s-i+1),a.slideTo(s,e?0:void 0))}var l=1,d=t.params.thumbs.slideThumbActiveClass;if(1<t.params.slidesPerView&&!t.params.centeredSlides&&(l=t.params.slidesPerView),a.slides.removeClass(d),a.params.loop)for(var p=0;p<l;p+=1)a.$wrapperEl.children('[data-swiper-slide-index="'+(t.realIndex+p)+'"]').addClass(d);else for(var c=0;c<l;c+=1)a.slides.eq(t.realIndex+c).addClass(d)}}},ie=[C,M,k,P,$,O,N,{name:"mousewheel",params:{mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarged:"container"}},create:function(){var e=this;V.extend(e,{mousewheel:{enabled:!1,enable:H.enable.bind(e),disable:H.disable.bind(e),handle:H.handle.bind(e),handleMouseEnter:H.handleMouseEnter.bind(e),handleMouseLeave:H.handleMouseLeave.bind(e),lastScrollTime:V.now()}})},on:{init:function(){this.params.mousewheel.enabled&&this.mousewheel.enable()},destroy:function(){this.mousewheel.enabled&&this.mousewheel.disable()}}},{name:"navigation",params:{navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock"}},create:function(){var e=this;V.extend(e,{navigation:{init:G.init.bind(e),update:G.update.bind(e),destroy:G.destroy.bind(e),onNextClick:G.onNextClick.bind(e),onPrevClick:G.onPrevClick.bind(e)}})},on:{init:function(){this.navigation.init(),this.navigation.update()},toEdge:function(){this.navigation.update()},fromEdge:function(){this.navigation.update()},destroy:function(){this.navigation.destroy()},click:function(e){var t=this.navigation,a=t.$nextEl,i=t.$prevEl;!this.params.navigation.hideOnClick||L(e.target).is(i)||L(e.target).is(a)||(a&&a.toggleClass(this.params.navigation.hiddenClass),i&&i.toggleClass(this.params.navigation.hiddenClass))}}},{name:"pagination",params:{pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:function(e){return e},formatFractionTotal:function(e){return e},bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",modifierClass:"swiper-pagination-",currentClass:"swiper-pagination-current",totalClass:"swiper-pagination-total",hiddenClass:"swiper-pagination-hidden",progressbarFillClass:"swiper-pagination-progressbar-fill",progressbarOppositeClass:"swiper-pagination-progressbar-opposite",clickableClass:"swiper-pagination-clickable",lockClass:"swiper-pagination-lock"}},create:function(){var e=this;V.extend(e,{pagination:{init:B.init.bind(e),render:B.render.bind(e),update:B.update.bind(e),destroy:B.destroy.bind(e),dynamicBulletIndex:0}})},on:{init:function(){this.pagination.init(),this.pagination.render(),this.pagination.update()},activeIndexChange:function(){this.params.loop?this.pagination.update():void 0===this.snapIndex&&this.pagination.update()},snapIndexChange:function(){this.params.loop||this.pagination.update()},slidesLengthChange:function(){this.params.loop&&(this.pagination.render(),this.pagination.update())},snapGridLengthChange:function(){this.params.loop||(this.pagination.render(),this.pagination.update())},destroy:function(){this.pagination.destroy()},click:function(e){var t=this;t.params.pagination.el&&t.params.pagination.hideOnClick&&0<t.pagination.$el.length&&!L(e.target).hasClass(t.params.pagination.bulletClass)&&t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)}}},{name:"scrollbar",params:{scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag"}},create:function(){var e=this;V.extend(e,{scrollbar:{init:X.init.bind(e),destroy:X.destroy.bind(e),updateSize:X.updateSize.bind(e),setTranslate:X.setTranslate.bind(e),setTransition:X.setTransition.bind(e),enableDraggable:X.enableDraggable.bind(e),disableDraggable:X.disableDraggable.bind(e),setDragPosition:X.setDragPosition.bind(e),onDragStart:X.onDragStart.bind(e),onDragMove:X.onDragMove.bind(e),onDragEnd:X.onDragEnd.bind(e),isTouched:!1,timeout:null,dragTimeout:null}})},on:{init:function(){this.scrollbar.init(),this.scrollbar.updateSize(),this.scrollbar.setTranslate()},update:function(){this.scrollbar.updateSize()},resize:function(){this.scrollbar.updateSize()},observerUpdate:function(){this.scrollbar.updateSize()},setTranslate:function(){this.scrollbar.setTranslate()},setTransition:function(e){this.scrollbar.setTransition(e)},destroy:function(){this.scrollbar.destroy()}}},{name:"parallax",params:{parallax:{enabled:!1}},create:function(){V.extend(this,{parallax:{setTransform:R.setTransform.bind(this),setTranslate:R.setTranslate.bind(this),setTransition:R.setTransition.bind(this)}})},on:{beforeInit:function(){this.params.parallax.enabled&&(this.params.watchSlidesProgress=!0,this.originalParams.watchSlidesProgress=!0)},init:function(){this.params.parallax&&this.parallax.setTranslate()},setTranslate:function(){this.params.parallax&&this.parallax.setTranslate()},setTransition:function(e){this.params.parallax&&this.parallax.setTransition(e)}}},{name:"zoom",params:{zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}},create:function(){var t=this,a={enabled:!1,scale:1,currentScale:1,isScaling:!1,gesture:{$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0}};"onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e){a[e]=q[e].bind(t)}),V.extend(t,{zoom:a})},on:{init:function(){this.params.zoom.enabled&&this.zoom.enable()},destroy:function(){this.zoom.disable()},touchStart:function(e){this.zoom.enabled&&this.zoom.onTouchStart(e)},touchEnd:function(e){this.zoom.enabled&&this.zoom.onTouchEnd(e)},doubleTap:function(e){this.params.zoom.enabled&&this.zoom.enabled&&this.params.zoom.toggle&&this.zoom.toggle(e)},transitionEnd:function(){this.zoom.enabled&&this.params.zoom.enabled&&this.zoom.onTransitionEnd()}}},{name:"lazy",params:{lazy:{enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}},create:function(){V.extend(this,{lazy:{initialImageLoaded:!1,load:W.load.bind(this),loadInSlide:W.loadInSlide.bind(this)}})},on:{beforeInit:function(){this.params.lazy.enabled&&this.params.preloadImages&&(this.params.preloadImages=!1)},init:function(){this.params.lazy.enabled&&!this.params.loop&&0===this.params.initialSlide&&this.lazy.load()},scroll:function(){this.params.freeMode&&!this.params.freeModeSticky&&this.lazy.load()},resize:function(){this.params.lazy.enabled&&this.lazy.load()},scrollbarDragMove:function(){this.params.lazy.enabled&&this.lazy.load()},transitionStart:function(){var e=this;e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!e.lazy.initialImageLoaded)&&e.lazy.load()},transitionEnd:function(){this.params.lazy.enabled&&!this.params.lazy.loadOnTransitionStart&&this.lazy.load()}}},{name:"controller",params:{controller:{control:void 0,inverse:!1,by:"slide"}},create:function(){var e=this;V.extend(e,{controller:{control:e.params.controller.control,getInterpolateFunction:j.getInterpolateFunction.bind(e),setTranslate:j.setTranslate.bind(e),setTransition:j.setTransition.bind(e)}})},on:{update:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},resize:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},observerUpdate:function(){this.controller.control&&this.controller.spline&&(this.controller.spline=void 0,delete this.controller.spline)},setTranslate:function(e,t){this.controller.control&&this.controller.setTranslate(e,t)},setTransition:function(e,t){this.controller.control&&this.controller.setTransition(e,t)}}},{name:"a11y",params:{a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}"}},create:function(){var t=this;V.extend(t,{a11y:{liveRegion:L('<span class="'+t.params.a11y.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>')}}),Object.keys(U).forEach(function(e){t.a11y[e]=U[e].bind(t)})},on:{init:function(){this.params.a11y.enabled&&(this.a11y.init(),this.a11y.updateNavigation())},toEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},fromEdge:function(){this.params.a11y.enabled&&this.a11y.updateNavigation()},paginationUpdate:function(){this.params.a11y.enabled&&this.a11y.updatePagination()},destroy:function(){this.params.a11y.enabled&&this.a11y.destroy()}}},{name:"history",params:{history:{enabled:!1,replaceState:!1,key:"slides"}},create:function(){var e=this;V.extend(e,{history:{init:K.init.bind(e),setHistory:K.setHistory.bind(e),setHistoryPopState:K.setHistoryPopState.bind(e),scrollToSlide:K.scrollToSlide.bind(e),destroy:K.destroy.bind(e)}})},on:{init:function(){this.params.history.enabled&&this.history.init()},destroy:function(){this.params.history.enabled&&this.history.destroy()},transitionEnd:function(){this.history.initialized&&this.history.setHistory(this.params.history.key,this.activeIndex)}}},{name:"hash-navigation",params:{hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}},create:function(){var e=this;V.extend(e,{hashNavigation:{initialized:!1,init:_.init.bind(e),destroy:_.destroy.bind(e),setHash:_.setHash.bind(e),onHashCange:_.onHashCange.bind(e)}})},on:{init:function(){this.params.hashNavigation.enabled&&this.hashNavigation.init()},destroy:function(){this.params.hashNavigation.enabled&&this.hashNavigation.destroy()},transitionEnd:function(){this.hashNavigation.initialized&&this.hashNavigation.setHash()}}},{name:"autoplay",params:{autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1}},create:function(){var t=this;V.extend(t,{autoplay:{running:!1,paused:!1,run:Z.run.bind(t),start:Z.start.bind(t),stop:Z.stop.bind(t),pause:Z.pause.bind(t),onTransitionEnd:function(e){t&&!t.destroyed&&t.$wrapperEl&&e.target===this&&(t.$wrapperEl[0].removeEventListener("transitionend",t.autoplay.onTransitionEnd),t.$wrapperEl[0].removeEventListener("webkitTransitionEnd",t.autoplay.onTransitionEnd),t.autoplay.paused=!1,t.autoplay.running?t.autoplay.run():t.autoplay.stop())}}})},on:{init:function(){this.params.autoplay.enabled&&this.autoplay.start()},beforeTransitionStart:function(e,t){this.autoplay.running&&(t||!this.params.autoplay.disableOnInteraction?this.autoplay.pause(e):this.autoplay.stop())},sliderFirstMove:function(){this.autoplay.running&&(this.params.autoplay.disableOnInteraction?this.autoplay.stop():this.autoplay.pause())},destroy:function(){this.autoplay.running&&this.autoplay.stop()}}},{name:"effect-fade",params:{fadeEffect:{crossFade:!1}},create:function(){V.extend(this,{fadeEffect:{setTranslate:Q.setTranslate.bind(this),setTransition:Q.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("fade"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"fade");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"fade"===this.params.effect&&this.fadeEffect.setTranslate()},setTransition:function(e){"fade"===this.params.effect&&this.fadeEffect.setTransition(e)}}},{name:"effect-cube",params:{cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}},create:function(){V.extend(this,{cubeEffect:{setTranslate:J.setTranslate.bind(this),setTransition:J.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("cube"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"cube"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"cube"===this.params.effect&&this.cubeEffect.setTranslate()},setTransition:function(e){"cube"===this.params.effect&&this.cubeEffect.setTransition(e)}}},{name:"effect-flip",params:{flipEffect:{slideShadows:!0,limitRotation:!0}},create:function(){V.extend(this,{flipEffect:{setTranslate:ee.setTranslate.bind(this),setTransition:ee.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;if("flip"===e.params.effect){e.classNames.push(e.params.containerModifierClass+"flip"),e.classNames.push(e.params.containerModifierClass+"3d");var t={slidesPerView:1,slidesPerColumn:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!0};V.extend(e.params,t),V.extend(e.originalParams,t)}},setTranslate:function(){"flip"===this.params.effect&&this.flipEffect.setTranslate()},setTransition:function(e){"flip"===this.params.effect&&this.flipEffect.setTransition(e)}}},{name:"effect-coverflow",params:{coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0}},create:function(){V.extend(this,{coverflowEffect:{setTranslate:te.setTranslate.bind(this),setTransition:te.setTransition.bind(this)}})},on:{beforeInit:function(){var e=this;"coverflow"===e.params.effect&&(e.classNames.push(e.params.containerModifierClass+"coverflow"),e.classNames.push(e.params.containerModifierClass+"3d"),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)},setTranslate:function(){"coverflow"===this.params.effect&&this.coverflowEffect.setTranslate()},setTransition:function(e){"coverflow"===this.params.effect&&this.coverflowEffect.setTransition(e)}}},{name:"thumbs",params:{thumbs:{swiper:null,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-container-thumbs"}},create:function(){V.extend(this,{thumbs:{swiper:null,init:ae.init.bind(this),update:ae.update.bind(this),onThumbClick:ae.onThumbClick.bind(this)}})},on:{beforeInit:function(){var e=this.params.thumbs;e&&e.swiper&&(this.thumbs.init(),this.thumbs.update(!0))},slideChange:function(){this.thumbs.swiper&&this.thumbs.update()},update:function(){this.thumbs.swiper&&this.thumbs.update()},resize:function(){this.thumbs.swiper&&this.thumbs.update()},observerUpdate:function(){this.thumbs.swiper&&this.thumbs.update()},setTransition:function(e){var t=this.thumbs.swiper;t&&t.setTransition(e)},beforeDestroy:function(){var e=this.thumbs.swiper;e&&this.thumbs.swiperCreated&&e&&e.destroy()}}}];return void 0===S.use&&(S.use=S.Class.use,S.installModule=S.Class.installModule),S.use(ie),S});
//# sourceMappingURL=swiper.min.js.map


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! dynamic exports provided */
/*! all exports used */
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
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue/dist/vue.esm.js":
/*!******************************************!*\
  !*** ./node_modules/vue/dist/vue.esm.js ***!
  \******************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.17
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.17';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
}

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
}

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
}

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '');
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$2 = {
  preTransformNode: preTransformNode
}

var modules$1 = [
  klass$1,
  style$1,
  model$2
]

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
}

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  esc: 'Escape',
  tab: 'Tab',
  enter: 'Enter',
  space: ' ',
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  'delete': ['Backspace', 'Delete']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    /* istanbul ignore if */
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    /* istanbul ignore if */
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
}

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
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


/***/ })

/******/ });