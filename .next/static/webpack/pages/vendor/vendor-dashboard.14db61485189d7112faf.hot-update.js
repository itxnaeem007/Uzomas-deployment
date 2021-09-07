webpackHotUpdate_N_E("pages/vendor/vendor-dashboard",{

/***/ "./components/partials/vendor/SwitchVendor.jsx":
/*!*****************************************************!*\
  !*** ./components/partials/vendor/SwitchVendor.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _store_vendor_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ~/store/vendor/action */ "./store/vendor/action.js");




var _jsxFileName = "F:\\UZomus\\uzomas_frontend\\components\\partials\\vendor\\SwitchVendor.jsx",
    _this = undefined,
    _s = $RefreshSig$();








var SwitchVendor = function SwitchVendor() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      vendor = _useState[0],
      setVendor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var result = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.vendor;
  });
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"])();
  console.log('Vendor', result);
  var switchVendor = vendor === false ? {
    path: '/vendor/store-list',
    change: 'Switch to Buyer',
    cond: true
  } : {
    path: '/vendor/become-a-vendor',
    change: 'Switch to Seller',
    cond: false
  };

  var handleChangeVendor = /*#__PURE__*/function () {
    var _ref = Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(e, switchVendor) {
      return F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              e.preventDefault();
              vendor === false ? setVendor(true) : setVendor(false);
              _context.next = 5;
              return dispatch(Object(_store_vendor_action__WEBPACK_IMPORTED_MODULE_8__["changeVendor"])(switchVendor));

            case 5:
              setLoading(false);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleChangeVendor(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      disabled: loading,
      onClick: function onClick(e) {
        return handleChangeVendor(e, switchVendor);
      },
      children: vendor === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "".concat(result.Vendor.path),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: result.Vendor.change
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: "".concat(result.Vendor.path),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: result.Vendor.change
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 25
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, _this);
};

_s(SwitchVendor, "hSCUuNdkP1GQIst0jNsYT1lBu9w=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"], react_router_dom__WEBPACK_IMPORTED_MODULE_5__["useHistory"]];
});

_c = SwitchVendor;
/* harmony default export */ __webpack_exports__["default"] = (SwitchVendor);

var _c;

