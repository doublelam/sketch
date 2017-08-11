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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
exports.colorSetInput = exports.getEle('#color-set-input');
exports.colorDot = exports.getEle('#dot-color');
exports.widthSetInput = exports.getEle('#width-set-input');
exports.widthDot = exports.getEle('#dot-width');
exports.levelsSetInput = exports.getEle('#levels-set-input');
exports.levelsDot = exports.getEle('#dot-levels');
exports.rangeSetInput = exports.getEle('#range-set-input');
exports.rangeDot = exports.getEle('#dot-range');
exports.velocitySetInput = exports.getEle('#velocity-set-input');
exports.velocityDot = exports.getEle('#dot-velocity');


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var getPixelsFromCanvas_1 = __webpack_require__(7);
var Worker_1 = __webpack_require__(8);
var consolelog_1 = __webpack_require__(0);
var drawLines_1 = __webpack_require__(9);
var GetDom_1 = __webpack_require__(1);
var procssCssName_1 = __webpack_require__(10);
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
exports.sketchPics = function (rawCtx, newCtx, lineWidth, lineColor, levels, range, velocity) {
    if (lineWidth === void 0) { lineWidth = 1; }
    if (lineColor === void 0) { lineColor = '#000'; }
    if (levels === void 0) { levels = [2, 4]; }
    if (range === void 0) { range = [0, 85, 170, 255]; }
    if (velocity === void 0) { velocity = 1.89; }
    var worker;
    var width = rawCtx.canvas.width;
    var height = rawCtx.canvas.height;
    newCtx.canvas.width = width;
    newCtx.canvas.height = height;
    var rawImgData = getPixelsFromCanvas_1.getPixelsFromCanvas(rawCtx);
    console.log('sketch imgdata', rawImgData);
    newCtx.clearRect(0, 0, newCtx.canvas.width, newCtx.canvas.height);
    procssCssName_1.addClass(GetDom_1.sketchBtn, 'disabled');
    worker = Worker_1.$worker({
        "do": 'js/img_calc.js',
        message: function (data) {
            console.log('get worker message', data.data);
            var newExe = data.data.exeCom.reverse().map(function (val) { return val.concat([{
                    action: "ORIGIN", distance: 0, direct: "UP"
                }]); }).reduce(function (a, b) { return a.concat(b); }).concat([{ action: 'END', distance: 0, direct: 'UP' }]);
            console.log('new exe', newExe);
            drawLines_1.drawLines(newCtx, newExe, { width: lineWidth, color: lineColor }, [.5, .5], velocity, function () {
                consolelog_1.logGreen('drawing finished');
                procssCssName_1.removeClass(GetDom_1.sketchBtn, 'disabled');
            });
            worker.end();
        },
        error: function (err) {
            consolelog_1.logRed('worker thread error:', err);
        }
    });
    worker.emit({
        exeFunc: 'transformToGray',
        infoData: [rawImgData.data, rawImgData.width, levels, range]
    });
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var regExpMatch_1 = __webpack_require__(4);
var consolelog_1 = __webpack_require__(0);
var StyleConfig = (function () {
    function StyleConfig() {
        this.initConfig = {
            color: '#000',
            width: 1,
            matchLevels: [3, 6, 12],
            pixelRange: [0, 85, 170, 255],
            velocity: 5
        };
        this.lineWidth = this.initConfig.width;
        this.lineColor = this.initConfig.color;
        this.matchLevels = this.initConfig.matchLevels.slice();
        this.pixelRange = this.initConfig.pixelRange.slice();
        this.velocity = this.initConfig.velocity;
    }
    StyleConfig.prototype.setColor = function (color) {
        if (regExpMatch_1.RegExpr.ifColor(color)) {
            this.lineColor = color;
            return this;
        }
        consolelog_1.logRed('Invalid colour formatter');
        return this;
    };
    StyleConfig.prototype.setWidth = function (width) {
        if (regExpMatch_1.RegExpr.ifNumber(width)) {
            this.lineWidth = Number(width);
            return this;
        }
        consolelog_1.logRed('Invalid number formatter');
    };
    StyleConfig.prototype.setMatchLevels = function (levels) {
        if (regExpMatch_1.RegExpr.ifNumberArray(levels)) {
            try {
                this.matchLevels = JSON.parse(levels);
                return this;
            }
            catch (e) {
                consolelog_1.logRed('JSONparse Error:', e);
            }
        }
        consolelog_1.logRed('Invalid number array');
        return this;
    };
    StyleConfig.prototype.setPixelRange = function (range) {
        if (regExpMatch_1.RegExpr.ifNumberArray(range)) {
            try {
                this.pixelRange = JSON.parse(range);
                return this;
            }
            catch (e) {
                consolelog_1.logRed('JSONparse Error:', e);
            }
        }
        consolelog_1.logRed('Invalid number array');
        return this;
    };
    StyleConfig.prototype.setVelocity = function (velocity) {
        if (regExpMatch_1.RegExpr.ifNumber(velocity)) {
            this.velocity = Number(velocity);
            return this;
        }
        consolelog_1.logRed('Invalid number');
        return this;
    };
    StyleConfig.prototype.getColor = function (str) {
        return str === 'init' ? this.initConfig.color : this.lineColor;
    };
    StyleConfig.prototype.getWidth = function (str) {
        return str === 'init' ? this.initConfig.width : this.lineWidth;
    };
    StyleConfig.prototype.getLevels = function (str) {
        return str === 'init' ? this.initConfig.matchLevels : this.matchLevels;
    };
    StyleConfig.prototype.getRange = function (str) {
        return str === 'init' ? this.initConfig.pixelRange : this.pixelRange;
    };
    StyleConfig.prototype.getVelocity = function (str) {
        return str === 'init' ? this.initConfig.velocity : this.velocity;
    };
    return StyleConfig;
}());
exports.styleConfig = new StyleConfig();


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var RegExpr = (function () {
    function RegExpr() {
    }
    RegExpr.ifColor = function (str) {
        return /(^rgba\(((1|2(?![6-9]|[5][6-9]))?[0-9]?[0-9],){3}(\.+\d+|1)\)$)|(^#[0-9a-fA-F]{3}$)|(^#[0-9a-fA-F]{6}$)/g.test(str);
    };
    RegExpr.ifNumber = function (str) {
        return /^(?!0\d+)([0-9]*\.?\d+)$/g.test(str);
    };
    RegExpr.ifNumberArray = function (str) {
        return /^\[(\d*\.?\d+,)*\d*\.?\d+\]$/g.test(str);
    };
    return RegExpr;
}());
exports.RegExpr = RegExpr;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
///<reference path="d.tss/preLoad.d.ts"/>
var GetDom_1 = __webpack_require__(1);
var Events_1 = __webpack_require__(6);
var domOperate_1 = __webpack_require__(2);
/* css resource */
__webpack_require__(13);
__webpack_require__(14);
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
        Events_1.Events.fromOutside();
    };
    ;
    return Main;
}());
exports.Main = Main;
var main = new Main();
main.run();


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var GetDom_1 = __webpack_require__(1);
var domOperate_1 = __webpack_require__(2);
var setFromDom_1 = __webpack_require__(11);
var styleConfig_1 = __webpack_require__(3);
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
            var width = styleConfig_1.styleConfig.getWidth();
            var color = styleConfig_1.styleConfig.getColor();
            var levels = styleConfig_1.styleConfig.getLevels();
            var range = styleConfig_1.styleConfig.getRange();
            var velocity = styleConfig_1.styleConfig.getVelocity();
            domOperate_1.sketchPics(rawCtx, sketchCtx, width, color, levels, range, velocity);
        };
    };
    Events.fromOutside = function () {
        setFromDom_1.setStyleFromDom.run();
    };
    return Events;
}());
exports.Events = Events;


