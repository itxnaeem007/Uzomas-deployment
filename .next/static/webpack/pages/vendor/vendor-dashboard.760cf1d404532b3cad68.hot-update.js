webpackHotUpdate_N_E("pages/vendor/vendor-dashboard",{

/***/ "./components/elements/products/ProductOffline.jsx":
/*!*********************************************************!*\
  !*** ./components/elements/products/ProductOffline.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _detail_ProductDetailQuickView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../detail/ProductDetailQuickView */ "./components/elements/detail/ProductDetailQuickView.jsx");
/* harmony import */ var _Rating__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Rating */ "./components/elements/Rating.jsx");
/* harmony import */ var _utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../utilities/product-helper */ "./utilities/product-helper.js");
/* harmony import */ var _store_cart_action__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../store/cart/action */ "./store/cart/action.js");
/* harmony import */ var _store_compare_action__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../store/compare/action */ "./store/compare/action.js");
/* harmony import */ var _store_wishlist_action__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../store/wishlist/action */ "./store/wishlist/action.js");








var _jsxFileName = "F:\\UZomus\\uzomas_frontend\\components\\elements\\products\\ProductOffline.jsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }













var Product = /*#__PURE__*/function (_Component) {
  Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Product, _Component);

  var _super = _createSuper(Product);

  function Product(props) {
    var _this;

    Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Product);

    _this = _super.call(this, props);

    Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleAddItemToCart", function (e) {
      e.preventDefault();
      var product = _this.props.product;

      _this.props.dispatch(Object(_store_cart_action__WEBPACK_IMPORTED_MODULE_16__["addItem"])(product));
    });

    Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleAddItemToCompare", function (e) {
      e.preventDefault();
      var product = _this.props.product;

      _this.props.dispatch(Object(_store_compare_action__WEBPACK_IMPORTED_MODULE_17__["addItemToCompare"])(product));
    });

    Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleAddItemToWishlist", function (e) {
      e.preventDefault();
      var product = _this.props.product;

      _this.props.dispatch(Object(_store_wishlist_action__WEBPACK_IMPORTED_MODULE_18__["addItemToWishlist"])(product));
    });

    Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleShowQuickView", function (e) {
      e.preventDefault();

      _this.setState({
        isQuickView: true
      });
    });

    Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleHideQuickView", function (e) {
      e.preventDefault();

      _this.setState({
        isQuickView: false
      });
    });

    _this.state = {
      isQuickView: false
    };
    return _this;
  }

  Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Product, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          product = _this$props.product,
          currency = _this$props.currency;
      var productBadge = null;

      if (product.badge && product.badge !== null) {
        product.badge.map(function (badge) {
          if (badge.type === 'sale') {
            return productBadge = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ps-product__badge",
              children: badge.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 25
            }, _this2);
          } else if (badge.type === 'outStock') {
            return productBadge = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ps-product__badge out-stock",
              children: badge.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 25
            }, _this2);
          } else {
            return productBadge = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ps-product__badge hot",
              children: badge.value
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 25
            }, _this2);
          }
        });
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ps-product",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-product__thumbnail",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            href: "/product/[pid]",
            as: "/product/".concat(product.id),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lazyload__WEBPACK_IMPORTED_MODULE_10___default.a, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: product.thumbnail.url,
                  alt: "Luxury Ledger Market"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 21
          }, this), product.badge ? productBadge : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            className: "ps-product__actions",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                "data-toggle": "tooltip",
                "data-placement": "top",
                title: "Quick View",
                onClick: this.handleShowQuickView.bind(this),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "icon-eye"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                "data-toggle": "tooltip",
                "data-placement": "top",
                title: "Add to wishlist",
                onClick: this.handleAddItemToWishlist.bind(this),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "icon-heart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 117,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                "data-toggle": "tooltip",
                "data-placement": "top",
                title: "Compare",
                onClick: this.handleAddItemToCompare.bind(this),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
                  className: "icon-chart-bars"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 129,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-product__container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            href: "/shop",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "ps-product__vendor",
              children: "Young Shop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ps-product__content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
              href: "/product/[pid]",
              as: "/product/".concat(product.id),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "ps-product__title",
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 142,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ps-product__rating",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rating__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: product.ratingCount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 25
            }, this), product.is_sale === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price sale",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                className: "ml-2",
                children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.sale_price)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 29
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ps-product__content hover",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
              href: "/product/[pid]",
              as: "/product/".concat(product.id),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "ps-product__title",
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 165,
              columnNumber: 25
            }, this), product.is_sale === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price sale",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                className: "ml-2",
                children: [currency ? currency.symbol : '$', product.sale_price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 29
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 164,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 17
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, this);
    }
  }]);

  return Product;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return state.setting;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps)(Product));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9wcm9kdWN0cy9Qcm9kdWN0T2ZmbGluZS5qc3giXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdCIsImRpc3BhdGNoIiwiYWRkSXRlbSIsImFkZEl0ZW1Ub0NvbXBhcmUiLCJhZGRJdGVtVG9XaXNobGlzdCIsInNldFN0YXRlIiwiaXNRdWlja1ZpZXciLCJzdGF0ZSIsImN1cnJlbmN5IiwicHJvZHVjdEJhZGdlIiwiYmFkZ2UiLCJtYXAiLCJ0eXBlIiwidmFsdWUiLCJpZCIsInRodW1ibmFpbCIsInVybCIsImhhbmRsZVNob3dRdWlja1ZpZXciLCJiaW5kIiwiaGFuZGxlQWRkSXRlbVRvV2lzaGxpc3QiLCJoYW5kbGVBZGRJdGVtVG9Db21wYXJlIiwidGl0bGUiLCJyYXRpbmdDb3VudCIsImlzX3NhbGUiLCJzeW1ib2wiLCJmb3JtYXRDdXJyZW5jeSIsInByaWNlIiwic2FsZV9wcmljZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInNldHRpbmciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNFVBT0csVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxPQUFDLENBQUNDLGNBQUY7QUFEeUIsVUFFakJDLE9BRmlCLEdBRUwsTUFBS0gsS0FGQSxDQUVqQkcsT0FGaUI7O0FBR3pCLFlBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsbUVBQU8sQ0FBQ0YsT0FBRCxDQUEzQjtBQUNILEtBWGtCOztBQUFBLCtVQWFNLFVBQUNGLENBQUQsRUFBTztBQUM1QkEsT0FBQyxDQUFDQyxjQUFGO0FBRDRCLFVBRXBCQyxPQUZvQixHQUVSLE1BQUtILEtBRkcsQ0FFcEJHLE9BRm9COztBQUc1QixZQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JFLCtFQUFnQixDQUFDSCxPQUFELENBQXBDO0FBQ0gsS0FqQmtCOztBQUFBLGdWQW1CTyxVQUFDRixDQUFELEVBQU87QUFDN0JBLE9BQUMsQ0FBQ0MsY0FBRjtBQUQ2QixVQUVyQkMsT0FGcUIsR0FFVCxNQUFLSCxLQUZJLENBRXJCRyxPQUZxQjs7QUFHN0IsWUFBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CRyxpRkFBaUIsQ0FBQ0osT0FBRCxDQUFyQztBQUNILEtBdkJrQjs7QUFBQSw0VUF5QkcsVUFBQ0YsQ0FBRCxFQUFPO0FBQ3pCQSxPQUFDLENBQUNDLGNBQUY7O0FBQ0EsWUFBS00sUUFBTCxDQUFjO0FBQUVDLG1CQUFXLEVBQUU7QUFBZixPQUFkO0FBQ0gsS0E1QmtCOztBQUFBLDRVQThCRyxVQUFDUixDQUFELEVBQU87QUFDekJBLE9BQUMsQ0FBQ0MsY0FBRjs7QUFDQSxZQUFLTSxRQUFMLENBQWM7QUFBRUMsbUJBQVcsRUFBRTtBQUFmLE9BQWQ7QUFDSCxLQWpDa0I7O0FBRWYsVUFBS0MsS0FBTCxHQUFhO0FBQ1RELGlCQUFXLEVBQUU7QUFESixLQUFiO0FBRmU7QUFLbEI7Ozs7NkJBOEJRO0FBQUE7O0FBQUEsd0JBQ3lCLEtBQUtULEtBRDlCO0FBQUEsVUFDR0csT0FESCxlQUNHQSxPQURIO0FBQUEsVUFDWVEsUUFEWixlQUNZQSxRQURaO0FBRUwsVUFBSUMsWUFBWSxHQUFHLElBQW5COztBQUNBLFVBQUlULE9BQU8sQ0FBQ1UsS0FBUixJQUFpQlYsT0FBTyxDQUFDVSxLQUFSLEtBQWtCLElBQXZDLEVBQTZDO0FBQ3pDVixlQUFPLENBQUNVLEtBQVIsQ0FBY0MsR0FBZCxDQUFrQixVQUFDRCxLQUFELEVBQVc7QUFDekIsY0FBSUEsS0FBSyxDQUFDRSxJQUFOLEtBQWUsTUFBbkIsRUFBMkI7QUFDdkIsbUJBQVFILFlBQVksZ0JBQ2hCO0FBQUssdUJBQVMsRUFBQyxtQkFBZjtBQUFBLHdCQUFvQ0MsS0FBSyxDQUFDRztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKO0FBR0gsV0FKRCxNQUlPLElBQUlILEtBQUssQ0FBQ0UsSUFBTixLQUFlLFVBQW5CLEVBQStCO0FBQ2xDLG1CQUFRSCxZQUFZLGdCQUNoQjtBQUFLLHVCQUFTLEVBQUMsNkJBQWY7QUFBQSx3QkFDS0MsS0FBSyxDQUFDRztBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREo7QUFLSCxXQU5NLE1BTUE7QUFDSCxtQkFBUUosWUFBWSxnQkFDaEI7QUFBSyx1QkFBUyxFQUFDLHVCQUFmO0FBQUEsd0JBQ0tDLEtBQUssQ0FBQ0c7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKO0FBS0g7QUFDSixTQWxCRDtBQW1CSDs7QUFDRCwwQkFDSTtBQUFLLGlCQUFTLEVBQUMsWUFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGtDQUNJLHFFQUFDLGlEQUFEO0FBQU0sZ0JBQUksRUFBQyxnQkFBWDtBQUE0QixjQUFFLHFCQUFjYixPQUFPLENBQUNjLEVBQXRCLENBQTlCO0FBQUEsbUNBQ0k7QUFBQSxxQ0FDSSxxRUFBQyxzREFBRDtBQUFBLHVDQUNJO0FBQ0kscUJBQUcsRUFBRWQsT0FBTyxDQUFDZSxTQUFSLENBQWtCQyxHQUQzQjtBQUVJLHFCQUFHLEVBQUM7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBV0toQixPQUFPLENBQUNVLEtBQVIsR0FBZ0JELFlBQWhCLEdBQStCLEVBWHBDLGVBWUk7QUFBSSxxQkFBUyxFQUFDLHFCQUFkO0FBQUEsb0NBV0k7QUFBQSxxQ0FDSTtBQUNJLG9CQUFJLEVBQUMsR0FEVDtBQUVJLCtCQUFZLFNBRmhCO0FBR0ksa0NBQWUsS0FIbkI7QUFJSSxxQkFBSyxFQUFDLFlBSlY7QUFLSSx1QkFBTyxFQUFFLEtBQUtRLG1CQUFMLENBQXlCQyxJQUF6QixDQUE4QixJQUE5QixDQUxiO0FBQUEsdUNBTUk7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVhKLGVBcUJJO0FBQUEscUNBQ0k7QUFDSSxvQkFBSSxFQUFDLEdBRFQ7QUFFSSwrQkFBWSxTQUZoQjtBQUdJLGtDQUFlLEtBSG5CO0FBSUkscUJBQUssRUFBQyxpQkFKVjtBQUtJLHVCQUFPLEVBQUUsS0FBS0MsdUJBQUwsQ0FBNkJELElBQTdCLENBQ0wsSUFESyxDQUxiO0FBQUEsdUNBUUk7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXJCSixlQWlDSTtBQUFBLHFDQUNJO0FBQ0ksb0JBQUksRUFBQyxHQURUO0FBRUksK0JBQVksU0FGaEI7QUFHSSxrQ0FBZSxLQUhuQjtBQUlJLHFCQUFLLEVBQUMsU0FKVjtBQUtJLHVCQUFPLEVBQUUsS0FBS0Usc0JBQUwsQ0FBNEJGLElBQTVCLENBQ0wsSUFESyxDQUxiO0FBQUEsdUNBUUk7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQWpDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBNERJO0FBQUssbUJBQVMsRUFBQyx1QkFBZjtBQUFBLGtDQUNJLHFFQUFDLGlEQUFEO0FBQU0sZ0JBQUksRUFBQyxPQUFYO0FBQUEsbUNBQ0k7QUFBRyx1QkFBUyxFQUFDLG9CQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixlQUlJO0FBQUsscUJBQVMsRUFBQyxxQkFBZjtBQUFBLG9DQUNJLHFFQUFDLGlEQUFEO0FBQ0ksa0JBQUksRUFBQyxnQkFEVDtBQUVJLGdCQUFFLHFCQUFjbEIsT0FBTyxDQUFDYyxFQUF0QixDQUZOO0FBQUEscUNBR0k7QUFBRyx5QkFBUyxFQUFDLG1CQUFiO0FBQUEsMEJBQWtDZCxPQUFPLENBQUNxQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixlQU1JO0FBQUssdUJBQVMsRUFBQyxvQkFBZjtBQUFBLHNDQUNJLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSTtBQUFBLDBCQUFPckIsT0FBTyxDQUFDc0I7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSixFQVVLdEIsT0FBTyxDQUFDdUIsT0FBUixLQUFvQixJQUFwQixnQkFDRztBQUFHLHVCQUFTLEVBQUMsd0JBQWI7QUFBQSx5QkFDS2YsUUFBUSxHQUFHQSxRQUFRLENBQUNnQixNQUFaLEdBQXFCLEdBRGxDLEVBRUtDLGlGQUFjLENBQUN6QixPQUFPLENBQUMwQixLQUFULENBRm5CLGVBR0k7QUFBSyx5QkFBUyxFQUFDLE1BQWY7QUFBQSwyQkFDS2xCLFFBQVEsR0FBR0EsUUFBUSxDQUFDZ0IsTUFBWixHQUFxQixHQURsQyxFQUVLQyxpRkFBYyxDQUFDekIsT0FBTyxDQUFDMkIsVUFBVCxDQUZuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGdCQVVHO0FBQUcsdUJBQVMsRUFBQyxtQkFBYjtBQUFBLHlCQUNLbkIsUUFBUSxHQUFHQSxRQUFRLENBQUNnQixNQUFaLEdBQXFCLEdBRGxDLEVBRUtDLGlGQUFjLENBQUN6QixPQUFPLENBQUMwQixLQUFULENBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFwQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpKLGVBOEJJO0FBQUsscUJBQVMsRUFBQywyQkFBZjtBQUFBLG9DQUNJLHFFQUFDLGlEQUFEO0FBQ0ksa0JBQUksRUFBQyxnQkFEVDtBQUVJLGdCQUFFLHFCQUFjMUIsT0FBTyxDQUFDYyxFQUF0QixDQUZOO0FBQUEscUNBR0k7QUFBRyx5QkFBUyxFQUFDLG1CQUFiO0FBQUEsMEJBQWtDZCxPQUFPLENBQUNxQjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQU1LckIsT0FBTyxDQUFDdUIsT0FBUixLQUFvQixJQUFwQixnQkFDRztBQUFHLHVCQUFTLEVBQUMsd0JBQWI7QUFBQSx5QkFDS2YsUUFBUSxHQUFHQSxRQUFRLENBQUNnQixNQUFaLEdBQXFCLEdBRGxDLEVBRUtDLGlGQUFjLENBQUN6QixPQUFPLENBQUMwQixLQUFULENBRm5CLEVBRW9DLEdBRnBDLGVBR0k7QUFBSyx5QkFBUyxFQUFDLE1BQWY7QUFBQSwyQkFDS2xCLFFBQVEsR0FBR0EsUUFBUSxDQUFDZ0IsTUFBWixHQUFxQixHQURsQyxFQUVLeEIsT0FBTyxDQUFDMkIsVUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURILGdCQVVHO0FBQUcsdUJBQVMsRUFBQyxtQkFBYjtBQUFBLHlCQUNLbkIsUUFBUSxHQUFHQSxRQUFRLENBQUNnQixNQUFaLEdBQXFCLEdBRGxDLEVBRUtDLGlGQUFjLENBQUN6QixPQUFPLENBQUMwQixLQUFULENBRm5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFoQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBNkhIOzs7O0VBekxpQkUsK0M7O0FBMkx0QixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUN0QixLQUFELEVBQVc7QUFDL0IsU0FBT0EsS0FBSyxDQUFDdUIsT0FBYjtBQUNILENBRkQ7O0FBR2VDLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QmpDLE9BQXpCLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVuZG9yL3ZlbmRvci1kYXNoYm9hcmQuNzYwY2YxZDQwNDUzMmIzY2FkNjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBMYXp5TG9hZCBmcm9tICdyZWFjdC1sYXp5bG9hZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBQcm9kdWN0RGV0YWlsUXVpY2tWaWV3IGZyb20gJy4uL2RldGFpbC9Qcm9kdWN0RGV0YWlsUXVpY2tWaWV3JztcclxuaW1wb3J0IFJhdGluZyBmcm9tICcuLi9SYXRpbmcnO1xyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gJy4uLy4uLy4uL3V0aWxpdGllcy9wcm9kdWN0LWhlbHBlcic7XHJcbmltcG9ydCB7IGFkZEl0ZW0gfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9jYXJ0L2FjdGlvbic7XHJcbmltcG9ydCB7IGFkZEl0ZW1Ub0NvbXBhcmUgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9jb21wYXJlL2FjdGlvbic7XHJcbmltcG9ydCB7IGFkZEl0ZW1Ub1dpc2hsaXN0IH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvd2lzaGxpc3QvYWN0aW9uJztcclxuXHJcbmNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNRdWlja1ZpZXc6IGZhbHNlLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQWRkSXRlbVRvQ2FydCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZEl0ZW0ocHJvZHVjdCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVBZGRJdGVtVG9Db21wYXJlID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkSXRlbVRvQ29tcGFyZShwcm9kdWN0KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUFkZEl0ZW1Ub1dpc2hsaXN0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkSXRlbVRvV2lzaGxpc3QocHJvZHVjdCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVTaG93UXVpY2tWaWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUXVpY2tWaWV3OiB0cnVlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVIaWRlUXVpY2tWaWV3ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzUXVpY2tWaWV3OiBmYWxzZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCwgY3VycmVuY3kgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgbGV0IHByb2R1Y3RCYWRnZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHByb2R1Y3QuYmFkZ2UgJiYgcHJvZHVjdC5iYWRnZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwcm9kdWN0LmJhZGdlLm1hcCgoYmFkZ2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChiYWRnZS50eXBlID09PSAnc2FsZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByb2R1Y3RCYWRnZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZVwiPntiYWRnZS52YWx1ZX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFkZ2UudHlwZSA9PT0gJ291dFN0b2NrJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJvZHVjdEJhZGdlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlIG91dC1zdG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhZGdlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwcm9kdWN0QmFkZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2UgaG90XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFkZ2UudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3RodW1ibmFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvZHVjdC9bcGlkXVwiIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMdXh1cnkgTGVkZ2VyIE1hcmtldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYmFkZ2UgPyBwcm9kdWN0QmFkZ2UgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkIE1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkSXRlbVRvQ2FydC5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJhZzJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd1F1aWNrVmlldy5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gd2lzaGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkSXRlbVRvV2lzaGxpc3QuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24taGVhcnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcGFyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRJdGVtVG9Db21wYXJlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNoYXJ0LWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fdmVuZG9yXCI+WW91bmcgU2hvcDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1Y3QvW3BpZF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X190aXRsZVwiPntwcm9kdWN0LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3JhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb2R1Y3QucmF0aW5nQ291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuaXNfc2FsZSA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlIHNhbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWwgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnNhbGVfcHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fY29udGVudCBob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9wcm9kdWN0L1twaWRdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fdGl0bGVcIj57cHJvZHVjdC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuaXNfc2FsZSA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlIHNhbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfXsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/IGN1cnJlbmN5LnN5bWJvbCA6ICckJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3Quc2FsZV9wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8gY3VycmVuY3kuc3ltYm9sIDogJyQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyPXtudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXsxMDI0fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXt0aGlzLmhhbmRsZUhpZGVRdWlja1ZpZXd9XHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZT17dGhpcy5zdGF0ZS5pc1F1aWNrVmlld30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3REZXRhaWxRdWlja1ZpZXcgcHJvZHVjdD17cHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+ICovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnNldHRpbmc7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcm9kdWN0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==