webpackHotUpdate_N_E("pages/vendor/vendor-shop",{

/***/ "./components/partials/account/sellerModules/UploadProductPics.jsx":
/*!*************************************************************************!*\
  !*** ./components/partials/account/sellerModules/UploadProductPics.jsx ***!
  \*************************************************************************/
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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_img_crop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd-img-crop */ "./node_modules/antd-img-crop/dist/antd-img-crop.esm.js");




var _jsxFileName = "F:\\UZomus\\uzomas_frontend\\components\\partials\\account\\sellerModules\\UploadProductPics.jsx",
    _this = undefined,
    _s = $RefreshSig$();





var UploadProductPics = function UploadProductPics() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }]),
      fileList = _useState[0],
      setFileList = _useState[1];

  var onChange = function onChange(_ref) {
    var newFileList = _ref.fileList;
    setFileList(newFileList);
  };

  var onPreview = /*#__PURE__*/function () {
    var _ref2 = Object(F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(file) {
      var src, image, imgWindow;
      return F_UZomus_uzomas_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              src = file.url;

              if (src) {
                _context.next = 5;
                break;
              }

              _context.next = 4;
              return new Promise(function (resolve) {
                var reader = new FileReader();
                reader.readAsDataURL(file.originFileObj);

                reader.onload = function () {
                  return resolve(reader.result);
                };
              });

            case 4:
              src = _context.sent;

            case 5:
              image = new Image();
              image.src = src;
              imgWindow = window.open(src);
              imgWindow.document.write(image.outerHTML);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onPreview(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd_img_crop__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rotate: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_4__["Upload"], {
      action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      listType: "picture-card",
      fileList: fileList,
      onChange: onChange,
      onPreview: onPreview,
      children: fileList.length < 5 && '+ Upload'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 9
  }, _this);
};

_s(UploadProductPics, "kIo6BahH9pm9TTeMPhqawLGKDIM=");

_c = UploadProductPics;
/* harmony default export */ __webpack_exports__["default"] = (UploadProductPics);

var _c;

$RefreshReg$(_c, "UploadProductPics");

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

/***/ }),

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_ShopPreferences__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ShopPreferences */ "./components/partials/vendor/modules/ShopPreferences.jsx");
/* harmony import */ var _modules_ProductStock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/ProductStock */ "./components/partials/vendor/modules/ProductStock.jsx");
/* harmony import */ var _modules_SellerGetPaid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/SellerGetPaid */ "./components/partials/vendor/modules/SellerGetPaid.jsx");


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
          lineNumber: 28,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Step, {
          title: "Stock Your Shop"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Step, {
          title: "Set Up Billing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: current === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_ShopPreferences__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 21
      }, _this) : current === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_ProductStock__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_SellerGetPaid__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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

/***/ }),

/***/ "./components/partials/vendor/modules/ProductStock.jsx":
/*!*************************************************************!*\
  !*** ./components/partials/vendor/modules/ProductStock.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ~/styles/sellerProducts.module.css */ "./styles/sellerProducts.module.css");
/* harmony import */ var _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _account_sellerModules_UploadProductPics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../account/sellerModules/UploadProductPics */ "./components/partials/account/sellerModules/UploadProductPics.jsx");



var _jsxFileName = "F:\\UZomus\\uzomas_frontend\\components\\partials\\vendor\\modules\\ProductStock.jsx",
    _this = undefined;

// import { Upload } from 'antd';





var ProductStock = function ProductStock() {
  var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;
  var children = ['Product', 'Shoe'];

  for (var i = children.length; children.length > 0; i++) {
    children.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
      value: children[i],
      children: children[i]
    }, children[i], false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 23
    }, _this));
  }

  function handleChange(value) {
    console.log("selected ".concat(value));
  }

  var options = [{
    value: 'Clothing & Apparel',
    label: 'Clothing & Apparel',
    children: [{
      value: 'Accessories',
      label: 'Accessories'
    }, {
      value: 'Womens',
      label: 'Womens'
    }, {
      value: 'Bags',
      label: 'Bags'
    }, {
      value: "Kid's Fashion",
      label: "Kid's Fashion"
    }, {
      value: 'Mens',
      label: 'Mens'
    }]
  }, {
    value: 'Garden & Kitchen',
    label: 'Garden & Kitchen',
    children: [{
      value: 'Cookware',
      label: 'Cookware'
    }, {
      value: 'Decoration',
      label: 'Decoration'
    }, {
      value: 'Home Improvement',
      label: 'Home Improvement'
    }, {
      value: 'Utensil & Gadget',
      label: 'Utensil & Gadget' // Home Improvement

    }, {
      value: 'Home Improvement',
      label: 'Home Improvement'
    }, {
      value: 'Furniture',
      label: 'Furniture'
    }, {
      value: 'Powers And Hand Tools',
      label: 'Powers And Hand Tools'
    }]
  }, {
    value: 'Consumer Electrics',
    label: 'Consumer Electrics',
    children: [{
      value: 'Air Conditioners',
      label: 'Air Conditioners',
      children: [{
        value: 'Accessories',
        label: 'Accessories'
      }, {
        value: 'Type Hanging Cell',
        label: 'Type Hanging Cell'
      }, {
        value: 'Type Hanging Wall',
        label: 'Type Hanging Wall'
      }]
    }]
  }];

  function onChange(value) {
    console.log(value);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "text-center mb-xs-1",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
          children: "Product Listing"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "col-group p-xs-0 text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "col-centered col-xs-12 col-lg-6 mb-xs-4 mb-md-5",
            children: "Add as many listings as you can. Five or more would be a great start. More listings means more chances to be discovered!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 116,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        "data-region-name": "images",
        "data-ui": "images",
        className: "seller_shope__container pt-5 mb-xs-2 mb-md-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "panel p-xs-2 p-md-4 mb-xs-2 mb-md-3 mb-lg-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-xs-3 mb-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mb-xs-1",
              children: "Photos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 129,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-lighter",
              children: "Add as many as you can so buyers can see every detail."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "product__pic__container col-group col-flush",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-sm-4 col-xl-3 col-tv-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "strong mb-xs-1",
                children: ["Photos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "required",
                  "aria-hidden": "true",
                  children: ["\xA0*", ' ']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Use up to five photos to show your item's most important qualities."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 146,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Tips:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 150,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "text-smaller text-gray-lighter",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Use natural light and no flash."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 154,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Include a common object for scale."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Show the item being held, worn, or used."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 158,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Shoot against a clean, simple background."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Add photos to your variations so buyers can see all their options."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product__pic",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-sm-8 col-xl-9 col-tv-10 pt-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_account_sellerModules_UploadProductPics__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 175,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "seller_shope__container pt-5 mb-xs-2 mb-md-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "panel p-xs-2 p-md-4 mb-xs-2 mb-md-3 mb-lg-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-xs-3 mb-md-4",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mb-xs-1",
              children: "Listing Details"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-lighter",
              children: "Tell the world all about your item and why they\u2019ll love it."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "product__pic__container col-group col-flush",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-sm-4 col-xl-3 col-tv-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "strong mb-xs-1",
                children: ["Title", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "required",
                  "aria-hidden": "true",
                  children: ["\xA0*", ' ']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 199,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Include keywords that buyers would use to search for your item."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 206,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product__pic ".concat(_styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.span),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-sm-8 col-xl-9 col-tv-10 pt-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.span,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
                    placeholderTextColor: "green",
                    placeholder: "Keywords",
                    mode: "tags",
                    style: {
                      width: '100%'
                    },
                    onChange: handleChange,
                    tokenSeparators: [','],
                    children: children
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 215,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
                  className: "pt-5",
                  labelCol: {
                    span: 4
                  },
                  wrapperCol: {
                    span: 14
                  },
                  layout: "horizontal",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
                    className: _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.select_category,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Cascader"], {
                      options: options,
                      onChange: onChange,
                      placeholder: "Category"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 237,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 235,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 230,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 212,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 195,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "seller_shope__container pt-5 mb-xs-2 mb-md-0",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "panel p-xs-2 p-md-4 mb-xs-2 mb-md-3 mb-lg-4",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-xs-3 mb-md-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              className: "mb-xs-1",
              children: "Inventory and pricing"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 255,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 254,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "product__pic__container col-group col-flush",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-sm-4 col-xl-3 col-tv-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "strong mb-xs-1",
                children: ["Price", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "required",
                  "aria-hidden": "true",
                  children: ["\xA0*", ' ']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 261,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 259,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Remember to factor in the costs of materials, labour, and other business expenses. If you offer free delivery, make sure to include the cost of postage so it doesn't eat into your profits."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 258,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product__pic",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-sm-8 col-xl-9 col-tv-10 pt-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.span,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                    placeholderTextColor: "green",
                    placeholder: "$ 0"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 280,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 279,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 278,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 277,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 257,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "product__pic__container col-group col-flush",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-sm-4 col-xl-3 col-tv-2",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                className: "strong mb-xs-1",
                children: ["Quantity", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "required",
                  "aria-hidden": "true",
                  children: ["\xA0*", ' ']
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 293,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 291,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "For quantities greater than one, this listing will renew automatically until it sells out. You\u2019ll be charged a USD 0.20 USD listing fee each time."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 300,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 290,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product__pic",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-sm-8 col-xl-9 col-tv-10 pt-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.span,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                    placeholderTextColor: "green",
                    placeholder: "1"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 310,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 309,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 308,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 289,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_c = ProductStock;
/* harmony default export */ __webpack_exports__["default"] = (ProductStock);

var _c;

$RefreshReg$(_c, "ProductStock");

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

/***/ }),

/***/ "./node_modules/antd-img-crop/dist/antd-img-crop.esm.js":
/*!**************************************************************!*\
  !*** ./node_modules/antd-img-crop/dist/antd-img-crop.esm.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_easy_crop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-easy-crop */ "./node_modules/react-easy-crop/index.module.js");
/* harmony import */ var antd_es_locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/es/locale-provider/LocaleReceiver */ "./node_modules/antd/es/locale-provider/LocaleReceiver.js");
/* harmony import */ var antd_es_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd/es/modal */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd_es_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd/es/slider */ "./node_modules/antd/es/slider/index.js");
function __$styleInject(css) {
    if (!css) return;

    if (typeof window == 'undefined') return;
    var style = document.createElement('style');
    style.setAttribute('media', 'screen');

    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}












__$styleInject(".antd-img-crop-modal .ant-modal-body {\n  padding-bottom: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-container {\n  position: relative;\n  width: 100%;\n  height: 40vh;\n  margin-bottom: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-control {\n  display: flex;\n  align-items: center;\n  width: 60%;\n  margin-left: auto;\n  margin-right: auto;\n}\n.antd-img-crop-modal .antd-img-crop-control button {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 34px;\n  height: 34px;\n  padding: 0;\n  font-style: normal;\n  background: transparent;\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n}\n.antd-img-crop-modal .antd-img-crop-control button[disabled] {\n  cursor: default;\n}\n.antd-img-crop-modal .antd-img-crop-control.zoom button {\n  font-size: 18px;\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button {\n  font-size: 16px;\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button:first-of-type {\n  transform: rotate(-20deg);\n}\n.antd-img-crop-modal .antd-img-crop-control.rotate button:last-of-type {\n  transform: rotate(20deg);\n}\n.antd-img-crop-modal .antd-img-crop-control .ant-slider {\n  flex: 1;\n  margin: 0 8px;\n}\n");

var _excluded = ["beforeUpload", "accept"];
var pkg = 'antd-img-crop';

var noop = function noop() {};

var MEDIA_CLASS = pkg + "-media";
var ZOOM_STEP = 0.1;
var MIN_ROTATE = 0;
var MAX_ROTATE = 360;
var ROTATE_STEP = 1;
var EasyCrop = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function (props, ref) {
  var src = props.src,
      aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      hasZoom = props.hasZoom,
      zoomVal = props.zoomVal,
      rotateVal = props.rotateVal,
      setZoomVal = props.setZoomVal,
      setRotateVal = props.setRotateVal,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      onComplete = props.onComplete,
      cropperProps = props.cropperProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    x: 0,
    y: 0
  }),
      crop = _useState[0],
      setCrop = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    width: 0,
    height: 0
  }),
      cropSize = _useState2[0],
      setCropSize = _useState2[1];

  var onCropComplete = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (croppedArea, croppedAreaPixels) {
    onComplete(croppedAreaPixels);
  }, [onComplete]);
  var onMediaLoaded = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (mediaSize) {
    var width = mediaSize.width,
        height = mediaSize.height;
    var ratioWidth = height * aspect;

    if (width > ratioWidth) {
      setCropSize({
        width: ratioWidth,
        height: height
      });
    } else {
      setCropSize({
        width: width,
        height: width / aspect
      });
    }
  }, [aspect]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_easy_crop__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, cropperProps, {
    ref: ref,
    image: src,
    crop: crop,
    cropSize: cropSize,
    onCropChange: setCrop,
    aspect: aspect,
    cropShape: shape,
    showGrid: grid,
    zoomWithScroll: hasZoom,
    zoom: zoomVal,
    rotation: rotateVal,
    onZoomChange: setZoomVal,
    onRotationChange: setRotateVal,
    minZoom: minZoom,
    maxZoom: maxZoom,
    onCropComplete: onCropComplete,
    onMediaLoaded: onMediaLoaded,
    classes: {
      containerClassName: pkg + "-container",
      mediaClassName: MEDIA_CLASS
    }
  }));
});
EasyCrop.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  aspect: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  shape: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  grid: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  hasZoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  zoomVal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  rotateVal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  setZoomVal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  setRotateVal: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  minZoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  maxZoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  onComplete: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  cropperProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object
};
var ImgCrop = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function (props, ref) {
  var aspect = props.aspect,
      shape = props.shape,
      grid = props.grid,
      quality = props.quality,
      zoom = props.zoom,
      rotate = props.rotate,
      minZoom = props.minZoom,
      maxZoom = props.maxZoom,
      fillColor = props.fillColor,
      modalTitle = props.modalTitle,
      modalWidth = props.modalWidth,
      modalOk = props.modalOk,
      modalCancel = props.modalCancel,
      beforeCrop = props.beforeCrop,
      children = props.children,
      cropperProps = props.cropperProps;
  var hasZoom = zoom === true;
  var hasRotate = rotate === true;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      src = _useState3[0],
      setSrc = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(1),
      zoomVal = _useState4[0],
      setZoomVal = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      rotateVal = _useState5[0],
      setRotateVal = _useState5[1];

  var beforeUploadRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var fileRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var resolveRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(noop);
  var rejectRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(noop);
  var cropPixelsRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  /**
   * Upload
   */

  var renderUpload = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    var upload = Array.isArray(children) ? children[0] : children;

    var _upload$props = upload.props,
        beforeUpload = _upload$props.beforeUpload,
        accept = _upload$props.accept,
        restUploadProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_upload$props, _excluded);

    beforeUploadRef.current = beforeUpload;
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, upload, {
      props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, restUploadProps, {
        accept: accept || 'image/*',
        beforeUpload: function beforeUpload(file, fileList) {
          return new Promise( /*#__PURE__*/function () {
            var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(resolve, reject) {
              var reader;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.t0 = beforeCrop;

                      if (!_context.t0) {
                        _context.next = 5;
                        break;
                      }

                      _context.next = 4;
                      return beforeCrop(file, fileList);

                    case 4:
                      _context.t0 = !_context.sent;

                    case 5:
                      if (!_context.t0) {
                        _context.next = 8;
                        break;
                      }

                      reject();
                      return _context.abrupt("return");

                    case 8:
                      fileRef.current = file;
                      resolveRef.current = resolve;
                      rejectRef.current = reject;
                      reader = new FileReader();
                      reader.addEventListener('load', function () {
                        setSrc(reader.result);
                      });
                      reader.readAsDataURL(file);

                    case 14:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());
        }
      })
    });
  }, [beforeCrop, children]);
  /**
   * EasyCrop
   */

  var onComplete = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (croppedAreaPixels) {
    cropPixelsRef.current = croppedAreaPixels;
  }, []);
  /**
   * Controls
   */

  var isMinZoom = zoomVal - ZOOM_STEP < minZoom;
  var isMaxZoom = zoomVal + ZOOM_STEP > maxZoom;
  var isMinRotate = rotateVal === MIN_ROTATE;
  var isMaxRotate = rotateVal === MAX_ROTATE;
  var subZoomVal = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    if (!isMinZoom) setZoomVal(zoomVal - ZOOM_STEP);
  }, [isMinZoom, zoomVal]);
  var addZoomVal = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    if (!isMaxZoom) setZoomVal(zoomVal + ZOOM_STEP);
  }, [isMaxZoom, zoomVal]);
  var subRotateVal = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    if (!isMinRotate) setRotateVal(rotateVal - ROTATE_STEP);
  }, [isMinRotate, rotateVal]);
  var addRotateVal = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    if (!isMaxRotate) setRotateVal(rotateVal + ROTATE_STEP);
  }, [isMaxRotate, rotateVal]);
  /**
   * Modal
   */

  var modalProps = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    var obj = {
      width: modalWidth,
      okText: modalOk,
      cancelText: modalCancel
    };
    Object.keys(obj).forEach(function (key) {
      if (!obj[key]) delete obj[key];
    });
    return obj;
  }, [modalCancel, modalOk, modalWidth]);
  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    setSrc('');
    setZoomVal(1);
    setRotateVal(0);
  }, []);
  var onOk = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
    var naturalImg, naturalWidth, naturalHeight, canvas, ctx, maxLen, halfMax, left, top, maxImgData, _cropPixelsRef$curren, width, height, x, y, _fileRef$current, type, name, uid;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            onClose();
            naturalImg = document.querySelector("." + MEDIA_CLASS);
            naturalWidth = naturalImg.naturalWidth, naturalHeight = naturalImg.naturalHeight;
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d'); // create a max canvas to cover the source image after rotated

            maxLen = Math.sqrt(Math.pow(naturalWidth, 2) + Math.pow(naturalHeight, 2));
            canvas.width = maxLen;
            canvas.height = maxLen; // rotate the image

            if (hasRotate && rotateVal > 0 && rotateVal < 360) {
              halfMax = maxLen / 2;
              ctx.translate(halfMax, halfMax);
              ctx.rotate(rotateVal * Math.PI / 180);
              ctx.translate(-halfMax, -halfMax);
            }

            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height); // draw the source image in the center of the max canvas

            left = (maxLen - naturalWidth) / 2;
            top = (maxLen - naturalHeight) / 2;
            ctx.drawImage(naturalImg, left, top); // shrink the max canvas to the crop area size, then align two center points

            maxImgData = ctx.getImageData(0, 0, maxLen, maxLen);
            _cropPixelsRef$curren = cropPixelsRef.current, width = _cropPixelsRef$curren.width, height = _cropPixelsRef$curren.height, x = _cropPixelsRef$curren.x, y = _cropPixelsRef$curren.y;
            canvas.width = width;
            canvas.height = height; // fill the background once again

            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.putImageData(maxImgData, Math.round(-left - x), Math.round(-top - y)); // get the new image

            _fileRef$current = fileRef.current, type = _fileRef$current.type, name = _fileRef$current.name, uid = _fileRef$current.uid;
            canvas.toBlob( /*#__PURE__*/function () {
              var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(blob) {
                var newFile, res, passedFile, _type;

                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        newFile = new File([blob], name, {
                          type: type
                        });
                        newFile.uid = uid;

                        if (!(typeof beforeUploadRef.current !== 'function')) {
                          _context2.next = 4;
                          break;
                        }

                        return _context2.abrupt("return", resolveRef.current(newFile));

                      case 4:
                        res = beforeUploadRef.current(newFile, [newFile]);

                        if (!(typeof res !== 'boolean' && !res)) {
                          _context2.next = 8;
                          break;
                        }

                        console.error('beforeUpload must return a boolean or Promise');
                        return _context2.abrupt("return");

                      case 8:
                        if (!(res === true)) {
                          _context2.next = 10;
                          break;
                        }

                        return _context2.abrupt("return", resolveRef.current(newFile));

                      case 10:
                        if (!(res === false)) {
                          _context2.next = 12;
                          break;
                        }

                        return _context2.abrupt("return", rejectRef.current('not upload'));

                      case 12:
                        if (!(res && typeof res.then === 'function')) {
                          _context2.next = 25;
                          break;
                        }

                        _context2.prev = 13;
                        _context2.next = 16;
                        return res;

                      case 16:
                        passedFile = _context2.sent;
                        _type = Object.prototype.toString.call(passedFile);
                        if (_type === '[object File]' || _type === '[object Blob]') newFile = passedFile;
                        resolveRef.current(newFile);
                        _context2.next = 25;
                        break;

                      case 22:
                        _context2.prev = 22;
                        _context2.t0 = _context2["catch"](13);
                        rejectRef.current(_context2.t0);

                      case 25:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, null, [[13, 22]]);
              }));

              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }(), type, quality);

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  })), [hasRotate, onClose, quality, rotateVal]);

  var renderComponent = function renderComponent(titleOfModal) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, renderUpload(), src && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_modal__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({
      visible: true,
      wrapClassName: pkg + "-modal",
      title: titleOfModal,
      onOk: onOk,
      onCancel: onClose,
      maskClosable: false,
      destroyOnClose: true
    }, modalProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(EasyCrop, {
      ref: ref,
      src: src,
      aspect: aspect,
      shape: shape,
      grid: grid,
      hasZoom: hasZoom,
      zoomVal: zoomVal,
      rotateVal: rotateVal,
      setZoomVal: setZoomVal,
      setRotateVal: setRotateVal,
      minZoom: minZoom,
      maxZoom: maxZoom,
      onComplete: onComplete,
      cropperProps: cropperProps
    }), hasZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: pkg + "-control zoom"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: subZoomVal,
      disabled: isMinZoom
    }, "\uFF0D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      min: minZoom,
      max: maxZoom,
      step: ZOOM_STEP,
      value: zoomVal,
      onChange: setZoomVal
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: addZoomVal,
      disabled: isMaxZoom
    }, "\uFF0B")), hasRotate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: pkg + "-control rotate"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: subRotateVal,
      disabled: isMinRotate
    }, "\u21BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
      min: MIN_ROTATE,
      max: MAX_ROTATE,
      step: ROTATE_STEP,
      value: rotateVal,
      onChange: setRotateVal
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      onClick: addRotateVal,
      disabled: isMaxRotate
    }, "\u21BB"))));
  };

  if (modalTitle) return renderComponent(modalTitle);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_es_locale_provider_LocaleReceiver__WEBPACK_IMPORTED_MODULE_7__["default"], null, function (locale, localeCode) {
    return renderComponent(localeCode === 'zh-cn' ? '编辑图片' : 'Edit image');
  });
});
ImgCrop.propTypes = {
  aspect: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  shape: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['rect', 'round']),
  grid: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  quality: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  zoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  rotate: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  minZoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  maxZoom: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
  fillColor: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  modalTitle: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  modalWidth: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),
  modalOk: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  modalCancel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  beforeCrop: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  cropperProps: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node
};
ImgCrop.defaultProps = {
  aspect: 1,
  shape: 'rect',
  grid: false,
  quality: 0.4,
  zoom: true,
  rotate: false,
  minZoom: 1,
  maxZoom: 3,
  fillColor: 'white'
};

/* harmony default export */ __webpack_exports__["default"] = (ImgCrop);


/***/ }),

/***/ "./node_modules/normalize-wheel/index.js":
/*!***********************************************!*\
  !*** ./node_modules/normalize-wheel/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/normalizeWheel.js */ "./node_modules/normalize-wheel/src/normalizeWheel.js");


/***/ }),

/***/ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/ExecutionEnvironment.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */



var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;


/***/ }),

/***/ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false;

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;

// Actual IE browser for compatibility mode
var _ie_real_version;

// Platforms
var _osx, _windows, _linux, _android;

// Architectures
var _win64;

// Devices
var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true;

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!(/Win64/.exec(uas));

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : (
          agent[5] ? parseFloat(agent[5]) : NaN);
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux   = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {

  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return _populate() || (_ie_real_version > _ie);
  },


  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return _populate() || _firefox;
  },


  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return _populate() || _opera;
  },


  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome : function() {
    return _populate() || _chrome;
  },


  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return _populate() || _windows;
  },


  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return _populate() || _iphone;
  },

  mobile: function() {
    return _populate() || (_iphone || _ipad || _android || _mobile);
  },

  nativeApp: function() {
    // webviews inside of the native apps
    return _populate() || _native;
  },

  android: function() {
    return _populate() || _android;
  },

  ipad: function() {
    return _populate() || _ipad;
  }
};

module.exports = UserAgent_DEPRECATED;


/***/ }),

/***/ "./node_modules/normalize-wheel/src/isEventSupported.js":
/*!**************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/isEventSupported.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */



var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js");

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;


/***/ }),

/***/ "./node_modules/normalize-wheel/src/normalizeWheel.js":
/*!************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/normalizeWheel.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */



var UserAgent_DEPRECATED = __webpack_require__(/*! ./UserAgent_DEPRECATED */ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js");

var isEventSupported = __webpack_require__(/*! ./isEventSupported */ "./node_modules/normalize-wheel/src/isEventSupported.js");


// Reasonable defaults
var PIXEL_STEP  = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel(/*object*/ event) /*object*/ {
  var sX = 0, sY = 0,       // spinX, spinY
      pX = 0, pY = 0;       // pixelX, pixelY

  // Legacy
  if ('detail'      in event) { sY = event.detail; }
  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

  // side scrolling on FF with DOMMouseScroll
  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) { pY = event.deltaY; }
  if ('deltaX' in event) { pX = event.deltaX; }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {          // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {                             // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

  return { spinX  : sX,
           spinY  : sY,
           pixelX : pX,
           pixelY : pY };
}


/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel.getEventType = function() /*string*/ {
  return (UserAgent_DEPRECATED.firefox())
           ? 'DOMMouseScroll'
           : (isEventSupported('wheel'))
               ? 'wheel'
               : 'mousewheel';
};

module.exports = normalizeWheel;


/***/ }),

/***/ "./node_modules/react-easy-crop/index.module.js":
/*!******************************************************!*\
  !*** ./node_modules/react-easy-crop/index.module.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_2__);




/**
 * Compute the dimension of the crop area based on media size,
 * aspect ratio and optionally rotation
 */

