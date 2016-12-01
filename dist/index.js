(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/common"), require("@angular/core"), require("cropperjs"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/common", "@angular/core", "cropperjs"], factory);
	else if(typeof exports === 'object')
		exports["ngcrop"] = factory(require("@angular/common"), require("@angular/core"), require("cropperjs"));
	else
		root["ngcrop"] = factory(root["@angular/common"], root["@angular/core"], root["cropperjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(1);
var common_1 = __webpack_require__(9);
var image_cropper_component_1 = __webpack_require__(8);
var InlineCropperModule = (function () {
    function InlineCropperModule() {
    }
    InlineCropperModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
            ],
            declarations: [
                image_cropper_component_1.ImageCropper,
            ],
            exports: [
                image_cropper_component_1.ImageCropper,
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], InlineCropperModule);
    return InlineCropperModule;
}());
exports.InlineCropperModule = InlineCropperModule;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, "/*!\n * Cropper.js v0.8.1\n * https://github.com/fengyuanchen/cropperjs\n *\n * Copyright (c) 2015-2016 Fengyuan Chen\n * Released under the MIT license\n *\n * Date: 2016-09-03T04:55:16.458Z\n */\n\n.cropper-container {\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  direction: ltr;\n}\n\n.cropper-container img {\n  display: block;\n  min-width: 0 !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  max-height: none !important;\n  width: 100%;\n  height: 100%;\n  image-orientation: 0deg;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.cropper-wrap-box {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  opacity: 0;\n  background-color: #fff;\n}\n\n.cropper-modal {\n  opacity: .5;\n  background-color: #000;\n}\n\n.cropper-view-box {\n  display: block;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n}\n\n.cropper-dashed {\n  position: absolute;\n  display: block;\n  opacity: .5;\n  border: 0 dashed #eee;\n}\n\n.cropper-dashed.dashed-h {\n  top: 33.33333333%;\n  left: 0;\n  width: 100%;\n  height: 33.33333333%;\n  border-top-width: 1px;\n  border-bottom-width: 1px;\n}\n\n.cropper-dashed.dashed-v {\n  top: 0;\n  left: 33.33333333%;\n  width: 33.33333333%;\n  height: 100%;\n  border-right-width: 1px;\n  border-left-width: 1px;\n}\n\n.cropper-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: block;\n  width: 0;\n  height: 0;\n  opacity: .75;\n}\n\n.cropper-center:before,\n.cropper-center:after {\n  position: absolute;\n  display: block;\n  content: ' ';\n  background-color: #eee;\n}\n\n.cropper-center:before {\n  top: 0;\n  left: -3px;\n  width: 7px;\n  height: 1px;\n}\n\n.cropper-center:after {\n  top: -3px;\n  left: 0;\n  width: 1px;\n  height: 7px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  position: absolute;\n  display: block;\n  width: 100%;\n  height: 100%;\n  opacity: .1;\n}\n\n.cropper-face {\n  top: 0;\n  left: 0;\n  background-color: #fff;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  top: 0;\n  right: -3px;\n  width: 5px;\n  cursor: e-resize;\n}\n\n.cropper-line.line-n {\n  top: -3px;\n  left: 0;\n  height: 5px;\n  cursor: n-resize;\n}\n\n.cropper-line.line-w {\n  top: 0;\n  left: -3px;\n  width: 5px;\n  cursor: w-resize;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  left: 0;\n  height: 5px;\n  cursor: s-resize;\n}\n\n.cropper-point {\n  width: 5px;\n  height: 5px;\n  opacity: .75;\n  background-color: #39f;\n}\n\n.cropper-point.point-e {\n  top: 50%;\n  right: -3px;\n  margin-top: -3px;\n  cursor: e-resize;\n}\n\n.cropper-point.point-n {\n  top: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: n-resize;\n}\n\n.cropper-point.point-w {\n  top: 50%;\n  left: -3px;\n  margin-top: -3px;\n  cursor: w-resize;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  left: 50%;\n  margin-left: -3px;\n  cursor: s-resize;\n}\n\n.cropper-point.point-ne {\n  top: -3px;\n  right: -3px;\n  cursor: ne-resize;\n}\n\n.cropper-point.point-nw {\n  top: -3px;\n  left: -3px;\n  cursor: nw-resize;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  left: -3px;\n  cursor: sw-resize;\n}\n\n.cropper-point.point-se {\n  right: -3px;\n  bottom: -3px;\n  width: 20px;\n  height: 20px;\n  cursor: se-resize;\n  opacity: 1;\n}\n\n.cropper-point.point-se:before {\n  position: absolute;\n  right: -50%;\n  bottom: -50%;\n  display: block;\n  width: 200%;\n  height: 200%;\n  content: ' ';\n  opacity: 0;\n  background-color: #39f;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    width: 15px;\n    height: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    width: 10px;\n    height: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    width: 5px;\n    height: 5px;\n    opacity: .75;\n  }\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC\");\n}\n\n.cropper-hide {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}", ""]);