/***/ }),
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var consolelog_1 = __webpack_require__(0);
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
exports.drawLines = function (ctx, opts, linStyle, initPosition, velocity, callback) {
    if (linStyle === void 0) { linStyle = {
        width: .5,
        color: '#000'
    }; }
    if (initPosition === void 0) { initPosition = [.5, .5]; }
    if (velocity === void 0) { velocity = 1.89; }
    if (callback === void 0) { callback = function () { return consolelog_1.logBlue('DRAW FINISHED'); }; }
    var timeoutTick;
    var _point = [initPosition[0], initPosition[1]];
    console.log('init', _point, 'color', linStyle.color);
    ctx.strokeStyle = linStyle.color;
    ctx.lineWidth = linStyle.width;
    clearTimeout(timeoutTick);
    ctx.beginPath();
    ctx.moveTo(_point[0], _point[1]);
    ctx.stroke();
    var loopExe = function (val, i) {
        if (val.action === 'END') {
            callback();
            return;
        }
        if (val.action === 'ORIGIN') {
            consolelog_1.logBlue('origin');
            ctx.beginPath();
            ctx.moveTo(initPosition[0], initPosition[1]);
            _point = [initPosition[0], initPosition[1]];
            ctx.stroke();
            return;
        }
        _point = [
            _point[0] + DIR_MAP[val.direct][0] * val.distance,
            _point[1] + DIR_MAP[val.direct][1] * val.distance
        ];
        var command = ACTION_MAP[val.action];
        var xAxis = _point[0];
        var yAxis = _point[1];
        if (command === 'moveTo') {
            ctx.beginPath();
        }
        ctx[command](xAxis, yAxis);
        ctx.stroke();
        return;
        // ctx.closePath();
    };
    var speed = 1000 / (velocity * 111 - 110);
    var timeout = function (i, val) {
        timeoutTick = setTimeout(function () {
            loopExe(opts[i], i);
        }, i * speed);
    };
    for (var i in opts) {
        timeout(Number(i), opts[i]);
    }
    return ctx;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.getRidOfSpace = function (str) {
    return str.replace(/^\s*|\s(?=\s)|\s*$/g, '');
};
exports.addClass = function (ele, cls) {
    var eleCls = ele.className;
    var clsArr = typeof cls === 'string' ? cls.split(/\s*,\s*|\s+/g) : cls;
    for (var _i = 0, clsArr_1 = clsArr; _i < clsArr_1.length; _i++) {
        var val = clsArr_1[_i];
        if (new RegExp(val, 'g').test(eleCls)) {
            continue;
        }
        eleCls += " " + val;
    }
    ele.className = exports.getRidOfSpace(eleCls);
    return ele;
};
exports.removeClass = function (ele, cls) {
    var eleCls = ele.className;
    var clsArr = typeof cls === 'string' ? cls.split(/\s*,\s*|\s+/g) : cls;
    var regExp = new RegExp(clsArr.join('|'), 'g');
    var newCls = eleCls.replace(regExp, '');
    ele.className = exports.getRidOfSpace(newCls);
    return ele;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var GetDom_1 = __webpack_require__(1);
var styleConfig_1 = __webpack_require__(3);
var regExpMatch_1 = __webpack_require__(4);
var inputWarn_1 = __webpack_require__(12);
var SetStyleFromDom = (function () {
    function SetStyleFromDom() {
    }
    SetStyleFromDom.prototype.setColor = function () {
        var colorSetter = new inputWarn_1.InputSet(GetDom_1.colorSetInput);
        GetDom_1.colorDot.style.color = styleConfig_1.styleConfig.getColor();
        var initColor = styleConfig_1.styleConfig.getColor('init');
        GetDom_1.colorSetInput.oninput = function (e) {
            var val = e.target.value;
            if (val === '') {
                colorSetter.normal();
                styleConfig_1.styleConfig.setColor(initColor);
                GetDom_1.colorDot.style.color = styleConfig_1.styleConfig.getColor();
                return;
            }
            if (!regExpMatch_1.RegExpr.ifColor(val)) {
                colorSetter.warn();
                return;
            }
            styleConfig_1.styleConfig.setColor(val);
            GetDom_1.colorDot.style.color = styleConfig_1.styleConfig.getColor();
            colorSetter.success();
            return;
        };
    };
    SetStyleFromDom.prototype.setWidth = function () {
        var widthSetter = new inputWarn_1.InputSet(GetDom_1.widthSetInput);
        GetDom_1.widthDot.style.fontSize = styleConfig_1.styleConfig.getWidth() / 10 + 1 + 'rem';
        var initWidth = styleConfig_1.styleConfig.getWidth('init');
        GetDom_1.widthSetInput.oninput = function (e) {
            var val = e.target.value;
            if (val === '') {
                widthSetter.normal();
                styleConfig_1.styleConfig.setWidth(String(initWidth));
                GetDom_1.widthDot.style.fontSize = styleConfig_1.styleConfig.getWidth() / 10 + 1 + 'rem';
                return;
            }
            if (!regExpMatch_1.RegExpr.ifNumber(val) || Number(val) > 9 || Number(val) <= 0) {
                widthSetter.warn();
                return;
            }
            styleConfig_1.styleConfig.setWidth(val);
            GetDom_1.widthDot.style.fontSize = styleConfig_1.styleConfig.getWidth() / 10 + 1 + 'rem';
            widthSetter.success();
            return;
        };
    };
    SetStyleFromDom.prototype.setLevels = function () {
        var levelsSetter = new inputWarn_1.InputSet(GetDom_1.levelsSetInput);
        GetDom_1.levelsDot.style.transform = "scale(1," + (1 / styleConfig_1.styleConfig.getLevels().length + 1) + ")";
        var initLevels = styleConfig_1.styleConfig.getLevels('init');
        GetDom_1.levelsSetInput.oninput = function (e) {
            var val = e.target.value;
            if (val === '') {
                levelsSetter.normal();
                styleConfig_1.styleConfig.setMatchLevels(JSON.stringify(initLevels));
                GetDom_1.levelsDot.style.transform = "scale(1, " + (1 / styleConfig_1.styleConfig.getLevels().length + 1) + ")";
                return;
            }
            if (!regExpMatch_1.RegExpr.ifNumberArray(val)) {
                levelsSetter.warn();
                return;
            }
            styleConfig_1.styleConfig.setMatchLevels(val);
            GetDom_1.levelsDot.style.transform = "scale(1," + (1 / styleConfig_1.styleConfig.getLevels().length + 1) + ")";
            levelsSetter.success();
            return;
        };
    };
    SetStyleFromDom.prototype.setRange = function () {
        var rangeSetter = new inputWarn_1.InputSet(GetDom_1.rangeSetInput);
        GetDom_1.rangeDot.style.opacity = String(1 / styleConfig_1.styleConfig.getRange().length);
        var initrange = styleConfig_1.styleConfig.getRange('init');
        GetDom_1.rangeSetInput.oninput = function (e) {
            var val = e.target.value;
            if (val === '') {
                rangeSetter.normal();
                styleConfig_1.styleConfig.setPixelRange(JSON.stringify(initrange));
                GetDom_1.rangeDot.style.opacity = String(1 / styleConfig_1.styleConfig.getRange().length);
                return;
            }
            if (!regExpMatch_1.RegExpr.ifNumberArray(val)) {
                rangeSetter.warn();
                return;
            }
            styleConfig_1.styleConfig.setPixelRange(val);
            GetDom_1.rangeDot.style.opacity = String(1 / styleConfig_1.styleConfig.getRange().length);
            rangeSetter.success();
            return;
        };
    };
    SetStyleFromDom.prototype.setVelocity = function () {
        var velocitySetter = new inputWarn_1.InputSet(GetDom_1.velocitySetInput);
        GetDom_1.velocityDot.style.animationDuration = 1000 / (styleConfig_1.styleConfig.getVelocity() * 111 - 110) + 's';
        var initvelocity = styleConfig_1.styleConfig.getVelocity('init');
        GetDom_1.velocitySetInput.oninput = function (e) {
            var val = e.target.value;
            if (val === '') {
                velocitySetter.normal();
                styleConfig_1.styleConfig.setVelocity(String(styleConfig_1.styleConfig.getVelocity('init')));
                GetDom_1.velocityDot.style.animationDuration = 1000 / (styleConfig_1.styleConfig.getVelocity() * 111 - 110) + 's';
                return;
            }
            if (!regExpMatch_1.RegExpr.ifNumber(val) || Number(val) > 10 || Number(val) < 1) {
                velocitySetter.warn();
                return;
            }
            styleConfig_1.styleConfig.setVelocity(val);
            GetDom_1.velocityDot.style.animationDuration = 1000 / (styleConfig_1.styleConfig.getVelocity() * 111 - 110) + 's';
            velocitySetter.success();
            return;
        };
    };
    SetStyleFromDom.prototype.run = function () {
        this.setColor();
        this.setWidth();
        this.setLevels();
        this.setRange();
        this.setVelocity();
    };
    return SetStyleFromDom;
}());
exports.SetStyleFromDom = SetStyleFromDom;
exports.setStyleFromDom = new SetStyleFromDom();


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var InputSet = (function () {
    function InputSet(input) {
        this.inputDom = input;
        this.initialBorderColor = input.style.borderColor;
    }
    InputSet.prototype.normal = function () {
        this.inputDom.style.borderColor = this.initialBorderColor;
        return this;
    };
    InputSet.prototype.warn = function () {
        this.inputDom.style.borderColor = '#CE584A';
        return this;
    };
    InputSet.prototype.success = function () {
        this.inputDom.style.borderColor = '#588CEE';
        return this;
    };
    return InputSet;
}());
exports.InputSet = InputSet;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map