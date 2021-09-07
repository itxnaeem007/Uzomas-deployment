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
  var children = ['Product', 'Seller']; // for (let i = 10; i < 36; i++) {
  //     children.push(
  //         <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
  //     );
  // }

  for (var _i = 0, _children = children; _i < _children.length; _i++) {
    var child = _children[_i];
    children.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Option, {
      children: child.toString()
    }, child.toString(), false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
          lineNumber: 122,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "col-group p-xs-0 text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "col-centered col-xs-12 col-lg-6 mb-xs-4 mb-md-5",
            children: "Add as many listings as you can. Five or more would be a great start. More listings means more chances to be discovered!"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
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
              lineNumber: 137,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-lighter",
              children: "Add as many as you can so buyers can see every detail."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
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
                  lineNumber: 147,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Use up to five photos to show your item's most important qualities."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Tips:"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
                  className: "text-smaller text-gray-lighter",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Use natural light and no flash."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 162,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Include a common object for scale."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Show the item being held, worn, or used."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Shoot against a clean, simple background."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 170,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                    children: "Add photos to your variations so buyers can see all their options."
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 174,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 161,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "product__pic",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-sm-8 col-xl-9 col-tv-10 pt-5",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_account_sellerModules_UploadProductPics__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 143,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
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
              lineNumber: 197,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "text-gray-lighter",
              children: "Tell the world all about your item and why they\u2019ll love it."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 196,
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
                  lineNumber: 207,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Include keywords that buyers would use to search for your item."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 214,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 213,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 204,
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
                    lineNumber: 223,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
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
                      lineNumber: 245,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 243,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 238,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
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
              lineNumber: 263,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 262,
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
                  lineNumber: 269,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 267,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "Remember to factor in the costs of materials, labour, and other business expenses. If you offer free delivery, make sure to include the cost of postage so it doesn't eat into your profits."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 276,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 275,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 266,
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
                    lineNumber: 288,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 287,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 286,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 265,
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
                  lineNumber: 301,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 299,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "hide-xs hide-sm mb-xs-2",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-smaller text-gray-lighter mb-xs-2",
                  children: "For quantities greater than one, this listing will renew automatically until it sells out. You\u2019ll be charged a USD 0.20 USD listing fee each time."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 298,
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
                    lineNumber: 319,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 318,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 317,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 261,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 259,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9wYXJ0aWFscy92ZW5kb3IvbW9kdWxlcy9Qcm9kdWN0U3RvY2suanN4Il0sIm5hbWVzIjpbIlByb2R1Y3RTdG9jayIsIk9wdGlvbiIsIlNlbGVjdCIsImNoaWxkcmVuIiwiY2hpbGQiLCJwdXNoIiwidG9TdHJpbmciLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwibGFiZWwiLCJvbkNoYW5nZSIsInN0eWxlcyIsInNwYW4iLCJ3aWR0aCIsInNlbGVjdF9jYXRlZ29yeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUFBLE1BQ2ZDLE1BRGUsR0FDSkMsMkNBREksQ0FDZkQsTUFEZTtBQUd2QixNQUFNRSxRQUFRLEdBQUcsQ0FBQyxTQUFELEVBQVksUUFBWixDQUFqQixDQUh1QixDQUl2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUFrQkEsUUFBbEIsK0JBQTRCO0FBQXZCLFFBQUlDLEtBQUssZ0JBQVQ7QUFDREQsWUFBUSxDQUFDRSxJQUFULGVBQ0kscUVBQUMsTUFBRDtBQUFBLGdCQUFnQ0QsS0FBSyxDQUFDRSxRQUFOO0FBQWhDLE9BQWFGLEtBQUssQ0FBQ0UsUUFBTixFQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESjtBQUdIOztBQUVELFdBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pCQyxXQUFPLENBQUNDLEdBQVIsb0JBQXdCRixLQUF4QjtBQUNIOztBQUVELE1BQU1HLE9BQU8sR0FBRyxDQUNaO0FBQ0lILFNBQUssRUFBRSxvQkFEWDtBQUVJSSxTQUFLLEVBQUUsb0JBRlg7QUFHSVQsWUFBUSxFQUFFLENBQ047QUFDSUssV0FBSyxFQUFFLGFBRFg7QUFFSUksV0FBSyxFQUFFO0FBRlgsS0FE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QWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQW1CSTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHFDQUNJO0FBQUsseUJBQVMsRUFBQyxrQ0FBZjtBQUFBLHVDQUNJO0FBQU0sMkJBQVMsRUFBRUQsd0VBQU0sQ0FBQ0MsSUFBeEI7QUFBQSx5Q0FDSSxxRUFBQywwQ0FBRDtBQUNJLHdDQUFvQixFQUFDLE9BRHpCO0FBRUksK0JBQVcsRUFBQztBQUZoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBNUlKO0FBQUEsa0JBREo7QUFzTkgsQ0FwVUQ7O0tBQU1mLFk7QUFzVVNBLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZlbmRvci92ZW5kb3Itc2hvcC40ZTRhOGRhZmExNjM1ZjJiZGM0NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHsgVXBsb2FkIH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7IENhc2NhZGVyLCBGb3JtLCBJbnB1dCwgU2VsZWN0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ34vc3R5bGVzL3NlbGxlclByb2R1Y3RzLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgVXBsb2FkUHJvZHVjdFBpY3MgZnJvbSAnLi4vLi4vYWNjb3VudC9zZWxsZXJNb2R1bGVzL1VwbG9hZFByb2R1Y3RQaWNzJztcclxuXHJcbmNvbnN0IFByb2R1Y3RTdG9jayA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcblxyXG4gICAgY29uc3QgY2hpbGRyZW4gPSBbJ1Byb2R1Y3QnLCAnU2VsbGVyJ107XHJcbiAgICAvLyBmb3IgKGxldCBpID0gMTA7IGkgPCAzNjsgaSsrKSB7XHJcbiAgICAvLyAgICAgY2hpbGRyZW4ucHVzaChcclxuICAgIC8vICAgICAgICAgPE9wdGlvbiBrZXk9e2kudG9TdHJpbmcoMzYpICsgaX0+e2kudG9TdHJpbmcoMzYpICsgaX08L09wdGlvbj5cclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XHJcbiAgICAgICAgY2hpbGRyZW4ucHVzaChcclxuICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2NoaWxkLnRvU3RyaW5nKCl9PntjaGlsZC50b1N0cmluZygpfTwvT3B0aW9uPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkICR7dmFsdWV9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnQ2xvdGhpbmcgJiBBcHBhcmVsJyxcclxuICAgICAgICAgICAgbGFiZWw6ICdDbG90aGluZyAmIEFwcGFyZWwnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWNjZXNzb3JpZXMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1dvbWVucycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdXb21lbnMnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0JhZ3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQmFncycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIktpZCdzIEZhc2hpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJLaWQncyBGYXNoaW9uXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnTWVucycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdNZW5zJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlOiAnR2FyZGVuICYgS2l0Y2hlbicsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnR2FyZGVuICYgS2l0Y2hlbicsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdDb29rd2FyZScsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDb29rd2FyZScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnRGVjb3JhdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEZWNvcmF0aW9uJyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdIb21lIEltcHJvdmVtZW50JyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0hvbWUgSW1wcm92ZW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ1V0ZW5zaWwgJiBHYWRnZXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVXRlbnNpbCAmIEdhZGdldCcsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSG9tZSBJbXByb3ZlbWVudFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0hvbWUgSW1wcm92ZW1lbnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSG9tZSBJbXByb3ZlbWVudCcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnRnVybml0dXJlJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0Z1cm5pdHVyZScsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnUG93ZXJzIEFuZCBIYW5kIFRvb2xzJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Bvd2VycyBBbmQgSGFuZCBUb29scycsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZTogJ0NvbnN1bWVyIEVsZWN0cmljcycsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnQ29uc3VtZXIgRWxlY3RyaWNzJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0FpciBDb25kaXRpb25lcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQWlyIENvbmRpdGlvbmVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdBY2Nlc3NvcmllcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FjY2Vzc29yaWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdUeXBlIEhhbmdpbmcgQ2VsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1R5cGUgSGFuZ2luZyBDZWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdUeXBlIEhhbmdpbmcgV2FsbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1R5cGUgSGFuZ2luZyBXYWxsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi14cy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPlByb2R1Y3QgTGlzdGluZzwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29sLWdyb3VwIHAteHMtMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjb2wtY2VudGVyZWQgY29sLXhzLTEyIGNvbC1sZy02IG1iLXhzLTQgbWItbWQtNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWRkIGFzIG1hbnkgbGlzdGluZ3MgYXMgeW91IGNhbi4gRml2ZSBvciBtb3JlIHdvdWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZSBhIGdyZWF0IHN0YXJ0LiBNb3JlIGxpc3RpbmdzIG1lYW5zIG1vcmUgY2hhbmNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYmUgZGlzY292ZXJlZCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtcmVnaW9uLW5hbWU9XCJpbWFnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtdWk9XCJpbWFnZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGxlcl9zaG9wZV9fY29udGFpbmVyIHB0LTUgbWIteHMtMiBtYi1tZC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbCBwLXhzLTIgcC1tZC00IG1iLXhzLTIgbWItbWQtMyBtYi1sZy00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWIteHMtMyBtYi1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibWIteHMtMVwiPlBob3RvczwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktbGlnaHRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBhcyBtYW55IGFzIHlvdSBjYW4gc28gYnV5ZXJzIGNhbiBzZWUgZXZlcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXRhaWwuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3BpY19fY29udGFpbmVyIGNvbC1ncm91cCBjb2wtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLXhsLTMgY29sLXR2LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Ryb25nIG1iLXhzLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGhvdG9zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGUteHMgaGlkZS1zbSBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21hbGxlciB0ZXh0LWdyYXktbGlnaHRlciBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2UgdXAgdG8gZml2ZSBwaG90b3MgdG8gc2hvdyB5b3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtJ3MgbW9zdCBpbXBvcnRhbnQgcXVhbGl0aWVzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21hbGxlciB0ZXh0LWdyYXktbGlnaHRlciBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsZXIgdGV4dC1ncmF5LWxpZ2h0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5Vc2UgbmF0dXJhbCBsaWdodCBhbmQgbm8gZmxhc2guPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJbmNsdWRlIGEgY29tbW9uIG9iamVjdCBmb3Igc2NhbGUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNob3cgdGhlIGl0ZW0gYmVpbmcgaGVsZCwgd29ybiwgb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaG9vdCBhZ2FpbnN0IGEgY2xlYW4sIHNpbXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBwaG90b3MgdG8geW91ciB2YXJpYXRpb25zIHNvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV5ZXJzIGNhbiBzZWUgYWxsIHRoZWlyIG9wdGlvbnMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3BpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggY29sLXhsLTkgY29sLXR2LTEwIHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVwbG9hZFByb2R1Y3RQaWNzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsbGVyX3Nob3BlX19jb250YWluZXIgcHQtNSBtYi14cy0yIG1iLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHAteHMtMiBwLW1kLTQgbWIteHMtMiBtYi1tZC0zIG1iLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi14cy0zIG1iLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi14cy0xXCI+TGlzdGluZyBEZXRhaWxzPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS1saWdodGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGVsbCB0aGUgd29ybGQgYWxsIGFib3V0IHlvdXIgaXRlbSBhbmQgd2h5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhleeKAmWxsIGxvdmUgaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3RfX3BpY19fY29udGFpbmVyIGNvbC1ncm91cCBjb2wtZmx1c2hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTQgY29sLXhsLTMgY29sLXR2LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Ryb25nIG1iLXhzLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7KnsnICd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZS14cyBoaWRlLXNtIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbWFsbGVyIHRleHQtZ3JheS1saWdodGVyIG1iLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEluY2x1ZGUga2V5d29yZHMgdGhhdCBidXllcnMgd291bGQgdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byBzZWFyY2ggZm9yIHlvdXIgaXRlbS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3RfX3BpYyAke3N0eWxlcy5zcGFufWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTggY29sLXhsLTkgY29sLXR2LTEwIHB0LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuc3Bhbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLZXl3b3Jkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZT1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuU2VwYXJhdG9ycz17WycsJ119PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHRDb2xvcj1cImdyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIktleXdvcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdC01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsQ29sPXt7IHNwYW46IDQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTQgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RfY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXNjYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsbGVyX3Nob3BlX19jb250YWluZXIgcHQtNSBtYi14cy0yIG1iLW1kLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsIHAteHMtMiBwLW1kLTQgbWIteHMtMiBtYi1tZC0zIG1iLWxnLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi14cy0zIG1iLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi14cy0xXCI+SW52ZW50b3J5IGFuZCBwcmljaW5nPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9fcGljX19jb250YWluZXIgY29sLWdyb3VwIGNvbC1mbHVzaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tNCBjb2wteGwtMyBjb2wtdHYtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzdHJvbmcgbWIteHMtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsqeycgJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRlLXhzIGhpZGUtc20gbWIteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtYWxsZXIgdGV4dC1ncmF5LWxpZ2h0ZXIgbWIteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgdG8gZmFjdG9yIGluIHRoZSBjb3N0cyBvZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0ZXJpYWxzLCBsYWJvdXIsIGFuZCBvdGhlciBidXNpbmVzc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwZW5zZXMuIElmIHlvdSBvZmZlciBmcmVlIGRlbGl2ZXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFrZSBzdXJlIHRvIGluY2x1ZGUgdGhlIGNvc3Qgb2YgcG9zdGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc28gaXQgZG9lc24ndCBlYXQgaW50byB5b3VyIHByb2ZpdHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19waWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IGNvbC14bC05IGNvbC10di0xMCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIkIDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19waWNfX2NvbnRhaW5lciBjb2wtZ3JvdXAgY29sLWZsdXNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS00IGNvbC14bC0zIGNvbC10di0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInN0cm9uZyBtYi14cy0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwOyp7JyAnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGUteHMgaGlkZS1zbSBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc21hbGxlciB0ZXh0LWdyYXktbGlnaHRlciBtYi14cy0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGb3IgcXVhbnRpdGllcyBncmVhdGVyIHRoYW4gb25lLCB0aGlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0aW5nIHdpbGwgcmVuZXcgYXV0b21hdGljYWxseSB1bnRpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXQgc2VsbHMgb3V0LiBZb3XigJlsbCBiZSBjaGFyZ2VkIGEgVVNEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLjIwIFVTRCBsaXN0aW5nIGZlZSBlYWNoIHRpbWUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X19waWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS04IGNvbC14bC05IGNvbC10di0xMCBwdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW59PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0Q29sb3I9XCJncmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0U3RvY2s7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=