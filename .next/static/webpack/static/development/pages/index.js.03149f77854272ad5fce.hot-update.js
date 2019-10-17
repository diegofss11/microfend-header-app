webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "/Users/diego/Workspace/microfront-ends/microfront-end-app/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var App = function App(_ref) {
  var headerHtml = _ref.headerHtml,
      sidebarHtml = _ref.sidebarHtml,
      contentHtml = _ref.contentHtml;
  return __jsx("div", {
    className: "homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "header",
    dangerouslySetInnerHTML: {
      __html: headerHtml
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), __jsx("div", {
    className: "sidebar",
    dangerouslySetInnerHTML: {
      __html: sidebarHtml
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    dangerouslySetInnerHTML: {
      __html: contentHtml
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
};

App.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, header, headerHtml, content, contentHtml, sidebar, sidebarHtml;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://microfend-header.herokuapp.com/');

          case 3:
            header = _context.sent;
            _context.next = 6;
            return header.text();

          case 6:
            headerHtml = _context.sent;
            _context.next = 9;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://microfend-content.herokuapp.com/');

          case 9:
            content = _context.sent;
            _context.next = 12;
            return content.text();

          case 12:
            contentHtml = _context.sent;
            _context.next = 15;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://microfend-sidebar.herokuapp.com/');

          case 15:
            sidebar = _context.sent;
            _context.next = 18;
            return sidebar.text();

          case 18:
            sidebarHtml = _context.sent;
            return _context.abrupt("return", {
              headerHtml: headerHtml,
              contentHtml: contentHtml,
              sidebarHtml: sidebarHtml
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.03149f77854272ad5fce.hot-update.js.map