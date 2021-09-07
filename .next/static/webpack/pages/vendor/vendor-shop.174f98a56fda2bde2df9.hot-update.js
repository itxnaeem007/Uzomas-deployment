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
      className: "ps-btn ps-btn--sm",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvU2VsbGVyU3RlcC5qc3giXSwibmFtZXMiOlsiU2VsbGVyU3RlcCIsIlN0ZXAiLCJTdGVwcyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXJvdXNlbE5leHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUEsTUFDYkMsSUFEYSxHQUNKQywwQ0FESSxDQUNiRCxJQURhOztBQUFBLGtCQUdTRSxzREFBUSxDQUFDLENBQUQsQ0FIakI7QUFBQSxNQUdkQyxPQUhjO0FBQUEsTUFHTEMsVUFISzs7QUFLckIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsT0FBRCxFQUFhO0FBQzFCRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCSixPQUF6QjtBQUNBQyxjQUFVLENBQUNELE9BQUQsQ0FBVjtBQUNILEdBSEQ7O0FBS0EsTUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDTCxPQUFELEVBQWE7QUFDcENHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixPQUFaO0FBQ0FDLGNBQVUsQ0FBQ0QsT0FBTyxFQUFSLENBQVY7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSSxxRUFBQywwQ0FBRDtBQUFPLGVBQU8sRUFBRUEsT0FBaEI7QUFBeUIsZ0JBQVEsRUFBRUUsUUFBbkM7QUFBQSxnQ0FDSSxxRUFBQyxJQUFEO0FBQU0sZUFBSyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUdJLHFFQUFDLElBQUQ7QUFBTSxlQUFLLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUkscUVBQUMsSUFBRDtBQUFNLGVBQUssRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFRSSxxRUFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFXSTtBQUFBLGdCQUNLRixPQUFPLEtBQUssQ0FBWixnQkFDRyxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsR0FFR0EsT0FBTyxLQUFLLENBQVosZ0JBQ0EscUVBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURBLGdCQUdBLHFFQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEosRUFvQktBLE9BQU8sS0FBSyxDQUFaLGdCQUNHO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMseUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREgsR0FPRyxFQTNCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9ESCxDQW5FRDs7R0FBTUosVTs7S0FBQUEsVTtBQXFFU0EseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVuZG9yL3ZlbmRvci1zaG9wLjE3NGY5OGE1NmZkYTJiZGUyZGY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0ZXBzLCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgU2hvcFByZWZlcmVuY2VzIGZyb20gJy4vbW9kdWxlcy9TaG9wUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgUHJvZHVjdFN0b2NrIGZyb20gJy4vbW9kdWxlcy9Qcm9kdWN0U3RvY2snO1xyXG5pbXBvcnQgU2VsbGVyR2V0UGFpZCBmcm9tICcuL21vZHVsZXMvU2VsbGVyR2V0UGFpZCc7XHJcblxyXG5jb25zdCBTZWxsZXJTdGVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBTdGVwIH0gPSBTdGVwcztcclxuXHJcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uQ2hhbmdlOicsIGN1cnJlbnQpO1xyXG4gICAgICAgIHNldEN1cnJlbnQoY3VycmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcm91c2VsTmV4dCA9IChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudCk7XHJcbiAgICAgICAgc2V0Q3VycmVudChjdXJyZW50KyspO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTVcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8U3RlcHMgY3VycmVudD17Y3VycmVudH0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3RlcCB0aXRsZT1cIlNob3AgUHJlZmVyZW5jZXNcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U3RlcCB0aXRsZT1cIlN0b2NrIFlvdXIgU2hvcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXAgdGl0bGU9XCJTZXQgVXAgQmlsbGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0ZXBzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTaG9wUHJlZmVyZW5jZXMgLz5cclxuICAgICAgICAgICAgICAgICkgOiBjdXJyZW50ID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0U3RvY2sgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGxlckdldFBhaWQgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Y3VycmVudCA9PT0gMiA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYnRuIHBzLWJ0bi0tc21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwidmVuZG9yL3ZlbmRvci1kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZSBhbmQgQ29udGludWVcclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICcnXHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY3VycmVudCkgPT4gc2V0Q3VycmVudChjdXJyZW50KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBjdXJyZW50ID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY3VycmVudCkgPT4gc2V0Q3VycmVudChjdXJyZW50KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92ZW5kb3IvdmVuZG9yLWRhc2hib2FyZFwiPlN1Ym1pdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxsZXJTdGVwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9