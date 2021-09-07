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
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_12__["Modal"], {
          title: product.title,
          centered: true,
          footer: null,
          width: 1024,
          onCancel: this.handleHideQuickView,
          visible: this.state.isQuickView,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_detail_ProductDetailQuickView__WEBPACK_IMPORTED_MODULE_13__["default"], {
            product: product
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 195,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9wcm9kdWN0cy9Qcm9kdWN0T2ZmbGluZS5qc3giXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdCIsImRpc3BhdGNoIiwiYWRkSXRlbSIsImFkZEl0ZW1Ub0NvbXBhcmUiLCJhZGRJdGVtVG9XaXNobGlzdCIsInNldFN0YXRlIiwiaXNRdWlja1ZpZXciLCJzdGF0ZSIsImN1cnJlbmN5IiwicHJvZHVjdEJhZGdlIiwiYmFkZ2UiLCJtYXAiLCJ0eXBlIiwidmFsdWUiLCJ0aHVtYm5haWwiLCJ1cmwiLCJoYW5kbGVTaG93UXVpY2tWaWV3IiwiYmluZCIsImhhbmRsZUFkZEl0ZW1Ub1dpc2hsaXN0IiwiaGFuZGxlQWRkSXRlbVRvQ29tcGFyZSIsInRpdGxlIiwicmF0aW5nQ291bnQiLCJpc19zYWxlIiwic3ltYm9sIiwiZm9ybWF0Q3VycmVuY3kiLCJwcmljZSIsInNhbGVfcHJpY2UiLCJoYW5kbGVIaWRlUXVpY2tWaWV3IiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwic2V0dGluZyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLE87Ozs7O0FBQ0YsbUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTs7QUFDZiw4QkFBTUEsS0FBTjs7QUFEZSw0VUFPRyxVQUFDQyxDQUFELEVBQU87QUFDekJBLE9BQUMsQ0FBQ0MsY0FBRjtBQUR5QixVQUVqQkMsT0FGaUIsR0FFTCxNQUFLSCxLQUZBLENBRWpCRyxPQUZpQjs7QUFHekIsWUFBS0gsS0FBTCxDQUFXSSxRQUFYLENBQW9CQyxtRUFBTyxDQUFDRixPQUFELENBQTNCO0FBQ0gsS0FYa0I7O0FB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QUFFLElBSFo7QUFJSSxlQUFLLEVBQUUsSUFKWDtBQUtJLGtCQUFRLEVBQUUsS0FBS08sbUJBTG5CO0FBTUksaUJBQU8sRUFBRSxLQUFLcEIsS0FBTCxDQUFXRCxXQU54QjtBQUFBLGlDQU9JLHFFQUFDLHVFQUFEO0FBQXdCLG1CQUFPLEVBQUVOO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQXFJSDs7OztFQWpNaUI0QiwrQzs7QUFtTXRCLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ3RCLEtBQUQsRUFBVztBQUMvQixTQUFPQSxLQUFLLENBQUN1QixPQUFiO0FBQ0gsQ0FGRDs7QUFHZUMsMEhBQU8sQ0FBQ0YsZUFBRCxDQUFQLENBQXlCakMsT0FBekIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92ZW5kb3IvdmVuZG9yLWRhc2hib2FyZC4xNDk4ZDFmMGYxOGM1NjllODMyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFByb2R1Y3REZXRhaWxRdWlja1ZpZXcgZnJvbSAnLi4vZGV0YWlsL1Byb2R1Y3REZXRhaWxRdWlja1ZpZXcnO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJy4uL1JhdGluZyc7XHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vLi4vdXRpbGl0aWVzL3Byb2R1Y3QtaGVscGVyJztcclxuaW1wb3J0IHsgYWRkSXRlbSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2NhcnQvYWN0aW9uJztcclxuaW1wb3J0IHsgYWRkSXRlbVRvQ29tcGFyZSB9IGZyb20gJy4uLy4uLy4uL3N0b3JlL2NvbXBhcmUvYWN0aW9uJztcclxuaW1wb3J0IHsgYWRkSXRlbVRvV2lzaGxpc3QgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS93aXNobGlzdC9hY3Rpb24nO1xyXG5cclxuY2xhc3MgUHJvZHVjdCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1F1aWNrVmlldzogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVBZGRJdGVtVG9DYXJ0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0IH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goYWRkSXRlbShwcm9kdWN0KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUFkZEl0ZW1Ub0NvbXBhcmUgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRJdGVtVG9Db21wYXJlKHByb2R1Y3QpKTtcclxuICAgIH07XHJcblxyXG4gICAgaGFuZGxlQWRkSXRlbVRvV2lzaGxpc3QgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IHByb2R1Y3QgfSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChhZGRJdGVtVG9XaXNobGlzdChwcm9kdWN0KSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZVNob3dRdWlja1ZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNRdWlja1ZpZXc6IHRydWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhhbmRsZUhpZGVRdWlja1ZpZXcgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNRdWlja1ZpZXc6IGZhbHNlIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgeyBwcm9kdWN0LCBjdXJyZW5jeSB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgcHJvZHVjdEJhZGdlID0gbnVsbDtcclxuICAgICAgICBpZiAocHJvZHVjdC5iYWRnZSAmJiBwcm9kdWN0LmJhZGdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHByb2R1Y3QuYmFkZ2UubWFwKChiYWRnZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJhZGdlLnR5cGUgPT09ICdzYWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJvZHVjdEJhZGdlID0gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2JhZGdlXCI+e2JhZGdlLnZhbHVlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYWRnZS50eXBlID09PSAnb3V0U3RvY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwcm9kdWN0QmFkZ2UgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fYmFkZ2Ugb3V0LXN0b2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmFkZ2UudmFsdWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHByb2R1Y3RCYWRnZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19iYWRnZSBob3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtiYWRnZS52YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIExpbmsgPT0+IFwiL3Byb2R1Y3QvW3BpZF1cIiAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogYXMgPT0+IGAvcHJvZHVjdC8ke3Byb2R1Y3QuaWR9YCAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGFzPXtgI2B9PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGF6eUxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2R1Y3QudGh1bWJuYWlsLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTHV4dXJ5IExlZGdlciBNYXJrZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xhenlMb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmJhZGdlID8gcHJvZHVjdEJhZGdlIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2FjdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUmVhZCBNb3JlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZEl0ZW1Ub0NhcnQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1iYWcyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXBsYWNlbWVudD1cInRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJRdWljayBWaWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVNob3dRdWlja1ZpZXcuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1leWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1wbGFjZW1lbnQ9XCJ0b3BcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQWRkIHRvIHdpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUFkZEl0ZW1Ub1dpc2hsaXN0LmJpbmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uLWhlYXJ0XCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvbXBhcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQWRkSXRlbVRvQ29tcGFyZS5iaW5kKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbi1jaGFydC1iYXJzXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIGhyZWYgPT0+IFwiL3Nob3BcIiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X192ZW5kb3JcIj5Zb3VuZyBTaG9wPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHJlZiA9PT4gXCIvcHJvZHVjdC9bcGlkXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcyA9PT4gYC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YCNgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInBzLXByb2R1Y3RfX3RpdGxlXCI+e3Byb2R1Y3QudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcmF0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmF0aW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cHJvZHVjdC5yYXRpbmdDb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pc19zYWxlID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2Ugc2FsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/IGN1cnJlbmN5LnN5bWJvbCA6ICckJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRlbCBjbGFzc05hbWU9XCJtbC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/IGN1cnJlbmN5LnN5bWJvbCA6ICckJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3Quc2FsZV9wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/IGN1cnJlbmN5LnN5bWJvbCA6ICckJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X19jb250ZW50IGhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiIC8vLyBcInByb2R1Y3QvW3BpZF1cIiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcyA9PT4gYC9wcm9kdWN0LyR7cHJvZHVjdC5pZH1gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17YCNgfT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwcy1wcm9kdWN0X190aXRsZVwiPntwcm9kdWN0LnRpdGxlfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5pc19zYWxlID09PSB0cnVlID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2Ugc2FsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW5jeSA/IGN1cnJlbmN5LnN5bWJvbCA6ICckJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3kocHJvZHVjdC5wcmljZSl9eycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGVsIGNsYXNzTmFtZT1cIm1sLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbmN5ID8gY3VycmVuY3kuc3ltYm9sIDogJyQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5zYWxlX3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHMtcHJvZHVjdF9fcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVuY3kgPyBjdXJyZW5jeS5zeW1ib2wgOiAnJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zvcm1hdEN1cnJlbmN5KHByb2R1Y3QucHJpY2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MTAyNH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNhbmNlbD17dGhpcy5oYW5kbGVIaWRlUXVpY2tWaWV3fVxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e3RoaXMuc3RhdGUuaXNRdWlja1ZpZXd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0RGV0YWlsUXVpY2tWaWV3IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnNldHRpbmc7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcm9kdWN0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==