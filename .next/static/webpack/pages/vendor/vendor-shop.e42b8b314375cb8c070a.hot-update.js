webpackHotUpdate_N_E("pages/vendor/vendor-shop",{

/***/ "./components/partials/vendor/SellerStep.jsx":
/*!***************************************************!*\
  !*** ./components/partials/vendor/SellerStep.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_ShopPreferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ShopPreferences */ "./components/partials/vendor/modules/ShopPreferences.jsx");
/* harmony import */ var _modules_ProductStock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ProductStock */ "./components/partials/vendor/modules/ProductStock.jsx");
/* harmony import */ var _modules_SellerGetPaid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/SellerGetPaid */ "./components/partials/vendor/modules/SellerGetPaid.jsx");


var _jsxFileName = "F:\\UZomus\\uzomas_frontend\\components\\partials\\vendor\\SellerStep.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var SellerStep = function SellerStep() {
  _s();

  var Step = antd__WEBPACK_IMPORTED_MODULE_2__["Steps"].Step;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      current = _useState[0],
      setCurrent = _useState[1];

  var onChange = function onChange(current) {
    console.log('onChange:', current);
    setCurrent(current);
  };

  var handleCarouselNext = function handleCarouselNext(current) {
    console.log(current);
    setCurrent(current++);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "container pt-5",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Steps"], {
        current: current,
        onChange: onChange,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Step, {
          title: "Shop Preferences"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Step, {
          title: "Stock Your Shop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Step, {
          title: "Set Up Billing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: current === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_ShopPreferences__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, _this) : current === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_ProductStock__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_SellerGetPaid__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this), current === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "seller_save_btn",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        className: "ps-btn ps-btn--sm",
        href: "vendor/vendor-dashboard",
        children: "Save and Continue"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }, _this) : '']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(SellerStep, "8+O75ArtRNvpQgzeZSk5wKohTHI=");

_c = SellerStep;
/* harmony default export */ __webpack_exports__["default"] = (SellerStep);

var _c;

$RefreshReg$(_c, "SellerStep");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvU2VsbGVyU3RlcC5qc3giXSwibmFtZXMiOlsiU2VsbGVyU3RlcCIsIlN0ZXAiLCJTdGVwcyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXJvdXNlbE5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsTUFDYkMsSUFEYSxHQUNKQywwQ0FESSxDQUNiRCxJQURhOztBQUFBLGtCQUdTRSxzREFBUSxDQUFDLENBQUQsQ0FIakI7QUFBQSxNQUdkQyxPQUhjO0FBQUEsTUFHTEMsVUFISzs7QUFLckIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsT0FBRCxFQUFhO0FBQzFCRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSixPQUF6QjtBQUNBQyxjQUFVLENBQUNELE9BQUQsQ0FBVjtBQUNILEdBSEQ7O0FBS0EsTUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDTCxPQUFELEVBQWE7QUFDcENHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBQ0FDLGNBQVUsQ0FBQ0QsT0FBTyxFQUFSLENBQVY7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSSxxRUFBQywwQ0FBRDtBQUFPLGVBQU8sRUFBRUEsT0FBaEI7QUFBeUIsZ0JBQVEsRUFBRUUsUUFBbkM7QUFBQSxnQ0FDSSxxRUFBQyxJQUFEO0FBQU0sZUFBSyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUdJLHFFQUFDLElBQUQ7QUFBTSxlQUFLLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUkscUVBQUMsSUFBRDtBQUFNLGVBQUssRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFRSSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFXSTtBQUFBLGdCQUNLRixPQUFPLEtBQUssQ0FBWixnQkFDRyxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsR0FFR0EsT0FBTyxLQUFLLENBQVosZ0JBQ0EscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGdCQUdBLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEosRUFvQktBLE9BQU8sS0FBSyxDQUFaLGdCQUNHO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxpQkFBUyxFQUFDLG1CQUFoQjtBQUFvQyxZQUFJLEVBQUMseUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILEdBT0csRUEzQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvREgsQ0FuRUQ7O0dBQU1KLFU7O0tBQUFBLFU7QUFxRVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci92ZW5kb3Itc2hvcC5lNDJiOGIzMTQzNzVjYjhjMDcwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdGVwcywgRGl2aWRlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IFNob3BQcmVmZXJlbmNlcyBmcm9tICcuL21vZHVsZXMvU2hvcFByZWZlcmVuY2VzJztcclxuaW1wb3J0IFByb2R1Y3RTdG9jayBmcm9tICcuL21vZHVsZXMvUHJvZHVjdFN0b2NrJztcclxuaW1wb3J0IFNlbGxlckdldFBhaWQgZnJvbSAnLi9tb2R1bGVzL1NlbGxlckdldFBhaWQnO1xyXG5cclxuY29uc3QgU2VsbGVyU3RlcCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgU3RlcCB9ID0gU3RlcHM7XHJcblxyXG4gICAgY29uc3QgW2N1cnJlbnQsIHNldEN1cnJlbnRdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoY3VycmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvbkNoYW5nZTonLCBjdXJyZW50KTtcclxuICAgICAgICBzZXRDdXJyZW50KGN1cnJlbnQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDYXJvdXNlbE5leHQgPSAoY3VycmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xyXG4gICAgICAgIHNldEN1cnJlbnQoY3VycmVudCsrKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwdC01XCI+XHJcbiAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgPFN0ZXBzIGN1cnJlbnQ9e2N1cnJlbnR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXAgdGl0bGU9XCJTaG9wIFByZWZlcmVuY2VzXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXAgdGl0bGU9XCJTdG9jayBZb3VyIFNob3BcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGVwIHRpdGxlPVwiU2V0IFVwIEJpbGxpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TdGVwcz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8U2hvcFByZWZlcmVuY2VzIC8+XHJcbiAgICAgICAgICAgICAgICApIDogY3VycmVudCA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdFN0b2NrIC8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWxsZXJHZXRQYWlkIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2N1cnJlbnQgPT09IDIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGxlcl9zYXZlX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cInBzLWJ0biBwcy1idG4tLXNtXCIgaHJlZj1cInZlbmRvci92ZW5kb3ItZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNhdmUgYW5kIENvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAnJ1xyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGN1cnJlbnQpID0+IHNldEN1cnJlbnQoY3VycmVudCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogY3VycmVudCA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGN1cnJlbnQpID0+IHNldEN1cnJlbnQoY3VycmVudCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdmVuZG9yL3ZlbmRvci1kYXNoYm9hcmRcIj5TdWJtaXQ8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsbGVyU3RlcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==