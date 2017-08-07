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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.logColors = function (msg, color) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (typeof msg !== 'string') {
        return console.log.apply(console, [msg].concat(args));
    }
    return console.log.apply(console, ["%c" + msg, "color: " + color].concat(args));
};
exports.logRed = function (msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return exports.logColors.apply(void 0, [msg, '#CE594B'].concat(args));
};
exports.logGreen = function (msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return exports.logColors.apply(void 0, [msg, '#4C9F67'].concat(args));
};
exports.logBlue = function (msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return exports.logColors.apply(void 0, [msg, '#588CEE'].concat(args));
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getEle = function (query) {
    if (/^#\w{1}/g.test(query)) {
        return document.getElementById(query.replace(/^#/g, ''));
    }
    if (/^\.\w{1}/g.test(query)) {
        return document.getElementsByClassName(query.replace(/^#/g, ''));
    }
    if (/^tag\:\w{1}/g) {
        return document.getElementsByTagName(query.replace(/^tag\:/g, ''));
    }
    return document.querySelectorAll(query);
};
// first raw canvas
exports.canvasRaw = exports.getEle('#canvas-raw');
exports.rawContxt = exports.canvasRaw.getContext('2d');
// second redraw canvas
// export const canvasReDraw: HTMLCanvasElement = <HTMLCanvasElement>getEle('#canvas-redraw');
// export const redrawContxt: CanvasRenderingContext2D = canvasReDraw.getContext('2d');
// third final canvas
exports.canvasFinal = exports.getEle('#canvas-final-draw');
exports.finalContxt = exports.canvasFinal.getContext('2d');
exports.fileInput = exports.getEle('#file-input');
exports.sketchBtn = exports.getEle('#sketch-confirm');


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getPixelsFromCanvas = function (ctx, fromX, fromY) {
    if (fromX === void 0) { fromX = 0; }
    if (fromY === void 0) { fromY = 0; }
    var imgData = ctx.getImageData(fromX, fromY, ctx.canvas.width, ctx.canvas.height);
    return imgData;
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var getPixelsFromCanvas_1 = __webpack_require__(2);
var Worker_1 = __webpack_require__(6);
var consolelog_1 = __webpack_require__(0);
var drawLines_1 = __webpack_require__(7);
exports.drawCanvas = function (ctx, imgBase64) {
    var img = new Image();
    img.onload = function (e) {
        console.log('width', img.naturalWidth, 'height', img.naturalHeight);
        var width = img.naturalWidth;
        ;
        var height = img.naturalHeight;
        if (width >= height && img.naturalWidth > 320) {
            consolelog_1.logBlue('width >= height && img.naturalWidth');
            width = 320;
            height = (320 / img.naturalWidth) * img.naturalHeight;
        }
        ;
        if (width < height && img.naturalHeight > 320) {
            consolelog_1.logBlue('width < height && img.naturalWidth');
            height = 320;
            width = (320 / img.naturalHeight) * img.naturalWidth;
        }
        ;
        ctx.canvas.width = width;
        ctx.canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
    };
    img.src = imgBase64;
};
exports.sketchPics = function (rawCtx, newCtx) {
    var worker;
    var width = rawCtx.canvas.width;
    var height = rawCtx.canvas.height;
    newCtx.canvas.width = width;
    newCtx.canvas.height = height;
    var rawImgData = getPixelsFromCanvas_1.getPixelsFromCanvas(rawCtx);
    console.log('sketch imgdata', rawImgData);
    newCtx.clearRect(0, 0, newCtx.canvas.width, newCtx.canvas.height);
    if (worker) {
        worker.end();
    }
    worker = Worker_1.$worker({
        "do": 'js/img_calc.js',
        message: function (data) {
            console.log('get worker message', data.data);
            var newExe = data.data.exeCom.reverse().map(function (val) { return val.concat([{
                    action: "MOVE", distance: newCtx.canvas.height, direct: "UP"
                }]); }).reduce(function (a, b) { return a.concat(b); });
            console.log('new exe', newExe);
            drawLines_1.drawLines(newCtx, newExe);
        },
        error: function (err) {
            consolelog_1.logRed('worker thread error:', err);
        }
    });
    worker.emit({
        exeFunc: 'transformToGray',
        infoData: [rawImgData.data, rawImgData.width, [3, 3], [0, 85, 177, 255]]
    });
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
///<reference path="d.tss/preLoad.d.ts"/>
var GetDom_1 = __webpack_require__(1);
var getPixelsFromCanvas_1 = __webpack_require__(2);
var Events_1 = __webpack_require__(5);
var domOperate_1 = __webpack_require__(3);
/* css resource */
__webpack_require__(8);
__webpack_require__(9);
/* ----------- */
/* require from purescript */
/* ---------- */
/* ---------------------------import------------------------------------ */
var Main = (function () {
    function Main() {
    }
    Main.prototype.run = function () {
        Events_1.Events.fileInputEve(function (e) {
            domOperate_1.drawCanvas(GetDom_1.rawContxt, e.target.result);
        });
        Events_1.Events.sketchStartEve(GetDom_1.rawContxt, GetDom_1.finalContxt);
        // let img = new Image();
        // img.onload = () => {
        //   this.redrawGrayImg(img, 0, 0, 300, 300)
        // }
        // img.src = require('../images/10-dithering-opt.jpg');
    };
    ;
    Main.prototype.redrawGrayImg = function (img, fromX, fromY, width, height) {
        GetDom_1.rawContxt.drawImage(img, fromX, fromY, width, height);
        var imageData = getPixelsFromCanvas_1.getPixelsFromCanvas(GetDom_1.rawContxt, fromX, fromY);
        console.log('img data', imageData);
        // const worker = $worker({
        //   do: 'js/img_calc.js',
        //   message: data => {
        //     console.log('data', data.data);
        //     const imgData = rawContxt.createImageData(width, height);
        //     data.data.UintArray.map((v, i) => {
        //       imgData.data[i] = v
        //     })
        //     // redrawContxt.putImageData(imgData, fromX, fromY)
        //     console.log('pixePoints', data.data.pixelPoints);
        //     // drawLines(finalContxt, generateExecutive(data.data.conjArray, 3, width))
        //   },
        //   error: err => {
        //     console.log('err', err)
        //   }
        // });
        // worker.emit({ exeFunc: 'transformToGray', infoData: imageData.data });
    };
    return Main;
}());
exports.Main = Main;
var main = new Main();
main.run();


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var GetDom_1 = __webpack_require__(1);
var domOperate_1 = __webpack_require__(3);
var Events = (function () {
    function Events() {
    }
    Events.fileInputEve = function (callback) {
        if (callback === void 0) { callback = function (e) {
            console.log('%cINITIAL FILE ONCHANGE CALLBACK', 'color: blue');
        }; }
        var reader = new FileReader();
        GetDom_1.fileInput.onchange = function (eve) {
            if (!eve.target.files[0]) {
                console.warn('SELECTING IMAGE CANCLED');
                return;
            }
            reader.onload = function (e) {
                callback(e);
            };
            reader.readAsDataURL(eve.target.files[0]);
        };
        return;
    };
    Events.sketchStartEve = function (rawCtx, sketchCtx) {
        if (sketchCtx === void 0) { sketchCtx = rawCtx; }
        GetDom_1.sketchBtn.onclick = function (e) {
            domOperate_1.sketchPics(rawCtx, sketchCtx);
        };
    };
    return Events;
}());
exports.Events = Events;


/***/ }),
/* 6 */
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
        try {
            this._worker.postMessage(data, transfer);
        }
        catch (err) {
            this.opt.error(err);
        }
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
exports.Worker_ = Worker_;
exports.$worker = function (opt) { return new Worker_(opt); };


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var DIR_MAP = {
    'LEFT': [-1, 0],
    'RIGHT': [1, 0],
    'UP': [0, -1],
    'DOWN': [0, 1]
};
var ACTION_MAP = {
    'DRAW': 'lineTo',
    'MOVE': 'moveTo'
};
exports.drawLines = function (ctx, opts, linStyle, initPosition) {
    if (linStyle === void 0) { linStyle = {
        width: .5,
        color: '#000'
    }; }
    if (initPosition === void 0) { initPosition = [.5, .5]; }
    var timeoutTick;
    var _point = [initPosition[0], initPosition[1]];
    console.log('init', _point);
    ctx.strokeStyle = linStyle.color;
    ctx.lineWidth = linStyle.width;
    clearTimeout(timeoutTick);
    ctx.beginPath();
    ctx.moveTo(_point[0], _point[1]);
    var loopExe = function (val, i) {
        clearTimeout(timeoutTick);
        _point = [
            _point[0] + DIR_MAP[val.direct][0] * val.distance,
            _point[1] + DIR_MAP[val.direct][1] * val.distance
        ];
        var command = ACTION_MAP[val.action];
        var xAxis = _point[0];
        var yAxis = _point[1];
        ctx[command](xAxis, yAxis);
        // logBlue(`${i}:${command},${xAxis},${yAxis}`)
        ctx.stroke();
        ctx.closePath();
    };
    var timeout = function (i, val) {
        timeoutTick = setTimeout(function () {
            loopExe(opts[i], i);
        }, i * 10);
    };
    for (var i in opts) {
        timeout(Number(i), opts[i]);
    }
    return ctx;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map