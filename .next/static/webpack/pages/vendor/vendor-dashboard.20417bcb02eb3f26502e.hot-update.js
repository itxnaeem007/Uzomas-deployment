webpackHotUpdate_N_E("pages/vendor/vendor-dashboard",{

/***/ "./components/partials/vendor/modules/VendorProducts.jsx":
/*!***************************************************************!*\
  !*** ./components/partials/vendor/modules/VendorProducts.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../public/static/data/product */ "./public/static/data/product.json");
var _public_static_data_product__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../public/static/data/product */ "./public/static/data/product.json", 1);
/* harmony import */ var _elements_products_ProductOffline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../elements/products/ProductOffline */ "./components/elements/products/ProductOffline.jsx");
/* harmony import */ var _elements_products_ProductWide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../elements/products/ProductWide */ "./components/elements/products/ProductWide.jsx");


var _jsxFileName = "F:\\UZomus\\uzomas_frontend\\components\\partials\\vendor\\modules\\VendorProducts.jsx",
    _this = undefined,
    _s = $RefreshSig$();






var VendorProducts = function VendorProducts() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      listView = _useState[0],
      setListView = _useState[1];

  console.log('Related Product', _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"]);

  var handleChangeViewMode = function handleChangeViewMode(event) {
    event.preventDefault();
    setListView({
      listView: !listView
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ps-shopping vendor-shop",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-shopping__header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"] ? _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"].length : 0
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, _this), "Products found"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-shopping__content",
      children: listView === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ps-shopping-product",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          children: _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"] && _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"].length > 0 ? _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"].map(function (product) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-3 col-md-4 col-sm-6 col-6 ",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_products_ProductOffline__WEBPACK_IMPORTED_MODULE_3__["default"], {
                product: ""
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 43
              }, _this)
            }, product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 39
            }, _this);
          }) : ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ps-shopping-product",
        children: _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"] && _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"].length > 0 ? _public_static_data_product__WEBPACK_IMPORTED_MODULE_2__["relatedProduct"].map(function (product) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_elements_products_ProductWide__WEBPACK_IMPORTED_MODULE_4__["default"], {
            product: product
          }, product.id, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 35
          }, _this);
        }) : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, _this);
};

_s(VendorProducts, "ILftGnqrMpr9/9Y14W6ilt2Ka4A=");

_c = VendorProducts;
/* harmony default export */ __webpack_exports__["default"] = (VendorProducts);

var _c;