function getCropSize(mediaWidth, mediaHeight, containerWidth, containerHeight, aspect, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaWidth, mediaHeight, rotation),
      width = _a.width,
      height = _a.height;

  var fittingWidth = Math.min(width, containerWidth);
  var fittingHeight = Math.min(height, containerHeight);

  if (fittingWidth > fittingHeight * aspect) {
    return {
      width: fittingHeight * aspect,
      height: fittingHeight
    };
  }

  return {
    width: fittingWidth,
    height: fittingWidth / aspect
  };
}
/**
 * Ensure a new media position stays in the crop area.
 */

function restrictPosition(position, mediaSize, cropSize, zoom, rotation) {
  if (rotation === void 0) {
    rotation = 0;
  }

  var _a = translateSize(mediaSize.width, mediaSize.height, rotation),
      width = _a.width,
      height = _a.height;

  return {
    x: restrictPositionCoord(position.x, width, cropSize.width, zoom),
    y: restrictPositionCoord(position.y, height, cropSize.height, zoom)
  };
}

function restrictPositionCoord(position, mediaSize, cropSize, zoom) {
  var maxPosition = mediaSize * zoom / 2 - cropSize / 2;
  return Math.min(maxPosition, Math.max(position, -maxPosition));
}

function getDistanceBetweenPoints(pointA, pointB) {
  return Math.sqrt(Math.pow(pointA.y - pointB.y, 2) + Math.pow(pointA.x - pointB.x, 2));
}
function getRotationBetweenPoints(pointA, pointB) {
  return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}
/**
 * Compute the output cropped area of the media in percentages and pixels.
 * x/y are the top-left coordinates on the src media
 */

function computeCroppedArea(crop, mediaSize, cropSize, aspect, zoom, rotation, restrictPosition) {
  if (rotation === void 0) {
    rotation = 0;
  }

  if (restrictPosition === void 0) {
    restrictPosition = true;
  } // if the media is rotated by the user, we cannot limit the position anymore
  // as it might need to be negative.


  var limitAreaFn = restrictPosition && rotation === 0 ? limitArea : noOp;
  var croppedAreaPercentages = {
    x: limitAreaFn(100, ((mediaSize.width - cropSize.width / zoom) / 2 - crop.x / zoom) / mediaSize.width * 100),
    y: limitAreaFn(100, ((mediaSize.height - cropSize.height / zoom) / 2 - crop.y / zoom) / mediaSize.height * 100),
    width: limitAreaFn(100, cropSize.width / mediaSize.width * 100 / zoom),
    height: limitAreaFn(100, cropSize.height / mediaSize.height * 100 / zoom)
  }; // we compute the pixels size naively

  var widthInPixels = Math.round(limitAreaFn(mediaSize.naturalWidth, croppedAreaPercentages.width * mediaSize.naturalWidth / 100));
  var heightInPixels = Math.round(limitAreaFn(mediaSize.naturalHeight, croppedAreaPercentages.height * mediaSize.naturalHeight / 100));
  var isImgWiderThanHigh = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect; // then we ensure the width and height exactly match the aspect (to avoid rounding approximations)
  // if the media is wider than high, when zoom is 0, the crop height will be equals to iamge height
  // thus we want to compute the width from the height and aspect for accuracy.
  // Otherwise, we compute the height from width and aspect.

  var sizePixels = isImgWiderThanHigh ? {
    width: Math.round(heightInPixels * aspect),
    height: heightInPixels
  } : {
    width: widthInPixels,
    height: Math.round(widthInPixels / aspect)
  };

  var croppedAreaPixels = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, sizePixels), {
    x: Math.round(limitAreaFn(mediaSize.naturalWidth - sizePixels.width, croppedAreaPercentages.x * mediaSize.naturalWidth / 100)),
    y: Math.round(limitAreaFn(mediaSize.naturalHeight - sizePixels.height, croppedAreaPercentages.y * mediaSize.naturalHeight / 100))
  });

  return {
    croppedAreaPercentages: croppedAreaPercentages,
    croppedAreaPixels: croppedAreaPixels
  };
}
/**
 * Ensure the returned value is between 0 and max
 */

function limitArea(max, value) {
  return Math.min(max, Math.max(0, value));
}

function noOp(_max, value) {
  return value;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;

  if (cropSize) {
    var isHeightMaxSize_1 = cropSize.height > cropSize.width;
    return isHeightMaxSize_1 ? cropSize.height / mediaZoom / croppedAreaPixels.height : cropSize.width / mediaZoom / croppedAreaPixels.width;
  }

  var aspect = croppedAreaPixels.width / croppedAreaPixels.height;
  var isHeightMaxSize = mediaSize.naturalWidth >= mediaSize.naturalHeight * aspect;
  return isHeightMaxSize ? mediaSize.naturalHeight / croppedAreaPixels.height : mediaSize.naturalWidth / croppedAreaPixels.width;
}
/**
 * Compute the crop and zoom from the croppedAreaPixels
 */


function getInitialCropFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize) {
  var mediaZoom = mediaSize.width / mediaSize.naturalWidth;
  var zoom = getZoomFromCroppedAreaPixels(croppedAreaPixels, mediaSize, cropSize);
  var cropZoom = mediaZoom * zoom;
  var crop = {
    x: ((mediaSize.naturalWidth - croppedAreaPixels.width) / 2 - croppedAreaPixels.x) * cropZoom,
    y: ((mediaSize.naturalHeight - croppedAreaPixels.height) / 2 - croppedAreaPixels.y) * cropZoom
  };
  return {
    crop: crop,
    zoom: zoom
  };
}
/**
 * Return the point that is the center of point a and b
 */

function getCenter(a, b) {
  return {
    x: (b.x + a.x) / 2,
    y: (b.y + a.y) / 2
  };
}
/**
 *
 * Returns an x,y point once rotated around xMid,yMid
 */

function rotateAroundMidPoint(x, y, xMid, yMid, degrees) {
  var cos = Math.cos;
  var sin = Math.sin;
  var radian = degrees * Math.PI / 180; // Convert to radians
  // Subtract midpoints, so that midpoint is translated to origin
  // and add it in the end again

  var xr = (x - xMid) * cos(radian) - (y - yMid) * sin(radian) + xMid;
  var yr = (x - xMid) * sin(radian) + (y - yMid) * cos(radian) + yMid;
  return [xr, yr];
}
/**
 * Returns the new bounding area of a rotated rectangle.
 */

function translateSize(width, height, rotation) {
  var centerX = width / 2;
  var centerY = height / 2;
  var outerBounds = [rotateAroundMidPoint(0, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, 0, centerX, centerY, rotation), rotateAroundMidPoint(width, height, centerX, centerY, rotation), rotateAroundMidPoint(0, height, centerX, centerY, rotation)];
  var minX = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var maxX = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[0];
  }));
  var minY = Math.min.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  var maxY = Math.max.apply(Math, outerBounds.map(function (p) {
    return p[1];
  }));
  return {
    width: maxX - minX,
    height: maxY - minY
  };
}
/**
 * Combine multiple class names into a single string.
 */

function classNames() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return args.filter(function (value) {
    if (typeof value === 'string' && value.length > 0) {
      return true;
    }

    return false;
  }).join(' ').trim();
}

var css_248z = ".reactEasyCrop_Container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.reactEasyCrop_Image,\n.reactEasyCrop_Video {\n  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */\n}\n\n.reactEasyCrop_Contain {\n  max-width: 100%;\n  max-height: 100%;\n  margin: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.reactEasyCrop_Cover_Horizontal {\n  width: 100%;\n  height: auto;\n}\n.reactEasyCrop_Cover_Vertical {\n  width: auto;\n  height: 100%;\n}\n\n.reactEasyCrop_CropArea {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  box-sizing: border-box;\n  box-shadow: 0 0 0 9999em;\n  color: rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\n.reactEasyCrop_CropAreaRound {\n  border-radius: 50%;\n}\n\n.reactEasyCrop_CropAreaGrid::before {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 0;\n  bottom: 0;\n  left: 33.33%;\n  right: 33.33%;\n  border-top: 0;\n  border-bottom: 0;\n}\n\n.reactEasyCrop_CropAreaGrid::after {\n  content: ' ';\n  box-sizing: border-box;\n  position: absolute;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n  top: 33.33%;\n  bottom: 33.33%;\n  left: 0;\n  right: 0;\n  border-left: 0;\n  border-right: 0;\n}\n";

var MIN_ZOOM = 1;
var MAX_ZOOM = 3;

var Cropper =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Cropper, _super);

  function Cropper() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.imageRef = null;
    _this.videoRef = null;
    _this.containerRef = null;
    _this.styleRef = null;
    _this.containerRect = null;
    _this.mediaSize = {
      width: 0,
      height: 0,
      naturalWidth: 0,
      naturalHeight: 0
    };
    _this.dragStartPosition = {
      x: 0,
      y: 0
    };
    _this.dragStartCrop = {
      x: 0,
      y: 0
    };
    _this.lastPinchDistance = 0;
    _this.lastPinchRotation = 0;
    _this.rafDragTimeout = null;
    _this.rafPinchTimeout = null;
    _this.wheelTimer = null;
    _this.state = {
      cropSize: null,
      hasWheelJustStarted: false
    }; // this is to prevent Safari on iOS >= 10 to zoom the page

    _this.preventZoomSafari = function (e) {
      return e.preventDefault();
    };

    _this.cleanEvents = function () {
      document.removeEventListener('mousemove', _this.onMouseMove);
      document.removeEventListener('mouseup', _this.onDragStopped);
      document.removeEventListener('touchmove', _this.onTouchMove);
      document.removeEventListener('touchend', _this.onDragStopped);
    };

    _this.clearScrollEvent = function () {
      if (_this.containerRef) _this.containerRef.removeEventListener('wheel', _this.onWheel);

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }
    };

    _this.onMediaLoad = function () {
      _this.computeSizes();

      _this.emitCropData();

      _this.setInitialCrop();

      if (_this.props.onMediaLoaded) {
        _this.props.onMediaLoaded(_this.mediaSize);
      }
    };

    _this.setInitialCrop = function () {
      var _a = _this.props,
          initialCroppedAreaPixels = _a.initialCroppedAreaPixels,
          cropSize = _a.cropSize;

      if (!initialCroppedAreaPixels) {
        return;
      }

      var _b = getInitialCropFromCroppedAreaPixels(initialCroppedAreaPixels, _this.mediaSize, cropSize),
          crop = _b.crop,
          zoom = _b.zoom;

      _this.props.onCropChange(crop);

      _this.props.onZoomChange && _this.props.onZoomChange(zoom);
    };

    _this.computeSizes = function () {
      var _a, _b, _c, _d, _e, _f;

      var mediaRef = _this.imageRef || _this.videoRef;

      if (mediaRef && _this.containerRef) {
        _this.containerRect = _this.containerRef.getBoundingClientRect();
        _this.mediaSize = {
          width: mediaRef.offsetWidth,
          height: mediaRef.offsetHeight,
          naturalWidth: ((_a = _this.imageRef) === null || _a === void 0 ? void 0 : _a.naturalWidth) || ((_b = _this.videoRef) === null || _b === void 0 ? void 0 : _b.videoWidth) || 0,
          naturalHeight: ((_c = _this.imageRef) === null || _c === void 0 ? void 0 : _c.naturalHeight) || ((_d = _this.videoRef) === null || _d === void 0 ? void 0 : _d.videoHeight) || 0
        };
        var cropSize = _this.props.cropSize ? _this.props.cropSize : getCropSize(mediaRef.offsetWidth, mediaRef.offsetHeight, _this.containerRect.width, _this.containerRect.height, _this.props.aspect, _this.props.rotation);

        if (((_e = _this.state.cropSize) === null || _e === void 0 ? void 0 : _e.height) !== cropSize.height || ((_f = _this.state.cropSize) === null || _f === void 0 ? void 0 : _f.width) !== cropSize.width) {
          _this.props.onCropSizeChange && _this.props.onCropSizeChange(cropSize);
        }

        _this.setState({
          cropSize: cropSize
        }, _this.recomputeCropPosition);
      }
    };

    _this.onMouseDown = function (e) {
      e.preventDefault();
      document.addEventListener('mousemove', _this.onMouseMove);
      document.addEventListener('mouseup', _this.onDragStopped);

      _this.onDragStart(Cropper.getMousePoint(e));
    };

    _this.onMouseMove = function (e) {
      return _this.onDrag(Cropper.getMousePoint(e));
    };

    _this.onTouchStart = function (e) {
      e.preventDefault();
      document.addEventListener('touchmove', _this.onTouchMove, {
        passive: false
      }); // iOS 11 now defaults to passive: true

      document.addEventListener('touchend', _this.onDragStopped);

      if (e.touches.length === 2) {
        _this.onPinchStart(e);
      } else if (e.touches.length === 1) {
        _this.onDragStart(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onTouchMove = function (e) {
      // Prevent whole page from scrolling on iOS.
      e.preventDefault();

      if (e.touches.length === 2) {
        _this.onPinchMove(e);
      } else if (e.touches.length === 1) {
        _this.onDrag(Cropper.getTouchPoint(e.touches[0]));
      }
    };

    _this.onDragStart = function (_a) {
      var _b, _c;

      var x = _a.x,
          y = _a.y;
      _this.dragStartPosition = {
        x: x,
        y: y
      };
      _this.dragStartCrop = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, _this.props.crop);
      (_c = (_b = _this.props).onInteractionStart) === null || _c === void 0 ? void 0 : _c.call(_b);
    };

    _this.onDrag = function (_a) {
      var x = _a.x,
          y = _a.y;
      if (_this.rafDragTimeout) window.cancelAnimationFrame(_this.rafDragTimeout);
      _this.rafDragTimeout = window.requestAnimationFrame(function () {
        if (!_this.state.cropSize) return;
        if (x === undefined || y === undefined) return;
        var offsetX = x - _this.dragStartPosition.x;
        var offsetY = y - _this.dragStartPosition.y;
        var requestedPosition = {
          x: _this.dragStartCrop.x + offsetX,
          y: _this.dragStartCrop.y + offsetY
        };
        var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : requestedPosition;

        _this.props.onCropChange(newPosition);
      });
    };

    _this.onDragStopped = function () {
      var _a, _b;

      _this.cleanEvents();

      _this.emitCropData();

      (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
    };

    _this.onWheel = function (e) {
      e.preventDefault();
      var point = Cropper.getMousePoint(e);
      var pixelY = normalize_wheel__WEBPACK_IMPORTED_MODULE_2___default()(e).pixelY;
      var newZoom = _this.props.zoom - pixelY * _this.props.zoomSpeed / 200;

      _this.setNewZoom(newZoom, point);

      if (!_this.state.hasWheelJustStarted) {
        _this.setState({
          hasWheelJustStarted: true
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionStart) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }

      if (_this.wheelTimer) {
        clearTimeout(_this.wheelTimer);
      }

      _this.wheelTimer = window.setTimeout(function () {
        return _this.setState({
          hasWheelJustStarted: false
        }, function () {
          var _a, _b;

          return (_b = (_a = _this.props).onInteractionEnd) === null || _b === void 0 ? void 0 : _b.call(_a);
        });
      }, 250);
    };

    _this.getPointOnContainer = function (_a) {
      var x = _a.x,
          y = _a.y;

      if (!_this.containerRect) {
        throw new Error('The Cropper is not mounted');
      }

      return {
        x: _this.containerRect.width / 2 - (x - _this.containerRect.left),
        y: _this.containerRect.height / 2 - (y - _this.containerRect.top)
      };
    };

    _this.getPointOnMedia = function (_a) {
      var x = _a.x,
          y = _a.y;
      var _b = _this.props,
          crop = _b.crop,
          zoom = _b.zoom;
      return {
        x: (x + crop.x) / zoom,
        y: (y + crop.y) / zoom
      };
    };

    _this.setNewZoom = function (zoom, point) {
      if (!_this.state.cropSize || !_this.props.onZoomChange) return;

      var zoomPoint = _this.getPointOnContainer(point);

      var zoomTarget = _this.getPointOnMedia(zoomPoint);

      var newZoom = Math.min(_this.props.maxZoom, Math.max(zoom, _this.props.minZoom));
      var requestedPosition = {
        x: zoomTarget.x * newZoom - zoomPoint.x,
        y: zoomTarget.y * newZoom - zoomPoint.y
      };
      var newPosition = _this.props.restrictPosition ? restrictPosition(requestedPosition, _this.mediaSize, _this.state.cropSize, newZoom, _this.props.rotation) : requestedPosition;

      _this.props.onCropChange(newPosition);

      _this.props.onZoomChange(newZoom);
    };

    _this.getCropData = function () {
      if (!_this.state.cropSize) {
        return null;
      } // this is to ensure the crop is correctly restricted after a zoom back (https://github.com/ricardo-ch/react-easy-crop/issues/6)


      var restrictedPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;
      return computeCroppedArea(restrictedPosition, _this.mediaSize, _this.state.cropSize, _this.getAspect(), _this.props.zoom, _this.props.rotation, _this.props.restrictPosition);
    };

    _this.emitCropData = function () {
      var cropData = _this.getCropData();

      if (!cropData) return;
      var croppedAreaPercentages = cropData.croppedAreaPercentages,
          croppedAreaPixels = cropData.croppedAreaPixels;

      if (_this.props.onCropComplete) {
        _this.props.onCropComplete(croppedAreaPercentages, croppedAreaPixels);
      }

      if (_this.props.onCropAreaChange) {
        _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
      }
    };

    _this.emitCropAreaChange = function () {
      var cropData = _this.getCropData();

      if (!cropData) return;
      var croppedAreaPercentages = cropData.croppedAreaPercentages,
          croppedAreaPixels = cropData.croppedAreaPixels;

      if (_this.props.onCropAreaChange) {
        _this.props.onCropAreaChange(croppedAreaPercentages, croppedAreaPixels);
      }
    };

    _this.recomputeCropPosition = function () {
      if (!_this.state.cropSize) return;
      var newPosition = _this.props.restrictPosition ? restrictPosition(_this.props.crop, _this.mediaSize, _this.state.cropSize, _this.props.zoom, _this.props.rotation) : _this.props.crop;

      _this.props.onCropChange(newPosition);

      _this.emitCropData();
    };

    return _this;
  }

  Cropper.prototype.componentDidMount = function () {
    window.addEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.props.zoomWithScroll && this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      });
      this.containerRef.addEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.addEventListener('gesturechange', this.preventZoomSafari);
    }

    if (!this.props.disableAutomaticStylesInjection) {
      this.styleRef = document.createElement('style');
      this.styleRef.setAttribute('type', 'text/css');
      this.styleRef.innerHTML = css_248z;
      document.head.appendChild(this.styleRef);
    } // when rendered via SSR, the image can already be loaded and its onLoad callback will never be called


    if (this.imageRef && this.imageRef.complete) {
      this.onMediaLoad();
    }
  };

  Cropper.prototype.componentWillUnmount = function () {
    var _a;

    window.removeEventListener('resize', this.computeSizes);

    if (this.containerRef) {
      this.containerRef.removeEventListener('gesturestart', this.preventZoomSafari);
      this.containerRef.removeEventListener('gesturechange', this.preventZoomSafari);
    }

    if (this.styleRef) {
      (_a = this.styleRef.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(this.styleRef);
    }

    this.cleanEvents();
    this.props.zoomWithScroll && this.clearScrollEvent();
  };

  Cropper.prototype.componentDidUpdate = function (prevProps) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    if (prevProps.rotation !== this.props.rotation) {
      this.computeSizes();
      this.recomputeCropPosition();
    } else if (prevProps.aspect !== this.props.aspect) {
      this.computeSizes();
    } else if (prevProps.zoom !== this.props.zoom) {
      this.recomputeCropPosition();
    } else if (((_a = prevProps.cropSize) === null || _a === void 0 ? void 0 : _a.height) !== ((_b = this.props.cropSize) === null || _b === void 0 ? void 0 : _b.height) || ((_c = prevProps.cropSize) === null || _c === void 0 ? void 0 : _c.width) !== ((_d = this.props.cropSize) === null || _d === void 0 ? void 0 : _d.width)) {
      this.computeSizes();
    } else if (((_e = prevProps.crop) === null || _e === void 0 ? void 0 : _e.x) !== ((_f = this.props.crop) === null || _f === void 0 ? void 0 : _f.x) || ((_g = prevProps.crop) === null || _g === void 0 ? void 0 : _g.y) !== ((_h = this.props.crop) === null || _h === void 0 ? void 0 : _h.y)) {
      this.emitCropAreaChange();
    }

    if (prevProps.zoomWithScroll !== this.props.zoomWithScroll && this.containerRef) {
      this.props.zoomWithScroll ? this.containerRef.addEventListener('wheel', this.onWheel, {
        passive: false
      }) : this.clearScrollEvent();
    }

    if (prevProps.video !== this.props.video) {
      (_j = this.videoRef) === null || _j === void 0 ? void 0 : _j.load();
    }
  };

  Cropper.prototype.getAspect = function () {
    var _a = this.props,
        cropSize = _a.cropSize,
        aspect = _a.aspect;

    if (cropSize) {
      return cropSize.width / cropSize.height;
    }

    return aspect;
  };

  Cropper.prototype.onPinchStart = function (e) {
    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    this.lastPinchDistance = getDistanceBetweenPoints(pointA, pointB);
    this.lastPinchRotation = getRotationBetweenPoints(pointA, pointB);
    this.onDragStart(getCenter(pointA, pointB));
  };

  Cropper.prototype.onPinchMove = function (e) {
    var _this = this;

    var pointA = Cropper.getTouchPoint(e.touches[0]);
    var pointB = Cropper.getTouchPoint(e.touches[1]);
    var center = getCenter(pointA, pointB);
    this.onDrag(center);
    if (this.rafPinchTimeout) window.cancelAnimationFrame(this.rafPinchTimeout);
    this.rafPinchTimeout = window.requestAnimationFrame(function () {
      var distance = getDistanceBetweenPoints(pointA, pointB);
      var newZoom = _this.props.zoom * (distance / _this.lastPinchDistance);

      _this.setNewZoom(newZoom, center);

      _this.lastPinchDistance = distance;
      var rotation = getRotationBetweenPoints(pointA, pointB);
      var newRotation = _this.props.rotation + (rotation - _this.lastPinchRotation);
      _this.props.onRotationChange && _this.props.onRotationChange(newRotation);
      _this.lastPinchRotation = rotation;
    });
  };

  Cropper.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        image = _a.image,
        video = _a.video,
        mediaProps = _a.mediaProps,
        transform = _a.transform,
        _b = _a.crop,
        x = _b.x,
        y = _b.y,
        rotation = _a.rotation,
        zoom = _a.zoom,
        cropShape = _a.cropShape,
        showGrid = _a.showGrid,
        _c = _a.style,
        containerStyle = _c.containerStyle,
        cropAreaStyle = _c.cropAreaStyle,
        mediaStyle = _c.mediaStyle,
        _d = _a.classes,
        containerClassName = _d.containerClassName,
        cropAreaClassName = _d.cropAreaClassName,
        mediaClassName = _d.mediaClassName,
        objectFit = _a.objectFit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onMouseDown: this.onMouseDown,
      onTouchStart: this.onTouchStart,
      ref: function ref(el) {
        return _this.containerRef = el;
      },
      "data-testid": "container",
      style: containerStyle,
      className: classNames('reactEasyCrop_Container', containerClassName)
    }, image ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      alt: "",
      className: classNames('reactEasyCrop_Image', objectFit === 'contain' && 'reactEasyCrop_Contain', objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal', objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical', mediaClassName)
    }, mediaProps, {
      src: image,
      ref: function ref(el) {
        return _this.imageRef = el;
      },
      style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      onLoad: this.onMediaLoad
    })) : video && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("video", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
      autoPlay: true,
      loop: true,
      muted: true,
      className: classNames('reactEasyCrop_Video', objectFit === 'contain' && 'reactEasyCrop_Contain', objectFit === 'horizontal-cover' && 'reactEasyCrop_Cover_Horizontal', objectFit === 'vertical-cover' && 'reactEasyCrop_Cover_Vertical', mediaClassName)
    }, mediaProps, {
      ref: function ref(el) {
        return _this.videoRef = el;
      },
      onLoadedMetadata: this.onMediaLoad,
      style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, mediaStyle), {
        transform: transform || "translate(" + x + "px, " + y + "px) rotate(" + rotation + "deg) scale(" + zoom + ")"
      }),
      controls: false
    }), (Array.isArray(video) ? video : [{
      src: video
    }]).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
        key: item.src
      }, item));
    })), this.state.cropSize && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, cropAreaStyle), {
        width: this.state.cropSize.width,
        height: this.state.cropSize.height
      }),
      "data-testid": "cropper",
      className: classNames('reactEasyCrop_CropArea', cropShape === 'round' && 'reactEasyCrop_CropAreaRound', showGrid && 'reactEasyCrop_CropAreaGrid', cropAreaClassName)
    }));
  };

  Cropper.defaultProps = {
    zoom: 1,
    rotation: 0,
    aspect: 4 / 3,
    maxZoom: MAX_ZOOM,
    minZoom: MIN_ZOOM,
    cropShape: 'rect',
    objectFit: 'contain',
    showGrid: true,
    style: {},
    classes: {},
    mediaProps: {},
    zoomSpeed: 1,
    restrictPosition: true,
    zoomWithScroll: true
  };

  Cropper.getMousePoint = function (e) {
    return {
      x: Number(e.clientX),
      y: Number(e.clientY)
    };
  };

  Cropper.getTouchPoint = function (touch) {
    return {
      x: Number(touch.clientX),
      y: Number(touch.clientY)
    };
  };

  return Cropper;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Cropper);
//# sourceMappingURL=index.module.js.map


/***/ }),

