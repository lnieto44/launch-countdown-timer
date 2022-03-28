module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Styled/StyledComponent.js":
/*!***********************************!*\
  !*** ./Styled/StyledComponent.js ***!
  \***********************************/
/*! exports provided: Titulo, Contenido_principal, Contenido_Pie_Pagina, Contenido_contador, flip, show, Contenido_Voltear_Numero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Titulo", function() { return Titulo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contenido_principal", function() { return Contenido_principal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contenido_Pie_Pagina", function() { return Contenido_Pie_Pagina; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contenido_contador", function() { return Contenido_contador; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flip", function() { return flip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contenido_Voltear_Numero", function() { return Contenido_Voltear_Numero; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Titulo = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "StyledComponent__Titulo",
  componentId: "sc-18qe9hj-0"
})(["color:hsl(0,0%,100%);letter-spacing:7px;margin-top:84.3px;font-size:22px;text-transform:uppercase;text-align:center;@media (min-width:768px){margin-top:253px;}"]);
const Contenido_principal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.main.withConfig({
  displayName: "StyledComponent__Contenido_principal",
  componentId: "sc-18qe9hj-1"
})(["align-items:center;background-color:rgb(33,30,43);background-repeat:no-repeat,repeat;background-position:bottom center;background-size:contain;color:hsl(237,18%,59%);display:flex;flex-direction:column;height:100%;img{display:none;width:100%;}"]);
const Contenido_Pie_Pagina = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.footer.withConfig({
  displayName: "StyledComponent__Contenido_Pie_Pagina",
  componentId: "sc-18qe9hj-2"
})(["color:white;font-size:12px;bottom:0;left:0;margin-bottom:1em;position:fixed;right:0;text-align:center;.bottom{width:100%;height:197px;background:#211A29;overflow:hidden;}.bottom .bottom-bg{width:100%;height:197px;background-image:url(\"\");background-position:0px 0;-webkit-animation:animate-bg linear 60s infinite alternate;animation:animate-bg linear 60s infinite alternate;}@media only screen and (min-width:768px){.bottom .bottom-bg{width:200%;background-size:100%;background-position:0px 0;}}.bottom .social-icons{width:100%;height:197px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 0 3rem 0;}@media only screen and (min-width:768px){.bottom .social-icons{width:50%;}}.bottom .social-icons .icon{padding:0 1rem;}.bottom .social-icons .icon svg path{-webkit-transition:background .4s ease-in-out;transition:background .4s ease-in-out;}.bottom .social-icons .icon svg path:hover{fill:#fb6087;}"]);
const Contenido_contador = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.article.withConfig({
  displayName: "StyledComponent__Contenido_contador",
  componentId: "sc-18qe9hj-3"
})(["align-items:center;display:flex;justify-content:center;margin-top:75px;.mobile{display:block;@media (min-width:768px){display:none;}}.desktop{display:none;@media (min-width:768px){display:block;}}> div{margin:1em 1em 0;position:relative;text-align:center;width:50px;z-index:1;@media (min-width:768px){width:150px;}> div:first-child{color:hsl(345,95%,68%);font-size:29.3px;line-height:47px;height:45.7px;width:50px;@media (min-width:768px){font-size:88px;height:137px;line-height:137px;width:150px;}}> div.desktop,div.mobile{letter-spacing:5px;margin-top:28px;text-transform:uppercase;}}"]);
const flip = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{transform:rotateX(0);}100%{border-bottom:1px solid black;transform:rotateX(-0.5turn);z-index:1;}"]);
const show = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["0%{opacity:0;}100%{opacity:1;}"]);
const Contenido_Voltear_Numero = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "StyledComponent__Contenido_Voltear_Numero",
  componentId: "sc-18qe9hj-4"
})(["perspective:500px;position:relative;div{display:flex;justify-content:center;left:0;position:absolute;width:100%;&:not(.flipper){overflow:hidden;}&:not(.bottom.current){top:0;}&.top{backface-visibility:hidden;background:linear-gradient(to bottom,rgb(44,43,70),rgb(59,60,95));border-top-left-radius:10px;border-top-right-radius:10px;box-shadow:0px -2px 5px rgb(26,26,37),inset 0 2px rgba(0,0,0,0.9),inset 0 3px 0 rgba(255,255,255,0.4);height:50%;&.next{&:before{animation:", ";background:linear-gradient( to bottom,rgba(0,0,0,0.1) 0%,rgba(0,0,0,1) 100% );content:\"\";height:100%;left:0;position:absolute;top:0;width:100%;}}}&.bottom{align-items:flex-end;background:linear-gradient( rgba(188,167,216,0.1),rgba(72,66,95,0.1) 50%,rgb(52,53,81) ),rgb(52,53,81);border-bottom-left-radius:10px;border-bottom-right-radius:10px;box-shadow:0px 7px 2px rgb(26,26,37);&.current{height:50%;border-top:2px solid black;bottom:0;transform:rotateX(5deg);&:before{animation:", ";background:linear-gradient( to top,rgba(0,0,0,0.1) 0%,rgba(0,0,0,1) 100% );content:\"\";height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;}}}&.flipper{animation:", ";height:50%;transform-origin:bottom;transform-style:preserve-3d;.bottom,.top{backface-visibility:hidden;height:100%;}.bottom{transform:rotateX(0.5turn);}.top{transform:rotateX(0deg);&:before{animation:", ";background:linear-gradient( to bottom,rgba(0,0,0,0.1) 0%,rgba(0,0,0,1) 100% );content:\"\";height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:100;}}}}"], ({
  animationDuration,
  shouldAnimate
}) => shouldAnimate ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", " ", "ms ease-in reverse forwards ", "ms"], show, animationDuration / 2, animationDuration / 2) : "none", ({
  animationDuration,
  shouldAnimate
}) => shouldAnimate ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", " ", "ms ease-in forwards"], show, animationDuration * 0.85) : "none", ({
  animationDuration,
  shouldAnimate
}) => shouldAnimate ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", " ", "ms ease-in forwards"], flip, animationDuration) : "none", ({
  animationDuration,
  shouldAnimate
}) => shouldAnimate ? Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["", " ", "ms ease-in forwards"], show, animationDuration) : "none");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inicio; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Styled/StyledComponent */ "./Styled/StyledComponent.js");
/* harmony import */ var _src_Componentes_Contador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Componentes/Contador */ "./src/Componentes/Contador.js");
/* harmony import */ var _src_Componentes_Pie_pagina__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/Componentes/Pie_pagina */ "./src/Componentes/Pie_pagina.js");


