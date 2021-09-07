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
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a // href="/shop"
          , {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "ps-product__vendor",
              children: "Young Shop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
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
                lineNumber: 145,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ps-product__rating",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rating__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: product.ratingCount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 25
            }, this), product.is_sale === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price sale",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                className: "ml-2",
                children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.sale_price)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 29
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 161,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ps-product__content hover",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a // href="/product/[pid]"
            // as={`/product/${product.id}`}
            , {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "ps-product__title",
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 25
            }, this), product.is_sale === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price sale",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                className: "ml-2",
                children: [currency ? currency.symbol : '$', product.sale_price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 29
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9wcm9kdWN0cy9Qcm9kdWN0T2ZmbGluZS5qc3giXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdCIsImRpc3BhdGNoIiwiYWRkSXRlbSIsImFkZEl0ZW1Ub0NvbXBhcmUiLCJhZGRJdGVtVG9XaXNobGlzdCIsInNldFN0YXRlIiwiaXNRdWlja1ZpZXciLCJzdGF0ZSIsImN1cnJlbmN5IiwicHJvZHVjdEJhZGdlIiwiYmFkZ2UiLCJtYXAiLCJ0eXBlIiwidmFsdWUiLCJpZCIsInRodW1ibmFpbCIsInVybCIsImhhbmRsZVNob3dRdWlja1ZpZXciLCJiaW5kIiwiaGFuZGxlQWRkSXRlbVRvV2lzaGxpc3QiLCJoYW5kbGVBZGRJdGVtVG9Db21wYXJlIiwidGl0bGUiLCJyYXRpbmdDb3VudCIsImlzX3NhbGUiLCJzeW1ib2wiLCJmb3JtYXRDdXJyZW5jeSIsInByaWNlIiwic2FsZV9wcmljZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInNldHRpbmciLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxPOzs7OztBQUNGLG1CQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsOEJBQU1BLEtBQU47O0FBRGUsNFVBT0csVUFBQ0MsQ0FBRCxFQUFPO0FBQ3pCQSxPQUFDLENBQUNDLGNBQUY7QUFEeUIsVUFFakJDLE9BRmlCLEdBRUwsTUFBS0gsS0FGQSxDQUVqQkcsT0FGaUI7O0FBR3pCLFlBQUtILEtBQUwsQ0FBV0ksUUFBWCxDQUFvQkMsbUVBQU8sQ0FBQ0YsT0FBRCxDQUEzQjtBQUNILEtBWGtCOztBQUFBLCtVQWFNLFVBQUNGLENB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QWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3RCLEtBQUQsRUFBVztBQUMvQixTQUFPQSxLQUFLLENBQUN1QixPQUFiO0FBQ0gsQ0FGRDs7QUFHZUMsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCakMsT0FBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZW5kb3IvdmVuZG9yLWRhc2hib2FyZC44NTMxMjIyNzY5ODFmYjM5OTRkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxRdWlja1ZpZXcgZnJvbSAnLi4vZGV0YWlsL1Byb2R1Y3REZXRhaWxRdWlja1ZpZXcnO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJy4uL1JhdGluZyc7XHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL3Byb2R1Y3QtaGVscGVyJztcclxuaW1wb3J0IHsgYWRkSXRlbSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2NhcnQvYWN0aW9uJztcclxuaW1wb3J0IHsgYWRkSXRlbVRvQ29tcGFyZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2NvbXBhcmUvYWN0aW9uJztcclxuaW1wb3J0IHsgYWRkSXRlbVRvV2lzaGxpc3QgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS93aXNobGlzdC9hY3Rpb24nO1xyXG5cclxuY2xhc3MgUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1F1aWNrVmlldzogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBZGRJdGVtVG9DYXJ0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkSXRlbShwcm9kdWN0KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUFkZEl0ZW1Ub0NvbXBhcmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRJdGVtVG9Db21wYXJlKHByb2R1Y3QpKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQWRkSXRlbVRvV2lzaGxpc3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRJdGVtVG9XaXNobGlzdChwcm9kdWN0KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNob3dRdWlja1ZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNRdWlja1ZpZXc6IHRydWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUhpZGVRdWlja1ZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNRdWlja1ZpZXc6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0LCBjdXJyZW5jeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgcHJvZHVjdEJhZGdlID0gbnVsbDtcclxuICAgICAgICBpZiAocHJvZHVjdC5iYWRnZSAmJiBwcm9kdWN0LmJhZGdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QuYmFkZ2UubWFwKChiYWRnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09ICdzYWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJvZHVjdEJhZGdlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlXCI+e2JhZGdlLnZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYWRnZS50eXBlID09PSAnb3V0U3RvY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwcm9kdWN0QmFkZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2Ugb3V0LXN0b2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFkZ2UudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByb2R1Y3RCYWRnZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZSBob3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYWRnZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9kdWN0L1twaWRdXCIgYXM9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhenlMb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9kdWN0LnRodW1ibmFpbC51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkx1eHVyeSBMZWRnZXIgTWFya2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MYXp5TG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5iYWRnZSA/IHByb2R1Y3RCYWRnZSA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19hY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlJlYWQgTW9yZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRJdGVtVG9DYXJ0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tYmFnMlwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUXVpY2sgVmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVTaG93UXVpY2tWaWV3LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tZXllXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkFkZCB0byB3aXNobGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRJdGVtVG9XaXNobGlzdC5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1oZWFydFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDb21wYXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZEl0ZW1Ub0NvbXBhcmUuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24tY2hhcnQtYmFyc1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGhyZWY9XCIvc2hvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fdmVuZG9yXCI+WW91bmcgU2hvcDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3Byb2R1Y3QvW3BpZF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e2AvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X190aXRsZVwiPntwcm9kdWN0LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3JhdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhdGluZyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3Byb2R1Y3QucmF0aW5nQ291bnR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuaXNfc2FsZSA9PT0gdHJ1ZSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlIHNhbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWwgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnNhbGVfcHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fY29udGVudCBob3ZlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHJlZj1cIi9wcm9kdWN0L1twaWRdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzPXtgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X190aXRsZVwiPntwcm9kdWN0LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pc19zYWxlID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2Ugc2FsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/IGN1cnJlbmN5LnN5bWJvbCA6ICckJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8gY3VycmVuY3kuc3ltYm9sIDogJyQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5zYWxlX3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICBmb290ZXI9e251bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwMjR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9e3RoaXMuaGFuZGxlSGlkZVF1aWNrVmlld31cclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXt0aGlzLnN0YXRlLmlzUXVpY2tWaWV3fT5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdERldGFpbFF1aWNrVmlldyBwcm9kdWN0PXtwcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Nb2RhbD4gKi99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUuc2V0dGluZztcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2R1Y3QpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9