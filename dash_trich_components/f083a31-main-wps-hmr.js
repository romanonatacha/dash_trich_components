webpackHotUpdatedash_trich_components("main",{

/***/ "./src/lib/components/SideBar/SideBar.react.js":
/*!*****************************************************!*\
  !*** ./src/lib/components/SideBar/SideBar.react.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @trendmicro/react-sidenav */ "./node_modules/@trendmicro/react-sidenav/lib/index.js");
/* harmony import */ var _trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _trendmicro_react_sidenav_dist_react_sidenav_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @trendmicro/react-sidenav/dist/react-sidenav.css */ "./node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css");
/* harmony import */ var _trendmicro_react_sidenav_dist_react_sidenav_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_trendmicro_react_sidenav_dist_react_sidenav_css__WEBPACK_IMPORTED_MODULE_3__);
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






var SideBar = /*#__PURE__*/function (_Component) {
  _inherits(SideBar, _Component);

  var _super = _createSuper(SideBar);

  function SideBar() {
    _classCallCheck(this, SideBar);

    return _super.apply(this, arguments);
  }

  _createClass(SideBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          defaultSelected = _this$props.defaultSelected,
          expanded = _this$props.expanded,
          id = _this$props.id; // const settings = {
      // };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2___default.a, {
        id: id,
        onToggle: this.onToggle,
        className: isOpen ? 'open' : 'closed'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2___default.a.Toggle, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2___default.a.Nav, {
        defaultSelected: defaultSelected
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        eventKey: "home"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-fw fa-home",
        style: {
          fontSize: '1.75em'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavText"], null, "Home")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        eventKey: "charts"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavIcon"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "fa fa-fw fa-line-chart",
        style: {
          fontSize: '1.75em'
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavText"], null, "Charts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        eventKey: "charts/linechart"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavText"], null, "Line Chart")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
        eventKey: "charts/barchart"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_trendmicro_react_sidenav__WEBPACK_IMPORTED_MODULE_2__["NavText"], null, "Bar Chart")))));
    }
  }]);

  return SideBar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


