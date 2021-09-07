webpackHotUpdate_N_E("pages/account/invoices",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvU3dpdGNoVmVuZG9yLmpzeCJdLCJuYW1lcyI6WyJTd2l0Y2hWZW5kb3IiLCJ1c2VTdGF0ZSIsInZlbmRvciIsInNldFZlbmRvciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJlc3VsdCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImNvbnNvbGUiLCJsb2ciLCJzd2l0Y2hWZW5kb3IiLCJwYXRoIiwiY2hhbmdlIiwiY29uZCIsImhhbmRsZUNoYW5nZVZlbmRvciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNoYW5nZVZlbmRvciIsIlZlbmRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBOztBQUFBLGtCQUNLQyxzREFBUSxDQUFDLEtBQUQsQ0FEYjtBQUFBLE1BQ2hCQyxNQURnQjtBQUFBLE1BQ1JDLFNBRFE7O0FBQUEsbUJBRU9GLHNEQUFRLENBQUMsS0FBRCxDQUZmO0FBQUEsTUFFaEJHLE9BRmdCO0FBQUEsTUFFUEMsVUFGTzs7QUFHdkIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDUixNQUFqQjtBQUFBLEdBQUQsQ0FBMUI7QUFDQSxNQUFNUyxPQUFPLEdBQUdDLG1FQUFVLEVBQTFCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JOLE1BQXRCO0FBRUEsTUFBTU8sWUFBWSxHQUNkYixNQUFNLEtBQUssS0FBWCxHQUNNO0FBQ0ljLFFBQUksRUFBRSxvQkFEVjtBQUVJQyxVQUFNLEVBQUUsaUJBRlo7QUFHSUMsUUFBSSxFQUFFO0FBSFYsR0FETixHQU1NO0FBQ0lGLFFBQUksRUFBRSx5QkFEVjtBQUVJQyxVQUFNLEVBQUUsa0JBRlo7QUFHSUMsUUFBSSxFQUFFO0FBSFYsR0FQVjs7QUFhQSxNQUFNQyxrQkFBa0I7QUFBQSw4U0FBRyxpQkFBT0MsQ0FBUCxFQUFVTCxZQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDdkJWLHdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FlLGVBQUMsQ0FBQ0MsY0FBRjtBQUNBbkIsb0JBQU0sS0FBSyxLQUFYLEdBQW1CQyxTQUFTLENBQUMsSUFBRCxDQUE1QixHQUFxQ0EsU0FBUyxDQUFDLEtBQUQsQ0FBOUM7QUFIdUI7QUFBQSxxQkFJakJHLFFBQVEsQ0FBQ2dCLHlFQUFZLENBQUNQLFlBQUQsQ0FBYixDQUpTOztBQUFBO0FBS3ZCVix3QkFBVSxDQUFDLEtBQUQsQ0FBVjs7QUFMdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBbEJjLGtCQUFrQjtBQUFBO0FBQUE7QUFBQSxLQUF4Qjs7QUFRQSxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLDJDQUFEO0FBQ0ksY0FBUSxFQUFFZixPQURkO0FBRUksYUFBTyxFQUFFLGlCQUFDZ0IsQ0FBRDtBQUFBLGVBQU9ELGtCQUFrQixDQUFDQyxDQUFELEVBQUlMLFlBQUosQ0FBekI7QUFBQSxPQUZiO0FBQUEsZ0JBR0tiLE1BQU0sS0FBSyxJQUFYLGdCQUNHLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxZQUFLTSxNQUFNLENBQUNlLE1BQVAsQ0FBY1AsSUFBbkIsQ0FBVjtBQUFBLCtCQUNJO0FBQUEsb0JBQUlSLE1BQU0sQ0FBQ2UsTUFBUCxDQUFjTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILGdCQUtHLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxZQUFLVCxNQUFNLENBQUNlLE1BQVAsQ0FBY1AsSUFBbkIsQ0FBVjtBQUFBLCtCQUNJO0FBQUEsb0JBQUlSLE1BQU0sQ0FBQ2UsTUFBUCxDQUFjTjtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQkgsQ0EvQ0Q7O0dBQU1qQixZO1VBR2VPLHVELEVBQ0ZFLHVELEVBQ0NHLDJEOzs7S0FMZFosWTtBQWlEU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWNjb3VudC9pbnZvaWNlcy4xNGRiNjE0ODUxODlkNzExMmZhZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGNoYW5nZVZlbmRvciB9IGZyb20gJ34vc3RvcmUvdmVuZG9yL2FjdGlvbic7XHJcblxyXG5jb25zdCBTd2l0Y2hWZW5kb3IgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdmVuZG9yLCBzZXRWZW5kb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS52ZW5kb3IpO1xyXG4gICAgY29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coJ1ZlbmRvcicsIHJlc3VsdCk7XHJcblxyXG4gICAgY29uc3Qgc3dpdGNoVmVuZG9yID1cclxuICAgICAgICB2ZW5kb3IgPT09IGZhbHNlXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICBwYXRoOiAnL3ZlbmRvci9zdG9yZS1saXN0JyxcclxuICAgICAgICAgICAgICAgICAgY2hhbmdlOiAnU3dpdGNoIHRvIEJ1eWVyJyxcclxuICAgICAgICAgICAgICAgICAgY29uZDogdHJ1ZSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICBwYXRoOiAnL3ZlbmRvci9iZWNvbWUtYS12ZW5kb3InLFxyXG4gICAgICAgICAgICAgICAgICBjaGFuZ2U6ICdTd2l0Y2ggdG8gU2VsbGVyJyxcclxuICAgICAgICAgICAgICAgICAgY29uZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VWZW5kb3IgPSBhc3luYyAoZSwgc3dpdGNoVmVuZG9yKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmVuZG9yID09PSBmYWxzZSA/IHNldFZlbmRvcih0cnVlKSA6IHNldFZlbmRvcihmYWxzZSk7XHJcbiAgICAgICAgYXdhaXQgZGlzcGF0Y2goY2hhbmdlVmVuZG9yKHN3aXRjaFZlbmRvcikpO1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNoYW5nZVZlbmRvcihlLCBzd2l0Y2hWZW5kb3IpfT5cclxuICAgICAgICAgICAgICAgIHt2ZW5kb3IgPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cmVzdWx0LlZlbmRvci5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57cmVzdWx0LlZlbmRvci5jaGFuZ2V9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7cmVzdWx0LlZlbmRvci5wYXRofWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT57cmVzdWx0LlZlbmRvci5jaGFuZ2V9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3aXRjaFZlbmRvcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==