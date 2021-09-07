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
            href: "#",
            as: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_lazyload__WEBPACK_IMPORTED_MODULE_10___default.a, {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: product.thumbnail.url,
                  alt: "Luxury Ledger Market"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
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
                  lineNumber: 108,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
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
                  lineNumber: 120,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
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
                  lineNumber: 132,
                  columnNumber: 33
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 17
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ps-product__container",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
            href: "#",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "ps-product__vendor",
              children: "Young Shop"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 140,
              columnNumber: 25
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ps-product__content",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a // href ==> "/product/[pid]"
            , {
              href: "#" // as ==> `/product/${product.id}`
              ,
              as: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "ps-product__title",
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "ps-product__rating",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Rating__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 151,
                columnNumber: 29
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: product.ratingCount
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 152,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 25
            }, this), product.is_sale === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price sale",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                className: "ml-2",
                children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.sale_price)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 29
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 21
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "ps-product__content hover",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
              href: "#" /// "product/[pid]" 
              // as ==> `/product/${product.id}`
              ,
              as: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "ps-product__title",
                children: product.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 29
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 25
            }, this), product.is_sale === true ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price sale",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("del", {
                className: "ml-2",
                children: [currency ? currency.symbol : '$', product.sale_price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 29
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "ps-product__price",
              children: [currency ? currency.symbol : '$', Object(_utilities_product_helper__WEBPACK_IMPORTED_MODULE_15__["formatCurrency"])(product.price)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 21
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9wcm9kdWN0cy9Qcm9kdWN0T2ZmbGluZS5qc3giXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdCIsImRpc3BhdGNoIiwiYWRkSXRlbSIsImFkZEl0ZW1Ub0NvbXBhcmUiLCJhZGRJdGVtVG9XaXNobGlzdCIsInNldFN0YXRlIiwiaXNRdWlja1ZpZXciLCJzdGF0ZSIsImN1cnJlbmN5IiwicHJvZHVjdEJhZGdlIiwiYmFkZ2UiLCJtYXAiLCJ0eXBlIiwidmFsdWUiLCJ0aHVtYm5haWwiLCJ1cmwiLCJoYW5kbGVTaG93UXVpY2tWaWV3IiwiYmluZCIsImhhbmRsZUFkZEl0ZW1Ub1dpc2hsaXN0IiwiaGFuZGxlQWRkSXRlbVRvQ29tcGFyZSIsInRpdGxlIiwicmF0aW5nQ291bnQiLCJpc19zYWxlIiwic3ltYm9sIiwiZm9ybWF0Q3VycmVuY3kiLCJwcmljZSIsInNhbGVfcHJpY2UiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJzZXR0aW5nIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsTzs7Ozs7QUFDRixtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDhCQUFNQSxLQUFOOztBQURlLDRVQU9HLFVBQUNDLENBQUQsRUFBTztBQUN6QkEsT0FBQyxDQUFDQyxjQUFGO0FBRHlCLFVBRWpCQyxPQUZpQixHQUVMLE1BQUtILEtBRkEsQ0FFakJHLE9BRmlCOztBQUd6QixZQUFLSCxLQUFMLENBQVdJLFFBQVgsQ0FBb0JDLG1FQUFPLENBQUNGLE9BQUQsQ0FBM0I7QUFDSCxLQVhrQjs7QUFBQSwrVUFhTSxVQUFDRixDQUFELEVB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O0FBQy9CLFNBQU9BLEtBQUssQ0FBQ3NCLE9BQWI7QUFDSCxDQUZEOztBQUdlQywwSEFBTyxDQUFDRixlQUFELENBQVAsQ0FBeUJoQyxPQUF6QixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci92ZW5kb3ItZGFzaGJvYXJkLmYxOGQ3ZjQ0ZWQ1MTEzMDU2MDU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUHJvZHVjdERldGFpbFF1aWNrVmlldyBmcm9tICcuLi9kZXRhaWwvUHJvZHVjdERldGFpbFF1aWNrVmlldyc7XHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnLi4vUmF0aW5nJztcclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tICcuLi8uLi8uLi91dGlsaXRpZXMvcHJvZHVjdC1oZWxwZXInO1xyXG5pbXBvcnQgeyBhZGRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvY2FydC9hY3Rpb24nO1xyXG5pbXBvcnQgeyBhZGRJdGVtVG9Db21wYXJlIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUvY29tcGFyZS9hY3Rpb24nO1xyXG5pbXBvcnQgeyBhZGRJdGVtVG9XaXNobGlzdCB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL3dpc2hsaXN0L2FjdGlvbic7XHJcblxyXG5jbGFzcyBQcm9kdWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzUXVpY2tWaWV3OiBmYWxzZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFkZEl0ZW1Ub0NhcnQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRJdGVtKHByb2R1Y3QpKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQWRkSXRlbVRvQ29tcGFyZSA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZEl0ZW1Ub0NvbXBhcmUocHJvZHVjdCkpO1xyXG4gICAgfTtcclxuXHJcbiAgICBoYW5kbGVBZGRJdGVtVG9XaXNobGlzdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdCB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGFkZEl0ZW1Ub1dpc2hsaXN0KHByb2R1Y3QpKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlU2hvd1F1aWNrVmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1F1aWNrVmlldzogdHJ1ZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlSGlkZVF1aWNrVmlldyA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1F1aWNrVmlldzogZmFsc2UgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3QsIGN1cnJlbmN5IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGxldCBwcm9kdWN0QmFkZ2UgPSBudWxsO1xyXG4gICAgICAgIGlmIChwcm9kdWN0LmJhZGdlICYmIHByb2R1Y3QuYmFkZ2UgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgcHJvZHVjdC5iYWRnZS5tYXAoKGJhZGdlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFkZ2UudHlwZSA9PT0gJ3NhbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwcm9kdWN0QmFkZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2VcIj57YmFkZ2UudmFsdWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGJhZGdlLnR5cGUgPT09ICdvdXRTdG9jaycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByb2R1Y3RCYWRnZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZSBvdXQtc3RvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYWRnZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJvZHVjdEJhZGdlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlIGhvdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2JhZGdlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X190aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogTGluayA9PT4gXCIvcHJvZHVjdC9bcGlkXVwiICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBhcyA9PT4gYC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgYXM9e2AjYH0+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYXp5TG9hZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvZHVjdC50aHVtYm5haWwudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMdXh1cnkgTGVkZ2VyIE1hcmtldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYmFkZ2UgPyBwcm9kdWN0QmFkZ2UgOiAnJ31cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYWN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZWFkIE1vcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkSXRlbVRvQ2FydC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWJhZzJcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlF1aWNrIFZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2hvd1F1aWNrVmlldy5iaW5kKHRoaXMpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWV5ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJBZGQgdG8gd2lzaGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkSXRlbVRvV2lzaGxpc3QuYmluZChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24taGVhcnRcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcGFyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVBZGRJdGVtVG9Db21wYXJlLmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWNoYXJ0LWJhcnNcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogaHJlZiA9PT4gXCIvc2hvcFwiICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ZlbmRvclwiPllvdW5nIFNob3A8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBocmVmID09PiBcIi9wcm9kdWN0L1twaWRdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzID09PiBgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgI2B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fdGl0bGVcIj57cHJvZHVjdC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19yYXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSYXRpbmcgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwcm9kdWN0LnJhdGluZ0NvdW50fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmlzX3NhbGUgPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZSBzYWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8gY3VycmVuY3kuc3ltYm9sIDogJyQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8gY3VycmVuY3kuc3ltYm9sIDogJyQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5zYWxlX3ByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8gY3VycmVuY3kuc3ltYm9sIDogJyQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2NvbnRlbnQgaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCIgLy8vIFwicHJvZHVjdC9bcGlkXVwiIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzID09PiBgL3Byb2R1Y3QvJHtwcm9kdWN0LmlkfWBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtgI2B9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3RpdGxlXCI+e3Byb2R1Y3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmlzX3NhbGUgPT09IHRydWUgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZSBzYWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8gY3VycmVuY3kuc3ltYm9sIDogJyQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShwcm9kdWN0LnByaWNlKX17JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkZWwgY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnNhbGVfcHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/IGN1cnJlbmN5LnN5bWJvbCA6ICckJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAyNH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oYW5kbGVIaWRlUXVpY2tWaWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNRdWlja1ZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsUXVpY2tWaWV3IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPiAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS5zZXR0aW5nO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZHVjdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=