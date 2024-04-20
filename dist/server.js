/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./client/App.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./client/App.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.App {
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./client/App.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB","sourcesContent":[".App {\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
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

/***/ "./client/App.css":
/*!************************!*\
  !*** ./client/App.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./App.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./client/App.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_App_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./client/About.tsx":
/*!**************************!*\
  !*** ./client/About.tsx ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const styles = {
    container: {
        maxWidth: "120rem",
        padding: "3.2rem",
        margin: "50px auto",
        width: "800px",
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
    },
    heading: {
        color: "#333333",
        letterSpacing: "0.1rem",
    },
    list: {
        marginLeft: "20px",
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
    },
    list_item: {
        color: "#333333",
        letterSpacing: "1.2px",
        fontSize: "1.6rem",
        alignItems: "center",
        padding: "0.2rem",
        borderRadius: "0.3rem",
    },
};
const About = () => {
    return (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("p", null, "Loading...") },
        react_1.default.createElement("div", { style: styles.container },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h1", { style: styles.heading }, " Server React DOM APIs "),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("p", { style: styles.list_item }, "1. renderToPipeableStream"),
                    react_1.default.createElement("p", { style: styles.list_item }, "2. renderToStaticNodeStream"),
                    react_1.default.createElement("p", { style: styles.list_item }, "3. renderToReadableStream"),
                    react_1.default.createElement("p", { style: styles.list_item }, "4. renderToStaticMarkup"),
                    react_1.default.createElement("p", { style: styles.list_item }, "5. renderToString"))))));
};
exports["default"] = About;


/***/ }),

/***/ "./client/App.tsx":
/*!************************!*\
  !*** ./client/App.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "react-router-dom");
const About_1 = __importDefault(__webpack_require__(/*! ./About */ "./client/About.tsx"));
const Home_1 = __importDefault(__webpack_require__(/*! ./Home */ "./client/Home.tsx"));
__webpack_require__(/*! ./App.css */ "./client/App.css");
const styles = {
    main_header: {
        backgroundColor: "white",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 2px 0px",
    },
    header: {
        padding: "0.6rem",
        width: "85rem",
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
    },
    navbar: {
        display: "flex",
        alignItem: "center",
        justifyContent: "center",
    },
    nav_link: {
        textDecoration: "none",
        color: "white",
        background: "rgb(239, 83, 102)",
        fontSize: "1.2rem",
        padding: "0.3rem 1.6rem",
        margin: "5px",
        border: "1px solid white",
        borderRadius: "0.3rem",
    },
};
const App = () => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { style: styles.main_header },
            react_1.default.createElement("div", { style: styles.header },
                react_1.default.createElement("div", { style: styles.navbar },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/", style: styles.nav_link }, "Home"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/about", style: styles.nav_link }, "About")))),
        react_1.default.createElement(react_router_dom_1.Routes, null,
            react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement(Home_1.default, null) }),
            react_1.default.createElement(react_router_dom_1.Route, { path: "/about", element: react_1.default.createElement(About_1.default, null) }))));
};
exports["default"] = App;


/***/ }),

/***/ "./client/Home.tsx":
/*!*************************!*\
  !*** ./client/Home.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
// Add a fixed delay so you can see the loading state
function delayForDemo(promise) {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
const HomeModule = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(__webpack_require__(/*! ./components/HomeModule */ "./client/components/HomeModule.tsx"))));
const Home = () => {
    return (react_1.default.createElement(react_1.Suspense, { fallback: react_1.default.createElement("p", null, "Loading...") },
        react_1.default.createElement(HomeModule, null)));
};
exports["default"] = Home;


/***/ }),

