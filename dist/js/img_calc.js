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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var processArray_1 = __webpack_require__(15);
var consolelog_1 = __webpack_require__(0);
var generateExecutive_1 = __webpack_require__(17);
var _self = self;
_self.location.reload = function (val) { console.log('worker reload'); };
/* from purescript */
// const reorderArr: any = require('../../purescripts/reorderImgArr.purs');
// const mathPure:any = require('../../purescripts/utils/mathematics.purs');
/* from purescript */
var WorkerProcess = (function () {
    function WorkerProcess() {
        consolelog_1.logBlue('NEW THREAD:worker constructor');
    }
    WorkerProcess.prototype.reorderImgArr = function (data) {
        // return reorderArr.reorderImgArr(data);
    };
    WorkerProcess.prototype.transformToGray = function (data, width, gaps, rangeArr) {
        if (width === void 0) { width = 300; }
        if (gaps === void 0) { gaps = [3, 5, 7, 9]; }
        if (rangeArr === void 0) { rangeArr = [0, 85, 177, 255]; }
        var rsult = processArray_1.getPixelsSeries(data, width, gaps, Uint8Array.from(rangeArr));
        var _output_rslt = {
            data: rsult,
            exeCom: rsult.map(function (val, i) { return generateExecutive_1.generateExecutive(val.conjArray, gaps[i], width, rangeArr[i]); })
        };
        return _output_rslt;
    };
    return WorkerProcess;
}());
var workerProcess = new WorkerProcess();
_self.onmessage = function (data) {
    var exeName = data.data.exeFunc;
    var infoData = data.data.infoData;
    var newdData = workerProcess[exeName].apply(workerProcess, infoData);
    _self.postMessage(newdData);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var conjArray_1 = __webpack_require__(16);
exports.transformToGray = function (arr) {
    var _arr = arr;
    for (var i = 0; i <= arr.length - 4; i += 4) {
        var gray = parseInt(((arr[0] + arr[1] + arr[2]) / 3).toString());
        _arr[i] = gray;
        _arr[i + 1] = gray;
        _arr[i + 2] = gray;
    }
    return _arr;
};
exports.closest = function (n, arr) {
    var _gap = Math.abs(n - arr[0]);
    var _ele = arr[0];
    for (var i in arr) {
        var gap_ = Math.abs(arr[i] - n);
        if (gap_ < _gap) {
            _gap = gap_;
            _ele = arr[i];
        }
    }
    return _ele;
};
exports.getPixelsSeries = function (arr, width, gaps, rangeArr) {
    return gaps.map(function (val) { return exports.relayoutArr(arr, width, val, rangeArr); });
};
exports.relayoutArr = function (arr, width, gap, rangeArr) {
    var _arr = [];
    var _pixels = [];
    for (var i = 0; i < arr.length; i += width * 4 * gap) {
        for (var j = 0; j < width * 4; j += 4) {
            _pixels.push(exports.closest(parseInt(((arr[j + i] + arr[j + i + 1] + arr[j + i + 2]) / 3).toString()), rangeArr));
            for (var k = 0; k <= 2; k++) {
                _arr.push(arr[j + i + k]);
            }
            _arr.push(arr[j + i + 3]);
        }
    }
    var out_pixels = Uint8Array.from(_pixels);
    var out_arr = Uint8Array.from(_arr);
    return {
        pixelPoints: out_pixels,
        UintArray: out_arr,
        conjArray: conjArray_1.conjArray(out_pixels, width)
    };
};
exports.resetIntArray = function (arr, width) {
    var _unit = 4 * width;
    var _arr = [];
    for (var i = 0; i <= arr.length - _unit; i += _unit) {
        _arr.push(arr.slice(i, i + _unit));
    }
    return _arr;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.conjArray = function (UintArr, width) {
    var _tempNum = UintArr[0];
    var num = 0;
    var _objArr = [];
    for (var i in UintArr) {
        var _i = Number(i);
        if (UintArr[_i] === _tempNum) {
            num++;
        }
        else {
            _objArr.push({
                lineFeed: false,
                gray: _tempNum,
                count: num || 1
            });
            _tempNum = UintArr[_i];
            num = 1;
        }
        if (_i + 1 && (_i + 1) % width === 0) {
            _objArr.push({
                lineFeed: false,
                gray: _tempNum,
                count: num || 1
            });
            _objArr.push({
                lineFeed: true,
                gray: 0,
                count: 0
            });
            num = 0;
            _tempNum = UintArr[_i + 1];
        }
    }
    return _objArr;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.generateExecutive = function (exeArr, gap, width, grayMatch, fillChar) {
    if (grayMatch === void 0) { grayMatch = 85; }
    if (fillChar === void 0) { fillChar = "-"; }
    var _exe = [];
    var _out_str = '';
    for (var _i = 0, exeArr_1 = exeArr; _i < exeArr_1.length; _i++) {
        var val = exeArr_1[_i];
        if (val.lineFeed) {
            _out_str += '\n';
            _exe.push({
                action: 'MOVE',
                distance: gap,
                direct: 'DOWN'
            });
            _exe.push({
                action: 'MOVE',
                distance: width,
                direct: 'LEFT'
            });
            continue;
        }
        var act = void 0;
        if (val.gray <= grayMatch) {
            act = 'DRAW';
            _out_str += fillChar.repeat(val.count);
        }
        else {
            act = 'MOVE';
            _out_str += ' '.repeat(val.count);
        }
        ;
        _exe.push({
            action: act,
            distance: val.count,
            direct: 'RIGHT'
        });
    }
    return _exe;
};


/***/ })
/******/ ]);
//# sourceMappingURL=img_calc.js.map