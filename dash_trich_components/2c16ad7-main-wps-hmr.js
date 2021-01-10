webpackHotUpdatedash_trich_components("main",{

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
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/node_modules/react-grid-layout/css/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/node_modules/react-resizable/css/styles.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-layout */ "./node_modules/react-grid-layout/index.js");
/* harmony import */ var react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_layout__WEBPACK_IMPORTED_MODULE_3__);
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_grid_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RyaWNoX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR3JpZExheW91dENvbXBvbmVudC9HcmlkTGF5b3V0Q29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkdyaWRMYXlvdXRDb21wb25lbnQiLCJwcm9wcyIsInN0eWxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJsYXlvdXQiLCJpIiwieCIsInkiLCJ3IiwiaCIsIm1pblciLCJtYXhXIiwiaWQiLCJDb21wb25lbnQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJub2RlIiwib2JqZWN0Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7SUFPcUJBLG1COzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQUEsd0JBRWtDLEtBQUtDLEtBRnZDO0FBQUEsVUFFR0MsS0FGSCxlQUVHQSxLQUZIO0FBQUEsVUFFVUMsU0FGVixlQUVVQSxTQUZWO0FBQUEsVUFFcUJDLFFBRnJCLGVBRXFCQSxRQUZyQixFQUlMOztBQUNBLFVBQU1DLE1BQU0sR0FBRyxDQUNYO0FBQUVDLFNBQUMsRUFBRSxHQUFMO0FBQVVDLFNBQUMsRUFBRSxDQUFiO0FBQWdCQyxTQUFDLEVBQUUsQ0FBbkI7QUFBc0JDLFNBQUMsRUFBRSxDQUF6QjtBQUE0QkMsU0FBQyxFQUFFLENBQS9CO0FBQWtDLGtCQUFRO0FBQTFDLE9BRFcsRUFFWDtBQUFFSixTQUFDLEVBQUUsR0FBTDtBQUFVQyxTQUFDLEVBQUUsQ0FBYjtBQUFnQkMsU0FBQyxFQUFFLENBQW5CO0FBQXNCQyxTQUFDLEVBQUUsQ0FBekI7QUFBNEJDLFNBQUMsRUFBRSxDQUEvQjtBQUFrQ0MsWUFBSSxFQUFFLENBQXhDO0FBQTJDQyxZQUFJLEVBQUU7QUFBakQsT0FGVyxFQUdYO0FBQUVOLFNBQUMsRUFBRSxHQUFMO0FBQVVDLFNBQUMsRUFBRSxDQUFiO0FBQWdCQyxTQUFDLEVBQUUsQ0FBbkI7QUFBc0JDLFNBQUMsRUFBRSxDQUF6QjtBQUE0QkMsU0FBQyxFQUFFO0FBQS9CLE9BSFcsQ0FBZjtBQUtBLDBCQUNJLDJEQUFDLHdEQUFEO0FBQVksVUFBRSxFQUFFRyxFQUFoQjtBQUFvQixpQkFBUyxZQUFLVixTQUFMLFlBQTdCO0FBQXNELGFBQUssRUFBRUQsS0FBN0Q7QUFBb0UsY0FBTSxFQUFFRyxNQUE1RTtBQUFvRixZQUFJLEVBQUUsRUFBMUY7QUFBOEYsaUJBQVMsRUFBRSxFQUF6RztBQUE2RyxhQUFLLEVBQUU7QUFBcEgsU0FDS0QsUUFETCxDQURKO0FBS0g7Ozs7RUFoQjRDVSwrQzs7O0FBbUJqRGQsbUJBQW1CLENBQUNlLFlBQXBCLEdBQW1DLEVBQW5DO0FBR0FmLG1CQUFtQixDQUFDZ0IsU0FBcEIsR0FBZ0M7QUFDNUI7OztBQUdBWixVQUFRLEVBQUVhLGlEQUFTLENBQUNDLElBSlE7O0FBTTVCOzs7QUFHQWhCLE9BQUssRUFBRWUsaURBQVMsQ0FBQ0UsTUFUVzs7QUFXNUI7OztBQUdBaEIsV0FBUyxFQUFFYyxpREFBUyxDQUFDRyxNQWRPOztBQWdCNUI7OztBQUdBUCxJQUFFLEVBQUVJLGlEQUFTLENBQUNHO0FBbkJjLENBQWhDLEMiLCJmaWxlIjoiMmMxNmFkNy1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAnQC9ub2RlX21vZHVsZXMvcmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3MnXG5pbXBvcnQgJ0Avbm9kZV9tb2R1bGVzL3JlYWN0LXJlc2l6YWJsZS9jc3Mvc3R5bGVzLmNzcydcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcblxuLyoqXG4gKiBHcmlkTGF5b3V0IGlzIGFuIEdyaWRMYXlvdXQgY29tcG9uZW50LlxuICogSXQgdGFrZXMgc29tZSBzZXR0aW5nIHByb3BlcnRpZXNcbiAqIFlvdSBwdXQgaG93IG1hbnkgYmxvY2tzIG9mIGRpdnMgeW91IHdhbnQgaW5zaWRlIGl0LFxuICogYW5kIHRoaXMgZGl2IHR1cm4gaW50byBzbGlkZXNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgeyBzdHlsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICAvLyBsYXlvdXQgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgc2VlIHRoZSBkZW1vIGZvciBtb3JlIGNvbXBsZXRlIHVzYWdlXG4gICAgICAgIGNvbnN0IGxheW91dCA9IFtcbiAgICAgICAgICAgIHsgaTogJ2EnLCB4OiAwLCB5OiAwLCB3OiAxLCBoOiAyLCBzdGF0aWM6IHRydWUgfSxcbiAgICAgICAgICAgIHsgaTogJ2InLCB4OiAxLCB5OiAwLCB3OiAzLCBoOiAyLCBtaW5XOiAyLCBtYXhXOiA0IH0sXG4gICAgICAgICAgICB7IGk6ICdjJywgeDogNCwgeTogMCwgdzogMSwgaDogMiB9XG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8R3JpZExheW91dCBpZD17aWR9IGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBsYXlvdXRgfSBzdHlsZT17c3R5bGV9IGxheW91dD17bGF5b3V0fSBjb2xzPXsxMn0gcm93SGVpZ2h0PXszMH0gd2lkdGg9ezEyMDB9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvR3JpZExheW91dD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuR3JpZExheW91dENvbXBvbmVudC5kZWZhdWx0UHJvcHMgPSB7XG59O1xuXG5HcmlkTGF5b3V0Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBZb3VyIEdyaWRMYXlvdXQgaXMgdmVydGljYWxcbiAgICAgKi9cbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAgKi9cbiAgICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAgIC8qKlxuICAgICAqIFN0eWxlIGNsYXNzIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogSWQgb2YgdGhlIGVsZW1lbnRcbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9