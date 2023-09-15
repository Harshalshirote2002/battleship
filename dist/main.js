/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Orbit-Regular.ttf */ "./src/fonts/Orbit-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  /* border: 2px solid red; */
  box-sizing: border-box;
}

@font-face {
  font-family: myTitleFont;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header {
  display: flex;
  align-items: center;
  font-size: 72px;
  font-family: myTitleFont;
  letter-spacing: 10px;
  padding-top: 10px;
  padding-bottom: 32px;
}

main {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 32px;
}

.player-grid,
.CPU-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border: 4px solid black;
}

.cell-player,
.cell-cpu {
  height: 54px;
  width: 54px;
  border: 1px solid black;
}

.cell-cpu:hover{
  cursor: pointer;
}

.ship-cell {
  height: 54px;
  width: 54px;
  border: 1px solid black;
  background-color: black;
}

.ship-hit-cell,
.cpu-ship-hit-cell {
  height: 54px;
  width: 54px;
  border: 1px solid black;
  background-color: red;
}

.cell-hit,
.cpu-hit-cell {
  height: 54px;
  width: 54px;
  border: 1px solid black;
  background-color: rgb(169, 169, 169);
}

form{
  width: 550px;
  height: 500px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

form>div{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-size: 24px;
}

.dialog-title{
  font-weight: 900;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.place-ships-button{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aqua;
  width: max-content;
  height: max-content;
  font-size: 18px;
  border-radius: 8px;
  padding: 4px 10px;
}

.place-ships-button:hover{
  cursor: pointer;
}

footer{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
  padding-top: 24px;
  padding-bottom: 10px;
  font-size: 24px;
}

.fab{
  color: black;
  transition: 0.3s ease-in-out;
  font-size: 24px;
}

.fab:hover{
  transform: rotate(360deg) scale(1.2);
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;EACxB,4CAAqC;AACvC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sCAAsC;EACtC,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,oCAAoC;AACtC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,kBAAkB;EAClB,mBAAmB;EACnB,eAAe;EACf,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,QAAQ;EACR,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  /* border: 2px solid red; */\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: myTitleFont;\n  src: url('./fonts/Orbit-Regular.ttf');\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  font-size: 72px;\n  font-family: myTitleFont;\n  letter-spacing: 10px;\n  padding-top: 10px;\n  padding-bottom: 32px;\n}\n\nmain {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  padding: 32px;\n}\n\n.player-grid,\n.CPU-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border: 4px solid black;\n}\n\n.cell-player,\n.cell-cpu {\n  height: 54px;\n  width: 54px;\n  border: 1px solid black;\n}\n\n.cell-cpu:hover{\n  cursor: pointer;\n}\n\n.ship-cell {\n  height: 54px;\n  width: 54px;\n  border: 1px solid black;\n  background-color: black;\n}\n\n.ship-hit-cell,\n.cpu-ship-hit-cell {\n  height: 54px;\n  width: 54px;\n  border: 1px solid black;\n  background-color: red;\n}\n\n.cell-hit,\n.cpu-hit-cell {\n  height: 54px;\n  width: 54px;\n  border: 1px solid black;\n  background-color: rgb(169, 169, 169);\n}\n\nform{\n  width: 550px;\n  height: 500px;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n}\n\nform>div{\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  gap: 20px;\n  font-size: 24px;\n}\n\n.dialog-title{\n  font-weight: 900;\n  font-size: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.place-ships-button{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: aqua;\n  width: max-content;\n  height: max-content;\n  font-size: 18px;\n  border-radius: 8px;\n  padding: 4px 10px;\n}\n\n.place-ships-button:hover{\n  cursor: pointer;\n}\n\nfooter{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 8px;\n  padding-top: 24px;\n  padding-bottom: 10px;\n  font-size: 24px;\n}\n\n.fab{\n  color: black;\n  transition: 0.3s ease-in-out;\n  font-size: 24px;\n}\n\n.fab:hover{\n  transform: rotate(360deg) scale(1.2);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _gamePlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gamePlay.js */ "./src/modules/gamePlay.js");



function attackEvent(e) {
  let [position_x, position_y] = e.target.id.split(",");
  position_x = parseInt(position_x);
  position_y = parseInt(position_y);
  (0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.playerMove)(_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.cpuPlayer, position_x, position_y);
}

function updateDisplay() {
  const main = document.createElement("main");
  const playerGrid = document.createElement("div");
  const CPUGrid = document.createElement("div");

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const gridCell = document.createElement("div");
      if (_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.player.board[j][i].isShip && _gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.player.board[j][i].isHit) {
        gridCell.classList.add("ship-hit-cell");
      } else if (_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.player.board[j][i].isShip) {
        gridCell.classList.add("ship-cell");
      } else if (_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.player.board[j][i].isHit) {
        gridCell.classList.add("cell-hit");
      } else {
        gridCell.classList.add("cell-player");
      }
      playerGrid.appendChild(gridCell);
    }
  }
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const gridCell = document.createElement("div");
      if (_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.cpuPlayer.board[j][i].isHit && _gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.cpuPlayer.board[j][i].isShip) {
        gridCell.classList.add("cpu-ship-hit-cell");
      } else if (_gamePlay_js__WEBPACK_IMPORTED_MODULE_0__.cpuPlayer.board[j][i].isHit) {
        gridCell.classList.add("cpu-hit-cell");
      } else {
        gridCell.classList.add("cell-cpu");
      }
      gridCell.id = `${j},${i}`;
      gridCell.addEventListener("click", attackEvent);
      CPUGrid.appendChild(gridCell);
    }
  }
  playerGrid.classList.add("player-grid");
  CPUGrid.classList.add("CPU-grid");
  main.append(playerGrid, CPUGrid);
  return main;
}


/***/ }),

/***/ "./src/modules/commonFooter.js":
/*!*************************************!*\
  !*** ./src/modules/commonFooter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter(){
    const footer = document.createElement('footer');
    footer.textContent=`Copyright © ${new Date().getFullYear()} HarshalShirote`;
    const a = document.createElement('a');
    a.href = 'https://github.com/Harshalshirote2002';
    a.target='_blank';
    const i = document.createElement('i');
    i.classList.add('fab');
    i.classList.add('fa-github');
    a.appendChild(i);
    footer.appendChild(a);
    return footer
}



/***/ }),