SideBar.defaultProps = {};
SideBar.propTypes = {
  // /**
  //  * Dots under carousel
  //  */
  // dots: PropTypes.bool,
  // /**
  //  * Arrows to control carousel
  //  */
  // arrows: PropTypes.bool,
  // /**
  //  * If the carousel content will repeat in a loop
  //  */
  // infinite: PropTypes.bool,
  // /**
  //  * If the carousel will start to play automatically
  //  */
  // autoplay: PropTypes.bool,
  // /**
  //  * Speed of autoplay
  //  */
  // speed: PropTypes.number,
  // /**
  //  * How many slides you want to show
  //  */
  // slides_to_show: PropTypes.number,
  // /**
  //  * How many slides will scroll when you swipe the carousel
  //  */
  // slides_to_scroll: PropTypes.number,
  // /**
  //  * To centralize the carousel
  //  */
  // center_mode: PropTypes.bool,

  /**
   * Padding on the sides
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  // /**
  //  * If you can slide to scroll the slides
  //  */
  // swipe_to_slide: PropTypes.bool,
  // /**
  //  * The slides width varies according to the screen size
  //  */
  // variable_width: PropTypes.bool,
  // /**
  //  * Settings of breakpoints
  //  */
  // responsive: PropTypes.array,

  /**
   * If your carousel is vertical
   */
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  // /**
  //  * Your carousel is vertical
  //  */
  // children: PropTypes.node,
  // /**
  //  * Inline style of the component.
  //  */
  // style: PropTypes.object,

  /**
   * Style class of the component.
   */
  defaultSelected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXNoX3RyaWNoX2NvbXBvbmVudHMvLi9zcmMvbGliL2NvbXBvbmVudHMvU2lkZUJhci9TaWRlQmFyLnJlYWN0LmpzIl0sIm5hbWVzIjpbIlNpZGVCYXIiLCJwcm9wcyIsImRlZmF1bHRTZWxlY3RlZCIsImV4cGFuZGVkIiwiaWQiLCJvblRvZ2dsZSIsImlzT3BlbiIsImZvbnRTaXplIiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxPOzs7Ozs7Ozs7Ozs7OzZCQUVSO0FBQUEsd0JBRXFDLEtBQUtDLEtBRjFDO0FBQUEsVUFFR0MsZUFGSCxlQUVHQSxlQUZIO0FBQUEsVUFFb0JDLFFBRnBCLGVBRW9CQSxRQUZwQjtBQUFBLFVBRThCQyxFQUY5QixlQUU4QkEsRUFGOUIsRUFJTDtBQUVBOztBQUVBLDBCQUNJLDJEQUFDLGdFQUFEO0FBQVMsVUFBRSxFQUFFQSxFQUFiO0FBQWlCLGdCQUFRLEVBQUUsS0FBS0MsUUFBaEM7QUFBMEMsaUJBQVMsRUFBRUMsTUFBTSxHQUFHLE1BQUgsR0FBWTtBQUF2RSxzQkFFSSwyREFBQyxnRUFBRCxDQUFTLE1BQVQsT0FGSixlQUdJLDJEQUFDLGdFQUFELENBQVMsR0FBVDtBQUFhLHVCQUFlLEVBQUVKO0FBQTlCLHNCQUNJLDJEQUFDLGlFQUFEO0FBQVMsZ0JBQVEsRUFBQztBQUFsQixzQkFDSSwyREFBQyxpRUFBRCxxQkFDSTtBQUFHLGlCQUFTLEVBQUMsa0JBQWI7QUFBZ0MsYUFBSyxFQUFFO0FBQUVLLGtCQUFRLEVBQUU7QUFBWjtBQUF2QyxRQURKLENBREosZUFJSSwyREFBQyxpRUFBRCxlQUpKLENBREosZUFTSSwyREFBQyxpRUFBRDtBQUFTLGdCQUFRLEVBQUM7QUFBbEIsc0JBQ0ksMkRBQUMsaUVBQUQscUJBQ0k7QUFBRyxpQkFBUyxFQUFDLHdCQUFiO0FBQXNDLGFBQUssRUFBRTtBQUFFQSxrQkFBUSxFQUFFO0FBQVo7QUFBN0MsUUFESixDQURKLGVBSUksMkRBQUMsaUVBQUQsaUJBSkosZUFPSSwyREFBQyxpRUFBRDtBQUFTLGdCQUFRLEVBQUM7QUFBbEIsc0JBQ0ksMkRBQUMsaUVBQUQscUJBREosQ0FQSixlQVlJLDJEQUFDLGlFQUFEO0FBQVMsZ0JBQVEsRUFBQztBQUFsQixzQkFDSSwyREFBQyxpRUFBRCxvQkFESixDQVpKLENBVEosQ0FISixDQURKO0FBa0NIOzs7O0VBNUNnQ0MsK0M7OztBQWdEckNSLE9BQU8sQ0FBQ1MsWUFBUixHQUF1QixFQUF2QjtBQUVBVCxPQUFPLENBQUNVLFNBQVIsR0FBb0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0FOLElBQUUsRUFBRU8saURBQVMsQ0FBQ0MsTUE1Q0U7QUE4Q2hCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0FULFVBQVEsRUFBRVEsaURBQVMsQ0FBQ0UsSUFoRUo7QUFrRWhCO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7OztBQUdBWCxpQkFBZSxFQUFFUyxpREFBUyxDQUFDQztBQTlFWCxDQUFwQixDIiwiZmlsZSI6ImYwODNhMzEtbWFpbi13cHMtaG1yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgU2lkZU5hdiwgeyBUb2dnbGUsIE5hdiwgTmF2SXRlbSwgTmF2SWNvbiwgTmF2VGV4dCB9IGZyb20gJ0B0cmVuZG1pY3JvL3JlYWN0LXNpZGVuYXYnO1xuaW1wb3J0ICdAdHJlbmRtaWNyby9yZWFjdC1zaWRlbmF2L2Rpc3QvcmVhY3Qtc2lkZW5hdi5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIHJlbmRlcigpIHtcblxuICAgICAgICBjb25zdCB7IGRlZmF1bHRTZWxlY3RlZCwgZXhwYW5kZWQsIGlkIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgLy8gY29uc3Qgc2V0dGluZ3MgPSB7XG5cbiAgICAgICAgLy8gfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFNpZGVOYXYgaWQ9e2lkfSBvblRvZ2dsZT17dGhpcy5vblRvZ2dsZX0gY2xhc3NOYW1lPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2lkZU5hdi5Ub2dnbGUgLz5cbiAgICAgICAgICAgICAgICA8U2lkZU5hdi5OYXYgZGVmYXVsdFNlbGVjdGVkPXtkZWZhdWx0U2VsZWN0ZWR9PlxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT1cImhvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWZ3IGZhLWhvbWVcIiBzdHlsZT17eyBmb250U2l6ZTogJzEuNzVlbScgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT1cImNoYXJ0c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZncgZmEtbGluZS1jaGFydFwiIHN0eWxlPXt7IGZvbnRTaXplOiAnMS43NWVtJyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbSBldmVudEtleT1cImNoYXJ0cy9saW5lY2hhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGluZSBDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtIGV2ZW50S2V5PVwiY2hhcnRzL2JhcmNoYXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdlRleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJhciBDaGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxuICAgICAgICAgICAgICAgIDwvU2lkZU5hdi5OYXY+XG4gICAgICAgICAgICA8L1NpZGVOYXY+XG4gICAgICAgICk7XG4gICAgfVxuXG59XG5cblNpZGVCYXIuZGVmYXVsdFByb3BzID0ge307XG5cblNpZGVCYXIucHJvcFR5cGVzID0ge1xuICAgIC8vIC8qKlxuICAgIC8vICAqIERvdHMgdW5kZXIgY2Fyb3VzZWxcbiAgICAvLyAgKi9cbiAgICAvLyBkb3RzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIEFycm93cyB0byBjb250cm9sIGNhcm91c2VsXG4gICAgLy8gICovXG4gICAgLy8gYXJyb3dzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIElmIHRoZSBjYXJvdXNlbCBjb250ZW50IHdpbGwgcmVwZWF0IGluIGEgbG9vcFxuICAgIC8vICAqL1xuICAgIC8vIGluZmluaXRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIElmIHRoZSBjYXJvdXNlbCB3aWxsIHN0YXJ0IHRvIHBsYXkgYXV0b21hdGljYWxseVxuICAgIC8vICAqL1xuICAgIC8vIGF1dG9wbGF5OiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFNwZWVkIG9mIGF1dG9wbGF5XG4gICAgLy8gICovXG4gICAgLy8gc3BlZWQ6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBIb3cgbWFueSBzbGlkZXMgeW91IHdhbnQgdG8gc2hvd1xuICAgIC8vICAqL1xuICAgIC8vIHNsaWRlc190b19zaG93OiBQcm9wVHlwZXMubnVtYmVyLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogSG93IG1hbnkgc2xpZGVzIHdpbGwgc2Nyb2xsIHdoZW4geW91IHN3aXBlIHRoZSBjYXJvdXNlbFxuICAgIC8vICAqL1xuICAgIC8vIHNsaWRlc190b19zY3JvbGw6IFByb3BUeXBlcy5udW1iZXIsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBUbyBjZW50cmFsaXplIHRoZSBjYXJvdXNlbFxuICAgIC8vICAqL1xuICAgIC8vIGNlbnRlcl9tb2RlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFBhZGRpbmcgb24gdGhlIHNpZGVzXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBJZiB5b3UgY2FuIHNsaWRlIHRvIHNjcm9sbCB0aGUgc2xpZGVzXG4gICAgLy8gICovXG4gICAgLy8gc3dpcGVfdG9fc2xpZGU6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLy8gLyoqXG4gICAgLy8gICogVGhlIHNsaWRlcyB3aWR0aCB2YXJpZXMgYWNjb3JkaW5nIHRvIHRoZSBzY3JlZW4gc2l6ZVxuICAgIC8vICAqL1xuICAgIC8vIHZhcmlhYmxlX3dpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFNldHRpbmdzIG9mIGJyZWFrcG9pbnRzXG4gICAgLy8gICovXG4gICAgLy8gcmVzcG9uc2l2ZTogUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgLyoqXG4gICAgICogSWYgeW91ciBjYXJvdXNlbCBpcyB2ZXJ0aWNhbFxuICAgICAqL1xuICAgIGV4cGFuZGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFlvdXIgY2Fyb3VzZWwgaXMgdmVydGljYWxcbiAgICAvLyAgKi9cbiAgICAvLyBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvLyAvKipcbiAgICAvLyAgKiBJbmxpbmUgc3R5bGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICAvLyAgKi9cbiAgICAvLyBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICAvKipcbiAgICAgKiBTdHlsZSBjbGFzcyBvZiB0aGUgY29tcG9uZW50LlxuICAgICAqL1xuICAgIGRlZmF1bHRTZWxlY3RlZDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9