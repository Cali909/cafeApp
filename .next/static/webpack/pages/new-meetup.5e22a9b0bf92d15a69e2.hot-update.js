webpackHotUpdate_N_E("pages/new-meetup",{

/***/ "./components/meetups/NewMeetupForm.js":
/*!*********************************************!*\
  !*** ./components/meetups/NewMeetupForm.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewMeetupForm.module.css */ "./components/meetups/NewMeetupForm.module.css");
/* harmony import */ var _NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_NewMeetupForm_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Cali\\Desktop\\cafeApp\\components\\meetups\\NewMeetupForm.js",
    _s = $RefreshSig$();






function NewMeetupForm(props) {
  _s();

  var t1 = performance.now(); //TODO: make it immutable

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      titleTouched = _useState2[0],
      setTitleTouched = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      image = _useState3[0],
      setImage = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      imageTouched = _useState4[0],
      setImageTouched = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      address = _useState5[0],
      setAddress = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      addressTouched = _useState6[0],
      setAddressTouched = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      description = _useState7[0],
      setDescription = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      descriptionTouched = _useState8[0],
      setDescriptionTouched = _useState8[1];

  var formIsValid = false;
  var titleIsValid = title.trim() !== "";
  var imageIsValid = image.trim() !== ""; //TODO: improve img check

  var addressIsValid = address.trim() !== "";
  var descriptionIsValid = description.trim() !== "";

  if (titleIsValid && imageIsValid && addressIsValid && descriptionIsValid) {
    formIsValid = true;
  }

  var handleTitleChange = function handleTitleChange(e) {
    setTitle(e.target.value);
    setTitleTouched(true);
  };

  var handleImageChange = function handleImageChange(e) {
    setImage(e.target.value);
    setImageTouched(true);
  };

  var handleAddressChange = function handleAddressChange(e) {
    setAddress(e.target.value);
    setAddressTouched(true);
  };

  var handleDescriptionChange = function handleDescriptionChange(e) {
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
    var meetupData = {
      title: title,
      image: image,
      address: address,
      description: description
    };
    props.onAddMeetup(meetupData);
    router.replace("/");
    var t2 = performance.now();
    console.log(t2 - t1);
  }

  var titleInputIsInvalid = !titleIsValid && titleTouched;
  var imageInputIsInvalid = !imageIsValid && imageTouched;
  var addressInputIsInvalid = !addressIsValid && addressTouched;
  var descriptionInputIsInvalid = !descriptionIsValid && descriptionTouched;
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

_s(NewMeetupForm, "f1rZYi3lkQvAusqBASaTJeYR+Lo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = NewMeetupForm;
/* harmony default export */ __webpack_exports__["default"] = (NewMeetupForm);

var _c;

$RefreshReg$(_c, "NewMeetupForm");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZWV0dXBzL05ld01lZXR1cEZvcm0uanMiXSwibmFtZXMiOlsiTmV3TWVldHVwRm9ybSIsInByb3BzIiwidDEiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidGl0bGUiLCJzZXRUaXRsZSIsInRpdGxlVG91Y2hlZCIsInNldFRpdGxlVG91Y2hlZCIsImltYWdlIiwic2V0SW1hZ2UiLCJpbWFnZVRvdWNoZWQiLCJzZXRJbWFnZVRvdWNoZWQiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImFkZHJlc3NUb3VjaGVkIiwic2V0QWRkcmVzc1RvdWNoZWQiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25Ub3VjaGVkIiwic2V0RGVzY3JpcHRpb25Ub3VjaGVkIiwiZm9ybUlzVmFsaWQiLCJ0aXRsZUlzVmFsaWQiLCJ0cmltIiwiaW1hZ2VJc1ZhbGlkIiwiYWRkcmVzc0lzVmFsaWQiLCJkZXNjcmlwdGlvbklzVmFsaWQiLCJoYW5kbGVUaXRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUltYWdlQ2hhbmdlIiwiaGFuZGxlQWRkcmVzc0NoYW5nZSIsImhhbmRsZURlc2NyaXB0aW9uQ2hhbmdlIiwic3VibWl0SGFuZGxlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJtZWV0dXBEYXRhIiwib25BZGRNZWV0dXAiLCJyZXBsYWNlIiwidDIiLCJjb25zb2xlIiwibG9nIiwidGl0bGVJbnB1dElzSW52YWxpZCIsImltYWdlSW5wdXRJc0ludmFsaWQiLCJhZGRyZXNzSW5wdXRJc0ludmFsaWQiLCJkZXNjcmlwdGlvbklucHV0SXNJbnZhbGlkIiwiY2xhc3NlcyIsImZvcm0iLCJjb250cm9sIiwiZXJyb3IiLCJhY3Rpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVB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QUFFRSxjQUFJLEVBQUMsR0FGUDtBQUdFLHFCQUFXLEVBQUMsbUNBSGQ7QUFJRSxrQkFBUSxFQUFFaEI7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLEVBUUdhLHlCQUF5QixpQkFDeEI7QUFBRyxtQkFBUyxFQUFFQyxnRUFBTyxDQUFDRyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQ0YsZUFpREU7QUFBSyxpQkFBUyxFQUFFSCxnRUFBTyxDQUFDSSxPQUF4QjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5REQ7O0dBdElRdEQsYTtVQUVRTSxxRDs7O0tBRlJOLGE7QUF3SU1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25ldy1tZWV0dXAuNWUyMmE5YjBiZjkyZDE1YTY5ZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL3VpL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL05ld01lZXR1cEZvcm0ubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBOZXdNZWV0dXBGb3JtKHByb3BzKSB7XG4gIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7IC8vVE9ETzogbWFrZSBpdCBpbW11dGFibGVcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RpdGxlVG91Y2hlZCwgc2V0VGl0bGVUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2ltYWdlLCBzZXRJbWFnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ltYWdlVG91Y2hlZCwgc2V0SW1hZ2VUb3VjaGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthZGRyZXNzVG91Y2hlZCwgc2V0QWRkcmVzc1RvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZGVzY3JpcHRpb25Ub3VjaGVkLCBzZXREZXNjcmlwdGlvblRvdWNoZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuXG4gIGNvbnN0IHRpdGxlSXNWYWxpZCA9IHRpdGxlLnRyaW0oKSAhPT0gXCJcIjtcbiAgY29uc3QgaW1hZ2VJc1ZhbGlkID0gaW1hZ2UudHJpbSgpICE9PSBcIlwiOyAvL1RPRE86IGltcHJvdmUgaW1nIGNoZWNrXG4gIGNvbnN0IGFkZHJlc3NJc1ZhbGlkID0gYWRkcmVzcy50cmltKCkgIT09IFwiXCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uSXNWYWxpZCA9IGRlc2NyaXB0aW9uLnRyaW0oKSAhPT0gXCJcIjtcblxuICBpZiAodGl0bGVJc1ZhbGlkICYmIGltYWdlSXNWYWxpZCAmJiBhZGRyZXNzSXNWYWxpZCAmJiBkZXNjcmlwdGlvbklzVmFsaWQpIHtcbiAgICBmb3JtSXNWYWxpZCA9IHRydWU7XG4gIH1cblxuICBjb25zdCBoYW5kbGVUaXRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldFRpdGxlVG91Y2hlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbWFnZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0SW1hZ2UoZS50YXJnZXQudmFsdWUpO1xuICAgIHNldEltYWdlVG91Y2hlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVBZGRyZXNzQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRBZGRyZXNzVG91Y2hlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpO1xuICAgIHNldERlc2NyaXB0aW9uVG91Y2hlZCh0cnVlKTtcbiAgfTtcblxuICBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHNldFRpdGxlVG91Y2hlZCh0cnVlKTtcbiAgICBzZXRJbWFnZVRvdWNoZWQodHJ1ZSk7XG4gICAgc2V0QWRkcmVzc1RvdWNoZWQodHJ1ZSk7XG4gICAgc2V0RGVzY3JpcHRpb25Ub3VjaGVkKHRydWUpO1xuXG4gICAgaWYgKCFmb3JtSXNWYWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGNvbnN0IG1lZXR1cERhdGEgPSB7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbWFnZTogaW1hZ2UsXG4gICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgIH07XG5cbiAgICBwcm9wcy5vbkFkZE1lZXR1cChtZWV0dXBEYXRhKTtcblxuICAgIHJvdXRlci5yZXBsYWNlKFwiL1wiKTtcbiAgICBjb25zdCB0MiA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnNvbGUubG9nKHQyIC0gdDEpO1xuICB9XG5cbiAgY29uc3QgdGl0bGVJbnB1dElzSW52YWxpZCA9ICF0aXRsZUlzVmFsaWQgJiYgdGl0bGVUb3VjaGVkO1xuICBjb25zdCBpbWFnZUlucHV0SXNJbnZhbGlkID0gIWltYWdlSXNWYWxpZCAmJiBpbWFnZVRvdWNoZWQ7XG4gIGNvbnN0IGFkZHJlc3NJbnB1dElzSW52YWxpZCA9ICFhZGRyZXNzSXNWYWxpZCAmJiBhZGRyZXNzVG91Y2hlZDtcbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dElzSW52YWxpZCA9ICFkZXNjcmlwdGlvbklzVmFsaWQgJiYgZGVzY3JpcHRpb25Ub3VjaGVkO1xuXG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gb25TdWJtaXQ9e3N1Ym1pdEhhbmRsZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCI+Q2FmZSBUaXRsZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBpZD1cInRpdGxlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgQ2FmZSBUaXRsZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlVGl0bGVDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7dGl0bGVJbnB1dElzSW52YWxpZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PlRpdGxlIENhbid0IEJlIEVtcHR5PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+Q2FmZSBJbWFnZTwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidXJsXCJcbiAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbWFnZSBVUkwgaGVyZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW1hZ2VDaGFuZ2V9XG4gICAgICAgICAgLz5cbiAgICAgICAgICB7aW1hZ2VJbnB1dElzSW52YWxpZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PkltYWdlIENhbid0IEJlIEVtcHR5PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250cm9sfT5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImFkZHJlc3NcIj5BZGRyZXNzPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGlkPVwiYWRkcmVzc1wiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoZXJlIENhbiBJIEZpbmQgWW91ciBDYWZlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBZGRyZXNzQ2hhbmdlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAge2FkZHJlc3NJbnB1dElzSW52YWxpZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PkFkZHJlc3MgQ2FuJ3QgQmUgRW1wdHk8L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRyb2x9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgQSBGZXcgTGluZXMgQWJvdXQgWW91ciBDYWZlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZX1cbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICB7ZGVzY3JpcHRpb25JbnB1dElzSW52YWxpZCAmJiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PkRlc2NyaXB0aW9uIENhbid0IEJlIEVtcHR5PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cbiAgICAgICAgICA8YnV0dG9uPkFkZCBDYWZlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvQ2FyZD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmV3TWVldHVwRm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=