/***/ "./src/modules/fontawesome.js":
/*!************************************!*\
  !*** ./src/modules/fontawesome.js ***!
  \************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;window.FontAwesomeKitConfig = {"asyncLoading":{"enabled":false},"autoA11y":{"enabled":true},"baseUrl":"https://ka-f.fontawesome.com","baseUrlKit":"https://kit.fontawesome.com","detectConflictsUntil":null,"iconUploads":{},"id":80762673,"license":"free","method":"css","minify":{"enabled":true},"token":"4c536a6bd5","v4FontFaceShim":{"enabled":true},"v4shim":{"enabled":true},"v5FontFaceShim":{"enabled":false},"version":"5.15.4"};
!function(t){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}((function(){"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function e(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,c,a=[],u=!0,f=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);u=!0);}catch(t){f=!0,o=t}finally{try{if(!u&&null!=n.return&&(c=n.return(),Object(c)!==c))return}finally{if(f)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t,e){var n=e&&e.addOn||"",r=e&&e.baseFilename||t.license+n,o=e&&e.minify?".min":"",i=e&&e.fileSuffix||t.method,c=e&&e.subdir||t.method;return t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/"+c+"/"+r+o+"."+i}function a(t,e){var n=e||["fa"],r="."+Array.prototype.join.call(n,",."),o=t.querySelectorAll(r);Array.prototype.forEach.call(o,(function(e){var n=e.getAttribute("title");e.setAttribute("aria-hidden","true");var r=!e.nextElementSibling||!e.nextElementSibling.classList.contains("sr-only");if(n&&r){var o=t.createElement("span");o.innerHTML=n,o.classList.add("sr-only"),e.parentNode.insertBefore(o,e.nextSibling)}}))}var u,f=function(){},s="undefined"!=typeof __webpack_require__.g&&void 0!==__webpack_require__.g.process&&"function"==typeof __webpack_require__.g.process.emit,l="undefined"==typeof setImmediate?setTimeout:setImmediate,d=[];function h(){for(var t=0;t<d.length;t++)d[t][0](d[t][1]);d=[],u=!1}function m(t,e){d.push([t,e]),u||(u=!0,l(h,0))}function p(t){var e=t.owner,n=e._state,r=e._data,o=t[n],i=t.then;if("function"==typeof o){n="fulfilled";try{r=o(r)}catch(t){g(i,t)}}v(i,r)||("fulfilled"===n&&b(i,r),"rejected"===n&&g(i,r))}function v(t,e){var r;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===n(e))){var o=e.then;if("function"==typeof o)return o.call(e,(function(n){r||(r=!0,e===n?y(t,n):b(t,n))}),(function(e){r||(r=!0,g(t,e))})),!0}}catch(e){return r||g(t,e),!0}return!1}function b(t,e){t!==e&&v(t,e)||y(t,e)}function y(t,e){"pending"===t._state&&(t._state="settled",t._data=e,m(A,t))}function g(t,e){"pending"===t._state&&(t._state="settled",t._data=e,m(S,t))}function w(t){t._then=t._then.forEach(p)}function A(t){t._state="fulfilled",w(t)}function S(t){t._state="rejected",w(t),!t._handled&&s&&__webpack_require__.g.process.emit("unhandledRejection",t._data,t)}function O(t){__webpack_require__.g.process.emit("rejectionHandled",t)}function j(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof j==!1)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){g(e,t)}try{t((function(t){b(e,t)}),n)}catch(t){n(t)}}(t,this)}j.prototype={constructor:j,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(f),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&s&&m(O,this)),"fulfilled"===this._state||"rejected"===this._state?m(p,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},j.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new j((function(e,n){var r=[],o=0;function i(t){return o++,function(n){r[t]=n,--o||e(r)}}for(var c,a=0;a<t.length;a++)(c=t[a])&&"function"==typeof c.then?c.then(i(a),n):r[a]=c;o||e(r)}))},j.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new j((function(e,n){for(var r,o=0;o<t.length;o++)(r=t[o])&&"function"==typeof r.then?r.then(e,n):e(r)}))},j.resolve=function(t){return t&&"object"===n(t)&&t.constructor===j?t:new j((function(e){e(t)}))},j.reject=function(t){return new j((function(e,n){n(t)}))};var E="function"==typeof Promise?Promise:j;function P(t,e){var n=e.fetch,r=e.XMLHttpRequest,o=e.token,i=t;return o&&!function(t){return t.indexOf("kit-upload.css")>-1}(t)&&("URLSearchParams"in window?(i=new URL(t)).searchParams.set("token",o):i=i+"?token="+encodeURIComponent(o)),i=i.toString(),new E((function(t,e){if("function"==typeof n)n(i,{mode:"cors",cache:"default"}).then((function(t){if(t.ok)return t.text();throw new Error("")})).then((function(e){t(e)})).catch(e);else if("function"==typeof r){var o=new r;o.addEventListener("loadend",(function(){this.responseText?t(this.responseText):e(new Error(""))}));["abort","error","timeout"].map((function(t){o.addEventListener(t,(function(){e(new Error(""))}))})),o.open("GET",i),o.send()}else{e(new Error(""))}}))}function _(t,e,n){var r=t;return[[/(url\("?)\.\.\/\.\.\/\.\./g,function(t,n){return"".concat(n).concat(e)}],[/(url\("?)\.\.\/webfonts/g,function(t,r){return"".concat(r).concat(e,"/releases/v").concat(n,"/webfonts")}],[/(url\("?)https:\/\/kit-free([^.])*\.fontawesome\.com/g,function(t,n){return"".concat(n).concat(e)}]].forEach((function(t){var e=o(t,2),n=e[0],i=e[1];r=r.replace(n,i)})),r}function F(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=n.document||o,i=a.bind(a,o,["fa","fab","fas","far","fal","fad","fak"]);t.autoA11y.enabled&&r(i);var u=t.subsetPath&&t.baseUrl+"/"+t.subsetPath,f=[{id:"fa-main",addOn:void 0,url:u}];if(t.v4shim&&t.v4shim.enabled&&f.push({id:"fa-v4-shims",addOn:"-v4-shims"}),t.v5FontFaceShim&&t.v5FontFaceShim.enabled&&f.push({id:"fa-v5-font-face",addOn:"-v5-font-face"}),t.v4FontFaceShim&&t.v4FontFaceShim.enabled&&f.push({id:"fa-v4-font-face",addOn:"-v4-font-face"}),!u&&t.customIconsCssPath){var s=t.customIconsCssPath.indexOf("kit-upload.css")>-1?t.baseUrlKit:t.baseUrl,l=s+"/"+t.customIconsCssPath;f.push({id:"fa-kit-upload",url:l})}var d=f.map((function(r){return new E((function(o,i){var a=r.url||c(t,{addOn:r.addOn,minify:t.minify.enabled}),u={id:r.id},f=t.subset?u:e(e(e({},n),u),{},{baseUrl:t.baseUrl,version:t.version,id:r.id,contentFilter:function(t,e){return _(t,e.baseUrl,e.version)}});P(a,n).then((function(t){o(C(t,f))})).catch(i)}))}));return E.all(d)}function C(t,e){var n=e.contentFilter||function(t,e){return t},r=document.createElement("style"),o=document.createTextNode(n(t,e));return r.appendChild(o),r.media="all",e.id&&r.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&r.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),r}function I(t,n){n.autoA11y=t.autoA11y.enabled,"pro"===t.license&&(n.autoFetchSvg=!0,n.fetchSvgFrom=t.baseUrl+"/releases/"+("latest"===t.version?"latest":"v".concat(t.version))+"/svgs",n.fetchUploadedSvgFrom=t.uploadsUrl);var r=[];return t.v4shim.enabled&&r.push(new E((function(r,o){P(c(t,{addOn:"-v4-shims",minify:t.minify.enabled}),n).then((function(t){r(U(t,e(e({},n),{},{id:"fa-v4-shims"})))})).catch(o)}))),r.push(new E((function(r,o){P(t.subsetPath&&t.baseUrl+"/"+t.subsetPath||c(t,{minify:t.minify.enabled}),n).then((function(t){var o=U(t,e(e({},n),{},{id:"fa-main"}));r(function(t,e){var n=e&&void 0!==e.autoFetchSvg?e.autoFetchSvg:void 0,r=e&&void 0!==e.autoA11y?e.autoA11y:void 0;void 0!==r&&t.setAttribute("data-auto-a11y",r?"true":"false");n&&(t.setAttributeNode(document.createAttribute("data-auto-fetch-svg")),t.setAttribute("data-fetch-svg-from",e.fetchSvgFrom),t.setAttribute("data-fetch-uploaded-svg-from",e.fetchUploadedSvgFrom));return t}(o,n))})).catch(o)}))),E.all(r)}function U(t,e){var n=document.createElement("SCRIPT"),r=document.createTextNode(t);return n.appendChild(r),n.referrerPolicy="strict-origin",e.id&&n.setAttribute("id",e.id),e&&e.detectingConflicts&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n}function T(t){var e,n=[],r=document,o=r.documentElement.doScroll,i=(o?/^loaded|^c/:/^loaded|^i|^c/).test(r.readyState);i||r.addEventListener("DOMContentLoaded",e=function(){for(r.removeEventListener("DOMContentLoaded",e),i=1;e=n.shift();)e()}),i?setTimeout(t,0):n.push(t)}function L(t){"undefined"!=typeof MutationObserver&&new MutationObserver(t).observe(document,{childList:!0,subtree:!0})}try{if(window.FontAwesomeKitConfig){var k=window.FontAwesomeKitConfig,x={detectingConflicts:k.detectConflictsUntil&&new Date<=new Date(k.detectConflictsUntil),detectionIgnoreAttr:"data-fa-detection-ignore",fetch:window.fetch,token:k.token,XMLHttpRequest:window.XMLHttpRequest,document:document},M=document.currentScript,N=M?M.parentElement:document.head;(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"js"===t.method?I(t,e):"css"===t.method?F(t,e,(function(t){T(t),L(t)})):void 0})(k,x).then((function(t){t.map((function(t){try{N.insertBefore(t,M?M.nextSibling:null)}catch(e){N.appendChild(t)}})),x.detectingConflicts&&M&&T((function(){M.setAttributeNode(document.createAttribute(x.detectionIgnoreAttr));var t=function(t,e){var n=document.createElement("script");return e&&e.detectionIgnoreAttr&&n.setAttributeNode(document.createAttribute(e.detectionIgnoreAttr)),n.src=c(t,{baseFilename:"conflict-detection",fileSuffix:"js",subdir:"js",minify:t.minify.enabled}),n}(k,x);document.body.appendChild(t)}))})).catch((function(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}))}}catch(t){console.error("".concat("Font Awesome Kit:"," ").concat(t))}}));

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ gameBoard)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/modules/ship.js");


class boardCell {
  constructor() {
    this.isHit = false;
    this.shipName = null;
    this.isShip = false;
  }

  hitCell = () => {
    this.isHit = true;
  };
  makeShipCell = (someShipName) => {
    if (!this.isShip) {
      this.shipName = `${someShipName}`;
    }
    this.isShip = true;
  };
}

function gameBoard(positions) {
  let board = [];
  for (let i = 1; i <= 10; i++) {
    board[i] = [];
    for (let j = 1; j <= 10; j++) {
      board[i][j] = new boardCell();
    }
  }
  const ships = {
    ship1: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(5),
    ship2: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(4),
    ship3: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3),
    ship4: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3),
    ship5: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2),
  };
  for (let p = 0; p < positions.length; p++) {
    let start = positions[p].start;
    let end = positions[p].end;
    if (start[0] === end[0]) {
      for (let i = start[1]; i <= end[1]; i++) {
        board[start[0]][i].makeShipCell(`ship${p + 1}`);
      }
    } else {
      for (let j = start[0]; j <= end[0]; j++) {
        board[j][start[1]].makeShipCell(`ship${p + 1}`);
      }
    }
  }
  const receiveAttack = (position) => {
    if (!board[position[0]][position[1]].isHit) {
      board[position[0]][position[1]].hitCell();
    }
    if (board[position[0]][position[1]].isShip) {
      board[position[0]][position[1]].hitCell();
      ships[board[position[0]][position[1]].shipName].hit();
    }
  };
  const allSunk = () => {
    if (
      ships["ship1"].isSunk() &&
      ships["ship2"].isSunk() &&
      ships["ship3"].isSunk() &&
      ships["ship4"].isSunk() &&
      ships["ship5"].isSunk()
    ) {
      return true;
    } else {
      return false;
    }
  };
  return { ships, board, allSunk, receiveAttack };
}


/***/ }),

/***/ "./src/modules/gamePlay.js":
/*!*********************************!*\
  !*** ./src/modules/gamePlay.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cpuPlayer: () => (/* binding */ cpuPlayer),
/* harmony export */   gameWinStatus: () => (/* binding */ gameWinStatus),
/* harmony export */   placePlayerShips: () => (/* binding */ placePlayerShips),
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   playerMove: () => (/* binding */ playerMove),
/* harmony export */   toggleGameWinStatus: () => (/* binding */ toggleGameWinStatus)
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/modules/gameBoard.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/modules/index.js");


let flag = 0;
let gameWinStatus = 0;

function toggleGameWinStatus(){
  gameWinStatus = 0;
  cpuPlayer = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cpuPositions);
}

let player;

const placePlayerShips = (positions) => {
  player = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(positions);
};

let cpuPositions = [
  { start: [1, 1], end: [1, 5] },
  { start: [2, 2], end: [2, 5] },
  { start: [7, 10], end: [9, 10] },
  { start: [10, 1], end: [10, 3] },
  { start: [9, 6], end: [9, 7] },
];

let cpuPlayer = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cpuPositions);

function gameStatusCheck() {
  if (player.allSunk()) {
    alert("CPU wins the game!");
    gameWinStatus = 1;
  } else if (cpuPlayer.allSunk()) {
    alert("Player wins the game!");
    gameWinStatus = 1;
  }
}

function randomCoordinateGenerator() {
  let i = Math.floor(Math.random() * 10) + 1;
  let j = Math.floor(Math.random() * 10) + 1;
  return [i, j];
}

function cpuMove(player) {
  let i, j;
  do {
    [i, j] = randomCoordinateGenerator();
  } while (player.board[i][j].isHit);
  player.receiveAttack([i, j]);
  gameStatusCheck();
  return;
}

function playerMove(cpuPlayer, position_x, position_y) {
  if (cpuPlayer.board[position_x][position_y].isHit) {
    alert("cell is already hit!");
  } else {
    cpuPlayer.receiveAttack([position_x, position_y]);
    gameStatusCheck();
    cpuMove(player);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  }
}


/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
function createHeader() {
  const header = document.createElement("header");
  header.textContent = "BattleShip";
  return header;
}


/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateUI)
/* harmony export */ });
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _fontawesome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fontawesome.js */ "./src/modules/fontawesome.js");
/* harmony import */ var _fontawesome_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontawesome_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commonFooter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commonFooter.js */ "./src/modules/commonFooter.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.js */ "./src/modules/header.js");
/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI.js */ "./src/modules/UI.js");
/* harmony import */ var _shipPlacementDialog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipPlacementDialog.js */ "./src/modules/shipPlacementDialog.js");
/* harmony import */ var _gamePlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gamePlay */ "./src/modules/gamePlay.js");








let beginMode = 1;

function placeDialog(dialog) {
  const dialogWidth = dialog.offsetWidth;
  const dialogHeight = dialog.offsetHeight;
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const leftPosition = viewportWidth / 2 - dialogWidth / 2;
  const topPosition = viewportHeight / 2 - dialogHeight / 2;
  dialog.style.left = `${leftPosition}px`;
  dialog.style.top = `${topPosition}px`;
}

function updateUI() {
  if (_gamePlay__WEBPACK_IMPORTED_MODULE_6__.gameWinStatus === 1) {
    beginMode = 1;
    (0,_gamePlay__WEBPACK_IMPORTED_MODULE_6__.toggleGameWinStatus)();
  }
  if (beginMode === 1) {
    beginMode = 0;
    const body = document.querySelector("body");
    const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    // const main = updateDisplay();
    const dialog = (0,_shipPlacementDialog_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    // const footer = createFooter();
    body.textContent = "";
    body.append(header, dialog);
    if (!dialog.open) {
      dialog.showModal(); // Open the dialog modally
    }
    // dialog.showModal();
    placeDialog(dialog);
  } else {
    const body = document.querySelector("body");
    const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const main = (0,_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
    const footer = (0,_commonFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    body.textContent = "";
    body.append(header, main, footer);
    beginMode = 0;
  }
}

updateUI();


/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ship)
/* harmony export */ });
function ship(length) {
  let numTimesHit = 0;
  const hit = () => {
    numTimesHit++;
  };
  const isSunk = () => {
    return (numTimesHit >= length);
  };
  return { hit, isSunk };
}



