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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/new-meetup/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/NewMeetupForm.js":
/*!*********************************************!*\
  !*** ./components/meetups/NewMeetupForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewMeetupForm.module.css */ "./components/meetups/NewMeetupForm.module.css");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Cali\\Desktop\\cafeApp\\components\\meetups\\NewMeetupForm.js";





function NewMeetupForm(props) {
  const t1 = performance.now(); //TODO: make it immutable

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: titleTouched,
    1: setTitleTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: image,
    1: setImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: imageTouched,
    1: setImageTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: address,
    1: setAddress
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: addressTouched,
    1: setAddressTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: descriptionTouched,
    1: setDescriptionTouched
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let formIsValid = false;
  const titleIsValid = title.trim() !== "";
  const imageIsValid = image.trim() !== ""; //TODO: improve img check

  const addressIsValid = address.trim() !== "";
  const descriptionIsValid = description.trim() !== "";

  if (titleIsValid && imageIsValid && addressIsValid && descriptionIsValid) {
    formIsValid = true;
  }

  const handleTitleChange = e => {
    setTitle(e.target.value);
    setTitleTouched(true);
  };

  const handleImageChange = e => {
    setImage(e.target.value);
    setImageTouched(true);
  };

  const handleAddressChange = e => {
    setAddress(e.target.value);
    setAddressTouched(true);
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
    setDescriptionTouched(true);
  };

  function submitHandler(event) {
    event.preventDefault();
    setTitleTouched(true);
    setImageTouched(true);
    setAddressTouched(true);
    setDescriptionTouched(true);

    if (!formIsValid) {
      return;
    }

    formIsValid = true;
    const meetupData = {
      title: title,
      image: image,
      address: address,
      description: description
    };
    props.onAddMeetup(meetupData);
    router.replace("/");
    const t2 = performance.now();
    console.log(t2 - t1);
  }

  const titleInputIsInvalid = !titleIsValid && titleTouched;
  const imageInputIsInvalid = !imageIsValid && imageTouched;
  const addressInputIsInvalid = !addressIsValid && addressTouched;
  const descriptionInputIsInvalid = !descriptionIsValid && descriptionTouched;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ui_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.form,
      onSubmit: submitHandler,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "title",
          children: "Cafe Title"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "title",
          placeholder: "Enter Cafe Title",
          onChange: handleTitleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, this), titleInputIsInvalid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.error,
          children: "Title Can't Be Empty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "image",
          children: "Cafe Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "url",
          id: "image",
          placeholder: "image URL here",
          onChange: handleImageChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this), imageInputIsInvalid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.error,
          children: "Image Can't Be Empty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "address",
          children: "Address"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "text",
          id: "address",
          placeholder: "Where Can I Find Your Cafe",
          onChange: handleAddressChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, this), addressInputIsInvalid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.error,
          children: "Address Can't Be Empty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.control,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
          htmlFor: "description",
          children: "Description"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("textarea", {
          id: "description",
          rows: "5",
          placeholder: "Write A Few Lines About Your Cafe",
          onChange: handleDescriptionChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, this), descriptionInputIsInvalid && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.error,
          children: "Description Can't Be Empty"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          children: "Add Cafe"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (NewMeetupForm);

/***/ }),

/***/ "./components/meetups/NewMeetupForm.module.css":
/*!*****************************************************!*\
  !*** ./components/meetups/NewMeetupForm.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"form": "NewMeetupForm_form__2wUf9",
	"control": "NewMeetupForm_control__Vi75y",
	"actions": "NewMeetupForm_actions__2d-nQ",
	"error": "NewMeetupForm_error__1aAfc"
};


/***/ }),

/***/ "./components/ui/Card.js":
/*!*******************************!*\
  !*** ./components/ui/Card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./components/ui/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Cali\\Desktop\\cafeApp\\components\\ui\\Card.js";


function Card(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.card,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Card);

/***/ }),

/***/ "./components/ui/Card.module.css":
/*!***************************************!*\
  !*** ./components/ui/Card.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"card": "Card_card__3KSLO"
};


/***/ }),

/***/ "./pages/new-meetup/index.js":
/*!***********************************!*\
  !*** ./pages/new-meetup/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/meetups/NewMeetupForm */ "./components/meetups/NewMeetupForm.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Cali\\Desktop\\cafeApp\\pages\\new-meetup\\index.js";