/***/ "./client/components/HomeModule.tsx":
/*!******************************************!*\
  !*** ./client/components/HomeModule.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const styles = {
    container: {
        maxWidth: "120rem",
        padding: "0 3.2rem",
        margin: "0 auto",
        width: "800px",
    },
    section: {
        marginTop: "10px",
        padding: "2.2rem",
        borderRadius: "0.3rem",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    },
    heading: {
        color: "#333333",
        letterSpacing: "0.1rem",
    },
    content: {
        fontSize: "1.4rem",
        color: "#4d4d4d",
        lineHeight: "1.8rem",
    },
};
const HomeModule = () => {
    return (react_1.default.createElement("div", { style: styles.container },
        react_1.default.createElement("div", { style: styles.section },
            react_1.default.createElement("h1", { style: styles.heading }, "Client-side rendering (CSR)"),
            react_1.default.createElement("p", { style: styles.content }, "Refers to the process of rendering web pages on the client side (i.e., in the user's web browser). The server merely provides the raw data or content, which the client-side JavaScript utilizes to dynamically construct the final rendered page.")),
        react_1.default.createElement("div", { style: styles.section },
            react_1.default.createElement("h1", { style: styles.heading }, "Server-side rendering (SSR)"),
            react_1.default.createElement("p", { style: styles.content }, "Refers to the process of rendering web pages on the server before sending them to the client's web browser. Rather than transmitting raw data and depending on client-side JavaScript to build the final HTML markup, this approach involves the server generating the final HTML markup for a web page and sending it to the client."))));
};
exports["default"] = HomeModule;


/***/ }),

/***/ "./server/server.tsx":
/*!***************************!*\
  !*** ./server/server.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const fs_1 = __importDefault(__webpack_require__(/*! fs */ "fs"));
const jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ "react-dom/server"));
// import { StaticRouter } from "react-router-dom/server";
const App_1 = __importDefault(__webpack_require__(/*! ../client/App */ "./client/App.tsx"));
const routers_1 = __importDefault(__webpack_require__(/*! ../src/api/routers */ "./src/api/routers/index.ts"));
const init_1 = __importDefault(__webpack_require__(/*! ../src/db/init */ "./src/db/init.ts"));
const user_1 = __importDefault(__webpack_require__(/*! ../src/db/models/user */ "./src/db/models/user.ts"));
// TODO: continue https://nils-mehlhorn.de/posts/typescript-nodejs-react-ssr/ @ Server React SSR from Node.js
(0, init_1.default)();
const server = (0, express_1.default)();
// set port, listen for requests
const port = process.env.PORT || 8080;
const jwtToken = process.env.JWT_TOKEN;
server.use((req, res, next) => {
    next();
}, (0, cors_1.default)({
    origin: "http://localhost:8081",
    maxAge: 84600,
}));
// parse request of content-type application/json
server.use(express_1.default.json());
// parse request of content-type application/x-www-form-urlencoded
server.use(express_1.default.urlencoded({ extended: true }));
server.use("/api/v1/", routers_1.default);
server.get("/test", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.status(200).send("Well done! This is the test endpoint.");
}));
server.get("/protected-test", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = ((_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1]) || "";
        console.log("token", token);
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        const decodedToken = (0, jsonwebtoken_1.verify)(token, jwtToken || "dumb_secret");
        // @ts-expect-error
        req.user = decodedToken;
        return next();
    }
    catch (err) {
        console.error(err);
        return res.status(401).json({ msg: "Couldnt Authenticate" });
    }
}), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_1.default.findOne({
        where: {
            // @ts-expect-error
            id: req.user.id,
        },
        attributes: { exclude: ["password"] },
    });
    if (user === null) {
        return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json(user);
}));
server.use(express_1.default.static(path_1.default.join(__dirname, "static")));
const manifest = fs_1.default.readFileSync(path_1.default.join(__dirname, "static/manifest.json"), "utf-8");
const assets = JSON.parse(manifest);
server.get("/", (req, res) => {
    const component = server_1.default.renderToString(react_1.default.createElement(App_1.default));
    res.render("client", { assets, component });
});
// server.get("/*", (req, res) => {
//   const entryPoint = ["/main.js"];
//   const { pipe } = ReactDOMServer.renderToPipeableStream(
//     <StaticRouter location={req.url}>
//       <App />
//     </StaticRouter>,
//     {
//       bootstrapScripts: entryPoint,
//       onShellReady() {
//         res.statusCode = 200;
//         res.setHeader("Content-type", "text/html");
//         pipe(res);
//       },
//       onShellError() {
//         res.statusCode = 500;
//         res.send("<!doctype html><p>Loading...</p>");
//       },
//     }
//   );
// });
try {
    server.listen(port, () => {
        console.log(`App is running on http://localhost:${port}`);
    });
}
catch (error) {
    console.error(error);
}