/***/ "./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-easy-crop/node_modules/tslib/tslib.es6.js ***!
  \**********************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy9hY2NvdW50L3NlbGxlck1vZHVsZXMvVXBsb2FkUHJvZHVjdFBpY3MuanN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhcnRpYWxzL3ZlbmRvci9TZWxsZXJTdGVwLmpzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvbW9kdWxlcy9Qcm9kdWN0U3RvY2suanN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvYW50ZC1pbWctY3JvcC9kaXN0L2FudGQtaW1nLWNyb3AuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXdoZWVsL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLXdoZWVsL3NyYy9FeGVjdXRpb25FbnZpcm9ubWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS13aGVlbC9zcmMvVXNlckFnZW50X0RFUFJFQ0FURUQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtd2hlZWwvc3JjL2lzRXZlbnRTdXBwb3J0ZWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9ub3JtYWxpemUtd2hlZWwvc3JjL25vcm1hbGl6ZVdoZWVsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtZWFzeS1jcm9wL2luZGV4Lm1vZHVsZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWVhc3ktY3JvcC9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIl0sIm5hbWVzIjpbIlVwbG9hZFByb2R1Y3RQaWNzIiwidXNlU3RhdGUiLCJ1aWQiLCJuYW1lIiwic3RhdHVzIiwidXJsIiwiZmlsZUxpc3QiLCJzZXRGaWxlTGlzdCIsIm9uQ2hhbmdlIiwibmV3RmlsZUxpc3QiLCJvblByZXZpZXciLCJmaWxlIiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwicmVhZEFzRGF0YVVSTCIsIm9yaWdpbkZpbGVPYmoiLCJvbmxvYWQiLCJyZXN1bHQiLCJpbWFnZSIsIkltYWdlIiwiaW1nV2luZG93Iiwid2luZG93Iiwib3BlbiIsImRvY3VtZW50Iiwid3JpdGUiLCJvdXRlckhUTUwiLCJsZW5ndGgiLCJTZWxsZXJTdGVwIiwiU3RlcCIsIlN0ZXBzIiwiY3VycmVudCIsInNldEN1cnJlbnQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2Fyb3VzZWxOZXh0IiwiUHJvZHVjdFN0b2NrIiwiT3B0aW9uIiwiU2VsZWN0IiwiY2hpbGRyZW4iLCJpIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwib3B0aW9ucyIsImxhYmVsIiwic3R5bGVzIiwic3BhbiIsIndpZHRoIiwic2VsZWN0X2NhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLENBQ3JDO0FBQ0lDLE9BQUcsRUFBRSxJQURUO0FBRUlDLFFBQUksRUFBRSxXQUZWO0FBR0lDLFVBQU0sRUFBRSxNQUhaO0FBSUlDLE9BQUcsRUFBRTtBQUpULEdBRHFDLENBQUQsQ0FEWjtBQUFBLE1BQ3JCQyxRQURxQjtBQUFBLE1BQ1hDLFdBRFc7O0FBVTVCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQStCO0FBQUEsUUFBbEJDLFdBQWtCLFFBQTVCSCxRQUE0QjtBQUM1Q0MsZUFBVyxDQUFDRSxXQUFELENBQVg7QUFDSCxHQUZEOztBQUlBLE1BQU1DLFNBQVM7QUFBQSwrU0FBRyxpQkFBT0MsSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVkMs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Q0E7QUFDQSx1QkFBdUI7QUFDdkI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEIsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBLDJFQUEyRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLHNEQUFRLENBQUMsc0RBQVEsR0FBRztBQUM5QztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBLDBDQUEwQyx1QkFBdUIsV0FBVyxZQUFZLGFBQWEsY0FBYyxxQkFBcUIsc0JBQXNCLHVCQUF1QixpQkFBaUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRyxpREFBaUQsMkJBQTJCLDhFQUE4RSw0QkFBNEIsb0JBQW9CLHFCQUFxQixpQkFBaUIsdUJBQXVCLFdBQVcsY0FBYyxZQUFZLGFBQWEsR0FBRyxtQ0FBbUMsZ0JBQWdCLGlCQUFpQixHQUFHLGlDQUFpQyxnQkFBZ0IsaUJBQWlCLEdBQUcsNkJBQTZCLHVCQUF1QixjQUFjLGFBQWEscUNBQXFDLCtDQUErQywyQkFBMkIsNkJBQTZCLDhCQUE4QixxQkFBcUIsR0FBRyxrQ0FBa0MsdUJBQXVCLEdBQUcseUNBQXlDLGlCQUFpQiwyQkFBMkIsdUJBQXVCLCtDQUErQyxXQUFXLGNBQWMsaUJBQWlCLGtCQUFrQixrQkFBa0IscUJBQXFCLEdBQUcsd0NBQXdDLGlCQUFpQiwyQkFBMkIsdUJBQXVCLCtDQUErQyxnQkFBZ0IsbUJBQW1CLFlBQVksYUFBYSxtQkFBbUIsb0JBQW9CLEdBQUc7O0FBRXJpRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdURBQVM7O0FBRVg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixzREFBUSxHQUFHO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHNEQUFjO0FBQ2pDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw0Q0FBSztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLLHVCQUF1Qiw0Q0FBSyxzQkFBc0Isc0RBQVE7QUFDL0Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsYUFBYSxzREFBUSxDQUFDLHNEQUFRLEdBQUc7QUFD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O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCw0Q0FBNEM7QUFDNUM7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci92ZW5kb3Itc2hvcC45NzAwZDA1M2Y2MjYyMTZjYjUzZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBVcGxvYWQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IEltZ0Nyb3AgZnJvbSAnYW50ZC1pbWctY3JvcCc7XHJcblxyXG5jb25zdCBVcGxvYWRQcm9kdWN0UGljcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtmaWxlTGlzdCwgc2V0RmlsZUxpc3RdID0gdXNlU3RhdGUoW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdWlkOiAnLTEnLFxyXG4gICAgICAgICAgICBuYW1lOiAnaW1hZ2UucG5nJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnZG9uZScsXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9ICh7IGZpbGVMaXN0OiBuZXdGaWxlTGlzdCB9KSA9PiB7XHJcbiAgICAgICAgc2V0RmlsZUxpc3QobmV3RmlsZUxpc3QpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvblByZXZpZXcgPSBhc3luYyAoZmlsZSkgPT4ge1xyXG4gICAgICAgIGxldCBzcmMgPSBmaWxlLnVybDtcclxuICAgICAgICBpZiAoIXNyYykge1xyXG4gICAgICAgICAgICBzcmMgPSBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUub3JpZ2luRmlsZU9iaik7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4gcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgICAgIGNvbnN0IGltZ1dpbmRvdyA9IHdpbmRvdy5vcGVuKHNyYyk7XHJcbiAgICAgICAgaW1nV2luZG93LmRvY3VtZW50LndyaXRlKGltYWdlLm91dGVySFRNTCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEltZ0Nyb3Agcm90YXRlPlxyXG4gICAgICAgICAgICA8VXBsb2FkXHJcbiAgICAgICAgICAgICAgICBhY3Rpb249XCJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzZcIlxyXG4gICAgICAgICAgICAgICAgbGlzdFR5cGU9XCJwaWN0dXJlLWNhcmRcIlxyXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Q9e2ZpbGVMaXN0fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgb25QcmV2aWV3PXtvblByZXZpZXd9PlxyXG4gICAgICAgICAgICAgICAge2ZpbGVMaXN0Lmxlbmd0aCA8IDUgJiYgJysgVXBsb2FkJ31cclxuICAgICAgICAgICAgPC9VcGxvYWQ+XHJcbiAgICAgICAgPC9JbWdDcm9wPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwbG9hZFByb2R1Y3RQaWNzO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFN0ZXBzLCBEaXZpZGVyIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgU2hvcFByZWZlcmVuY2VzIGZyb20gJy4vbW9kdWxlcy9TaG9wUHJlZmVyZW5jZXMnO1xyXG5pbXBvcnQgUHJvZHVjdFN0b2NrIGZyb20gJy4vbW9kdWxlcy9Qcm9kdWN0U3RvY2snO1xyXG5pbXBvcnQgU2VsbGVyR2V0UGFpZCBmcm9tICcuL21vZHVsZXMvU2VsbGVyR2V0UGFpZCc7XHJcblxyXG5jb25zdCBTZWxsZXJTdGVwID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBTdGVwIH0gPSBTdGVwcztcclxuXHJcbiAgICBjb25zdCBbY3VycmVudCwgc2V0Q3VycmVudF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29uQ2hhbmdlOicsIGN1cnJlbnQpO1xyXG4gICAgICAgIHNldEN1cnJlbnQoY3VycmVudCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNhcm91c2VsTmV4dCA9IChjdXJyZW50KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudCk7XHJcbiAgICAgICAgc2V0Q3VycmVudChjdXJyZW50KyspO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0LTVcIj5cclxuICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICA8U3RlcHMgY3VycmVudD17Y3VycmVudH0gb25DaGFuZ2U9e29uQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8U3RlcCB0aXRsZT1cIlNob3AgUHJlZmVyZW5jZXNcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8U3RlcCB0aXRsZT1cIlN0b2NrIFlvdXIgU2hvcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFN0ZXAgdGl0bGU9XCJTZXQgVXAgQmlsbGluZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1N0ZXBzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxTaG9wUHJlZmVyZW5jZXMgLz5cclxuICAgICAgICAgICAgICAgICkgOiBjdXJyZW50ID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0U3RvY2sgLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFNlbGxlckdldFBhaWQgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjdXJyZW50ID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY3VycmVudCkgPT4gc2V0Q3VycmVudChjdXJyZW50KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiBjdXJyZW50ID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoY3VycmVudCkgPT4gc2V0Q3VycmVudChjdXJyZW50KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi92ZW5kb3IvdmVuZG9yLWRhc2hib2FyZFwiPlN1Ym1pdDwvTGluaz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxsZXJTdGVwO1xyXG4iLCIvLyBpbXBvcnQgeyBVcGxvYWQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ2FzY2FkZXIsIEZvcm0sIElucHV0LCBTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnfi9zdHlsZXMvc2VsbGVyUHJvZHVjdHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBVcGxvYWRQcm9kdWN0UGljcyBmcm9tICcuLi8uLi9hY2NvdW50L3NlbGxlck1vZHVsZXMvVXBsb2FkUHJvZHVjdFBpY3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdFN0b2NrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IFsnUHJvZHVjdCcsICdTaG9lJ107XHJcbiAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoOyBjaGlsZHJlbi5sZW5ndGggPiAwOyBpKyspIHtcclxuICAgICAgICBjaGlsZHJlbi5wdXNoKDxPcHRpb24ga2V5PXtjaGlsZHJlbltpXX0gdmFsdWU9e2NoaWxkcmVuW2ldfT57Y2hpbGRyZW5baV19PC9PcHRpb24+KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICdDbG90aGluZyAmIEFwcGFyZWwnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0Nsb3RoaW5nICYgQXBwYXJlbCcsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnV29tZW5zJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1dvbWVucycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQmFncycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdCYWdzJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiS2lkJ3MgRmFzaGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIktpZCdzIEZhc2hpb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdNZW5zJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ01lbnMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICdHYXJkZW4gJiBLaXRjaGVuJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdHYXJkZW4gJiBLaXRjaGVuJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0Nvb2t3YXJlJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Nvb2t3YXJlJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdEZWNvcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RlY29yYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0hvbWUgSW1wcm92ZW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSG9tZSBJbXByb3ZlbWVudCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnVXRlbnNpbCAmIEdhZGdldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdVdGVuc2lsICYgR2FkZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBIb21lIEltcHJvdmVtZW50XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnSG9tZSBJbXByb3ZlbWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdIb21lIEltcHJvdmVtZW50JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdGdXJuaXR1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRnVybml0dXJlJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdQb3dlcnMgQW5kIEhhbmQgVG9vbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUG93ZXJzIEFuZCBIYW5kIFRvb2xzJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnQ29uc3VtZXIgRWxlY3RyaWNzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdDb25zdW1lciBFbGVjdHJpY3MnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQWlyIENvbmRpdGlvbmVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBaXIgQ29uZGl0aW9uZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1R5cGUgSGFuZ2luZyBDZWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVHlwZSBIYW5naW5nIENlbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1R5cGUgSGFuZ2luZyBXYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVHlwZSBIYW5naW5nIFdhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLXhzLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJvZHVjdCBMaXN0aW5nPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtZ3JvdXAgcC14cy0wIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbC1jZW50ZXJlZCBjb2wteHMtMTIgY29sLWxnLTYgbWIteHMtNCBtYi1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgYXMgbWFueSBsaXN0aW5ncyBhcyB5b3UgY2FuLiBGaXZlIG9yIG1vcmUgd291bGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGEgZ3JlYXQgc3RhcnQuIE1vcmUgbGlzdGluZ3MgbWVhbnMgbW9yZSBjaGFuY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBkaXNjb3ZlcmVkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1yZWdpb24tbmFtZT1cImltYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS11aT1cImltYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsbGVyX3Nob3BlX19jb250YWluZXIgcHQtNSBtYi14cy0yIG1iLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHAteHMtMiBwLW1kLTQgbWIteHMtMiBtYi1tZC0zIG1iLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi14cy0zIG1iLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi14cy0xXCI+UGhvdG9zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS1saWdodGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIGFzIG1hbnkgYXMgeW91IGNhbiBzbyBidXllcnMgY2FuIHNlZSBldmVyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcGljX19jb250YWluZXIgY29sLWdyb3VwIGNvbC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wteGwtMyBjb2wtdHYtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdHJvbmcgbWIteHMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG90b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZS14cyBoaWRlLXNtIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbGVyIHRleHQtZ3JheS1saWdodGVyIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZSB1cCB0byBmaXZlIHBob3RvcyB0byBzaG93IHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ncyBtb3N0IGltcG9ydGFudCBxdWFsaXRpZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbGVyIHRleHQtZ3JheS1saWdodGVyIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtc21hbGxlciB0ZXh0LWdyYXktbGlnaHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZSBuYXR1cmFsIGxpZ2h0IGFuZCBubyBmbGFzaC48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluY2x1ZGUgYSBjb21tb24gb2JqZWN0IGZvciBzY2FsZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGUgaXRlbSBiZWluZyBoZWxkLCB3b3JuLCBvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob290IGFnYWluc3QgYSBjbGVhbiwgc2ltcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHBob3RvcyB0byB5b3VyIHZhcmlhdGlvbnMgc29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXllcnMgY2FuIHNlZSBhbGwgdGhlaXIgb3B0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBjb2wteGwtOSBjb2wtdHYtMTAgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkUHJvZHVjdFBpY3MgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxsZXJfc2hvcGVfX2NvbnRhaW5lciBwdC01IG1iLXhzLTIgbWItbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcC14cy0yIHAtbWQtNCBtYi14cy0yIG1iLW1kLTMgbWItbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLXhzLTMgbWItbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLXhzLTFcIj5MaXN0aW5nIERldGFpbHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LWxpZ2h0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZWxsIHRoZSB3b3JsZCBhbGwgYWJvdXQgeW91ciBpdGVtIGFuZCB3aHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGV54oCZbGwgbG92ZSBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcGljX19jb250YWluZXIgY29sLWdyb3VwIGNvbC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wteGwtMyBjb2wtdHYtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdHJvbmcgbWIteHMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsqeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlLXhzIGhpZGUtc20gbWIteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsZXIgdGV4dC1ncmF5LWxpZ2h0ZXIgbWIteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5jbHVkZSBrZXl3b3JkcyB0aGF0IGJ1eWVycyB3b3VsZCB1c2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHNlYXJjaCBmb3IgeW91ciBpdGVtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdF9fcGljICR7c3R5bGVzLnNwYW59YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBjb2wteGwtOSBjb2wtdHYtMTAgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIktleXdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwidGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5TZXBhcmF0b3JzPXtbJywnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyVGV4dENvbG9yPVwiZ3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS2V5d29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB0LTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxDb2w9e3sgc3BhbjogNCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlckNvbD17eyBzcGFuOiAxNCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdF9jYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhc2NhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxsZXJfc2hvcGVfX2NvbnRhaW5lciBwdC01IG1iLXhzLTIgbWItbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcC14cy0yIHAtbWQtNCBtYi14cy0yIG1iLW1kLTMgbWItbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLXhzLTMgbWItbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLXhzLTFcIj5JbnZlbnRvcnkgYW5kIHByaWNpbmc8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19waWNfX2NvbnRhaW5lciBjb2wtZ3JvdXAgY29sLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC14bC0zIGNvbC10di0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN0cm9uZyBtYi14cy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByaWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGUteHMgaGlkZS1zbSBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21hbGxlciB0ZXh0LWdyYXktbGlnaHRlciBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciB0byBmYWN0b3IgaW4gdGhlIGNvc3RzIG9mXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRlcmlhbHMsIGxhYm91ciwgYW5kIG90aGVyIGJ1c2luZXNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBlbnNlcy4gSWYgeW91IG9mZmVyIGZyZWUgZGVsaXZlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYWtlIHN1cmUgdG8gaW5jbHVkZSB0aGUgY29zdCBvZiBwb3N0YWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbyBpdCBkb2Vzbid0IGVhdCBpbnRvIHlvdXIgcHJvZml0cy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3BpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggY29sLXhsLTkgY29sLXR2LTEwIHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIiQgMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3BpY19fY29udGFpbmVyIGNvbC1ncm91cCBjb2wtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLXhsLTMgY29sLXR2LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Ryb25nIG1iLXhzLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZS14cyBoaWRlLXNtIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbGVyIHRleHQtZ3JheS1saWdodGVyIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBxdWFudGl0aWVzIGdyZWF0ZXIgdGhhbiBvbmUsIHRoaXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Rpbmcgd2lsbCByZW5ldyBhdXRvbWF0aWNhbGx5IHVudGlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdCBzZWxscyBvdXQuIFlvdeKAmWxsIGJlIGNoYXJnZWQgYSBVU0RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAuMjAgVVNEIGxpc3RpbmcgZmVlIGVhY2ggdGltZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3BpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggY29sLXhsLTkgY29sLXR2LTEwIHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTdG9jaztcclxuIiwiZnVuY3Rpb24gX18kc3R5bGVJbmplY3QoY3NzKSB7XG4gICAgaWYgKCFjc3MpIHJldHVybjtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgJ3NjcmVlbicpO1xuXG4gICAgc3R5bGUuaW5uZXJIVE1MID0gY3NzO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIHJldHVybiBjc3M7XG59XG5cbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3luY1RvR2VuZXJhdG9yJztcbmltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENyb3BwZXIgZnJvbSAncmVhY3QtZWFzeS1jcm9wJztcbmltcG9ydCBMb2NhbGVSZWNlaXZlciBmcm9tICdhbnRkL2VzL2xvY2FsZS1wcm92aWRlci9Mb2NhbGVSZWNlaXZlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnYW50ZC9lcy9tb2RhbCc7XG5pbXBvcnQgU2xpZGVyIGZyb20gJ2FudGQvZXMvc2xpZGVyJztcblxuX18kc3R5bGVJbmplY3QoXCIuYW50ZC1pbWctY3JvcC1tb2RhbCAuYW50LW1vZGFsLWJvZHkge1xcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxufVxcbi5hbnRkLWltZy1jcm9wLW1vZGFsIC5hbnRkLWltZy1jcm9wLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcbi5hbnRkLWltZy1jcm9wLW1vZGFsIC5hbnRkLWltZy1jcm9wLWNvbnRyb2wge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5hbnRkLWltZy1jcm9wLW1vZGFsIC5hbnRkLWltZy1jcm9wLWNvbnRyb2wgYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogMDtcXG4gIG91dGxpbmU6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hbnRkLWltZy1jcm9wLW1vZGFsIC5hbnRkLWltZy1jcm9wLWNvbnRyb2wgYnV0dG9uW2Rpc2FibGVkXSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5hbnRkLWltZy1jcm9wLW1vZGFsIC5hbnRkLWltZy1jcm9wLWNvbnRyb2wuem9vbSBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4uYW50ZC1pbWctY3JvcC1tb2RhbCAuYW50ZC1pbWctY3JvcC1jb250cm9sLnJvdGF0ZSBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG4uYW50ZC1pbWctY3JvcC1tb2RhbCAuYW50ZC1pbWctY3JvcC1jb250cm9sLnJvdGF0ZSBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xcbn1cXG4uYW50ZC1pbWctY3JvcC1tb2RhbCAuYW50ZC1pbWctY3JvcC1jb250cm9sLnJvdGF0ZSBidXR0b246bGFzdC1vZi10eXBlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDIwZGVnKTtcXG59XFxuLmFudGQtaW1nLWNyb3AtbW9kYWwgLmFudGQtaW1nLWNyb3AtY29udHJvbCAuYW50LXNsaWRlciB7XFxuICBmbGV4OiAxO1xcbiAgbWFyZ2luOiAwIDhweDtcXG59XFxuXCIpO1xuXG52YXIgX2V4Y2x1ZGVkID0gW1wiYmVmb3JlVXBsb2FkXCIsIFwiYWNjZXB0XCJdO1xudmFyIHBrZyA9ICdhbnRkLWltZy1jcm9wJztcblxudmFyIG5vb3AgPSBmdW5jdGlvbiBub29wKCkge307XG5cbnZhciBNRURJQV9DTEFTUyA9IHBrZyArIFwiLW1lZGlhXCI7XG52YXIgWk9PTV9TVEVQID0gMC4xO1xudmFyIE1JTl9ST1RBVEUgPSAwO1xudmFyIE1BWF9ST1RBVEUgPSAzNjA7XG52YXIgUk9UQVRFX1NURVAgPSAxO1xudmFyIEVhc3lDcm9wID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHNyYyA9IHByb3BzLnNyYyxcbiAgICAgIGFzcGVjdCA9IHByb3BzLmFzcGVjdCxcbiAgICAgIHNoYXBlID0gcHJvcHMuc2hhcGUsXG4gICAgICBncmlkID0gcHJvcHMuZ3JpZCxcbiAgICAgIGhhc1pvb20gPSBwcm9wcy5oYXNab29tLFxuICAgICAgem9vbVZhbCA9IHByb3BzLnpvb21WYWwsXG4gICAgICByb3RhdGVWYWwgPSBwcm9wcy5yb3RhdGVWYWwsXG4gICAgICBzZXRab29tVmFsID0gcHJvcHMuc2V0Wm9vbVZhbCxcbiAgICAgIHNldFJvdGF0ZVZhbCA9IHByb3BzLnNldFJvdGF0ZVZhbCxcbiAgICAgIG1pblpvb20gPSBwcm9wcy5taW5ab29tLFxuICAgICAgbWF4Wm9vbSA9IHByb3BzLm1heFpvb20sXG4gICAgICBvbkNvbXBsZXRlID0gcHJvcHMub25Db21wbGV0ZSxcbiAgICAgIGNyb3BwZXJQcm9wcyA9IHByb3BzLmNyb3BwZXJQcm9wcztcblxuICB2YXIgX3VzZVN0YXRlID0gdXNlU3RhdGUoe1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9KSxcbiAgICAgIGNyb3AgPSBfdXNlU3RhdGVbMF0sXG4gICAgICBzZXRDcm9wID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciBfdXNlU3RhdGUyID0gdXNlU3RhdGUoe1xuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMFxuICB9KSxcbiAgICAgIGNyb3BTaXplID0gX3VzZVN0YXRlMlswXSxcbiAgICAgIHNldENyb3BTaXplID0gX3VzZVN0YXRlMlsxXTtcblxuICB2YXIgb25Dcm9wQ29tcGxldGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoY3JvcHBlZEFyZWEsIGNyb3BwZWRBcmVhUGl4ZWxzKSB7XG4gICAgb25Db21wbGV0ZShjcm9wcGVkQXJlYVBpeGVscyk7XG4gIH0sIFtvbkNvbXBsZXRlXSk7XG4gIHZhciBvbk1lZGlhTG9hZGVkID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKG1lZGlhU2l6ZSkge1xuICAgIHZhciB3aWR0aCA9IG1lZGlhU2l6ZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gbWVkaWFTaXplLmhlaWdodDtcbiAgICB2YXIgcmF0aW9XaWR0aCA9IGhlaWdodCAqIGFzcGVjdDtcblxuICAgIGlmICh3aWR0aCA+IHJhdGlvV2lkdGgpIHtcbiAgICAgIHNldENyb3BTaXplKHtcbiAgICAgICAgd2lkdGg6IHJhdGlvV2lkdGgsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3JvcFNpemUoe1xuICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgIGhlaWdodDogd2lkdGggLyBhc3BlY3RcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW2FzcGVjdF0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ3JvcHBlciwgT2JqZWN0LmFzc2lnbih7fSwgY3JvcHBlclByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgaW1hZ2U6IHNyYyxcbiAgICBjcm9wOiBjcm9wLFxuICAgIGNyb3BTaXplOiBjcm9wU2l6ZSxcbiAgICBvbkNyb3BDaGFuZ2U6IHNldENyb3AsXG4gICAgYXNwZWN0OiBhc3BlY3QsXG4gICAgY3JvcFNoYXBlOiBzaGFwZSxcbiAgICBzaG93R3JpZDogZ3JpZCxcbiAgICB6b29tV2l0aFNjcm9sbDogaGFzWm9vbSxcbiAgICB6b29tOiB6b29tVmFsLFxuICAgIHJvdGF0aW9uOiByb3RhdGVWYWwsXG4gICAgb25ab29tQ2hhbmdlOiBzZXRab29tVmFsLFxuICAgIG9uUm90YXRpb25DaGFuZ2U6IHNldFJvdGF0ZVZhbCxcbiAgICBtaW5ab29tOiBtaW5ab29tLFxuICAgIG1heFpvb206IG1heFpvb20sXG4gICAgb25Dcm9wQ29tcGxldGU6IG9uQ3JvcENvbXBsZXRlLFxuICAgIG9uTWVkaWFMb2FkZWQ6IG9uTWVkaWFMb2FkZWQsXG4gICAgY2xhc3Nlczoge1xuICAgICAgY29udGFpbmVyQ2xhc3NOYW1lOiBwa2cgKyBcIi1jb250YWluZXJcIixcbiAgICAgIG1lZGlhQ2xhc3NOYW1lOiBNRURJQV9DTEFTU1xuICAgIH1cbiAgfSkpO1xufSk7XG5FYXN5Q3JvcC5wcm9wVHlwZXMgPSB7XG4gIHNyYzogdC5zdHJpbmcsXG4gIGFzcGVjdDogdC5udW1iZXIsXG4gIHNoYXBlOiB0LnN0cmluZyxcbiAgZ3JpZDogdC5ib29sLFxuICBoYXNab29tOiB0LmJvb2wsXG4gIHpvb21WYWw6IHQubnVtYmVyLFxuICByb3RhdGVWYWw6IHQubnVtYmVyLFxuICBzZXRab29tVmFsOiB0LmZ1bmMsXG4gIHNldFJvdGF0ZVZhbDogdC5mdW5jLFxuICBtaW5ab29tOiB0Lm51bWJlcixcbiAgbWF4Wm9vbTogdC5udW1iZXIsXG4gIG9uQ29tcGxldGU6IHQuZnVuYyxcbiAgY3JvcHBlclByb3BzOiB0Lm9iamVjdFxufTtcbnZhciBJbWdDcm9wID0gLyojX19QVVJFX18qL2ZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIGFzcGVjdCA9IHByb3BzLmFzcGVjdCxcbiAgICAgIHNoYXBlID0gcHJvcHMuc2hhcGUsXG4gICAgICBncmlkID0gcHJvcHMuZ3JpZCxcbiAgICAgIHF1YWxpdHkgPSBwcm9wcy5xdWFsaXR5LFxuICAgICAgem9vbSA9IHByb3BzLnpvb20sXG4gICAgICByb3RhdGUgPSBwcm9wcy5yb3RhdGUsXG4gICAgICBtaW5ab29tID0gcHJvcHMubWluWm9vbSxcbiAgICAgIG1heFpvb20gPSBwcm9wcy5tYXhab29tLFxuICAgICAgZmlsbENvbG9yID0gcHJvcHMuZmlsbENvbG9yLFxuICAgICAgbW9kYWxUaXRsZSA9IHByb3BzLm1vZGFsVGl0bGUsXG4gICAgICBtb2RhbFdpZHRoID0gcHJvcHMubW9kYWxXaWR0aCxcbiAgICAgIG1vZGFsT2sgPSBwcm9wcy5tb2RhbE9rLFxuICAgICAgbW9kYWxDYW5jZWwgPSBwcm9wcy5tb2RhbENhbmNlbCxcbiAgICAgIGJlZm9yZUNyb3AgPSBwcm9wcy5iZWZvcmVDcm9wLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNyb3BwZXJQcm9wcyA9IHByb3BzLmNyb3BwZXJQcm9wcztcbiAgdmFyIGhhc1pvb20gPSB6b29tID09PSB0cnVlO1xuICB2YXIgaGFzUm90YXRlID0gcm90YXRlID09PSB0cnVlO1xuXG4gIHZhciBfdXNlU3RhdGUzID0gdXNlU3RhdGUoJycpLFxuICAgICAgc3JjID0gX3VzZVN0YXRlM1swXSxcbiAgICAgIHNldFNyYyA9IF91c2VTdGF0ZTNbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTQgPSB1c2VTdGF0ZSgxKSxcbiAgICAgIHpvb21WYWwgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0Wm9vbVZhbCA9IF91c2VTdGF0ZTRbMV07XG5cbiAgdmFyIF91c2VTdGF0ZTUgPSB1c2VTdGF0ZSgwKSxcbiAgICAgIHJvdGF0ZVZhbCA9IF91c2VTdGF0ZTVbMF0sXG4gICAgICBzZXRSb3RhdGVWYWwgPSBfdXNlU3RhdGU1WzFdO1xuXG4gIHZhciBiZWZvcmVVcGxvYWRSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIGZpbGVSZWYgPSB1c2VSZWYoKTtcbiAgdmFyIHJlc29sdmVSZWYgPSB1c2VSZWYobm9vcCk7XG4gIHZhciByZWplY3RSZWYgPSB1c2VSZWYobm9vcCk7XG4gIHZhciBjcm9wUGl4ZWxzUmVmID0gdXNlUmVmKCk7XG4gIC8qKlxuICAgKiBVcGxvYWRcbiAgICovXG5cbiAgdmFyIHJlbmRlclVwbG9hZCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdXBsb2FkID0gQXJyYXkuaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlblswXSA6IGNoaWxkcmVuO1xuXG4gICAgdmFyIF91cGxvYWQkcHJvcHMgPSB1cGxvYWQucHJvcHMsXG4gICAgICAgIGJlZm9yZVVwbG9hZCA9IF91cGxvYWQkcHJvcHMuYmVmb3JlVXBsb2FkLFxuICAgICAgICBhY2NlcHQgPSBfdXBsb2FkJHByb3BzLmFjY2VwdCxcbiAgICAgICAgcmVzdFVwbG9hZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3VwbG9hZCRwcm9wcywgX2V4Y2x1ZGVkKTtcblxuICAgIGJlZm9yZVVwbG9hZFJlZi5jdXJyZW50ID0gYmVmb3JlVXBsb2FkO1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgdXBsb2FkLCB7XG4gICAgICBwcm9wczogX2V4dGVuZHMoe30sIHJlc3RVcGxvYWRQcm9wcywge1xuICAgICAgICBhY2NlcHQ6IGFjY2VwdCB8fCAnaW1hZ2UvKicsXG4gICAgICAgIGJlZm9yZVVwbG9hZDogZnVuY3Rpb24gYmVmb3JlVXBsb2FkKGZpbGUsIGZpbGVMaXN0KSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9yZWYgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICB2YXIgcmVhZGVyO1xuICAgICAgICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0LnQwID0gYmVmb3JlQ3JvcDtcblxuICAgICAgICAgICAgICAgICAgICAgIGlmICghX2NvbnRleHQudDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlZm9yZUNyb3AoZmlsZSwgZmlsZUxpc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9ICFfY29udGV4dC5zZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIV9jb250ZXh0LnQwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gODtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIik7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGVSZWYuY3VycmVudCA9IGZpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVJlZi5jdXJyZW50ID0gcmVzb2x2ZTtcbiAgICAgICAgICAgICAgICAgICAgICByZWplY3RSZWYuY3VycmVudCA9IHJlamVjdDtcbiAgICAgICAgICAgICAgICAgICAgICByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U3JjKHJlYWRlci5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTQ6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gsIF94Mikge1xuICAgICAgICAgICAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KCkpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9LCBbYmVmb3JlQ3JvcCwgY2hpbGRyZW5dKTtcbiAgLyoqXG4gICAqIEVhc3lDcm9wXG4gICAqL1xuXG4gIHZhciBvbkNvbXBsZXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGNyb3BwZWRBcmVhUGl4ZWxzKSB7XG4gICAgY3JvcFBpeGVsc1JlZi5jdXJyZW50ID0gY3JvcHBlZEFyZWFQaXhlbHM7XG4gIH0sIFtdKTtcbiAgLyoqXG4gICAqIENvbnRyb2xzXG4gICAqL1xuXG4gIHZhciBpc01pblpvb20gPSB6b29tVmFsIC0gWk9PTV9TVEVQIDwgbWluWm9vbTtcbiAgdmFyIGlzTWF4Wm9vbSA9IHpvb21WYWwgKyBaT09NX1NURVAgPiBtYXhab29tO1xuICB2YXIgaXNNaW5Sb3RhdGUgPSByb3RhdGVWYWwgPT09IE1JTl9ST1RBVEU7XG4gIHZhciBpc01heFJvdGF0ZSA9IHJvdGF0ZVZhbCA9PT0gTUFYX1JPVEFURTtcbiAgdmFyIHN1Ylpvb21WYWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc01pblpvb20pIHNldFpvb21WYWwoem9vbVZhbCAtIFpPT01fU1RFUCk7XG4gIH0sIFtpc01pblpvb20sIHpvb21WYWxdKTtcbiAgdmFyIGFkZFpvb21WYWwgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpc01heFpvb20pIHNldFpvb21WYWwoem9vbVZhbCArIFpPT01fU1RFUCk7XG4gIH0sIFtpc01heFpvb20sIHpvb21WYWxdKTtcbiAgdmFyIHN1YlJvdGF0ZVZhbCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlzTWluUm90YXRlKSBzZXRSb3RhdGVWYWwocm90YXRlVmFsIC0gUk9UQVRFX1NURVApO1xuICB9LCBbaXNNaW5Sb3RhdGUsIHJvdGF0ZVZhbF0pO1xuICB2YXIgYWRkUm90YXRlVmFsID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNNYXhSb3RhdGUpIHNldFJvdGF0ZVZhbChyb3RhdGVWYWwgKyBST1RBVEVfU1RFUCk7XG4gIH0sIFtpc01heFJvdGF0ZSwgcm90YXRlVmFsXSk7XG4gIC8qKlxuICAgKiBNb2RhbFxuICAgKi9cblxuICB2YXIgbW9kYWxQcm9wcyA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBvYmogPSB7XG4gICAgICB3aWR0aDogbW9kYWxXaWR0aCxcbiAgICAgIG9rVGV4dDogbW9kYWxPayxcbiAgICAgIGNhbmNlbFRleHQ6IG1vZGFsQ2FuY2VsXG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKCFvYmpba2V5XSkgZGVsZXRlIG9ialtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH0sIFttb2RhbENhbmNlbCwgbW9kYWxPaywgbW9kYWxXaWR0aF0pO1xuICB2YXIgb25DbG9zZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBzZXRTcmMoJycpO1xuICAgIHNldFpvb21WYWwoMSk7XG4gICAgc2V0Um90YXRlVmFsKDApO1xuICB9LCBbXSk7XG4gIHZhciBvbk9rID0gdXNlQ2FsbGJhY2soIC8qI19fUFVSRV9fKi9fYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlMygpIHtcbiAgICB2YXIgbmF0dXJhbEltZywgbmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0LCBjYW52YXMsIGN0eCwgbWF4TGVuLCBoYWxmTWF4LCBsZWZ0LCB0b3AsIG1heEltZ0RhdGEsIF9jcm9wUGl4ZWxzUmVmJGN1cnJlbiwgd2lkdGgsIGhlaWdodCwgeCwgeSwgX2ZpbGVSZWYkY3VycmVudCwgdHlwZSwgbmFtZSwgdWlkO1xuXG4gICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMyQoX2NvbnRleHQzKSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0My5wcmV2ID0gX2NvbnRleHQzLm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICBvbkNsb3NlKCk7XG4gICAgICAgICAgICBuYXR1cmFsSW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIE1FRElBX0NMQVNTKTtcbiAgICAgICAgICAgIG5hdHVyYWxXaWR0aCA9IG5hdHVyYWxJbWcubmF0dXJhbFdpZHRoLCBuYXR1cmFsSGVpZ2h0ID0gbmF0dXJhbEltZy5uYXR1cmFsSGVpZ2h0O1xuICAgICAgICAgICAgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTsgLy8gY3JlYXRlIGEgbWF4IGNhbnZhcyB0byBjb3ZlciB0aGUgc291cmNlIGltYWdlIGFmdGVyIHJvdGF0ZWRcblxuICAgICAgICAgICAgbWF4TGVuID0gTWF0aC5zcXJ0KE1hdGgucG93KG5hdHVyYWxXaWR0aCwgMikgKyBNYXRoLnBvdyhuYXR1cmFsSGVpZ2h0LCAyKSk7XG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBtYXhMZW47XG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gbWF4TGVuOyAvLyByb3RhdGUgdGhlIGltYWdlXG5cbiAgICAgICAgICAgIGlmIChoYXNSb3RhdGUgJiYgcm90YXRlVmFsID4gMCAmJiByb3RhdGVWYWwgPCAzNjApIHtcbiAgICAgICAgICAgICAgaGFsZk1heCA9IG1heExlbiAvIDI7XG4gICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoaGFsZk1heCwgaGFsZk1heCk7XG4gICAgICAgICAgICAgIGN0eC5yb3RhdGUocm90YXRlVmFsICogTWF0aC5QSSAvIDE4MCk7XG4gICAgICAgICAgICAgIGN0eC50cmFuc2xhdGUoLWhhbGZNYXgsIC1oYWxmTWF4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpOyAvLyBkcmF3IHRoZSBzb3VyY2UgaW1hZ2UgaW4gdGhlIGNlbnRlciBvZiB0aGUgbWF4IGNhbnZhc1xuXG4gICAgICAgICAgICBsZWZ0ID0gKG1heExlbiAtIG5hdHVyYWxXaWR0aCkgLyAyO1xuICAgICAgICAgICAgdG9wID0gKG1heExlbiAtIG5hdHVyYWxIZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UobmF0dXJhbEltZywgbGVmdCwgdG9wKTsgLy8gc2hyaW5rIHRoZSBtYXggY2FudmFzIHRvIHRoZSBjcm9wIGFyZWEgc2l6ZSwgdGhlbiBhbGlnbiB0d28gY2VudGVyIHBvaW50c1xuXG4gICAgICAgICAgICBtYXhJbWdEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBtYXhMZW4sIG1heExlbik7XG4gICAgICAgICAgICBfY3JvcFBpeGVsc1JlZiRjdXJyZW4gPSBjcm9wUGl4ZWxzUmVmLmN1cnJlbnQsIHdpZHRoID0gX2Nyb3BQaXhlbHNSZWYkY3VycmVuLndpZHRoLCBoZWlnaHQgPSBfY3JvcFBpeGVsc1JlZiRjdXJyZW4uaGVpZ2h0LCB4ID0gX2Nyb3BQaXhlbHNSZWYkY3VycmVuLngsIHkgPSBfY3JvcFBpeGVsc1JlZiRjdXJyZW4ueTtcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDsgLy8gZmlsbCB0aGUgYmFja2dyb3VuZCBvbmNlIGFnYWluXG5cbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICAgICAgICAgIGN0eC5wdXRJbWFnZURhdGEobWF4SW1nRGF0YSwgTWF0aC5yb3VuZCgtbGVmdCAtIHgpLCBNYXRoLnJvdW5kKC10b3AgLSB5KSk7IC8vIGdldCB0aGUgbmV3IGltYWdlXG5cbiAgICAgICAgICAgIF9maWxlUmVmJGN1cnJlbnQgPSBmaWxlUmVmLmN1cnJlbnQsIHR5cGUgPSBfZmlsZVJlZiRjdXJyZW50LnR5cGUsIG5hbWUgPSBfZmlsZVJlZiRjdXJyZW50Lm5hbWUsIHVpZCA9IF9maWxlUmVmJGN1cnJlbnQudWlkO1xuICAgICAgICAgICAgY2FudmFzLnRvQmxvYiggLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIF9yZWYzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoYmxvYikge1xuICAgICAgICAgICAgICAgIHZhciBuZXdGaWxlLCByZXMsIHBhc3NlZEZpbGUsIF90eXBlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWdlbmVyYXRvclJ1bnRpbWUud3JhcChmdW5jdGlvbiBfY2FsbGVlMiQoX2NvbnRleHQyKSB7XG4gICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdGaWxlID0gbmV3IEZpbGUoW2Jsb2JdLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RmlsZS51aWQgPSB1aWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiBiZWZvcmVVcGxvYWRSZWYuY3VycmVudCAhPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSA0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzb2x2ZVJlZi5jdXJyZW50KG5ld0ZpbGUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcyA9IGJlZm9yZVVwbG9hZFJlZi5jdXJyZW50KG5ld0ZpbGUsIFtuZXdGaWxlXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHR5cGVvZiByZXMgIT09ICdib29sZWFuJyAmJiAhcmVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdiZWZvcmVVcGxvYWQgbXVzdCByZXR1cm4gYSBib29sZWFuIG9yIFByb21pc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KFwicmV0dXJuXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzID09PSB0cnVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVzb2x2ZVJlZi5jdXJyZW50KG5ld0ZpbGUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShyZXMgPT09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDEyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgcmVqZWN0UmVmLmN1cnJlbnQoJ25vdCB1cGxvYWQnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEyOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEocmVzICYmIHR5cGVvZiByZXMudGhlbiA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMTM7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDE2O1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcblxuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTY6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWRGaWxlID0gX2NvbnRleHQyLnNlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXNzZWRGaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfdHlwZSA9PT0gJ1tvYmplY3QgRmlsZV0nIHx8IF90eXBlID09PSAnW29iamVjdCBCbG9iXScpIG5ld0ZpbGUgPSBwYXNzZWRGaWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZVJlZi5jdXJyZW50KG5ld0ZpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NvbnRleHQyLm5leHQgPSAyNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5wcmV2ID0gMjI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY29udGV4dDIudDAgPSBfY29udGV4dDJbXCJjYXRjaFwiXSgxMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3RSZWYuY3VycmVudChfY29udGV4dDIudDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAyNTpcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLnN0b3AoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIF9jYWxsZWUyLCBudWxsLCBbWzEzLCAyMl1dKTtcbiAgICAgICAgICAgICAgfSkpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3gzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9yZWYzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KCksIHR5cGUsIHF1YWxpdHkpO1xuXG4gICAgICAgICAgY2FzZSAyMzpcbiAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQzLnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIF9jYWxsZWUzKTtcbiAgfSkpLCBbaGFzUm90YXRlLCBvbkNsb3NlLCBxdWFsaXR5LCByb3RhdGVWYWxdKTtcblxuICB2YXIgcmVuZGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gcmVuZGVyQ29tcG9uZW50KHRpdGxlT2ZNb2RhbCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgcmVuZGVyVXBsb2FkKCksIHNyYyAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChNb2RhbCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICB2aXNpYmxlOiB0cnVlLFxuICAgICAgd3JhcENsYXNzTmFtZTogcGtnICsgXCItbW9kYWxcIixcbiAgICAgIHRpdGxlOiB0aXRsZU9mTW9kYWwsXG4gICAgICBvbk9rOiBvbk9rLFxuICAgICAgb25DYW5jZWw6IG9uQ2xvc2UsXG4gICAgICBtYXNrQ2xvc2FibGU6IGZhbHNlLFxuICAgICAgZGVzdHJveU9uQ2xvc2U6IHRydWVcbiAgICB9LCBtb2RhbFByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRWFzeUNyb3AsIHtcbiAgICAgIHJlZjogcmVmLFxuICAgICAgc3JjOiBzcmMsXG4gICAgICBhc3BlY3Q6IGFzcGVjdCxcbiAgICAgIHNoYXBlOiBzaGFwZSxcbiAgICAgIGdyaWQ6IGdyaWQsXG4gICAgICBoYXNab29tOiBoYXNab29tLFxuICAgICAgem9vbVZhbDogem9vbVZhbCxcbiAgICAgIHJvdGF0ZVZhbDogcm90YXRlVmFsLFxuICAgICAgc2V0Wm9vbVZhbDogc2V0Wm9vbVZhbCxcbiAgICAgIHNldFJvdGF0ZVZhbDogc2V0Um90YXRlVmFsLFxuICAgICAgbWluWm9vbTogbWluWm9vbSxcbiAgICAgIG1heFpvb206IG1heFpvb20sXG4gICAgICBvbkNvbXBsZXRlOiBvbkNvbXBsZXRlLFxuICAgICAgY3JvcHBlclByb3BzOiBjcm9wcGVyUHJvcHNcbiAgICB9KSwgaGFzWm9vbSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHBrZyArIFwiLWNvbnRyb2wgem9vbVwiXG4gICAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwge1xuICAgICAgb25DbGljazogc3ViWm9vbVZhbCxcbiAgICAgIGRpc2FibGVkOiBpc01pblpvb21cbiAgICB9LCBcIlxcdUZGMERcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNsaWRlciwge1xuICAgICAgbWluOiBtaW5ab29tLFxuICAgICAgbWF4OiBtYXhab29tLFxuICAgICAgc3RlcDogWk9PTV9TVEVQLFxuICAgICAgdmFsdWU6IHpvb21WYWwsXG4gICAgICBvbkNoYW5nZTogc2V0Wm9vbVZhbFxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICBvbkNsaWNrOiBhZGRab29tVmFsLFxuICAgICAgZGlzYWJsZWQ6IGlzTWF4Wm9vbVxuICAgIH0sIFwiXFx1RkYwQlwiKSksIGhhc1JvdGF0ZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHBrZyArIFwiLWNvbnRyb2wgcm90YXRlXCJcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICBvbkNsaWNrOiBzdWJSb3RhdGVWYWwsXG4gICAgICBkaXNhYmxlZDogaXNNaW5Sb3RhdGVcbiAgICB9LCBcIlxcdTIxQkFcIiksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNsaWRlciwge1xuICAgICAgbWluOiBNSU5fUk9UQVRFLFxuICAgICAgbWF4OiBNQVhfUk9UQVRFLFxuICAgICAgc3RlcDogUk9UQVRFX1NURVAsXG4gICAgICB2YWx1ZTogcm90YXRlVmFsLFxuICAgICAgb25DaGFuZ2U6IHNldFJvdGF0ZVZhbFxuICAgIH0pLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICBvbkNsaWNrOiBhZGRSb3RhdGVWYWwsXG4gICAgICBkaXNhYmxlZDogaXNNYXhSb3RhdGVcbiAgICB9LCBcIlxcdTIxQkJcIikpKSk7XG4gIH07XG5cbiAgaWYgKG1vZGFsVGl0bGUpIHJldHVybiByZW5kZXJDb21wb25lbnQobW9kYWxUaXRsZSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChMb2NhbGVSZWNlaXZlciwgbnVsbCwgZnVuY3Rpb24gKGxvY2FsZSwgbG9jYWxlQ29kZSkge1xuICAgIHJldHVybiByZW5kZXJDb21wb25lbnQobG9jYWxlQ29kZSA9PT0gJ3poLWNuJyA/ICfnvJbovpHlm77niYcnIDogJ0VkaXQgaW1hZ2UnKTtcbiAgfSk7XG59KTtcbkltZ0Nyb3AucHJvcFR5cGVzID0ge1xuICBhc3BlY3Q6IHQubnVtYmVyLFxuICBzaGFwZTogdC5vbmVPZihbJ3JlY3QnLCAncm91bmQnXSksXG4gIGdyaWQ6IHQuYm9vbCxcbiAgcXVhbGl0eTogdC5udW1iZXIsXG4gIHpvb206IHQuYm9vbCxcbiAgcm90YXRlOiB0LmJvb2wsXG4gIG1pblpvb206IHQubnVtYmVyLFxuICBtYXhab29tOiB0Lm51bWJlcixcbiAgZmlsbENvbG9yOiB0LnN0cmluZyxcbiAgbW9kYWxUaXRsZTogdC5zdHJpbmcsXG4gIG1vZGFsV2lkdGg6IHQub25lT2ZUeXBlKFt0Lm51bWJlciwgdC5zdHJpbmddKSxcbiAgbW9kYWxPazogdC5zdHJpbmcsXG4gIG1vZGFsQ2FuY2VsOiB0LnN0cmluZyxcbiAgYmVmb3JlQ3JvcDogdC5mdW5jLFxuICBjcm9wcGVyUHJvcHM6IHQub2JqZWN0LFxuICBjaGlsZHJlbjogdC5ub2RlXG59O1xuSW1nQ3JvcC5kZWZhdWx0UHJvcHMgPSB7XG4gIGFzcGVjdDogMSxcbiAgc2hhcGU6ICdyZWN0JyxcbiAgZ3JpZDogZmFsc2UsXG4gIHF1YWxpdHk6IDAuNCxcbiAgem9vbTogdHJ1ZSxcbiAgcm90YXRlOiBmYWxzZSxcbiAgbWluWm9vbTogMSxcbiAgbWF4Wm9vbTogMyxcbiAgZmlsbENvbG9yOiAnd2hpdGUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWdDcm9wO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3NyYy9ub3JtYWxpemVXaGVlbC5qcycpO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgRXhlY3V0aW9uRW52aXJvbm1lbnRcbiAqL1xuXG4vKmpzbGludCBldmlsOiB0cnVlICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhblVzZURPTSA9ICEhKFxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnRcbik7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczpcbiAgICBjYW5Vc2VET00gJiYgISEod2luZG93LmFkZEV2ZW50TGlzdGVuZXIgfHwgd2luZG93LmF0dGFjaEV2ZW50KSxcblxuICBjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlbixcblxuICBpc0luV29ya2VyOiAhY2FuVXNlRE9NIC8vIEZvciBub3csIHRoaXMgaXMgdHJ1ZSAtIG1pZ2h0IGNoYW5nZSBpbiB0aGUgZnV0dXJlLlxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4ZWN1dGlvbkVudmlyb25tZW50O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAwNC1wcmVzZW50IEZhY2Vib29rLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBVc2VyQWdlbnRfREVQUkVDQVRFRFxuICovXG5cbi8qKlxuICogIFByb3ZpZGVzIGVudGlyZWx5IGNsaWVudC1zaWRlIFVzZXIgQWdlbnQgYW5kIE9TIGRldGVjdGlvbi4gWW91IHNob3VsZCBwcmVmZXJcbiAqICB0aGUgbm9uLWRlcHJlY2F0ZWQgVXNlckFnZW50IG1vZHVsZSB3aGVuIHBvc3NpYmxlLCB3aGljaCBleHBvc2VzIG91clxuICogIGF1dGhvcml0YXRpdmUgc2VydmVyLXNpZGUgUEhQLWJhc2VkIGRldGVjdGlvbiB0byB0aGUgY2xpZW50LlxuICpcbiAqICBVc2FnZSBpcyBzdHJhaWdodGZvcndhcmQ6XG4gKlxuICogICAgaWYgKFVzZXJBZ2VudF9ERVBSRUNBVEVELmllKCkpIHtcbiAqICAgICAgLy8gIElFXG4gKiAgICB9XG4gKlxuICogIFlvdSBjYW4gYWxzbyBkbyB2ZXJzaW9uIGNoZWNrczpcbiAqXG4gKiAgICBpZiAoVXNlckFnZW50X0RFUFJFQ0FURUQuaWUoKSA+PSA3KSB7XG4gKiAgICAgIC8vICBJRTcgb3IgYmV0dGVyXG4gKiAgICB9XG4gKlxuICogIFRoZSBicm93c2VyIGZ1bmN0aW9ucyB3aWxsIHJldHVybiBOYU4gaWYgdGhlIGJyb3dzZXIgZG9lcyBub3QgbWF0Y2gsIHNvXG4gKiAgeW91IGNhbiBhbHNvIGRvIHZlcnNpb24gY29tcGFyZXMgdGhlIG90aGVyIHdheTpcbiAqXG4gKiAgICBpZiAoVXNlckFnZW50X0RFUFJFQ0FURUQuaWUoKSA8IDcpIHtcbiAqICAgICAgLy8gIElFNiBvciB3b3JzZVxuICogICAgfVxuICpcbiAqICBOb3RlIHRoYXQgdGhlIHZlcnNpb24gaXMgYSBmbG9hdCBhbmQgbWF5IGluY2x1ZGUgYSBtaW5vciB2ZXJzaW9uIG51bWJlcixcbiAqICBzbyB5b3Ugc2hvdWxkIGFsd2F5cyB1c2UgcmFuZ2Ugb3BlcmF0b3JzIHRvIHBlcmZvcm0gY29tcGFyaXNvbnMsIG5vdFxuICogIHN0cmljdCBlcXVhbGl0eS5cbiAqXG4gKiAgKipOb3RlOioqIFlvdSBzaG91bGQgKipzdHJvbmdseSoqIHByZWZlciBjYXBhYmlsaXR5IGRldGVjdGlvbiB0byBicm93c2VyXG4gKiAgdmVyc2lvbiBkZXRlY3Rpb24gd2hlcmUgaXQncyByZWFzb25hYmxlOlxuICpcbiAqICAgIGh0dHA6Ly93d3cucXVpcmtzbW9kZS5vcmcvanMvc3VwcG9ydC5odG1sXG4gKlxuICogIEZ1cnRoZXIsIHdlIGhhdmUgYSBsYXJnZSBudW1iZXIgb2YgbWF0dXJlIHdyYXBwZXIgZnVuY3Rpb25zIGFuZCBjbGFzc2VzXG4gKiAgd2hpY2ggYWJzdHJhY3QgYXdheSBtYW55IGJyb3dzZXIgaXJyZWd1bGFyaXRpZXMuIENoZWNrIHRoZSBkb2N1bWVudGF0aW9uLFxuICogIGdyZXAgZm9yIHRoaW5ncywgb3IgYXNrIG9uIGphdmFzY3JpcHRAbGlzdHMuZmFjZWJvb2suY29tIGJlZm9yZSB3cml0aW5nIHlldFxuICogIGFub3RoZXIgY29weSBvZiBcImV2ZW50IHx8IHdpbmRvdy5ldmVudFwiLlxuICpcbiAqL1xuXG52YXIgX3BvcHVsYXRlZCA9IGZhbHNlO1xuXG4vLyBCcm93c2Vyc1xudmFyIF9pZSwgX2ZpcmVmb3gsIF9vcGVyYSwgX3dlYmtpdCwgX2Nocm9tZTtcblxuLy8gQWN0dWFsIElFIGJyb3dzZXIgZm9yIGNvbXBhdGliaWxpdHkgbW9kZVxudmFyIF9pZV9yZWFsX3ZlcnNpb247XG5cbi8vIFBsYXRmb3Jtc1xudmFyIF9vc3gsIF93aW5kb3dzLCBfbGludXgsIF9hbmRyb2lkO1xuXG4vLyBBcmNoaXRlY3R1cmVzXG52YXIgX3dpbjY0O1xuXG4vLyBEZXZpY2VzXG52YXIgX2lwaG9uZSwgX2lwYWQsIF9uYXRpdmU7XG5cbnZhciBfbW9iaWxlO1xuXG5mdW5jdGlvbiBfcG9wdWxhdGUoKSB7XG4gIGlmIChfcG9wdWxhdGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX3BvcHVsYXRlZCA9IHRydWU7XG5cbiAgLy8gVG8gd29yayBhcm91bmQgYnVnZ3kgSlMgbGlicmFyaWVzIHRoYXQgY2FuJ3QgaGFuZGxlIG11bHRpLWRpZ2l0XG4gIC8vIHZlcnNpb24gbnVtYmVycywgT3BlcmEgMTAncyB1c2VyIGFnZW50IHN0cmluZyBjbGFpbXMgaXQncyBPcGVyYVxuICAvLyA5LCB0aGVuIGxhdGVyIGluY2x1ZGVzIGEgVmVyc2lvbi9YLlkgZmllbGQ6XG4gIC8vXG4gIC8vIE9wZXJhLzkuODAgKGZvbykgUHJlc3RvLzIuMi4xNSBWZXJzaW9uLzEwLjEwXG4gIHZhciB1YXMgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICB2YXIgYWdlbnQgPSAvKD86TVNJRS4oXFxkK1xcLlxcZCspKXwoPzooPzpGaXJlZm94fEdyYW5QYXJhZGlzb3xJY2V3ZWFzZWwpLihcXGQrXFwuXFxkKykpfCg/Ok9wZXJhKD86LitWZXJzaW9uLnwuKShcXGQrXFwuXFxkKykpfCg/OkFwcGxlV2ViS2l0LihcXGQrKD86XFwuXFxkKyk/KSl8KD86VHJpZGVudFxcL1xcZCtcXC5cXGQrLipydjooXFxkK1xcLlxcZCspKS8uZXhlYyh1YXMpO1xuICB2YXIgb3MgICAgPSAvKE1hYyBPUyBYKXwoV2luZG93cyl8KExpbnV4KS8uZXhlYyh1YXMpO1xuXG4gIF9pcGhvbmUgPSAvXFxiKGlQaG9uZXxpUFthb11kKS8uZXhlYyh1YXMpO1xuICBfaXBhZCA9IC9cXGIoaVBbYW9dZCkvLmV4ZWModWFzKTtcbiAgX2FuZHJvaWQgPSAvQW5kcm9pZC9pLmV4ZWModWFzKTtcbiAgX25hdGl2ZSA9IC9GQkFOXFwvXFx3KzsvaS5leGVjKHVhcyk7XG4gIF9tb2JpbGUgPSAvTW9iaWxlL2kuZXhlYyh1YXMpO1xuXG4gIC8vIE5vdGUgdGhhdCB0aGUgSUUgdGVhbSBibG9nIHdvdWxkIGhhdmUgeW91IGJlbGlldmUgeW91IHNob3VsZCBiZSBjaGVja2luZ1xuICAvLyBmb3IgJ1dpbjY0OyB4NjQnLiAgQnV0IE1TRE4gdGhlbiByZXZlYWxzIHRoYXQgeW91IGNhbiBhY3R1YWxseSBiZSBjb21pbmdcbiAgLy8gZnJvbSBlaXRoZXIgeDY0IG9yIGlhNjQ7ICBzbyB1bHRpbWF0ZWx5LCB5b3Ugc2hvdWxkIGp1c3QgY2hlY2sgZm9yIFdpbjY0XG4gIC8vIGFzIGluIGluZGljYXRvciBvZiB3aGV0aGVyIHlvdSdyZSBpbiA2NC1iaXQgSUUuICAzMi1iaXQgSUUgb24gNjQtYml0XG4gIC8vIFdpbmRvd3Mgd2lsbCBzZW5kICdXT1c2NCcgaW5zdGVhZC5cbiAgX3dpbjY0ID0gISEoL1dpbjY0Ly5leGVjKHVhcykpO1xuXG4gIGlmIChhZ2VudCkge1xuICAgIF9pZSA9IGFnZW50WzFdID8gcGFyc2VGbG9hdChhZ2VudFsxXSkgOiAoXG4gICAgICAgICAgYWdlbnRbNV0gPyBwYXJzZUZsb2F0KGFnZW50WzVdKSA6IE5hTik7XG4gICAgLy8gSUUgY29tcGF0aWJpbGl0eSBtb2RlXG4gICAgaWYgKF9pZSAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudE1vZGUpIHtcbiAgICAgIF9pZSA9IGRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgICB9XG4gICAgLy8gZ3JhYiB0aGUgXCJ0cnVlXCIgaWUgdmVyc2lvbiBmcm9tIHRoZSB0cmlkZW50IHRva2VuIGlmIGF2YWlsYWJsZVxuICAgIHZhciB0cmlkZW50ID0gLyg/OlRyaWRlbnRcXC8oXFxkKy5cXGQrKSkvLmV4ZWModWFzKTtcbiAgICBfaWVfcmVhbF92ZXJzaW9uID0gdHJpZGVudCA/IHBhcnNlRmxvYXQodHJpZGVudFsxXSkgKyA0IDogX2llO1xuXG4gICAgX2ZpcmVmb3ggPSBhZ2VudFsyXSA/IHBhcnNlRmxvYXQoYWdlbnRbMl0pIDogTmFOO1xuICAgIF9vcGVyYSAgID0gYWdlbnRbM10gPyBwYXJzZUZsb2F0KGFnZW50WzNdKSA6IE5hTjtcbiAgICBfd2Via2l0ICA9IGFnZW50WzRdID8gcGFyc2VGbG9hdChhZ2VudFs0XSkgOiBOYU47XG4gICAgaWYgKF93ZWJraXQpIHtcbiAgICAgIC8vIFdlIGRvIG5vdCBhZGQgdGhlIHJlZ2V4cCB0byB0aGUgYWJvdmUgdGVzdCwgYmVjYXVzZSBpdCB3aWxsIGFsd2F5c1xuICAgICAgLy8gbWF0Y2ggJ3NhZmFyaScgb25seSBzaW5jZSAnQXBwbGVXZWJLaXQnIGFwcGVhcnMgYmVmb3JlICdDaHJvbWUnIGluXG4gICAgICAvLyB0aGUgdXNlckFnZW50IHN0cmluZy5cbiAgICAgIGFnZW50ID0gLyg/OkNocm9tZVxcLyhcXGQrXFwuXFxkKykpLy5leGVjKHVhcyk7XG4gICAgICBfY2hyb21lID0gYWdlbnQgJiYgYWdlbnRbMV0gPyBwYXJzZUZsb2F0KGFnZW50WzFdKSA6IE5hTjtcbiAgICB9IGVsc2Uge1xuICAgICAgX2Nocm9tZSA9IE5hTjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgX2llID0gX2ZpcmVmb3ggPSBfb3BlcmEgPSBfY2hyb21lID0gX3dlYmtpdCA9IE5hTjtcbiAgfVxuXG4gIGlmIChvcykge1xuICAgIGlmIChvc1sxXSkge1xuICAgICAgLy8gRGV0ZWN0IE9TIFggdmVyc2lvbi4gIElmIG5vIHZlcnNpb24gbnVtYmVyIG1hdGNoZXMsIHNldCBfb3N4IHRvIHRydWUuXG4gICAgICAvLyBWZXJzaW9uIGV4YW1wbGVzOiAgMTAsIDEwXzZfMSwgMTAuN1xuICAgICAgLy8gUGFyc2VzIHZlcnNpb24gbnVtYmVyIGFzIGEgZmxvYXQsIHRha2luZyBvbmx5IGZpcnN0IHR3byBzZXRzIG9mXG4gICAgICAvLyBkaWdpdHMuICBJZiBvbmx5IG9uZSBzZXQgb2YgZGlnaXRzIGlzIGZvdW5kLCByZXR1cm5zIGp1c3QgdGhlIG1ham9yXG4gICAgICAvLyB2ZXJzaW9uIG51bWJlci5cbiAgICAgIHZhciB2ZXIgPSAvKD86TWFjIE9TIFggKFxcZCsoPzpbLl9dXFxkKyk/KSkvLmV4ZWModWFzKTtcblxuICAgICAgX29zeCA9IHZlciA/IHBhcnNlRmxvYXQodmVyWzFdLnJlcGxhY2UoJ18nLCAnLicpKSA6IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIF9vc3ggPSBmYWxzZTtcbiAgICB9XG4gICAgX3dpbmRvd3MgPSAhIW9zWzJdO1xuICAgIF9saW51eCAgID0gISFvc1szXTtcbiAgfSBlbHNlIHtcbiAgICBfb3N4ID0gX3dpbmRvd3MgPSBfbGludXggPSBmYWxzZTtcbiAgfVxufVxuXG52YXIgVXNlckFnZW50X0RFUFJFQ0FURUQgPSB7XG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgSW50ZXJuZXQgRXhwbG9yZXIuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIGllOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2llO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB3ZSdyZSBpbiBJbnRlcm5ldCBFeHBsb3JlciBjb21wYXRpYmlsaXR5IG1vZGUuXG4gICAqXG4gICAqIEByZXR1cm4gYm9vbCB0cnVlIGlmIGluIGNvbXBhdGliaWxpdHkgbW9kZSwgZmFsc2UgaWZcbiAgICogbm90IGNvbXBhdGliaWxpdHkgbW9kZSBvciBub3QgaWVcbiAgICovXG4gIGllQ29tcGF0aWJpbGl0eU1vZGU6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCAoX2llX3JlYWxfdmVyc2lvbiA+IF9pZSk7XG4gIH0sXG5cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYnJvd3NlciBpcyA2NC1iaXQgSUUuICBSZWFsbHksIHRoaXMgaXMga2luZCBvZiB3ZWFrIHNhdWNlOyAgd2VcbiAgICogb25seSBuZWVkIHRoaXMgYmVjYXVzZSBTa3lwZSBjYW4ndCBoYW5kbGUgNjQtYml0IElFIHlldC4gIFdlIG5lZWQgdG8gcmVtb3ZlXG4gICAqIHRoaXMgd2hlbiB3ZSBkb24ndCBuZWVkIGl0IC0tIHRyYWNrZWQgYnkgIzYwMTk1Ny5cbiAgICovXG4gIGllNjQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBVc2VyQWdlbnRfREVQUkVDQVRFRC5pZSgpICYmIF93aW42NDtcbiAgfSxcblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSBVQSBpcyBGaXJlZm94LlxuICAgKlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxOYU4gVmVyc2lvbiBudW1iZXIgKGlmIG1hdGNoKSBvciBOYU4uXG4gICAqL1xuICBmaXJlZm94OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2ZpcmVmb3g7XG4gIH0sXG5cblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSBVQSBpcyBPcGVyYS5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgb3BlcmE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfb3BlcmE7XG4gIH0sXG5cblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSBVQSBpcyBXZWJLaXQuXG4gICAqXG4gICAqXG4gICAqICBAcmV0dXJuIGZsb2F0fE5hTiBWZXJzaW9uIG51bWJlciAoaWYgbWF0Y2gpIG9yIE5hTi5cbiAgICovXG4gIHdlYmtpdDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF93ZWJraXQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBGb3IgUHVzaFxuICAgKiAgV0lMTCBCRSBSRU1PVkVEIFZFUlkgU09PTi4gVXNlIFVzZXJBZ2VudF9ERVBSRUNBVEVELndlYmtpdFxuICAgKi9cbiAgc2FmYXJpOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gVXNlckFnZW50X0RFUFJFQ0FURUQud2Via2l0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgVUEgaXMgYSBDaHJvbWUgYnJvd3Nlci5cbiAgICpcbiAgICpcbiAgICogIEByZXR1cm4gZmxvYXR8TmFOIFZlcnNpb24gbnVtYmVyIChpZiBtYXRjaCkgb3IgTmFOLlxuICAgKi9cbiAgY2hyb21lIDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9jaHJvbWU7XG4gIH0sXG5cblxuICAvKipcbiAgICogIENoZWNrIGlmIHRoZSB1c2VyIGlzIHJ1bm5pbmcgV2luZG93cy5cbiAgICpcbiAgICogIEByZXR1cm4gYm9vbCBgdHJ1ZScgaWYgdGhlIHVzZXIncyBPUyBpcyBXaW5kb3dzLlxuICAgKi9cbiAgd2luZG93czogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF93aW5kb3dzO1xuICB9LFxuXG5cbiAgLyoqXG4gICAqICBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIE1hYyBPUyBYLlxuICAgKlxuICAgKiAgQHJldHVybiBmbG9hdHxib29sICAgUmV0dXJucyBhIGZsb2F0IGlmIGEgdmVyc2lvbiBudW1iZXIgaXMgZGV0ZWN0ZWQsXG4gICAqICAgICAgICAgICAgICAgICAgICAgICBvdGhlcndpc2UgdHJ1ZS9mYWxzZS5cbiAgICovXG4gIG9zeDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9vc3g7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSB1c2VyIGlzIHJ1bm5pbmcgTGludXguXG4gICAqXG4gICAqIEByZXR1cm4gYm9vbCBgdHJ1ZScgaWYgdGhlIHVzZXIncyBPUyBpcyBzb21lIGZsYXZvciBvZiBMaW51eC5cbiAgICovXG4gIGxpbnV4OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgX2xpbnV4O1xuICB9LFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgdXNlciBpcyBydW5uaW5nIG9uIGFuIGlQaG9uZSBvciBpUG9kIHBsYXRmb3JtLlxuICAgKlxuICAgKiBAcmV0dXJuIGJvb2wgYHRydWUnIGlmIHRoZSB1c2VyIGlzIHJ1bm5pbmcgc29tZSBmbGF2b3Igb2YgdGhlXG4gICAqICAgIGlQaG9uZSBPUy5cbiAgICovXG4gIGlwaG9uZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9pcGhvbmU7XG4gIH0sXG5cbiAgbW9iaWxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gX3BvcHVsYXRlKCkgfHwgKF9pcGhvbmUgfHwgX2lwYWQgfHwgX2FuZHJvaWQgfHwgX21vYmlsZSk7XG4gIH0sXG5cbiAgbmF0aXZlQXBwOiBmdW5jdGlvbigpIHtcbiAgICAvLyB3ZWJ2aWV3cyBpbnNpZGUgb2YgdGhlIG5hdGl2ZSBhcHBzXG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9uYXRpdmU7XG4gIH0sXG5cbiAgYW5kcm9pZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIF9wb3B1bGF0ZSgpIHx8IF9hbmRyb2lkO1xuICB9LFxuXG4gIGlwYWQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcG9wdWxhdGUoKSB8fCBfaXBhZDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBVc2VyQWdlbnRfREVQUkVDQVRFRDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBpc0V2ZW50U3VwcG9ydGVkXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciB1c2VIYXNGZWF0dXJlO1xuaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICB1c2VIYXNGZWF0dXJlID1cbiAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbiAmJlxuICAgIGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUgJiZcbiAgICAvLyBhbHdheXMgcmV0dXJucyB0cnVlIGluIG5ld2VyIGJyb3dzZXJzIGFzIHBlciB0aGUgc3RhbmRhcmQuXG4gICAgLy8gQHNlZSBodHRwOi8vZG9tLnNwZWMud2hhdHdnLm9yZy8jZG9tLWRvbWltcGxlbWVudGF0aW9uLWhhc2ZlYXR1cmVcbiAgICBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCcnLCAnJykgIT09IHRydWU7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGFuIGV2ZW50IGlzIHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBleGVjdXRpb24gZW52aXJvbm1lbnQuXG4gKlxuICogTk9URTogVGhpcyB3aWxsIG5vdCB3b3JrIGNvcnJlY3RseSBmb3Igbm9uLWdlbmVyaWMgZXZlbnRzIHN1Y2ggYXMgYGNoYW5nZWAsXG4gKiBgcmVzZXRgLCBgbG9hZGAsIGBlcnJvcmAsIGFuZCBgc2VsZWN0YC5cbiAqXG4gKiBCb3Jyb3dzIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVTdWZmaXggRXZlbnQgbmFtZSwgZS5nLiBcImNsaWNrXCIuXG4gKiBAcGFyYW0gez9ib29sZWFufSBjYXB0dXJlIENoZWNrIGlmIHRoZSBjYXB0dXJlIHBoYXNlIGlzIHN1cHBvcnRlZC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGV2ZW50IGlzIHN1cHBvcnRlZC5cbiAqIEBpbnRlcm5hbFxuICogQGxpY2Vuc2UgTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4gKi9cbmZ1bmN0aW9uIGlzRXZlbnRTdXBwb3J0ZWQoZXZlbnROYW1lU3VmZml4LCBjYXB0dXJlKSB7XG4gIGlmICghRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NIHx8XG4gICAgICBjYXB0dXJlICYmICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIGRvY3VtZW50KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBldmVudE5hbWUgPSAnb24nICsgZXZlbnROYW1lU3VmZml4O1xuICB2YXIgaXNTdXBwb3J0ZWQgPSBldmVudE5hbWUgaW4gZG9jdW1lbnQ7XG5cbiAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoZXZlbnROYW1lLCAncmV0dXJuOycpO1xuICAgIGlzU3VwcG9ydGVkID0gdHlwZW9mIGVsZW1lbnRbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJztcbiAgfVxuXG4gIGlmICghaXNTdXBwb3J0ZWQgJiYgdXNlSGFzRmVhdHVyZSAmJiBldmVudE5hbWVTdWZmaXggPT09ICd3aGVlbCcpIHtcbiAgICAvLyBUaGlzIGlzIHRoZSBvbmx5IHdheSB0byB0ZXN0IHN1cHBvcnQgZm9yIHRoZSBgd2hlZWxgIGV2ZW50IGluIElFOSsuXG4gICAgaXNTdXBwb3J0ZWQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5oYXNGZWF0dXJlKCdFdmVudHMud2hlZWwnLCAnMy4wJyk7XG4gIH1cblxuICByZXR1cm4gaXNTdXBwb3J0ZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFdmVudFN1cHBvcnRlZDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIG5vcm1hbGl6ZVdoZWVsXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFVzZXJBZ2VudF9ERVBSRUNBVEVEID0gcmVxdWlyZSgnLi9Vc2VyQWdlbnRfREVQUkVDQVRFRCcpO1xuXG52YXIgaXNFdmVudFN1cHBvcnRlZCA9IHJlcXVpcmUoJy4vaXNFdmVudFN1cHBvcnRlZCcpO1xuXG5cbi8vIFJlYXNvbmFibGUgZGVmYXVsdHNcbnZhciBQSVhFTF9TVEVQICA9IDEwO1xudmFyIExJTkVfSEVJR0hUID0gNDA7XG52YXIgUEFHRV9IRUlHSFQgPSA4MDA7XG5cbi8qKlxuICogTW91c2Ugd2hlZWwgKGFuZCAyLWZpbmdlciB0cmFja3BhZCkgc3VwcG9ydCBvbiB0aGUgd2ViIHN1Y2tzLiAgSXQgaXNcbiAqIGNvbXBsaWNhdGVkLCB0aHVzIHRoaXMgZG9jIGlzIGxvbmcgYW5kIChob3BlZnVsbHkpIGRldGFpbGVkIGVub3VnaCB0byBhbnN3ZXJcbiAqIHlvdXIgcXVlc3Rpb25zLlxuICpcbiAqIElmIHlvdSBuZWVkIHRvIHJlYWN0IHRvIHRoZSBtb3VzZSB3aGVlbCBpbiBhIHByZWRpY3RhYmxlIHdheSwgdGhpcyBjb2RlIGlzXG4gKiBsaWtlIHlvdXIgYmVzdGVzdCBmcmllbmQuICogaHVncyAqXG4gKlxuICogQXMgb2YgdG9kYXksIHRoZXJlIGFyZSA0IERPTSBldmVudCB0eXBlcyB5b3UgY2FuIGxpc3RlbiB0bzpcbiAqXG4gKiAgICd3aGVlbCcgICAgICAgICAgICAgICAgLS0gQ2hyb21lKDMxKyksIEZGKDE3KyksIElFKDkrKVxuICogICAnbW91c2V3aGVlbCcgICAgICAgICAgIC0tIENocm9tZSwgSUUoNispLCBPcGVyYSwgU2FmYXJpXG4gKiAgICdNb3pNb3VzZVBpeGVsU2Nyb2xsJyAgLS0gRkYoMy41IG9ubHkhKSAoMjAxMC0yMDEzKSAtLSBkb24ndCBib3RoZXIhXG4gKiAgICdET01Nb3VzZVNjcm9sbCcgICAgICAgLS0gRkYoMC45LjcrKSBzaW5jZSAyMDAzXG4gKlxuICogU28gd2hhdCB0byBkbz8gIFRoZSBpcyB0aGUgYmVzdDpcbiAqXG4gKiAgIG5vcm1hbGl6ZVdoZWVsLmdldEV2ZW50VHlwZSgpO1xuICpcbiAqIEluIHlvdXIgZXZlbnQgY2FsbGJhY2ssIHVzZSB0aGlzIGNvZGUgdG8gZ2V0IHNhbmUgaW50ZXJwcmV0YXRpb24gb2YgdGhlXG4gKiBkZWx0YXMuICBUaGlzIGNvZGUgd2lsbCByZXR1cm4gYW4gb2JqZWN0IHdpdGggcHJvcGVydGllczpcbiAqXG4gKiAgIHNwaW5YICAgLS0gbm9ybWFsaXplZCBzcGluIHNwZWVkICh1c2UgZm9yIHpvb20pIC0geCBwbGFuZVxuICogICBzcGluWSAgIC0tIFwiIC0geSBwbGFuZVxuICogICBwaXhlbFggIC0tIG5vcm1hbGl6ZWQgZGlzdGFuY2UgKHRvIHBpeGVscykgLSB4IHBsYW5lXG4gKiAgIHBpeGVsWSAgLS0gXCIgLSB5IHBsYW5lXG4gKlxuICogV2hlZWwgdmFsdWVzIGFyZSBwcm92aWRlZCBieSB0aGUgYnJvd3NlciBhc3N1bWluZyB5b3UgYXJlIHVzaW5nIHRoZSB3aGVlbCB0b1xuICogc2Nyb2xsIGEgd2ViIHBhZ2UgYnkgYSBudW1iZXIgb2YgbGluZXMgb3IgcGl4ZWxzIChvciBwYWdlcykuICBWYWx1ZXMgY2FuIHZhcnlcbiAqIHNpZ25pZmljYW50bHkgb24gZGlmZmVyZW50IHBsYXRmb3JtcyBhbmQgYnJvd3NlcnMsIGZvcmdldHRpbmcgdGhhdCB5b3UgY2FuXG4gKiBzY3JvbGwgYXQgZGlmZmVyZW50IHNwZWVkcy4gIFNvbWUgZGV2aWNlcyAobGlrZSB0cmFja3BhZHMpIGVtaXQgbW9yZSBldmVudHNcbiAqIGF0IHNtYWxsZXIgaW5jcmVtZW50cyB3aXRoIGZpbmUgZ3JhbnVsYXJpdHksIGFuZCBzb21lIGVtaXQgbWFzc2l2ZSBqdW1wcyB3aXRoXG4gKiBsaW5lYXIgc3BlZWQgb3IgYWNjZWxlcmF0aW9uLlxuICpcbiAqIFRoaXMgY29kZSBkb2VzIGl0cyBiZXN0IHRvIG5vcm1hbGl6ZSB0aGUgZGVsdGFzIGZvciB5b3U6XG4gKlxuICogICAtIHNwaW4gaXMgdHJ5aW5nIHRvIG5vcm1hbGl6ZSBob3cgZmFyIHRoZSB3aGVlbCB3YXMgc3B1biAob3IgdHJhY2twYWRcbiAqICAgICBkcmFnZ2VkKS4gIFRoaXMgaXMgc3VwZXIgdXNlZnVsIGZvciB6b29tIHN1cHBvcnQgd2hlcmUgeW91IHdhbnQgdG9cbiAqICAgICB0aHJvdyBhd2F5IHRoZSBjaHVua3kgc2Nyb2xsIHN0ZXBzIG9uIHRoZSBQQyBhbmQgbWFrZSB0aG9zZSBlcXVhbCB0b1xuICogICAgIHRoZSBzbG93IGFuZCBzbW9vdGggdGlueSBzdGVwcyBvbiB0aGUgTWFjLiBLZXkgZGF0YTogVGhpcyBjb2RlIHRyaWVzIHRvXG4gKiAgICAgcmVzb2x2ZSBhIHNpbmdsZSBzbG93IHN0ZXAgb24gYSB3aGVlbCB0byAxLlxuICpcbiAqICAgLSBwaXhlbCBpcyBub3JtYWxpemluZyB0aGUgZGVzaXJlZCBzY3JvbGwgZGVsdGEgaW4gcGl4ZWwgdW5pdHMuICBZb3UnbGxcbiAqICAgICBnZXQgdGhlIGNyYXp5IGRpZmZlcmVuY2VzIGJldHdlZW4gYnJvd3NlcnMsIGJ1dCBhdCBsZWFzdCBpdCdsbCBiZSBpblxuICogICAgIHBpeGVscyFcbiAqXG4gKiAgIC0gcG9zaXRpdmUgdmFsdWUgaW5kaWNhdGVzIHNjcm9sbGluZyBET1dOL1JJR0hULCBuZWdhdGl2ZSBVUC9MRUZULiAgVGhpc1xuICogICAgIHNob3VsZCB0cmFuc2xhdGUgdG8gcG9zaXRpdmUgdmFsdWUgem9vbWluZyBJTiwgbmVnYXRpdmUgem9vbWluZyBPVVQuXG4gKiAgICAgVGhpcyBtYXRjaGVzIHRoZSBuZXdlciAnd2hlZWwnIGV2ZW50LlxuICpcbiAqIFdoeSBhcmUgdGhlcmUgc3BpblgsIHNwaW5ZIChvciBwaXhlbHMpP1xuICpcbiAqICAgLSBzcGluWCBpcyBhIDItZmluZ2VyIHNpZGUgZHJhZyBvbiB0aGUgdHJhY2twYWQsIGFuZCBhIHNoaWZ0ICsgd2hlZWwgdHVyblxuICogICAgIHdpdGggYSBtb3VzZS4gIEl0IHJlc3VsdHMgaW4gc2lkZS1zY3JvbGxpbmcgaW4gdGhlIGJyb3dzZXIgYnkgZGVmYXVsdC5cbiAqXG4gKiAgIC0gc3BpblkgaXMgd2hhdCB5b3UgZXhwZWN0IC0tIGl0J3MgdGhlIGNsYXNzaWMgYXhpcyBvZiBhIG1vdXNlIHdoZWVsLlxuICpcbiAqICAgLSBJIGRyb3BwZWQgc3BpblovcGl4ZWxaLiAgSXQgaXMgc3VwcG9ydGVkIGJ5IHRoZSBET00gMyAnd2hlZWwnIGV2ZW50IGFuZFxuICogICAgIHByb2JhYmx5IGlzIGJ5IGJyb3dzZXJzIGluIGNvbmp1bmN0aW9uIHdpdGggZmFuY3kgM0QgY29udHJvbGxlcnMgLi4gYnV0XG4gKiAgICAgeW91IGtub3cuXG4gKlxuICogSW1wbGVtZW50YXRpb24gaW5mbzpcbiAqXG4gKiBFeGFtcGxlcyBvZiAnd2hlZWwnIGV2ZW50IGlmIHlvdSBzY3JvbGwgc2xvd2x5IChkb3duKSBieSBvbmUgc3RlcCB3aXRoIGFuXG4gKiBhdmVyYWdlIG1vdXNlOlxuICpcbiAqICAgT1MgWCArIENocm9tZSAgKG1vdXNlKSAgICAgLSAgICA0ICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhIC0xMjApXG4gKiAgIE9TIFggKyBTYWZhcmkgIChtb3VzZSkgICAgIC0gIE4vQSAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgLTEyKVxuICogICBPUyBYICsgRmlyZWZveCAobW91c2UpICAgICAtICAgIDAuMSBsaW5lICBkZWx0YSAgKHdoZWVsRGVsdGEgIE4vQSlcbiAqICAgV2luOCArIENocm9tZSAgKG1vdXNlKSAgICAgLSAgMTAwICAgcGl4ZWwgZGVsdGEgICh3aGVlbERlbHRhIC0xMjApXG4gKiAgIFdpbjggKyBGaXJlZm94IChtb3VzZSkgICAgIC0gICAgMyAgIGxpbmUgIGRlbHRhICAod2hlZWxEZWx0YSAtMTIwKVxuICpcbiAqIE9uIHRoZSB0cmFja3BhZDpcbiAqXG4gKiAgIE9TIFggKyBDaHJvbWUgICh0cmFja3BhZCkgIC0gICAgMiAgIHBpeGVsIGRlbHRhICAod2hlZWxEZWx0YSAgIC02KVxuICogICBPUyBYICsgRmlyZWZveCAodHJhY2twYWQpICAtICAgIDEgICBwaXhlbCBkZWx0YSAgKHdoZWVsRGVsdGEgIE4vQSlcbiAqXG4gKiBPbiBvdGhlci9vbGRlciBicm93c2Vycy4uIGl0J3MgbW9yZSBjb21wbGljYXRlZCBhcyB0aGVyZSBjYW4gYmUgbXVsdGlwbGUgYW5kXG4gKiBhbHNvIG1pc3NpbmcgZGVsdGEgdmFsdWVzLlxuICpcbiAqIFRoZSAnd2hlZWwnIGV2ZW50IGlzIG1vcmUgc3RhbmRhcmQ6XG4gKlxuICogaHR0cDovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudHMtd2hlZWxldmVudHNcbiAqXG4gKiBUaGUgYmFzaWNzIGlzIHRoYXQgaXQgaW5jbHVkZXMgYSB1bml0LCBkZWx0YU1vZGUgKHBpeGVscywgbGluZXMsIHBhZ2VzKSwgYW5kXG4gKiBkZWx0YVgsIGRlbHRhWSBhbmQgZGVsdGFaLiAgU29tZSBicm93c2VycyBwcm92aWRlIG90aGVyIHZhbHVlcyB0byBtYWludGFpblxuICogYmFja3dhcmQgY29tcGF0aWJpbGl0eSB3aXRoIG9sZGVyIGV2ZW50cy4gIFRob3NlIG90aGVyIHZhbHVlcyBoZWxwIHVzXG4gKiBiZXR0ZXIgbm9ybWFsaXplIHNwaW4gc3BlZWQuICBFeGFtcGxlIG9mIHdoYXQgdGhlIGJyb3dzZXJzIHByb3ZpZGU6XG4gKlxuICogICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXZlbnQud2hlZWxEZWx0YSB8IGV2ZW50LmRldGFpbFxuICogICAgICAgIC0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS1cbiAqICAgICAgICAgIFNhZmFyaSB2NS9PUyBYICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gKiAgICAgICAgICBTYWZhcmkgdjUvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICAgICAgMFxuICogICAgICAgICBDaHJvbWUgdjE3L09TIFggIHwgICAgICAgLTEyMCAgICAgICB8ICAgICAgIDBcbiAqICAgICAgICAgQ2hyb21lIHYxNy9XaW43ICB8ICAgICAgIC0xMjAgICAgICAgfCAgICAgICAwXG4gKiAgICAgICAgICAgICAgICBJRTkvV2luNyAgfCAgICAgICAtMTIwICAgICAgIHwgICB1bmRlZmluZWRcbiAqICAgICAgICAgRmlyZWZveCB2NC9PUyBYICB8ICAgICB1bmRlZmluZWQgICAgfCAgICAgICAxXG4gKiAgICAgICAgIEZpcmVmb3ggdjQvV2luNyAgfCAgICAgdW5kZWZpbmVkICAgIHwgICAgICAgM1xuICpcbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplV2hlZWwoLypvYmplY3QqLyBldmVudCkgLypvYmplY3QqLyB7XG4gIHZhciBzWCA9IDAsIHNZID0gMCwgICAgICAgLy8gc3BpblgsIHNwaW5ZXG4gICAgICBwWCA9IDAsIHBZID0gMDsgICAgICAgLy8gcGl4ZWxYLCBwaXhlbFlcblxuICAvLyBMZWdhY3lcbiAgaWYgKCdkZXRhaWwnICAgICAgaW4gZXZlbnQpIHsgc1kgPSBldmVudC5kZXRhaWw7IH1cbiAgaWYgKCd3aGVlbERlbHRhJyAgaW4gZXZlbnQpIHsgc1kgPSAtZXZlbnQud2hlZWxEZWx0YSAvIDEyMDsgfVxuICBpZiAoJ3doZWVsRGVsdGFZJyBpbiBldmVudCkgeyBzWSA9IC1ldmVudC53aGVlbERlbHRhWSAvIDEyMDsgfVxuICBpZiAoJ3doZWVsRGVsdGFYJyBpbiBldmVudCkgeyBzWCA9IC1ldmVudC53aGVlbERlbHRhWCAvIDEyMDsgfVxuXG4gIC8vIHNpZGUgc2Nyb2xsaW5nIG9uIEZGIHdpdGggRE9NTW91c2VTY3JvbGxcbiAgaWYgKCAnYXhpcycgaW4gZXZlbnQgJiYgZXZlbnQuYXhpcyA9PT0gZXZlbnQuSE9SSVpPTlRBTF9BWElTICkge1xuICAgIHNYID0gc1k7XG4gICAgc1kgPSAwO1xuICB9XG5cbiAgcFggPSBzWCAqIFBJWEVMX1NURVA7XG4gIHBZID0gc1kgKiBQSVhFTF9TVEVQO1xuXG4gIGlmICgnZGVsdGFZJyBpbiBldmVudCkgeyBwWSA9IGV2ZW50LmRlbHRhWTsgfVxuICBpZiAoJ2RlbHRhWCcgaW4gZXZlbnQpIHsgcFggPSBldmVudC5kZWx0YVg7IH1cblxuICBpZiAoKHBYIHx8IHBZKSAmJiBldmVudC5kZWx0YU1vZGUpIHtcbiAgICBpZiAoZXZlbnQuZGVsdGFNb2RlID09IDEpIHsgICAgICAgICAgLy8gZGVsdGEgaW4gTElORSB1bml0c1xuICAgICAgcFggKj0gTElORV9IRUlHSFQ7XG4gICAgICBwWSAqPSBMSU5FX0hFSUdIVDtcbiAgICB9IGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsdGEgaW4gUEFHRSB1bml0c1xuICAgICAgcFggKj0gUEFHRV9IRUlHSFQ7XG4gICAgICBwWSAqPSBQQUdFX0hFSUdIVDtcbiAgICB9XG4gIH1cblxuICAvLyBGYWxsLWJhY2sgaWYgc3BpbiBjYW5ub3QgYmUgZGV0ZXJtaW5lZFxuICBpZiAocFggJiYgIXNYKSB7IHNYID0gKHBYIDwgMSkgPyAtMSA6IDE7IH1cbiAgaWYgKHBZICYmICFzWSkgeyBzWSA9IChwWSA8IDEpID8gLTEgOiAxOyB9XG5cbiAgcmV0dXJuIHsgc3BpblggIDogc1gsXG4gICAgICAgICAgIHNwaW5ZICA6IHNZLFxuICAgICAgICAgICBwaXhlbFggOiBwWCxcbiAgICAgICAgICAgcGl4ZWxZIDogcFkgfTtcbn1cblxuXG4vKipcbiAqIFRoZSBiZXN0IGNvbWJpbmF0aW9uIGlmIHlvdSBwcmVmZXIgc3BpblggKyBzcGluWSBub3JtYWxpemF0aW9uLiAgSXQgZmF2b3JzXG4gKiB0aGUgb2xkZXIgRE9NTW91c2VTY3JvbGwgZm9yIEZpcmVmb3gsIGFzIEZGIGRvZXMgbm90IGluY2x1ZGUgd2hlZWxEZWx0YSB3aXRoXG4gKiAnd2hlZWwnIGV2ZW50LCBtYWtpbmcgc3BpbiBzcGVlZCBkZXRlcm1pbmF0aW9uIGltcG9zc2libGUuXG4gKi9cbm5vcm1hbGl6ZVdoZWVsLmdldEV2ZW50VHlwZSA9IGZ1bmN0aW9uKCkgLypzdHJpbmcqLyB7XG4gIHJldHVybiAoVXNlckFnZW50X0RFUFJFQ0FURUQuZmlyZWZveCgpKVxuICAgICAgICAgICA/ICdET01Nb3VzZVNjcm9sbCdcbiAgICAgICAgICAgOiAoaXNFdmVudFN1cHBvcnRlZCgnd2hlZWwnKSlcbiAgICAgICAgICAgICAgID8gJ3doZWVsJ1xuICAgICAgICAgICAgICAgOiAnbW91c2V3aGVlbCc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5vcm1hbGl6ZVdoZWVsO1xuIiwiaW1wb3J0IHsgX19hc3NpZ24sIF9fZXh0ZW5kcyB9IGZyb20gJ3RzbGliJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbm9ybWFsaXplV2hlZWwgZnJvbSAnbm9ybWFsaXplLXdoZWVsJztcblxuLyoqXHJcbiAqIENvbXB1dGUgdGhlIGRpbWVuc2lvbiBvZiB0aGUgY3JvcCBhcmVhIGJhc2VkIG9uIG1lZGlhIHNpemUsXHJcbiAqIGFzcGVjdCByYXRpbyBhbmQgb3B0aW9uYWxseSByb3RhdGlvblxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q3JvcFNpemUobWVkaWFXaWR0aCwgbWVkaWFIZWlnaHQsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQsIGFzcGVjdCwgcm90YXRpb24pIHtcbiAgaWYgKHJvdGF0aW9uID09PSB2b2lkIDApIHtcbiAgICByb3RhdGlvbiA9IDA7XG4gIH1cblxuICB2YXIgX2EgPSB0cmFuc2xhdGVTaXplKG1lZGlhV2lkdGgsIG1lZGlhSGVpZ2h0LCByb3RhdGlvbiksXG4gICAgICB3aWR0aCA9IF9hLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX2EuaGVpZ2h0O1xuXG4gIHZhciBmaXR0aW5nV2lkdGggPSBNYXRoLm1pbih3aWR0aCwgY29udGFpbmVyV2lkdGgpO1xuICB2YXIgZml0dGluZ0hlaWdodCA9IE1hdGgubWluKGhlaWdodCwgY29udGFpbmVySGVpZ2h0KTtcblxuICBpZiAoZml0dGluZ1dpZHRoID4gZml0dGluZ0hlaWdodCAqIGFzcGVjdCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWR0aDogZml0dGluZ0hlaWdodCAqIGFzcGVjdCxcbiAgICAgIGhlaWdodDogZml0dGluZ0hlaWdodFxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdpZHRoOiBmaXR0aW5nV2lkdGgsXG4gICAgaGVpZ2h0OiBmaXR0aW5nV2lkdGggLyBhc3BlY3RcbiAgfTtcbn1cbi8qKlxyXG4gKiBFbnN1cmUgYSBuZXcgbWVkaWEgcG9zaXRpb24gc3RheXMgaW4gdGhlIGNyb3AgYXJlYS5cclxuICovXG5cbmZ1bmN0aW9uIHJlc3RyaWN0UG9zaXRpb24ocG9zaXRpb24sIG1lZGlhU2l6ZSwgY3JvcFNpemUsIHpvb20sIHJvdGF0aW9uKSB7XG4gIGlmIChyb3RhdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgcm90YXRpb24gPSAwO1xuICB9XG5cbiAgdmFyIF9hID0gdHJhbnNsYXRlU2l6ZShtZWRpYVNpemUud2lkdGgsIG1lZGlhU2l6ZS5oZWlnaHQsIHJvdGF0aW9uKSxcbiAgICAgIHdpZHRoID0gX2Eud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfYS5oZWlnaHQ7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiByZXN0cmljdFBvc2l0aW9uQ29vcmQocG9zaXRpb24ueCwgd2lkdGgsIGNyb3BTaXplLndpZHRoLCB6b29tKSxcbiAgICB5OiByZXN0cmljdFBvc2l0aW9uQ29vcmQocG9zaXRpb24ueSwgaGVpZ2h0LCBjcm9wU2l6ZS5oZWlnaHQsIHpvb20pXG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlc3RyaWN0UG9zaXRpb25Db29yZChwb3NpdGlvbiwgbWVkaWFTaXplLCBjcm9wU2l6ZSwgem9vbSkge1xuICB2YXIgbWF4UG9zaXRpb24gPSBtZWRpYVNpemUgKiB6b29tIC8gMiAtIGNyb3BTaXplIC8gMjtcbiAgcmV0dXJuIE1hdGgubWluKG1heFBvc2l0aW9uLCBNYXRoLm1heChwb3NpdGlvbiwgLW1heFBvc2l0aW9uKSk7XG59XG5cbmZ1bmN0aW9uIGdldERpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEEsIHBvaW50Qikge1xuICByZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KHBvaW50QS55IC0gcG9pbnRCLnksIDIpICsgTWF0aC5wb3cocG9pbnRBLnggLSBwb2ludEIueCwgMikpO1xufVxuZnVuY3Rpb24gZ2V0Um90YXRpb25CZXR3ZWVuUG9pbnRzKHBvaW50QSwgcG9pbnRCKSB7XG4gIHJldHVybiBNYXRoLmF0YW4yKHBvaW50Qi55IC0gcG9pbnRBLnksIHBvaW50Qi54IC0gcG9pbnRBLngpICogMTgwIC8gTWF0aC5QSTtcbn1cbi8qKlxyXG4gKiBDb21wdXRlIHRoZSBvdXRwdXQgY3JvcHBlZCBhcmVhIG9mIHRoZSBtZWRpYSBpbiBwZXJjZW50YWdlcyBhbmQgcGl4ZWxzLlxyXG4gKiB4L3kgYXJlIHRoZSB0b3AtbGVmdCBjb29yZGluYXRlcyBvbiB0aGUgc3JjIG1lZGlhXHJcbiAqL1xuXG5mdW5jdGlvbiBjb21wdXRlQ3JvcHBlZEFyZWEoY3JvcCwgbWVkaWFTaXplLCBjcm9wU2l6ZSwgYXNwZWN0LCB6b29tLCByb3RhdGlvbiwgcmVzdHJpY3RQb3NpdGlvbikge1xuICBpZiAocm90YXRpb24gPT09IHZvaWQgMCkge1xuICAgIHJvdGF0aW9uID0gMDtcbiAgfVxuXG4gIGlmIChyZXN0cmljdFBvc2l0aW9uID09PSB2b2lkIDApIHtcbiAgICByZXN0cmljdFBvc2l0aW9uID0gdHJ1ZTtcbiAgfSAvLyBpZiB0aGUgbWVkaWEgaXMgcm90YXRlZCBieSB0aGUgdXNlciwgd2UgY2Fubm90IGxpbWl0IHRoZSBwb3NpdGlvbiBhbnltb3JlXG4gIC8vIGFzIGl0IG1pZ2h0IG5lZWQgdG8gYmUgbmVnYXRpdmUuXG5cblxuICB2YXIgbGltaXRBcmVhRm4gPSByZXN0cmljdFBvc2l0aW9uICYmIHJvdGF0aW9uID09PSAwID8gbGltaXRBcmVhIDogbm9PcDtcbiAgdmFyIGNyb3BwZWRBcmVhUGVyY2VudGFnZXMgPSB7XG4gICAgeDogbGltaXRBcmVhRm4oMTAwLCAoKG1lZGlhU2l6ZS53aWR0aCAtIGNyb3BTaXplLndpZHRoIC8gem9vbSkgLyAyIC0gY3JvcC54IC8gem9vbSkgLyBtZWRpYVNpemUud2lkdGggKiAxMDApLFxuICAgIHk6IGxpbWl0QXJlYUZuKDEwMCwgKChtZWRpYVNpemUuaGVpZ2h0IC0gY3JvcFNpemUuaGVpZ2h0IC8gem9vbSkgLyAyIC0gY3JvcC55IC8gem9vbSkgLyBtZWRpYVNpemUuaGVpZ2h0ICogMTAwKSxcbiAgICB3aWR0aDogbGltaXRBcmVhRm4oMTAwLCBjcm9wU2l6ZS53aWR0aCAvIG1lZGlhU2l6ZS53aWR0aCAqIDEwMCAvIHpvb20pLFxuICAgIGhlaWdodDogbGltaXRBcmVhRm4oMTAwLCBjcm9wU2l6ZS5oZWlnaHQgLyBtZWRpYVNpemUuaGVpZ2h0ICogMTAwIC8gem9vbSlcbiAgfTsgLy8gd2UgY29tcHV0ZSB0aGUgcGl4ZWxzIHNpemUgbmFpdmVseVxuXG4gIHZhciB3aWR0aEluUGl4ZWxzID0gTWF0aC5yb3VuZChsaW1pdEFyZWFGbihtZWRpYVNpemUubmF0dXJhbFdpZHRoLCBjcm9wcGVkQXJlYVBlcmNlbnRhZ2VzLndpZHRoICogbWVkaWFTaXplLm5hdHVyYWxXaWR0aCAvIDEwMCkpO1xuICB2YXIgaGVpZ2h0SW5QaXhlbHMgPSBNYXRoLnJvdW5kKGxpbWl0QXJlYUZuKG1lZGlhU2l6ZS5uYXR1cmFsSGVpZ2h0LCBjcm9wcGVkQXJlYVBlcmNlbnRhZ2VzLmhlaWdodCAqIG1lZGlhU2l6ZS5uYXR1cmFsSGVpZ2h0IC8gMTAwKSk7XG4gIHZhciBpc0ltZ1dpZGVyVGhhbkhpZ2ggPSBtZWRpYVNpemUubmF0dXJhbFdpZHRoID49IG1lZGlhU2l6ZS5uYXR1cmFsSGVpZ2h0ICogYXNwZWN0OyAvLyB0aGVuIHdlIGVuc3VyZSB0aGUgd2lkdGggYW5kIGhlaWdodCBleGFjdGx5IG1hdGNoIHRoZSBhc3BlY3QgKHRvIGF2b2lkIHJvdW5kaW5nIGFwcHJveGltYXRpb25zKVxuICAvLyBpZiB0aGUgbWVkaWEgaXMgd2lkZXIgdGhhbiBoaWdoLCB3aGVuIHpvb20gaXMgMCwgdGhlIGNyb3AgaGVpZ2h0IHdpbGwgYmUgZXF1YWxzIHRvIGlhbWdlIGhlaWdodFxuICAvLyB0aHVzIHdlIHdhbnQgdG8gY29tcHV0ZSB0aGUgd2lkdGggZnJvbSB0aGUgaGVpZ2h0IGFuZCBhc3BlY3QgZm9yIGFjY3VyYWN5LlxuICAvLyBPdGhlcndpc2UsIHdlIGNvbXB1dGUgdGhlIGhlaWdodCBmcm9tIHdpZHRoIGFuZCBhc3BlY3QuXG5cbiAgdmFyIHNpemVQaXhlbHMgPSBpc0ltZ1dpZGVyVGhhbkhpZ2ggPyB7XG4gICAgd2lkdGg6IE1hdGgucm91bmQoaGVpZ2h0SW5QaXhlbHMgKiBhc3BlY3QpLFxuICAgIGhlaWdodDogaGVpZ2h0SW5QaXhlbHNcbiAgfSA6IHtcbiAgICB3aWR0aDogd2lkdGhJblBpeGVscyxcbiAgICBoZWlnaHQ6IE1hdGgucm91bmQod2lkdGhJblBpeGVscyAvIGFzcGVjdClcbiAgfTtcblxuICB2YXIgY3JvcHBlZEFyZWFQaXhlbHMgPSBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2l6ZVBpeGVscyksIHtcbiAgICB4OiBNYXRoLnJvdW5kKGxpbWl0QXJlYUZuKG1lZGlhU2l6ZS5uYXR1cmFsV2lkdGggLSBzaXplUGl4ZWxzLndpZHRoLCBjcm9wcGVkQXJlYVBlcmNlbnRhZ2VzLnggKiBtZWRpYVNpemUubmF0dXJhbFdpZHRoIC8gMTAwKSksXG4gICAgeTogTWF0aC5yb3VuZChsaW1pdEFyZWFGbihtZWRpYVNpemUubmF0dXJhbEhlaWdodCAtIHNpemVQaXhlbHMuaGVpZ2h0LCBjcm9wcGVkQXJlYVBlcmNlbnRhZ2VzLnkgKiBtZWRpYVNpemUubmF0dXJhbEhlaWdodCAvIDEwMCkpXG4gIH0pO1xuXG4gIHJldHVybiB7XG4gICAgY3JvcHBlZEFyZWFQZXJjZW50YWdlczogY3JvcHBlZEFyZWFQZXJjZW50YWdlcyxcbiAgICBjcm9wcGVkQXJlYVBpeGVsczogY3JvcHBlZEFyZWFQaXhlbHNcbiAgfTtcbn1cbi8qKlxyXG4gKiBFbnN1cmUgdGhlIHJldHVybmVkIHZhbHVlIGlzIGJldHdlZW4gMCBhbmQgbWF4XHJcbiAqL1xuXG5mdW5jdGlvbiBsaW1pdEFyZWEobWF4LCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5taW4obWF4LCBNYXRoLm1heCgwLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBub09wKF9tYXgsIHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxyXG4gKiBDb21wdXRlIHRoZSBjcm9wIGFuZCB6b29tIGZyb20gdGhlIGNyb3BwZWRBcmVhUGl4ZWxzXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFpvb21Gcm9tQ3JvcHBlZEFyZWFQaXhlbHMoY3JvcHBlZEFyZWFQaXhlbHMsIG1lZGlhU2l6ZSwgY3JvcFNpemUpIHtcbiAgdmFyIG1lZGlhWm9vbSA9IG1lZGlhU2l6ZS53aWR0aCAvIG1lZGlhU2l6ZS5uYXR1cmFsV2lkdGg7XG5cbiAgaWYgKGNyb3BTaXplKSB7XG4gICAgdmFyIGlzSGVpZ2h0TWF4U2l6ZV8xID0gY3JvcFNpemUuaGVpZ2h0ID4gY3JvcFNpemUud2lkdGg7XG4gICAgcmV0dXJuIGlzSGVpZ2h0TWF4U2l6ZV8xID8gY3JvcFNpemUuaGVpZ2h0IC8gbWVkaWFab29tIC8gY3JvcHBlZEFyZWFQaXhlbHMuaGVpZ2h0IDogY3JvcFNpemUud2lkdGggLyBtZWRpYVpvb20gLyBjcm9wcGVkQXJlYVBpeGVscy53aWR0aDtcbiAgfVxuXG4gIHZhciBhc3BlY3QgPSBjcm9wcGVkQXJlYVBpeGVscy53aWR0aCAvIGNyb3BwZWRBcmVhUGl4ZWxzLmhlaWdodDtcbiAgdmFyIGlzSGVpZ2h0TWF4U2l6ZSA9IG1lZGlhU2l6ZS5uYXR1cmFsV2lkdGggPj0gbWVkaWFTaXplLm5hdHVyYWxIZWlnaHQgKiBhc3BlY3Q7XG4gIHJldHVybiBpc0hlaWdodE1heFNpemUgPyBtZWRpYVNpemUubmF0dXJhbEhlaWdodCAvIGNyb3BwZWRBcmVhUGl4ZWxzLmhlaWdodCA6IG1lZGlhU2l6ZS5uYXR1cmFsV2lkdGggLyBjcm9wcGVkQXJlYVBpeGVscy53aWR0aDtcbn1cbi8qKlxyXG4gKiBDb21wdXRlIHRoZSBjcm9wIGFuZCB6b29tIGZyb20gdGhlIGNyb3BwZWRBcmVhUGl4ZWxzXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldEluaXRpYWxDcm9wRnJvbUNyb3BwZWRBcmVhUGl4ZWxzKGNyb3BwZWRBcmVhUGl4ZWxzLCBtZWRpYVNpemUsIGNyb3BTaXplKSB7XG4gIHZhciBtZWRpYVpvb20gPSBtZWRpYVNpemUud2lkdGggLyBtZWRpYVNpemUubmF0dXJhbFdpZHRoO1xuICB2YXIgem9vbSA9IGdldFpvb21Gcm9tQ3JvcHBlZEFyZWFQaXhlbHMoY3JvcHBlZEFyZWFQaXhlbHMsIG1lZGlhU2l6ZSwgY3JvcFNpemUpO1xuICB2YXIgY3JvcFpvb20gPSBtZWRpYVpvb20gKiB6b29tO1xuICB2YXIgY3JvcCA9IHtcbiAgICB4OiAoKG1lZGlhU2l6ZS5uYXR1cmFsV2lkdGggLSBjcm9wcGVkQXJlYVBpeGVscy53aWR0aCkgLyAyIC0gY3JvcHBlZEFyZWFQaXhlbHMueCkgKiBjcm9wWm9vbSxcbiAgICB5OiAoKG1lZGlhU2l6ZS5uYXR1cmFsSGVpZ2h0IC0gY3JvcHBlZEFyZWFQaXhlbHMuaGVpZ2h0KSAvIDIgLSBjcm9wcGVkQXJlYVBpeGVscy55KSAqIGNyb3Bab29tXG4gIH07XG4gIHJldHVybiB7XG4gICAgY3JvcDogY3JvcCxcbiAgICB6b29tOiB6b29tXG4gIH07XG59XG4vKipcclxuICogUmV0dXJuIHRoZSBwb2ludCB0aGF0IGlzIHRoZSBjZW50ZXIgb2YgcG9pbnQgYSBhbmQgYlxyXG4gKi9cblxuZnVuY3Rpb24gZ2V0Q2VudGVyKGEsIGIpIHtcbiAgcmV0dXJuIHtcbiAgICB4OiAoYi54ICsgYS54KSAvIDIsXG4gICAgeTogKGIueSArIGEueSkgLyAyXG4gIH07XG59XG4vKipcclxuICpcclxuICogUmV0dXJucyBhbiB4LHkgcG9pbnQgb25jZSByb3RhdGVkIGFyb3VuZCB4TWlkLHlNaWRcclxuICovXG5cbmZ1bmN0aW9uIHJvdGF0ZUFyb3VuZE1pZFBvaW50KHgsIHksIHhNaWQsIHlNaWQsIGRlZ3JlZXMpIHtcbiAgdmFyIGNvcyA9IE1hdGguY29zO1xuICB2YXIgc2luID0gTWF0aC5zaW47XG4gIHZhciByYWRpYW4gPSBkZWdyZWVzICogTWF0aC5QSSAvIDE4MDsgLy8gQ29udmVydCB0byByYWRpYW5zXG4gIC8vIFN1YnRyYWN0IG1pZHBvaW50cywgc28gdGhhdCBtaWRwb2ludCBpcyB0cmFuc2xhdGVkIHRvIG9yaWdpblxuICAvLyBhbmQgYWRkIGl0IGluIHRoZSBlbmQgYWdhaW5cblxuICB2YXIgeHIgPSAoeCAtIHhNaWQpICogY29zKHJhZGlhbikgLSAoeSAtIHlNaWQpICogc2luKHJhZGlhbikgKyB4TWlkO1xuICB2YXIgeXIgPSAoeCAtIHhNaWQpICogc2luKHJhZGlhbikgKyAoeSAtIHlNaWQpICogY29zKHJhZGlhbikgKyB5TWlkO1xuICByZXR1cm4gW3hyLCB5cl07XG59XG4vKipcclxuICogUmV0dXJucyB0aGUgbmV3IGJvdW5kaW5nIGFyZWEgb2YgYSByb3RhdGVkIHJlY3RhbmdsZS5cclxuICovXG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZVNpemUod2lkdGgsIGhlaWdodCwgcm90YXRpb24pIHtcbiAgdmFyIGNlbnRlclggPSB3aWR0aCAvIDI7XG4gIHZhciBjZW50ZXJZID0gaGVpZ2h0IC8gMjtcbiAgdmFyIG91dGVyQm91bmRzID0gW3JvdGF0ZUFyb3VuZE1pZFBvaW50KDAsIDAsIGNlbnRlclgsIGNlbnRlclksIHJvdGF0aW9uKSwgcm90YXRlQXJvdW5kTWlkUG9pbnQod2lkdGgsIDAsIGNlbnRlclgsIGNlbnRlclksIHJvdGF0aW9uKSwgcm90YXRlQXJvdW5kTWlkUG9pbnQod2lkdGgsIGhlaWdodCwgY2VudGVyWCwgY2VudGVyWSwgcm90YXRpb24pLCByb3RhdGVBcm91bmRNaWRQb2ludCgwLCBoZWlnaHQsIGNlbnRlclgsIGNlbnRlclksIHJvdGF0aW9uKV07XG4gIHZhciBtaW5YID0gTWF0aC5taW4uYXBwbHkoTWF0aCwgb3V0ZXJCb3VuZHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHBbMF07XG4gIH0pKTtcbiAgdmFyIG1heFggPSBNYXRoLm1heC5hcHBseShNYXRoLCBvdXRlckJvdW5kcy5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gcFswXTtcbiAgfSkpO1xuICB2YXIgbWluWSA9IE1hdGgubWluLmFwcGx5KE1hdGgsIG91dGVyQm91bmRzLm1hcChmdW5jdGlvbiAocCkge1xuICAgIHJldHVybiBwWzFdO1xuICB9KSk7XG4gIHZhciBtYXhZID0gTWF0aC5tYXguYXBwbHkoTWF0aCwgb3V0ZXJCb3VuZHMubWFwKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHBbMV07XG4gIH0pKTtcbiAgcmV0dXJuIHtcbiAgICB3aWR0aDogbWF4WCAtIG1pblgsXG4gICAgaGVpZ2h0OiBtYXhZIC0gbWluWVxuICB9O1xufVxuLyoqXHJcbiAqIENvbWJpbmUgbXVsdGlwbGUgY2xhc3MgbmFtZXMgaW50byBhIHNpbmdsZSBzdHJpbmcuXHJcbiAqL1xuXG5mdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuICB2YXIgYXJncyA9IFtdO1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICB9XG5cbiAgcmV0dXJuIGFyZ3MuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSkuam9pbignICcpLnRyaW0oKTtcbn1cblxudmFyIGNzc18yNDh6ID0gXCIucmVhY3RFYXN5Q3JvcF9Db250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBtb3ZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlYWN0RWFzeUNyb3BfSW1hZ2UsXFxuLnJlYWN0RWFzeUNyb3BfVmlkZW8ge1xcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTsgLyogdGhpcyBpbXByb3ZlcyBwZXJmb3JtYW5jZXMgYW5kIHByZXZlbnQgcGFpbnRpbmcgaXNzdWVzIG9uIGlPUyBDaHJvbWUgKi9cXG59XFxuXFxuLnJlYWN0RWFzeUNyb3BfQ29udGFpbiB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG4ucmVhY3RFYXN5Q3JvcF9Db3Zlcl9Ib3Jpem9udGFsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ucmVhY3RFYXN5Q3JvcF9Db3Zlcl9WZXJ0aWNhbCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnJlYWN0RWFzeUNyb3BfQ3JvcEFyZWEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogNTAlO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3gtc2hhZG93OiAwIDAgMCA5OTk5ZW07XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLnJlYWN0RWFzeUNyb3BfQ3JvcEFyZWFSb3VuZCB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5yZWFjdEVhc3lDcm9wX0Nyb3BBcmVhR3JpZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcgJztcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAzMy4zMyU7XFxuICByaWdodDogMzMuMzMlO1xcbiAgYm9yZGVyLXRvcDogMDtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcblxcbi5yZWFjdEVhc3lDcm9wX0Nyb3BBcmVhR3JpZDo6YWZ0ZXIge1xcbiAgY29udGVudDogJyAnO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIHRvcDogMzMuMzMlO1xcbiAgYm90dG9tOiAzMy4zMyU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3JkZXItbGVmdDogMDtcXG4gIGJvcmRlci1yaWdodDogMDtcXG59XFxuXCI7XG5cbnZhciBNSU5fWk9PTSA9IDE7XG52YXIgTUFYX1pPT00gPSAzO1xuXG52YXIgQ3JvcHBlciA9XG4vKiogQGNsYXNzICovXG5mdW5jdGlvbiAoX3N1cGVyKSB7XG4gIF9fZXh0ZW5kcyhDcm9wcGVyLCBfc3VwZXIpO1xuXG4gIGZ1bmN0aW9uIENyb3BwZXIoKSB7XG4gICAgdmFyIF90aGlzID0gX3N1cGVyICE9PSBudWxsICYmIF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG5cbiAgICBfdGhpcy5pbWFnZVJlZiA9IG51bGw7XG4gICAgX3RoaXMudmlkZW9SZWYgPSBudWxsO1xuICAgIF90aGlzLmNvbnRhaW5lclJlZiA9IG51bGw7XG4gICAgX3RoaXMuc3R5bGVSZWYgPSBudWxsO1xuICAgIF90aGlzLmNvbnRhaW5lclJlY3QgPSBudWxsO1xuICAgIF90aGlzLm1lZGlhU2l6ZSA9IHtcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgbmF0dXJhbFdpZHRoOiAwLFxuICAgICAgbmF0dXJhbEhlaWdodDogMFxuICAgIH07XG4gICAgX3RoaXMuZHJhZ1N0YXJ0UG9zaXRpb24gPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgX3RoaXMuZHJhZ1N0YXJ0Q3JvcCA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICBfdGhpcy5sYXN0UGluY2hEaXN0YW5jZSA9IDA7XG4gICAgX3RoaXMubGFzdFBpbmNoUm90YXRpb24gPSAwO1xuICAgIF90aGlzLnJhZkRyYWdUaW1lb3V0ID0gbnVsbDtcbiAgICBfdGhpcy5yYWZQaW5jaFRpbWVvdXQgPSBudWxsO1xuICAgIF90aGlzLndoZWVsVGltZXIgPSBudWxsO1xuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgY3JvcFNpemU6IG51bGwsXG4gICAgICBoYXNXaGVlbEp1c3RTdGFydGVkOiBmYWxzZVxuICAgIH07IC8vIHRoaXMgaXMgdG8gcHJldmVudCBTYWZhcmkgb24gaU9TID49IDEwIHRvIHpvb20gdGhlIHBhZ2VcblxuICAgIF90aGlzLnByZXZlbnRab29tU2FmYXJpID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfTtcblxuICAgIF90aGlzLmNsZWFuRXZlbnRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgX3RoaXMub25Nb3VzZU1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIF90aGlzLm9uRHJhZ1N0b3BwZWQpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgX3RoaXMub25Ub3VjaE1vdmUpO1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBfdGhpcy5vbkRyYWdTdG9wcGVkKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuY2xlYXJTY3JvbGxFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5jb250YWluZXJSZWYpIF90aGlzLmNvbnRhaW5lclJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIF90aGlzLm9uV2hlZWwpO1xuXG4gICAgICBpZiAoX3RoaXMud2hlZWxUaW1lcikge1xuICAgICAgICBjbGVhclRpbWVvdXQoX3RoaXMud2hlZWxUaW1lcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uTWVkaWFMb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY29tcHV0ZVNpemVzKCk7XG5cbiAgICAgIF90aGlzLmVtaXRDcm9wRGF0YSgpO1xuXG4gICAgICBfdGhpcy5zZXRJbml0aWFsQ3JvcCgpO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25NZWRpYUxvYWRlZCkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbk1lZGlhTG9hZGVkKF90aGlzLm1lZGlhU2l6ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLnNldEluaXRpYWxDcm9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9hID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgaW5pdGlhbENyb3BwZWRBcmVhUGl4ZWxzID0gX2EuaW5pdGlhbENyb3BwZWRBcmVhUGl4ZWxzLFxuICAgICAgICAgIGNyb3BTaXplID0gX2EuY3JvcFNpemU7XG5cbiAgICAgIGlmICghaW5pdGlhbENyb3BwZWRBcmVhUGl4ZWxzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF9iID0gZ2V0SW5pdGlhbENyb3BGcm9tQ3JvcHBlZEFyZWFQaXhlbHMoaW5pdGlhbENyb3BwZWRBcmVhUGl4ZWxzLCBfdGhpcy5tZWRpYVNpemUsIGNyb3BTaXplKSxcbiAgICAgICAgICBjcm9wID0gX2IuY3JvcCxcbiAgICAgICAgICB6b29tID0gX2Iuem9vbTtcblxuICAgICAgX3RoaXMucHJvcHMub25Dcm9wQ2hhbmdlKGNyb3ApO1xuXG4gICAgICBfdGhpcy5wcm9wcy5vblpvb21DaGFuZ2UgJiYgX3RoaXMucHJvcHMub25ab29tQ2hhbmdlKHpvb20pO1xuICAgIH07XG5cbiAgICBfdGhpcy5jb21wdXRlU2l6ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZjtcblxuICAgICAgdmFyIG1lZGlhUmVmID0gX3RoaXMuaW1hZ2VSZWYgfHwgX3RoaXMudmlkZW9SZWY7XG5cbiAgICAgIGlmIChtZWRpYVJlZiAmJiBfdGhpcy5jb250YWluZXJSZWYpIHtcbiAgICAgICAgX3RoaXMuY29udGFpbmVyUmVjdCA9IF90aGlzLmNvbnRhaW5lclJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgX3RoaXMubWVkaWFTaXplID0ge1xuICAgICAgICAgIHdpZHRoOiBtZWRpYVJlZi5vZmZzZXRXaWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IG1lZGlhUmVmLm9mZnNldEhlaWdodCxcbiAgICAgICAgICBuYXR1cmFsV2lkdGg6ICgoX2EgPSBfdGhpcy5pbWFnZVJlZikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hdHVyYWxXaWR0aCkgfHwgKChfYiA9IF90aGlzLnZpZGVvUmVmKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudmlkZW9XaWR0aCkgfHwgMCxcbiAgICAgICAgICBuYXR1cmFsSGVpZ2h0OiAoKF9jID0gX3RoaXMuaW1hZ2VSZWYpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5uYXR1cmFsSGVpZ2h0KSB8fCAoKF9kID0gX3RoaXMudmlkZW9SZWYpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC52aWRlb0hlaWdodCkgfHwgMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgY3JvcFNpemUgPSBfdGhpcy5wcm9wcy5jcm9wU2l6ZSA/IF90aGlzLnByb3BzLmNyb3BTaXplIDogZ2V0Q3JvcFNpemUobWVkaWFSZWYub2Zmc2V0V2lkdGgsIG1lZGlhUmVmLm9mZnNldEhlaWdodCwgX3RoaXMuY29udGFpbmVyUmVjdC53aWR0aCwgX3RoaXMuY29udGFpbmVyUmVjdC5oZWlnaHQsIF90aGlzLnByb3BzLmFzcGVjdCwgX3RoaXMucHJvcHMucm90YXRpb24pO1xuXG4gICAgICAgIGlmICgoKF9lID0gX3RoaXMuc3RhdGUuY3JvcFNpemUpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5oZWlnaHQpICE9PSBjcm9wU2l6ZS5oZWlnaHQgfHwgKChfZiA9IF90aGlzLnN0YXRlLmNyb3BTaXplKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Yud2lkdGgpICE9PSBjcm9wU2l6ZS53aWR0aCkge1xuICAgICAgICAgIF90aGlzLnByb3BzLm9uQ3JvcFNpemVDaGFuZ2UgJiYgX3RoaXMucHJvcHMub25Dcm9wU2l6ZUNoYW5nZShjcm9wU2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgY3JvcFNpemU6IGNyb3BTaXplXG4gICAgICAgIH0sIF90aGlzLnJlY29tcHV0ZUNyb3BQb3NpdGlvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF90aGlzLm9uTW91c2VEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIF90aGlzLm9uTW91c2VNb3ZlKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBfdGhpcy5vbkRyYWdTdG9wcGVkKTtcblxuICAgICAgX3RoaXMub25EcmFnU3RhcnQoQ3JvcHBlci5nZXRNb3VzZVBvaW50KGUpKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25Nb3VzZU1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIF90aGlzLm9uRHJhZyhDcm9wcGVyLmdldE1vdXNlUG9pbnQoZSkpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vblRvdWNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgX3RoaXMub25Ub3VjaE1vdmUsIHtcbiAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgIH0pOyAvLyBpT1MgMTEgbm93IGRlZmF1bHRzIHRvIHBhc3NpdmU6IHRydWVcblxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBfdGhpcy5vbkRyYWdTdG9wcGVkKTtcblxuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgX3RoaXMub25QaW5jaFN0YXJ0KGUpO1xuICAgICAgfSBlbHNlIGlmIChlLnRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIF90aGlzLm9uRHJhZ1N0YXJ0KENyb3BwZXIuZ2V0VG91Y2hQb2ludChlLnRvdWNoZXNbMF0pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25Ub3VjaE1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgLy8gUHJldmVudCB3aG9sZSBwYWdlIGZyb20gc2Nyb2xsaW5nIG9uIGlPUy5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgX3RoaXMub25QaW5jaE1vdmUoZSk7XG4gICAgICB9IGVsc2UgaWYgKGUudG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgX3RoaXMub25EcmFnKENyb3BwZXIuZ2V0VG91Y2hQb2ludChlLnRvdWNoZXNbMF0pKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMub25EcmFnU3RhcnQgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgIHZhciBfYiwgX2M7XG5cbiAgICAgIHZhciB4ID0gX2EueCxcbiAgICAgICAgICB5ID0gX2EueTtcbiAgICAgIF90aGlzLmRyYWdTdGFydFBvc2l0aW9uID0ge1xuICAgICAgICB4OiB4LFxuICAgICAgICB5OiB5XG4gICAgICB9O1xuICAgICAgX3RoaXMuZHJhZ1N0YXJ0Q3JvcCA9IF9fYXNzaWduKHt9LCBfdGhpcy5wcm9wcy5jcm9wKTtcbiAgICAgIChfYyA9IChfYiA9IF90aGlzLnByb3BzKS5vbkludGVyYWN0aW9uU3RhcnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5jYWxsKF9iKTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25EcmFnID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICB2YXIgeCA9IF9hLngsXG4gICAgICAgICAgeSA9IF9hLnk7XG4gICAgICBpZiAoX3RoaXMucmFmRHJhZ1RpbWVvdXQpIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZShfdGhpcy5yYWZEcmFnVGltZW91dCk7XG4gICAgICBfdGhpcy5yYWZEcmFnVGltZW91dCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnN0YXRlLmNyb3BTaXplKSByZXR1cm47XG4gICAgICAgIGlmICh4ID09PSB1bmRlZmluZWQgfHwgeSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICAgIHZhciBvZmZzZXRYID0geCAtIF90aGlzLmRyYWdTdGFydFBvc2l0aW9uLng7XG4gICAgICAgIHZhciBvZmZzZXRZID0geSAtIF90aGlzLmRyYWdTdGFydFBvc2l0aW9uLnk7XG4gICAgICAgIHZhciByZXF1ZXN0ZWRQb3NpdGlvbiA9IHtcbiAgICAgICAgICB4OiBfdGhpcy5kcmFnU3RhcnRDcm9wLnggKyBvZmZzZXRYLFxuICAgICAgICAgIHk6IF90aGlzLmRyYWdTdGFydENyb3AueSArIG9mZnNldFlcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gX3RoaXMucHJvcHMucmVzdHJpY3RQb3NpdGlvbiA/IHJlc3RyaWN0UG9zaXRpb24ocmVxdWVzdGVkUG9zaXRpb24sIF90aGlzLm1lZGlhU2l6ZSwgX3RoaXMuc3RhdGUuY3JvcFNpemUsIF90aGlzLnByb3BzLnpvb20sIF90aGlzLnByb3BzLnJvdGF0aW9uKSA6IHJlcXVlc3RlZFBvc2l0aW9uO1xuXG4gICAgICAgIF90aGlzLnByb3BzLm9uQ3JvcENoYW5nZShuZXdQb3NpdGlvbik7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMub25EcmFnU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfYSwgX2I7XG5cbiAgICAgIF90aGlzLmNsZWFuRXZlbnRzKCk7XG5cbiAgICAgIF90aGlzLmVtaXRDcm9wRGF0YSgpO1xuXG4gICAgICAoX2IgPSAoX2EgPSBfdGhpcy5wcm9wcykub25JbnRlcmFjdGlvbkVuZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgIH07XG5cbiAgICBfdGhpcy5vbldoZWVsID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBwb2ludCA9IENyb3BwZXIuZ2V0TW91c2VQb2ludChlKTtcbiAgICAgIHZhciBwaXhlbFkgPSBub3JtYWxpemVXaGVlbChlKS5waXhlbFk7XG4gICAgICB2YXIgbmV3Wm9vbSA9IF90aGlzLnByb3BzLnpvb20gLSBwaXhlbFkgKiBfdGhpcy5wcm9wcy56b29tU3BlZWQgLyAyMDA7XG5cbiAgICAgIF90aGlzLnNldE5ld1pvb20obmV3Wm9vbSwgcG9pbnQpO1xuXG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmhhc1doZWVsSnVzdFN0YXJ0ZWQpIHtcbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1doZWVsSnVzdFN0YXJ0ZWQ6IHRydWVcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBfYSwgX2I7XG5cbiAgICAgICAgICByZXR1cm4gKF9iID0gKF9hID0gX3RoaXMucHJvcHMpLm9uSW50ZXJhY3Rpb25TdGFydCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmNhbGwoX2EpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGlzLndoZWVsVGltZXIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KF90aGlzLndoZWVsVGltZXIpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy53aGVlbFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGhhc1doZWVsSnVzdFN0YXJ0ZWQ6IGZhbHNlXG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgX2EsIF9iO1xuXG4gICAgICAgICAgcmV0dXJuIChfYiA9IChfYSA9IF90aGlzLnByb3BzKS5vbkludGVyYWN0aW9uRW5kKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuY2FsbChfYSk7XG4gICAgICAgIH0pO1xuICAgICAgfSwgMjUwKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0UG9pbnRPbkNvbnRhaW5lciA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgdmFyIHggPSBfYS54LFxuICAgICAgICAgIHkgPSBfYS55O1xuXG4gICAgICBpZiAoIV90aGlzLmNvbnRhaW5lclJlY3QpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgQ3JvcHBlciBpcyBub3QgbW91bnRlZCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiBfdGhpcy5jb250YWluZXJSZWN0LndpZHRoIC8gMiAtICh4IC0gX3RoaXMuY29udGFpbmVyUmVjdC5sZWZ0KSxcbiAgICAgICAgeTogX3RoaXMuY29udGFpbmVyUmVjdC5oZWlnaHQgLyAyIC0gKHkgLSBfdGhpcy5jb250YWluZXJSZWN0LnRvcClcbiAgICAgIH07XG4gICAgfTtcblxuICAgIF90aGlzLmdldFBvaW50T25NZWRpYSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgdmFyIHggPSBfYS54LFxuICAgICAgICAgIHkgPSBfYS55O1xuICAgICAgdmFyIF9iID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3JvcCA9IF9iLmNyb3AsXG4gICAgICAgICAgem9vbSA9IF9iLnpvb207XG4gICAgICByZXR1cm4ge1xuICAgICAgICB4OiAoeCArIGNyb3AueCkgLyB6b29tLFxuICAgICAgICB5OiAoeSArIGNyb3AueSkgLyB6b29tXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBfdGhpcy5zZXROZXdab29tID0gZnVuY3Rpb24gKHpvb20sIHBvaW50KSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmNyb3BTaXplIHx8ICFfdGhpcy5wcm9wcy5vblpvb21DaGFuZ2UpIHJldHVybjtcblxuICAgICAgdmFyIHpvb21Qb2ludCA9IF90aGlzLmdldFBvaW50T25Db250YWluZXIocG9pbnQpO1xuXG4gICAgICB2YXIgem9vbVRhcmdldCA9IF90aGlzLmdldFBvaW50T25NZWRpYSh6b29tUG9pbnQpO1xuXG4gICAgICB2YXIgbmV3Wm9vbSA9IE1hdGgubWluKF90aGlzLnByb3BzLm1heFpvb20sIE1hdGgubWF4KHpvb20sIF90aGlzLnByb3BzLm1pblpvb20pKTtcbiAgICAgIHZhciByZXF1ZXN0ZWRQb3NpdGlvbiA9IHtcbiAgICAgICAgeDogem9vbVRhcmdldC54ICogbmV3Wm9vbSAtIHpvb21Qb2ludC54LFxuICAgICAgICB5OiB6b29tVGFyZ2V0LnkgKiBuZXdab29tIC0gem9vbVBvaW50LnlcbiAgICAgIH07XG4gICAgICB2YXIgbmV3UG9zaXRpb24gPSBfdGhpcy5wcm9wcy5yZXN0cmljdFBvc2l0aW9uID8gcmVzdHJpY3RQb3NpdGlvbihyZXF1ZXN0ZWRQb3NpdGlvbiwgX3RoaXMubWVkaWFTaXplLCBfdGhpcy5zdGF0ZS5jcm9wU2l6ZSwgbmV3Wm9vbSwgX3RoaXMucHJvcHMucm90YXRpb24pIDogcmVxdWVzdGVkUG9zaXRpb247XG5cbiAgICAgIF90aGlzLnByb3BzLm9uQ3JvcENoYW5nZShuZXdQb3NpdGlvbik7XG5cbiAgICAgIF90aGlzLnByb3BzLm9uWm9vbUNoYW5nZShuZXdab29tKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuZ2V0Q3JvcERhdGEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmNyb3BTaXplKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSAvLyB0aGlzIGlzIHRvIGVuc3VyZSB0aGUgY3JvcCBpcyBjb3JyZWN0bHkgcmVzdHJpY3RlZCBhZnRlciBhIHpvb20gYmFjayAoaHR0cHM6Ly9naXRodWIuY29tL3JpY2FyZG8tY2gvcmVhY3QtZWFzeS1jcm9wL2lzc3Vlcy82KVxuXG5cbiAgICAgIHZhciByZXN0cmljdGVkUG9zaXRpb24gPSBfdGhpcy5wcm9wcy5yZXN0cmljdFBvc2l0aW9uID8gcmVzdHJpY3RQb3NpdGlvbihfdGhpcy5wcm9wcy5jcm9wLCBfdGhpcy5tZWRpYVNpemUsIF90aGlzLnN0YXRlLmNyb3BTaXplLCBfdGhpcy5wcm9wcy56b29tLCBfdGhpcy5wcm9wcy5yb3RhdGlvbikgOiBfdGhpcy5wcm9wcy5jcm9wO1xuICAgICAgcmV0dXJuIGNvbXB1dGVDcm9wcGVkQXJlYShyZXN0cmljdGVkUG9zaXRpb24sIF90aGlzLm1lZGlhU2l6ZSwgX3RoaXMuc3RhdGUuY3JvcFNpemUsIF90aGlzLmdldEFzcGVjdCgpLCBfdGhpcy5wcm9wcy56b29tLCBfdGhpcy5wcm9wcy5yb3RhdGlvbiwgX3RoaXMucHJvcHMucmVzdHJpY3RQb3NpdGlvbik7XG4gICAgfTtcblxuICAgIF90aGlzLmVtaXRDcm9wRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjcm9wRGF0YSA9IF90aGlzLmdldENyb3BEYXRhKCk7XG5cbiAgICAgIGlmICghY3JvcERhdGEpIHJldHVybjtcbiAgICAgIHZhciBjcm9wcGVkQXJlYVBlcmNlbnRhZ2VzID0gY3JvcERhdGEuY3JvcHBlZEFyZWFQZXJjZW50YWdlcyxcbiAgICAgICAgICBjcm9wcGVkQXJlYVBpeGVscyA9IGNyb3BEYXRhLmNyb3BwZWRBcmVhUGl4ZWxzO1xuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Dcm9wQ29tcGxldGUpIHtcbiAgICAgICAgX3RoaXMucHJvcHMub25Dcm9wQ29tcGxldGUoY3JvcHBlZEFyZWFQZXJjZW50YWdlcywgY3JvcHBlZEFyZWFQaXhlbHMpO1xuICAgICAgfVxuXG4gICAgICBpZiAoX3RoaXMucHJvcHMub25Dcm9wQXJlYUNoYW5nZSkge1xuICAgICAgICBfdGhpcy5wcm9wcy5vbkNyb3BBcmVhQ2hhbmdlKGNyb3BwZWRBcmVhUGVyY2VudGFnZXMsIGNyb3BwZWRBcmVhUGl4ZWxzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3RoaXMuZW1pdENyb3BBcmVhQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNyb3BEYXRhID0gX3RoaXMuZ2V0Q3JvcERhdGEoKTtcblxuICAgICAgaWYgKCFjcm9wRGF0YSkgcmV0dXJuO1xuICAgICAgdmFyIGNyb3BwZWRBcmVhUGVyY2VudGFnZXMgPSBjcm9wRGF0YS5jcm9wcGVkQXJlYVBlcmNlbnRhZ2VzLFxuICAgICAgICAgIGNyb3BwZWRBcmVhUGl4ZWxzID0gY3JvcERhdGEuY3JvcHBlZEFyZWFQaXhlbHM7XG5cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNyb3BBcmVhQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ3JvcEFyZWFDaGFuZ2UoY3JvcHBlZEFyZWFQZXJjZW50YWdlcywgY3JvcHBlZEFyZWFQaXhlbHMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfdGhpcy5yZWNvbXB1dGVDcm9wUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIV90aGlzLnN0YXRlLmNyb3BTaXplKSByZXR1cm47XG4gICAgICB2YXIgbmV3UG9zaXRpb24gPSBfdGhpcy5wcm9wcy5yZXN0cmljdFBvc2l0aW9uID8gcmVzdHJpY3RQb3NpdGlvbihfdGhpcy5wcm9wcy5jcm9wLCBfdGhpcy5tZWRpYVNpemUsIF90aGlzLnN0YXRlLmNyb3BTaXplLCBfdGhpcy5wcm9wcy56b29tLCBfdGhpcy5wcm9wcy5yb3RhdGlvbikgOiBfdGhpcy5wcm9wcy5jcm9wO1xuXG4gICAgICBfdGhpcy5wcm9wcy5vbkNyb3BDaGFuZ2UobmV3UG9zaXRpb24pO1xuXG4gICAgICBfdGhpcy5lbWl0Q3JvcERhdGEoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgQ3JvcHBlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuY29tcHV0ZVNpemVzKTtcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lclJlZikge1xuICAgICAgdGhpcy5wcm9wcy56b29tV2l0aFNjcm9sbCAmJiB0aGlzLmNvbnRhaW5lclJlZi5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbCwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSk7XG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5hZGRFdmVudExpc3RlbmVyKCdnZXN0dXJlc3RhcnQnLCB0aGlzLnByZXZlbnRab29tU2FmYXJpKTtcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2dlc3R1cmVjaGFuZ2UnLCB0aGlzLnByZXZlbnRab29tU2FmYXJpKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucHJvcHMuZGlzYWJsZUF1dG9tYXRpY1N0eWxlc0luamVjdGlvbikge1xuICAgICAgdGhpcy5zdHlsZVJlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICB0aGlzLnN0eWxlUmVmLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICAgICAgdGhpcy5zdHlsZVJlZi5pbm5lckhUTUwgPSBjc3NfMjQ4ejtcbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQodGhpcy5zdHlsZVJlZik7XG4gICAgfSAvLyB3aGVuIHJlbmRlcmVkIHZpYSBTU1IsIHRoZSBpbWFnZSBjYW4gYWxyZWFkeSBiZSBsb2FkZWQgYW5kIGl0cyBvbkxvYWQgY2FsbGJhY2sgd2lsbCBuZXZlciBiZSBjYWxsZWRcblxuXG4gICAgaWYgKHRoaXMuaW1hZ2VSZWYgJiYgdGhpcy5pbWFnZVJlZi5jb21wbGV0ZSkge1xuICAgICAgdGhpcy5vbk1lZGlhTG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICBDcm9wcGVyLnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2E7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5jb21wdXRlU2l6ZXMpO1xuXG4gICAgaWYgKHRoaXMuY29udGFpbmVyUmVmKSB7XG4gICAgICB0aGlzLmNvbnRhaW5lclJlZi5yZW1vdmVFdmVudExpc3RlbmVyKCdnZXN0dXJlc3RhcnQnLCB0aGlzLnByZXZlbnRab29tU2FmYXJpKTtcbiAgICAgIHRoaXMuY29udGFpbmVyUmVmLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2dlc3R1cmVjaGFuZ2UnLCB0aGlzLnByZXZlbnRab29tU2FmYXJpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdHlsZVJlZikge1xuICAgICAgKF9hID0gdGhpcy5zdHlsZVJlZi5wYXJlbnROb2RlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQodGhpcy5zdHlsZVJlZik7XG4gICAgfVxuXG4gICAgdGhpcy5jbGVhbkV2ZW50cygpO1xuICAgIHRoaXMucHJvcHMuem9vbVdpdGhTY3JvbGwgJiYgdGhpcy5jbGVhclNjcm9sbEV2ZW50KCk7XG4gIH07XG5cbiAgQ3JvcHBlci5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gKHByZXZQcm9wcykge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZywgX2gsIF9qO1xuXG4gICAgaWYgKHByZXZQcm9wcy5yb3RhdGlvbiAhPT0gdGhpcy5wcm9wcy5yb3RhdGlvbikge1xuICAgICAgdGhpcy5jb21wdXRlU2l6ZXMoKTtcbiAgICAgIHRoaXMucmVjb21wdXRlQ3JvcFBvc2l0aW9uKCk7XG4gICAgfSBlbHNlIGlmIChwcmV2UHJvcHMuYXNwZWN0ICE9PSB0aGlzLnByb3BzLmFzcGVjdCkge1xuICAgICAgdGhpcy5jb21wdXRlU2l6ZXMoKTtcbiAgICB9IGVsc2UgaWYgKHByZXZQcm9wcy56b29tICE9PSB0aGlzLnByb3BzLnpvb20pIHtcbiAgICAgIHRoaXMucmVjb21wdXRlQ3JvcFBvc2l0aW9uKCk7XG4gICAgfSBlbHNlIGlmICgoKF9hID0gcHJldlByb3BzLmNyb3BTaXplKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaGVpZ2h0KSAhPT0gKChfYiA9IHRoaXMucHJvcHMuY3JvcFNpemUpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5oZWlnaHQpIHx8ICgoX2MgPSBwcmV2UHJvcHMuY3JvcFNpemUpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy53aWR0aCkgIT09ICgoX2QgPSB0aGlzLnByb3BzLmNyb3BTaXplKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Qud2lkdGgpKSB7XG4gICAgICB0aGlzLmNvbXB1dGVTaXplcygpO1xuICAgIH0gZWxzZSBpZiAoKChfZSA9IHByZXZQcm9wcy5jcm9wKSA9PT0gbnVsbCB8fCBfZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2UueCkgIT09ICgoX2YgPSB0aGlzLnByb3BzLmNyb3ApID09PSBudWxsIHx8IF9mID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZi54KSB8fCAoKF9nID0gcHJldlByb3BzLmNyb3ApID09PSBudWxsIHx8IF9nID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZy55KSAhPT0gKChfaCA9IHRoaXMucHJvcHMuY3JvcCkgPT09IG51bGwgfHwgX2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9oLnkpKSB7XG4gICAgICB0aGlzLmVtaXRDcm9wQXJlYUNoYW5nZSgpO1xuICAgIH1cblxuICAgIGlmIChwcmV2UHJvcHMuem9vbVdpdGhTY3JvbGwgIT09IHRoaXMucHJvcHMuem9vbVdpdGhTY3JvbGwgJiYgdGhpcy5jb250YWluZXJSZWYpIHtcbiAgICAgIHRoaXMucHJvcHMuem9vbVdpdGhTY3JvbGwgPyB0aGlzLmNvbnRhaW5lclJlZi5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIHRoaXMub25XaGVlbCwge1xuICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgfSkgOiB0aGlzLmNsZWFyU2Nyb2xsRXZlbnQoKTtcbiAgICB9XG5cbiAgICBpZiAocHJldlByb3BzLnZpZGVvICE9PSB0aGlzLnByb3BzLnZpZGVvKSB7XG4gICAgICAoX2ogPSB0aGlzLnZpZGVvUmVmKSA9PT0gbnVsbCB8fCBfaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2oubG9hZCgpO1xuICAgIH1cbiAgfTtcblxuICBDcm9wcGVyLnByb3RvdHlwZS5nZXRBc3BlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY3JvcFNpemUgPSBfYS5jcm9wU2l6ZSxcbiAgICAgICAgYXNwZWN0ID0gX2EuYXNwZWN0O1xuXG4gICAgaWYgKGNyb3BTaXplKSB7XG4gICAgICByZXR1cm4gY3JvcFNpemUud2lkdGggLyBjcm9wU2l6ZS5oZWlnaHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzcGVjdDtcbiAgfTtcblxuICBDcm9wcGVyLnByb3RvdHlwZS5vblBpbmNoU3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBwb2ludEEgPSBDcm9wcGVyLmdldFRvdWNoUG9pbnQoZS50b3VjaGVzWzBdKTtcbiAgICB2YXIgcG9pbnRCID0gQ3JvcHBlci5nZXRUb3VjaFBvaW50KGUudG91Y2hlc1sxXSk7XG4gICAgdGhpcy5sYXN0UGluY2hEaXN0YW5jZSA9IGdldERpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEEsIHBvaW50Qik7XG4gICAgdGhpcy5sYXN0UGluY2hSb3RhdGlvbiA9IGdldFJvdGF0aW9uQmV0d2VlblBvaW50cyhwb2ludEEsIHBvaW50Qik7XG4gICAgdGhpcy5vbkRyYWdTdGFydChnZXRDZW50ZXIocG9pbnRBLCBwb2ludEIpKTtcbiAgfTtcblxuICBDcm9wcGVyLnByb3RvdHlwZS5vblBpbmNoTW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBwb2ludEEgPSBDcm9wcGVyLmdldFRvdWNoUG9pbnQoZS50b3VjaGVzWzBdKTtcbiAgICB2YXIgcG9pbnRCID0gQ3JvcHBlci5nZXRUb3VjaFBvaW50KGUudG91Y2hlc1sxXSk7XG4gICAgdmFyIGNlbnRlciA9IGdldENlbnRlcihwb2ludEEsIHBvaW50Qik7XG4gICAgdGhpcy5vbkRyYWcoY2VudGVyKTtcbiAgICBpZiAodGhpcy5yYWZQaW5jaFRpbWVvdXQpIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnJhZlBpbmNoVGltZW91dCk7XG4gICAgdGhpcy5yYWZQaW5jaFRpbWVvdXQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkaXN0YW5jZSA9IGdldERpc3RhbmNlQmV0d2VlblBvaW50cyhwb2ludEEsIHBvaW50Qik7XG4gICAgICB2YXIgbmV3Wm9vbSA9IF90aGlzLnByb3BzLnpvb20gKiAoZGlzdGFuY2UgLyBfdGhpcy5sYXN0UGluY2hEaXN0YW5jZSk7XG5cbiAgICAgIF90aGlzLnNldE5ld1pvb20obmV3Wm9vbSwgY2VudGVyKTtcblxuICAgICAgX3RoaXMubGFzdFBpbmNoRGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgIHZhciByb3RhdGlvbiA9IGdldFJvdGF0aW9uQmV0d2VlblBvaW50cyhwb2ludEEsIHBvaW50Qik7XG4gICAgICB2YXIgbmV3Um90YXRpb24gPSBfdGhpcy5wcm9wcy5yb3RhdGlvbiArIChyb3RhdGlvbiAtIF90aGlzLmxhc3RQaW5jaFJvdGF0aW9uKTtcbiAgICAgIF90aGlzLnByb3BzLm9uUm90YXRpb25DaGFuZ2UgJiYgX3RoaXMucHJvcHMub25Sb3RhdGlvbkNoYW5nZShuZXdSb3RhdGlvbik7XG4gICAgICBfdGhpcy5sYXN0UGluY2hSb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgIH0pO1xuICB9O1xuXG4gIENyb3BwZXIucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIF9hID0gdGhpcy5wcm9wcyxcbiAgICAgICAgaW1hZ2UgPSBfYS5pbWFnZSxcbiAgICAgICAgdmlkZW8gPSBfYS52aWRlbyxcbiAgICAgICAgbWVkaWFQcm9wcyA9IF9hLm1lZGlhUHJvcHMsXG4gICAgICAgIHRyYW5zZm9ybSA9IF9hLnRyYW5zZm9ybSxcbiAgICAgICAgX2IgPSBfYS5jcm9wLFxuICAgICAgICB4ID0gX2IueCxcbiAgICAgICAgeSA9IF9iLnksXG4gICAgICAgIHJvdGF0aW9uID0gX2Eucm90YXRpb24sXG4gICAgICAgIHpvb20gPSBfYS56b29tLFxuICAgICAgICBjcm9wU2hhcGUgPSBfYS5jcm9wU2hhcGUsXG4gICAgICAgIHNob3dHcmlkID0gX2Euc2hvd0dyaWQsXG4gICAgICAgIF9jID0gX2Euc3R5bGUsXG4gICAgICAgIGNvbnRhaW5lclN0eWxlID0gX2MuY29udGFpbmVyU3R5bGUsXG4gICAgICAgIGNyb3BBcmVhU3R5bGUgPSBfYy5jcm9wQXJlYVN0eWxlLFxuICAgICAgICBtZWRpYVN0eWxlID0gX2MubWVkaWFTdHlsZSxcbiAgICAgICAgX2QgPSBfYS5jbGFzc2VzLFxuICAgICAgICBjb250YWluZXJDbGFzc05hbWUgPSBfZC5jb250YWluZXJDbGFzc05hbWUsXG4gICAgICAgIGNyb3BBcmVhQ2xhc3NOYW1lID0gX2QuY3JvcEFyZWFDbGFzc05hbWUsXG4gICAgICAgIG1lZGlhQ2xhc3NOYW1lID0gX2QubWVkaWFDbGFzc05hbWUsXG4gICAgICAgIG9iamVjdEZpdCA9IF9hLm9iamVjdEZpdDtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgb25Nb3VzZURvd246IHRoaXMub25Nb3VzZURvd24sXG4gICAgICBvblRvdWNoU3RhcnQ6IHRoaXMub25Ub3VjaFN0YXJ0LFxuICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWwpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRhaW5lclJlZiA9IGVsO1xuICAgICAgfSxcbiAgICAgIFwiZGF0YS10ZXN0aWRcIjogXCJjb250YWluZXJcIixcbiAgICAgIHN0eWxlOiBjb250YWluZXJTdHlsZSxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcygncmVhY3RFYXN5Q3JvcF9Db250YWluZXInLCBjb250YWluZXJDbGFzc05hbWUpXG4gICAgfSwgaW1hZ2UgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImltZ1wiLCBfX2Fzc2lnbih7XG4gICAgICBhbHQ6IFwiXCIsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3JlYWN0RWFzeUNyb3BfSW1hZ2UnLCBvYmplY3RGaXQgPT09ICdjb250YWluJyAmJiAncmVhY3RFYXN5Q3JvcF9Db250YWluJywgb2JqZWN0Rml0ID09PSAnaG9yaXpvbnRhbC1jb3ZlcicgJiYgJ3JlYWN0RWFzeUNyb3BfQ292ZXJfSG9yaXpvbnRhbCcsIG9iamVjdEZpdCA9PT0gJ3ZlcnRpY2FsLWNvdmVyJyAmJiAncmVhY3RFYXN5Q3JvcF9Db3Zlcl9WZXJ0aWNhbCcsIG1lZGlhQ2xhc3NOYW1lKVxuICAgIH0sIG1lZGlhUHJvcHMsIHtcbiAgICAgIHNyYzogaW1hZ2UsXG4gICAgICByZWY6IGZ1bmN0aW9uIHJlZihlbCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaW1hZ2VSZWYgPSBlbDtcbiAgICAgIH0sXG4gICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG1lZGlhU3R5bGUpLCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtIHx8IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpIHJvdGF0ZShcIiArIHJvdGF0aW9uICsgXCJkZWcpIHNjYWxlKFwiICsgem9vbSArIFwiKVwiXG4gICAgICB9KSxcbiAgICAgIG9uTG9hZDogdGhpcy5vbk1lZGlhTG9hZFxuICAgIH0pKSA6IHZpZGVvICYmIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidmlkZW9cIiwgX19hc3NpZ24oe1xuICAgICAgYXV0b1BsYXk6IHRydWUsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgbXV0ZWQ6IHRydWUsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3JlYWN0RWFzeUNyb3BfVmlkZW8nLCBvYmplY3RGaXQgPT09ICdjb250YWluJyAmJiAncmVhY3RFYXN5Q3JvcF9Db250YWluJywgb2JqZWN0Rml0ID09PSAnaG9yaXpvbnRhbC1jb3ZlcicgJiYgJ3JlYWN0RWFzeUNyb3BfQ292ZXJfSG9yaXpvbnRhbCcsIG9iamVjdEZpdCA9PT0gJ3ZlcnRpY2FsLWNvdmVyJyAmJiAncmVhY3RFYXN5Q3JvcF9Db3Zlcl9WZXJ0aWNhbCcsIG1lZGlhQ2xhc3NOYW1lKVxuICAgIH0sIG1lZGlhUHJvcHMsIHtcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy52aWRlb1JlZiA9IGVsO1xuICAgICAgfSxcbiAgICAgIG9uTG9hZGVkTWV0YWRhdGE6IHRoaXMub25NZWRpYUxvYWQsXG4gICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIG1lZGlhU3R5bGUpLCB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNmb3JtIHx8IFwidHJhbnNsYXRlKFwiICsgeCArIFwicHgsIFwiICsgeSArIFwicHgpIHJvdGF0ZShcIiArIHJvdGF0aW9uICsgXCJkZWcpIHNjYWxlKFwiICsgem9vbSArIFwiKVwiXG4gICAgICB9KSxcbiAgICAgIGNvbnRyb2xzOiBmYWxzZVxuICAgIH0pLCAoQXJyYXkuaXNBcnJheSh2aWRlbykgPyB2aWRlbyA6IFt7XG4gICAgICBzcmM6IHZpZGVvXG4gICAgfV0pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic291cmNlXCIsIF9fYXNzaWduKHtcbiAgICAgICAga2V5OiBpdGVtLnNyY1xuICAgICAgfSwgaXRlbSkpO1xuICAgIH0pKSwgdGhpcy5zdGF0ZS5jcm9wU2l6ZSAmJiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIGNyb3BBcmVhU3R5bGUpLCB7XG4gICAgICAgIHdpZHRoOiB0aGlzLnN0YXRlLmNyb3BTaXplLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuc3RhdGUuY3JvcFNpemUuaGVpZ2h0XG4gICAgICB9KSxcbiAgICAgIFwiZGF0YS10ZXN0aWRcIjogXCJjcm9wcGVyXCIsXG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMoJ3JlYWN0RWFzeUNyb3BfQ3JvcEFyZWEnLCBjcm9wU2hhcGUgPT09ICdyb3VuZCcgJiYgJ3JlYWN0RWFzeUNyb3BfQ3JvcEFyZWFSb3VuZCcsIHNob3dHcmlkICYmICdyZWFjdEVhc3lDcm9wX0Nyb3BBcmVhR3JpZCcsIGNyb3BBcmVhQ2xhc3NOYW1lKVxuICAgIH0pKTtcbiAgfTtcblxuICBDcm9wcGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB6b29tOiAxLFxuICAgIHJvdGF0aW9uOiAwLFxuICAgIGFzcGVjdDogNCAvIDMsXG4gICAgbWF4Wm9vbTogTUFYX1pPT00sXG4gICAgbWluWm9vbTogTUlOX1pPT00sXG4gICAgY3JvcFNoYXBlOiAncmVjdCcsXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXG4gICAgc2hvd0dyaWQ6IHRydWUsXG4gICAgc3R5bGU6IHt9LFxuICAgIGNsYXNzZXM6IHt9LFxuICAgIG1lZGlhUHJvcHM6IHt9LFxuICAgIHpvb21TcGVlZDogMSxcbiAgICByZXN0cmljdFBvc2l0aW9uOiB0cnVlLFxuICAgIHpvb21XaXRoU2Nyb2xsOiB0cnVlXG4gIH07XG5cbiAgQ3JvcHBlci5nZXRNb3VzZVBvaW50ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogTnVtYmVyKGUuY2xpZW50WCksXG4gICAgICB5OiBOdW1iZXIoZS5jbGllbnRZKVxuICAgIH07XG4gIH07XG5cbiAgQ3JvcHBlci5nZXRUb3VjaFBvaW50ID0gZnVuY3Rpb24gKHRvdWNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE51bWJlcih0b3VjaC5jbGllbnRYKSxcbiAgICAgIHk6IE51bWJlcih0b3VjaC5jbGllbnRZKVxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIENyb3BwZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENyb3BwZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tb2R1bGUuanMubWFwXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19jcmVhdGVCaW5kaW5nID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBrMiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9KTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9