const NewMeetupPage = () => {
  const handleAddMeetup = data => {
    console.log(data); //send data to an API
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Add New Meetup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_meetups_NewMeetupForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onAddMeetup: handleAddMeetup
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (NewMeetupPage);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91aS9DYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidDEiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJvdXRlciIsInVzZVJvdXRlciIsInRpdGxlIiwic2V0VGl0bGUiLCJ1c2VTdGF0ZSIsInRpdGxlVG91Y2hlZCIsInNldFRpdGxlVG91Y2hlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJpbWFnZVRvdWNoZWQiLCJzZXRJbWFnZVRvdWNoZWQiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImFkZHJlc3NUb3VjaGVkIiwic2V0QWRkcmVzc1RvdWNoZWQiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25Ub3VjaGVkIiwic2V0RGVzY3JpcHRpb25Ub3VjaGVkIiwiZm9ybUlzVmFsaWQiLCJ0aXRsZUlzVmFsaWQiLCJ0cmltIiwiaW1hZ2VJc1ZhbGlkIiwiYWRkcmVzc0lzVmFsaWQiLCJkZXNjcmlwdGlvbklzVmFsaWQiLCJoYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUltYWdlQ2hhbmdlIiwiaGFuZGxlQWRkcmVzc0NoYW5nZSIsImhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtZWV0dXBEYXRhIiwib25BZGRNZWV0dXAiLCJyZXBsYWNlIiwidDIiLCJjb25zb2xlIiwibG9nIiwidGl0bGVJbnB1dElzSW52YWxpZCIsImltYWdlSW5wdXRJc0ludmFsaWQiLCJhZGRyZXNzSW5wdXRJc0ludmFsaWQiLCJkZXNjcmlwdGlvbklucHV0SXNJbnZhbGlkIiwiY2xhc3NlcyIsImZvcm0iLCJjb250cm9sIiwiZXJyb3IiLCJhY3Rpb25zIiwiQ2FyZCIsImNhcmQiLCJjaGlsZHJlbiIsIk5ld01lZXR1cFBhZ2UiLCJoYW5kbGVBZGRNZWV0dXAiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtR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O0FBQUEsaUJBREYsZUFJRSxxRUFBQyx5RUFBRDtBQUFlLGlCQUFXLEVBQUVEO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQWREOztBQWdCZUQsNEVBQWYsRTs7Ozs7Ozs7Ozs7QUNwQkEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvbmV3LW1lZXR1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbmV3LW1lZXR1cC9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL05ld01lZXR1cEZvcm0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBOZXdNZWV0dXBGb3JtKHByb3BzKSB7XG4gIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7IC8vVE9ETzogbWFrZSBpdCBpbW11dGFibGVcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RpdGxlVG91Y2hlZCwgc2V0VGl0bGVUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltYWdlVG91Y2hlZCwgc2V0SW1hZ2VUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthZGRyZXNzVG91Y2hlZCwgc2V0QWRkcmVzc1RvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGVzY3JpcHRpb25Ub3VjaGVkLCBzZXREZXNjcmlwdGlvblRvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHRpdGxlSXNWYWxpZCA9IHRpdGxlLnRyaW0oKSAhPT0gXCJcIjtcbiAgY29uc3QgaW1hZ2VJc1ZhbGlkID0gaW1hZ2UudHJpbSgpICE9PSBcIlwiOyAvL1RPRE86IGltcHJvdmUgaW1nIGNoZWNrXG4gIGNvbnN0IGFkZHJlc3NJc1ZhbGlkID0gYWRkcmVzcy50cmltKCkgIT09IFwiXCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSXNWYWxpZCA9IGRlc2NyaXB0aW9uLnRyaW0oKSAhPT0gXCJcIjtcblxuICBpZiAodGl0bGVJc1ZhbGlkICYmIGltYWdlSXNWYWxpZCAmJiBhZGRyZXNzSXNWYWxpZCAmJiBkZXNjcmlwdGlvbklzVmFsaWQpIHtcbiAgICBmb3JtSXNWYWxpZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBoYW5kbGVUaXRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldFRpdGxlVG91Y2hlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW1hZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEltYWdlVG91Y2hlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRyZXNzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRBZGRyZXNzVG91Y2hlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xuICAgIHNldERlc2NyaXB0aW9uVG91Y2hlZCh0cnVlKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldFRpdGxlVG91Y2hlZCh0cnVlKTtcbiAgICBzZXRJbWFnZVRvdWNoZWQodHJ1ZSk7XG4gICAgc2V0QWRkcmVzc1RvdWNoZWQodHJ1ZSk7XG4gICAgc2V0RGVzY3JpcHRpb25Ub3VjaGVkKHRydWUpO1xuXG4gICAgaWYgKCFmb3JtSXNWYWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1lZXR1cERhdGEgPSB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIH07XG5cbiAgICBwcm9wcy5vbkFkZE1lZXR1cChtZWV0dXBEYXRhKTtcblxuICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcbiAgICBjb25zdCB0MiA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKHQyIC0gdDEpO1xuICB9XG5cbiAgY29uc3QgdGl0bGVJbnB1dElzSW52YWxpZCA9ICF0aXRsZUlzVmFsaWQgJiYgdGl0bGVUb3VjaGVkO1xuICBjb25zdCBpbWFnZUlucHV0SXNJbnZhbGlkID0gIWltYWdlSXNWYWxpZCAmJiBpbWFnZVRvdWNoZWQ7XG4gIGNvbnN0IGFkZHJlc3NJbnB1dElzSW52YWxpZCA9ICFhZGRyZXNzSXNWYWxpZCAmJiBhZGRyZXNzVG91Y2hlZDtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dElzSW52YWxpZCA9ICFkZXNjcmlwdGlvbklzVmFsaWQgJiYgZGVzY3JpcHRpb25Ub3VjaGVkO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+Q2FmZSBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2FmZSBUaXRsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGl0bGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGl0bGVJbnB1dElzSW52YWxpZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PlRpdGxlIENhbid0IEJlIEVtcHR5PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+Q2FmZSBJbWFnZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbWFnZSBVUkwgaGVyZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aW1hZ2VJbnB1dElzSW52YWxpZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PkltYWdlIENhbid0IEJlIEVtcHR5PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5BZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoZXJlIENhbiBJIEZpbmQgWW91ciBDYWZlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBZGRyZXNzQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2FkZHJlc3NJbnB1dElzSW52YWxpZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PkFkZHJlc3MgQ2FuJ3QgQmUgRW1wdHk8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgQSBGZXcgTGluZXMgQWJvdXQgWW91ciBDYWZlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICB7ZGVzY3JpcHRpb25JbnB1dElzSW52YWxpZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PkRlc2NyaXB0aW9uIENhbid0IEJlIEVtcHR5PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPkFkZCBDYWZlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwRm9ybTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvcm1cIjogXCJOZXdNZWV0dXBGb3JtX2Zvcm1fXzJ3VWY5XCIsXG5cdFwiY29udHJvbFwiOiBcIk5ld01lZXR1cEZvcm1fY29udHJvbF9fVmk3NXlcIixcblx0XCJhY3Rpb25zXCI6IFwiTmV3TWVldHVwRm9ybV9hY3Rpb25zX18yZC1uUVwiLFxuXHRcImVycm9yXCI6IFwiTmV3TWVldHVwRm9ybV9lcnJvcl9fMWFBZmNcIlxufTtcbiIsImltcG9ydCBjbGFzc2VzIGZyb20gJy4vQ2FyZC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gQ2FyZChwcm9wcykge1xuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+e3Byb3BzLmNoaWxkcmVufTwvZGl2Pjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDYXJkX2NhcmRfXzNLU0xPXCJcbn07XG4iLCJpbXBvcnQgTmV3TWVldHVwRm9ybSBmcm9tIFwiLi8uLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTmV3TWVldHVwRm9ybVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBOZXdNZWV0dXBQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhhbmRsZUFkZE1lZXR1cCA9IChkYXRhKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vc2VuZCBkYXRhIHRvIGFuIEFQSVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5BZGQgTmV3IE1lZXR1cDwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE5ld01lZXR1cEZvcm0gb25BZGRNZWV0dXA9e2hhbmRsZUFkZE1lZXR1cH0gLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld01lZXR1cFBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==