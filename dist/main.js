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
/* harmony export */   placePlayerShips: () => (/* binding */ placePlayerShips),
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   playerMove: () => (/* binding */ playerMove)
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/modules/gameBoard.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/modules/index.js");


let flag = 0;
let gameWinStatus = 0;

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

const cpuPlayer = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cpuPositions);

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
  if (beginMode === 1) {
    const body = document.querySelector("body");
    const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    // const main = updateDisplay();
    const dialog = (0,_shipPlacementDialog_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    // const footer = createFooter();
    body.textContent = "";
    body.append(header, dialog);
    dialog.showModal();
    placeDialog(dialog);
    beginMode = 0;
  }else{
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
    (0,_gamePlay_js__WEBPACK_IMPORTED_MODULE_1__.placePlayerShips)(finalPositions);
    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLCtIQUE0QztBQUN4Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSw2QkFBNkIsY0FBYyxlQUFlLDhCQUE4Qiw2QkFBNkIsR0FBRyxnQkFBZ0IsNkJBQTZCLDBDQUEwQyxHQUFHLFVBQVUsa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLEdBQUcsWUFBWSxrQkFBa0Isd0JBQXdCLG9CQUFvQiw2QkFBNkIseUJBQXlCLHNCQUFzQix5QkFBeUIsR0FBRyxVQUFVLGtCQUFrQixnQkFBZ0Isa0NBQWtDLGtCQUFrQixHQUFHLDhCQUE4QixrQkFBa0IsMkNBQTJDLDRCQUE0QixHQUFHLDhCQUE4QixpQkFBaUIsZ0JBQWdCLDRCQUE0QixHQUFHLG9CQUFvQixvQkFBb0IsR0FBRyxnQkFBZ0IsaUJBQWlCLGdCQUFnQiw0QkFBNEIsNEJBQTRCLEdBQUcseUNBQXlDLGlCQUFpQixnQkFBZ0IsNEJBQTRCLDBCQUEwQixHQUFHLCtCQUErQixpQkFBaUIsZ0JBQWdCLDRCQUE0Qix5Q0FBeUMsR0FBRyxTQUFTLGlCQUFpQixrQkFBa0Isa0JBQWtCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixjQUFjLEdBQUcsYUFBYSxrQkFBa0Isb0JBQW9CLHdCQUF3Qiw0QkFBNEIsY0FBYyxvQkFBb0IsR0FBRyxrQkFBa0IscUJBQXFCLG9CQUFvQixrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLHdCQUF3QixrQkFBa0Isd0JBQXdCLDRCQUE0QiwyQkFBMkIsdUJBQXVCLHdCQUF3QixvQkFBb0IsdUJBQXVCLHNCQUFzQixHQUFHLDhCQUE4QixvQkFBb0IsR0FBRyxXQUFXLGtCQUFrQix3QkFBd0IsNEJBQTRCLGdCQUFnQixhQUFhLHNCQUFzQix5QkFBeUIsb0JBQW9CLEdBQUcsU0FBUyxpQkFBaUIsaUNBQWlDLG9CQUFvQixHQUFHLGVBQWUseUNBQXlDLEdBQUcsbUJBQW1CO0FBQ3Q5RztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUN0SjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW9HO0FBQ3BHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJOEM7QUFDdEUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0Q7QUFDUDs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHdEQUFVLENBQUMsbURBQVM7QUFDdEI7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0Isb0JBQW9CLFNBQVM7QUFDN0I7QUFDQSxVQUFVLGdEQUFNLHVCQUF1QixnREFBTTtBQUM3QztBQUNBLFFBQVEsU0FBUyxnREFBTTtBQUN2QjtBQUNBLFFBQVEsU0FBUyxnREFBTTtBQUN2QjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLFNBQVM7QUFDM0Isb0JBQW9CLFNBQVM7QUFDN0I7QUFDQSxVQUFVLG1EQUFTLHNCQUFzQixtREFBUztBQUNsRDtBQUNBLFFBQVEsU0FBUyxtREFBUztBQUMxQjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsdUJBQXVCLEVBQUUsR0FBRyxFQUFFO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEZTtBQUNmO0FBQ0Esc0NBQXNDLDBCQUEwQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWkEsaUdBQStCLGdCQUFnQixnQkFBZ0IsYUFBYSxlQUFlLGlJQUFpSSx5REFBeUQsZUFBZSx3Q0FBd0MsZUFBZSxXQUFXLGVBQWUsbUJBQW1CLGdCQUFnQjtBQUN4WixhQUFhLEtBQXFDLENBQUMsb0NBQW9CLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrR0FBQyxDQUFDLENBQUcsQ0FBQyxhQUFhLGFBQWEsZ0JBQWdCLHFCQUFxQixpQ0FBaUMsc0NBQXNDLDRCQUE0Qix1REFBdUQsc0JBQXNCLFNBQVMsY0FBYyxZQUFZLG1CQUFtQixLQUFLLHlDQUF5Qyx5Q0FBeUMsWUFBWSxxSUFBcUksZ0VBQWdFLEdBQUcsU0FBUyxjQUFjLGlGQUFpRixnQkFBZ0IsYUFBYSxvR0FBb0csS0FBSyxrQkFBa0IscUJBQXFCLG9CQUFvQix5Q0FBeUMsNEJBQTRCLGVBQWUsNkJBQTZCLCtCQUErQixvRUFBb0Usc0NBQXNDLGFBQWEscUNBQXFDLG9DQUFvQyxrREFBa0QsV0FBVyxnQkFBZ0IsbUJBQW1CLDZCQUE2QixtQkFBbUIsbUZBQW1GLFlBQVksMkJBQTJCLElBQUksK0JBQStCLHdCQUF3QixLQUFLLFVBQVUsd0RBQXdELE9BQU8sU0FBUyxTQUFTLFFBQVEsSUFBSSwyREFBMkQsUUFBUSxjQUFjLFVBQVUscUJBQXFCLGFBQWEsb0NBQW9DLG9EQUFvRCxvREFBb0QsNkNBQTZDLHFGQUFxRixrQkFBa0IsaUtBQWlLLEdBQUcsZ0JBQWdCLG9DQUFvQywyQkFBMkIsSUFBSSxjQUFjLFNBQVMsZ0JBQWdCLGtJQUFrSSx3R0FBd0csZ0JBQWdCLGdGQUFnRiw0Q0FBNEMsOEJBQThCLHFDQUFxQyxpRkFBaUYsU0FBUyw4QkFBOEIscUZBQXFGLEdBQUcsb0JBQW9CLHVCQUF1QixxQkFBTSxXQUFXLHFCQUFNLDZCQUE2QixxQkFBTSw4RUFBOEUsYUFBYSxZQUFZLFdBQVcscUJBQXFCLFVBQVUsZ0JBQWdCLCtCQUErQixjQUFjLG1EQUFtRCx5QkFBeUIsY0FBYyxJQUFJLE9BQU8sU0FBUyxRQUFRLHlEQUF5RCxnQkFBZ0IsTUFBTSxJQUFJLHFGQUFxRiwrQ0FBK0MsYUFBYSxxREFBcUQsOEJBQThCLGVBQWUsaUJBQWlCLE9BQU8sU0FBUyxvQkFBb0IsU0FBUyxnQkFBZ0Isc0JBQXNCLGdCQUFnQiw0REFBNEQsZ0JBQWdCLDREQUE0RCxjQUFjLDJCQUEyQixjQUFjLDBCQUEwQixjQUFjLHlDQUF5QyxxQkFBTSw4Q0FBOEMsY0FBYyxxQkFBTSxvQ0FBb0MsY0FBYyx3RkFBd0Ysc0tBQXNLLDRCQUE0QixjQUFjLE9BQU8sSUFBSSxlQUFlLE9BQU8sS0FBSyxTQUFTLE1BQU0sU0FBUyxhQUFhLHNGQUFzRixPQUFPLGdFQUFnRSw0S0FBNEssbUJBQW1CLDBCQUEwQixtQkFBbUIscUZBQXFGLDRCQUE0QixhQUFhLGNBQWMsdUJBQXVCLGtCQUFrQixjQUFjLFdBQVcsOERBQThELFFBQVEsR0FBRyxvQkFBb0Isc0ZBQXNGLDRCQUE0QixjQUFjLFdBQVcseURBQXlELEdBQUcsdUJBQXVCLGtFQUFrRSxLQUFLLEdBQUcsc0JBQXNCLDRCQUE0QixLQUFLLElBQUksMkNBQTJDLGdCQUFnQiwrQ0FBK0MsdUJBQXVCLHNDQUFzQyxxSkFBcUosNkJBQTZCLDRCQUE0QixvQkFBb0Isd0JBQXdCLG9CQUFvQixxQkFBcUIsS0FBSyxZQUFZLDhCQUE4QixZQUFZLHlDQUF5Qyx3REFBd0QsR0FBRyw2Q0FBNkMsaUNBQWlDLGlCQUFpQixHQUFHLDRCQUE0QixLQUFLLGtCQUFrQixHQUFHLGtCQUFrQixRQUFRLG1EQUFtRCw2QkFBNkIsNENBQTRDLGlFQUFpRSx5RUFBeUUsNkJBQTZCLHdCQUF3QiwyQkFBMkIsaUJBQWlCLEtBQUssZ0JBQWdCLHlFQUF5RSwwRUFBMEUseUJBQXlCLG1EQUFtRCxnQ0FBZ0MsRUFBRSx1Q0FBdUMsbUNBQW1DLHNEQUFzRCwyQ0FBMkMsc0RBQXNELDJDQUEyQyw0QkFBNEIsNEdBQTRHLFFBQVEseUJBQXlCLEVBQUUseUJBQXlCLDRCQUE0QixrQkFBa0Isc0NBQXNDLEtBQUssUUFBUSxzQkFBc0IsU0FBUyxFQUFFLHdFQUF3RSxpQ0FBaUMsRUFBRSx5QkFBeUIsVUFBVSxZQUFZLEdBQUcsR0FBRyxnQkFBZ0IsZ0JBQWdCLHFDQUFxQyxTQUFTLHFFQUFxRSw0TEFBNEwsZ0JBQWdCLDZNQUE2TSxTQUFTLHFEQUFxRCxPQUFPLDBDQUEwQyx1QkFBdUIsWUFBWSxNQUFNLEVBQUUsaUJBQWlCLElBQUksWUFBWSxnQ0FBZ0MsaURBQWlELHdCQUF3Qix1QkFBdUIsZ0JBQWdCLE1BQU0sRUFBRSxhQUFhLEdBQUcsZ0JBQWdCLGtHQUFrRyw4REFBOEQsb01BQW9NLFNBQVMsT0FBTyxZQUFZLGFBQWEsZ0JBQWdCLG9FQUFvRSwrTUFBK00sY0FBYyx5R0FBeUcsc0RBQXNELG9EQUFvRCxZQUFZLEtBQUssOEJBQThCLGNBQWMsZ0ZBQWdGLHdCQUF3QixFQUFFLElBQUksZ0NBQWdDLHFDQUFxQyw2TkFBNk4sNERBQTRELFlBQVksK0RBQStELDZEQUE2RCxpRUFBaUUsVUFBVSxVQUFVLHlCQUF5QixtQkFBbUIsSUFBSSx1Q0FBdUMsU0FBUyxrQkFBa0IsMENBQTBDLG9FQUFvRSxvQkFBb0IsdUNBQXVDLGdIQUFnSCxzRkFBc0YsSUFBSSxNQUFNLDZCQUE2QixHQUFHLHNCQUFzQiw0REFBNEQsSUFBSSxTQUFTLDZEQUE2RDs7Ozs7Ozs7Ozs7Ozs7OztBQ0Q3NlY7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBLGtCQUFrQixTQUFTO0FBQzNCO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG9EQUFJO0FBQ2YsV0FBVyxvREFBSTtBQUNmLFdBQVcsb0RBQUk7QUFDZixXQUFXLG9EQUFJO0FBQ2YsV0FBVyxvREFBSTtBQUNmO0FBQ0Esa0JBQWtCLHNCQUFzQjtBQUN4QztBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQywrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBLE1BQU07QUFDTiw2QkFBNkIsYUFBYTtBQUMxQywrQ0FBK0MsTUFBTTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RXVDO0FBQ0w7QUFDbEM7QUFDQTs7QUFFTzs7QUFFQTtBQUNQLFdBQVcseURBQVM7QUFDcEI7O0FBRUE7QUFDQSxJQUFJLDRCQUE0QjtBQUNoQyxJQUFJLDRCQUE0QjtBQUNoQyxJQUFJLDhCQUE4QjtBQUNsQyxJQUFJLDhCQUE4QjtBQUNsQyxJQUFJLDRCQUE0QjtBQUNoQzs7QUFFTyxrQkFBa0IseURBQVM7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQVE7QUFDWjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeERlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnVCO0FBQ0c7QUFDbUI7QUFDTjtBQUNIO0FBQ21CO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGFBQWE7QUFDdEMsd0JBQXdCLFlBQVk7QUFDcEM7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFZO0FBQy9CO0FBQ0EsbUJBQW1CLG1FQUFlO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLG1CQUFtQixzREFBWTtBQUMvQixpQkFBaUIsa0RBQWE7QUFDOUIsbUJBQW1CLDREQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrQztBQUNlOztBQUVqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUksOERBQWdCO0FBQ3BCLElBQUkscURBQVE7QUFDWixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNU5BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21tb25Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVQbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwUGxhY2VtZW50RGlhbG9nLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL09yYml0LVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogbXlUaXRsZUZvbnQ7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgZm9udC1mYW1pbHk6IG15VGl0bGVGb250O1xuICBsZXR0ZXItc3BhY2luZzogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuXG5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBwYWRkaW5nOiAzMnB4O1xufVxuXG4ucGxheWVyLWdyaWQsXG4uQ1BVLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XG59XG5cbi5jZWxsLXBsYXllcixcbi5jZWxsLWNwdSB7XG4gIGhlaWdodDogNTRweDtcbiAgd2lkdGg6IDU0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY2VsbC1jcHU6aG92ZXJ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNoaXAtY2VsbCB7XG4gIGhlaWdodDogNTRweDtcbiAgd2lkdGg6IDU0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnNoaXAtaGl0LWNlbGwsXG4uY3B1LXNoaXAtaGl0LWNlbGwge1xuICBoZWlnaHQ6IDU0cHg7XG4gIHdpZHRoOiA1NHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY2VsbC1oaXQsXG4uY3B1LWhpdC1jZWxsIHtcbiAgaGVpZ2h0OiA1NHB4O1xuICB3aWR0aDogNTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDE2OSwgMTY5KTtcbn1cblxuZm9ybXtcbiAgd2lkdGg6IDU1MHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBwYWRkaW5nOiAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xufVxuXG5mb3JtPmRpdntcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5kaWFsb2ctdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wbGFjZS1zaGlwcy1idXR0b257XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiA0cHggMTBweDtcbn1cblxuLnBsYWNlLXNoaXBzLWJ1dHRvbjpob3ZlcntcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5mb290ZXJ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmctdG9wOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZmFie1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZhYjpob3ZlcntcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLDJCQUEyQjtFQUMzQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsNENBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsUUFBUTtFQUNSLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBteVRpdGxlRm9udDtcXG4gIHNyYzogdXJsKCcuL2ZvbnRzL09yYml0LVJlZ3VsYXIudHRmJyk7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNzJweDtcXG4gIGZvbnQtZmFtaWx5OiBteVRpdGxlRm9udDtcXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMzJweDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDMycHg7XFxufVxcblxcbi5wbGF5ZXItZ3JpZCxcXG4uQ1BVLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jZWxsLXBsYXllcixcXG4uY2VsbC1jcHUge1xcbiAgaGVpZ2h0OiA1NHB4O1xcbiAgd2lkdGg6IDU0cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmNlbGwtY3B1OmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2hpcC1jZWxsIHtcXG4gIGhlaWdodDogNTRweDtcXG4gIHdpZHRoOiA1NHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLnNoaXAtaGl0LWNlbGwsXFxuLmNwdS1zaGlwLWhpdC1jZWxsIHtcXG4gIGhlaWdodDogNTRweDtcXG4gIHdpZHRoOiA1NHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jZWxsLWhpdCxcXG4uY3B1LWhpdC1jZWxsIHtcXG4gIGhlaWdodDogNTRweDtcXG4gIHdpZHRoOiA1NHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTY5LCAxNjksIDE2OSk7XFxufVxcblxcbmZvcm17XFxuICB3aWR0aDogNTUwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5mb3JtPmRpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5kaWFsb2ctdGl0bGV7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnBsYWNlLXNoaXBzLWJ1dHRvbntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgaGVpZ2h0OiBtYXgtY29udGVudDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xcbn1cXG5cXG4ucGxhY2Utc2hpcHMtYnV0dG9uOmhvdmVye1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5mb290ZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5mYWJ7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZmFiOmhvdmVye1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcGxheWVyLCBjcHVQbGF5ZXIgfSBmcm9tIFwiLi9nYW1lUGxheS5qc1wiO1xuaW1wb3J0IHsgcGxheWVyTW92ZSB9IGZyb20gXCIuL2dhbWVQbGF5LmpzXCI7XG5cbmZ1bmN0aW9uIGF0dGFja0V2ZW50KGUpIHtcbiAgbGV0IFtwb3NpdGlvbl94LCBwb3NpdGlvbl95XSA9IGUudGFyZ2V0LmlkLnNwbGl0KFwiLFwiKTtcbiAgcG9zaXRpb25feCA9IHBhcnNlSW50KHBvc2l0aW9uX3gpO1xuICBwb3NpdGlvbl95ID0gcGFyc2VJbnQocG9zaXRpb25feSk7XG4gIHBsYXllck1vdmUoY3B1UGxheWVyLCBwb3NpdGlvbl94LCBwb3NpdGlvbl95KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICBjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgQ1BVR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGdyaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlmIChwbGF5ZXIuYm9hcmRbal1baV0uaXNTaGlwICYmIHBsYXllci5ib2FyZFtqXVtpXS5pc0hpdCkge1xuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1oaXQtY2VsbFwiKTtcbiAgICAgIH0gZWxzZSBpZiAocGxheWVyLmJvYXJkW2pdW2ldLmlzU2hpcCkge1xuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcC1jZWxsXCIpO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuYm9hcmRbal1baV0uaXNIaXQpIHtcbiAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtaGl0XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtcGxheWVyXCIpO1xuICAgICAgfVxuICAgICAgcGxheWVyR3JpZC5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMTsgaiA8PSAxMDsgaisrKSB7XG4gICAgICBjb25zdCBncmlkQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpZiAoY3B1UGxheWVyLmJvYXJkW2pdW2ldLmlzSGl0ICYmIGNwdVBsYXllci5ib2FyZFtqXVtpXS5pc1NoaXApIHtcbiAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChcImNwdS1zaGlwLWhpdC1jZWxsXCIpO1xuICAgICAgfSBlbHNlIGlmIChjcHVQbGF5ZXIuYm9hcmRbal1baV0uaXNIaXQpIHtcbiAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChcImNwdS1oaXQtY2VsbFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWNwdVwiKTtcbiAgICAgIH1cbiAgICAgIGdyaWRDZWxsLmlkID0gYCR7an0sJHtpfWA7XG4gICAgICBncmlkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrRXZlbnQpO1xuICAgICAgQ1BVR3JpZC5hcHBlbmRDaGlsZChncmlkQ2VsbCk7XG4gICAgfVxuICB9XG4gIHBsYXllckdyaWQuY2xhc3NMaXN0LmFkZChcInBsYXllci1ncmlkXCIpO1xuICBDUFVHcmlkLmNsYXNzTGlzdC5hZGQoXCJDUFUtZ3JpZFwiKTtcbiAgbWFpbi5hcHBlbmQocGxheWVyR3JpZCwgQ1BVR3JpZCk7XG4gIHJldHVybiBtYWluO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLnRleHRDb250ZW50PWBDb3B5cmlnaHQgwqkgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IEhhcnNoYWxTaGlyb3RlYDtcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vSGFyc2hhbHNoaXJvdGUyMDAyJztcbiAgICBhLnRhcmdldD0nX2JsYW5rJztcbiAgICBjb25zdCBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmFiJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS1naXRodWInKTtcbiAgICBhLmFwcGVuZENoaWxkKGkpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbiIsIndpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZyA9IHtcImFzeW5jTG9hZGluZ1wiOntcImVuYWJsZWRcIjpmYWxzZX0sXCJhdXRvQTExeVwiOntcImVuYWJsZWRcIjp0cnVlfSxcImJhc2VVcmxcIjpcImh0dHBzOi8va2EtZi5mb250YXdlc29tZS5jb21cIixcImJhc2VVcmxLaXRcIjpcImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbVwiLFwiZGV0ZWN0Q29uZmxpY3RzVW50aWxcIjpudWxsLFwiaWNvblVwbG9hZHNcIjp7fSxcImlkXCI6ODA3NjI2NzMsXCJsaWNlbnNlXCI6XCJmcmVlXCIsXCJtZXRob2RcIjpcImNzc1wiLFwibWluaWZ5XCI6e1wiZW5hYmxlZFwiOnRydWV9LFwidG9rZW5cIjpcIjRjNTM2YTZiZDVcIixcInY0Rm9udEZhY2VTaGltXCI6e1wiZW5hYmxlZFwiOnRydWV9LFwidjRzaGltXCI6e1wiZW5hYmxlZFwiOnRydWV9LFwidjVGb250RmFjZVNoaW1cIjp7XCJlbmFibGVkXCI6ZmFsc2V9LFwidmVyc2lvblwiOlwiNS4xNS40XCJ9O1xuIWZ1bmN0aW9uKHQpe1wiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJraXQtbG9hZGVyXCIsdCk6dCgpfSgoZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiB0KHQsZSl7dmFyIG49T2JqZWN0LmtleXModCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIHI9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KTtlJiYocj1yLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCxlKS5lbnVtZXJhYmxlfSkpKSxuLnB1c2guYXBwbHkobixyKX1yZXR1cm4gbn1mdW5jdGlvbiBlKGUpe2Zvcih2YXIgbj0xO248YXJndW1lbnRzLmxlbmd0aDtuKyspe3ZhciBvPW51bGwhPWFyZ3VtZW50c1tuXT9hcmd1bWVudHNbbl06e307biUyP3QoT2JqZWN0KG8pLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtyKGUsdCxvW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG8pKTp0KE9iamVjdChvKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG8sdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIG4odCl7cmV0dXJuKG49XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKHQpe3JldHVybiB0eXBlb2YgdH06ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmdC5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmdCE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgdH0pKHQpfWZ1bmN0aW9uIHIodCxlLG4pe3JldHVybihlPWZ1bmN0aW9uKHQpe3ZhciBlPWZ1bmN0aW9uKHQsZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHR8fG51bGw9PT10KXJldHVybiB0O3ZhciBuPXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1uKXt2YXIgcj1uLmNhbGwodCxlfHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHIpcmV0dXJuIHI7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09ZT9TdHJpbmc6TnVtYmVyKSh0KX0odCxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgZT9lOlN0cmluZyhlKX0oZSkpaW4gdD9PYmplY3QuZGVmaW5lUHJvcGVydHkodCxlLHt2YWx1ZTpuLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6dFtlXT1uLHR9ZnVuY3Rpb24gbyh0LGUpe3JldHVybiBmdW5jdGlvbih0KXtpZihBcnJheS5pc0FycmF5KHQpKXJldHVybiB0fSh0KXx8ZnVuY3Rpb24odCxlKXt2YXIgbj1udWxsPT10P251bGw6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmdFtTeW1ib2wuaXRlcmF0b3JdfHx0W1wiQEBpdGVyYXRvclwiXTtpZihudWxsIT1uKXt2YXIgcixvLGksYyxhPVtdLHU9ITAsZj0hMTt0cnl7aWYoaT0obj1uLmNhbGwodCkpLm5leHQsMD09PWUpe2lmKE9iamVjdChuKSE9PW4pcmV0dXJuO3U9ITF9ZWxzZSBmb3IoOyEodT0ocj1pLmNhbGwobikpLmRvbmUpJiYoYS5wdXNoKHIudmFsdWUpLGEubGVuZ3RoIT09ZSk7dT0hMCk7fWNhdGNoKHQpe2Y9ITAsbz10fWZpbmFsbHl7dHJ5e2lmKCF1JiZudWxsIT1uLnJldHVybiYmKGM9bi5yZXR1cm4oKSxPYmplY3QoYykhPT1jKSlyZXR1cm59ZmluYWxseXtpZihmKXRocm93IG99fXJldHVybiBhfX0odCxlKXx8ZnVuY3Rpb24odCxlKXtpZighdClyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpcmV0dXJuIGkodCxlKTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PW4mJnQuY29uc3RydWN0b3ImJihuPXQuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uKXJldHVybiBBcnJheS5mcm9tKHQpO2lmKFwiQXJndW1lbnRzXCI9PT1ufHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSlyZXR1cm4gaSh0LGUpfSh0LGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gaSh0LGUpeyhudWxsPT1lfHxlPnQubGVuZ3RoKSYmKGU9dC5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9bmV3IEFycmF5KGUpO248ZTtuKyspcltuXT10W25dO3JldHVybiByfWZ1bmN0aW9uIGModCxlKXt2YXIgbj1lJiZlLmFkZE9ufHxcIlwiLHI9ZSYmZS5iYXNlRmlsZW5hbWV8fHQubGljZW5zZStuLG89ZSYmZS5taW5pZnk/XCIubWluXCI6XCJcIixpPWUmJmUuZmlsZVN1ZmZpeHx8dC5tZXRob2QsYz1lJiZlLnN1YmRpcnx8dC5tZXRob2Q7cmV0dXJuIHQuYmFzZVVybCtcIi9yZWxlYXNlcy9cIisoXCJsYXRlc3RcIj09PXQudmVyc2lvbj9cImxhdGVzdFwiOlwidlwiLmNvbmNhdCh0LnZlcnNpb24pKStcIi9cIitjK1wiL1wiK3IrbytcIi5cIitpfWZ1bmN0aW9uIGEodCxlKXt2YXIgbj1lfHxbXCJmYVwiXSxyPVwiLlwiK0FycmF5LnByb3RvdHlwZS5qb2luLmNhbGwobixcIiwuXCIpLG89dC5xdWVyeVNlbGVjdG9yQWxsKHIpO0FycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobywoZnVuY3Rpb24oZSl7dmFyIG49ZS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTtlLnNldEF0dHJpYnV0ZShcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpO3ZhciByPSFlLm5leHRFbGVtZW50U2libGluZ3x8IWUubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcInNyLW9ubHlcIik7aWYobiYmcil7dmFyIG89dC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtvLmlubmVySFRNTD1uLG8uY2xhc3NMaXN0LmFkZChcInNyLW9ubHlcIiksZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvLGUubmV4dFNpYmxpbmcpfX0pKX12YXIgdSxmPWZ1bmN0aW9uKCl7fSxzPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJnZvaWQgMCE9PWdsb2JhbC5wcm9jZXNzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBnbG9iYWwucHJvY2Vzcy5lbWl0LGw9XCJ1bmRlZmluZWRcIj09dHlwZW9mIHNldEltbWVkaWF0ZT9zZXRUaW1lb3V0OnNldEltbWVkaWF0ZSxkPVtdO2Z1bmN0aW9uIGgoKXtmb3IodmFyIHQ9MDt0PGQubGVuZ3RoO3QrKylkW3RdWzBdKGRbdF1bMV0pO2Q9W10sdT0hMX1mdW5jdGlvbiBtKHQsZSl7ZC5wdXNoKFt0LGVdKSx1fHwodT0hMCxsKGgsMCkpfWZ1bmN0aW9uIHAodCl7dmFyIGU9dC5vd25lcixuPWUuX3N0YXRlLHI9ZS5fZGF0YSxvPXRbbl0saT10LnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbyl7bj1cImZ1bGZpbGxlZFwiO3RyeXtyPW8ocil9Y2F0Y2godCl7ZyhpLHQpfX12KGkscil8fChcImZ1bGZpbGxlZFwiPT09biYmYihpLHIpLFwicmVqZWN0ZWRcIj09PW4mJmcoaSxyKSl9ZnVuY3Rpb24gdih0LGUpe3ZhciByO3RyeXtpZih0PT09ZSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLlwiKTtpZihlJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgZXx8XCJvYmplY3RcIj09PW4oZSkpKXt2YXIgbz1lLnRoZW47aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgbylyZXR1cm4gby5jYWxsKGUsKGZ1bmN0aW9uKG4pe3J8fChyPSEwLGU9PT1uP3kodCxuKTpiKHQsbikpfSksKGZ1bmN0aW9uKGUpe3J8fChyPSEwLGcodCxlKSl9KSksITB9fWNhdGNoKGUpe3JldHVybiByfHxnKHQsZSksITB9cmV0dXJuITF9ZnVuY3Rpb24gYih0LGUpe3QhPT1lJiZ2KHQsZSl8fHkodCxlKX1mdW5jdGlvbiB5KHQsZSl7XCJwZW5kaW5nXCI9PT10Ll9zdGF0ZSYmKHQuX3N0YXRlPVwic2V0dGxlZFwiLHQuX2RhdGE9ZSxtKEEsdCkpfWZ1bmN0aW9uIGcodCxlKXtcInBlbmRpbmdcIj09PXQuX3N0YXRlJiYodC5fc3RhdGU9XCJzZXR0bGVkXCIsdC5fZGF0YT1lLG0oUyx0KSl9ZnVuY3Rpb24gdyh0KXt0Ll90aGVuPXQuX3RoZW4uZm9yRWFjaChwKX1mdW5jdGlvbiBBKHQpe3QuX3N0YXRlPVwiZnVsZmlsbGVkXCIsdyh0KX1mdW5jdGlvbiBTKHQpe3QuX3N0YXRlPVwicmVqZWN0ZWRcIix3KHQpLCF0Ll9oYW5kbGVkJiZzJiZnbG9iYWwucHJvY2Vzcy5lbWl0KFwidW5oYW5kbGVkUmVqZWN0aW9uXCIsdC5fZGF0YSx0KX1mdW5jdGlvbiBPKHQpe2dsb2JhbC5wcm9jZXNzLmVtaXQoXCJyZWplY3Rpb25IYW5kbGVkXCIsdCl9ZnVuY3Rpb24gaih0KXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoXCJQcm9taXNlIHJlc29sdmVyIFwiK3QrXCIgaXMgbm90IGEgZnVuY3Rpb25cIik7aWYodGhpcyBpbnN0YW5jZW9mIGo9PSExKXRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7dGhpcy5fdGhlbj1bXSxmdW5jdGlvbih0LGUpe2Z1bmN0aW9uIG4odCl7ZyhlLHQpfXRyeXt0KChmdW5jdGlvbih0KXtiKGUsdCl9KSxuKX1jYXRjaCh0KXtuKHQpfX0odCx0aGlzKX1qLnByb3RvdHlwZT17Y29uc3RydWN0b3I6aixfc3RhdGU6XCJwZW5kaW5nXCIsX3RoZW46bnVsbCxfZGF0YTp2b2lkIDAsX2hhbmRsZWQ6ITEsdGhlbjpmdW5jdGlvbih0LGUpe3ZhciBuPXtvd25lcjp0aGlzLHRoZW46bmV3IHRoaXMuY29uc3RydWN0b3IoZiksZnVsZmlsbGVkOnQscmVqZWN0ZWQ6ZX07cmV0dXJuIWUmJiF0fHx0aGlzLl9oYW5kbGVkfHwodGhpcy5faGFuZGxlZD0hMCxcInJlamVjdGVkXCI9PT10aGlzLl9zdGF0ZSYmcyYmbShPLHRoaXMpKSxcImZ1bGZpbGxlZFwiPT09dGhpcy5fc3RhdGV8fFwicmVqZWN0ZWRcIj09PXRoaXMuX3N0YXRlP20ocCxuKTp0aGlzLl90aGVuLnB1c2gobiksbi50aGVufSxjYXRjaDpmdW5jdGlvbih0KXtyZXR1cm4gdGhpcy50aGVuKG51bGwsdCl9fSxqLmFsbD1mdW5jdGlvbih0KXtpZighQXJyYXkuaXNBcnJheSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLmFsbCgpLlwiKTtyZXR1cm4gbmV3IGooKGZ1bmN0aW9uKGUsbil7dmFyIHI9W10sbz0wO2Z1bmN0aW9uIGkodCl7cmV0dXJuIG8rKyxmdW5jdGlvbihuKXtyW3RdPW4sLS1vfHxlKHIpfX1mb3IodmFyIGMsYT0wO2E8dC5sZW5ndGg7YSsrKShjPXRbYV0pJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBjLnRoZW4/Yy50aGVuKGkoYSksbik6clthXT1jO298fGUocil9KSl9LGoucmFjZT1mdW5jdGlvbih0KXtpZighQXJyYXkuaXNBcnJheSh0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBhcnJheSB0byBQcm9taXNlLnJhY2UoKS5cIik7cmV0dXJuIG5ldyBqKChmdW5jdGlvbihlLG4pe2Zvcih2YXIgcixvPTA7bzx0Lmxlbmd0aDtvKyspKHI9dFtvXSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHIudGhlbj9yLnRoZW4oZSxuKTplKHIpfSkpfSxqLnJlc29sdmU9ZnVuY3Rpb24odCl7cmV0dXJuIHQmJlwib2JqZWN0XCI9PT1uKHQpJiZ0LmNvbnN0cnVjdG9yPT09aj90Om5ldyBqKChmdW5jdGlvbihlKXtlKHQpfSkpfSxqLnJlamVjdD1mdW5jdGlvbih0KXtyZXR1cm4gbmV3IGooKGZ1bmN0aW9uKGUsbil7bih0KX0pKX07dmFyIEU9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlOmo7ZnVuY3Rpb24gUCh0LGUpe3ZhciBuPWUuZmV0Y2gscj1lLlhNTEh0dHBSZXF1ZXN0LG89ZS50b2tlbixpPXQ7cmV0dXJuIG8mJiFmdW5jdGlvbih0KXtyZXR1cm4gdC5pbmRleE9mKFwia2l0LXVwbG9hZC5jc3NcIik+LTF9KHQpJiYoXCJVUkxTZWFyY2hQYXJhbXNcImluIHdpbmRvdz8oaT1uZXcgVVJMKHQpKS5zZWFyY2hQYXJhbXMuc2V0KFwidG9rZW5cIixvKTppPWkrXCI/dG9rZW49XCIrZW5jb2RlVVJJQ29tcG9uZW50KG8pKSxpPWkudG9TdHJpbmcoKSxuZXcgRSgoZnVuY3Rpb24odCxlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBuKW4oaSx7bW9kZTpcImNvcnNcIixjYWNoZTpcImRlZmF1bHRcIn0pLnRoZW4oKGZ1bmN0aW9uKHQpe2lmKHQub2spcmV0dXJuIHQudGV4dCgpO3Rocm93IG5ldyBFcnJvcihcIlwiKX0pKS50aGVuKChmdW5jdGlvbihlKXt0KGUpfSkpLmNhdGNoKGUpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygcil7dmFyIG89bmV3IHI7by5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLChmdW5jdGlvbigpe3RoaXMucmVzcG9uc2VUZXh0P3QodGhpcy5yZXNwb25zZVRleHQpOmUobmV3IEVycm9yKFwiXCIpKX0pKTtbXCJhYm9ydFwiLFwiZXJyb3JcIixcInRpbWVvdXRcIl0ubWFwKChmdW5jdGlvbih0KXtvLmFkZEV2ZW50TGlzdGVuZXIodCwoZnVuY3Rpb24oKXtlKG5ldyBFcnJvcihcIlwiKSl9KSl9KSksby5vcGVuKFwiR0VUXCIsaSksby5zZW5kKCl9ZWxzZXtlKG5ldyBFcnJvcihcIlwiKSl9fSkpfWZ1bmN0aW9uIF8odCxlLG4pe3ZhciByPXQ7cmV0dXJuW1svKHVybFxcKFwiPylcXC5cXC5cXC9cXC5cXC5cXC9cXC5cXC4vZyxmdW5jdGlvbih0LG4pe3JldHVyblwiXCIuY29uY2F0KG4pLmNvbmNhdChlKX1dLFsvKHVybFxcKFwiPylcXC5cXC5cXC93ZWJmb250cy9nLGZ1bmN0aW9uKHQscil7cmV0dXJuXCJcIi5jb25jYXQocikuY29uY2F0KGUsXCIvcmVsZWFzZXMvdlwiKS5jb25jYXQobixcIi93ZWJmb250c1wiKX1dLFsvKHVybFxcKFwiPylodHRwczpcXC9cXC9raXQtZnJlZShbXi5dKSpcXC5mb250YXdlc29tZVxcLmNvbS9nLGZ1bmN0aW9uKHQsbil7cmV0dXJuXCJcIi5jb25jYXQobikuY29uY2F0KGUpfV1dLmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBlPW8odCwyKSxuPWVbMF0saT1lWzFdO3I9ci5yZXBsYWNlKG4saSl9KSkscn1mdW5jdGlvbiBGKHQsbil7dmFyIHI9YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOmZ1bmN0aW9uKCl7fSxvPW4uZG9jdW1lbnR8fG8saT1hLmJpbmQoYSxvLFtcImZhXCIsXCJmYWJcIixcImZhc1wiLFwiZmFyXCIsXCJmYWxcIixcImZhZFwiLFwiZmFrXCJdKTt0LmF1dG9BMTF5LmVuYWJsZWQmJnIoaSk7dmFyIHU9dC5zdWJzZXRQYXRoJiZ0LmJhc2VVcmwrXCIvXCIrdC5zdWJzZXRQYXRoLGY9W3tpZDpcImZhLW1haW5cIixhZGRPbjp2b2lkIDAsdXJsOnV9XTtpZih0LnY0c2hpbSYmdC52NHNoaW0uZW5hYmxlZCYmZi5wdXNoKHtpZDpcImZhLXY0LXNoaW1zXCIsYWRkT246XCItdjQtc2hpbXNcIn0pLHQudjVGb250RmFjZVNoaW0mJnQudjVGb250RmFjZVNoaW0uZW5hYmxlZCYmZi5wdXNoKHtpZDpcImZhLXY1LWZvbnQtZmFjZVwiLGFkZE9uOlwiLXY1LWZvbnQtZmFjZVwifSksdC52NEZvbnRGYWNlU2hpbSYmdC52NEZvbnRGYWNlU2hpbS5lbmFibGVkJiZmLnB1c2goe2lkOlwiZmEtdjQtZm9udC1mYWNlXCIsYWRkT246XCItdjQtZm9udC1mYWNlXCJ9KSwhdSYmdC5jdXN0b21JY29uc0Nzc1BhdGgpe3ZhciBzPXQuY3VzdG9tSWNvbnNDc3NQYXRoLmluZGV4T2YoXCJraXQtdXBsb2FkLmNzc1wiKT4tMT90LmJhc2VVcmxLaXQ6dC5iYXNlVXJsLGw9cytcIi9cIit0LmN1c3RvbUljb25zQ3NzUGF0aDtmLnB1c2goe2lkOlwiZmEta2l0LXVwbG9hZFwiLHVybDpsfSl9dmFyIGQ9Zi5tYXAoKGZ1bmN0aW9uKHIpe3JldHVybiBuZXcgRSgoZnVuY3Rpb24obyxpKXt2YXIgYT1yLnVybHx8Yyh0LHthZGRPbjpyLmFkZE9uLG1pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksdT17aWQ6ci5pZH0sZj10LnN1YnNldD91OmUoZShlKHt9LG4pLHUpLHt9LHtiYXNlVXJsOnQuYmFzZVVybCx2ZXJzaW9uOnQudmVyc2lvbixpZDpyLmlkLGNvbnRlbnRGaWx0ZXI6ZnVuY3Rpb24odCxlKXtyZXR1cm4gXyh0LGUuYmFzZVVybCxlLnZlcnNpb24pfX0pO1AoYSxuKS50aGVuKChmdW5jdGlvbih0KXtvKEModCxmKSl9KSkuY2F0Y2goaSl9KSl9KSk7cmV0dXJuIEUuYWxsKGQpfWZ1bmN0aW9uIEModCxlKXt2YXIgbj1lLmNvbnRlbnRGaWx0ZXJ8fGZ1bmN0aW9uKHQsZSl7cmV0dXJuIHR9LHI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUobih0LGUpKTtyZXR1cm4gci5hcHBlbmRDaGlsZChvKSxyLm1lZGlhPVwiYWxsXCIsZS5pZCYmci5zZXRBdHRyaWJ1dGUoXCJpZFwiLGUuaWQpLGUmJmUuZGV0ZWN0aW5nQ29uZmxpY3RzJiZlLmRldGVjdGlvbklnbm9yZUF0dHImJnIuc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoZS5kZXRlY3Rpb25JZ25vcmVBdHRyKSkscn1mdW5jdGlvbiBJKHQsbil7bi5hdXRvQTExeT10LmF1dG9BMTF5LmVuYWJsZWQsXCJwcm9cIj09PXQubGljZW5zZSYmKG4uYXV0b0ZldGNoU3ZnPSEwLG4uZmV0Y2hTdmdGcm9tPXQuYmFzZVVybCtcIi9yZWxlYXNlcy9cIisoXCJsYXRlc3RcIj09PXQudmVyc2lvbj9cImxhdGVzdFwiOlwidlwiLmNvbmNhdCh0LnZlcnNpb24pKStcIi9zdmdzXCIsbi5mZXRjaFVwbG9hZGVkU3ZnRnJvbT10LnVwbG9hZHNVcmwpO3ZhciByPVtdO3JldHVybiB0LnY0c2hpbS5lbmFibGVkJiZyLnB1c2gobmV3IEUoKGZ1bmN0aW9uKHIsbyl7UChjKHQse2FkZE9uOlwiLXY0LXNoaW1zXCIsbWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSxuKS50aGVuKChmdW5jdGlvbih0KXtyKFUodCxlKGUoe30sbikse30se2lkOlwiZmEtdjQtc2hpbXNcIn0pKSl9KSkuY2F0Y2gobyl9KSkpLHIucHVzaChuZXcgRSgoZnVuY3Rpb24ocixvKXtQKHQuc3Vic2V0UGF0aCYmdC5iYXNlVXJsK1wiL1wiK3Quc3Vic2V0UGF0aHx8Yyh0LHttaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLG4pLnRoZW4oKGZ1bmN0aW9uKHQpe3ZhciBvPVUodCxlKGUoe30sbikse30se2lkOlwiZmEtbWFpblwifSkpO3IoZnVuY3Rpb24odCxlKXt2YXIgbj1lJiZ2b2lkIDAhPT1lLmF1dG9GZXRjaFN2Zz9lLmF1dG9GZXRjaFN2Zzp2b2lkIDAscj1lJiZ2b2lkIDAhPT1lLmF1dG9BMTF5P2UuYXV0b0ExMXk6dm9pZCAwO3ZvaWQgMCE9PXImJnQuc2V0QXR0cmlidXRlKFwiZGF0YS1hdXRvLWExMXlcIixyP1widHJ1ZVwiOlwiZmFsc2VcIik7biYmKHQuc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoXCJkYXRhLWF1dG8tZmV0Y2gtc3ZnXCIpKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtZmV0Y2gtc3ZnLWZyb21cIixlLmZldGNoU3ZnRnJvbSksdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZldGNoLXVwbG9hZGVkLXN2Zy1mcm9tXCIsZS5mZXRjaFVwbG9hZGVkU3ZnRnJvbSkpO3JldHVybiB0fShvLG4pKX0pKS5jYXRjaChvKX0pKSksRS5hbGwocil9ZnVuY3Rpb24gVSh0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTQ1JJUFRcIikscj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0KTtyZXR1cm4gbi5hcHBlbmRDaGlsZChyKSxuLnJlZmVycmVyUG9saWN5PVwic3RyaWN0LW9yaWdpblwiLGUuaWQmJm4uc2V0QXR0cmlidXRlKFwiaWRcIixlLmlkKSxlJiZlLmRldGVjdGluZ0NvbmZsaWN0cyYmZS5kZXRlY3Rpb25JZ25vcmVBdHRyJiZuLnNldEF0dHJpYnV0ZU5vZGUoZG9jdW1lbnQuY3JlYXRlQXR0cmlidXRlKGUuZGV0ZWN0aW9uSWdub3JlQXR0cikpLG59ZnVuY3Rpb24gVCh0KXt2YXIgZSxuPVtdLHI9ZG9jdW1lbnQsbz1yLmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCxpPShvPy9ebG9hZGVkfF5jLzovXmxvYWRlZHxeaXxeYy8pLnRlc3Qoci5yZWFkeVN0YXRlKTtpfHxyLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZT1mdW5jdGlvbigpe2ZvcihyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZSksaT0xO2U9bi5zaGlmdCgpOyllKCl9KSxpP3NldFRpbWVvdXQodCwwKTpuLnB1c2godCl9ZnVuY3Rpb24gTCh0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgTXV0YXRpb25PYnNlcnZlciYmbmV3IE11dGF0aW9uT2JzZXJ2ZXIodCkub2JzZXJ2ZShkb2N1bWVudCx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITB9KX10cnl7aWYod2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnKXt2YXIgaz13aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcseD17ZGV0ZWN0aW5nQ29uZmxpY3RzOmsuZGV0ZWN0Q29uZmxpY3RzVW50aWwmJm5ldyBEYXRlPD1uZXcgRGF0ZShrLmRldGVjdENvbmZsaWN0c1VudGlsKSxkZXRlY3Rpb25JZ25vcmVBdHRyOlwiZGF0YS1mYS1kZXRlY3Rpb24taWdub3JlXCIsZmV0Y2g6d2luZG93LmZldGNoLHRva2VuOmsudG9rZW4sWE1MSHR0cFJlcXVlc3Q6d2luZG93LlhNTEh0dHBSZXF1ZXN0LGRvY3VtZW50OmRvY3VtZW50fSxNPWRvY3VtZW50LmN1cnJlbnRTY3JpcHQsTj1NP00ucGFyZW50RWxlbWVudDpkb2N1bWVudC5oZWFkOyhmdW5jdGlvbigpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTp7fSxlPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fTtyZXR1cm5cImpzXCI9PT10Lm1ldGhvZD9JKHQsZSk6XCJjc3NcIj09PXQubWV0aG9kP0YodCxlLChmdW5jdGlvbih0KXtUKHQpLEwodCl9KSk6dm9pZCAwfSkoayx4KS50aGVuKChmdW5jdGlvbih0KXt0Lm1hcCgoZnVuY3Rpb24odCl7dHJ5e04uaW5zZXJ0QmVmb3JlKHQsTT9NLm5leHRTaWJsaW5nOm51bGwpfWNhdGNoKGUpe04uYXBwZW5kQ2hpbGQodCl9fSkpLHguZGV0ZWN0aW5nQ29uZmxpY3RzJiZNJiZUKChmdW5jdGlvbigpe00uc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoeC5kZXRlY3Rpb25JZ25vcmVBdHRyKSk7dmFyIHQ9ZnVuY3Rpb24odCxlKXt2YXIgbj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO3JldHVybiBlJiZlLmRldGVjdGlvbklnbm9yZUF0dHImJm4uc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoZS5kZXRlY3Rpb25JZ25vcmVBdHRyKSksbi5zcmM9Yyh0LHtiYXNlRmlsZW5hbWU6XCJjb25mbGljdC1kZXRlY3Rpb25cIixmaWxlU3VmZml4OlwianNcIixzdWJkaXI6XCJqc1wiLG1pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksbn0oayx4KTtkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHQpfSkpfSkpLmNhdGNoKChmdW5jdGlvbih0KXtjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KFwiRm9udCBBd2Vzb21lIEtpdDpcIixcIiBcIikuY29uY2F0KHQpKX0pKX19Y2F0Y2godCl7Y29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChcIkZvbnQgQXdlc29tZSBLaXQ6XCIsXCIgXCIpLmNvbmNhdCh0KSl9fSkpOyIsImltcG9ydCBzaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcblxuY2xhc3MgYm9hcmRDZWxsIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0hpdCA9IGZhbHNlO1xuICAgIHRoaXMuc2hpcE5hbWUgPSBudWxsO1xuICAgIHRoaXMuaXNTaGlwID0gZmFsc2U7XG4gIH1cblxuICBoaXRDZWxsID0gKCkgPT4ge1xuICAgIHRoaXMuaXNIaXQgPSB0cnVlO1xuICB9O1xuICBtYWtlU2hpcENlbGwgPSAoc29tZVNoaXBOYW1lKSA9PiB7XG4gICAgaWYgKCF0aGlzLmlzU2hpcCkge1xuICAgICAgdGhpcy5zaGlwTmFtZSA9IGAke3NvbWVTaGlwTmFtZX1gO1xuICAgIH1cbiAgICB0aGlzLmlzU2hpcCA9IHRydWU7XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdhbWVCb2FyZChwb3NpdGlvbnMpIHtcbiAgbGV0IGJvYXJkID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDEwOyBpKyspIHtcbiAgICBib2FyZFtpXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgIGJvYXJkW2ldW2pdID0gbmV3IGJvYXJkQ2VsbCgpO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGlwcyA9IHtcbiAgICBzaGlwMTogc2hpcCg1KSxcbiAgICBzaGlwMjogc2hpcCg0KSxcbiAgICBzaGlwMzogc2hpcCgzKSxcbiAgICBzaGlwNDogc2hpcCgzKSxcbiAgICBzaGlwNTogc2hpcCgyKSxcbiAgfTtcbiAgZm9yIChsZXQgcCA9IDA7IHAgPCBwb3NpdGlvbnMubGVuZ3RoOyBwKyspIHtcbiAgICBsZXQgc3RhcnQgPSBwb3NpdGlvbnNbcF0uc3RhcnQ7XG4gICAgbGV0IGVuZCA9IHBvc2l0aW9uc1twXS5lbmQ7XG4gICAgaWYgKHN0YXJ0WzBdID09PSBlbmRbMF0pIHtcbiAgICAgIGZvciAobGV0IGkgPSBzdGFydFsxXTsgaSA8PSBlbmRbMV07IGkrKykge1xuICAgICAgICBib2FyZFtzdGFydFswXV1baV0ubWFrZVNoaXBDZWxsKGBzaGlwJHtwICsgMX1gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaiA9IHN0YXJ0WzBdOyBqIDw9IGVuZFswXTsgaisrKSB7XG4gICAgICAgIGJvYXJkW2pdW3N0YXJ0WzFdXS5tYWtlU2hpcENlbGwoYHNoaXAke3AgKyAxfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgaWYgKCFib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLmlzSGl0KSB7XG4gICAgICBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLmhpdENlbGwoKTtcbiAgICB9XG4gICAgaWYgKGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0uaXNTaGlwKSB7XG4gICAgICBib2FyZFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dLmhpdENlbGwoKTtcbiAgICAgIHNoaXBzW2JvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0uc2hpcE5hbWVdLmhpdCgpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgYWxsU3VuayA9ICgpID0+IHtcbiAgICBpZiAoXG4gICAgICBzaGlwc1tcInNoaXAxXCJdLmlzU3VuaygpICYmXG4gICAgICBzaGlwc1tcInNoaXAyXCJdLmlzU3VuaygpICYmXG4gICAgICBzaGlwc1tcInNoaXAzXCJdLmlzU3VuaygpICYmXG4gICAgICBzaGlwc1tcInNoaXA0XCJdLmlzU3VuaygpICYmXG4gICAgICBzaGlwc1tcInNoaXA1XCJdLmlzU3VuaygpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHsgc2hpcHMsIGJvYXJkLCBhbGxTdW5rLCByZWNlaXZlQXR0YWNrIH07XG59XG4iLCJpbXBvcnQgZ2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZC5qc1wiO1xuaW1wb3J0IHVwZGF0ZVVJIGZyb20gXCIuL2luZGV4LmpzXCI7XG5sZXQgZmxhZyA9IDA7XG5sZXQgZ2FtZVdpblN0YXR1cyA9IDA7XG5cbmV4cG9ydCBsZXQgcGxheWVyO1xuXG5leHBvcnQgY29uc3QgcGxhY2VQbGF5ZXJTaGlwcyA9IChwb3NpdGlvbnMpID0+IHtcbiAgcGxheWVyID0gZ2FtZUJvYXJkKHBvc2l0aW9ucyk7XG59O1xuXG5sZXQgY3B1UG9zaXRpb25zID0gW1xuICB7IHN0YXJ0OiBbMSwgMV0sIGVuZDogWzEsIDVdIH0sXG4gIHsgc3RhcnQ6IFsyLCAyXSwgZW5kOiBbMiwgNV0gfSxcbiAgeyBzdGFydDogWzcsIDEwXSwgZW5kOiBbOSwgMTBdIH0sXG4gIHsgc3RhcnQ6IFsxMCwgMV0sIGVuZDogWzEwLCAzXSB9LFxuICB7IHN0YXJ0OiBbOSwgNl0sIGVuZDogWzksIDddIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgY3B1UGxheWVyID0gZ2FtZUJvYXJkKGNwdVBvc2l0aW9ucyk7XG5cbmZ1bmN0aW9uIGdhbWVTdGF0dXNDaGVjaygpIHtcbiAgaWYgKHBsYXllci5hbGxTdW5rKCkpIHtcbiAgICBhbGVydChcIkNQVSB3aW5zIHRoZSBnYW1lIVwiKTtcbiAgICBnYW1lV2luU3RhdHVzID0gMTtcbiAgfSBlbHNlIGlmIChjcHVQbGF5ZXIuYWxsU3VuaygpKSB7XG4gICAgYWxlcnQoXCJQbGF5ZXIgd2lucyB0aGUgZ2FtZSFcIik7XG4gICAgZ2FtZVdpblN0YXR1cyA9IDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZUdlbmVyYXRvcigpIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gIHJldHVybiBbaSwgal07XG59XG5cbmZ1bmN0aW9uIGNwdU1vdmUocGxheWVyKSB7XG4gIGxldCBpLCBqO1xuICBkbyB7XG4gICAgW2ksIGpdID0gcmFuZG9tQ29vcmRpbmF0ZUdlbmVyYXRvcigpO1xuICB9IHdoaWxlIChwbGF5ZXIuYm9hcmRbaV1bal0uaXNIaXQpO1xuICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhbaSwgal0pO1xuICBnYW1lU3RhdHVzQ2hlY2soKTtcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZShjcHVQbGF5ZXIsIHBvc2l0aW9uX3gsIHBvc2l0aW9uX3kpIHtcbiAgaWYgKGNwdVBsYXllci5ib2FyZFtwb3NpdGlvbl94XVtwb3NpdGlvbl95XS5pc0hpdCkge1xuICAgIGFsZXJ0KFwiY2VsbCBpcyBhbHJlYWR5IGhpdCFcIik7XG4gIH0gZWxzZSB7XG4gICAgY3B1UGxheWVyLnJlY2VpdmVBdHRhY2soW3Bvc2l0aW9uX3gsIHBvc2l0aW9uX3ldKTtcbiAgICBnYW1lU3RhdHVzQ2hlY2soKTtcbiAgICBjcHVNb3ZlKHBsYXllcik7XG4gICAgdXBkYXRlVUkoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJhdHRsZVNoaXBcIjtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcIi4vZm9udGF3ZXNvbWUuanNcIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vY29tbW9uRm9vdGVyLmpzXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlci5qc1wiO1xuaW1wb3J0IHVwZGF0ZURpc3BsYXkgZnJvbSBcIi4vVUkuanNcIjtcbmltcG9ydCBzaGlwRGlhbG9nTWFrZXIgZnJvbSBcIi4vc2hpcFBsYWNlbWVudERpYWxvZy5qc1wiO1xubGV0IGJlZ2luTW9kZSA9IDE7XG5cbmZ1bmN0aW9uIHBsYWNlRGlhbG9nKGRpYWxvZykge1xuICBjb25zdCBkaWFsb2dXaWR0aCA9IGRpYWxvZy5vZmZzZXRXaWR0aDtcbiAgY29uc3QgZGlhbG9nSGVpZ2h0ID0gZGlhbG9nLm9mZnNldEhlaWdodDtcbiAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY29uc3QgbGVmdFBvc2l0aW9uID0gdmlld3BvcnRXaWR0aCAvIDIgLSBkaWFsb2dXaWR0aCAvIDI7XG4gIGNvbnN0IHRvcFBvc2l0aW9uID0gdmlld3BvcnRIZWlnaHQgLyAyIC0gZGlhbG9nSGVpZ2h0IC8gMjtcbiAgZGlhbG9nLnN0eWxlLmxlZnQgPSBgJHtsZWZ0UG9zaXRpb259cHhgO1xuICBkaWFsb2cuc3R5bGUudG9wID0gYCR7dG9wUG9zaXRpb259cHhgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVVSSgpIHtcbiAgaWYgKGJlZ2luTW9kZSA9PT0gMSkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICAvLyBjb25zdCBtYWluID0gdXBkYXRlRGlzcGxheSgpO1xuICAgIGNvbnN0IGRpYWxvZyA9IHNoaXBEaWFsb2dNYWtlcigpO1xuICAgIC8vIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcigpO1xuICAgIGJvZHkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGJvZHkuYXBwZW5kKGhlYWRlciwgZGlhbG9nKTtcbiAgICBkaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgcGxhY2VEaWFsb2coZGlhbG9nKTtcbiAgICBiZWdpbk1vZGUgPSAwO1xuICB9ZWxzZXtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlSGVhZGVyKCk7XG4gICAgY29uc3QgbWFpbiA9IHVwZGF0ZURpc3BsYXkoKTtcbiAgICBjb25zdCBmb290ZXIgPSBjcmVhdGVGb290ZXIoKTtcbiAgICBib2R5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBib2R5LmFwcGVuZChoZWFkZXIsIG1haW4sIGZvb3Rlcik7XG4gICAgYmVnaW5Nb2RlID0gMDtcbiAgfVxufVxuXG51cGRhdGVVSSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcChsZW5ndGgpIHtcbiAgbGV0IG51bVRpbWVzSGl0ID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIG51bVRpbWVzSGl0Kys7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gKG51bVRpbWVzSGl0ID49IGxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB7IGhpdCwgaXNTdW5rIH07XG59XG5cbiIsImltcG9ydCB1cGRhdGVVSSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IHsgcGxhY2VQbGF5ZXJTaGlwcyB9IGZyb20gXCIuL2dhbWVQbGF5LmpzXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRWxlbWVudCh0eXBlLCBjbGFzc2VzID0gW10sIG9wdGlvbnMpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gIGZvciAoY29uc3Qgc29tZUNsYXNzIG9mIGNsYXNzZXMpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc29tZUNsYXNzKTtcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiBvcHRpb25zKSB7XG4gICAgaWYgKGtleSA9PT0gXCJ0ZXh0Q29udGVudFwiIHx8IGtleSA9PT0gXCJ0eXBlXCIgfHwga2V5ID09PSBcInZhbHVlXCIpIHtcbiAgICAgIGVsZW1lbnRba2V5XSA9IG9wdGlvbnNba2V5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBvcHRpb25zW2tleV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmNvbnN0IHRpdGxlID0gZ2VuZXJhdGVFbGVtZW50KFwiZGl2XCIsIFtcImRpYWxvZy10aXRsZVwiXSwge1xuICB0ZXh0Q29udGVudDogXCJFbnRlciB0aGUgU2hpcCBTdGFydC1wb2ludCBDb29yZGluYXRlcywgY2hvb3NlIGFsaWdubWVudFwiLFxufSk7XG5jb25zdCBwbGFjZVNoaXBzID0gZ2VuZXJhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcInBsYWNlLXNoaXBzLWJ1dHRvblwiXSwge1xuICB0ZXh0Q29udGVudDogXCJQbGFjZSBTaGlwc1wiLFxufSk7XG5jb25zdCBzaGlwMSA9IGdlbmVyYXRlRWxlbWVudChcImlucHV0XCIsIFtcInNoaXAtY29vcmRpbmF0ZS1pbnB1dFwiXSwge1xuICB0eXBlOiBcInRleHRcIixcbiAgaWQ6IFwic2hpcDFcIixcbn0pO1xuY29uc3Qgc2hpcDIgPSBnZW5lcmF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXCJzaGlwLWNvb3JkaW5hdGUtaW5wdXRcIl0sIHtcbiAgdHlwZTogXCJ0ZXh0XCIsXG4gIGlkOiBcInNoaXAyXCIsXG59KTtcbmNvbnN0IHNoaXAzID0gZ2VuZXJhdGVFbGVtZW50KFwiaW5wdXRcIiwgW1wic2hpcC1jb29yZGluYXRlLWlucHV0XCJdLCB7XG4gIHR5cGU6IFwidGV4dFwiLFxuICBpZDogXCJzaGlwM1wiLFxufSk7XG5jb25zdCBzaGlwNCA9IGdlbmVyYXRlRWxlbWVudChcImlucHV0XCIsIFtcInNoaXAtY29vcmRpbmF0ZS1pbnB1dFwiXSwge1xuICB0eXBlOiBcInRleHRcIixcbiAgaWQ6IFwic2hpcDRcIixcbn0pO1xuY29uc3Qgc2hpcDUgPSBnZW5lcmF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXCJzaGlwLWNvb3JkaW5hdGUtaW5wdXRcIl0sIHtcbiAgdHlwZTogXCJ0ZXh0XCIsXG4gIGlkOiBcInNoaXA1XCIsXG59KTtcbmNvbnN0IHNoaXAxTGFiZWwgPSBnZW5lcmF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBbXCJzaGlwLWNvb3JkaW5hdGUtbGFiZWxcIl0sIHtcbiAgZm9yOiBcInNoaXAxXCIsXG4gIHRleHRDb250ZW50OiBcInNoaXAxIG9mIGxlbmd0aCA1OlwiLFxufSk7XG5jb25zdCBzaGlwMkxhYmVsID0gZ2VuZXJhdGVFbGVtZW50KFwibGFiZWxcIiwgW1wic2hpcC1jb29yZGluYXRlLWxhYmVsXCJdLCB7XG4gIGZvcjogXCJzaGlwMlwiLFxuICB0ZXh0Q29udGVudDogXCJzaGlwMiBvZiBsZW5ndGggNDpcIixcbn0pO1xuY29uc3Qgc2hpcDNMYWJlbCA9IGdlbmVyYXRlRWxlbWVudChcImxhYmVsXCIsIFtcInNoaXAtY29vcmRpbmF0ZS1sYWJlbFwiXSwge1xuICBmb3I6IFwic2hpcDNcIixcbiAgdGV4dENvbnRlbnQ6IFwic2hpcDMgb2YgbGVuZ3RoIDM6XCIsXG59KTtcbmNvbnN0IHNoaXA0TGFiZWwgPSBnZW5lcmF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBbXCJzaGlwLWNvb3JkaW5hdGUtbGFiZWxcIl0sIHtcbiAgZm9yOiBcInNoaXA0XCIsXG4gIHRleHRDb250ZW50OiBcInNoaXA0IG9mIGxlbmd0aCAzOlwiLFxufSk7XG5jb25zdCBzaGlwNUxhYmVsID0gZ2VuZXJhdGVFbGVtZW50KFwibGFiZWxcIiwgW1wic2hpcC1jb29yZGluYXRlLWxhYmVsXCJdLCB7XG4gIGZvcjogXCJzaGlwNVwiLFxuICB0ZXh0Q29udGVudDogXCJzaGlwNSBvZiBsZW5ndGggMjpcIixcbn0pO1xuY29uc3Qgc2hpcDFBbGlnbm1lbnQgPSBnZW5lcmF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgW1wic2hpcC1hbGlnbm1lbnRcIl0sIHtcbiAgaWQ6IFwibGlzdDFcIixcbn0pO1xuY29uc3Qgc2hpcDFfb3B0aW9uX3ggPSBnZW5lcmF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgW10sIHtcbiAgdmFsdWU6IFwieFwiLFxuICB0ZXh0Q29udGVudDogXCJ4XCIsXG59KTtcbmNvbnN0IHNoaXAxX29wdGlvbl95ID0gZ2VuZXJhdGVFbGVtZW50KFwib3B0aW9uXCIsIFtdLCB7XG4gIHZhbHVlOiBcInlcIixcbiAgdGV4dENvbnRlbnQ6IFwieVwiLFxufSk7XG5jb25zdCBzaGlwMkFsaWdubWVudCA9IGdlbmVyYXRlRWxlbWVudChcInNlbGVjdFwiLCBbXCJzaGlwLWFsaWdubWVudFwiXSwge1xuICBpZDogXCJsaXN0MlwiLFxufSk7XG5jb25zdCBzaGlwMl9vcHRpb25feCA9IGdlbmVyYXRlRWxlbWVudChcIm9wdGlvblwiLCBbXSwge1xuICB2YWx1ZTogXCJ4XCIsXG4gIHRleHRDb250ZW50OiBcInhcIixcbn0pO1xuY29uc3Qgc2hpcDJfb3B0aW9uX3kgPSBnZW5lcmF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgW10sIHtcbiAgdmFsdWU6IFwieVwiLFxuICB0ZXh0Q29udGVudDogXCJ5XCIsXG59KTtcbmNvbnN0IHNoaXAzQWxpZ25tZW50ID0gZ2VuZXJhdGVFbGVtZW50KFwic2VsZWN0XCIsIFtcInNoaXAtYWxpZ25tZW50XCJdLCB7XG4gIGlkOiBcImxpc3QxXCIsXG59KTtcbmNvbnN0IHNoaXAzX29wdGlvbl94ID0gZ2VuZXJhdGVFbGVtZW50KFwib3B0aW9uXCIsIFtdLCB7XG4gIHZhbHVlOiBcInhcIixcbiAgdGV4dENvbnRlbnQ6IFwieFwiLFxufSk7XG5jb25zdCBzaGlwM19vcHRpb25feSA9IGdlbmVyYXRlRWxlbWVudChcIm9wdGlvblwiLCBbXSwge1xuICB2YWx1ZTogXCJ5XCIsXG4gIHRleHRDb250ZW50OiBcInlcIixcbn0pO1xuY29uc3Qgc2hpcDRBbGlnbm1lbnQgPSBnZW5lcmF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgW1wic2hpcC1hbGlnbm1lbnRcIl0sIHtcbiAgaWQ6IFwibGlzdDFcIixcbn0pO1xuY29uc3Qgc2hpcDRfb3B0aW9uX3ggPSBnZW5lcmF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgW10sIHtcbiAgdmFsdWU6IFwieFwiLFxuICB0ZXh0Q29udGVudDogXCJ4XCIsXG59KTtcbmNvbnN0IHNoaXA0X29wdGlvbl95ID0gZ2VuZXJhdGVFbGVtZW50KFwib3B0aW9uXCIsIFtdLCB7XG4gIHZhbHVlOiBcInlcIixcbiAgdGV4dENvbnRlbnQ6IFwieVwiLFxufSk7XG5jb25zdCBzaGlwNUFsaWdubWVudCA9IGdlbmVyYXRlRWxlbWVudChcInNlbGVjdFwiLCBbXCJzaGlwLWFsaWdubWVudFwiXSwge1xuICBpZDogXCJsaXN0MVwiLFxufSk7XG5jb25zdCBzaGlwNV9vcHRpb25feCA9IGdlbmVyYXRlRWxlbWVudChcIm9wdGlvblwiLCBbXSwge1xuICB2YWx1ZTogXCJ4XCIsXG4gIHRleHRDb250ZW50OiBcInhcIixcbn0pO1xuY29uc3Qgc2hpcDVfb3B0aW9uX3kgPSBnZW5lcmF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgW10sIHtcbiAgdmFsdWU6IFwieVwiLFxuICB0ZXh0Q29udGVudDogXCJ5XCIsXG59KTtcbnNoaXAxLnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXAyLnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXAzLnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXA0LnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXA1LnJlcXVpcmVkID0gdHJ1ZTtcbnNoaXAxQWxpZ25tZW50LmFwcGVuZChzaGlwMV9vcHRpb25feCwgc2hpcDFfb3B0aW9uX3kpO1xuc2hpcDJBbGlnbm1lbnQuYXBwZW5kKHNoaXAyX29wdGlvbl94LCBzaGlwMl9vcHRpb25feSk7XG5zaGlwM0FsaWdubWVudC5hcHBlbmQoc2hpcDNfb3B0aW9uX3gsIHNoaXAzX29wdGlvbl95KTtcbnNoaXA0QWxpZ25tZW50LmFwcGVuZChzaGlwNF9vcHRpb25feCwgc2hpcDRfb3B0aW9uX3kpO1xuc2hpcDVBbGlnbm1lbnQuYXBwZW5kKHNoaXA1X29wdGlvbl94LCBzaGlwNV9vcHRpb25feSk7XG5jb25zdCBzaGlwMURpdiA9IGdlbmVyYXRlRWxlbWVudChcImRpdlwiLCBbXCJzaGlwMS1kaXZcIl0pO1xuY29uc3Qgc2hpcDJEaXYgPSBnZW5lcmF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wic2hpcDItZGl2XCJdKTtcbmNvbnN0IHNoaXAzRGl2ID0gZ2VuZXJhdGVFbGVtZW50KFwiZGl2XCIsIFtcInNoaXAzLWRpdlwiXSk7XG5jb25zdCBzaGlwNERpdiA9IGdlbmVyYXRlRWxlbWVudChcImRpdlwiLCBbXCJzaGlwNC1kaXZcIl0pO1xuY29uc3Qgc2hpcDVEaXYgPSBnZW5lcmF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wic2hpcDUtZGl2XCJdKTtcbnNoaXAxRGl2LmFwcGVuZChzaGlwMUxhYmVsLCBzaGlwMSwgc2hpcDFBbGlnbm1lbnQpO1xuc2hpcDJEaXYuYXBwZW5kKHNoaXAyTGFiZWwsIHNoaXAyLCBzaGlwMkFsaWdubWVudCk7XG5zaGlwM0Rpdi5hcHBlbmQoc2hpcDNMYWJlbCwgc2hpcDMsIHNoaXAzQWxpZ25tZW50KTtcbnNoaXA0RGl2LmFwcGVuZChzaGlwNExhYmVsLCBzaGlwNCwgc2hpcDRBbGlnbm1lbnQpO1xuc2hpcDVEaXYuYXBwZW5kKHNoaXA1TGFiZWwsIHNoaXA1LCBzaGlwNUFsaWdubWVudCk7XG5wbGFjZVNoaXBzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmb3JtU3VibWl0RXZlbnQpO1xuZm9ybS5hcHBlbmQoXG4gIHRpdGxlLFxuICBzaGlwMURpdixcbiAgc2hpcDJEaXYsXG4gIHNoaXAzRGl2LFxuICBzaGlwNERpdixcbiAgc2hpcDVEaXYsXG4gIHBsYWNlU2hpcHNcbik7XG5kaWFsb2cuYXBwZW5kKGZvcm0pO1xuXG5mdW5jdGlvbiBjaGVja1ZhbGlkaXR5KGZpbmFsUG9zaXRpb25zKSB7XG4gIGxldCByZXN1bHQgPSB0cnVlO1xuICBmb3IgKGNvbnN0IHBvcyBvZiBmaW5hbFBvc2l0aW9ucykge1xuICAgIGlmIChcbiAgICAgIHBvcy5zdGFydFswXSA8PSAxMCAmJlxuICAgICAgcG9zLnN0YXJ0WzBdID49IDEgJiZcbiAgICAgIHBvcy5lbmRbMF0gPD0gMTAgJiZcbiAgICAgIHBvcy5lbmRbMF0gPj0gMSAmJlxuICAgICAgcG9zLnN0YXJ0WzFdIDw9IDEwICYmXG4gICAgICBwb3Muc3RhcnRbMV0gPj0gMSAmJlxuICAgICAgcG9zLmVuZFsxXSA8PSAxMCAmJlxuICAgICAgcG9zLmVuZFsxXSA+PSAxXG4gICAgKSB7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZvcm1TdWJtaXRFdmVudChlKSB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgbGVuZ3RocyA9IFs0LCAzLCAyLCAyLCAxXTtcbiAgbGV0IHBvc2l0aW9ucyA9IFtcbiAgICBzaGlwMS52YWx1ZSxcbiAgICBzaGlwMi52YWx1ZSxcbiAgICBzaGlwMy52YWx1ZSxcbiAgICBzaGlwNC52YWx1ZSxcbiAgICBzaGlwNS52YWx1ZSxcbiAgXTtcbiAgbGV0IGFsaWdubWVudHMgPSBbXG4gICAgc2hpcDFBbGlnbm1lbnQudmFsdWUsXG4gICAgc2hpcDJBbGlnbm1lbnQudmFsdWUsXG4gICAgc2hpcDNBbGlnbm1lbnQudmFsdWUsXG4gICAgc2hpcDRBbGlnbm1lbnQudmFsdWUsXG4gICAgc2hpcDVBbGlnbm1lbnQudmFsdWUsXG4gIF07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgcG9zaXRpb25zW2ldID0gcG9zaXRpb25zW2ldLnNwbGl0KFwiLFwiKTtcbiAgICBwb3NpdGlvbnNbaV1bMF0gPSBwYXJzZUludChwb3NpdGlvbnNbaV1bMF0pO1xuICAgIHBvc2l0aW9uc1tpXVsxXSA9IHBhcnNlSW50KHBvc2l0aW9uc1tpXVsxXSk7XG4gIH1cbiAgbGV0IGZpbmFsUG9zaXRpb25zID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgaWYgKGFsaWdubWVudHNbaV0gPT09IFwieFwiKSB7XG4gICAgICBmaW5hbFBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgc3RhcnQ6IHBvc2l0aW9uc1tpXSxcbiAgICAgICAgZW5kOiBbcG9zaXRpb25zW2ldWzBdICsgbGVuZ3Roc1tpXSwgcG9zaXRpb25zW2ldWzFdXSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaW5hbFBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgc3RhcnQ6IHBvc2l0aW9uc1tpXSxcbiAgICAgICAgZW5kOiBbcG9zaXRpb25zW2ldWzBdLCBwb3NpdGlvbnNbaV1bMV0gKyBsZW5ndGhzW2ldXSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBpZihjaGVja1ZhbGlkaXR5KGZpbmFsUG9zaXRpb25zKSl7XG4gICAgcGxhY2VQbGF5ZXJTaGlwcyhmaW5hbFBvc2l0aW9ucyk7XG4gICAgdXBkYXRlVUkoKTtcbiAgfWVsc2V7XG4gICAgYWxlcnQoXCJpbnZhbGlkIGNvb3JkaW5hdGVzIVwiKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGlwRGlhbG9nTWFrZXIoKSB7XG4gIHJldHVybiBkaWFsb2c7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21vZHVsZXMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=