$RefreshReg$(_c, "SwitchVendor");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvU3dpdGNoVmVuZG9yLmpzeCJdLCJuYW1lcyI6WyJTd2l0Y2hWZW5kb3IiLCJ1c2VTdGF0ZSIsInZlbmRvciIsInNldFZlbmRvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJlc3VsdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJzd2l0Y2hWZW5kb3IiLCJwYXRoIiwiY2hhbmdlIiwiY29uZCIsImhhbmRsZUNoYW5nZVZlbmRvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZVZlbmRvciIsIlZlbmRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUEsTUFFaEJHLE9BRmdCO0FBQUEsTUFFUEMsVUFGTzs7QUFHdkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDUixNQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNUyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JOLE1BQXRCO0FBRUEsTUFBTU8sWUFBWSxHQUNkYixNQUFNLEtBQUssS0FBWCxHQUNNO0FBQ0ljLFFBQUksRUFBRSxvQkFEVjtBQUVJQyxVQUFNLEVBQUUsaUJBRlo7QUFHSUMsUUFBSSxFQUFFO0FBSFYsR0FETixHQU1NO0FBQ0lGLFFBQUksRUFBRSx5QkFEVjtBQUVJQyxVQUFNLEVBQUUsa0JBRlo7QUFHSUMsUUFBSSxFQUFFO0FBSFYsR0FQVjs7QUFhQSxNQUFNQyxrQkFBa0I7QUFBQSw4U0FBRyxpQkFBT0MsQ0FBUCxFQUFVTCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJWLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FlLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsb0JBQU0sS0FBSyxLQUFYLEdBQW1CQyxTQUFTLENBQUMsSUFBRCxDQUE1QixHQUFxQ0EsU0FBUyxDQUFDLEtBQUQsQ0FBOUM7QUFIdUI7QUFBQSxxQkFJakJHLFFBQVEsQ0FBQ2dCLHlFQUFZLENBQUNQLFlBQUQsQ0FBYixDQUpTOztBQUFBO0FBS3ZCVix3QkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFMdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbEJjLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFRQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDJDQUFEO0FBQ0ksY0FBUSxFQUFFZixPQURkO0FBRUksYUFBTyxFQUFFLGlCQUFDZ0IsQ0FBRDtBQUFBLGVBQU9ELGtCQUFrQixDQUFDQyxDQUFELEVBQUlMLFlBQUosQ0FBekI7QUFBQSxPQUZiO0FBQUEsZ0JBR0tiLE1BQU0sS0FBSyxJQUFYLGdCQUNHLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxZQUFLTSxNQUFNLENBQUNlLE1BQVAsQ0FBY1AsSUFBbkIsQ0FBVjtBQUFBLCtCQUNJO0FBQUEsb0JBQUlSLE1BQU0sQ0FBQ2UsTUFBUCxDQUFjTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILGdCQUtHLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxZQUFLVCxNQUFNLENBQUNlLE1BQVAsQ0FBY1AsSUFBbkIsQ0FBVjtBQUFBLCtCQUNJO0FBQUEsb0JBQUlSLE1BQU0sQ0FBQ2UsTUFBUCxDQUFjTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQkgsQ0EvQ0Q7O0dBQU1qQixZO1VBR2VPLHVELEVBQ0ZFLHVELEVBQ0NHLDJEOzs7S0FMZFosWTtBQWlEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVuZG9yL3ZlbmRvci1kYXNoYm9hcmQuMTRkYjYxNDg1MTg5ZDcxMTJmYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBjaGFuZ2VWZW5kb3IgfSBmcm9tICd+L3N0b3JlL3ZlbmRvci9hY3Rpb24nO1xyXG5cclxuY29uc3QgU3dpdGNoVmVuZG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW3ZlbmRvciwgc2V0VmVuZG9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudmVuZG9yKTtcclxuICAgIGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUubG9nKCdWZW5kb3InLCByZXN1bHQpO1xyXG5cclxuICAgIGNvbnN0IHN3aXRjaFZlbmRvciA9XHJcbiAgICAgICAgdmVuZG9yID09PSBmYWxzZVxyXG4gICAgICAgICAgICA/IHtcclxuICAgICAgICAgICAgICAgICAgcGF0aDogJy92ZW5kb3Ivc3RvcmUtbGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgIGNoYW5nZTogJ1N3aXRjaCB0byBCdXllcicsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgcGF0aDogJy92ZW5kb3IvYmVjb21lLWEtdmVuZG9yJyxcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnU3dpdGNoIHRvIFNlbGxlcicsXHJcbiAgICAgICAgICAgICAgICAgIGNvbmQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlVmVuZG9yID0gYXN5bmMgKGUsIHN3aXRjaFZlbmRvcikgPT4ge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZlbmRvciA9PT0gZmFsc2UgPyBzZXRWZW5kb3IodHJ1ZSkgOiBzZXRWZW5kb3IoZmFsc2UpO1xyXG4gICAgICAgIGF3YWl0IGRpc3BhdGNoKGNoYW5nZVZlbmRvcihzd2l0Y2hWZW5kb3IpKTtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDaGFuZ2VWZW5kb3IoZSwgc3dpdGNoVmVuZG9yKX0+XHJcbiAgICAgICAgICAgICAgICB7dmVuZG9yID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Jlc3VsdC5WZW5kb3IucGF0aH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Jlc3VsdC5WZW5kb3IuY2hhbmdlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake3Jlc3VsdC5WZW5kb3IucGF0aH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Jlc3VsdC5WZW5kb3IuY2hhbmdlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2l0Y2hWZW5kb3I7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=