// exports


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n}\n\nimg {\n  max-height: 500px;\n}\n\n.cropper img {\n  max-width: 100%;\n}\n\n.wrapper {\n  position: relative;\n}\n\n.loading-block .spinner {\n  width: 31px;\n  height: 31px;\n  margin: 0 auto;\n  border: 2px solid rgba(97, 100, 193, 0.98);\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  animation: cssload-spin 425ms infinite linear;\n  position: absolute;\n  top: calc(50% - 15px);\n  left: calc(50% - 15px);\n  animation: cssload-spin 425ms infinite linear;\n}\n\n@keyframes cssload-spin {\n  100% {\n    transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}", ""]);

// exports


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(3);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

// css-to-string-loader: transforms styles from css-loader to a string output

// Get the styles
var styles = __webpack_require__(4);

if (typeof styles === 'string') {
  // Return an existing string
  module.exports = styles;
} else {
  // Call the custom toString method from css-loader module
  module.exports = styles.toString();
}

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = "<div class=\"wrapper\"><div class=\"loading-block loader\" *ngIf=\"isLoading\"><div class=\"spinner\"></div></div><div class=\"alert alert-warning\" *ngIf=\"loadError\">{{ loadImageErrorText }}</div><div class=\"cropper\"><img #image alt=\"image\" [src]=\"imageUrl\" (load)=\"imageLoaded($event)\" crossorigin=\"anonymous\" (error)=\"imageLoadError($event)\"></div></div>";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var cropperjs_1 = __webpack_require__(10);
var core_1 = __webpack_require__(1);
var ImageCropper = (function () {
    function ImageCropper() {
        this.export = new core_1.EventEmitter();
        this.ready = new core_1.EventEmitter();
        this.isLoading = true;
    }
    ImageCropper.prototype.imageLoaded = function (ev) {
        var _this = this;
        this.loadError = false;
        var image = ev.target;
        this.imageElement = image;
        image.crossOrigin = 'anonymous';
        image.addEventListener('ready', function () {
            _this.ready.emit(true);
            _this.isLoading = false;
            if (_this.cropbox) {
                _this.cropper.setCropBoxData(_this.cropbox);
            }
        });
        this.cropper = new cropperjs_1.default(image, this.cropperOption);
    };
    ImageCropper.prototype.imageLoadError = function (event) {
        this.loadError = true;
        this.isLoading = false;
    };
    ImageCropper.prototype.exportCanvas = function (base64) {
        var _this = this;
        var imageData = this.cropper.getImageData();
        var cropData = this.cropper.getCropBoxData();
        var canvas = this.cropper.getCroppedCanvas();
        var data = {
            imageData: imageData,
            cropData: cropData,
        };
        var promise = new Promise(function (resolve) {
            if (base64) {
                return resolve({
                    dataUrl: canvas.toDataURL('image/png'),
                });
            }
            canvas.toBlob(function (blob) { return resolve({ blob: blob }); });
        });
        promise.then(function (res) {
            _this.export.emit(Object.assign(data, res));
        });
    };
    Object.defineProperty(ImageCropper.prototype, "cropperOption", {
        get: function () {
            var aspectRatio = NaN;
            if (this.settings) {
                var _a = this.settings, width = _a.width, height = _a.height;
                aspectRatio = width / height;
            }
            return {
                aspectRatio: aspectRatio,
                movable: false,
                scalable: false,
                zoomable: false,
            };
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ImageCropper.prototype, "imageUrl", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ImageCropper.prototype, "settings", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ImageCropper.prototype, "cropbox", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ImageCropper.prototype, "loadImageErrorText", void 0);
    __decorate([
        core_1.ViewChild('image'), 
        __metadata('design:type', Object)
    ], ImageCropper.prototype, "image", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageCropper.prototype, "export", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ImageCropper.prototype, "ready", void 0);
    ImageCropper = __decorate([
        core_1.Component({
            selector: 'image-cropper',
            providers: [],
            styles: [__webpack_require__(6), __webpack_require__(5)],
            template: __webpack_require__(7),
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], ImageCropper);
    return ImageCropper;
}());
exports.ImageCropper = ImageCropper;


/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var inline_cropper_module_1 = __webpack_require__(2);
exports.InlineCropperModule = inline_cropper_module_1.InlineCropperModule;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map