/***/ }),

/***/ "./src/api/controllers/post/index.ts":
/*!*******************************************!*\
  !*** ./src/api/controllers/post/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostController = void 0;
const post_service_1 = __webpack_require__(/*! ../../services/post.service */ "./src/api/services/post.service.ts");
const post_mapper_1 = __webpack_require__(/*! ./post.mapper */ "./src/api/controllers/post/post.mapper.ts");
const service = new post_service_1.PostService();
class PostController {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return post_mapper_1.postMapper.toPost(yield service.create(payload));
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return post_mapper_1.postMapper.toPost(yield service.update(id, payload));
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return post_mapper_1.postMapper.toPost(yield service.getById(id));
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = yield service.deleteById(id);
            return isDeleted;
        });
    }
    getAll(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield service.getAll(filters)).map(post_mapper_1.postMapper.toPost);
        });
    }
}
exports.PostController = PostController;


/***/ }),

/***/ "./src/api/controllers/post/post.mapper.ts":
/*!*************************************************!*\
  !*** ./src/api/controllers/post/post.mapper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.postMapper = void 0;
exports.postMapper = {
    toPost: (post) => {
        return {
            id: post.id,
            name: post.name,
            slug: post.slug,
            createdAt: post.createdAt,
            updatedAt: post.updatedAt,
            deletedAt: post.deletedAt,
        };
    },
};


/***/ }),

/***/ "./src/api/controllers/user/index.ts":
/*!*******************************************!*\
  !*** ./src/api/controllers/user/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const user_service_1 = __webpack_require__(/*! ../../services/user.service */ "./src/api/services/user.service.ts");
const user_mapper_1 = __webpack_require__(/*! ./user.mapper */ "./src/api/controllers/user/user.mapper.ts");
const service = new user_service_1.UserService();
class UserController {
    authenticate(authPayload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield service.authenticate(authPayload);
            if (!!user) {
                return user_mapper_1.userMapper.toUser(user);
            }
            return false;
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_mapper_1.userMapper.toUser(yield service.create(payload));
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_mapper_1.userMapper.toUser(yield service.update(id, payload));
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_mapper_1.userMapper.toUser(yield service.getById(id));
        });
    }
    getByUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_mapper_1.userMapper.toUser(yield service.getByUserName(userName));
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDeleted = yield service.deleteById(id);
            return isDeleted;
        });
    }
    getAll(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return (yield service.getAll(filters)).map(user_mapper_1.userMapper.toUser);
        });
    }
}
exports.UserController = UserController;


/***/ }),

/***/ "./src/api/controllers/user/user.mapper.ts":
/*!*************************************************!*\
  !*** ./src/api/controllers/user/user.mapper.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userMapper = void 0;
exports.userMapper = {
    toUser: (user) => {
        return {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: user.userName,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
            deletedAt: user.deletedAt,
        };
    },
};


/***/ }),

/***/ "./src/api/routers/index.ts":
/*!**********************************!*\
  !*** ./src/api/routers/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__(/*! express */ "express");
const post_router_1 = __importDefault(__webpack_require__(/*! ./post.router */ "./src/api/routers/post.router.ts"));
const user_router_1 = __importDefault(__webpack_require__(/*! ./user.router */ "./src/api/routers/user.router.ts"));
const router = (0, express_1.Router)();
router.use('/posts', post_router_1.default);
router.use('/users', user_router_1.default);
exports["default"] = router;


/***/ }),

/***/ "./src/api/routers/post.router.ts":
/*!****************************************!*\
  !*** ./src/api/routers/post.router.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__(/*! express */ "express");
const post_1 = __webpack_require__(/*! ../controllers/post */ "./src/api/controllers/post/index.ts");
const postsRouter = (0, express_1.Router)();
const controller = new post_1.PostController();
// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log(`${req.method}:Time: `, Date.now());
    next();
};
postsRouter.use(timeLog);
// get post
postsRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    console.log('id', id);
    const result = yield controller.getById(id);
    return res.status(200).send(result);
}));
// update post
postsRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const payload = req.body;
    const result = yield controller.update(id, payload);
    return res.status(201).send(result);
}));
// delete post
postsRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield controller.deleteById(id);
    return res.status(204).send(result);
}));
// create post
postsRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield controller.create(payload);
    return res.status(200).send(result);
}));
// get all posts
postsRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = req.query;
    const results = yield controller.getAll(filters);
    return res.status(200).send(results);
}));
exports["default"] = postsRouter;


