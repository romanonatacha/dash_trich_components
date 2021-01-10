webpackHotUpdatedash_trich_components("main",{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css":
/*!*********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-grid-layout {\n  position: relative;\n  transition: height 200ms ease;\n}\n.react-grid-item {\n  transition: all 200ms ease;\n  transition-property: left, top;\n}\n.react-grid-item img {\n  pointer-events: none;\n  user-select: none;  \n}\n.react-grid-item.cssTransforms {\n  transition-property: transform;\n}\n.react-grid-item.resizing {\n  z-index: 1;\n  will-change: width, height;\n}\n\n.react-grid-item.react-draggable-dragging {\n  transition: none;\n  z-index: 3;\n  will-change: transform;\n}\n\n.react-grid-item.dropping {\n  visibility: hidden;\n}\n\n.react-grid-item.react-grid-placeholder {\n  background: red;\n  opacity: 0.2;\n  transition-duration: 100ms;\n  z-index: 2;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n\n.react-grid-item > .react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n}\n\n.react-grid-item > .react-resizable-handle::after {\n  content: \"\";\n  position: absolute;\n  right: 3px;\n  bottom: 3px;\n  width: 5px;\n  height: 5px;\n  border-right: 2px solid rgba(0, 0, 0, 0.4);\n  border-bottom: 2px solid rgba(0, 0, 0, 0.4);\n}\n\n.react-resizable-hide > .react-resizable-handle {\n  display: none;\n}\n\n.react-grid-item > .react-resizable-handle.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-w,\n.react-grid-item > .react-resizable-handle.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-n,\n.react-grid-item > .react-resizable-handle.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-grid-item > .react-resizable-handle.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".react-resizable {\n  position: relative;\n}\n.react-resizable-handle {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  box-sizing: border-box;\n  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2IDYiIHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYwMCIgeD0iMHB4IiB5PSIwcHgiIHdpZHRoPSI2cHgiIGhlaWdodD0iNnB4Ij48ZyBvcGFjaXR5PSIwLjMwMiI+PHBhdGggZD0iTSA2IDYgTCAwIDYgTCAwIDQuMiBMIDQgNC4yIEwgNC4yIDQuMiBMIDQuMiAwIEwgNiAwIEwgNiA2IEwgNiA2IFoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+');\n  background-position: bottom right;\n  padding: 0 3px 3px 0;\n}\n.react-resizable-handle-sw {\n  bottom: 0;\n  left: 0;\n  cursor: sw-resize;\n  transform: rotate(90deg);\n}\n.react-resizable-handle-se {\n  bottom: 0;\n  right: 0;\n  cursor: se-resize;\n}\n.react-resizable-handle-nw {\n  top: 0;\n  left: 0;\n  cursor: nw-resize;\n  transform: rotate(180deg);\n}\n.react-resizable-handle-ne {\n  top: 0;\n  right: 0;\n  cursor: ne-resize;\n  transform: rotate(270deg);\n}\n.react-resizable-handle-w,\n.react-resizable-handle-e {\n  top: 50%;\n  margin-top: -10px;\n  cursor: ew-resize;\n}\n.react-resizable-handle-w {\n  left: 0;\n  transform: rotate(135deg);\n}\n.react-resizable-handle-e {\n  right: 0;\n  transform: rotate(315deg);\n}\n.react-resizable-handle-n,\n.react-resizable-handle-s {\n  left: 50%;\n  margin-left: -10px;\n  cursor: ns-resize;\n}\n.react-resizable-handle-n {\n  top: 0;\n  transform: rotate(225deg);\n}\n.react-resizable-handle-s {\n  bottom: 0;\n  transform: rotate(45deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/react-grid-layout/css/styles.css":
/*!*******************************************************!*\
  !*** ./node_modules/react-grid-layout/css/styles.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-grid-layout/css/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/react-resizable/css/styles.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-resizable/css/styles.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"insertAt":"top","hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css", function() {
		var newContent = __webpack_require__(/*! !../../css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/react-resizable/css/styles.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/lib/components/GridLayoutComponent/GridLayoutComponent.react.js":
/*!*****************************************************************************!*\
  !*** ./src/lib/components/GridLayoutComponent/GridLayoutComponent.react.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridLayoutComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-layout/css/styles.css */ "./node_modules/react-grid-layout/css/styles.css");
/* harmony import */ var react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout_css_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-resizable/css/styles.css */ "./node_modules/react-resizable/css/styles.css");
/* harmony import */ var react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_resizable_css_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






/**
 * GridLayout is an GridLayout component.
 * It takes some setting properties
 * You put how many blocks of divs you want inside it,
 * and this div turn into slides
 */