/***/ }),

/***/ "./src/modules/shipPlacementDialog.js":
/*!********************************************!*\
  !*** ./src/modules/shipPlacementDialog.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ shipDialogMaker)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/modules/index.js");
/* harmony import */ var _gamePlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gamePlay.js */ "./src/modules/gamePlay.js");



function generateElement(type, classes = [], options) {
  const element = document.createElement(type);
  for (const someClass of classes) {
    element.classList.add(someClass);
  }
  for (const key in options) {
    if (key === "textContent" || key === "type" || key === "value") {
      element[key] = options[key];
    } else {
      element.setAttribute(key, options[key]);
    }
  }
  return element;
}

const dialog = document.createElement("dialog");
const form = document.createElement("form");
const title = generateElement("div", ["dialog-title"], {
  textContent: "Enter the Ship Start-point Coordinates, choose alignment",
});
const placeShips = generateElement("button", ["place-ships-button"], {
  textContent: "Place Ships",
});
const ship1 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship1",
});
const ship2 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship2",
});
const ship3 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship3",
});
const ship4 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship4",
});
const ship5 = generateElement("input", ["ship-coordinate-input"], {
  type: "text",
  id: "ship5",
});
const ship1Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship1",
  textContent: "ship1 of length 5:",
});
const ship2Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship2",
  textContent: "ship2 of length 4:",
});
const ship3Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship3",
  textContent: "ship3 of length 3:",
});
const ship4Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship4",
  textContent: "ship4 of length 3:",
});
const ship5Label = generateElement("label", ["ship-coordinate-label"], {
  for: "ship5",
  textContent: "ship5 of length 2:",
});
const ship1Alignment = generateElement("select", ["ship-alignment"], {
  id: "list1",
});
const ship1_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship1_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
const ship2Alignment = generateElement("select", ["ship-alignment"], {
  id: "list2",
});
const ship2_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship2_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
const ship3Alignment = generateElement("select", ["ship-alignment"], {
  id: "list1",
});
const ship3_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship3_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
const ship4Alignment = generateElement("select", ["ship-alignment"], {
  id: "list1",
});
const ship4_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship4_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
const ship5Alignment = generateElement("select", ["ship-alignment"], {
  id: "list1",
});
const ship5_option_x = generateElement("option", [], {
  value: "x",
  textContent: "x",
});
const ship5_option_y = generateElement("option", [], {
  value: "y",
  textContent: "y",
});
ship1.required = true;
ship2.required = true;
ship3.required = true;
ship4.required = true;
ship5.required = true;
ship1Alignment.append(ship1_option_x, ship1_option_y);
ship2Alignment.append(ship2_option_x, ship2_option_y);
ship3Alignment.append(ship3_option_x, ship3_option_y);
ship4Alignment.append(ship4_option_x, ship4_option_y);
ship5Alignment.append(ship5_option_x, ship5_option_y);
const ship1Div = generateElement("div", ["ship1-div"]);
const ship2Div = generateElement("div", ["ship2-div"]);
const ship3Div = generateElement("div", ["ship3-div"]);
const ship4Div = generateElement("div", ["ship4-div"]);
const ship5Div = generateElement("div", ["ship5-div"]);
ship1Div.append(ship1Label, ship1, ship1Alignment);
ship2Div.append(ship2Label, ship2, ship2Alignment);
ship3Div.append(ship3Label, ship3, ship3Alignment);
ship4Div.append(ship4Label, ship4, ship4Alignment);
ship5Div.append(ship5Label, ship5, ship5Alignment);
placeShips.addEventListener("click", formSubmitEvent);
form.append(
  title,
  ship1Div,
  ship2Div,
  ship3Div,
  ship4Div,
  ship5Div,
  placeShips
);
dialog.append(form);

function checkValidity(finalPositions) {
  let result = true;
  for (const pos of finalPositions) {
    if (
      pos.start[0] <= 10 &&
      pos.start[0] >= 1 &&
      pos.end[0] <= 10 &&
      pos.end[0] >= 1 &&
      pos.start[1] <= 10 &&
      pos.start[1] >= 1 &&
      pos.end[1] <= 10 &&
      pos.end[1] >= 1
    ) {
    } else {
        result = false;
        return false;
    }
  }
  return true;
}

function formSubmitEvent(e) {
  e.preventDefault();
  const lengths = [4, 3, 2, 2, 1];
  let positions = [
    ship1.value,
    ship2.value,
    ship3.value,
    ship4.value,
    ship5.value,
  ];
  let alignments = [
    ship1Alignment.value,
    ship2Alignment.value,
    ship3Alignment.value,
    ship4Alignment.value,
    ship5Alignment.value,
  ];
  for (let i = 0; i < 5; i++) {
    positions[i] = positions[i].split(",");
    positions[i][0] = parseInt(positions[i][0]);
    positions[i][1] = parseInt(positions[i][1]);
  }
  let finalPositions = [];
  for (let i = 0; i < 5; i++) {
    if (alignments[i] === "x") {
      finalPositions.push({
        start: positions[i],
        end: [positions[i][0] + lengths[i], positions[i][1]],
      });
    } else {
      finalPositions.push({
        start: positions[i],
        end: [positions[i][0], positions[i][1] + lengths[i]],
      });
    }
  }
  if(checkValidity(finalPositions)){
    dialog.close();
    (0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_1__.placePlayerShips)(finalPositions);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    console.log("updateUI called");
  }else{
    alert("invalid coordinates!");
  }
}

function shipDialogMaker() {
  return dialog;
}


/***/ }),

