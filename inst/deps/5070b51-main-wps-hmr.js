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
          children = _this$props.children,
          id = _this$props.id,
          layout = _this$props.layout;
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
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Initial layout
   */
  layout: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RyaWNoX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvR3JpZExheW91dENvbXBvbmVudC9HcmlkTGF5b3V0Q29tcG9uZW50LnJlYWN0LmpzIl0sIm5hbWVzIjpbIkdyaWRMYXlvdXRDb21wb25lbnQiLCJwcm9wcyIsInN0eWxlIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJpZCIsImxheW91dCIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm5vZGUiLCJvYmplY3QiLCJzdHJpbmciLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7SUFPcUJBLG1COzs7Ozs7Ozs7Ozs7OzZCQUNSO0FBQUEsd0JBRThDLEtBQUtDLEtBRm5EO0FBQUEsVUFFR0MsS0FGSCxlQUVHQSxLQUZIO0FBQUEsVUFFVUMsU0FGVixlQUVVQSxTQUZWO0FBQUEsVUFFcUJDLFFBRnJCLGVBRXFCQSxRQUZyQjtBQUFBLFVBRStCQyxFQUYvQixlQUUrQkEsRUFGL0I7QUFBQSxVQUVtQ0MsTUFGbkMsZUFFbUNBLE1BRm5DO0FBSUwsMEJBQ0ksMkRBQUMsd0RBQUQ7QUFBWSxVQUFFLEVBQUVELEVBQWhCO0FBQW9CLGlCQUFTLFlBQUtGLFNBQUwsWUFBN0I7QUFBc0QsYUFBSyxFQUFFRCxLQUE3RDtBQUFvRSxjQUFNLEVBQUVJLE1BQTVFO0FBQW9GLFlBQUksRUFBRSxFQUExRjtBQUE4RixpQkFBUyxFQUFFLEVBQXpHO0FBQTZHLGFBQUssRUFBRTtBQUFwSCxTQUNLRixRQURMLENBREo7QUFLSDs7OztFQVY0Q0csK0M7OztBQWFqRFAsbUJBQW1CLENBQUNRLFlBQXBCLEdBQW1DLEVBQW5DO0FBR0FSLG1CQUFtQixDQUFDUyxTQUFwQixHQUFnQztBQUM1Qjs7O0FBR0FMLFVBQVEsRUFBRU0saURBQVMsQ0FBQ0MsSUFKUTs7QUFNNUI7OztBQUdBVCxPQUFLLEVBQUVRLGlEQUFTLENBQUNFLE1BVFc7O0FBVzVCOzs7QUFHQVQsV0FBUyxFQUFFTyxpREFBUyxDQUFDRyxNQWRPOztBQWdCNUI7OztBQUdBUixJQUFFLEVBQUVLLGlEQUFTLENBQUNHLE1BbkJjOztBQXFCNUI7OztBQUdBUCxRQUFNLEVBQUVJLGlEQUFTLENBQUNJO0FBeEJVLENBQWhDLEMiLCJmaWxlIjoiNTA3MGI1MS1tYWluLXdwcy1obXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCAncmVhY3QtZ3JpZC1sYXlvdXQvY3NzL3N0eWxlcy5jc3MnXG5pbXBvcnQgJ3JlYWN0LXJlc2l6YWJsZS9jc3Mvc3R5bGVzLmNzcydcbmltcG9ydCBHcmlkTGF5b3V0IGZyb20gJ3JlYWN0LWdyaWQtbGF5b3V0JztcblxuLyoqXG4gKiBHcmlkTGF5b3V0IGlzIGFuIEdyaWRMYXlvdXQgY29tcG9uZW50LlxuICogSXQgdGFrZXMgc29tZSBzZXR0aW5nIHByb3BlcnRpZXNcbiAqIFlvdSBwdXQgaG93IG1hbnkgYmxvY2tzIG9mIGRpdnMgeW91IHdhbnQgaW5zaWRlIGl0LFxuICogYW5kIHRoaXMgZGl2IHR1cm4gaW50byBzbGlkZXNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmlkTGF5b3V0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG5cbiAgICAgICAgY29uc3QgeyBzdHlsZSwgY2xhc3NOYW1lLCBjaGlsZHJlbiwgaWQsIGxheW91dCB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPEdyaWRMYXlvdXQgaWQ9e2lkfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gbGF5b3V0YH0gc3R5bGU9e3N0eWxlfSBsYXlvdXQ9e2xheW91dH0gY29scz17MTJ9IHJvd0hlaWdodD17MzB9IHdpZHRoPXsxMjAwfT5cbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XG4gICAgICAgIClcbiAgICB9XG59XG5cbkdyaWRMYXlvdXRDb21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xufTtcblxuR3JpZExheW91dENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgLyoqXG4gICAgICogWW91ciBHcmlkTGF5b3V0IGlzIHZlcnRpY2FsXG4gICAgICovXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogSW5saW5lIHN0eWxlIG9mIHRoZSBjb21wb25lbnQuXG4gICAgICovXG4gICAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIElkIG9mIHRoZSBlbGVtZW50XG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsIGxheW91dFxuICAgICAqL1xuICAgIGxheW91dDogUHJvcFR5cGVzLmFycmF5LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=