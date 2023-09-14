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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  margin: 0;
  padding: 0;
  /* border: 2px solid red; */
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}

header {
  display: flex;
  align-items: center;
  font-size: 54px;
  padding: 24px;
}

main {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 24px;
}

.player-grid,
.CPU-grid {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border: 4px solid black;
}

.cell-player,
.cell-cpu {
  height: 48px;
  width: 48px;
  border: 1px solid black;
}

.ship-cell {
  height: 48px;
  width: 48px;
  border: 1px solid black;
  background-color: black;
}

.ship-hit-cell,
.cpu-ship-hit-cell {
  height: 48px;
  width: 48px;
  border: 1px solid black;
  background-color: red;
}

.cell-hit,
.cpu-hit-cell {
  height: 48px;
  width: 48px;
  border: 1px solid black;
  background-color: rgb(169, 169, 169);
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,2BAA2B;EAC3B,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,aAAa;AACf;;AAEA;EACE,aAAa;EACb,WAAW;EACX,6BAA6B;EAC7B,aAAa;AACf;;AAEA;;EAEE,aAAa;EACb,sCAAsC;EACtC,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;;EAEE,YAAY;EACZ,WAAW;EACX,uBAAuB;EACvB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,QAAQ;EACR,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,eAAe;AACjB;;AAEA;EACE,oCAAoC;AACtC","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  /* border: 2px solid red; */\n  box-sizing: border-box;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 32px;\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  font-size: 54px;\n  padding: 24px;\n}\n\nmain {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  padding: 24px;\n}\n\n.player-grid,\n.CPU-grid {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border: 4px solid black;\n}\n\n.cell-player,\n.cell-cpu {\n  height: 48px;\n  width: 48px;\n  border: 1px solid black;\n}\n\n.ship-cell {\n  height: 48px;\n  width: 48px;\n  border: 1px solid black;\n  background-color: black;\n}\n\n.ship-hit-cell,\n.cpu-ship-hit-cell {\n  height: 48px;\n  width: 48px;\n  border: 1px solid black;\n  background-color: red;\n}\n\n.cell-hit,\n.cpu-hit-cell {\n  height: 48px;\n  width: 48px;\n  border: 1px solid black;\n  background-color: rgb(169, 169, 169);\n}\n\nfooter{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  gap: 8px;\n  padding-top: 24px;\n  padding-bottom: 10px;\n  font-size: 24px;\n}\n\n.fab{\n  color: black;\n  transition: 0.3s ease-in-out;\n  font-size: 24px;\n}\n\n.fab:hover{\n  transform: rotate(360deg) scale(1.2);\n}"],"sourceRoot":""}]);
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
    ship1: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1),
    ship2: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3),
    ship3: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1),
    ship4: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(5),
    ship5: (0,_ship_js__WEBPACK_IMPORTED_MODULE_0__["default"])(3),
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
/* harmony export */   player: () => (/* binding */ player),
/* harmony export */   playerMove: () => (/* binding */ playerMove)
/* harmony export */ });
/* harmony import */ var _gameBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard.js */ "./src/modules/gameBoard.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/modules/index.js");


let flag = 0;
let gameWinStatus = 0;

let playerPositions = [
  { start: [2, 8], end: [2, 8] },
  { start: [1, 1], end: [1, 3] },
  { start: [4, 2], end: [4, 2] },
  { start: [7, 3], end: [7, 7] },
  { start: [10, 8], end: [10, 10] },
];

let cpuPositions = [
  { start: [2, 8], end: [2, 8] },
  { start: [1, 1], end: [1, 3] },
  { start: [4, 2], end: [4, 2] },
  { start: [7, 3], end: [7, 7] },
  { start: [10, 8], end: [10, 10] },
];

const player = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(playerPositions);

const cpuPlayer = (0,_gameBoard_js__WEBPACK_IMPORTED_MODULE_0__["default"])(cpuPositions);

