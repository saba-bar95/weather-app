/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



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
/* 3 */
/***/ ((module) => {



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
/* 4 */
/***/ ((module) => {



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
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(13), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header-div {
  background: linear-gradient(to right, #232526, #414345);
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
}
#header-div h1 {
  font-size: 1.7em;
  font-family: "Icedrink";
  text-transform: capitalize;
  color: #d1d5db;
  letter-spacing: 0.06em;
}
#header-div .search-container {
  display: flex;
}
#header-div .search-container input {
  outline: none;
  padding: 7px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  font-family: "Icedrink";
  color: #475569;
  background-color: #e2e8f0;
  border: 1px solid #e2e8f0;
}
#header-div .search-container input:focus {
  border: 1px solid #d97706;
}
#header-div .search-container button {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 0.9em;
  text-transform: capitalize;
  background-color: #d97706;
  padding: 9px;
  border: none;
  color: #262626;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
#header-div .search-container button:hover {
  cursor: pointer;
}

#main-div .container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px;
  gap: 30px;
  font-family: "Icedrink";
  position: relative;
}
#main-div .container .texts {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #1f2937;
}
#main-div .container .texts h1 {
  font-size: 2.3em;
  text-align: center;
}
#main-div .container .texts h2 {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif;
  text-align: center;
  font-size: 1em;
}
#main-div .container .condition {
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#main-div .container .condition .upper {
  display: flex;
  justify-content: center;
  gap: 15px;
}
#main-div .container .condition .upper p {
  font-size: 2em;
  font-weight: 700;
  align-self: center;
  color: #1f2937;
}
#main-div .container .condition .lower {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#main-div .container .condition .lower p {
  font-size: 1.5em;
  color: #1f2937;
  text-align: center;
}
#main-div .container .condition .lower .feel,
#main-div .container .condition .lower .wind {
  font-size: 1.1em;
  color: #64748b;
  text-align: center;
}
#main-div .container .changer {
  position: absolute;
  top: 0;
  right: 0;
  font-family: inherit;
  padding: 8px 16px;
  border-radius: 12px;
  outline: none;
  border: none;
  background-color: #d97706;
  cursor: pointer;
}