var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\launch-countdown-timer\\pages\\index.js";

/* eslint-disable react/jsx-pascal-case */




function Inicio() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_2__["Contenido_principal"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_2__["Titulo"], {
        children: "WE'RE LAUCHING SOON"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Componentes_Contador__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_src_Componentes_Pie_pagina__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

/***/ }),

/***/ "./src/Componentes/Contador.js":
/*!*************************************!*\
  !*** ./src/Componentes/Contador.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contador; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "luxon");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Voltear_Numero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Voltear_Numero */ "./src/Componentes/Voltear_Numero.js");
/* harmony import */ var _Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Styled/StyledComponent */ "./Styled/StyledComponent.js");

var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\launch-countdown-timer\\src\\Componentes\\Contador.js";






const Obtener_tiempo = FinDia => {
  const now = luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local();
  const {
    days,
    hours,
    minutes,
    seconds
  } = FinDia.diff(now, ["days", "hours", "minutes", "seconds"]);
  return {
    days: Math.max(0, Math.trunc(days)),
    hours: Math.max(0, Math.trunc(hours)),
    minutes: Math.max(0, Math.trunc(minutes)),
    seconds: Math.max(0, Math.trunc(seconds))
  };
};

const UsoContador = FinDia => {
  const initial = Obtener_tiempo(FinDia);
  const {
    0: {
      current,
      previous
    },
    1: setContador
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    current: initial,
    previous: null
  });
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const timer = window.setInterval(() => {
      setContador(({
        current
      }) => {
        return {
          previous: current,
          current: Obtener_tiempo(FinDia)
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return {
    previous,
    current
  };
};

function Contador() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const defaultTime = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].local(2022, 4, 12, 0), []);
  const initialDate = router.query.date ? luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromISO(Array.isArray(router.query.date) ? router.query.date[0] : router.query.date) : null;
  const {
    current
  } = UsoContador(initialDate && initialDate.isValid ? initialDate : defaultTime);
  const INTERVAL = 1000;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_5__["Contenido_contador"], {
    children: Object.keys(current).map(key => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Voltear_Numero__WEBPACK_IMPORTED_MODULE_4__["default"], {
          animationDuration: INTERVAL,
          number: current[key]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mobile",
          children: key.charAt(0).toUpperCase()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "desktop",
          children: key.charAt(0).toUpperCase() + key.substr(1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, this)]
      }, key, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "./src/Componentes/Pie_pagina.js":
/*!***************************************!*\
  !*** ./src/Componentes/Pie_pagina.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Pie_pagina; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Styled/StyledComponent */ "./Styled/StyledComponent.js");

var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\launch-countdown-timer\\src\\Componentes\\Pie_pagina.js";

function Pie_pagina() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_1__["Contenido_Pie_Pagina"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      class: "bottom",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        class: "bottom-bg",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          class: "social-icons",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              xmlns: "",
              width: "24",
              height: "24",
              class: "facebook",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                fill: "#8385A9",
                d: "M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 16,
                columnNumber: 67
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              xmlns: "",
              width: "24",
              height: "24",
              class: "instagram",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                fill: "#8385A9",
                d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 68
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            class: "icon",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
              xmlns: "",
              width: "24",
              height: "24",
              class: "pinterest",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
                fill: "#8385A9",
                d: "M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 22,
                columnNumber: 68
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./src/Componentes/Voltear_Numero.js":
/*!*******************************************!*\
  !*** ./src/Componentes/Voltear_Numero.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Voltear_Numero; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Styled/StyledComponent */ "./Styled/StyledComponent.js");

var _jsxFileName = "C:\\Users\\ASUS\\Desktop\\launch-countdown-timer\\src\\Componentes\\Voltear_Numero.js";


function Voltear_Numero({
  animationDuration,
  number
}) {
  const NumeroRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(number);
  const {
    current: Numero_anterior
  } = NumeroRef;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    NumeroRef.current = number;
  }, [number]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Styled_StyledComponent__WEBPACK_IMPORTED_MODULE_2__["Contenido_Voltear_Numero"], {
    animationDuration: animationDuration,
    shouldAnimate: Numero_anterior !== number,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "top next",
      children: number
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flipper",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "bottom",
        children: number
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "top",
        children: Numero_anterior
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "bottom current",
      children: Numero_anterior
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, this)]
  }, number, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("luxon");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vU3R5bGVkL1N0eWxlZENvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29tcG9uZW50ZXMvQ29udGFkb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudGVzL1BpZV9wYWdpbmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbXBvbmVudGVzL1ZvbHRlYXJfTnVtZXJvLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImx1eG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiXSwibmFtZXMiOlsiVGl0dWxvIiwic3R5bGVkIiwiaDEiLCJDb250ZW5pZG9fcHJpbmNpcGFsIiwibWFpbiIsIkNvbnRlbmlkb19QaWVfUGFnaW5hIiwiZm9vdGVyIiwiQ29udGVuaWRvX2NvbnRhZG9yIiwiYXJ0aWNsZSIsImZsaXAiLCJrZXlmcmFtZXMiLCJzaG93IiwiQ29udGVuaWRvX1ZvbHRlYXJfTnVtZXJvIiwiZGl2IiwiYW5pbWF0aW9uRHVyYXRpb24iLCJzaG91bGRBbmltYXRlIiwiY3NzIiwiSW5pY2lvIiwiT2J0ZW5lcl90aWVtcG8iLCJGaW5EaWEiLCJub3ciLCJEYXRlVGltZSIsImxvY2FsIiwiZGF5cyIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJkaWZmIiwiTWF0aCIsIm1heCIsInRydW5jIiwiVXNvQ29udGFkb3IiLCJpbml0aWFsIiwiY3VycmVudCIsInByZXZpb3VzIiwic2V0Q29udGFkb3IiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInRpbWVyIiwid2luZG93Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiQ29udGFkb3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkZWZhdWx0VGltZSIsInVzZU1lbW8iLCJpbml0aWFsRGF0ZSIsInF1ZXJ5IiwiZGF0ZSIsImZyb21JU08iLCJBcnJheSIsImlzQXJyYXkiLCJpc1ZhbGlkIiwiSU5URVJWQUwiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHIiLCJQaWVfcGFnaW5hIiwiVm9sdGVhcl9OdW1lcm8iLCJudW1iZXIiLCJOdW1lcm9SZWYiLCJ1c2VSZWYiLCJOdW1lcm9fYW50ZXJpb3IiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHN0eWxlZCwgeyBjc3MsIGtleWZyYW1lcyB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgVGl0dWxvID0gc3R5bGVkLmgxYFxyXG5jb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcclxubGV0dGVyLXNwYWNpbmc6IDdweDtcclxubWFyZ2luLXRvcDogODQuM3B4O1xyXG5mb250LXNpemU6IDIycHg7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIG1hcmdpbi10b3A6IDI1M3B4O1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVuaWRvX3ByaW5jaXBhbCA9IHN0eWxlZC5tYWluYFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDMzLCAzMCwgNDMpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBjb2xvcjogaHNsKDIzNywgMTglLCA1OSUpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGltZyB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbmlkb19QaWVfUGFnaW5hPSBzdHlsZWQuZm9vdGVyYFxyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiBcclxuLmJvdHRvbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxOTdweDtcclxuICBiYWNrZ3JvdW5kOiAjMjExQTI5O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5ib3R0b20gLmJvdHRvbS1iZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxOTdweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGFuaW1hdGUtYmcgbGluZWFyIDYwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGUtYmcgbGluZWFyIDYwcyBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuYm90dG9tIC5ib3R0b20tYmcge1xyXG4gICAgd2lkdGg6IDIwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3R0b20gLnNvY2lhbC1pY29ucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxOTdweDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtYm94LWFsaWduOiBlbmQ7XHJcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBlbmQ7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDAgM3JlbSAwO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmJvdHRvbSAuc29jaWFsLWljb25zIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG59XHJcblxyXG4uYm90dG9tIC5zb2NpYWwtaWNvbnMgLmljb24ge1xyXG4gIHBhZGRpbmc6IDAgMXJlbTtcclxufVxyXG5cclxuLmJvdHRvbSAuc29jaWFsLWljb25zIC5pY29uIHN2ZyBwYXRoIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjRzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uYm90dG9tIC5zb2NpYWwtaWNvbnMgLmljb24gc3ZnIHBhdGg6aG92ZXIge1xyXG4gIGZpbGw6ICNmYjYwODc7XHJcbn1cclxuXHJcblxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRlbmlkb19jb250YWRvciA9IHN0eWxlZC5hcnRpY2xlYFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA3NXB4O1xyXG5cclxuICAubW9iaWxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlc2t0b3Age1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDFlbSAxZW0gMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgICAgY29sb3I6IGhzbCgzNDUsIDk1JSwgNjglKTtcclxuICAgICAgZm9udC1zaXplOiAyOS4zcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gICAgICBoZWlnaHQ6IDQ1LjdweDtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcblxyXG4gICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDg4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzdweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTM3cHg7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgPiBkaXYuZGVza3RvcCxcclxuICAgIGRpdi5tb2JpbGUge1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBmbGlwID0ga2V5ZnJhbWVzYFxyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0wLjV0dXJuKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3cgPSBrZXlmcmFtZXNgXHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcblxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGVuaWRvX1ZvbHRlYXJfTnVtZXJvID0gc3R5bGVkLmRpdmBcclxuICBwZXJzcGVjdGl2ZTogNTAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICY6bm90KC5mbGlwcGVyKSB7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgJjpub3QoLmJvdHRvbS5jdXJyZW50KSB7XHJcbiAgICAgIHRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAmLnRvcCB7XHJcbiAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDQ0LCA0MywgNzApLCByZ2IoNTksIDYwLCA5NSkpO1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IC0ycHggNXB4IHJnYigyNiwgMjYsIDM3KSwgaW5zZXQgMCAycHggcmdiYSgwLCAwLCAwLCAwLjkpLFxyXG4gICAgICAgIGluc2V0IDAgM3B4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xyXG4gICAgICBoZWlnaHQ6IDUwJTtcclxuXHJcbiAgICAgICYubmV4dCB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiAkeyh7IGFuaW1hdGlvbkR1cmF0aW9uLCBzaG91bGRBbmltYXRlIH0pID0+XHJcbiAgICAgICAgICAgIHNob3VsZEFuaW1hdGVcclxuICAgICAgICAgICAgICA/IGNzc2BcclxuICAgICAgICAgICAgICAgICAgJHtzaG93fSAke2FuaW1hdGlvbkR1cmF0aW9uIC9cclxuICAgICAgICAgICAgICAgICAgMn1tcyBlYXNlLWluIHJldmVyc2UgZm9yd2FyZHMgJHthbmltYXRpb25EdXJhdGlvbiAvIDJ9bXNcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICA6IFwibm9uZVwifTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsXHJcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5ib3R0b20ge1xyXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgIHJnYmEoMTg4LCAxNjcsIDIxNiwgMC4xKSxcclxuICAgICAgICAgIHJnYmEoNzIsIDY2LCA5NSwgMC4xKSA1MCUsXHJcbiAgICAgICAgICByZ2IoNTIsIDUzLCA4MSlcclxuICAgICAgICApLFxyXG4gICAgICAgIHJnYig1MiwgNTMsIDgxKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCA3cHggMnB4IHJnYigyNiwgMjYsIDM3KTtcclxuXHJcbiAgICAgICYuY3VycmVudCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoNWRlZyk7XHJcblxyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGFuaW1hdGlvbjogJHsoeyBhbmltYXRpb25EdXJhdGlvbiwgc2hvdWxkQW5pbWF0ZSB9KSA9PlxyXG4gICAgICAgICAgICBzaG91bGRBbmltYXRlXHJcbiAgICAgICAgICAgICAgPyBjc3NgXHJcbiAgICAgICAgICAgICAgICAgICR7c2hvd30gJHthbmltYXRpb25EdXJhdGlvbiAqIDAuODV9bXMgZWFzZS1pbiBmb3J3YXJkc1xyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgIDogXCJub25lXCJ9O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICB0byB0b3AsXHJcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMC4xKSAwJSxcclxuICAgICAgICAgICAgcmdiYSgwLCAwLCAwLCAxKSAxMDAlXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5mbGlwcGVyIHtcclxuICAgICAgYW5pbWF0aW9uOiAkeyh7IGFuaW1hdGlvbkR1cmF0aW9uLCBzaG91bGRBbmltYXRlIH0pID0+XHJcbiAgICAgICAgc2hvdWxkQW5pbWF0ZVxyXG4gICAgICAgICAgPyBjc3NgXHJcbiAgICAgICAgICAgICAgJHtmbGlwfSAke2FuaW1hdGlvbkR1cmF0aW9ufW1zIGVhc2UtaW4gZm9yd2FyZHNcclxuICAgICAgICAgICAgYFxyXG4gICAgICAgICAgOiBcIm5vbmVcIn07XHJcbiAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblxyXG4gICAgICAuYm90dG9tLFxyXG4gICAgICAudG9wIHtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuYm90dG9tIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMC41dHVybik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50b3Age1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuXHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiAkeyh7IGFuaW1hdGlvbkR1cmF0aW9uLCBzaG91bGRBbmltYXRlIH0pID0+XHJcbiAgICAgICAgICAgIHNob3VsZEFuaW1hdGVcclxuICAgICAgICAgICAgICA/IGNzc2BcclxuICAgICAgICAgICAgICAgICAgJHtzaG93fSAke2FuaW1hdGlvbkR1cmF0aW9ufW1zIGVhc2UtaW4gZm9yd2FyZHNcclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgICA6IFwibm9uZVwifTtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgICAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsXHJcbiAgICAgICAgICAgIHJnYmEoMCwgMCwgMCwgMSkgMTAwJVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYDsiLCIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9qc3gtcGFzY2FsLWNhc2UgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250ZW5pZG9fcHJpbmNpcGFsLCBUaXR1bG8gfSBmcm9tICcuLi9TdHlsZWQvU3R5bGVkQ29tcG9uZW50JztcbmltcG9ydCBDb250YWRvciBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudGVzL0NvbnRhZG9yXCI7XG5pbXBvcnQgUGllX3BhZ2luYSBmcm9tIFwiLi4vc3JjL0NvbXBvbmVudGVzL1BpZV9wYWdpbmFcIlxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluaWNpbygpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPENvbnRlbmlkb19wcmluY2lwYWw+XG4gICAgICAgIDxUaXR1bG8+V0UnUkUgTEFVQ0hJTkcgU09PTjwvVGl0dWxvPlxuICAgICAgICA8Q29udGFkb3IgLz5cbiAgICAgICAge31cbiAgICAgIDwvQ29udGVuaWRvX3ByaW5jaXBhbD5cbiAgICAgIDxQaWVfcGFnaW5hIC8+XG4gICAgPC8+XG4gICk7XG59XG4iLCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gXCJsdXhvblwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFZvbHRlYXJfTnVtZXJvIGZyb20gXCIuL1ZvbHRlYXJfTnVtZXJvXCI7XHJcbmltcG9ydCB7IENvbnRlbmlkb19jb250YWRvciB9IGZyb20gXCIuLi8uLi9TdHlsZWQvU3R5bGVkQ29tcG9uZW50XCI7XHJcblxyXG5cclxuY29uc3QgT2J0ZW5lcl90aWVtcG8gPSAoRmluRGlhKSA9PiB7XHJcbiAgICBjb25zdCBub3cgPSBEYXRlVGltZS5sb2NhbCgpO1xyXG4gICAgY29uc3QgeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcyB9ID0gRmluRGlhLmRpZmYobm93LCBbXHJcbiAgICAgIFwiZGF5c1wiLFxyXG4gICAgICBcImhvdXJzXCIsXHJcbiAgICAgIFwibWludXRlc1wiLFxyXG4gICAgICBcInNlY29uZHNcIixcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF5czogTWF0aC5tYXgoMCwgTWF0aC50cnVuYyhkYXlzKSksXHJcbiAgICAgIGhvdXJzOiBNYXRoLm1heCgwLCBNYXRoLnRydW5jKGhvdXJzKSksXHJcbiAgICAgIG1pbnV0ZXM6IE1hdGgubWF4KDAsIE1hdGgudHJ1bmMobWludXRlcykpLFxyXG4gICAgICBzZWNvbmRzOiBNYXRoLm1heCgwLCBNYXRoLnRydW5jKHNlY29uZHMpKSxcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBjb25zdCBVc29Db250YWRvciA9IChGaW5EaWEpID0+IHtcclxuICAgIGNvbnN0IGluaXRpYWwgPSBPYnRlbmVyX3RpZW1wbyhGaW5EaWEpO1xyXG4gICAgY29uc3QgW3sgY3VycmVudCwgcHJldmlvdXMgfSwgc2V0Q29udGFkb3JdID0gdXNlU3RhdGUoe1xyXG4gICAgICBjdXJyZW50OiBpbml0aWFsLFxyXG4gICAgICBwcmV2aW91czogbnVsbCxcclxuICAgIH0pO1xyXG4gIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3QgdGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldENvbnRhZG9yKCh7IGN1cnJlbnQgfSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJldmlvdXM6IGN1cnJlbnQsXHJcbiAgICAgICAgICAgIGN1cnJlbnQ6IE9idGVuZXJfdGllbXBvKEZpbkRpYSksXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuICBcclxuICAgIHJldHVybiB7IHByZXZpb3VzLCBjdXJyZW50IH07XHJcbiAgfTtcclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWRvcigpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgZGVmYXVsdFRpbWUgPSB1c2VNZW1vKCgpID0+IERhdGVUaW1lLmxvY2FsKDIwMjIsIDQsIDEyLCAwKSwgW10pO1xyXG4gICAgY29uc3QgaW5pdGlhbERhdGUgPSByb3V0ZXIucXVlcnkuZGF0ZVxyXG4gICAgICA/IERhdGVUaW1lLmZyb21JU08oXHJcbiAgICAgICAgICBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS5kYXRlKVxyXG4gICAgICAgICAgICA/IHJvdXRlci5xdWVyeS5kYXRlWzBdXHJcbiAgICAgICAgICAgIDogcm91dGVyLnF1ZXJ5LmRhdGVcclxuICAgICAgICApXHJcbiAgICAgIDogbnVsbDtcclxuICAgIGNvbnN0IHsgY3VycmVudCB9ID0gVXNvQ29udGFkb3IoXHJcbiAgICAgIGluaXRpYWxEYXRlICYmIGluaXRpYWxEYXRlLmlzVmFsaWQgPyBpbml0aWFsRGF0ZSA6IGRlZmF1bHRUaW1lXHJcbiAgICApO1xyXG4gIFxyXG4gICAgY29uc3QgSU5URVJWQUwgPSAxMDAwO1xyXG4gIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPENvbnRlbmlkb19jb250YWRvcj5cclxuICAgICAgICB7T2JqZWN0LmtleXMoY3VycmVudCkubWFwKChrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9PlxyXG4gICAgICAgICAgICAgIDxWb2x0ZWFyX051bWVyb1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRHVyYXRpb249e0lOVEVSVkFMfVxyXG4gICAgICAgICAgICAgICAgbnVtYmVyPXtjdXJyZW50W2tleV19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vYmlsZVwiPntrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICB7a2V5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsga2V5LnN1YnN0cigxKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0NvbnRlbmlkb19jb250YWRvcj5cclxuICAgICk7XHJcbiAgfSIsIlxyXG5pbXBvcnQgeyBDb250ZW5pZG9fUGllX1BhZ2luYSB9IGZyb20gXCIuLi8uLi9TdHlsZWQvU3R5bGVkQ29tcG9uZW50XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBpZV9wYWdpbmEoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250ZW5pZG9fUGllX1BhZ2luYT5cclxuICAgICAge1xyXG5cclxuICAgICAgfVxyXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImJvdHRvbVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWJnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbC1pY29uc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIj5cclxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cIlwiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIGNsYXNzPVwiZmFjZWJvb2tcIj48cGF0aCBmaWxsPVwiIzgzODVBOVwiIGQ9XCJNMjIuNjc1IDBIMS4zMjVDLjU5MyAwIDAgLjU5MyAwIDEuMzI1djIxLjM1MUMwIDIzLjQwNy41OTMgMjQgMS4zMjUgMjRIMTIuODJ2LTkuMjk0SDkuNjkydi0zLjYyMmgzLjEyOFY4LjQxM2MwLTMuMSAxLjg5My00Ljc4OCA0LjY1OS00Ljc4OCAxLjMyNSAwIDIuNDYzLjA5OSAyLjc5NS4xNDN2My4yNGwtMS45MTguMDAxYy0xLjUwNCAwLTEuNzk1LjcxNS0xLjc5NSAxLjc2M3YyLjMxM2gzLjU4N2wtLjQ2NyAzLjYyMmgtMy4xMlYyNGg2LjExNmMuNzMgMCAxLjMyMy0uNTkzIDEuMzIzLTEuMzI1VjEuMzI1QzI0IC41OTMgMjMuNDA3IDAgMjIuNjc1IDB6XCIvPjwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgY2xhc3M9XCJpbnN0YWdyYW1cIj48cGF0aCBmaWxsPVwiIzgzODVBOVwiIGQ9XCJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6TTEyIDBDOC43NDEgMCA4LjMzMy4wMTQgNy4wNTMuMDcyIDIuNjk1LjI3Mi4yNzMgMi42OS4wNzMgNy4wNTIuMDE0IDguMzMzIDAgOC43NDEgMCAxMmMwIDMuMjU5LjAxNCAzLjY2OC4wNzIgNC45NDguMiA0LjM1OCAyLjYxOCA2Ljc4IDYuOTggNi45OEM4LjMzMyAyMy45ODYgOC43NDEgMjQgMTIgMjRjMy4yNTkgMCAzLjY2OC0uMDE0IDQuOTQ4LS4wNzIgNC4zNTQtLjIgNi43ODItMi42MTggNi45NzktNi45OC4wNTktMS4yOC4wNzMtMS42ODkuMDczLTQuOTQ4IDAtMy4yNTktLjAxNC0zLjY2Ny0uMDcyLTQuOTQ3LS4xOTYtNC4zNTQtMi42MTctNi43OC02Ljk3OS02Ljk4QzE1LjY2OC4wMTQgMTUuMjU5IDAgMTIgMHptMCA1LjgzOGE2LjE2MiA2LjE2MiAwIDEwMCAxMi4zMjQgNi4xNjIgNi4xNjIgMCAwMDAtMTIuMzI0ek0xMiAxNmE0IDQgMCAxMTAtOCA0IDQgMCAwMTAgOHptNi40MDYtMTEuODQ1YTEuNDQgMS40NCAwIDEwMCAyLjg4MSAxLjQ0IDEuNDQgMCAwMDAtMi44ODF6XCIvPjwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgY2xhc3M9XCJwaW50ZXJlc3RcIj48cGF0aCBmaWxsPVwiIzgzODVBOVwiIGQ9XCJNMTIgMEM1LjM3MyAwIDAgNS4zNzIgMCAxMmMwIDUuMDg0IDMuMTYzIDkuNDI2IDcuNjI3IDExLjE3NC0uMTA1LS45NDktLjItMi40MDUuMDQyLTMuNDQxLjIxOC0uOTM3IDEuNDA3LTUuOTY1IDEuNDA3LTUuOTY1cy0uMzU5LS43MTktLjM1OS0xLjc4MmMwLTEuNjY4Ljk2Ny0yLjkxNCAyLjE3MS0yLjkxNCAxLjAyMyAwIDEuNTE4Ljc2OSAxLjUxOCAxLjY5IDAgMS4wMjktLjY1NSAyLjU2OC0uOTk0IDMuOTk1LS4yODMgMS4xOTQuNTk5IDIuMTY5IDEuNzc3IDIuMTY5IDIuMTMzIDAgMy43NzItMi4yNDkgMy43NzItNS40OTUgMC0yLjg3My0yLjA2NC00Ljg4Mi01LjAxMi00Ljg4Mi0zLjQxNCAwLTUuNDE4IDIuNTYxLTUuNDE4IDUuMjA3IDAgMS4wMzEuMzk3IDIuMTM4Ljg5MyAyLjczOGEuMzYuMzYgMCAwMS4wODMuMzQ1bC0uMzMzIDEuMzZjLS4wNTMuMjItLjE3NC4yNjctLjQwMi4xNjEtMS40OTktLjY5OC0yLjQzNi0yLjg4OS0yLjQzNi00LjY0OSAwLTMuNzg1IDIuNzUtNy4yNjIgNy45MjktNy4yNjIgNC4xNjMgMCA3LjM5OCAyLjk2NyA3LjM5OCA2LjkzMSAwIDQuMTM2LTIuNjA3IDcuNDY0LTYuMjI3IDcuNDY0LTEuMjE2IDAtMi4zNTktLjYzMS0yLjc1LTEuMzc4bC0uNzQ4IDIuODUzYy0uMjcxIDEuMDQzLTEuMDAyIDIuMzUtMS40OTIgMy4xNDZDOS41NyAyMy44MTIgMTAuNzYzIDI0IDEyIDI0YzYuNjI3IDAgMTItNS4zNzMgMTItMTIgMC02LjYyOC01LjM3My0xMi0xMi0xMnpcIi8+PC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8L0NvbnRlbmlkb19QaWVfUGFnaW5hPlxyXG4gICk7XHJcbn0iLCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGVuaWRvX1ZvbHRlYXJfTnVtZXJvIH0gZnJvbSBcIi4uLy4uL1N0eWxlZC9TdHlsZWRDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZvbHRlYXJfTnVtZXJvKHsgYW5pbWF0aW9uRHVyYXRpb24sIG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBOdW1lcm9SZWYgPSB1c2VSZWYobnVtYmVyKTtcclxuICAgIGNvbnN0IHsgY3VycmVudDogTnVtZXJvX2FudGVyaW9yIH0gPSBOdW1lcm9SZWY7XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBOdW1lcm9SZWYuY3VycmVudCA9IG51bWJlcjtcclxuICAgIH0sIFtudW1iZXJdKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxDb250ZW5pZG9fVm9sdGVhcl9OdW1lcm9cclxuICAgICAgICBhbmltYXRpb25EdXJhdGlvbj17YW5pbWF0aW9uRHVyYXRpb259XHJcbiAgICAgICAga2V5PXtudW1iZXJ9XHJcbiAgICAgICAgc2hvdWxkQW5pbWF0ZT17TnVtZXJvX2FudGVyaW9yICE9PSBudW1iZXJ9XHJcbiAgICAgID5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcCBuZXh0XCI+e251bWJlcn08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsaXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tXCI+e251bWJlcn08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wXCI+e051bWVyb19hbnRlcmlvcn08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbSBjdXJyZW50XCI+e051bWVyb19hbnRlcmlvcn08L2Rpdj5cclxuICAgICAgPC9Db250ZW5pZG9fVm9sdGVhcl9OdW1lcm8+XHJcbiAgICApO1xyXG4gIH0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsdXhvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWNvbXBvbmVudHNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==