function gameStatusCheck(){
  if (player.allSunk()){
    alert("CPU wins the game!");
    gameWinStatus = 1;
  }else if(cpuPlayer.allSunk()){
    alert("Player wins the game!");
    gameWinStatus = 1;;
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






function updateUI() {
  const body = document.querySelector("body");
  const header = (0,_header_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const main = (0,_UI_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  const footer = (0,_commonFooter_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  body.textContent = '';
  body.append(header, main, footer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL1VJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jb21tb25Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2ZvbnRhd2Vzb21lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVQbGF5LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDMycHg7XG59XG5cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNTRweDtcbiAgcGFkZGluZzogMjRweDtcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLnBsYXllci1ncmlkLFxuLkNQVS1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGJsYWNrO1xufVxuXG4uY2VsbC1wbGF5ZXIsXG4uY2VsbC1jcHUge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnNoaXAtY2VsbCB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLnNoaXAtaGl0LWNlbGwsXG4uY3B1LXNoaXAtaGl0LWNlbGwge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY2VsbC1oaXQsXG4uY3B1LWhpdC1jZWxsIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjksIDE2OSwgMTY5KTtcbn1cblxuZm9vdGVye1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nLXRvcDogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZhYntcbiAgY29sb3I6IGJsYWNrO1xuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5mYWI6aG92ZXJ7XG4gIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDViwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osV0FBVztFQUNYLHVCQUF1QjtFQUN2QixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMzJweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1NHB4O1xcbiAgcGFkZGluZzogMjRweDtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDI0cHg7XFxufVxcblxcbi5wbGF5ZXItZ3JpZCxcXG4uQ1BVLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgYm9yZGVyOiA0cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5jZWxsLXBsYXllcixcXG4uY2VsbC1jcHUge1xcbiAgaGVpZ2h0OiA0OHB4O1xcbiAgd2lkdGg6IDQ4cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnNoaXAtY2VsbCB7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICB3aWR0aDogNDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5zaGlwLWhpdC1jZWxsLFxcbi5jcHUtc2hpcC1oaXQtY2VsbCB7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICB3aWR0aDogNDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY2VsbC1oaXQsXFxuLmNwdS1oaXQtY2VsbCB7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICB3aWR0aDogNDhweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2OSwgMTY5LCAxNjkpO1xcbn1cXG5cXG5mb290ZXJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBnYXA6IDhweDtcXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi5mYWJ7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4uZmFiOmhvdmVye1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxLjIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBwbGF5ZXIsIGNwdVBsYXllciB9IGZyb20gXCIuL2dhbWVQbGF5LmpzXCI7XG5pbXBvcnQgeyBwbGF5ZXJNb3ZlIH0gZnJvbSBcIi4vZ2FtZVBsYXkuanNcIjtcblxuZnVuY3Rpb24gYXR0YWNrRXZlbnQoZSkge1xuICBsZXQgW3Bvc2l0aW9uX3gsIHBvc2l0aW9uX3ldID0gZS50YXJnZXQuaWQuc3BsaXQoXCIsXCIpO1xuICBwb3NpdGlvbl94ID0gcGFyc2VJbnQocG9zaXRpb25feCk7XG4gIHBvc2l0aW9uX3kgPSBwYXJzZUludChwb3NpdGlvbl95KTtcbiAgcGxheWVyTW92ZShjcHVQbGF5ZXIsIHBvc2l0aW9uX3gsIHBvc2l0aW9uX3kpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7XG4gIGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBDUFVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMDsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgY29uc3QgZ3JpZENlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgaWYgKHBsYXllci5ib2FyZFtqXVtpXS5pc1NoaXAgJiYgcGxheWVyLmJvYXJkW2pdW2ldLmlzSGl0KSB7XG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWhpdC1jZWxsXCIpO1xuICAgICAgfSBlbHNlIGlmIChwbGF5ZXIuYm9hcmRbal1baV0uaXNTaGlwKSB7XG4gICAgICAgIGdyaWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWNlbGxcIik7XG4gICAgICB9IGVsc2UgaWYgKHBsYXllci5ib2FyZFtqXVtpXS5pc0hpdCkge1xuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1oaXRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1wbGF5ZXJcIik7XG4gICAgICB9XG4gICAgICBwbGF5ZXJHcmlkLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAxOyBqIDw9IDEwOyBqKyspIHtcbiAgICAgIGNvbnN0IGdyaWRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlmIChjcHVQbGF5ZXIuYm9hcmRbal1baV0uaXNIaXQgJiYgY3B1UGxheWVyLmJvYXJkW2pdW2ldLmlzU2hpcCkge1xuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY3B1LXNoaXAtaGl0LWNlbGxcIik7XG4gICAgICB9IGVsc2UgaWYgKGNwdVBsYXllci5ib2FyZFtqXVtpXS5pc0hpdCkge1xuICAgICAgICBncmlkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY3B1LWhpdC1jZWxsXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZ3JpZENlbGwuY2xhc3NMaXN0LmFkZChcImNlbGwtY3B1XCIpO1xuICAgICAgfVxuICAgICAgZ3JpZENlbGwuaWQgPSBgJHtqfSwke2l9YDtcbiAgICAgIGdyaWRDZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2tFdmVudCk7XG4gICAgICBDUFVHcmlkLmFwcGVuZENoaWxkKGdyaWRDZWxsKTtcbiAgICB9XG4gIH1cbiAgcGxheWVyR3JpZC5jbGFzc0xpc3QuYWRkKFwicGxheWVyLWdyaWRcIik7XG4gIENQVUdyaWQuY2xhc3NMaXN0LmFkZChcIkNQVS1ncmlkXCIpO1xuICBtYWluLmFwcGVuZChwbGF5ZXJHcmlkLCBDUFVHcmlkKTtcbiAgcmV0dXJuIG1haW47XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBmb290ZXIudGV4dENvbnRlbnQ9YENvcHlyaWdodCDCqSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gSGFyc2hhbFNoaXJvdGVgO1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9IYXJzaGFsc2hpcm90ZTIwMDInO1xuICAgIGEudGFyZ2V0PSdfYmxhbmsnO1xuICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYWInKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLWdpdGh1YicpO1xuICAgIGEuYXBwZW5kQ2hpbGQoaSk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGEpO1xuICAgIHJldHVybiBmb290ZXJcbn1cblxuIiwid2luZG93LkZvbnRBd2Vzb21lS2l0Q29uZmlnID0ge1wiYXN5bmNMb2FkaW5nXCI6e1wiZW5hYmxlZFwiOmZhbHNlfSxcImF1dG9BMTF5XCI6e1wiZW5hYmxlZFwiOnRydWV9LFwiYmFzZVVybFwiOlwiaHR0cHM6Ly9rYS1mLmZvbnRhd2Vzb21lLmNvbVwiLFwiYmFzZVVybEtpdFwiOlwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tXCIsXCJkZXRlY3RDb25mbGljdHNVbnRpbFwiOm51bGwsXCJpY29uVXBsb2Fkc1wiOnt9LFwiaWRcIjo4MDc2MjY3MyxcImxpY2Vuc2VcIjpcImZyZWVcIixcIm1ldGhvZFwiOlwiY3NzXCIsXCJtaW5pZnlcIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ0b2tlblwiOlwiNGM1MzZhNmJkNVwiLFwidjRGb250RmFjZVNoaW1cIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ2NHNoaW1cIjp7XCJlbmFibGVkXCI6dHJ1ZX0sXCJ2NUZvbnRGYWNlU2hpbVwiOntcImVuYWJsZWRcIjpmYWxzZX0sXCJ2ZXJzaW9uXCI6XCI1LjE1LjRcIn07XG4hZnVuY3Rpb24odCl7XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcImtpdC1sb2FkZXJcIix0KTp0KCl9KChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHQodCxlKXt2YXIgbj1PYmplY3Qua2V5cyh0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHQpO2UmJihyPXIuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LGUpLmVudW1lcmFibGV9KSkpLG4ucHVzaC5hcHBseShuLHIpfXJldHVybiBufWZ1bmN0aW9uIGUoZSl7Zm9yKHZhciBuPTE7bjxhcmd1bWVudHMubGVuZ3RoO24rKyl7dmFyIG89bnVsbCE9YXJndW1lbnRzW25dP2FyZ3VtZW50c1tuXTp7fTtuJTI/dChPYmplY3QobyksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe3IoZSx0LG9bdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMobykpOnQoT2JqZWN0KG8pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobyx0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gbih0KXtyZXR1cm4obj1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24odCl7cmV0dXJuIHR5cGVvZiB0fTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZ0LmNvbnN0cnVjdG9yPT09U3ltYm9sJiZ0IT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiB0fSkodCl9ZnVuY3Rpb24gcih0LGUsbil7cmV0dXJuKGU9ZnVuY3Rpb24odCl7dmFyIGU9ZnVuY3Rpb24odCxlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgdHx8bnVsbD09PXQpcmV0dXJuIHQ7dmFyIG49dFtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PW4pe3ZhciByPW4uY2FsbCh0LGV8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT10eXBlb2YgcilyZXR1cm4gcjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT1lP1N0cmluZzpOdW1iZXIpKHQpfSh0LFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PXR5cGVvZiBlP2U6U3RyaW5nKGUpfShlKSlpbiB0P09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LGUse3ZhbHVlOm4sZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTp0W2VdPW4sdH1mdW5jdGlvbiBvKHQsZSl7cmV0dXJuIGZ1bmN0aW9uKHQpe2lmKEFycmF5LmlzQXJyYXkodCkpcmV0dXJuIHR9KHQpfHxmdW5jdGlvbih0LGUpe3ZhciBuPW51bGw9PXQ/bnVsbDpcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZ0W1N5bWJvbC5pdGVyYXRvcl18fHRbXCJAQGl0ZXJhdG9yXCJdO2lmKG51bGwhPW4pe3ZhciByLG8saSxjLGE9W10sdT0hMCxmPSExO3RyeXtpZihpPShuPW4uY2FsbCh0KSkubmV4dCwwPT09ZSl7aWYoT2JqZWN0KG4pIT09bilyZXR1cm47dT0hMX1lbHNlIGZvcig7ISh1PShyPWkuY2FsbChuKSkuZG9uZSkmJihhLnB1c2goci52YWx1ZSksYS5sZW5ndGghPT1lKTt1PSEwKTt9Y2F0Y2godCl7Zj0hMCxvPXR9ZmluYWxseXt0cnl7aWYoIXUmJm51bGwhPW4ucmV0dXJuJiYoYz1uLnJldHVybigpLE9iamVjdChjKSE9PWMpKXJldHVybn1maW5hbGx5e2lmKGYpdGhyb3cgb319cmV0dXJuIGF9fSh0LGUpfHxmdW5jdGlvbih0LGUpe2lmKCF0KXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gaSh0LGUpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09biYmdC5jb25zdHJ1Y3RvciYmKG49dC5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4pcmV0dXJuIEFycmF5LmZyb20odCk7aWYoXCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKXJldHVybiBpKHQsZSl9KHQsZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpKHQsZSl7KG51bGw9PWV8fGU+dC5sZW5ndGgpJiYoZT10Lmxlbmd0aCk7Zm9yKHZhciBuPTAscj1uZXcgQXJyYXkoZSk7bjxlO24rKylyW25dPXRbbl07cmV0dXJuIHJ9ZnVuY3Rpb24gYyh0LGUpe3ZhciBuPWUmJmUuYWRkT258fFwiXCIscj1lJiZlLmJhc2VGaWxlbmFtZXx8dC5saWNlbnNlK24sbz1lJiZlLm1pbmlmeT9cIi5taW5cIjpcIlwiLGk9ZSYmZS5maWxlU3VmZml4fHx0Lm1ldGhvZCxjPWUmJmUuc3ViZGlyfHx0Lm1ldGhvZDtyZXR1cm4gdC5iYXNlVXJsK1wiL3JlbGVhc2VzL1wiKyhcImxhdGVzdFwiPT09dC52ZXJzaW9uP1wibGF0ZXN0XCI6XCJ2XCIuY29uY2F0KHQudmVyc2lvbikpK1wiL1wiK2MrXCIvXCIrcitvK1wiLlwiK2l9ZnVuY3Rpb24gYSh0LGUpe3ZhciBuPWV8fFtcImZhXCJdLHI9XCIuXCIrQXJyYXkucHJvdG90eXBlLmpvaW4uY2FsbChuLFwiLC5cIiksbz10LnF1ZXJ5U2VsZWN0b3JBbGwocik7QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChvLChmdW5jdGlvbihlKXt2YXIgbj1lLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpO2Uuc2V0QXR0cmlidXRlKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIik7dmFyIHI9IWUubmV4dEVsZW1lbnRTaWJsaW5nfHwhZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3Itb25seVwiKTtpZihuJiZyKXt2YXIgbz10LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO28uaW5uZXJIVE1MPW4sby5jbGFzc0xpc3QuYWRkKFwic3Itb25seVwiKSxlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG8sZS5uZXh0U2libGluZyl9fSkpfXZhciB1LGY9ZnVuY3Rpb24oKXt9LHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmdm9pZCAwIT09Z2xvYmFsLnByb2Nlc3MmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGdsb2JhbC5wcm9jZXNzLmVtaXQsbD1cInVuZGVmaW5lZFwiPT10eXBlb2Ygc2V0SW1tZWRpYXRlP3NldFRpbWVvdXQ6c2V0SW1tZWRpYXRlLGQ9W107ZnVuY3Rpb24gaCgpe2Zvcih2YXIgdD0wO3Q8ZC5sZW5ndGg7dCsrKWRbdF1bMF0oZFt0XVsxXSk7ZD1bXSx1PSExfWZ1bmN0aW9uIG0odCxlKXtkLnB1c2goW3QsZV0pLHV8fCh1PSEwLGwoaCwwKSl9ZnVuY3Rpb24gcCh0KXt2YXIgZT10Lm93bmVyLG49ZS5fc3RhdGUscj1lLl9kYXRhLG89dFtuXSxpPXQudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvKXtuPVwiZnVsZmlsbGVkXCI7dHJ5e3I9byhyKX1jYXRjaCh0KXtnKGksdCl9fXYoaSxyKXx8KFwiZnVsZmlsbGVkXCI9PT1uJiZiKGksciksXCJyZWplY3RlZFwiPT09biYmZyhpLHIpKX1mdW5jdGlvbiB2KHQsZSl7dmFyIHI7dHJ5e2lmKHQ9PT1lKXRocm93IG5ldyBUeXBlRXJyb3IoXCJBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuXCIpO2lmKGUmJihcImZ1bmN0aW9uXCI9PXR5cGVvZiBlfHxcIm9iamVjdFwiPT09bihlKSkpe3ZhciBvPWUudGhlbjtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvKXJldHVybiBvLmNhbGwoZSwoZnVuY3Rpb24obil7cnx8KHI9ITAsZT09PW4/eSh0LG4pOmIodCxuKSl9KSwoZnVuY3Rpb24oZSl7cnx8KHI9ITAsZyh0LGUpKX0pKSwhMH19Y2F0Y2goZSl7cmV0dXJuIHJ8fGcodCxlKSwhMH1yZXR1cm4hMX1mdW5jdGlvbiBiKHQsZSl7dCE9PWUmJnYodCxlKXx8eSh0LGUpfWZ1bmN0aW9uIHkodCxlKXtcInBlbmRpbmdcIj09PXQuX3N0YXRlJiYodC5fc3RhdGU9XCJzZXR0bGVkXCIsdC5fZGF0YT1lLG0oQSx0KSl9ZnVuY3Rpb24gZyh0LGUpe1wicGVuZGluZ1wiPT09dC5fc3RhdGUmJih0Ll9zdGF0ZT1cInNldHRsZWRcIix0Ll9kYXRhPWUsbShTLHQpKX1mdW5jdGlvbiB3KHQpe3QuX3RoZW49dC5fdGhlbi5mb3JFYWNoKHApfWZ1bmN0aW9uIEEodCl7dC5fc3RhdGU9XCJmdWxmaWxsZWRcIix3KHQpfWZ1bmN0aW9uIFModCl7dC5fc3RhdGU9XCJyZWplY3RlZFwiLHcodCksIXQuX2hhbmRsZWQmJnMmJmdsb2JhbC5wcm9jZXNzLmVtaXQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIix0Ll9kYXRhLHQpfWZ1bmN0aW9uIE8odCl7Z2xvYmFsLnByb2Nlc3MuZW1pdChcInJlamVjdGlvbkhhbmRsZWRcIix0KX1mdW5jdGlvbiBqKHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByb21pc2UgcmVzb2x2ZXIgXCIrdCtcIiBpcyBub3QgYSBmdW5jdGlvblwiKTtpZih0aGlzIGluc3RhbmNlb2Ygaj09ITEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1Byb21pc2UnOiBQbGVhc2UgdXNlIHRoZSAnbmV3JyBvcGVyYXRvciwgdGhpcyBvYmplY3QgY29uc3RydWN0b3IgY2Fubm90IGJlIGNhbGxlZCBhcyBhIGZ1bmN0aW9uLlwiKTt0aGlzLl90aGVuPVtdLGZ1bmN0aW9uKHQsZSl7ZnVuY3Rpb24gbih0KXtnKGUsdCl9dHJ5e3QoKGZ1bmN0aW9uKHQpe2IoZSx0KX0pLG4pfWNhdGNoKHQpe24odCl9fSh0LHRoaXMpfWoucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpqLF9zdGF0ZTpcInBlbmRpbmdcIixfdGhlbjpudWxsLF9kYXRhOnZvaWQgMCxfaGFuZGxlZDohMSx0aGVuOmZ1bmN0aW9uKHQsZSl7dmFyIG49e293bmVyOnRoaXMsdGhlbjpuZXcgdGhpcy5jb25zdHJ1Y3RvcihmKSxmdWxmaWxsZWQ6dCxyZWplY3RlZDplfTtyZXR1cm4hZSYmIXR8fHRoaXMuX2hhbmRsZWR8fCh0aGlzLl9oYW5kbGVkPSEwLFwicmVqZWN0ZWRcIj09PXRoaXMuX3N0YXRlJiZzJiZtKE8sdGhpcykpLFwiZnVsZmlsbGVkXCI9PT10aGlzLl9zdGF0ZXx8XCJyZWplY3RlZFwiPT09dGhpcy5fc3RhdGU/bShwLG4pOnRoaXMuX3RoZW4ucHVzaChuKSxuLnRoZW59LGNhdGNoOmZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLnRoZW4obnVsbCx0KX19LGouYWxsPWZ1bmN0aW9uKHQpe2lmKCFBcnJheS5pc0FycmF5KHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UuYWxsKCkuXCIpO3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXt2YXIgcj1bXSxvPTA7ZnVuY3Rpb24gaSh0KXtyZXR1cm4gbysrLGZ1bmN0aW9uKG4pe3JbdF09biwtLW98fGUocil9fWZvcih2YXIgYyxhPTA7YTx0Lmxlbmd0aDthKyspKGM9dFthXSkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGMudGhlbj9jLnRoZW4oaShhKSxuKTpyW2FdPWM7b3x8ZShyKX0pKX0sai5yYWNlPWZ1bmN0aW9uKHQpe2lmKCFBcnJheS5pc0FycmF5KHQpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIFByb21pc2UucmFjZSgpLlwiKTtyZXR1cm4gbmV3IGooKGZ1bmN0aW9uKGUsbil7Zm9yKHZhciByLG89MDtvPHQubGVuZ3RoO28rKykocj10W29dKSYmXCJmdW5jdGlvblwiPT10eXBlb2Ygci50aGVuP3IudGhlbihlLG4pOmUocil9KSl9LGoucmVzb2x2ZT1mdW5jdGlvbih0KXtyZXR1cm4gdCYmXCJvYmplY3RcIj09PW4odCkmJnQuY29uc3RydWN0b3I9PT1qP3Q6bmV3IGooKGZ1bmN0aW9uKGUpe2UodCl9KSl9LGoucmVqZWN0PWZ1bmN0aW9uKHQpe3JldHVybiBuZXcgaigoZnVuY3Rpb24oZSxuKXtuKHQpfSkpfTt2YXIgRT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBQcm9taXNlP1Byb21pc2U6ajtmdW5jdGlvbiBQKHQsZSl7dmFyIG49ZS5mZXRjaCxyPWUuWE1MSHR0cFJlcXVlc3Qsbz1lLnRva2VuLGk9dDtyZXR1cm4gbyYmIWZ1bmN0aW9uKHQpe3JldHVybiB0LmluZGV4T2YoXCJraXQtdXBsb2FkLmNzc1wiKT4tMX0odCkmJihcIlVSTFNlYXJjaFBhcmFtc1wiaW4gd2luZG93PyhpPW5ldyBVUkwodCkpLnNlYXJjaFBhcmFtcy5zZXQoXCJ0b2tlblwiLG8pOmk9aStcIj90b2tlbj1cIitlbmNvZGVVUklDb21wb25lbnQobykpLGk9aS50b1N0cmluZygpLG5ldyBFKChmdW5jdGlvbih0LGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4pbihpLHttb2RlOlwiY29yc1wiLGNhY2hlOlwiZGVmYXVsdFwifSkudGhlbigoZnVuY3Rpb24odCl7aWYodC5vaylyZXR1cm4gdC50ZXh0KCk7dGhyb3cgbmV3IEVycm9yKFwiXCIpfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3QoZSl9KSkuY2F0Y2goZSk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiByKXt2YXIgbz1uZXcgcjtvLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsKGZ1bmN0aW9uKCl7dGhpcy5yZXNwb25zZVRleHQ/dCh0aGlzLnJlc3BvbnNlVGV4dCk6ZShuZXcgRXJyb3IoXCJcIikpfSkpO1tcImFib3J0XCIsXCJlcnJvclwiLFwidGltZW91dFwiXS5tYXAoKGZ1bmN0aW9uKHQpe28uYWRkRXZlbnRMaXN0ZW5lcih0LChmdW5jdGlvbigpe2UobmV3IEVycm9yKFwiXCIpKX0pKX0pKSxvLm9wZW4oXCJHRVRcIixpKSxvLnNlbmQoKX1lbHNle2UobmV3IEVycm9yKFwiXCIpKX19KSl9ZnVuY3Rpb24gXyh0LGUsbil7dmFyIHI9dDtyZXR1cm5bWy8odXJsXFwoXCI/KVxcLlxcLlxcL1xcLlxcLlxcL1xcLlxcLi9nLGZ1bmN0aW9uKHQsbil7cmV0dXJuXCJcIi5jb25jYXQobikuY29uY2F0KGUpfV0sWy8odXJsXFwoXCI/KVxcLlxcLlxcL3dlYmZvbnRzL2csZnVuY3Rpb24odCxyKXtyZXR1cm5cIlwiLmNvbmNhdChyKS5jb25jYXQoZSxcIi9yZWxlYXNlcy92XCIpLmNvbmNhdChuLFwiL3dlYmZvbnRzXCIpfV0sWy8odXJsXFwoXCI/KWh0dHBzOlxcL1xcL2tpdC1mcmVlKFteLl0pKlxcLmZvbnRhd2Vzb21lXFwuY29tL2csZnVuY3Rpb24odCxuKXtyZXR1cm5cIlwiLmNvbmNhdChuKS5jb25jYXQoZSl9XV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7dmFyIGU9byh0LDIpLG49ZVswXSxpPWVbMV07cj1yLnJlcGxhY2UobixpKX0pKSxyfWZ1bmN0aW9uIEYodCxuKXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06ZnVuY3Rpb24oKXt9LG89bi5kb2N1bWVudHx8byxpPWEuYmluZChhLG8sW1wiZmFcIixcImZhYlwiLFwiZmFzXCIsXCJmYXJcIixcImZhbFwiLFwiZmFkXCIsXCJmYWtcIl0pO3QuYXV0b0ExMXkuZW5hYmxlZCYmcihpKTt2YXIgdT10LnN1YnNldFBhdGgmJnQuYmFzZVVybCtcIi9cIit0LnN1YnNldFBhdGgsZj1be2lkOlwiZmEtbWFpblwiLGFkZE9uOnZvaWQgMCx1cmw6dX1dO2lmKHQudjRzaGltJiZ0LnY0c2hpbS5lbmFibGVkJiZmLnB1c2goe2lkOlwiZmEtdjQtc2hpbXNcIixhZGRPbjpcIi12NC1zaGltc1wifSksdC52NUZvbnRGYWNlU2hpbSYmdC52NUZvbnRGYWNlU2hpbS5lbmFibGVkJiZmLnB1c2goe2lkOlwiZmEtdjUtZm9udC1mYWNlXCIsYWRkT246XCItdjUtZm9udC1mYWNlXCJ9KSx0LnY0Rm9udEZhY2VTaGltJiZ0LnY0Rm9udEZhY2VTaGltLmVuYWJsZWQmJmYucHVzaCh7aWQ6XCJmYS12NC1mb250LWZhY2VcIixhZGRPbjpcIi12NC1mb250LWZhY2VcIn0pLCF1JiZ0LmN1c3RvbUljb25zQ3NzUGF0aCl7dmFyIHM9dC5jdXN0b21JY29uc0Nzc1BhdGguaW5kZXhPZihcImtpdC11cGxvYWQuY3NzXCIpPi0xP3QuYmFzZVVybEtpdDp0LmJhc2VVcmwsbD1zK1wiL1wiK3QuY3VzdG9tSWNvbnNDc3NQYXRoO2YucHVzaCh7aWQ6XCJmYS1raXQtdXBsb2FkXCIsdXJsOmx9KX12YXIgZD1mLm1hcCgoZnVuY3Rpb24ocil7cmV0dXJuIG5ldyBFKChmdW5jdGlvbihvLGkpe3ZhciBhPXIudXJsfHxjKHQse2FkZE9uOnIuYWRkT24sbWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSx1PXtpZDpyLmlkfSxmPXQuc3Vic2V0P3U6ZShlKGUoe30sbiksdSkse30se2Jhc2VVcmw6dC5iYXNlVXJsLHZlcnNpb246dC52ZXJzaW9uLGlkOnIuaWQsY29udGVudEZpbHRlcjpmdW5jdGlvbih0LGUpe3JldHVybiBfKHQsZS5iYXNlVXJsLGUudmVyc2lvbil9fSk7UChhLG4pLnRoZW4oKGZ1bmN0aW9uKHQpe28oQyh0LGYpKX0pKS5jYXRjaChpKX0pKX0pKTtyZXR1cm4gRS5hbGwoZCl9ZnVuY3Rpb24gQyh0LGUpe3ZhciBuPWUuY29udGVudEZpbHRlcnx8ZnVuY3Rpb24odCxlKXtyZXR1cm4gdH0scj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIiksbz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuKHQsZSkpO3JldHVybiByLmFwcGVuZENoaWxkKG8pLHIubWVkaWE9XCJhbGxcIixlLmlkJiZyLnNldEF0dHJpYnV0ZShcImlkXCIsZS5pZCksZSYmZS5kZXRlY3RpbmdDb25mbGljdHMmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmci5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxyfWZ1bmN0aW9uIEkodCxuKXtuLmF1dG9BMTF5PXQuYXV0b0ExMXkuZW5hYmxlZCxcInByb1wiPT09dC5saWNlbnNlJiYobi5hdXRvRmV0Y2hTdmc9ITAsbi5mZXRjaFN2Z0Zyb209dC5iYXNlVXJsK1wiL3JlbGVhc2VzL1wiKyhcImxhdGVzdFwiPT09dC52ZXJzaW9uP1wibGF0ZXN0XCI6XCJ2XCIuY29uY2F0KHQudmVyc2lvbikpK1wiL3N2Z3NcIixuLmZldGNoVXBsb2FkZWRTdmdGcm9tPXQudXBsb2Fkc1VybCk7dmFyIHI9W107cmV0dXJuIHQudjRzaGltLmVuYWJsZWQmJnIucHVzaChuZXcgRSgoZnVuY3Rpb24ocixvKXtQKGModCx7YWRkT246XCItdjQtc2hpbXNcIixtaW5pZnk6dC5taW5pZnkuZW5hYmxlZH0pLG4pLnRoZW4oKGZ1bmN0aW9uKHQpe3IoVSh0LGUoZSh7fSxuKSx7fSx7aWQ6XCJmYS12NC1zaGltc1wifSkpKX0pKS5jYXRjaChvKX0pKSksci5wdXNoKG5ldyBFKChmdW5jdGlvbihyLG8pe1AodC5zdWJzZXRQYXRoJiZ0LmJhc2VVcmwrXCIvXCIrdC5zdWJzZXRQYXRofHxjKHQse21pbmlmeTp0Lm1pbmlmeS5lbmFibGVkfSksbikudGhlbigoZnVuY3Rpb24odCl7dmFyIG89VSh0LGUoZSh7fSxuKSx7fSx7aWQ6XCJmYS1tYWluXCJ9KSk7cihmdW5jdGlvbih0LGUpe3ZhciBuPWUmJnZvaWQgMCE9PWUuYXV0b0ZldGNoU3ZnP2UuYXV0b0ZldGNoU3ZnOnZvaWQgMCxyPWUmJnZvaWQgMCE9PWUuYXV0b0ExMXk/ZS5hdXRvQTExeTp2b2lkIDA7dm9pZCAwIT09ciYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWF1dG8tYTExeVwiLHI/XCJ0cnVlXCI6XCJmYWxzZVwiKTtuJiYodC5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShcImRhdGEtYXV0by1mZXRjaC1zdmdcIikpLHQuc2V0QXR0cmlidXRlKFwiZGF0YS1mZXRjaC1zdmctZnJvbVwiLGUuZmV0Y2hTdmdGcm9tKSx0LnNldEF0dHJpYnV0ZShcImRhdGEtZmV0Y2gtdXBsb2FkZWQtc3ZnLWZyb21cIixlLmZldGNoVXBsb2FkZWRTdmdGcm9tKSk7cmV0dXJuIHR9KG8sbikpfSkpLmNhdGNoKG8pfSkpKSxFLmFsbChyKX1mdW5jdGlvbiBVKHQsZSl7dmFyIG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNDUklQVFwiKSxyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHQpO3JldHVybiBuLmFwcGVuZENoaWxkKHIpLG4ucmVmZXJyZXJQb2xpY3k9XCJzdHJpY3Qtb3JpZ2luXCIsZS5pZCYmbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLGUuaWQpLGUmJmUuZGV0ZWN0aW5nQ29uZmxpY3RzJiZlLmRldGVjdGlvbklnbm9yZUF0dHImJm4uc2V0QXR0cmlidXRlTm9kZShkb2N1bWVudC5jcmVhdGVBdHRyaWJ1dGUoZS5kZXRlY3Rpb25JZ25vcmVBdHRyKSksbn1mdW5jdGlvbiBUKHQpe3ZhciBlLG49W10scj1kb2N1bWVudCxvPXIuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsLGk9KG8/L15sb2FkZWR8XmMvOi9ebG9hZGVkfF5pfF5jLykudGVzdChyLnJlYWR5U3RhdGUpO2l8fHIuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlPWZ1bmN0aW9uKCl7Zm9yKHIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixlKSxpPTE7ZT1uLnNoaWZ0KCk7KWUoKX0pLGk/c2V0VGltZW91dCh0LDApOm4ucHVzaCh0KX1mdW5jdGlvbiBMKHQpe1widW5kZWZpbmVkXCIhPXR5cGVvZiBNdXRhdGlvbk9ic2VydmVyJiZuZXcgTXV0YXRpb25PYnNlcnZlcih0KS5vYnNlcnZlKGRvY3VtZW50LHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pfXRyeXtpZih3aW5kb3cuRm9udEF3ZXNvbWVLaXRDb25maWcpe3ZhciBrPXdpbmRvdy5Gb250QXdlc29tZUtpdENvbmZpZyx4PXtkZXRlY3RpbmdDb25mbGljdHM6ay5kZXRlY3RDb25mbGljdHNVbnRpbCYmbmV3IERhdGU8PW5ldyBEYXRlKGsuZGV0ZWN0Q29uZmxpY3RzVW50aWwpLGRldGVjdGlvbklnbm9yZUF0dHI6XCJkYXRhLWZhLWRldGVjdGlvbi1pZ25vcmVcIixmZXRjaDp3aW5kb3cuZmV0Y2gsdG9rZW46ay50b2tlbixYTUxIdHRwUmVxdWVzdDp3aW5kb3cuWE1MSHR0cFJlcXVlc3QsZG9jdW1lbnQ6ZG9jdW1lbnR9LE09ZG9jdW1lbnQuY3VycmVudFNjcmlwdCxOPU0/TS5wYXJlbnRFbGVtZW50OmRvY3VtZW50LmhlYWQ7KGZ1bmN0aW9uKCl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOnt9LGU9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9O3JldHVyblwianNcIj09PXQubWV0aG9kP0kodCxlKTpcImNzc1wiPT09dC5tZXRob2Q/Rih0LGUsKGZ1bmN0aW9uKHQpe1QodCksTCh0KX0pKTp2b2lkIDB9KShrLHgpLnRoZW4oKGZ1bmN0aW9uKHQpe3QubWFwKChmdW5jdGlvbih0KXt0cnl7Ti5pbnNlcnRCZWZvcmUodCxNP00ubmV4dFNpYmxpbmc6bnVsbCl9Y2F0Y2goZSl7Ti5hcHBlbmRDaGlsZCh0KX19KSkseC5kZXRlY3RpbmdDb25mbGljdHMmJk0mJlQoKGZ1bmN0aW9uKCl7TS5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZSh4LmRldGVjdGlvbklnbm9yZUF0dHIpKTt2YXIgdD1mdW5jdGlvbih0LGUpe3ZhciBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7cmV0dXJuIGUmJmUuZGV0ZWN0aW9uSWdub3JlQXR0ciYmbi5zZXRBdHRyaWJ1dGVOb2RlKGRvY3VtZW50LmNyZWF0ZUF0dHJpYnV0ZShlLmRldGVjdGlvbklnbm9yZUF0dHIpKSxuLnNyYz1jKHQse2Jhc2VGaWxlbmFtZTpcImNvbmZsaWN0LWRldGVjdGlvblwiLGZpbGVTdWZmaXg6XCJqc1wiLHN1YmRpcjpcImpzXCIsbWluaWZ5OnQubWluaWZ5LmVuYWJsZWR9KSxufShrLHgpO2RvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodCl9KSl9KSkuY2F0Y2goKGZ1bmN0aW9uKHQpe2NvbnNvbGUuZXJyb3IoXCJcIi5jb25jYXQoXCJGb250IEF3ZXNvbWUgS2l0OlwiLFwiIFwiKS5jb25jYXQodCkpfSkpfX1jYXRjaCh0KXtjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KFwiRm9udCBBd2Vzb21lIEtpdDpcIixcIiBcIikuY29uY2F0KHQpKX19KSk7IiwiaW1wb3J0IHNoaXAgZnJvbSBcIi4vc2hpcC5qc1wiO1xuXG5jbGFzcyBib2FyZENlbGwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzSGl0ID0gZmFsc2U7XG4gICAgdGhpcy5zaGlwTmFtZSA9IG51bGw7XG4gICAgdGhpcy5pc1NoaXAgPSBmYWxzZTtcbiAgfVxuXG4gIGhpdENlbGwgPSAoKSA9PiB7XG4gICAgdGhpcy5pc0hpdCA9IHRydWU7XG4gIH07XG4gIG1ha2VTaGlwQ2VsbCA9IChzb21lU2hpcE5hbWUpID0+IHtcbiAgICBpZiAoIXRoaXMuaXNTaGlwKSB7XG4gICAgICB0aGlzLnNoaXBOYW1lID0gYCR7c29tZVNoaXBOYW1lfWA7XG4gICAgfVxuICAgIHRoaXMuaXNTaGlwID0gdHJ1ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2FtZUJvYXJkKHBvc2l0aW9ucykge1xuICBsZXQgYm9hcmQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTA7IGkrKykge1xuICAgIGJvYXJkW2ldID0gW107XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gMTA7IGorKykge1xuICAgICAgYm9hcmRbaV1bal0gPSBuZXcgYm9hcmRDZWxsKCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoaXBzID0ge1xuICAgIHNoaXAxOiBzaGlwKDEpLFxuICAgIHNoaXAyOiBzaGlwKDMpLFxuICAgIHNoaXAzOiBzaGlwKDEpLFxuICAgIHNoaXA0OiBzaGlwKDUpLFxuICAgIHNoaXA1OiBzaGlwKDMpLFxuICB9O1xuICBmb3IgKGxldCBwID0gMDsgcCA8IHBvc2l0aW9ucy5sZW5ndGg7IHArKykge1xuICAgIGxldCBzdGFydCA9IHBvc2l0aW9uc1twXS5zdGFydDtcbiAgICBsZXQgZW5kID0gcG9zaXRpb25zW3BdLmVuZDtcbiAgICBpZiAoc3RhcnRbMF0gPT09IGVuZFswXSkge1xuICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0WzFdOyBpIDw9IGVuZFsxXTsgaSsrKSB7XG4gICAgICAgIGJvYXJkW3N0YXJ0WzBdXVtpXS5tYWtlU2hpcENlbGwoYHNoaXAke3AgKyAxfWApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBqID0gc3RhcnRbMF07IGogPD0gZW5kWzBdOyBqKyspIHtcbiAgICAgICAgYm9hcmRbal1bc3RhcnRbMV1dLm1ha2VTaGlwQ2VsbChgc2hpcCR7cCArIDF9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAocG9zaXRpb24pID0+IHtcbiAgICBpZiAoIWJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0uaXNIaXQpIHtcbiAgICAgIGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0uaGl0Q2VsbCgpO1xuICAgIH1cbiAgICBpZiAoYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5pc1NoaXApIHtcbiAgICAgIGJvYXJkW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0uaGl0Q2VsbCgpO1xuICAgICAgc2hpcHNbYm9hcmRbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXS5zaGlwTmFtZV0uaGl0KCk7XG4gICAgfVxuICB9O1xuICBjb25zdCBhbGxTdW5rID0gKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHNoaXBzW1wic2hpcDFcIl0uaXNTdW5rKCkgJiZcbiAgICAgIHNoaXBzW1wic2hpcDJcIl0uaXNTdW5rKCkgJiZcbiAgICAgIHNoaXBzW1wic2hpcDNcIl0uaXNTdW5rKCkgJiZcbiAgICAgIHNoaXBzW1wic2hpcDRcIl0uaXNTdW5rKCkgJiZcbiAgICAgIHNoaXBzW1wic2hpcDVcIl0uaXNTdW5rKClcbiAgICApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuICByZXR1cm4geyBzaGlwcywgYm9hcmQsIGFsbFN1bmssIHJlY2VpdmVBdHRhY2sgfTtcbn1cbiIsImltcG9ydCBnYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkLmpzXCI7XG5pbXBvcnQgdXBkYXRlVUkgZnJvbSBcIi4vaW5kZXguanNcIjtcbmxldCBmbGFnID0gMDtcbmxldCBnYW1lV2luU3RhdHVzID0gMDtcblxubGV0IHBsYXllclBvc2l0aW9ucyA9IFtcbiAgeyBzdGFydDogWzIsIDhdLCBlbmQ6IFsyLCA4XSB9LFxuICB7IHN0YXJ0OiBbMSwgMV0sIGVuZDogWzEsIDNdIH0sXG4gIHsgc3RhcnQ6IFs0LCAyXSwgZW5kOiBbNCwgMl0gfSxcbiAgeyBzdGFydDogWzcsIDNdLCBlbmQ6IFs3LCA3XSB9LFxuICB7IHN0YXJ0OiBbMTAsIDhdLCBlbmQ6IFsxMCwgMTBdIH0sXG5dO1xuXG5sZXQgY3B1UG9zaXRpb25zID0gW1xuICB7IHN0YXJ0OiBbMiwgOF0sIGVuZDogWzIsIDhdIH0sXG4gIHsgc3RhcnQ6IFsxLCAxXSwgZW5kOiBbMSwgM10gfSxcbiAgeyBzdGFydDogWzQsIDJdLCBlbmQ6IFs0LCAyXSB9LFxuICB7IHN0YXJ0OiBbNywgM10sIGVuZDogWzcsIDddIH0sXG4gIHsgc3RhcnQ6IFsxMCwgOF0sIGVuZDogWzEwLCAxMF0gfSxcbl07XG5cbmV4cG9ydCBjb25zdCBwbGF5ZXIgPSBnYW1lQm9hcmQocGxheWVyUG9zaXRpb25zKTtcblxuZXhwb3J0IGNvbnN0IGNwdVBsYXllciA9IGdhbWVCb2FyZChjcHVQb3NpdGlvbnMpO1xuXG5mdW5jdGlvbiBnYW1lU3RhdHVzQ2hlY2soKXtcbiAgaWYgKHBsYXllci5hbGxTdW5rKCkpe1xuICAgIGFsZXJ0KFwiQ1BVIHdpbnMgdGhlIGdhbWUhXCIpO1xuICAgIGdhbWVXaW5TdGF0dXMgPSAxO1xuICB9ZWxzZSBpZihjcHVQbGF5ZXIuYWxsU3VuaygpKXtcbiAgICBhbGVydChcIlBsYXllciB3aW5zIHRoZSBnYW1lIVwiKTtcbiAgICBnYW1lV2luU3RhdHVzID0gMTs7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tQ29vcmRpbmF0ZUdlbmVyYXRvcigpIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xuICBsZXQgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XG4gIHJldHVybiBbaSwgal07XG59XG5cbmZ1bmN0aW9uIGNwdU1vdmUocGxheWVyKSB7XG4gIGxldCBpLCBqO1xuICBkbyB7XG4gICAgW2ksIGpdID0gcmFuZG9tQ29vcmRpbmF0ZUdlbmVyYXRvcigpO1xuICB9IHdoaWxlIChwbGF5ZXIuYm9hcmRbaV1bal0uaXNIaXQpO1xuICBwbGF5ZXIucmVjZWl2ZUF0dGFjayhbaSwgal0pO1xuICBnYW1lU3RhdHVzQ2hlY2soKTtcbiAgcmV0dXJuO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGxheWVyTW92ZShjcHVQbGF5ZXIsIHBvc2l0aW9uX3gsIHBvc2l0aW9uX3kpIHtcbiAgaWYgKGNwdVBsYXllci5ib2FyZFtwb3NpdGlvbl94XVtwb3NpdGlvbl95XS5pc0hpdCkge1xuICAgIGFsZXJ0KFwiY2VsbCBpcyBhbHJlYWR5IGhpdCFcIik7XG4gIH0gZWxzZSB7XG4gICAgY3B1UGxheWVyLnJlY2VpdmVBdHRhY2soW3Bvc2l0aW9uX3gsIHBvc2l0aW9uX3ldKTtcbiAgICBnYW1lU3RhdHVzQ2hlY2soKTtcbiAgICBjcHVNb3ZlKHBsYXllcik7XG4gICAgdXBkYXRlVUkoKTtcbiAgfVxufVxuXG5cblxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkJhdHRsZVNoaXBcIjtcbiAgcmV0dXJuIGhlYWRlcjtcbn1cbiIsImltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcbmltcG9ydCAnLi9mb250YXdlc29tZS5qcyc7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gJy4vY29tbW9uRm9vdGVyLmpzJztcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyLmpzXCI7XG5pbXBvcnQgdXBkYXRlRGlzcGxheSBmcm9tIFwiLi9VSS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVVSSgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgY29uc3QgbWFpbiA9IHVwZGF0ZURpc3BsYXkoKTtcbiAgY29uc3QgZm9vdGVyID0gY3JlYXRlRm9vdGVyKCk7XG4gIGJvZHkudGV4dENvbnRlbnQgPSAnJztcbiAgYm9keS5hcHBlbmQoaGVhZGVyLCBtYWluLCBmb290ZXIpO1xufVxuXG51cGRhdGVVSSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2hpcChsZW5ndGgpIHtcbiAgbGV0IG51bVRpbWVzSGl0ID0gMDtcbiAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgIG51bVRpbWVzSGl0Kys7XG4gIH07XG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICByZXR1cm4gKG51bVRpbWVzSGl0ID49IGxlbmd0aCk7XG4gIH07XG4gIHJldHVybiB7IGhpdCwgaXNTdW5rIH07XG59XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbW9kdWxlcy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==