@font-face {
  font-family: "Icedrink";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: "Nepoboy";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #d1d5db;
  height: 100vh;
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/index.scss","webpack://./src/styles/main.scss"],"names":[],"mappings":"AAEA;EACE,uDAHa;EAIb,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,SAAA;ACDF;ADGE;EACE,gBAAA;EACA,uBAAA;EACA,0BAAA;EACA,cAAA;EACA,sBAAA;ACDJ;ADIE;EACE,aAAA;ACFJ;ADII;EACE,aAAA;EACA,YAAA;EACA,YAAA;EACA,2BAAA;EACA,8BAAA;EACA,uBAAA;EACA,cAAA;EACA,yBAAA;EACA,yBAAA;ACFN;ADGM;EACE,yBAAA;ACDR;ADKI;EACE,mJAAA;EAGA,gBAAA;EACA,0BAAA;EACA,yBAAA;EACA,YAAA;EACA,YAAA;EACA,cAAA;EACA,4BAAA;EACA,+BAAA;ACLN;ADMM;EACE,eAAA;ACJR;;AC3CE;EACE,aAAA;EACA,uBAAA;EACA,sBAAA;EACA,YAAA;EACA,SAAA;EACA,uBAAA;EACA,kBAAA;AD8CJ;AC5CI;EACE,aAAA;EACA,sBAAA;EACA,SAAA;EACA,cAAA;AD8CN;AC5CM;EACE,gBAAA;EACA,kBAAA;AD8CR;AC3CM;EACE,qGAAA;EAEA,kBAAA;EACA,cAAA;AD4CR;ACxCI;EACE,YAAA;EACA,aAAA;EACA,sBAAA;EACA,SAAA;AD0CN;ACxCM;EACE,aAAA;EACA,uBAAA;EACA,SAAA;AD0CR;ACxCQ;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,cAAA;AD0CV;ACtCM;EACE,aAAA;EACA,sBAAA;EACA,SAAA;ADwCR;ACtCQ;EACE,gBAAA;EACA,cAAA;EACA,kBAAA;ADwCV;ACrCQ;;EAEE,gBAAA;EACA,cAAA;EACA,kBAAA;ADuCV;AClCI;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,oBAAA;EACA,iBAAA;EACA,mBAAA;EACA,aAAA;EACA,YAAA;EACA,yBAAA;EACA,eAAA;ADoCN;;AA/GA;EACE,uBAAA;EACA,4CAAA;AAkHF;AA/GA;EACE,sBAAA;EACA,4CAAA;AAiHF;AA5GA;EACE,SAAA;EACA,UAAA;EACA,sBAAA;AA8GF;;AA3GA;EACE,mBATW;EAUX,aAAA;AA8GF","sourcesContent":["$header-color: linear-gradient(to right, #232526, #414345);\n\n#header-div {\n  background: $header-color;\n  padding: 30px 20px;\n  display: flex;\n  justify-content: center;\n  gap: 20px;\n\n  h1 {\n    font-size: 1.7em;\n    font-family: \"Icedrink\";\n    text-transform: capitalize;\n    color: #d1d5db;\n    letter-spacing: 0.06em;\n  }\n\n  .search-container {\n    display: flex;\n\n    input {\n      outline: none;\n      padding: 7px;\n      border: none;\n      border-top-left-radius: 5px;\n      border-bottom-left-radius: 5px;\n      font-family: \"Icedrink\";\n      color: #475569;\n      background-color: #e2e8f0;\n      border: 1px solid #e2e8f0;\n      &:focus {\n        border: 1px solid #d97706;\n      }\n    }\n\n    button {\n      font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\",\n        Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\",\n        sans-serif;\n      font-size: 0.9em;\n      text-transform: capitalize;\n      background-color: #d97706;\n      padding: 9px;\n      border: none;\n      color: #262626;\n      border-top-right-radius: 5px;\n      border-bottom-right-radius: 5px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","@use \"/src/styles/header.scss\";\n@use \"/src/styles/main.scss\";\n\n@font-face {\n  font-family: \"Icedrink\";\n  src: url(\"/src/assets/fonts/youngserif.regular.otf\");\n}\n\n@font-face {\n  font-family: \"Nepoboy\";\n  src: url(\"/src/assets/fonts/Nepoboy-K7Y4Z.ttf\");\n}\n\n$body-color: #d1d5db;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background: $body-color;\n  height: 100vh;\n}\n","#main-div {\n  .container {\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    margin: 50px;\n    gap: 30px;\n    font-family: \"Icedrink\";\n    position: relative;\n\n    .texts {\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n      color: #1f2937;\n\n      h1 {\n        font-size: 2.3em;\n        text-align: center;\n      }\n\n      h2 {\n        font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\",\n          \"Lucida Sans\", Arial, sans-serif;\n        text-align: center;\n        font-size: 1em;\n      }\n    }\n\n    .condition {\n      margin: auto;\n      display: flex;\n      flex-direction: column;\n      gap: 10px;\n\n      .upper {\n        display: flex;\n        justify-content: center;\n        gap: 15px;\n\n        p {\n          font-size: 2em;\n          font-weight: 700;\n          align-self: center;\n          color: #1f2937;\n        }\n      }\n\n      .lower {\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        p {\n          font-size: 1.5em;\n          color: #1f2937;\n          text-align: center;\n        }\n\n        .feel,\n        .wind {\n          font-size: 1.1em;\n          color: #64748b;\n          text-align: center;\n        }\n      }\n    }\n\n    .changer {\n      position: absolute;\n      top: 0;\n      right: 0;\n      font-family: inherit;\n      padding: 8px 16px;\n      border-radius: 12px;\n      outline: none;\n      border: none;\n      background-color: #d97706;\n      cursor: pointer;\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



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
/* 10 */
/***/ ((module) => {



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
/* 11 */
/***/ ((module) => {



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
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c92775635d0307871782.otf";

/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ca749ab4c57d13926a25.ttf";

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _logic_checkSearchValidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _logic_getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);
/* harmony import */ var _main_update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);




function header() {
  const div = document.createElement("div");
  div.setAttribute("id", "header-div");

  const header = document.createElement("h1");
  header.textContent = "weather";
  div.appendChild(header);

  const searchContainer = document.createElement("div");
  searchContainer.classList.add("search-container");
  div.appendChild(searchContainer);

  const searchInput = document.createElement("input");
  searchInput.classList.add("search-input");
  searchInput.setAttribute("placeholder", "Search Location");
  searchInput.setAttribute("type", "search");
  searchInput.setAttribute("minlength", 2);
  searchContainer.appendChild(searchInput);

  const searchBtn = document.createElement("button");
  searchBtn.textContent = "search";
  searchBtn.classList.add("search-btn");
  searchContainer.appendChild(searchBtn);

  searchInput.addEventListener("keydown", function (e) {
    if (e.key == "Enter" && (0,_logic_checkSearchValidity__WEBPACK_IMPORTED_MODULE_0__["default"])(this)) {
      setData();
      this.value = "";
    }
  });

  searchBtn.addEventListener("click", function () {
    if ((0,_logic_checkSearchValidity__WEBPACK_IMPORTED_MODULE_0__["default"])(searchInput)) {
      setData();
      searchInput.value = "";
      searchInput.focus();
    }
  });

  async function setData() {
    try {
      const data = await (0,_logic_getData__WEBPACK_IMPORTED_MODULE_1__["default"])(searchInput.value);
      if (data.error && data.error.code === 1006) {
        alert(data.error.message);
        return;
      }
      document.querySelector(".container").remove();
      (0,_main_update__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return div;
}


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkSearchValidity)
/* harmony export */ });
function checkSearchValidity(input) {
  if ((input.value && !input.checkValidity()) || !input.value) {
    alert("Enter more than one letter");
    return false;
  } else return true;
}


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getData)
/* harmony export */ });
async function getData(val) {
  try {
    const location = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=02acb9e290594790a2995550231412&q=${val}&aqi=no`
    );
    const parsedLocation = await location.json();
    return parsedLocation;
  } catch (err) {
    return err;
  }
}


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateLocation)
/* harmony export */ });
/* harmony import */ var _logic_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


function updateLocation(data) {
  console.log(data);
  const main = document.querySelector("#main-div");

  const container = document.createElement("div");
  container.classList.add("container");
  main.appendChild(container);

  const texts = document.createElement("div");
  texts.classList.add("texts");
  container.appendChild(texts);

  const header = document.createElement("h1");
  header.textContent = data.location.name + ", ";
  header.textContent += data.location.country;
  texts.appendChild(header);

  const time = document.createElement("h2");
  texts.appendChild(time);
  time.textContent = updateTime(data);

  const condition = document.createElement("div");
  condition.classList.add("condition");
  container.appendChild(condition);

  const upper = document.createElement("div");
  upper.classList.add("upper");
  condition.appendChild(upper);

  const image = new Image();
  image.src = data.current.condition.icon;
  upper.appendChild(image);

  const temp = document.createElement("p");
  temp.classList.add("temp-c");
  temp.textContent = data.current.temp_c + "°C";
  upper.appendChild(temp);

  const lower = document.createElement("div");
  lower.classList.add("lower");
  condition.appendChild(lower);

  const text = document.createElement("p");
  text.textContent = data.current.condition.text;
  lower.appendChild(text);

  const feel = document.createElement("p");
  feel.classList.add("feel");
  feel.textContent = `Feels like ${data.current.feelslike_c}°C`;
  lower.appendChild(feel);

  const wind = document.createElement("p");
  wind.classList.add("wind");
  wind.textContent = `Wind ${data.current.wind_kph} kph`;
  lower.appendChild(wind);

  const changer = document.createElement("button");
  changer.textContent = "°C to °F";
  changer.classList.add("changer");
  container.appendChild(changer);

  changer.addEventListener("click", function () {
    if (temp.classList.contains("temp-c")) {
      temp.textContent = data.current.temp_f + "°F";
      temp.classList.remove("temp-c");
      temp.classList.add("temp-f");
      changer.textContent = "°F to °C";
      feel.textContent = `Feels like ${data.current.feelslike_f}°F`;

      return;
    }
    if (temp.classList.contains("temp-f")) {
      temp.textContent = data.current.temp_c + "°C";
      temp.classList.add("temp-c");
      temp.classList.remove("temp-f");
      changer.textContent = "°C to °F";
      feel.textContent = `Feels like ${data.current.feelslike_c}°C`;
      return;
    }
  });

  // To update time for every minute
  setInterval(function () {
    (0,_logic_getData__WEBPACK_IMPORTED_MODULE_0__["default"])(data.location.name).then((data) => {
      time.textContent = updateTime(data);
    });
  }, 60000);
}

function updateTime(data) {
  const date = new Date(data.location.localtime);
  const weekday = date.toLocaleString("en-US", {
    weekday: "long",
  });
  const month = date.toLocaleString("en-US", {
    month: "long",
  });
  const day = date.toLocaleString("en-US", {
    day: "numeric",
  });
  const year = date.toLocaleString("en-US", {
    year: "numeric",
  });
  const getHour = date.getHours();
  const getMinutes = date.getMinutes();

  let hour, minute;
  if (getHour < 12) {
    hour = "0" + getHour;
  } else hour = getHour;
  if (getMinutes < 10) {
    minute = "0" + getMinutes;
  } else minute = getMinutes;

  return `${weekday}, ${day} ${month} ${year} | ${hour}:${minute}`;
}


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ main)
/* harmony export */ });
function main() {
  const div = document.createElement("div");
  div.setAttribute("id", "main-div");

  const container = document.createElement("div");
  container.classList.add("container");

  return div;
}


/***/ })
/******/ 	]);
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
/******/ 			0: 0
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_dom_header_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _components_dom_main_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _components_logic_getData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16);
/* harmony import */ var _components_dom_main_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17);






const initLocation = "Tbilisi";

const body = document.querySelector("body");
body.appendChild((0,_components_dom_header_create__WEBPACK_IMPORTED_MODULE_1__["default"])());
body.appendChild((0,_components_dom_main_create__WEBPACK_IMPORTED_MODULE_2__["default"])());

(0,_components_logic_getData__WEBPACK_IMPORTED_MODULE_3__["default"])(initLocation).then((data) => {
  (0,_components_dom_main_update__WEBPACK_IMPORTED_MODULE_4__["default"])(data);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBNEk7QUFDNUk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlzRjtBQUM5RyxPQUFPLGlFQUFlLDRIQUFPLElBQUksNEhBQU8sVUFBVSw0SEFBTyxtQkFBbUIsRUFBQzs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25GYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNURhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlFQUEyRDtBQUN2Ryw0Q0FBNEMsaUVBQXNEO0FBQ2xHLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyx5SkFBeUosV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFB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LEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDMkI7QUFDSjtBQUNDO0FBQ1M7O0FBRTFEOztBQUVBO0FBQ0EsaUJBQWlCLHlFQUFNO0FBQ3ZCLGlCQUFpQix1RUFBSTs7QUFFckIscUVBQU87QUFDUCxFQUFFLHVFQUFjO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2RvbS9oZWFkZXIvY3JlYXRlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvY2hlY2tTZWFyY2hWYWxpZGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMveW91bmdzZXJpZi5yZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL05lcG9ib3ktSzdZNFoudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2hlYWRlci1kaXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMzI1MjYsICM0MTQzNDUpO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDIwcHg7XG59XG4jaGVhZGVyLWRpdiBoMSB7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGZvbnQtZmFtaWx5OiBcIkljZWRyaW5rXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogI2QxZDVkYjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTtcbn1cbiNoZWFkZXItZGl2IC5zZWFyY2gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiNoZWFkZXItZGl2IC5zZWFyY2gtY29udGFpbmVyIGlucHV0IHtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICBmb250LWZhbWlseTogXCJJY2Vkcmlua1wiO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcbn1cbiNoZWFkZXItZGl2IC5zZWFyY2gtY29udGFpbmVyIGlucHV0OmZvY3VzIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5NzcwNjtcbn1cbiNoZWFkZXItZGl2IC5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOTc3MDY7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzI2MjYyNjtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbn1cbiNoZWFkZXItZGl2IC5zZWFyY2gtY29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21haW4tZGl2IC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiA1MHB4O1xuICBnYXA6IDMwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIkljZWRyaW5rXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNtYWluLWRpdiAuY29udGFpbmVyIC50ZXh0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgY29sb3I6ICMxZjI5Mzc7XG59XG4jbWFpbi1kaXYgLmNvbnRhaW5lciAudGV4dHMgaDEge1xuICBmb250LXNpemU6IDIuM2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbWFpbi1kaXYgLmNvbnRhaW5lciAudGV4dHMgaDIge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgXCJMdWNpZGEgU2FucyBVbmljb2RlXCIsIFwiTHVjaWRhIEdyYW5kZVwiLCBcIkx1Y2lkYSBTYW5zXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuI21haW4tZGl2IC5jb250YWluZXIgLmNvbmRpdGlvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuI21haW4tZGl2IC5jb250YWluZXIgLmNvbmRpdGlvbiAudXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xufVxuI21haW4tZGl2IC5jb250YWluZXIgLmNvbmRpdGlvbiAudXBwZXIgcCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWYyOTM3O1xufVxuI21haW4tZGl2IC5jb250YWluZXIgLmNvbmRpdGlvbiAubG93ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG59XG4jbWFpbi1kaXYgLmNvbnRhaW5lciAuY29uZGl0aW9uIC5sb3dlciBwIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNtYWluLWRpdiAuY29udGFpbmVyIC5jb25kaXRpb24gLmxvd2VyIC5mZWVsLFxuI21haW4tZGl2IC5jb250YWluZXIgLmNvbmRpdGlvbiAubG93ZXIgLndpbmQge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI21haW4tZGl2IC5jb250YWluZXIgLmNoYW5nZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk3NzA2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJJY2Vkcmlua1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJOZXBvYm95XCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICNkMWQ1ZGI7XG4gIGhlaWdodDogMTAwdmg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1REFIYTtFQUliLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0RGO0FER0U7RUFDRSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUNESjtBRElFO0VBQ0UsYUFBQTtBQ0ZKO0FESUk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0ZOO0FER007RUFDRSx5QkFBQTtBQ0RSO0FES0k7RUFDRSxtSkFBQTtFQUdBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7QUNMTjtBRE1NO0VBQ0UsZUFBQTtBQ0pSOztBQzNDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FEOENKO0FDNUNJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUQ4Q047QUM1Q007RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FEOENSO0FDM0NNO0VBQ0UscUdBQUE7RUFFQSxrQkFBQTtFQUNBLGNBQUE7QUQ0Q1I7QUN4Q0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBRDBDTjtBQ3hDTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUQwQ1I7QUN4Q1E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUQwQ1Y7QUN0Q007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FEd0NSO0FDdENRO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUR3Q1Y7QUNyQ1E7O0VBRUUsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUR1Q1Y7QUNsQ0k7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QURvQ047O0FBL0dBO0VBQ0UsdUJBQUE7RUFDQSw0Q0FBQTtBQWtIRjtBQS9HQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7QUFpSEY7QUE1R0E7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBOEdGOztBQTNHQTtFQUNFLG1CQVRXO0VBVVgsYUFBQTtBQThHRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIkaGVhZGVyLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMzI1MjYsICM0MTQzNDUpO1xcblxcbiNoZWFkZXItZGl2IHtcXG4gIGJhY2tncm91bmQ6ICRoZWFkZXItY29sb3I7XFxuICBwYWRkaW5nOiAzMHB4IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDIwcHg7XFxuXFxuICBoMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43ZW07XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiSWNlZHJpbmtcXFwiO1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG4gICAgY29sb3I6ICNkMWQ1ZGI7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2ZW07XFxuICB9XFxuXFxuICAuc2VhcmNoLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuXFxuICAgIGlucHV0IHtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDdweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkljZWRyaW5rXFxcIjtcXG4gICAgICBjb2xvcjogIzQ3NTU2OTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XFxuICAgICAgJjpmb2N1cyB7XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDk3NzA2O1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIixcXG4gICAgICAgIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsXFxuICAgICAgICBzYW5zLXNlcmlmO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NzcwNjtcXG4gICAgICBwYWRkaW5nOiA5cHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGNvbG9yOiAjMjYyNjI2O1xcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlIFxcXCIvc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiL3NyYy9zdHlsZXMvbWFpbi5zY3NzXFxcIjtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSWNlZHJpbmtcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ZvbnRzL3lvdW5nc2VyaWYucmVndWxhci5vdGZcXFwiKTtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIk5lcG9ib3lcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ZvbnRzL05lcG9ib3ktSzdZNFoudHRmXFxcIik7XFxufVxcblxcbiRib2R5LWNvbG9yOiAjZDFkNWRiO1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogJGJvZHktY29sb3I7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cIixcIiNtYWluLWRpdiB7XFxuICAuY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbjogNTBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBmb250LWZhbWlseTogXFxcIkljZWRyaW5rXFxcIjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgICAudGV4dHMge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDEwcHg7XFxuICAgICAgY29sb3I6ICMxZjI5Mzc7XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAyLjNlbTtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgaDIge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJUcmVidWNoZXQgTVNcXFwiLCBcXFwiTHVjaWRhIFNhbnMgVW5pY29kZVxcXCIsIFxcXCJMdWNpZGEgR3JhbmRlXFxcIixcXG4gICAgICAgICAgXFxcIkx1Y2lkYSBTYW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNvbmRpdGlvbiB7XFxuICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDEwcHg7XFxuXFxuICAgICAgLnVwcGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTVweDtcXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICBjb2xvcjogIzFmMjkzNztcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmxvd2VyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICAgICAgcCB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgICAgIGNvbG9yOiAjMWYyOTM3O1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZmVlbCxcXG4gICAgICAgIC53aW5kIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcXG4gICAgICAgICAgY29sb3I6ICM2NDc0OGI7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNoYW5nZXIge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICB0b3A6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgcGFkZGluZzogOHB4IDE2cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk3NzA2O1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJpbXBvcnQgY2hlY2tTZWFyY2hWYWxpZGl0eSBmcm9tIFwiLi4vLi4vbG9naWMvY2hlY2tTZWFyY2hWYWxpZGl0eVwiO1xuaW1wb3J0IGdldERhdGEgZnJvbSBcIi4uLy4uL2xvZ2ljL2dldERhdGFcIjtcbmltcG9ydCB1cGRhdGVMb2NhdGlvbiBmcm9tIFwiLi4vbWFpbi91cGRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGVhZGVyKCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItZGl2XCIpO1xuXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJ3ZWF0aGVyXCI7XG4gIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIGNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2VhcmNoLWNvbnRhaW5lclwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHNlYXJjaENvbnRhaW5lcik7XG5cbiAgY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNlYXJjaElucHV0LmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtaW5wdXRcIik7XG4gIHNlYXJjaElucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiU2VhcmNoIExvY2F0aW9uXCIpO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic2VhcmNoXCIpO1xuICBzZWFyY2hJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5sZW5ndGhcIiwgMik7XG4gIHNlYXJjaENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWFyY2hJbnB1dCk7XG5cbiAgY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2VhcmNoQnRuLnRleHRDb250ZW50ID0gXCJzZWFyY2hcIjtcbiAgc2VhcmNoQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWFyY2gtYnRuXCIpO1xuICBzZWFyY2hDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnRuKTtcblxuICBzZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PSBcIkVudGVyXCIgJiYgY2hlY2tTZWFyY2hWYWxpZGl0eSh0aGlzKSkge1xuICAgICAgc2V0RGF0YSgpO1xuICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9KTtcblxuICBzZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2hlY2tTZWFyY2hWYWxpZGl0eShzZWFyY2hJbnB1dCkpIHtcbiAgICAgIHNldERhdGEoKTtcbiAgICAgIHNlYXJjaElucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgIHNlYXJjaElucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiBzZXREYXRhKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RGF0YShzZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgICBpZiAoZGF0YS5lcnJvciAmJiBkYXRhLmVycm9yLmNvZGUgPT09IDEwMDYpIHtcbiAgICAgICAgYWxlcnQoZGF0YS5lcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIikucmVtb3ZlKCk7XG4gICAgICB1cGRhdGVMb2NhdGlvbihkYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkaXY7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja1NlYXJjaFZhbGlkaXR5KGlucHV0KSB7XG4gIGlmICgoaW5wdXQudmFsdWUgJiYgIWlucHV0LmNoZWNrVmFsaWRpdHkoKSkgfHwgIWlucHV0LnZhbHVlKSB7XG4gICAgYWxlcnQoXCJFbnRlciBtb3JlIHRoYW4gb25lIGxldHRlclwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldERhdGEodmFsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2N1cnJlbnQuanNvbj9rZXk9MDJhY2I5ZTI5MDU5NDc5MGEyOTk1NTUwMjMxNDEyJnE9JHt2YWx9JmFxaT1ub2BcbiAgICApO1xuICAgIGNvbnN0IHBhcnNlZExvY2F0aW9uID0gYXdhaXQgbG9jYXRpb24uanNvbigpO1xuICAgIHJldHVybiBwYXJzZWRMb2NhdGlvbjtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGVycjtcbiAgfVxufVxuIiwiaW1wb3J0IGdldERhdGEgZnJvbSBcIi4uLy4uL2xvZ2ljL2dldERhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb24oZGF0YSkge1xuICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaXZcIik7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCB0ZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRzLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0c1wiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRzKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IGRhdGEubG9jYXRpb24ubmFtZSArIFwiLCBcIjtcbiAgaGVhZGVyLnRleHRDb250ZW50ICs9IGRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgdGV4dHMuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0ZXh0cy5hcHBlbmRDaGlsZCh0aW1lKTtcbiAgdGltZS50ZXh0Q29udGVudCA9IHVwZGF0ZVRpbWUoZGF0YSk7XG5cbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uZGl0aW9uLmNsYXNzTGlzdC5hZGQoXCJjb25kaXRpb25cIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuXG4gIGNvbnN0IHVwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXBwZXIuY2xhc3NMaXN0LmFkZChcInVwcGVyXCIpO1xuICBjb25kaXRpb24uYXBwZW5kQ2hpbGQodXBwZXIpO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGRhdGEuY3VycmVudC5jb25kaXRpb24uaWNvbjtcbiAgdXBwZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGVtcC5jbGFzc0xpc3QuYWRkKFwidGVtcC1jXCIpO1xuICB0ZW1wLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnRlbXBfYyArIFwiwrBDXCI7XG4gIHVwcGVyLmFwcGVuZENoaWxkKHRlbXApO1xuXG4gIGNvbnN0IGxvd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG93ZXIuY2xhc3NMaXN0LmFkZChcImxvd2VyXCIpO1xuICBjb25kaXRpb24uYXBwZW5kQ2hpbGQobG93ZXIpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IGRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcbiAgbG93ZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgY29uc3QgZmVlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBmZWVsLmNsYXNzTGlzdC5hZGQoXCJmZWVsXCIpO1xuICBmZWVsLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2N9wrBDYDtcbiAgbG93ZXIuYXBwZW5kQ2hpbGQoZmVlbCk7XG5cbiAgY29uc3Qgd2luZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB3aW5kLmNsYXNzTGlzdC5hZGQoXCJ3aW5kXCIpO1xuICB3aW5kLnRleHRDb250ZW50ID0gYFdpbmQgJHtkYXRhLmN1cnJlbnQud2luZF9rcGh9IGtwaGA7XG4gIGxvd2VyLmFwcGVuZENoaWxkKHdpbmQpO1xuXG4gIGNvbnN0IGNoYW5nZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjaGFuZ2VyLnRleHRDb250ZW50ID0gXCLCsEMgdG8gwrBGXCI7XG4gIGNoYW5nZXIuY2xhc3NMaXN0LmFkZChcImNoYW5nZXJcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGFuZ2VyKTtcblxuICBjaGFuZ2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRlbXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGVtcC1jXCIpKSB7XG4gICAgICB0ZW1wLnRleHRDb250ZW50ID0gZGF0YS5jdXJyZW50LnRlbXBfZiArIFwiwrBGXCI7XG4gICAgICB0ZW1wLmNsYXNzTGlzdC5yZW1vdmUoXCJ0ZW1wLWNcIik7XG4gICAgICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0ZW1wLWZcIik7XG4gICAgICBjaGFuZ2VyLnRleHRDb250ZW50ID0gXCLCsEYgdG8gwrBDXCI7XG4gICAgICBmZWVsLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2Z9wrBGYDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGVtcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ0ZW1wLWZcIikpIHtcbiAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBkYXRhLmN1cnJlbnQudGVtcF9jICsgXCLCsENcIjtcbiAgICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcInRlbXAtY1wiKTtcbiAgICAgIHRlbXAuY2xhc3NMaXN0LnJlbW92ZShcInRlbXAtZlwiKTtcbiAgICAgIGNoYW5nZXIudGV4dENvbnRlbnQgPSBcIsKwQyB0byDCsEZcIjtcbiAgICAgIGZlZWwudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke2RhdGEuY3VycmVudC5mZWVsc2xpa2VfY33CsENgO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gVG8gdXBkYXRlIHRpbWUgZm9yIGV2ZXJ5IG1pbnV0ZVxuICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgZ2V0RGF0YShkYXRhLmxvY2F0aW9uLm5hbWUpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRpbWUudGV4dENvbnRlbnQgPSB1cGRhdGVUaW1lKGRhdGEpO1xuICAgIH0pO1xuICB9LCA2MDAwMCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVRpbWUoZGF0YSkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWUpO1xuICBjb25zdCB3ZWVrZGF5ID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgfSk7XG4gIGNvbnN0IG1vbnRoID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICBtb250aDogXCJsb25nXCIsXG4gIH0pO1xuICBjb25zdCBkYXkgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgIGRheTogXCJudW1lcmljXCIsXG4gIH0pO1xuICBjb25zdCB5ZWFyID0gZGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgfSk7XG4gIGNvbnN0IGdldEhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gIGNvbnN0IGdldE1pbnV0ZXMgPSBkYXRlLmdldE1pbnV0ZXMoKTtcblxuICBsZXQgaG91ciwgbWludXRlO1xuICBpZiAoZ2V0SG91ciA8IDEyKSB7XG4gICAgaG91ciA9IFwiMFwiICsgZ2V0SG91cjtcbiAgfSBlbHNlIGhvdXIgPSBnZXRIb3VyO1xuICBpZiAoZ2V0TWludXRlcyA8IDEwKSB7XG4gICAgbWludXRlID0gXCIwXCIgKyBnZXRNaW51dGVzO1xuICB9IGVsc2UgbWludXRlID0gZ2V0TWludXRlcztcblxuICByZXR1cm4gYCR7d2Vla2RheX0sICR7ZGF5fSAke21vbnRofSAke3llYXJ9IHwgJHtob3VyfToke21pbnV0ZX1gO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpIHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1kaXZcIik7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgcmV0dXJuIGRpdjtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIvc3JjL2luZGV4LnNjc3NcIjtcbmltcG9ydCBoZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vaGVhZGVyL2NyZWF0ZVwiO1xuaW1wb3J0IG1haW4gZnJvbSBcIi4vY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVcIjtcbmltcG9ydCBnZXREYXRhIGZyb20gXCIuL2NvbXBvbmVudHMvbG9naWMvZ2V0RGF0YVwiO1xuaW1wb3J0IHVwZGF0ZUxvY2F0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvZG9tL21haW4vdXBkYXRlXCI7XG5cbmNvbnN0IGluaXRMb2NhdGlvbiA9IFwiVGJpbGlzaVwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5ib2R5LmFwcGVuZENoaWxkKGhlYWRlcigpKTtcbmJvZHkuYXBwZW5kQ2hpbGQobWFpbigpKTtcblxuZ2V0RGF0YShpbml0TG9jYXRpb24pLnRoZW4oKGRhdGEpID0+IHtcbiAgdXBkYXRlTG9jYXRpb24oZGF0YSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==