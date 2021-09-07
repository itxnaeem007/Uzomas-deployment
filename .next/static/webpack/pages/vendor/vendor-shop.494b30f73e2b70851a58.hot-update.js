webpackHotUpdate_N_E("pages/vendor/vendor-shop",{

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
  var children = [];

  for (var i = 10; i < 36; i++) {
    children.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
      children: i.toString(36) + i
    }, i.toString(36) + i, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
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
          lineNumber: 116,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "col-group p-xs-0 text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "col-centered col-xs-12 col-lg-6 mb-xs-4 mb-md-5",
            children: "Add as many listings as you can. Five or more would be a great start. More listings means more chances to be discovered!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
              lineNumber: 131,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-lighter",
              children: "Add as many as you can so buyers can see every detail."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
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
                  lineNumber: 141,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 139,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Use up to five photos to show your item's most important qualities."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 148,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Tips:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 152,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "text-smaller text-gray-lighter",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Use natural light and no flash."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 156,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Include a common object for scale."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 157,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Show the item being held, worn, or used."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 160,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Shoot against a clean, simple background."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 164,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Add photos to your variations so buyers can see all their options."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 168,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 147,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product__pic",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-sm-8 col-xl-9 col-tv-10 pt-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_account_sellerModules_UploadProductPics__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 177,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 114,
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
              lineNumber: 191,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-lighter",
              children: "Tell the world all about your item and why they\u2019ll love it."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
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
                  lineNumber: 201,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Include keywords that buyers would use to search for your item."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 208,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 207,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product__pic ".concat(_styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.span),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-sm-8 col-xl-9 col-tv-10 pt-5",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: _styles_sellerProducts_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.span,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
                    mode: "tags",
                    style: {
                      width: '100%'
                    },
                    onChange: handleChange,
                    tokenSeparators: [','],
                    children: children
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 217,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
                    placeholderTextColor: "green",
                    placeholder: "Keywords"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 216,
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
                lineNumber: 215,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 214,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvbW9kdWxlcy9Qcm9kdWN0U3RvY2suanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RTdG9jayIsIk9wdGlvbiIsIlNlbGVjdCIsImNoaWxkcmVuIiwiaSIsInB1c2giLCJ0b1N0cmluZyIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9wdGlvbnMiLCJsYWJlbCIsIm9uQ2hhbmdlIiwic3R5bGVzIiwic3BhbiIsIndpZHRoIiwic2VsZWN0X2NhdGVnb3J5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUEsTUFDZkMsTUFEZSxHQUNKQywyQ0FESSxDQUNmRCxNQURlO0FBR3ZCLE1BQU1FLFFBQVEsR0FBRyxFQUFqQjs7QUFDQSxPQUFLLElBQUlDLENBQUMsR0FBRyxFQUFiLEVBQWlCQSxDQUFDLEdBQUcsRUFBckIsRUFBeUJBLENBQUMsRUFBMUIsRUFBOEI7QUFDMUJELFlBQVEsQ0FBQ0UsSUFBVCxlQUNJLHFFQUFDLE1BQUQ7QUFBQSxnQkFBa0NELENBQUMsQ0FBQ0UsUUFBRixDQUFXLEVBQVgsSUFBaUJGO0FBQW5ELE9BQWFBLENBQUMsQ0FBQ0UsUUFBRixDQUFXLEVBQVgsSUFBaUJGLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdIOztBQUVELFdBQVNHLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pCQyxXQUFPLENBQUNDLEdBQVIsb0JBQXdCRixLQUF4QjtBQUNIOztBQUVELE1BQU1HLE9BQU8sR0FBRyxDQUNaO0FBQ0lILFNBQUssRUFBRSxvQkFEWDtBQUVJSSxTQUFLLEVBQUUsb0JBRlg7QUFHSVQsWUFBUSxFQUFFLENBQ047QUFDSUssV0FBSyxFQUFFLGFBRFg7QUFFSUksV0FBSyxFQUFFO0FBRlgsS0FETSxFQUtOO0FBQ0lKLFdBQUssRUFBRSxRQURYO0FBRUlJLFdBQUssRUFBRTtBQUZYLEtBTE0sRUFTTjtBQUNJSixXQUFLLEVBQUUsTUFEWDtBQUVJSSxXQUFLLEVBQUU7QUFGWCxLQVRNLEVBYU47QUFDSUosV0FBSyxFQUFFLGVBRFg7QUFFSUksV0FBSyxFQUFFO0FBRlgsS0FiTSxFQWlCTjtBQUNJSixXQUFLLEVBQUUsTUFEWDtBQUVJSSxXQUFLLEVBQUU7QUFGWCxLQWpCTTtBQUhkLEdBRFksRUEyQlo7QUFDSUosU0FBSyxFQUFFLGtCQURYO0FBRUlJLFNBQUssRUFBRSxrQkFGWDtBQUdJVCxZQUFRLEVBQUUsQ0FDTjtBQUNJSyxXQUFLLEVBQUUsVUFEWDtBQUVJSSxXQUFLLEVBQUU7QUFGWCxLQURNLEVBS047QUFDSUosV0FBSyxFQUFFLFlBRFg7QUFFSUksV0FBSyxFQUFFO0FBRlgsS0FMTSxFQVNOO0FBQ0lKLFdBQUssRUFBRSxrQkFEWDtBQUVJSSxXQUFLLEVBQUU7QUFGWCxLQVRNLEVBYU47QUFDSUosV0FBSyxFQUFFLGtCQURYO0FBRUlJLFdBQUssRUFBRSxrQkFGWCxDQUdJOztBQUhKLEtBYk0sRUFrQk47QUFDSUosV0FBSyxFQUFFLGtCQURYO0FBRUlJLFdBQUssRUFBRTtBQUZYLEtBbEJNLEVBc0JOO0FBQ0lKLFdBQUssRUFBRSxXQURYO0FBRUlJLFdBQUssRUFBRTtBQUZYLEtBdEJNLEVBMEJOO0FBQ0lKLFdBQUssRUFBRSx1QkFEWDtBQUVJSSxXQUFLLEVBQUU7QUFGWCxLQTFCTTtBQUhkLEdBM0JZLEVBOERaO0FBQ0lKLFNBQUssRUFBRSxvQkFEWDtBQUVJSSxTQUFLLEVBQUUsb0JBRlg7QUFHSVQsWUFBUSxFQUFFLENBQ047QUFDSUssV0FBSyxFQUFFLGtCQURYO0FBRUlJLFdBQUssRUFBRSxrQkFGWDtBQUdJVCxjQUFRLEVBQUUsQ0FDTjtBQUNJSyxhQUFLLEVBQUUsYUFEWDtBQUVJSSxhQUFLLEVBQUU7QUFGWCxPQURNLEVBS047QUFDSUosYUFBSyxFQUFFLG1CQURYO0FBRUlJLGFBQUssRUFBRTtBQUZYLE9BTE0sRUFTTjtBQUNJSixhQUFLLEVBQUUsbUJBRFg7QUFFSUksYUFBSyxFQUFFO0FBRlgsT0FUTTtBQUhkLEtBRE07QUFIZCxHQTlEWSxDQUFoQjs7QUF1RkEsV0FBU0MsUUFBVCxDQUFrQkwsS0FBbEIsRUFBeUI7QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFBQSw0QkFDSTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFNLG1CQUFTLEVBQUMsOEJBQWhCO0FBQUEsaUNBQ0k7QUFBTSxxQkFBUyxFQUFDLGlEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFXSTtBQUNJLDRCQUFpQixRQURyQjtBQUVJLG1CQUFRLFFBRlo7QUFHSSxpQkFBUyxFQUFDLDhDQUhkO0FBQUEsK0JBSUk7QUFBSyxtQkFBUyxFQUFDLDZDQUFmO0FBQUEsa0NBQ0k7QUFBSyxxQkFBUyxFQUFDLGlCQUFmO0FBQUEsb0NBQ0k7QUFBSSx1QkFBUyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFFSTtBQUFHLHVCQUFTLEVBQUMsbUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBUUk7QUFBSyxxQkFBUyxFQUFDLDZDQUFmO0FBQUEsb0NBQ0k7QUFBSyx1QkFBUyxFQUFDLDRCQUFmO0FBQUEsc0NBQ0k7QUFBTyx5QkFBUyxFQUFDLGdCQUFqQjtBQUFBLGtEQUVJO0FBQ0ksMkJBQVMsRUFBQyxVQURkO0FBRUksaUNBQVksTUFGaEI7QUFBQSxzQ0FHWSxHQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFTSTtBQUFLLHlCQUFTLEVBQUMseUJBQWY7QUFBQSx3Q0FDSTtBQUFHLDJCQUFTLEVBQUMsd0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFLSTtBQUFHLDJCQUFTLEVBQUMsd0NBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEosZUFRSTtBQUFJLDJCQUFTLEVBQUMsZ0NBQWQ7QUFBQSwwQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUZKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEosZUFTSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFUSixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBc0NJO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLGtDQUFmO0FBQUEsdUNBQ0kscUVBQUMsZ0ZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBMEVJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsOENBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsNkNBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxvQ0FDSTtBQUFJLHVCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQUVJO0FBQUcsdUJBQVMsRUFBQyxtQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFRSTtBQUFLLHFCQUFTLEVBQUMsNkNBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQ0FDSTtBQUFPLHlCQUFTLEVBQUMsZ0JBQWpCO0FBQUEsaURBRUk7QUFDSSwyQkFBUyxFQUFDLFVBRGQ7QUFFSSxpQ0FBWSxNQUZoQjtBQUFBLHNDQUdZLEdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQVNJO0FBQUsseUJBQVMsRUFBQyx5QkFBZjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQyx3Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBaUJJO0FBQUssdUJBQVMseUJBQWtCTSx3RUFBTSxDQUFDQyxJQUF6QixDQUFkO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLGtDQUFmO0FBQUEsd0NBQ0k7QUFBTSwyQkFBUyxFQUFFRCx3RUFBTSxDQUFDQyxJQUF4QjtBQUFBLDBDQUNJLHFFQUFDLDJDQUFEO0FBQ0ksd0JBQUksRUFBQyxNQURUO0FBRUkseUJBQUssRUFBRTtBQUFFQywyQkFBSyxFQUFFO0FBQVQscUJBRlg7QUFHSSw0QkFBUSxFQUFFVCxZQUhkO0FBSUksbUNBQWUsRUFBRSxDQUFDLEdBQUQsQ0FKckI7QUFBQSw4QkFLS0o7QUFMTDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBU0kscUVBQUMsMENBQUQ7QUFDSSx3Q0FBb0IsRUFBQyxPQUR6QjtBQUVJLCtCQUFXLEVBQUM7QUFGaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFlSSxxRUFBQyx5Q0FBRDtBQUNJLDJCQUFTLEVBQUMsTUFEZDtBQUVJLDBCQUFRLEVBQUU7QUFBRVksd0JBQUksRUFBRTtBQUFSLG1CQUZkO0FBR0ksNEJBQVUsRUFBRTtBQUFFQSx3QkFBSSxFQUFFO0FBQVIsbUJBSGhCO0FBSUksd0JBQU0sRUFBQyxZQUpYO0FBQUEseUNBS0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQ0ksNkJBQVMsRUFBRUQsd0VBQU0sQ0FBQ0csZUFEdEI7QUFBQSwyQ0FFSSxxRUFBQyw2Q0FBRDtBQUNJLDZCQUFPLEVBQUVOLE9BRGI7QUFFSSw4QkFBUSxFQUFFRSxRQUZkO0FBR0ksaUNBQVcsRUFBQztBQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUVKLGVBMElJO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDSTtBQUFLLGlCQUFTLEVBQUMsOENBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsNkNBQWY7QUFBQSxrQ0FDSTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSxtQ0FDSTtBQUFJLHVCQUFTLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFJSTtBQUFLLHFCQUFTLEVBQUMsNkNBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQ0FDSTtBQUFPLHlCQUFTLEVBQUMsZ0JBQWpCO0FBQUEsaURBRUk7QUFDSSwyQkFBUyxFQUFDLFVBRGQ7QUFFSSxpQ0FBWSxNQUZoQjtBQUFBLHNDQUdZLEdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQVNJO0FBQUsseUJBQVMsRUFBQyx5QkFBZjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQyx3Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBb0JJO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLGtDQUFmO0FBQUEsdUNBQ0k7QUFBTSwyQkFBUyxFQUFFQyx3RUFBTSxDQUFDQyxJQUF4QjtBQUFBLHlDQUNJLHFFQUFDLDBDQUFEO0FBQ0ksd0NBQW9CLEVBQUMsT0FEekI7QUFFSSwrQkFBVyxFQUFDO0FBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBcEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKSixlQW9DSTtBQUFLLHFCQUFTLEVBQUMsNkNBQWY7QUFBQSxvQ0FDSTtBQUFLLHVCQUFTLEVBQUMsNEJBQWY7QUFBQSxzQ0FDSTtBQUFPLHlCQUFTLEVBQUMsZ0JBQWpCO0FBQUEsb0RBRUk7QUFDSSwyQkFBUyxFQUFDLFVBRGQ7QUFFSSxpQ0FBWSxNQUZoQjtBQUFBLHNDQUdZLEdBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQVNJO0FBQUsseUJBQVMsRUFBQyx5QkFBZjtBQUFBLHVDQUNJO0FBQUcsMkJBQVMsRUFBQyx3Q0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBbUJJO0FBQUssdUJBQVMsRUFBQyxjQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLGtDQUFmO0FBQUEsdUNBQ0k7QUFBTSwyQkFBUyxFQUFFRCx3RUFBTSxDQUFDQyxJQUF4QjtBQUFBLHlDQUNJLHFFQUFDLDBDQUFEO0FBQ0ksd0NBQW9CLEVBQUMsT0FEekI7QUFFSSwrQkFBVyxFQUFDO0FBRmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBbkJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFwQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUExSUo7QUFBQSxrQkFESjtBQW9OSCxDQTVURDs7S0FBTWYsWTtBQThUU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmVuZG9yL3ZlbmRvci1zaG9wLjQ5NGIzMGY3M2UyYjcwODUxYTU4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBVcGxvYWQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ2FzY2FkZXIsIEZvcm0sIElucHV0LCBTZWxlY3QgfSBmcm9tICdhbnRkJztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnfi9zdHlsZXMvc2VsbGVyUHJvZHVjdHMubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBVcGxvYWRQcm9kdWN0UGljcyBmcm9tICcuLi8uLi9hY2NvdW50L3NlbGxlck1vZHVsZXMvVXBsb2FkUHJvZHVjdFBpY3MnO1xyXG5cclxuY29uc3QgUHJvZHVjdFN0b2NrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuXHJcbiAgICBjb25zdCBjaGlsZHJlbiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDEwOyBpIDwgMzY7IGkrKykge1xyXG4gICAgICAgIGNoaWxkcmVuLnB1c2goXHJcbiAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpLnRvU3RyaW5nKDM2KSArIGl9PntpLnRvU3RyaW5nKDM2KSArIGl9PC9PcHRpb24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWQgJHt2YWx1ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICdDbG90aGluZyAmIEFwcGFyZWwnLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0Nsb3RoaW5nICYgQXBwYXJlbCcsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnV29tZW5zJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1dvbWVucycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQmFncycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdCYWdzJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiS2lkJ3MgRmFzaGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIktpZCdzIEZhc2hpb25cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdNZW5zJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ01lbnMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWU6ICdHYXJkZW4gJiBLaXRjaGVuJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdHYXJkZW4gJiBLaXRjaGVuJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0Nvb2t3YXJlJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Nvb2t3YXJlJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdEZWNvcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RlY29yYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0hvbWUgSW1wcm92ZW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSG9tZSBJbXByb3ZlbWVudCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnVXRlbnNpbCAmIEdhZGdldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdVdGVuc2lsICYgR2FkZ2V0JyxcclxuICAgICAgICAgICAgICAgICAgICAvLyBIb21lIEltcHJvdmVtZW50XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnSG9tZSBJbXByb3ZlbWVudCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdIb21lIEltcHJvdmVtZW50JyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdGdXJuaXR1cmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRnVybml0dXJlJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdQb3dlcnMgQW5kIEhhbmQgVG9vbHMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUG93ZXJzIEFuZCBIYW5kIFRvb2xzJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnQ29uc3VtZXIgRWxlY3RyaWNzJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdDb25zdW1lciBFbGVjdHJpY3MnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQWlyIENvbmRpdGlvbmVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdBaXIgQ29uZGl0aW9uZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1R5cGUgSGFuZ2luZyBDZWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVHlwZSBIYW5naW5nIENlbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1R5cGUgSGFuZ2luZyBXYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVHlwZSBIYW5naW5nIFdhbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLXhzLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+UHJvZHVjdCBMaXN0aW5nPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtZ3JvdXAgcC14cy0wIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNvbC1jZW50ZXJlZCBjb2wteHMtMTIgY29sLWxnLTYgbWIteHMtNCBtYi1tZC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGQgYXMgbWFueSBsaXN0aW5ncyBhcyB5b3UgY2FuLiBGaXZlIG9yIG1vcmUgd291bGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlIGEgZ3JlYXQgc3RhcnQuIE1vcmUgbGlzdGluZ3MgbWVhbnMgbW9yZSBjaGFuY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBiZSBkaXNjb3ZlcmVkIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1yZWdpb24tbmFtZT1cImltYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS11aT1cImltYWdlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VsbGVyX3Nob3BlX19jb250YWluZXIgcHQtNSBtYi14cy0yIG1iLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHAteHMtMiBwLW1kLTQgbWIteHMtMiBtYi1tZC0zIG1iLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi14cy0zIG1iLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi14cy0xXCI+UGhvdG9zPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS1saWdodGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIGFzIG1hbnkgYXMgeW91IGNhbiBzbyBidXllcnMgY2FuIHNlZSBldmVyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRldGFpbC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcGljX19jb250YWluZXIgY29sLWdyb3VwIGNvbC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wteGwtMyBjb2wtdHYtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdHJvbmcgbWIteHMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQaG90b3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZS14cyBoaWRlLXNtIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbGVyIHRleHQtZ3JheS1saWdodGVyIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZSB1cCB0byBmaXZlIHBob3RvcyB0byBzaG93IHlvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ncyBtb3N0IGltcG9ydGFudCBxdWFsaXRpZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbGVyIHRleHQtZ3JheS1saWdodGVyIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRpcHM6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRleHQtc21hbGxlciB0ZXh0LWdyYXktbGlnaHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlVzZSBuYXR1cmFsIGxpZ2h0IGFuZCBubyBmbGFzaC48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluY2x1ZGUgYSBjb21tb24gb2JqZWN0IGZvciBzY2FsZS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2hvdyB0aGUgaXRlbSBiZWluZyBoZWxkLCB3b3JuLCBvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZWQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob290IGFnYWluc3QgYSBjbGVhbiwgc2ltcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHBob3RvcyB0byB5b3VyIHZhcmlhdGlvbnMgc29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXllcnMgY2FuIHNlZSBhbGwgdGhlaXIgb3B0aW9ucy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBjb2wteGwtOSBjb2wtdHYtMTAgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXBsb2FkUHJvZHVjdFBpY3MgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxsZXJfc2hvcGVfX2NvbnRhaW5lciBwdC01IG1iLXhzLTIgbWItbWQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWwgcC14cy0yIHAtbWQtNCBtYi14cy0yIG1iLW1kLTMgbWItbGctNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLXhzLTMgbWItbWQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1iLXhzLTFcIj5MaXN0aW5nIERldGFpbHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LWxpZ2h0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUZWxsIHRoZSB3b3JsZCBhbGwgYWJvdXQgeW91ciBpdGVtIGFuZCB3aHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGV54oCZbGwgbG92ZSBpdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcGljX19jb250YWluZXIgY29sLWdyb3VwIGNvbC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wteGwtMyBjb2wtdHYtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdHJvbmcgbWIteHMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsqeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlLXhzIGhpZGUtc20gbWIteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsZXIgdGV4dC1ncmF5LWxpZ2h0ZXIgbWIteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSW5jbHVkZSBrZXl3b3JkcyB0aGF0IGJ1eWVycyB3b3VsZCB1c2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIHNlYXJjaCBmb3IgeW91ciBpdGVtLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHJvZHVjdF9fcGljICR7c3R5bGVzLnNwYW59YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tOCBjb2wteGwtOSBjb2wtdHYtMTAgcHQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlPVwidGFnc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5TZXBhcmF0b3JzPXtbJywnXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLZXl3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RfY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXNjYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsbGVyX3Nob3BlX19jb250YWluZXIgcHQtNSBtYi14cy0yIG1iLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHAteHMtMiBwLW1kLTQgbWIteHMtMiBtYi1tZC0zIG1iLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi14cy0zIG1iLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi14cy0xXCI+SW52ZW50b3J5IGFuZCBwcmljaW5nPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcGljX19jb250YWluZXIgY29sLWdyb3VwIGNvbC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wteGwtMyBjb2wtdHYtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdHJvbmcgbWIteHMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsqeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlLXhzIGhpZGUtc20gbWIteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsZXIgdGV4dC1ncmF5LWxpZ2h0ZXIgbWIteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgdG8gZmFjdG9yIGluIHRoZSBjb3N0cyBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLCBsYWJvdXIsIGFuZCBvdGhlciBidXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZW5zZXMuIElmIHlvdSBvZmZlciBmcmVlIGRlbGl2ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZSBzdXJlIHRvIGluY2x1ZGUgdGhlIGNvc3Qgb2YgcG9zdGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc28gaXQgZG9lc24ndCBlYXQgaW50byB5b3VyIHByb2ZpdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19waWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IGNvbC14bC05IGNvbC10di0xMCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIkIDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19waWNfX2NvbnRhaW5lciBjb2wtZ3JvdXAgY29sLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC14bC0zIGNvbC10di0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN0cm9uZyBtYi14cy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGUteHMgaGlkZS1zbSBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21hbGxlciB0ZXh0LWdyYXktbGlnaHRlciBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgcXVhbnRpdGllcyBncmVhdGVyIHRoYW4gb25lLCB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nIHdpbGwgcmVuZXcgYXV0b21hdGljYWxseSB1bnRpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQgc2VsbHMgb3V0LiBZb3XigJlsbCBiZSBjaGFyZ2VkIGEgVVNEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjIwIFVTRCBsaXN0aW5nIGZlZSBlYWNoIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19waWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IGNvbC14bC05IGNvbC10di0xMCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3RvY2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=