/***/ }),

/***/ "./src/api/routers/user.router.ts":
/*!****************************************!*\
  !*** ./src/api/routers/user.router.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__(/*! express */ "express");
const jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
const user_1 = __webpack_require__(/*! ../controllers/user */ "./src/api/controllers/user/index.ts");
const userRouter = (0, express_1.Router)();
const controller = new user_1.UserController();
const jwtSecret = process.env.JWT_TOKEN;
// middleware that is specific to this router
const timeLog = (req, res, next) => {
    console.log(`${req.hostname}:${process.env.PORT || 8080}${req.originalUrl}@${Date.now()}`);
    next();
};
userRouter.use(timeLog);
// get user
userRouter.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    console.log('id', id);
    const result = yield controller.getById(id);
    return res.status(200).send(result);
}));
// update user
userRouter.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const payload = req.body;
    const result = yield controller.update(id, payload);
    return res.status(201).send(result);
}));
// delete user
userRouter.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const result = yield controller.deleteById(id);
    return res.status(204).send(result);
}));
// create user
userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const result = yield controller.create(payload);
    return res.status(200).send(result);
}));
// get all users
userRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = req.query;
    const results = yield controller.getAll(filters);
    return res.status(200).send(results);
}));
// authenticate user
// TODO: alias endpoint /login
userRouter.post('/authenticate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const user = yield controller.authenticate({
        password: payload.password,
        userName: payload.password,
    });
    if (user) {
        const jwtToken = (0, jsonwebtoken_1.sign)(JSON.stringify({
            id: user.id,
            email: user.email,
            userName: user.userName,
        }), jwtSecret || 'dumb_secret');
        return res.status(200).send({
            user,
            jwtToken,
        });
    }
    return res.status(403).send('User is not authorized');
}));
exports["default"] = userRouter;


/***/ }),

/***/ "./src/api/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/api/services/post.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostService = void 0;
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const post_dal_1 = __webpack_require__(/*! ../../db/dal/post.dal */ "./src/db/dal/post.dal.ts");
const dal = new post_dal_1.PostDal();
class PostService {
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            let slug = (0, lodash_1.kebabCase)(payload.name);
            const slugExists = yield dal.checkSlugExists(slug);
            payload.slug = slugExists
                ? `${slug}-${Math.floor(Math.random() * 1000)}`
                : slug;
            return dal.create(payload);
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            if (payload.name) {
                let slug = (0, lodash_1.kebabCase)(payload.name);
                const slugExists = yield dal.checkSlugExists(slug);
                payload.slug = slugExists
                    ? `${slug}-${Math.floor(Math.random() * 1000)}`
                    : slug;
            }
            return dal.update(id, payload);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.getById(id);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.deleteById(id);
        });
    }
    getAll(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.getAll(filters);
        });
    }
}
exports.PostService = PostService;


/***/ }),

/***/ "./src/api/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/api/services/user.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const user_dal_1 = __webpack_require__(/*! ../../db/dal/user.dal */ "./src/db/dal/user.dal.ts");
const dal = new user_dal_1.UserDal();
class UserService {
    authenticate(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.authenticate(payload);
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.create(payload);
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.update(id, payload);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.getById(id);
        });
    }
    getByUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.getByUserName(userName);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.deleteById(id);
        });
    }
    getAll(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return dal.getAll(filters);
        });
    }
}
exports.UserService = UserService;


/***/ }),

/***/ "./src/db/config/db.config.ts":
/*!************************************!*\
  !*** ./src/db/config/db.config.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
(__webpack_require__(/*! dotenv */ "dotenv").config)();
const microdiff_1 = __importDefault(__webpack_require__(/*! microdiff */ "microdiff"));
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
const local_cache_1 = __importDefault(__webpack_require__(/*! ../../lib/local-cache */ "./src/lib/local-cache.ts"));
const isTest = "development" === 'test';
const dbName = isTest
    ? process.env.TEST_DB_NAME
    : process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER;