var GridLayoutComponent = /*#__PURE__*/function (_Component) {
  _inherits(GridLayoutComponent, _Component);

  var _super = _createSuper(GridLayoutComponent);

  function GridLayoutComponent() {
    _classCallCheck(this, GridLayoutComponent);

    return _super.apply(this, arguments);
  }

  _createClass(GridLayoutComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          className = _this$props.className,
          children = _this$props.children; // layout is an array of objects, see the demo for more complete usage

      var layout = [{
        i: 'a',
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        "static": true
      }, {
        i: 'b',
        x: 1,
        y: 0,
        w: 3,
        h: 2,
        minW: 2,
        maxW: 4
      }, {
        i: 'c',
        x: 4,
        y: 0,
        w: 1,
        h: 2
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_4___default.a, {
        id: id,
        className: "".concat(className, " layout"),
        style: style,
        layout: layout,
        cols: 12,
        rowHeight: 30,
        width: 1200
      }, children);
    }
  }]);

  return GridLayoutComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


GridLayoutComponent.defaultProps = {};
GridLayoutComponent.propTypes = {
  /**
   * Your GridLayout is vertical
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,

  /**
   * Inline style of the component.
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Style class of the component.
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Id of the element
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RyaWNoX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vZGFzaF90cmljaF9jb21wb25lbnRzLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9jc3Mvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9kYXNoX3RyaWNoX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3M/ODRjMiIsIndlYnBhY2s6Ly9kYXNoX3RyaWNoX2NvbXBvbmVudHMvLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVzaXphYmxlL2Nzcy9zdHlsZXMuY3NzP2I4ZTgiLCJ3ZWJwYWNrOi8vZGFzaF90cmljaF9jb21wb25lbnRzLy4vc3JjL2xpYi9jb21wb25lbnRzL0dyaWRMYXlvdXRDb21wb25lbnQvR3JpZExheW91dENvbXBvbmVudC5yZWFjdC5qcyJdLCJuYW1lcyI6WyJHcmlkTGF5b3V0Q29tcG9uZW50IiwicHJvcHMiLCJzdHlsZSIsImNsYXNzTmFtZSIsImNoaWxkcmVuIiwibGF5b3V0IiwiaSIsIngiLCJ5IiwidyIsImgiLCJtaW5XIiwibWF4VyIsImlkIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwibm9kZSIsIm9iamVjdCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQywyRkFBc0M7QUFDaEY7QUFDQTtBQUNBLGNBQWMsUUFBUyx1QkFBdUIsdUJBQXVCLGtDQUFrQyxHQUFHLG9CQUFvQiwrQkFBK0IsbUNBQW1DLEdBQUcsd0JBQXdCLHlCQUF5QixzQkFBc0IsS0FBSyxrQ0FBa0MsbUNBQW1DLEdBQUcsNkJBQTZCLGVBQWUsK0JBQStCLEdBQUcsK0NBQStDLHFCQUFxQixlQUFlLDJCQUEyQixHQUFHLCtCQUErQix1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Ozs7QUFHQWhCLFdBQVMsRUFBRWMsaURBQVMsQ0FBQ0csTUFkTzs7QUFnQjVCOzs7QUFHQVAsSUFBRSxFQUFFSSxpREFBUyxDQUFDRztBQW5CYyxDQUFoQyxDIiwiZmlsZSI6IjY5ODE1NWMtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LWdyaWQtbGF5b3V0IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcyBlYXNlO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtIHtcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbGVmdCwgdG9wO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtIGltZyB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lOyAgXFxufVxcbi5yZWFjdC1ncmlkLWl0ZW0uY3NzVHJhbnNmb3JtcyB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XFxufVxcbi5yZWFjdC1ncmlkLWl0ZW0ucmVzaXppbmcge1xcbiAgei1pbmRleDogMTtcXG4gIHdpbGwtY2hhbmdlOiB3aWR0aCwgaGVpZ2h0O1xcbn1cXG5cXG4ucmVhY3QtZ3JpZC1pdGVtLnJlYWN0LWRyYWdnYWJsZS1kcmFnZ2luZyB7XFxuICB0cmFuc2l0aW9uOiBub25lO1xcbiAgei1pbmRleDogMztcXG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0uZHJvcHBpbmcge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucmVhY3QtZ3JpZC1pdGVtLnJlYWN0LWdyaWQtcGxhY2Vob2xkZXIge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTAwbXM7XFxuICB6LWluZGV4OiAyO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtby11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZTo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogM3B4O1xcbiAgYm90dG9tOiAzcHg7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiA1cHg7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjQpO1xcbn1cXG5cXG4ucmVhY3QtcmVzaXphYmxlLWhpZGUgPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zdyB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgY3Vyc29yOiBzdy1yZXNpemU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XFxufVxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXNlIHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY3Vyc29yOiBzZS1yZXNpemU7XFxufVxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW53IHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjdXJzb3I6IG53LXJlc2l6ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW5lIHtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY3Vyc29yOiBuZS1yZXNpemU7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13LFxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWUge1xcbiAgdG9wOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUucmVhY3QtcmVzaXphYmxlLWhhbmRsZS13IHtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1lIHtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMzE1ZGVnKTtcXG59XFxuLnJlYWN0LWdyaWQtaXRlbSA+IC5yZWFjdC1yZXNpemFibGUtaGFuZGxlLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbixcXG4ucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1zIHtcXG4gIGxlZnQ6IDUwJTtcXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ucmVhY3QtZ3JpZC1pdGVtID4gLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uIHtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XFxufVxcbi5yZWFjdC1ncmlkLWl0ZW0gPiAucmVhY3QtcmVzaXphYmxlLWhhbmRsZS5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXMge1xcbiAgYm90dG9tOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlYWN0LXJlc2l6YWJsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtb3JpZ2luOiBjb250ZW50LWJveDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0EySURZaUlITjBlV3hsUFNKaVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lObVptWm1abVl3TUNJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhkcFpIUm9QU0kyY0hnaUlHaGxhV2RvZEQwaU5uQjRJajQ4WnlCdmNHRmphWFI1UFNJd0xqTXdNaUkrUEhCaGRHZ2daRDBpVFNBMklEWWdUQ0F3SURZZ1RDQXdJRFF1TWlCTUlEUWdOQzR5SUV3Z05DNHlJRFF1TWlCTUlEUXVNaUF3SUV3Z05pQXdJRXdnTmlBMklFd2dOaUEySUZvaUlHWnBiR3c5SWlNd01EQXdNREFpTHo0OEwyYytQQzl6ZG1jKycpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIHJpZ2h0O1xcbiAgcGFkZGluZzogMCAzcHggM3B4IDA7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXN3IHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICBjdXJzb3I6IHN3LXJlc2l6ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtc2Uge1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IHNlLXJlc2l6ZTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbncge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGN1cnNvcjogbnctcmVzaXplO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtbmUge1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IG5lLXJlc2l6ZTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXcsXFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtZSB7XFxuICB0b3A6IDUwJTtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgY3Vyc29yOiBldy1yZXNpemU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXcge1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLWUge1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xcbn1cXG4ucmVhY3QtcmVzaXphYmxlLWhhbmRsZS1uLFxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLXMge1xcbiAgbGVmdDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgY3Vyc29yOiBucy1yZXNpemU7XFxufVxcbi5yZWFjdC1yZXNpemFibGUtaGFuZGxlLW4ge1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcXG59XFxuLnJlYWN0LXJlc2l6YWJsZS1oYW5kbGUtcyB7XFxuICBib3R0b206IDA7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImluc2VydEF0XCI6XCJ0b3BcIixcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaW5zZXJ0QXRcIjpcInRvcFwiLFwiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgJ3JlYWN0LWdyaWQtbGF5b3V0L2Nzcy9zdHlsZXMuY3NzJ1xuaW1wb3J0ICdyZWFjdC1yZXNpemFibGUvY3NzL3N0eWxlcy5jc3MnXG5pbXBvcnQgR3JpZExheW91dCBmcm9tICdyZWFjdC1ncmlkLWxheW91dCc7XG5cbi8qKlxuICogR3JpZExheW91dCBpcyBhbiBHcmlkTGF5b3V0IGNvbXBvbmVudC5cbiAqIEl0IHRha2VzIHNvbWUgc2V0dGluZyBwcm9wZXJ0aWVzXG4gKiBZb3UgcHV0IGhvdyBtYW55IGJsb2NrcyBvZiBkaXZzIHlvdSB3YW50IGluc2lkZSBpdCxcbiAqIGFuZCB0aGlzIGRpdiB0dXJuIGludG8gc2xpZGVzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JpZExheW91dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuXG4gICAgICAgIGNvbnN0IHsgc3R5bGUsIGNsYXNzTmFtZSwgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgLy8gbGF5b3V0IGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHNlZSB0aGUgZGVtbyBmb3IgbW9yZSBjb21wbGV0ZSB1c2FnZVxuICAgICAgICBjb25zdCBsYXlvdXQgPSBbXG4gICAgICAgICAgICB7IGk6ICdhJywgeDogMCwgeTogMCwgdzogMSwgaDogMiwgc3RhdGljOiB0cnVlIH0sXG4gICAgICAgICAgICB7IGk6ICdiJywgeDogMSwgeTogMCwgdzogMywgaDogMiwgbWluVzogMiwgbWF4VzogNCB9LFxuICAgICAgICAgICAgeyBpOiAnYycsIHg6IDQsIHk6IDAsIHc6IDEsIGg6IDIgfVxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgaWQ9e2lkfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gbGF5b3V0YH0gc3R5bGU9e3N0eWxlfSBsYXlvdXQ9e2xheW91dH0gY29scz17MTJ9IHJvd0hlaWdodD17MzB9IHdpZHRoPXsxMjAwfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkdyaWRMYXlvdXRDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xufTtcblxuR3JpZExheW91dENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogWW91ciBHcmlkTGF5b3V0IGlzIHZlcnRpY2FsXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIElkIG9mIHRoZSBlbGVtZW50XG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==