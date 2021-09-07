webpackHotUpdate_N_E("pages/vendor/vendor-dashboard",{

/***/ "./components/partials/vendor/modules/VendorStatusNavbar.jsx":
/*!*******************************************************************!*\
  !*** ./components/partials/vendor/modules/VendorStatusNavbar.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _styles_vendorStatus_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/styles/vendorStatus.module.css */ "./styles/vendorStatus.module.css");
/* harmony import */ var _styles_vendorStatus_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_vendorStatus_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _VendorProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VendorProducts */ "./components/partials/vendor/modules/VendorProducts.jsx");
/* harmony import */ var _account_AddSellerPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../account/AddSellerPost */ "./components/partials/account/AddSellerPost.jsx");
/* harmony import */ var _OutOfStock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OutOfStock */ "./components/partials/vendor/modules/OutOfStock.jsx");
/* harmony import */ var _ProductStock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProductStock */ "./components/partials/vendor/modules/ProductStock.jsx");


var _jsxFileName = "F:\\UZomus\\uzomas_frontend\\components\\partials\\vendor\\modules\\VendorStatusNavbar.jsx",
    _this = undefined,
    _s = $RefreshSig$();



var TabPane = antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane;







var vendorStatusNavbar = function vendorStatusNavbar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      showModel = _useState[0],
      setShowModel = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "ps-block--vendor-dashboard",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "ps-block__header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: "ps-btn ps-btn--sm",
        onClick: function onClick() {
          return setShowModel(!showModel);
        },
        children: "Add Product"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 ",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
        title: "Post Seller Product",
        centered: true,
        footer: null,
        width: 1324,
        onCancel: function onCancel() {
          return setShowModel(false);
        },
        visible: showModel,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProductStock__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      className: "",
      defaultActiveKey: "1",
      centered: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabPane, {
        tab: "Active Products",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ps-section__wrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_VendorProducts__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, _this)
      }, "1", false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabPane, {
        tab: "Out of Stock",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ps-section__wrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_OutOfStock__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, _this)
      }, "2", false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TabPane, {
        tab: "Deleted",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ps-section__wrapper",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_OutOfStock__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, _this)
      }, "3", false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, _this);
};

_s(vendorStatusNavbar, "pWz51VDzf5ZYOrC+KL3WeAgb7z0=");

/* harmony default export */ __webpack_exports__["default"] = (vendorStatusNavbar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvbW9kdWxlcy9WZW5kb3JTdGF0dXNOYXZiYXIuanN4Il0sIm5hbWVzIjpbIlRhYlBhbmUiLCJUYWJzIiwidmVuZG9yU3RhdHVzTmF2YmFyIiwidXNlU3RhdGUiLCJzaG93TW9kZWwiLCJzZXRTaG93TW9kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0lBQ1FBLE8sR0FBWUMseUMsQ0FBWkQsTztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRSxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQU07QUFBQTs7QUFBQSxrQkFDS0Msc0RBQVEsQ0FBQyxLQUFELENBRGI7QUFBQSxNQUN0QkMsU0FEc0I7QUFBQSxNQUNYQyxZQURXOztBQUc3QixzQkFDSTtBQUFLLGFBQVMsRUFBQyw0QkFBZjtBQUFBLDRCQUNJO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUEsNkJBQ0k7QUFDSSxpQkFBUyxFQUFDLG1CQURkO0FBRUksZUFBTyxFQUFFO0FBQUEsaUJBQU1BLFlBQVksQ0FBQyxDQUFDRCxTQUFGLENBQWxCO0FBQUEsU0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQVFJO0FBQUssZUFBUyxFQUFDLDZDQUFmO0FBQUEsNkJBQ0kscUVBQUMsMENBQUQ7QUFDSSxhQUFLLEVBQUMscUJBRFY7QUFFSSxnQkFBUSxNQUZaO0FBR0ksY0FBTSxFQUFFLElBSFo7QUFJSSxhQUFLLEVBQUUsSUFKWDtBQUtJLGdCQUFRLEVBQUU7QUFBQSxpQkFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxTQUxkO0FBTUksZUFBTyxFQUFFRCxTQU5iO0FBQUEsZ0NBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQSixlQVFJLHFFQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJKLGVBc0JJLHFFQUFDLHlDQUFEO0FBQU0sZUFBUyxFQUFDLEVBQWhCO0FBQW1CLHNCQUFnQixFQUFDLEdBQXBDO0FBQXdDLGNBQVEsTUFBaEQ7QUFBQSw4QkFDSSxxRUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFDLGlCQUFiO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLFdBQWY7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUMscUJBQWY7QUFBQSxtQ0FDSSxxRUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixTQUFtQyxHQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFTSSxxRUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFDLGNBQWI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG1DQUNJLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQWdDLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFUSixlQWdCSSxxRUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFDLFNBQWI7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG1DQUNJLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFNBQTJCLEdBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBaURILENBcEREOztHQUFNRixrQjs7QUFzRFNBLGlGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci92ZW5kb3ItZGFzaGJvYXJkLjIyZWJiY2JjNjk5YTM2MmQ3MWJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRhYnMgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBUYWJQYW5lIH0gPSBUYWJzO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL3ZlbmRvclN0YXR1cy5tb2R1bGUuY3NzJztcclxuaW1wb3J0IFZlbmRvclByb2R1Y3RzIGZyb20gJy4vVmVuZG9yUHJvZHVjdHMnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgQWRkU2VsbGVyUG9zdCBmcm9tICcuLi8uLi9hY2NvdW50L0FkZFNlbGxlclBvc3QnO1xyXG5pbXBvcnQgT3V0T2ZTdG9jayBmcm9tICcuL091dE9mU3RvY2snO1xyXG5pbXBvcnQgUHJvZHVjdFN0b2NrIGZyb20gJy4vUHJvZHVjdFN0b2NrJztcclxuXHJcbmNvbnN0IHZlbmRvclN0YXR1c05hdmJhciA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtzaG93TW9kZWwsIHNldFNob3dNb2RlbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLWJsb2NrLS12ZW5kb3ItZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtYmxvY2tfX2hlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBzLWJ0biBwcy1idG4tLXNtXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kZWwoIXNob3dNb2RlbCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIEFkZCBQcm9kdWN0XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTMgY29sLW1kLTQgY29sLXNtLTYgY29sLTEyIFwiPlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQb3N0IFNlbGxlciBQcm9kdWN0XCJcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTMyNH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gc2V0U2hvd01vZGVsKGZhbHNlKX1cclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtzaG93TW9kZWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz48L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0U3RvY2sgLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIFNlbGxlciBQcm9kdWN0cyBNYW5hZ2VtZW50IE5hdkJhciAqL31cclxuICAgICAgICAgICAgPFRhYnMgY2xhc3NOYW1lPVwiXCIgZGVmYXVsdEFjdGl2ZUtleT1cIjFcIiBjZW50ZXJlZD5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIkFjdGl2ZSBQcm9kdWN0c1wiIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXNlY3Rpb25fX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxWZW5kb3JQcm9kdWN0cyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCJPdXQgb2YgU3RvY2tcIiBrZXk9XCIyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zZWN0aW9uX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0T2ZTdG9jayAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIkRlbGV0ZWRcIiBrZXk9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1zZWN0aW9uX193cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8T3V0T2ZTdG9jayAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgPC9UYWJzPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHZlbmRvclN0YXR1c05hdmJhcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==