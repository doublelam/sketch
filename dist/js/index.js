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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 63);
/******/ })
/************************************************************************/
/******/ ({

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
///<reference path="./d.tss/preLoad.d.ts"/>
var GetDom_1 = __webpack_require__(64);
var getPixelsFromCanvas_1 = __webpack_require__(65);
var Worker_1 = __webpack_require__(66);
/* css resource */
__webpack_require__(67);
/* ----------- */
/* require from purescript */
/* ---------- */
/* ---------------------------import------------------------------------ */
var Main = (function () {
    function Main() {
    }
    Main.run = function () {
        var img = new Image();
        img.onload = function () {
            GetDom_1.rawContxt.drawImage(img, 0, 0, 300, 300);
            var imageData = getPixelsFromCanvas_1.getPixelsFromCanvas(GetDom_1.rawContxt, 0, 0, 300, 300);
            var worker = Worker_1.$worker({
                "do": function () {
                    self.onmessage = function (data) {
                        console.log('worker data', data);
                    };
                },
                message: function (data) {
                    console.log('data', data.data);
                },
                error: function (err) {
                    console.log('err', err);
                }
            });
        };
        img.src = __webpack_require__(68);
    };
    ;
    return Main;
}());
exports.Main = Main;
Main.run();


/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getEle = function (query) { return document.querySelector(query); };
// first raw canvas
exports.canvasRaw = exports.getEle('#canvas-raw');
exports.rawContxt = exports.canvasRaw.getContext('2d');
// second redraw canvas
exports.canvasReDraw = exports.getEle('#canvas-redraw');
exports.redrawContxt = exports.canvasReDraw.getContext('2d');
// third final canvas
exports.canvasFinal = exports.getEle('#canvas-final-draw');
exports.finalContxt = exports.canvasFinal.getContext('2d');


/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getPixelsFromCanvas = function (canvasContext, from, to, width, height) {
    if (from === void 0) { from = 0; }
    if (to === void 0) { to = 0; }
    var imgData = canvasContext.getImageData(from, to, width, height);
    return imgData;
};


/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var Worker_ = (function () {
    function Worker_(option) {
        this.opt = option;
        this.setWorker(this.opt["do"]);
        this._onmessage();
        this._onerror();
        return this;
    }
    Worker_.prototype.emit = function (data, transfer) {
        this._worker.postMessage(data, transfer);
    };
    Worker_.prototype.end = function () {
        this._worker.terminate();
        return false;
    };
    Worker_.prototype._onmessage = function () {
        this._worker.onmessage = this.opt.message;
    };
    Worker_.prototype._onerror = function () {
        this._worker.onerror = this.opt.error;
    };
    Worker_.prototype.setWorker = function (doAct) {
        this._worker = new Worker(this.getJSBLOB(doAct));
        return this._worker;
    };
    Worker_.prototype.getJSBLOB = function (doAct) {
        if (typeof doAct === 'string') {
            return doAct;
        }
        var blobJs = new Blob(["(function BLOB_MODULE(){(" + doAct.toString() + ")()})()"], { type: 'text/javascript' });
        return URL.createObjectURL(blobJs);
    };
    return Worker_;
}());
exports.$worker = function (opt) { return new Worker_(opt); };


/***/ }),

/***/ 67:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/10-dithering-opt.jpg";

/***/ })

/******/ });
//# sourceMappingURL=index.js.map