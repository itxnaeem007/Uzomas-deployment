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
                product: product
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvbW9kdWxlcy9WZW5kb3JQcm9kdWN0cy5qc3giXSwibmFtZXMiOlsiVmVuZG9yUHJvZHVjdHMiLCJ1c2VTdGF0ZSIsImxpc3RWaWV3Iiwic2V0TGlzdFZpZXciLCJjb25zb2xlIiwibG9nIiwicmVsYXRlZFByb2R1Y3QiLCJoYW5kbGVDaGFuZ2VWaWV3TW9kZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJtYXAiLCJwcm9kdWN0IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxJQUFELENBRGY7QUFBQSxNQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxXQURROztBQUd6QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JDLDBFQUEvQjs7QUFDQSxNQUFNQyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNDLEtBQUQsRUFBVztBQUNwQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0FOLGVBQVcsQ0FBQztBQUFFRCxjQUFRLEVBQUUsQ0FBQ0E7QUFBYixLQUFELENBQVg7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFDLHlCQUFmO0FBQUEsNEJBQ0k7QUFBSyxlQUFTLEVBQUMscUJBQWY7QUFBQSw2QkFDSTtBQUFBLGdDQUNJO0FBQUEsb0JBQ0tJLDBFQUFjLEdBQUdBLDBFQUFjLENBQUNJLE1BQWxCLEdBQTJCO0FBRDlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBaUNJO0FBQUssZUFBUyxFQUFDLHNCQUFmO0FBQUEsZ0JBQ0tSLFFBQVEsS0FBSyxJQUFiLGdCQUNHO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyxLQUFmO0FBQUEsb0JBQ0tJLDBFQUFjLElBQUlBLDBFQUFjLENBQUNJLE1BQWYsR0FBd0IsQ0FBMUMsR0FDS0osMEVBQWMsQ0FBQ0ssR0FBZixDQUFtQixVQUFDQyxPQUFEO0FBQUEsZ0NBQ2Y7QUFDSSx1QkFBUyxFQUFDLG1DQURkO0FBQUEscUNBR0kscUVBQUMseUVBQUQ7QUFBZ0IsdUJBQU8sRUFBRUE7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKLGVBRVNBLE9BQU8sQ0FBQ0MsRUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEZTtBQUFBLFdBQW5CLENBREwsR0FRSztBQVRWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsZ0JBZUc7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsa0JBQ0tQLDBFQUFjLElBQUlBLDBFQUFjLENBQUNJLE1BQWYsR0FBd0IsQ0FBMUMsR0FDS0osMEVBQWMsQ0FBQ0ssR0FBZixDQUFtQixVQUFDQyxPQUFEO0FBQUEsOEJBQ2YscUVBQUMsc0VBQUQ7QUFDSSxtQkFBTyxFQUFFQTtBQURiLGFBRVNBLE9BQU8sQ0FBQ0MsRUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEZTtBQUFBLFNBQW5CLENBREwsR0FPSztBQVJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFoQlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWdFSCxDQXpFRDs7R0FBTWIsYzs7S0FBQUEsYztBQTJFU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVuZG9yL3ZlbmRvci1kYXNoYm9hcmQuMDIwZTlkZGEyMGRhNGMzMzdkZTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgcmVsYXRlZFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi8uLi9wdWJsaWMvc3RhdGljL2RhdGEvcHJvZHVjdCc7XHJcbmltcG9ydCBQcm9kdWN0T2ZmbGluZSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9wcm9kdWN0cy9Qcm9kdWN0T2ZmbGluZSc7XHJcbmltcG9ydCBQcm9kdWN0V2lkZSBmcm9tICcuLi8uLi8uLi9lbGVtZW50cy9wcm9kdWN0cy9Qcm9kdWN0V2lkZSc7XHJcblxyXG5cclxuY29uc3QgVmVuZG9yUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbbGlzdFZpZXcsIHNldExpc3RWaWV3XSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCdSZWxhdGVkIFByb2R1Y3QnLCByZWxhdGVkUHJvZHVjdCk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VWaWV3TW9kZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgc2V0TGlzdFZpZXcoeyBsaXN0VmlldzogIWxpc3RWaWV3IH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXNob3BwaW5nIHZlbmRvci1zaG9wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2hvcHBpbmdfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3JlbGF0ZWRQcm9kdWN0ID8gcmVsYXRlZFByb2R1Y3QubGVuZ3RoIDogMH1cclxuICAgICAgICAgICAgICAgICAgICA8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0cyBmb3VuZFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicHMtc2hvcHBpbmdfX2FjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cInBzLXNlbGVjdFwiIGRhdGEtcGxhY2Vob2xkZXI9XCJTb3J0IEl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U29ydCBieSBsYXRlc3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Tb3J0IGJ5IHBvcHVsYXJpdHk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Tb3J0IGJ5IGF2ZXJhZ2UgcmF0aW5nPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+U29ydCBieSBwcmljZTogbG93IHRvIGhpZ2g8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5Tb3J0IGJ5IHByaWNlOiBoaWdoIHRvIGxvdzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2hvcHBpbmdfX3ZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+VmlldzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBzLXRhYi1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtsaXN0VmlldyA9PT0gdHJ1ZSA/ICdhY3RpdmUnIDogJyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17aGFuZGxlQ2hhbmdlVmlld01vZGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWdyaWRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2xpc3RWaWV3ICE9PSB0cnVlID8gJ2FjdGl2ZScgOiAnJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtoYW5kbGVDaGFuZ2VWaWV3TW9kZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tbGlzdDRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtc2hvcHBpbmdfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIHtsaXN0VmlldyA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXNob3BwaW5nLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZWxhdGVkUHJvZHVjdCAmJiByZWxhdGVkUHJvZHVjdC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZWxhdGVkUHJvZHVjdC5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1sZy0zIGNvbC1tZC00IGNvbC1zbS02IGNvbC02IFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvZHVjdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0T2ZmbGluZSBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zaG9wcGluZy1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtyZWxhdGVkUHJvZHVjdCAmJiByZWxhdGVkUHJvZHVjdC5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlbGF0ZWRQcm9kdWN0Lm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3RXaWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdD17cHJvZHVjdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2R1Y3QuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFZlbmRvclByb2R1Y3RzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9