const dbPassword = process.env.DB_PASSWORD;
const hooks = {
    afterUpdate: (instance) => {
        const cacheKey = `${instance.constructor.name.toLowerCase()}s`;
        const currentData = instance.get({ plain: true });
        if (!local_cache_1.default.hasKey(cacheKey)) {
            return;
        }
        const listingData = local_cache_1.default.get(cacheKey);
        const itemIndex = listingData.findIndex((it) => it.id === instance.getDataValue('id'));
        const oldItemData = ~itemIndex ? listingData[itemIndex] : {};
        const instanceDiff = (0, microdiff_1.default)(oldItemData, currentData);
        if (instanceDiff.length > 0) {
            listingData[itemIndex] = currentData;
            local_cache_1.default.set(cacheKey, listingData);
        }
    },
    afterCreate: (instance) => {
        const cacheKey = `${instance.constructor.name.toLowerCase()}s`;
        const currentData = instance.get({ plain: true });
        if (!local_cache_1.default.hasKey(cacheKey)) {
            return;
        }
        const listingData = local_cache_1.default.get(cacheKey);
        listingData.push(currentData);
        local_cache_1.default.set(cacheKey, listingData);
    },
};
const sequelizeConnection = new sequelize_1.Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: dbDriver,
    logging: false,
    define: { hooks },
});
exports["default"] = sequelizeConnection;


/***/ }),

/***/ "./src/db/dal/post.dal.ts":
/*!********************************!*\
  !*** ./src/db/dal/post.dal.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostDal = void 0;
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
const post_model_1 = __importDefault(__webpack_require__(/*! ../models/post.model */ "./src/db/models/post.model.ts"));
class PostDal {
    constructor() {
        this.getAllOptions = (filters) => {
            if (filters === null || filters === void 0 ? void 0 : filters.isDeleted) {
                return {
                    deletedAt: { [sequelize_1.Op.not]: undefined },
                };
            }
            return {};
        };
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield post_model_1.default.create(payload);
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_model_1.default.findByPk(id);
            if (!post) {
                throw new Error('not found');
            }
            return yield payload.update(payload);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const post = yield post_model_1.default.findByPk(id);
            if (!post) {
                throw new Error('not found');
            }
            return post;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPostCount = yield post_model_1.default.destroy({
                where: { id },
            });
            return !!deletedPostCount;
        });
    }
    getAll(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return post_model_1.default.findAll(Object.assign({ where: Object.assign({}, this.getAllOptions(filters)) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || (filters === null || filters === void 0 ? void 0 : filters.includeDeleted)) && {
                paranoid: true,
            })));
        });
    }
    checkSlugExists(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const postWithSlug = yield post_model_1.default.findOne({
                where: {
                    slug,
                },
            });
            return !(0, lodash_1.isEmpty)(postWithSlug);
        });
    }
}
exports.PostDal = PostDal;


/***/ }),

/***/ "./src/db/dal/user.dal.ts":
/*!********************************!*\
  !*** ./src/db/dal/user.dal.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserDal = void 0;
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
const user_1 = __importDefault(__webpack_require__(/*! ../models/user */ "./src/db/models/user.ts"));
class UserDal {
    constructor() {
        this.getAllOptions = (filters) => {
            if (filters === null || filters === void 0 ? void 0 : filters.isDeleted) {
                return {
                    deletedAt: { [sequelize_1.Op.not]: undefined },
                };
            }
            return {};
        };
    }
    authenticate(_a) {
        return __awaiter(this, arguments, void 0, function* ({ password, userName, }) {
            return new Promise((resolve, reject) => {
                try {
                    user_1.default.findOne({
                        where: Object.assign({}, this.getAllOptions({ userName: userName })),
                    }).then((_user) => __awaiter(this, void 0, void 0, function* () {
                        if (!_user) {
                            resolve(false);
                        }
                        else {
                            if (!_user.dataValues.password ||
                                !(yield _user.isValidPassword(password))) {
                                resolve(false);
                            }
                            else {
                                resolve(_user);
                            }
                        }
                    }));
                }
                catch (error) {
                    const response = {
                        status: 500,
                        data: {},
                        error: {
                            message: 'user match failed',
                        },
                    };
                    return reject(response);
                }
            });
        });
    }
    create(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield user_1.default.create(payload);
        });
    }
    update(id, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findByPk(id);
            if (!user) {
                throw new Error('not found');
            }
            return yield payload.update(payload);
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findByPk(id);
            if (!user) {
                throw new Error('not found');
            }
            return user;
        });
    }
    getByUserName(userName) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_1.default.findOne({
                where: {
                    userName,
                },
            });
            if (!user) {
                throw new Error('not found');
            }
            return user;
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedPostCount = yield user_1.default.destroy({
                where: { id },
            });
            return !!deletedPostCount;
        });
    }
    getAll(filters) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_1.default.findAll(Object.assign({ where: Object.assign({}, this.getAllOptions(filters)) }, (((filters === null || filters === void 0 ? void 0 : filters.isDeleted) || (filters === null || filters === void 0 ? void 0 : filters.includeDeleted)) && {
                paranoid: true,
            })));
        });
    }
}
exports.UserDal = UserDal;