/***/ "./src/fonts/Orbit-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Orbit-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c0af669bb30721cce497.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/modules/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrQztBQUNlOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBZ0I7QUFDcEIsSUFBSSxxREFBUTtBQUNaO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzlOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY29tbW9uRm9vdGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9mb250YXdlc29tZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lUGxheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvaGVhZGVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcFBsYWNlbWVudERpYWxvZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9PcmJpdC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IG15VGl0bGVGb250O1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDcycHg7XG4gIGZvbnQtZmFtaWx5OiBteVRpdGxlRm9udDtcbiAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMzJweDtcbn1cblxuLnBsYXllci1ncmlkLFxuLkNQVS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY2VsbC1wbGF5ZXIsXG4uY2VsbC1jcHUge1xuICBoZWlnaHQ6IDU0cHg7XG4gIHdpZHRoOiA1NHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmNlbGwtY3B1OmhvdmVye1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zaGlwLWNlbGwge1xuICBoZWlnaHQ6IDU0cHg7XG4gIHdpZHRoOiA1NHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5zaGlwLWhpdC1jZWxsLFxuLmNwdS1zaGlwLWhpdC1jZWxsIHtcbiAgaGVpZ2h0OiA1NHB4O1xuICB3aWR0aDogNTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNlbGwtaGl0LFxuLmNwdS1oaXQtY2VsbCB7XG4gIGhlaWdodDogNTRweDtcbiAgd2lkdGg6IDU0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAxNjksIDE2OSk7XG59XG5cbmZvcm17XG4gIHdpZHRoOiA1NTBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgcGFkZGluZzogMjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbn1cblxuZm9ybT5kaXZ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMjBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZGlhbG9nLXRpdGxle1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LXNpemU6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucGxhY2Utc2hpcHMtYnV0dG9ue1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG59XG5cbi5wbGFjZS1zaGlwcy1idXR0b246aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuZm9vdGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZhYntcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5mYWI6aG92ZXJ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDRDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztFQUNULGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogbXlUaXRsZUZvbnQ7XFxuICBzcmM6IHVybCgnLi9mb250cy9PcmJpdC1SZWd1bGFyLnR0ZicpO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDcycHg7XFxuICBmb250LWZhbWlseTogbXlUaXRsZUZvbnQ7XFxuICBsZXR0ZXItc3BhY2luZzogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG4ucGxheWVyLWdyaWQsXFxuLkNQVS1ncmlkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uY2VsbC1wbGF5ZXIsXFxuLmNlbGwtY3B1IHtcXG4gIGhlaWdodDogNTRweDtcXG4gIHdpZHRoOiA1NHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jZWxsLWNwdTpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNoaXAtY2VsbCB7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICB3aWR0aDogNTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwLWhpdC1jZWxsLFxcbi5jcHUtc2hpcC1oaXQtY2VsbCB7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICB3aWR0aDogNTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY2VsbC1oaXQsXFxuLmNwdS1oaXQtY2VsbCB7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICB3aWR0aDogNTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xcbn1cXG5cXG5mb3Jte1xcbiAgd2lkdGg6IDU1MHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMjBweDtcXG59XFxuXFxuZm9ybT5kaXZ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZGlhbG9nLXRpdGxle1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGZvbnQtc2l6ZTogMzJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wbGFjZS1zaGlwcy1idXR0b257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA0cHggMTBweDtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLWJ1dHRvbjpob3ZlcntcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuZm9vdGVye1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZ2FwOiA4cHg7XFxuICBwYWRkaW5nLXRvcDogMjRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZmFie1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLmZhYjpob3ZlcntcXG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHBsYXllciwgY3B1UGxheWVyIH0gZnJvbSBcIi4vZ2FtZVBsYXkuanNcIjtcbmltcG9ydCB7IHBsYXllck1vdmUgfSBmcm9tIFwiLi9nYW1lUGxheS5qc1wiO1xuXG5mdW5jdGlvbiBhdHRhY2tFdmVudChlKSB7XG4gIGxldCBbcG9zaXRpb25feCwgcG9zaXRpb25feV0gPSBlLnRhcmdldC5pZC5zcGxpdChcIixcIik7XG4gIHBvc2l0aW9uX3ggPSBwYXJzZUludChwb3NpdGlvbl94KTtcbiAgcG9zaXRpb25feSA9IHBhcnNlSW50KHBvc2l0aW9uX3kpO1xuICBwbGF5ZXJNb3ZlKGNwdVBsYXllciwgcG9zaXRpb25feCwgcG9zaXRpb25feSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtcbiAgY29uc3QgcGxheWVyR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IENQVUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpZiAocGxheWVyLmJvYXJkW2pdW2ldLmlzU2hpcCAmJiBwbGF5ZXIuYm9hcmRbal1baV0uaXNIaXQpIHtcbiAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtaGl0LWNlbGxcIik7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZFtqXVtpXS5pc1NoaXApIHtcbiAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChcInNoaXAtY2VsbFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyLmJvYXJkW2pdW2ldLmlzSGl0KSB7XG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWhpdFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLXBsYXllclwiKTtcbiAgICAgIH1cbiAgICAgIHBsYXllckdyaWQuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgY29uc3QgZ3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWYgKGNwdVBsYXllci5ib2FyZFtqXVtpXS5pc0hpdCAmJiBjcHVQbGF5ZXIuYm9hcmRbal1baV0uaXNTaGlwKSB7XG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjcHUtc2hpcC1oaXQtY2VsbFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoY3B1UGxheWVyLmJvYXJkW2pdW2ldLmlzSGl0KSB7XG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjcHUtaGl0LWNlbGxcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1jcHVcIik7XG4gICAgICB9XG4gICAgICBncmlkQ2VsbC5pZCA9IGAke2p9LCR7aX1gO1xuICAgICAgZ3JpZENlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGF0dGFja0V2ZW50KTtcbiAgICAgIENQVUdyaWQuYXBwZW5kQ2hpbGQoZ3JpZENlbGwpO1xuICAgIH1cbiAgfVxuICBwbGF5ZXJHcmlkLmNsYXNzTGlzdC5hZGQoXCJwbGF5ZXItZ3JpZFwiKTtcbiAgQ1BVR3JpZC5jbGFzc0xpc3QuYWRkKFwiQ1BVLWdyaWRcIik7XG4gIG1haW4uYXBwZW5kKHBsYXllckdyaWQsIENQVUdyaWQpO1xuICByZXR1cm4gbWFpbjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUZvb3Rlcigpe1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci50ZXh0Q29udGVudD1gQ29weXJpZ2h0IMKpICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBIYXJzaGFsU2hpcm90ZWA7XG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0hhcnNoYWxzaGlyb3RlMjAwMic7XG4gICAgYS50YXJnZXQ9J19ibGFuayc7XG4gICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhYicpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtZ2l0aHViJyk7XG4gICAgYS5hcHBlbmRDaGlsZChpKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG4iLCJ3aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcgPSB7XCJhc3luY0xvYWRpbmdcIjp7XCJlbmFibGVkXCI6ZmFsc2V9LFwiYXV0b0ExMXlcIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJiYXNlVXJsXCI6XCJodHRwczovL2thLWYuZm9udGF3ZXNvbWUuY29tXCIsXCJiYXNlVXJsS2l0XCI6XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb21cIixcImRldGVjdENvbmZsaWN0c1VudGlsXCI6bnVsbCxcImljb25VcGxvYWRzXCI6e30sXCJpZFwiOjgwNzYyNjczLFwibGljZW5zZVwiOlwiZnJlZVwiLFwibWV0aG9kXCI6XCJjc3NcIixcIm1pbmlmeVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInRva2VuXCI6XCI0YzUzNmE2YmQ1XCIsXCJ2NEZvbnRGYWNlU2hpbVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInY0c2hpbVwiOntcImVuYWJsZWRcIjp0cnVlfSxcInY1Rm9udEZhY2VTaGltXCI6e1wiZW5hYmxlZFwiOmZhbHNlfSxcInZlcnNpb25cIjpcIjUuMTUuNFwifTtcbiFmdW5jdGlvbih0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFwia2l0LWxvYWRlclwiLHQpOnQoKX0oKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LGUpe3ZhciBuPU9iamVjdC5rZXlzKHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciByPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCk7ZSYmKHI9ci5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsZSkuZW51bWVyYWJsZX0pKSksbi5wdXNoLmFwcGx5KG4scil9cmV0dXJuIG59ZnVuY3Rpb24gZShlKXtmb3IodmFyIG49MTtuPGFyZ3VtZW50cy5sZW5ndGg7bisrKXt2YXIgbz1udWxsIT1hcmd1bWVudHNbbl0/YXJndW1lbnRzW25dOnt9O24lMj90KE9iamVjdChvKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7cihlLHQsb1t0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvKSk6dChPYmplY3QobykpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBuKHQpe3JldHVybihuPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbih0KXtyZXR1cm4gdHlwZW9mIHR9OmZ1bmN0aW9uKHQpe3JldHVybiB0JiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJnQuY29uc3RydWN0b3I9PT1TeW1ib2wmJnQhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIHR9KSh0KX1mdW5jdGlvbiByKHQsZSxuKXtyZXR1cm4oZT1mdW5jdGlvbih0KXt2YXIgZT1mdW5jdGlvbih0LGUpe2lmKFwib2JqZWN0XCIhPXR5cGVvZiB0fHxudWxsPT09dClyZXR1cm4gdDt2YXIgbj10W1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09bil7dmFyIHI9bi5jYWxsKHQsZXx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPXR5cGVvZiByKXJldHVybiByO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PWU/U3RyaW5nOk51bWJlcikodCl9KHQsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09dHlwZW9mIGU/ZTpTdHJpbmcoZSl9KGUpKWluIHQ/T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsZSx7dmFsdWU6bixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOnRbZV09bix0fWZ1bmN0aW9uIG8odCxlKXtyZXR1cm4gZnVuY3Rpb24odCl7aWYoQXJyYXkuaXNBcnJheSh0KSlyZXR1cm4gdH0odCl8fGZ1bmN0aW9uKHQsZSl7dmFyIG49bnVsbD09dD9udWxsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJnRbU3ltYm9sLml0ZXJhdG9yXXx8dFtcIkBAaXRlcmF0b3JcIl07aWYobnVsbCE9bil7dmFyIHIsbyxpLGMsYT1bXSx1PSEwLGY9ITE7dHJ5e2lmKGk9KG49bi5jYWxsKHQpKS5uZXh0LDA9PT1lKXtpZihPYmplY3QobikhPT1uKXJldHVybjt1PSExfWVsc2UgZm9yKDshKHU9KHI9aS5jYWxsKG4pKS5kb25lKSYmKGEucHVzaChyLnZhbHVlKSxhLmxlbmd0aCE9PWUpO3U9ITApO31jYXRjaCh0KXtmPSEwLG89dH1maW5hbGx5e3RyeXtpZighdSYmbnVsbCE9bi5yZXR1cm4mJihjPW4ucmV0dXJuKCksT2JqZWN0KGMpIT09YykpcmV0dXJufWZpbmFsbHl7aWYoZil0aHJvdyBvfX1yZXR1cm4gYX19KHQsZSl8fGZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuO2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBpKHQsZSk7dmFyIG49T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1uJiZ0LmNvbnN0cnVjdG9yJiYobj10LmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1ufHxcIlNldFwiPT09bilyZXR1cm4gQXJyYXkuZnJvbSh0KTtpZihcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpcmV0dXJuIGkodCxlKX0odCxlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIGkodCxlKXsobnVsbD09ZXx8ZT50Lmxlbmd0aCkmJihlPXQubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheShlKTtuPGU7bisrKXJbbl09dFtuXTtyZXR1cm4gcn1mdW5jdGlvbiBjKHQsZSl7dmFyIG49ZSYmZS5hZGRPbnx8XCJcIixyPWUmJmUuYmFzZUZpbGVuYW1lfHx0LmxpY2Vuc2UrbixvPWUmJmUubWluaWZ5P1wiLm1pblwiOlwiXCIsaT1lJiZlLmZpbGVTdWZmaXh8fHQubWV0aG9kLGM9ZSYmZS5zdWJkaXJ8fHQubWV0aG9kO3JldHVybiB0LmJhc2VVcmwrXCIvcmVsZWFzZXMvXCIrKFwibGF0ZXN0XCI9PT10LnZlcnNpb24/XCJsYXRlc3RcIjpcInZcIi5jb25jYXQodC52ZXJzaW9uKSkrXCIvXCIrYytcIi9cIityK28rXCIuXCIraX1mdW5jdGlvbiBhKHQsZSl7dmFyIG49ZXx8W1wiZmFcIl0scj1cIi5cIitBcnJheS5wcm90b3R5cGUuam9pbi5jYWxsKG4sXCIsLlwiKSxvPXQucXVlcnlTZWxlY3RvckFsbChyKTtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG8sKGZ1bmN0aW9uKGUpe3ZhciBuPWUuZ2V0QXR0cmlidXRlKFwidGl0bGVcIik7ZS5zZXRBdHRyaWJ1dGUoXCJhcmlhLWhpZGRlblwiLFwidHJ1ZVwiKTt2YXIgcj0hZS5uZXh0RWxlbWVudFNpYmxpbmd8fCFlLm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJzci1vbmx5XCIpO2lmKG4mJnIpe3ZhciBvPXQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7by5pbm5lckhUTUw9bixvLmNsYXNzTGlzdC5hZGQoXCJzci1vbmx5XCIpLGUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyxlLm5leHRTaWJsaW5nKX19KSl9dmFyIHUsZj1mdW5jdGlvbigpe30scz1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZ2b2lkIDAhPT1nbG9iYWwucHJvY2VzcyYmXCJmdW5jdGlvblwiPT10eXBlb2YgZ2xvYmFsLnByb2Nlc3MuZW1pdCxsPVwidW5kZWZpbmVkXCI9PXR5cGVvZiBzZXRJbW1lZGlhdGU/c2V0VGltZW91dDpzZXRJbW1lZGlhdGUsZD1bXTtmdW5jdGlvbiBoKCl7Zm9yKHZhciB0PTA7dDxkLmxlbmd0aDt0KyspZFt0XVswXShkW3RdWzFdKTtkPVtdLHU9ITF9ZnVuY3Rpb24gbSh0LGUpe2QucHVzaChbdCxlXSksdXx8KHU9ITAsbChoLDApKX1mdW5jdGlvbiBwKHQpe3ZhciBlPXQub3duZXIsbj1lLl9zdGF0ZSxyPWUuX2RhdGEsbz10W25dLGk9dC50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pe249XCJmdWxmaWxsZWRcIjt0cnl7cj1vKHIpfWNhdGNoKHQpe2coaSx0KX19dihpLHIpfHwoXCJmdWxmaWxsZWRcIj09PW4mJmIoaSxyKSxcInJlamVjdGVkXCI9PT1uJiZnKGkscikpfWZ1bmN0aW9uIHYodCxlKXt2YXIgcjt0cnl7aWYodD09PWUpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkEgcHJvbWlzZXMgY2FsbGJhY2sgY2Fubm90IHJldHVybiB0aGF0IHNhbWUgcHJvbWlzZS5cIik7aWYoZSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGV8fFwib2JqZWN0XCI9PT1uKGUpKSl7dmFyIG89ZS50aGVuO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG8pcmV0dXJuIG8uY2FsbChlLChmdW5jdGlvbihuKXtyfHwocj0hMCxlPT09bj95KHQsbik6Yih0LG4pKX0pLChmdW5jdGlvbihlKXtyfHwocj0hMCxnKHQsZSkpfSkpLCEwfX1jYXRjaChlKXtyZXR1cm4gcnx8Zyh0LGUpLCEwfXJldHVybiExfWZ1bmN0aW9uIGIodCxlKXt0IT09ZSYmdih0LGUpfHx5KHQsZSl9ZnVuY3Rpb24geSh0LGUpe1wicGVuZGluZ1wiPT09dC5fc3RhdGUmJih0Ll9zdGF0ZT1cInNldHRsZWRcIix0Ll9kYXRhPWUsbShBLHQpKX1mdW5jdGlvbiBnKHQsZSl7XCJwZW5kaW5nXCI9PT10Ll9zdGF0ZSYmKHQuX3N0YXRlPVwic2V0dGxlZFwiLHQuX2RhdGE9ZSxtKFMsdCkpfWZ1bmN0aW9uIHcodCl7dC5fdGhlbj10Ll90aGVuLmZvckVhY2gocCl9ZnVuY3Rpb24gQSh0KXt0Ll9zdGF0ZT1cImZ1bGZpbGxlZFwiLHcodCl9ZnVuY3Rpb24gUyh0KXt0Ll9zdGF0ZT1cInJlamVjdGVkXCIsdyh0KSwhdC5faGFuZGxlZCYmcyYmZ2xvYmFsLnByb2Nlc3MuZW1pdChcInVuaGFuZGxlZFJlamVjdGlvblwiLHQuX2RhdGEsdCl9ZnVuY3Rpb24gTyh0KXtnbG9iYWwucHJvY2Vzcy5lbWl0KFwicmVqZWN0aW9uSGFuZGxlZFwiLHQpfWZ1bmN0aW9uIGoodCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJvbWlzZSByZXNvbHZlciBcIit0K1wiIGlzIG5vdCBhIGZ1bmN0aW9uXCIpO2lmKHRoaXMgaW5zdGFuY2VvZiBqPT0hMSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnUHJvbWlzZSc6IFBsZWFzZSB1c2UgdGhlICduZXcnIG9wZXJhdG9yLCB0aGlzIG9iamVjdCBjb25zdHJ1Y3RvciBjYW5ub3QgYmUgY2FsbGVkIGFzIGEgZnVuY3Rpb24uXCIpO3RoaXMuX3RoZW49W10sZnVuY3Rpb24odCxlKXtmdW5jdGlvbiBuKHQpe2coZSx0KX10cnl7dCgoZnVuY3Rpb24odCl7YihlLHQpfSksbil9Y2F0Y2godCl7bih0KX19KHQsdGhpcyl9ai5wcm90b3R5cGU9e2NvbnN0cnVjdG9yOmosX3N0YXRlOlwicGVuZGluZ1wiLF90aGVuOm51bGwsX2RhdGE6dm9pZCAwLF9oYW5kbGVkOiExLHRoZW46ZnVuY3Rpb24odCxlKXt2YXIgbj17b3duZXI6dGhpcyx0aGVuOm5ldyB0aGlzLmNvbnN0cnVjdG9yKGYpLGZ1bGZpbGxlZDp0LHJlamVjdGVkOmV9O3JldHVybiFlJiYhdHx8dGhpcy5faGFuZGxlZHx8KHRoaXMuX2hhbmRsZWQ9ITAsXCJyZWplY3RlZFwiPT09dGhpcy5fc3RhdGUmJnMmJm0oTyx0aGlzKSksXCJmdWxmaWxsZWRcIj09PXRoaXMuX3N0YXRlfHxcInJlamVjdGVkXCI9PT10aGlzLl9zdGF0ZT9tKHAsbik6dGhpcy5fdGhlbi5wdXNoKG4pLG4udGhlbn0sY2F0Y2g6ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXMudGhlbihudWxsLHQpfX0sai5hbGw9ZnVuY3Rpb24odCl7aWYoIUFycmF5LmlzQXJyYXkodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5hbGwoKS5cIik7cmV0dXJuIG5ldyBqKChmdW5jdGlvbihlLG4pe3ZhciByPVtdLG89MDtmdW5jdGlvbiBpKHQpe3JldHVybiBvKyssZnVuY3Rpb24obil7clt0XT1uLC0tb3x8ZShyKX19Zm9yKHZhciBjLGE9MDthPHQubGVuZ3RoO2ErKykoYz10W2FdKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgYy50aGVuP2MudGhlbihpKGEpLG4pOnJbYV09YztvfHxlKHIpfSkpfSxqLnJhY2U9ZnVuY3Rpb24odCl7aWYoIUFycmF5LmlzQXJyYXkodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gUHJvbWlzZS5yYWNlKCkuXCIpO3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXtmb3IodmFyIHIsbz0wO288dC5sZW5ndGg7bysrKShyPXRbb10pJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiByLnRoZW4/ci50aGVuKGUsbik6ZShyKX0pKX0sai5yZXNvbHZlPWZ1bmN0aW9uKHQpe3JldHVybiB0JiZcIm9iamVjdFwiPT09bih0KSYmdC5jb25zdHJ1Y3Rvcj09PWo/dDpuZXcgaigoZnVuY3Rpb24oZSl7ZSh0KX0pKX0sai5yZWplY3Q9ZnVuY3Rpb24odCl7cmV0dXJuIG5ldyBqKChmdW5jdGlvbihlLG4pe24odCl9KSl9O3ZhciBFPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZTpqO2Z1bmN0aW9uIFAodCxlKXt2YXIgbj1lLmZldGNoLHI9ZS5YTUxIdHRwUmVxdWVzdCxvPWUudG9rZW4saT10O3JldHVybiBvJiYhZnVuY3Rpb24odCl7cmV0dXJuIHQuaW5kZXhPZihcImtpdC11cGxvYWQuY3NzXCIpPi0xfSh0KSYmKFwiVVJMU2VhcmNoUGFyYW1zXCJpbiB3aW5kb3c/KGk9bmV3IFVSTCh0KSkuc2VhcmNoUGFyYW1zLnNldChcInRva2VuXCIsbyk6aT1pK1wiP3Rva2VuPVwiK2VuY29kZVVSSUNvbXBvbmVudChvKSksaT1pLnRvU3RyaW5nKCksbmV3IEUoKGZ1bmN0aW9uKHQsZSl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbiluKGkse21vZGU6XCJjb3JzXCIsY2FjaGU6XCJkZWZhdWx0XCJ9KS50aGVuKChmdW5jdGlvbih0KXtpZih0Lm9rKXJldHVybiB0LnRleHQoKTt0aHJvdyBuZXcgRXJyb3IoXCJcIil9KSkudGhlbigoZnVuY3Rpb24oZSl7dChlKX0pKS5jYXRjaChlKTtlbHNlIGlmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHIpe3ZhciBvPW5ldyByO28uYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwoZnVuY3Rpb24oKXt0aGlzLnJlc3BvbnNlVGV4dD90KHRoaXMucmVzcG9uc2VUZXh0KTplKG5ldyBFcnJvcihcIlwiKSl9KSk7W1wiYWJvcnRcIixcImVycm9yXCIsXCJ0aW1lb3V0XCJdLm1hcCgoZnVuY3Rpb24odCl7by5hZGRFdmVudExpc3RlbmVyKHQsKGZ1bmN0aW9uKCl7ZShuZXcgRXJyb3IoXCJcIikpfSkpfSkpLG8ub3BlbihcIkdFVFwiLGkpLG8uc2VuZCgpfWVsc2V7ZShuZXcgRXJyb3IoXCJcIikpfX0pKX1mdW5jdGlvbiBfKHQsZSxuKXt2YXIgcj10O3JldHVybltbLyh1cmxcXChcIj8pXFwuXFwuXFwvXFwuXFwuXFwvXFwuXFwuL2csZnVuY3Rpb24odCxuKXtyZXR1cm5cIlwiLmNvbmNhdChuKS5jb25jYXQoZSl9XSxbLyh1cmxcXChcIj8pXFwuXFwuXFwvd2ViZm9udHMvZyxmdW5jdGlvbih0LHIpe3JldHVyblwiXCIuY29uY2F0KHIpLmNvbmNhdChlLFwiL3JlbGVhc2VzL3ZcIikuY29uY2F0KG4sXCIvd2ViZm9udHNcIil9XSxbLyh1cmxcXChcIj8paHR0cHM6XFwvXFwva2l0LWZyZWUoW14uXSkqXFwuZm9udGF3ZXNvbWVcXC5jb20vZyxmdW5jdGlvbih0LG4pe3JldHVyblwiXCIuY29uY2F0KG4pLmNvbmNhdChlKX1dXS5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1vKHQsMiksbj1lWzBdLGk9ZVsxXTtyPXIucmVwbGFjZShuLGkpfSkpLHJ9ZnVuY3Rpb24gRih0LG4pe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpmdW5jdGlvbigpe30sbz1uLmRvY3VtZW50fHxvLGk9YS5iaW5kKGEsbyxbXCJmYVwiLFwiZmFiXCIsXCJmYXNcIixcImZhclwiLFwiZmFsXCIsXCJmYWRcIixcImZha1wiXSk7dC5hdXRvQTExeS5lbmFibGVkJiZyKGkpO3ZhciB1PXQuc3Vic2V0UGF0aCYmdC5iYXNlVXJsK1wiL1wiK3Quc3Vic2V0UGF0aCxmPVt7aWQ6XCJmYS1tYWluXCIsYWRkT246dm9pZCAwLHVybDp1fV07aWYodC52NHNoaW0mJnQudjRzaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NC1zaGltc1wiLGFkZE9uOlwiLXY0LXNoaW1zXCJ9KSx0LnY1Rm9udEZhY2VTaGltJiZ0LnY1Rm9udEZhY2VTaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NS1mb250LWZhY2VcIixhZGRPbjpcIi12NS1mb250LWZhY2VcIn0pLHQudjRGb250RmFjZVNoaW0mJnQudjRGb250RmFjZVNoaW0uZW5hYmxlZCYmZi5wdXNoKHtpZDpcImZhLXY0LWZvbnQtZmFjZVwiLGFkZE9uOlwiLXY0LWZvbnQtZmFjZVwifSksIXUmJnQuY3VzdG9tSWNvbnNDc3NQYXRoKXt2YXIgcz10LmN1c3RvbUljb25zQ3NzUGF0aC5pbmRleE9mKFwia2l0LXVwbG9hZC5jc3NcIik+LTE/dC5iYXNlVXJsS2l0OnQuYmFzZVVybCxsPXMrXCIvXCIrdC5jdXN0b21JY29uc0Nzc1BhdGg7Zi5wdXNoKHtpZDpcImZhLWtpdC11cGxvYWRcIix1cmw6bH0pfXZhciBkPWYubWFwKChmdW5jdGlvbihyKXtyZXR1cm4gbmV3IEUoKGZ1bmN0aW9uKG8saSl7dmFyIGE9ci51cmx8fGModCx7YWRkT246ci5hZGRPbixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLHU9e2lkOnIuaWR9LGY9dC5zdWJzZXQ/dTplKGUoZSh7fSxuKSx1KSx7fSx7YmFzZVVybDp0LmJhc2VVcmwsdmVyc2lvbjp0LnZlcnNpb24saWQ6ci5pZCxjb250ZW50RmlsdGVyOmZ1bmN0aW9uKHQsZSl7cmV0dXJuIF8odCxlLmJhc2VVcmwsZS52ZXJzaW9uKX19KTtQKGEsbikudGhlbigoZnVuY3Rpb24odCl7byhDKHQsZikpfSkpLmNhdGNoKGkpfSkpfSkpO3JldHVybiBFLmFsbChkKX1mdW5jdGlvbiBDKHQsZSl7dmFyIG49ZS5jb250ZW50RmlsdGVyfHxmdW5jdGlvbih0LGUpe3JldHVybiB0fSxyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG4odCxlKSk7cmV0dXJuIHIuYXBwZW5kQ2hpbGQobyksci5tZWRpYT1cImFsbFwiLGUuaWQmJnIuc2V0QXR0cmlidXRlKFwiaWRcIixlLmlkKSxlJiZlLmRldGVjdGluZ0NvbmZsaWN0cyYmZS5kZXRlY3Rpb25JZ25vcmVBdHRyJiZyLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGUuZGV0ZWN0aW9uSWdub3JlQXR0cikpLHJ9ZnVuY3Rpb24gSSh0LG4pe24uYXV0b0ExMXk9dC5hdXRvQTExeS5lbmFibGVkLFwicHJvXCI9PT10LmxpY2Vuc2UmJihuLmF1dG9GZXRjaFN2Zz0hMCxuLmZldGNoU3ZnRnJvbT10LmJhc2VVcmwrXCIvcmVsZWFzZXMvXCIrKFwibGF0ZXN0XCI9PT10LnZlcnNpb24/XCJsYXRlc3RcIjpcInZcIi5jb25jYXQodC52ZXJzaW9uKSkrXCIvc3Znc1wiLG4uZmV0Y2hVcGxvYWRlZFN2Z0Zyb209dC51cGxvYWRzVXJsKTt2YXIgcj1bXTtyZXR1cm4gdC52NHNoaW0uZW5hYmxlZCYmci5wdXNoKG5ldyBFKChmdW5jdGlvbihyLG8pe1AoYyh0LHthZGRPbjpcIi12NC1zaGltc1wiLG1pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksbikudGhlbigoZnVuY3Rpb24odCl7cihVKHQsZShlKHt9LG4pLHt9LHtpZDpcImZhLXY0LXNoaW1zXCJ9KSkpfSkpLmNhdGNoKG8pfSkpKSxyLnB1c2gobmV3IEUoKGZ1bmN0aW9uKHIsbyl7UCh0LnN1YnNldFBhdGgmJnQuYmFzZVVybCtcIi9cIit0LnN1YnNldFBhdGh8fGModCx7bWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSxuKS50aGVuKChmdW5jdGlvbih0KXt2YXIgbz1VKHQsZShlKHt9LG4pLHt9LHtpZDpcImZhLW1haW5cIn0pKTtyKGZ1bmN0aW9uKHQsZSl7dmFyIG49ZSYmdm9pZCAwIT09ZS5hdXRvRmV0Y2hTdmc/ZS5hdXRvRmV0Y2hTdmc6dm9pZCAwLHI9ZSYmdm9pZCAwIT09ZS5hdXRvQTExeT9lLmF1dG9BMTF5OnZvaWQgMDt2b2lkIDAhPT1yJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtYXV0by1hMTF5XCIscj9cInRydWVcIjpcImZhbHNlXCIpO24mJih0LnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKFwiZGF0YS1hdXRvLWZldGNoLXN2Z1wiKSksdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZldGNoLXN2Zy1mcm9tXCIsZS5mZXRjaFN2Z0Zyb20pLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1mZXRjaC11cGxvYWRlZC1zdmctZnJvbVwiLGUuZmV0Y2hVcGxvYWRlZFN2Z0Zyb20pKTtyZXR1cm4gdH0obyxuKSl9KSkuY2F0Y2gobyl9KSkpLEUuYWxsKHIpfWZ1bmN0aW9uIFUodCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU0NSSVBUXCIpLHI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodCk7cmV0dXJuIG4uYXBwZW5kQ2hpbGQociksbi5yZWZlcnJlclBvbGljeT1cInN0cmljdC1vcmlnaW5cIixlLmlkJiZuLnNldEF0dHJpYnV0ZShcImlkXCIsZS5pZCksZSYmZS5kZXRlY3RpbmdDb25mbGljdHMmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmbi5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxufWZ1bmN0aW9uIFQodCl7dmFyIGUsbj1bXSxyPWRvY3VtZW50LG89ci5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwsaT0obz8vXmxvYWRlZHxeYy86L15sb2FkZWR8Xml8XmMvKS50ZXN0KHIucmVhZHlTdGF0ZSk7aXx8ci5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGU9ZnVuY3Rpb24oKXtmb3Ioci5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLGUpLGk9MTtlPW4uc2hpZnQoKTspZSgpfSksaT9zZXRUaW1lb3V0KHQsMCk6bi5wdXNoKHQpfWZ1bmN0aW9uIEwodCl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXImJm5ldyBNdXRhdGlvbk9ic2VydmVyKHQpLm9ic2VydmUoZG9jdW1lbnQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSl9dHJ5e2lmKHdpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZyl7dmFyIGs9d2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnLHg9e2RldGVjdGluZ0NvbmZsaWN0czprLmRldGVjdENvbmZsaWN0c1VudGlsJiZuZXcgRGF0ZTw9bmV3IERhdGUoay5kZXRlY3RDb25mbGljdHNVbnRpbCksZGV0ZWN0aW9uSWdub3JlQXR0cjpcImRhdGEtZmEtZGV0ZWN0aW9uLWlnbm9yZVwiLGZldGNoOndpbmRvdy5mZXRjaCx0b2tlbjprLnRva2VuLFhNTEh0dHBSZXF1ZXN0OndpbmRvdy5YTUxIdHRwUmVxdWVzdCxkb2N1bWVudDpkb2N1bWVudH0sTT1kb2N1bWVudC5jdXJyZW50U2NyaXB0LE49TT9NLnBhcmVudEVsZW1lbnQ6ZG9jdW1lbnQuaGVhZDsoZnVuY3Rpb24oKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e30sZT1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e307cmV0dXJuXCJqc1wiPT09dC5tZXRob2Q/SSh0LGUpOlwiY3NzXCI9PT10Lm1ldGhvZD9GKHQsZSwoZnVuY3Rpb24odCl7VCh0KSxMKHQpfSkpOnZvaWQgMH0pKGsseCkudGhlbigoZnVuY3Rpb24odCl7dC5tYXAoKGZ1bmN0aW9uKHQpe3RyeXtOLmluc2VydEJlZm9yZSh0LE0/TS5uZXh0U2libGluZzpudWxsKX1jYXRjaChlKXtOLmFwcGVuZENoaWxkKHQpfX0pKSx4LmRldGVjdGluZ0NvbmZsaWN0cyYmTSYmVCgoZnVuY3Rpb24oKXtNLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKHguZGV0ZWN0aW9uSWdub3JlQXR0cikpO3ZhciB0PWZ1bmN0aW9uKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtyZXR1cm4gZSYmZS5kZXRlY3Rpb25JZ25vcmVBdHRyJiZuLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGUuZGV0ZWN0aW9uSWdub3JlQXR0cikpLG4uc3JjPWModCx7YmFzZUZpbGVuYW1lOlwiY29uZmxpY3QtZGV0ZWN0aW9uXCIsZmlsZVN1ZmZpeDpcImpzXCIsc3ViZGlyOlwianNcIixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLG59KGsseCk7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0KX0pKX0pKS5jYXRjaCgoZnVuY3Rpb24odCl7Y29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChcIkZvbnQgQXdlc29tZSBLaXQ6XCIsXCIgXCIpLmNvbmNhdCh0KSl9KSl9fWNhdGNoKHQpe2NvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoXCJGb250IEF3ZXNvbWUgS2l0OlwiLFwiIFwiKS5jb25jYXQodCkpfX0pKTsiLCJpbXBvcnQgc2hpcCBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmNsYXNzIGJvYXJkQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXNIaXQgPSBmYWxzZTtcbiAgICB0aGlzLnNoaXBOYW1lID0gbnVsbDtcbiAgICB0aGlzLmlzU2hpcCA9IGZhbHNlO1xuICB9XG5cbiAgaGl0Q2VsbCA9ICgpID0+IHtcbiAgICB0aGlzLmlzSGl0ID0gdHJ1ZTtcbiAgfTtcbiAgbWFrZVNoaXBDZWxsID0gKHNvbWVTaGlwTmFtZSkgPT4ge1xuICAgIGlmICghdGhpcy5pc1NoaXApIHtcbiAgICAgIHRoaXMuc2hpcE5hbWUgPSBgJHtzb21lU2hpcE5hbWV9YDtcbiAgICB9XG4gICAgdGhpcy5pc1NoaXAgPSB0cnVlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnYW1lQm9hcmQocG9zaXRpb25zKSB7XG4gIGxldCBib2FyZCA9IFtdO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgYm9hcmRbaV0gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICBib2FyZFtpXVtqXSA9IG5ldyBib2FyZENlbGwoKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hpcHMgPSB7XG4gICAgc2hpcDE6IHNoaXAoNSksXG4gICAgc2hpcDI6IHNoaXAoNCksXG4gICAgc2hpcDM6IHNoaXAoMyksXG4gICAgc2hpcDQ6IHNoaXAoMyksXG4gICAgc2hpcDU6IHNoaXAoMiksXG4gIH07XG4gIGZvciAobGV0IHAgPSAwOyBwIDwgcG9zaXRpb25zLmxlbmd0aDsgcCsrKSB7XG4gICAgbGV0IHN0YXJ0ID0gcG9zaXRpb25zW3BdLnN0YXJ0O1xuICAgIGxldCBlbmQgPSBwb3NpdGlvbnNbcF0uZW5kO1xuICAgIGlmIChzdGFydFswXSA9PT0gZW5kWzBdKSB7XG4gICAgICBmb3IgKGxldCBpID0gc3RhcnRbMV07IGkgPD0gZW5kWzFdOyBpKyspIHtcbiAgICAgICAgYm9hcmRbc3RhcnRbMF1dW2ldLm1ha2VTaGlwQ2VsbChgc2hpcCR7cCArIDF9YCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGogPSBzdGFydFswXTsgaiA8PSBlbmRbMF07IGorKykge1xuICAgICAgICBib2FyZFtqXVtzdGFydFsxXV0ubWFrZVNoaXBDZWxsKGBzaGlwJHtwICsgMX1gKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChwb3NpdGlvbikgPT4ge1xuICAgIGlmICghYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5pc0hpdCkge1xuICAgICAgYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5oaXRDZWxsKCk7XG4gICAgfVxuICAgIGlmIChib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLmlzU2hpcCkge1xuICAgICAgYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5oaXRDZWxsKCk7XG4gICAgICBzaGlwc1tib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLnNoaXBOYW1lXS5oaXQoKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGFsbFN1bmsgPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgc2hpcHNbXCJzaGlwMVwiXS5pc1N1bmsoKSAmJlxuICAgICAgc2hpcHNbXCJzaGlwMlwiXS5pc1N1bmsoKSAmJlxuICAgICAgc2hpcHNbXCJzaGlwM1wiXS5pc1N1bmsoKSAmJlxuICAgICAgc2hpcHNbXCJzaGlwNFwiXS5pc1N1bmsoKSAmJlxuICAgICAgc2hpcHNbXCJzaGlwNVwiXS5pc1N1bmsoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IHNoaXBzLCBib2FyZCwgYWxsU3VuaywgcmVjZWl2ZUF0dGFjayB9O1xufVxuIiwiaW1wb3J0IGdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmQuanNcIjtcbmltcG9ydCB1cGRhdGVVSSBmcm9tIFwiLi9pbmRleC5qc1wiO1xubGV0IGZsYWcgPSAwO1xuZXhwb3J0IGxldCBnYW1lV2luU3RhdHVzID0gMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUdhbWVXaW5TdGF0dXMoKXtcbiAgZ2FtZVdpblN0YXR1cyA9IDA7XG4gIGNwdVBsYXllciA9IGdhbWVCb2FyZChjcHVQb3NpdGlvbnMpO1xufVxuXG5leHBvcnQgbGV0IHBsYXllcjtcblxuZXhwb3J0IGNvbnN0IHBsYWNlUGxheWVyU2hpcHMgPSAocG9zaXRpb25zKSA9PiB7XG4gIHBsYXllciA9IGdhbWVCb2FyZChwb3NpdGlvbnMpO1xufTtcblxubGV0IGNwdVBvc2l0aW9ucyA9IFtcbiAgeyBzdGFydDogWzEsIDFdLCBlbmQ6IFsxLCA1XSB9LFxuICB7IHN0YXJ0OiBbMiwgMl0sIGVuZDogWzIsIDVdIH0sXG4gIHsgc3RhcnQ6IFs3LCAxMF0sIGVuZDogWzksIDEwXSB9LFxuICB7IHN0YXJ0OiBbMTAsIDFdLCBlbmQ6IFsxMCwgM10gfSxcbiAgeyBzdGFydDogWzksIDZdLCBlbmQ6IFs5LCA3XSB9LFxuXTtcblxuZXhwb3J0IGxldCBjcHVQbGF5ZXIgPSBnYW1lQm9hcmQoY3B1UG9zaXRpb25zKTtcblxuZnVuY3Rpb24gZ2FtZVN0YXR1c0NoZWNrKCkge1xuICBpZiAocGxheWVyLmFsbFN1bmsoKSkge1xuICAgIGFsZXJ0KFwiQ1BVIHdpbnMgdGhlIGdhbWUhXCIpO1xuICAgIGdhbWVXaW5TdGF0dXMgPSAxO1xuICB9IGVsc2UgaWYgKGNwdVBsYXllci5hbGxTdW5rKCkpIHtcbiAgICBhbGVydChcIlBsYXllciB3aW5zIHRoZSBnYW1lIVwiKTtcbiAgICBnYW1lV2luU3RhdHVzID0gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21Db29yZGluYXRlR2VuZXJhdG9yKCkge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gIGxldCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTtcbiAgcmV0dXJuIFtpLCBqXTtcbn1cblxuZnVuY3Rpb24gY3B1TW92ZShwbGF5ZXIpIHtcbiAgbGV0IGksIGo7XG4gIGRvIHtcbiAgICBbaSwgal0gPSByYW5kb21Db29yZGluYXRlR2VuZXJhdG9yKCk7XG4gIH0gd2hpbGUgKHBsYXllci5ib2FyZFtpXVtqXS5pc0hpdCk7XG4gIHBsYXllci5yZWNlaXZlQXR0YWNrKFtpLCBqXSk7XG4gIGdhbWVTdGF0dXNDaGVjaygpO1xuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwbGF5ZXJNb3ZlKGNwdVBsYXllciwgcG9zaXRpb25feCwgcG9zaXRpb25feSkge1xuICBpZiAoY3B1UGxheWVyLmJvYXJkW3Bvc2l0aW9uX3hdW3Bvc2l0aW9uX3ldLmlzSGl0KSB7XG4gICAgYWxlcnQoXCJjZWxsIGlzIGFscmVhZHkgaGl0IVwiKTtcbiAgfSBlbHNlIHtcbiAgICBjcHVQbGF5ZXIucmVjZWl2ZUF0dGFjayhbcG9zaXRpb25feCwgcG9zaXRpb25feV0pO1xuICAgIGdhbWVTdGF0dXNDaGVjaygpO1xuICAgIGNwdU1vdmUocGxheWVyKTtcbiAgICB1cGRhdGVVSSgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQmF0dGxlU2hpcFwiO1xuICByZXR1cm4gaGVhZGVyO1xufVxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IFwiLi9mb250YXdlc29tZS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9jb21tb25Gb290ZXIuanNcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5pbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tIFwiLi9VSS5qc1wiO1xuaW1wb3J0IHNoaXBEaWFsb2dNYWtlciBmcm9tIFwiLi9zaGlwUGxhY2VtZW50RGlhbG9nLmpzXCI7XG5pbXBvcnQgeyBnYW1lV2luU3RhdHVzIH0gZnJvbSBcIi4vZ2FtZVBsYXlcIjtcbmltcG9ydCB7IHRvZ2dsZUdhbWVXaW5TdGF0dXMgfSBmcm9tIFwiLi9nYW1lUGxheVwiO1xubGV0IGJlZ2luTW9kZSA9IDE7XG5cbmZ1bmN0aW9uIHBsYWNlRGlhbG9nKGRpYWxvZykge1xuICBjb25zdCBkaWFsb2dXaWR0aCA9IGRpYWxvZy5vZmZzZXRXaWR0aDtcbiAgY29uc3QgZGlhbG9nSGVpZ2h0ID0gZGlhbG9nLm9mZnNldEhlaWdodDtcbiAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3QgbGVmdFBvc2l0aW9uID0gdmlld3BvcnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDI7XG4gIGNvbnN0IHRvcFBvc2l0aW9uID0gdmlld3BvcnRIZWlnaHQgLyAyIC0gZGlhbG9nSGVpZ2h0IC8gMjtcbiAgZGlhbG9nLnN0eWxlLmxlZnQgPSBgJHtsZWZ0UG9zaXRpb259cHhgO1xuICBkaWFsb2cuc3R5bGUudG9wID0gYCR7dG9wUG9zaXRpb259cHhgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVVSSgpIHtcbiAgaWYgKGdhbWVXaW5TdGF0dXMgPT09IDEpIHtcbiAgICBiZWdpbk1vZGUgPSAxO1xuICAgIHRvZ2dsZUdhbWVXaW5TdGF0dXMoKTtcbiAgfVxuICBpZiAoYmVnaW5Nb2RlID09PSAxKSB7XG4gICAgYmVnaW5Nb2RlID0gMDtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgLy8gY29uc3QgbWFpbiA9IHVwZGF0ZURpc3BsYXkoKTtcbiAgICBjb25zdCBkaWFsb2cgPSBzaGlwRGlhbG9nTWFrZXIoKTtcbiAgICAvLyBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBib2R5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBib2R5LmFwcGVuZChoZWFkZXIsIGRpYWxvZyk7XG4gICAgaWYgKCFkaWFsb2cub3Blbikge1xuICAgICAgZGlhbG9nLnNob3dNb2RhbCgpOyAvLyBPcGVuIHRoZSBkaWFsb2cgbW9kYWxseVxuICAgIH1cbiAgICAvLyBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgcGxhY2VEaWFsb2coZGlhbG9nKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3QgbWFpbiA9IHVwZGF0ZURpc3BsYXkoKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBib2R5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBib2R5LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XG4gICAgYmVnaW5Nb2RlID0gMDtcbiAgfVxufVxuXG51cGRhdGVVSSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcChsZW5ndGgpIHtcbiAgbGV0IG51bVRpbWVzSGl0ID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIG51bVRpbWVzSGl0Kys7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gKG51bVRpbWVzSGl0ID49IGxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB7IGhpdCwgaXNTdW5rIH07XG59XG5cbiIsImltcG9ydCB1cGRhdGVVSSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgcGxhY2VQbGF5ZXJTaGlwcyB9IGZyb20gXCIuL2dhbWVQbGF5LmpzXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRWxlbWVudCh0eXBlLCBjbGFzc2VzID0gW10sIG9wdGlvbnMpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAoY29uc3Qgc29tZUNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc29tZUNsYXNzKTtcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGtleSA9PT0gXCJ0ZXh0Q29udGVudFwiIHx8IGtleSA9PT0gXCJ0eXBlXCIgfHwga2V5ID09PSBcInZhbHVlXCIpIHtcbiAgICAgIGVsZW1lbnRba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zW2tleV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmNvbnN0IHRpdGxlID0gZ2VuZXJhdGVFbGVtZW50KFwiZGl2XCIsIFtcImRpYWxvZy10aXRsZVwiXSwge1xuICB0ZXh0Q29udGVudDogXCJFbnRlciB0aGUgU2hpcCBTdGFydC1wb2ludCBDb29yZGluYXRlcywgY2hvb3NlIGFsaWdubWVudFwiLFxufSk7XG5jb25zdCBwbGFjZVNoaXBzID0gZ2VuZXJhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcInBsYWNlLXNoaXBzLWJ1dHRvblwiXSwge1xuICB0ZXh0Q29udGVudDogXCJQbGFjZSBTaGlwc1wiLFxufSk7XG5jb25zdCBzaGlwMSA9IGdlbmVyYXRlRWxlbWVudChcImlucHV0XCIsIFtcInNoaXAtY29vcmRpbmF0ZS1pbnB1dFwiXSwge1xuICB0eXBlOiBcInRleHRcIixcbiAgaWQ6IFwic2hpcDFcIixcbn0pO1xuY29uc3Qgc2hpcDIgPSBnZW5lcmF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXCJzaGlwLWNvb3JkaW5hdGUtaW5wdXRcIl0sIHtcbiAgdHlwZTogXCJ0ZXh0XCIsXG4gIGlkOiBcInNoaXAyXCIsXG59KTtcbmNvbnN0IHNoaXAzID0gZ2VuZXJhdGVFbGVtZW50KFwiaW5wdXRcIiwgW1wic2hpcC1jb29yZGluYXRlLWlucHV0XCJdLCB7XG4gIHR5cGU6IFwidGV4dFwiLFxuICBpZDogXCJzaGlwM1wiLFxufSk7XG5jb25zdCBzaGlwNCA9IGdlbmVyYXRlRWxlbWVudChcImlucHV0XCIsIFtcInNoaXAtY29vcmRpbmF0ZS1pbnB1dFwiXSwge1xuICB0eXBlOiBcInRleHRcIixcbiAgaWQ6IFwic2hpcDRcIixcbn0pO1xuY29uc3Qgc2hpcDUgPSBnZW5lcmF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXCJzaGlwLWNvb3JkaW5hdGUtaW5wdXRcIl0sIHtcbiAgdHlwZTogXCJ0ZXh0XCIsXG4gIGlkOiBcInNoaXA1XCIsXG59KTtcbmNvbnN0IHNoaXAxTGFiZWwgPSBnZW5lcmF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBbXCJzaGlwLWNvb3JkaW5hdGUtbGFiZWxcIl0sIHtcbiAgZm9yOiBcInNoaXAxXCIsXG4gIHRleHRDb250ZW50OiBcInNoaXAxIG9mIGxlbmd0aCA1OlwiLFxufSk7XG5jb25zdCBzaGlwMkxhYmVsID0gZ2VuZXJhdGVFbGVtZW50KFwibGFiZWxcIiwgW1wic2hpcC1jb29yZGluYXRlLWxhYmVsXCJdLCB7XG4gIGZvcjogXCJzaGlwMlwiLFxuICB0ZXh0Q29udGVudDogXCJzaGlwMiBvZiBsZW5ndGggNDpcIixcbn0pO1xuY29uc3Qgc2hpcDNMYWJlbCA9IGdlbmVyYXRlRWxlbWVudChcImxhYmVsXCIsIFtcInNoaXAtY29vcmRpbmF0ZS1sYWJlbFwiXSwge1xuICBmb3I6IFwic2hpcDNcIixcbiAgdGV4dENvbnRlbnQ6IFwic2hpcDMgb2YgbGVuZ3RoIDM6XCIsXG59KTtcbmNvbnN0IHNoaXA0TGFiZWwgPSBnZW5lcmF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBbXCJzaGlwLWNvb3JkaW5hdGUtbGFiZWxcIl0sIHtcbiAgZm9yOiBcInNoaXA0XCIsXG4gIHRleHRDb250ZW50OiBcInNoaXA0IG9mIGxlbmd0aCAzOlwiLFxufSk7XG5jb25zdCBzaGlwNUxhYmVsID0gZ2VuZXJhdGVFbGVtZW50KFwibGFiZWxcIiwgW1wic2hpcC1jb29yZGluYXRlLWxhYmVsXCJdLCB7XG4gIGZvcjogXCJzaGlwNVwiLFxuICB0ZXh0Q29udGVudDogXCJzaGlwNSBvZiBsZW5ndGggMjpcIixcbn0pO1xuY29uc3Qgc2hpcDFBbGlnbm1lbnQgPSBnZW5lcmF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgW1wic2hpcC1hbGlnbm1lbnRcIl0sIHtcbiAgaWQ6IFwibGlzdDFcIixcbn0pO1xuY29uc3Qgc2hpcDFfb3B0aW9uX3ggPSBnZW5lcmF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgW10sIHtcbiAgdmFsdWU6IFwieFwiLFxuICB0ZXh0Q29udGVudDogXCJ4XCIsXG59KTtcbmNvbnN0IHNoaXAxX29wdGlvbl95ID0gZ2VuZXJhdGVFbGVtZW50KFwib3B0aW9uXCIsIFtdLCB7XG4gIHZhbHVlOiBcInlcIixcbiAgdGV4dENvbnRlbnQ6IFwieVwiLFxufSk7XG5jb25zdCBzaGlwMkFsaWdubWVudCA9IGdlbmVyYXRlRWxlbWVudChcInNlbGVjdFwiLCBbXCJzaGlwLWFsaWdubWVudFwiXSwge1xuICBpZDogXCJsaXN0MlwiLFxufSk7XG5jb25zdCBzaGlwMl9vcHRpb25feCA9IGdlbmVyYXRlRWxlbWVudChcIm9wdGlvblwiLCBbXSwge1xuICB2YWx1ZTogXCJ4XCIsXG4gIHRleHRDb250ZW50OiBcInhcIixcbn0pO1xuY29uc3Qgc2hpcDJfb3B0aW9uX3kgPSBnZW5lcmF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgW10sIHtcbiAgdmFsdWU6IFwieVwiLFxuICB0ZXh0Q29udGVudDogXCJ5XCIsXG59KTtcbmNvbnN0IHNoaXAzQWxpZ25tZW50ID0gZ2VuZXJhdGVFbGVtZW50KFwic2VsZWN0XCIsIFtcInNoaXAtYWxpZ25tZW50XCJdLCB7XG4gIGlkOiBcImxpc3QxXCIsXG59KTtcbmNvbnN0IHNoaXAzX29wdGlvbl94ID0gZ2VuZXJhdGVFbGVtZW50KFwib3B0aW9uXCIsIFtdLCB7XG4gIHZhbHVlOiBcInhcIixcbiAgdGV4dENvbnRlbnQ6IFwieFwiLFxufSk7XG5jb25zdCBzaGlwM19vcHRpb25feSA9IGdlbmVyYXRlRWxlbWVudChcIm9wdGlvblwiLCBbXSwge1xuICB2YWx1ZTogXCJ5XCIsXG4gIHRleHRDb250ZW50OiBcInlcIixcbn0pO1xuY29uc3Qgc2hpcDRBbGlnbm1lbnQgPSBnZW5lcmF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgW1wic2hpcC1hbGlnbm1lbnRcIl0sIHtcbiAgaWQ6IFwibGlzdDFcIixcbn0pO1xuY29uc3Qgc2hpcDRfb3B0aW9uX3ggPSBnZW5lcmF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgW10sIHtcbiAgdmFsdWU6IFwieFwiLFxuICB0ZXh0Q29udGVudDogXCJ4XCIsXG59KTtcbmNvbnN0IHNoaXA0X29wdGlvbl95ID0gZ2VuZXJhdGVFbGVtZW50KFwib3B0aW9uXCIsIFtdLCB7XG4gIHZhbHVlOiBcInlcIixcbiAgdGV4dENvbnRlbnQ6IFwieVwiLFxufSk7XG5jb25zdCBzaGlwNUFsaWdubWVudCA9IGdlbmVyYXRlRWxlbWVudChcInNlbGVjdFwiLCBbXCJzaGlwLWFsaWdubWVudFwiXSwge1xuICBpZDogXCJsaXN0MVwiLFxufSk7XG5jb25zdCBzaGlwNV9vcHRpb25feCA9IGdlbmVyYXRlRWxlbWVudChcIm9wdGlvblwiLCBbXSwge1xuICB2YWx1ZTogXCJ4XCIsXG4gIHRleHRDb250ZW50OiBcInhcIixcbn0pO1xuY29uc3Qgc2hpcDVfb3B0aW9uX3kgPSBnZW5lcmF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgW10sIHtcbiAgdmFsdWU6IFwieVwiLFxuICB0ZXh0Q29udGVudDogXCJ5XCIsXG59KTtcbnNoaXAxLnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXAyLnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXAzLnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXA0LnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXA1LnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXAxQWxpZ25tZW50LmFwcGVuZChzaGlwMV9vcHRpb25feCwgc2hpcDFfb3B0aW9uX3kpO1xuc2hpcDJBbGlnbm1lbnQuYXBwZW5kKHNoaXAyX29wdGlvbl94LCBzaGlwMl9vcHRpb25feSk7XG5zaGlwM0FsaWdubWVudC5hcHBlbmQoc2hpcDNfb3B0aW9uX3gsIHNoaXAzX29wdGlvbl95KTtcbnNoaXA0QWxpZ25tZW50LmFwcGVuZChzaGlwNF9vcHRpb25feCwgc2hpcDRfb3B0aW9uX3kpO1xuc2hpcDVBbGlnbm1lbnQuYXBwZW5kKHNoaXA1X29wdGlvbl94LCBzaGlwNV9vcHRpb25feSk7XG5jb25zdCBzaGlwMURpdiA9IGdlbmVyYXRlRWxlbWVudChcImRpdlwiLCBbXCJzaGlwMS1kaXZcIl0pO1xuY29uc3Qgc2hpcDJEaXYgPSBnZW5lcmF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wic2hpcDItZGl2XCJdKTtcbmNvbnN0IHNoaXAzRGl2ID0gZ2VuZXJhdGVFbGVtZW50KFwiZGl2XCIsIFtcInNoaXAzLWRpdlwiXSk7XG5jb25zdCBzaGlwNERpdiA9IGdlbmVyYXRlRWxlbWVudChcImRpdlwiLCBbXCJzaGlwNC1kaXZcIl0pO1xuY29uc3Qgc2hpcDVEaXYgPSBnZW5lcmF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wic2hpcDUtZGl2XCJdKTtcbnNoaXAxRGl2LmFwcGVuZChzaGlwMUxhYmVsLCBzaGlwMSwgc2hpcDFBbGlnbm1lbnQpO1xuc2hpcDJEaXYuYXBwZW5kKHNoaXAyTGFiZWwsIHNoaXAyLCBzaGlwMkFsaWdubWVudCk7XG5zaGlwM0Rpdi5hcHBlbmQoc2hpcDNMYWJlbCwgc2hpcDMsIHNoaXAzQWxpZ25tZW50KTtcbnNoaXA0RGl2LmFwcGVuZChzaGlwNExhYmVsLCBzaGlwNCwgc2hpcDRBbGlnbm1lbnQpO1xuc2hpcDVEaXYuYXBwZW5kKHNoaXA1TGFiZWwsIHNoaXA1LCBzaGlwNUFsaWdubWVudCk7XG5wbGFjZVNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmb3JtU3VibWl0RXZlbnQpO1xuZm9ybS5hcHBlbmQoXG4gIHRpdGxlLFxuICBzaGlwMURpdixcbiAgc2hpcDJEaXYsXG4gIHNoaXAzRGl2LFxuICBzaGlwNERpdixcbiAgc2hpcDVEaXYsXG4gIHBsYWNlU2hpcHNcbik7XG5kaWFsb2cuYXBwZW5kKGZvcm0pO1xuXG5mdW5jdGlvbiBjaGVja1ZhbGlkaXR5KGZpbmFsUG9zaXRpb25zKSB7XG4gIGxldCByZXN1bHQgPSB0cnVlO1xuICBmb3IgKGNvbnN0IHBvcyBvZiBmaW5hbFBvc2l0aW9ucykge1xuICAgIGlmIChcbiAgICAgIHBvcy5zdGFydFswXSA8PSAxMCAmJlxuICAgICAgcG9zLnN0YXJ0WzBdID49IDEgJiZcbiAgICAgIHBvcy5lbmRbMF0gPD0gMTAgJiZcbiAgICAgIHBvcy5lbmRbMF0gPj0gMSAmJlxuICAgICAgcG9zLnN0YXJ0WzFdIDw9IDEwICYmXG4gICAgICBwb3Muc3RhcnRbMV0gPj0gMSAmJlxuICAgICAgcG9zLmVuZFsxXSA8PSAxMCAmJlxuICAgICAgcG9zLmVuZFsxXSA+PSAxXG4gICAgKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZvcm1TdWJtaXRFdmVudChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbGVuZ3RocyA9IFs0LCAzLCAyLCAyLCAxXTtcbiAgbGV0IHBvc2l0aW9ucyA9IFtcbiAgICBzaGlwMS52YWx1ZSxcbiAgICBzaGlwMi52YWx1ZSxcbiAgICBzaGlwMy52YWx1ZSxcbiAgICBzaGlwNC52YWx1ZSxcbiAgICBzaGlwNS52YWx1ZSxcbiAgXTtcbiAgbGV0IGFsaWdubWVudHMgPSBbXG4gICAgc2hpcDFBbGlnbm1lbnQudmFsdWUsXG4gICAgc2hpcDJBbGlnbm1lbnQudmFsdWUsXG4gICAgc2hpcDNBbGlnbm1lbnQudmFsdWUsXG4gICAgc2hpcDRBbGlnbm1lbnQudmFsdWUsXG4gICAgc2hpcDVBbGlnbm1lbnQudmFsdWUsXG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgcG9zaXRpb25zW2ldID0gcG9zaXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICBwb3NpdGlvbnNbaV1bMF0gPSBwYXJzZUludChwb3NpdGlvbnNbaV1bMF0pO1xuICAgIHBvc2l0aW9uc1tpXVsxXSA9IHBhcnNlSW50KHBvc2l0aW9uc1tpXVsxXSk7XG4gIH1cbiAgbGV0IGZpbmFsUG9zaXRpb25zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgaWYgKGFsaWdubWVudHNbaV0gPT09IFwieFwiKSB7XG4gICAgICBmaW5hbFBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgc3RhcnQ6IHBvc2l0aW9uc1tpXSxcbiAgICAgICAgZW5kOiBbcG9zaXRpb25zW2ldWzBdICsgbGVuZ3Roc1tpXSwgcG9zaXRpb25zW2ldWzFdXSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaW5hbFBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgc3RhcnQ6IHBvc2l0aW9uc1tpXSxcbiAgICAgICAgZW5kOiBbcG9zaXRpb25zW2ldWzBdLCBwb3NpdGlvbnNbaV1bMV0gKyBsZW5ndGhzW2ldXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZihjaGVja1ZhbGlkaXR5KGZpbmFsUG9zaXRpb25zKSl7XG4gICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgcGxhY2VQbGF5ZXJTaGlwcyhmaW5hbFBvc2l0aW9ucyk7XG4gICAgdXBkYXRlVUkoKTtcbiAgICBjb25zb2xlLmxvZyhcInVwZGF0ZVVJIGNhbGxlZFwiKTtcbiAgfWVsc2V7XG4gICAgYWxlcnQoXCJpbnZhbGlkIGNvb3JkaW5hdGVzIVwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwRGlhbG9nTWFrZXIoKSB7XG4gIHJldHVybiBkaWFsb2c7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21vZHVsZXMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=