$RefreshReg$(_c, "VendorProducts");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvbW9kdWxlcy9WZW5kb3JQcm9kdWN0cy5qc3giXSwibmFtZXMiOlsiVmVuZG9yUHJvZHVjdHMiLCJ1c2VTdGF0ZSIsImxpc3RWaWV3Iiwic2V0TGlzdFZpZXciLCJjb25zb2xlIiwibG9nIiwicmVsYXRlZFByb2R1Y3QiLCJoYW5kbGVDaGFuZ2VWaWV3TW9kZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxJQUFELENBRGY7QUFBQSxNQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxXQURROztBQUd6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JDLDBFQUEvQjs7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBVztBQUNwQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0FOLGVBQVcsQ0FBQztBQUFFRCxjQUFRLEVBQUUsQ0FBQ0E7QUFBYixLQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQUEsb0JBQ0tJLDBFQUFjLEdBQUdBLDBFQUFjLENBQUNJLE1BQWxCLEdBQTJCO0FBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBaUNJO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsZ0JBQ0tSLFFBQVEsS0FBSyxJQUFiLGdCQUNHO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsb0JBQ0tJLDBFQUFjLElBQUlBLDBFQUFjLENBQUNJLE1BQWYsR0FBd0IsQ0FBMUMsR0FDS0osMEVBQWMsQ0FBQ0ssR0FBZixDQUFtQixVQUFDQyxPQUFEO0FBQUEsZ0NBQ2Y7QUFDSSx1QkFBUyxFQUFDLG1DQURkO0FBQUEscUNBR0kscUVBQUMseUVBQUQ7QUFBZ0IsdUJBQU8sRUFBQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEosZUFFU0EsT0FBTyxDQUFDQyxFQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURlO0FBQUEsV0FBbkIsQ0FETCxHQVFLO0FBVFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxnQkFlRztBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSxrQkFDS1AsMEVBQWMsSUFBSUEsMEVBQWMsQ0FBQ0ksTUFBZixHQUF3QixDQUExQyxHQUNLSiwwRUFBYyxDQUFDSyxHQUFmLENBQW1CLFVBQUNDLE9BQUQ7QUFBQSw4QkFDZixxRUFBQyxzRUFBRDtBQUNJLG1CQUFPLEVBQUVBO0FBRGIsYUFFU0EsT0FBTyxDQUFDQyxFQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURlO0FBQUEsU0FBbkIsQ0FETCxHQU9LO0FBUlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0VILENBekVEOztHQUFNYixjOztLQUFBQSxjO0FBMkVTQSw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZW5kb3IvdmVuZG9yLWRhc2hib2FyZC4yMDQxN2JjYjAyZWIzZjI2NTAyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyByZWxhdGVkUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL3B1YmxpYy9zdGF0aWMvZGF0YS9wcm9kdWN0JztcclxuaW1wb3J0IFByb2R1Y3RPZmZsaW5lIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RPZmZsaW5lJztcclxuaW1wb3J0IFByb2R1Y3RXaWRlIGZyb20gJy4uLy4uLy4uL2VsZW1lbnRzL3Byb2R1Y3RzL1Byb2R1Y3RXaWRlJztcclxuXHJcblxyXG5jb25zdCBWZW5kb3JQcm9kdWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtsaXN0Vmlldywgc2V0TGlzdFZpZXddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ1JlbGF0ZWQgUHJvZHVjdCcsIHJlbGF0ZWRQcm9kdWN0KTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZVZpZXdNb2RlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBzZXRMaXN0Vmlldyh7IGxpc3RWaWV3OiAhbGlzdFZpZXcgfSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2hvcHBpbmcgdmVuZG9yLXNob3BcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zaG9wcGluZ19faGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVsYXRlZFByb2R1Y3QgPyByZWxhdGVkUHJvZHVjdC5sZW5ndGggOiAwfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Ryb25nPlxyXG4gICAgICAgICAgICAgICAgICAgIFByb2R1Y3RzIGZvdW5kXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwcy1zaG9wcGluZ19fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwicHMtc2VsZWN0XCIgZGF0YS1wbGFjZWhvbGRlcj1cIlNvcnQgSXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Tb3J0IGJ5IGxhdGVzdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNvcnQgYnkgcG9wdWxhcml0eTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNvcnQgYnkgYXZlcmFnZSByYXRpbmc8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Tb3J0IGJ5IHByaWNlOiBsb3cgdG8gaGlnaDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uPlNvcnQgYnkgcHJpY2U6IGhpZ2ggdG8gbG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zaG9wcGluZ19fdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5WaWV3PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHMtdGFiLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpc3RWaWV3ID09PSB0cnVlID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VWaWV3TW9kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZ3JpZFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17bGlzdFZpZXcgIT09IHRydWUgPyAnYWN0aXZlJyA6ICcnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e2hhbmRsZUNoYW5nZVZpZXdNb2RlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1saXN0NFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zaG9wcGluZ19fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAge2xpc3RWaWV3ID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2hvcHBpbmctcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbGF0ZWRQcm9kdWN0ICYmIHJlbGF0ZWRQcm9kdWN0Lmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlbGF0ZWRQcm9kdWN0Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLWxnLTMgY29sLW1kLTQgY29sLXNtLTYgY29sLTYgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RPZmZsaW5lIHByb2R1Y3Q9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zaG9wcGluZy1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWxhdGVkUHJvZHVjdCAmJiByZWxhdGVkUHJvZHVjdC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlbGF0ZWRQcm9kdWN0Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RXaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlbmRvclByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9