/***/ }),

/***/ "./src/db/init.ts":
/*!************************!*\
  !*** ./src/db/init.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


// const isDev = process.env.NODE_ENV === 'development';
Object.defineProperty(exports, "__esModule", ({ value: true }));
const dbInit = () => {
    // PostModel.sync({ alter: isDev });
};
exports["default"] = dbInit;


/***/ }),

/***/ "./src/db/models/post.model.ts":
/*!*************************************!*\
  !*** ./src/db/models/post.model.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Post = void 0;
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
const db_config_1 = __importDefault(__webpack_require__(/*! ../config/db.config */ "./src/db/config/db.config.ts"));
class Post extends sequelize_1.Model {
}
exports.Post = Post;
Post.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    slug: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    timestamps: true,
    sequelize: db_config_1.default,
    paranoid: true,
});
exports["default"] = Post;


/***/ }),

/***/ "./src/db/models/user.ts":
/*!*******************************!*\
  !*** ./src/db/models/user.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const bcrypt_1 = __importDefault(__webpack_require__(/*! bcrypt */ "bcrypt"));
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
const db_config_1 = __importDefault(__webpack_require__(/*! ../config/db.config */ "./src/db/config/db.config.ts"));
class User extends sequelize_1.Model {
    // https://www.slingacademy.com/article/how-to-use-bcrypt-with-sequelize-models/
    isValidPassword(password) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield bcrypt_1.default.compare(password, this.password);
        });
    }
}
exports.User = User;
User.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
    sequelize: db_config_1.default,
    paranoid: true,
    hooks: {
        beforeCreate: (user, options) => __awaiter(void 0, void 0, void 0, function* () {
            if (user.password) {
                const salt = yield bcrypt_1.default.genSalt(10, 'a');
                user.password = yield bcrypt_1.default.hash(user.password, salt);
            }
        }),
        beforeUpdate: (user) => __awaiter(void 0, void 0, void 0, function* () {
            if (user.password) {
                const salt = yield bcrypt_1.default.genSalt(10, 'a');
                user.password = yield bcrypt_1.default.hash(user.password, salt);
            }
        }),
    },
});
exports["default"] = User;


/***/ }),

/***/ "./src/lib/local-cache.ts":
/*!********************************!*\
  !*** ./src/lib/local-cache.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const node_cache_1 = __importDefault(__webpack_require__(/*! node-cache */ "node-cache"));
class LocalCache {
    constructor(ttlSeconds) {
        this.cache = new node_cache_1.default({
            stdTTL: ttlSeconds,
            checkperiod: ttlSeconds * 0.2,
        });
    }
    static getInstance() {
        if (!LocalCache._instance) {
            LocalCache._instance = new LocalCache(1000);
        }
        return LocalCache._instance;
    }
    get(key) {
        return this.cache.get(key);
    }
    set(key, data) {
        this.cache.set(key, data);
    }
    unset(key) {
        this.cache.del(key);
    }
    hasKey(key) {
        return this.cache.has(key);
    }
}
exports["default"] = LocalCache.getInstance();


/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "microdiff":
/*!****************************!*\
  !*** external "microdiff" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("microdiff");

/***/ }),

/***/ "node-cache":
/*!*****************************!*\
  !*** external "node-cache" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-cache");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("sequelize");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=server.js.map