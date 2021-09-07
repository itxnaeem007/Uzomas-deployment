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
/* harmony import */ var _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/styles/sellerProducts.module.css */ "./styles/sellerProducts.module.css");
/* harmony import */ var _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _modules_ShopPreferences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ShopPreferences */ "./components/partials/vendor/modules/ShopPreferences.jsx");
/* harmony import */ var _modules_ProductStock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/ProductStock */ "./components/partials/vendor/modules/ProductStock.jsx");
/* harmony import */ var _modules_SellerGetPaid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/SellerGetPaid */ "./components/partials/vendor/modules/SellerGetPaid.jsx");


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
          lineNumber: 30,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Step, {
          title: "Stock Your Shop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Step, {
          title: "Set Up Billing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: current === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_ShopPreferences__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, _this) : current === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_ProductStock__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_SellerGetPaid__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, _this), current === 2 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.span,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "ps-btn ps-btn--sm",
        to: "/vendor/vendor-dashboard",
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }, _this) : '']
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvU2VsbGVyU3RlcC5qc3giXSwibmFtZXMiOlsiU2VsbGVyU3RlcCIsIlN0ZXAiLCJTdGVwcyIsInVzZVN0YXRlIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJvbkNoYW5nZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDYXJvdXNlbE5leHQiLCJzdHlsZXMiLCJzcGFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQSxNQUNiQyxJQURhLEdBQ0pDLDBDQURJLENBQ2JELElBRGE7O0FBQUEsa0JBR1NFLHNEQUFRLENBQUMsQ0FBRCxDQUhqQjtBQUFBLE1BR2RDLE9BSGM7QUFBQSxNQUdMQyxVQUhLOztBQUtyQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDRixPQUFELEVBQWE7QUFDMUJHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVosRUFBeUJKLE9BQXpCO0FBQ0FDLGNBQVUsQ0FBQ0QsT0FBRCxDQUFWO0FBQ0gsR0FIRDs7QUFLQSxNQUFNSyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNMLE9BQUQsRUFBYTtBQUNwQ0csV0FBTyxDQUFDQyxHQUFSLENBQVlKLE9BQVo7QUFDQUMsY0FBVSxDQUFDRCxPQUFPLEVBQVIsQ0FBVjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQSw0QkFDSTtBQUFBLDhCQUNJLHFFQUFDLDBDQUFEO0FBQU8sZUFBTyxFQUFFQSxPQUFoQjtBQUF5QixnQkFBUSxFQUFFRSxRQUFuQztBQUFBLGdDQUNJLHFFQUFDLElBQUQ7QUFBTSxlQUFLLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBR0kscUVBQUMsSUFBRDtBQUFNLGVBQUssRUFBQztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSSxxRUFBQyxJQUFEO0FBQU0sZUFBSyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQVFJLHFFQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVdJO0FBQUEsZ0JBQ0tGLE9BQU8sS0FBSyxDQUFaLGdCQUNHLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxHQUVHQSxPQUFPLEtBQUssQ0FBWixnQkFDQSxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREEsZ0JBR0EscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5SO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFYSixFQW9CS0EsT0FBTyxLQUFLLENBQVosZ0JBQ0c7QUFBTSxlQUFTLEVBQUVNLHdFQUFNLENBQUNDLElBQXhCO0FBQUEsNkJBQ0k7QUFDSSxpQkFBUyxFQUFDLG1CQURkO0FBRUksVUFBRSxFQUFDLDBCQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURILEdBU0csRUE3QlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFzREgsQ0FyRUQ7O0dBQU1YLFU7O0tBQUFBLFU7QUF1RVNBLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci92ZW5kb3Itc2hvcC40YjdjZTIwNTJlOWRkYTIxY2I2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTdGVwcywgRGl2aWRlciB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL3NlbGxlclByb2R1Y3RzLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBTaG9wUHJlZmVyZW5jZXMgZnJvbSAnLi9tb2R1bGVzL1Nob3BQcmVmZXJlbmNlcyc7XHJcbmltcG9ydCBQcm9kdWN0U3RvY2sgZnJvbSAnLi9tb2R1bGVzL1Byb2R1Y3RTdG9jayc7XHJcbmltcG9ydCBTZWxsZXJHZXRQYWlkIGZyb20gJy4vbW9kdWxlcy9TZWxsZXJHZXRQYWlkJztcclxuXHJcbmNvbnN0IFNlbGxlclN0ZXAgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IFN0ZXAgfSA9IFN0ZXBzO1xyXG5cclxuICAgIGNvbnN0IFtjdXJyZW50LCBzZXRDdXJyZW50XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlID0gKGN1cnJlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb25DaGFuZ2U6JywgY3VycmVudCk7XHJcbiAgICAgICAgc2V0Q3VycmVudChjdXJyZW50KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2Fyb3VzZWxOZXh0ID0gKGN1cnJlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50KTtcclxuICAgICAgICBzZXRDdXJyZW50KGN1cnJlbnQrKyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHQtNVwiPlxyXG4gICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIDxTdGVwcyBjdXJyZW50PXtjdXJyZW50fSBvbkNoYW5nZT17b25DaGFuZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGVwIHRpdGxlPVwiU2hvcCBQcmVmZXJlbmNlc1wiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxTdGVwIHRpdGxlPVwiU3RvY2sgWW91ciBTaG9wXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8U3RlcCB0aXRsZT1cIlNldCBVcCBCaWxsaW5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU3RlcHM+XHJcblxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnQgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNob3BQcmVmZXJlbmNlcyAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IGN1cnJlbnQgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RTdG9jayAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8U2VsbGVyR2V0UGFpZCAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtjdXJyZW50ID09PSAyID8gKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcy1idG4gcHMtYnRuLS1zbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvPVwiL3ZlbmRvci92ZW5kb3ItZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgJydcclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2N1cnJlbnQgPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhjdXJyZW50KSA9PiBzZXRDdXJyZW50KGN1cnJlbnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IGN1cnJlbnQgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhjdXJyZW50KSA9PiBzZXRDdXJyZW50KGN1cnJlbnQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3ZlbmRvci92ZW5kb3ItZGFzaGJvYXJkXCI+U3VibWl0PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGxlclN0ZXA7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=