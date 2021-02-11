import React, { Component } from 'react'
import ReactDOM from "react-dom"
import PropTypes from 'prop-types';

/**
 * A class for displaying an item in a grid
 * Designed to be wrapped in a function, similar to a higher-order component. Otherwise
 * the layout will render incorrectly
 */
class GridItem extends Component {
  constructor(props) {
    super(props);
    this.relayout = this.relayout.bind(this);
    this.relayoutChildren = this.relayoutChildren.bind(this);
  }

  componentDidUpdate(prevProps) {
    let updated = false;
    // Ensure that the layout has in fact changed before calling relayout
    const keys = ['w','h','x','y'];

    for (let key of keys) {
      if(this.props.layout[key] !== prevProps.layout[key]) {
        updated = true;
      }
    }

    if (updated) {
      this.relayoutChildren();
    }
  }

  componentDidMount() {
    this.relayoutChildren();
    window.addEventListener("resize", this.relayoutChildren);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.relayoutChildren);
  }

  /**
   * Iterate over children and trigger a relayout event
   */
  relayoutChildren() {

    function flattenReactChildrenToArray(nodeChildren, accumulated = []) {
      React.Children.forEach(nodeChildren, (childNode) => {
        accumulated.push(childNode);
        if (childNode && childNode.props && childNode.props.children) {
          flattenReactChildrenToArray(childNode.props.children, accumulated);
        }
      });
      return accumulated;
    }

    // Relayout after a time period so that the rest of the layout can render properly
    window.setTimeout(() => {
      let flat = flattenReactChildrenToArray(this.props.children);
      flat.forEach(this.relayout);
    }, 50);
  }

  /**
   * Relayout the Plotly objects; modify their sizes to fit inside the columns
   */
  relayout(child) {

    const rootNode = ReactDOM.findDOMNode(this).parentElement; //gets the grid item node so we can calculate the correct plot height

    function outerHeight(el) {
      var height = el.offsetHeight;
      var style = getComputedStyle(el);
    
      height += parseInt(style.marginTop) + parseInt(style.marginBottom);
      return height;
    }

    function innerHeight(el) {
      var height = el.clientHeight;
      var style = getComputedStyle(el);
    
      height -= (parseInt(style.paddingTop) + parseInt(style.paddingBottom) + parseInt(style.borderTopWidth)  + parseInt(style.borderBottomWidth));
      return height;
    }

    function innerWidth(el) {
      var width = el.clientWidth;
      var style = getComputedStyle(el);
    
      width -= (parseInt(style.paddingLeft) + parseInt(style.paddingRight) + parseInt(style.borderLeftWidth)  + parseInt(style.borderRightWidth));
      return width;
    }      

    if( (child.props && child.props.id) || (child.props._dashprivate_layout && child.props._dashprivate_layout.props.id)) {
      const id = child.props.id || child.props._dashprivate_layout.props.id;
      const elem = document.getElementById(id);

      // filter only plotly charts
      // TODO height calculation only works if plot is at the immediate level
      
      function updateElem(elem) {
        if(elem && elem.className && typeof elem.className === 'string' && elem.className.includes('js-plotly-plot')) {
          const parent = elem.parentElement; //div
          let height = innerHeight(rootNode);
          let width = innerWidth(rootNode);

          // If there are other elements in the GridItem, don't allow the
          // Plotly chart to completely fill the space
          for (let c of parent.children) {
            if(c !== elem) {
              height = height - outerHeight(c);
            }
          }

          const update = {
            width: width - 15,
            height: height - 15, //TODO does not entirely fit.
          };

          try {
            window.Plotly.relayout(elem, update);
          } catch(e) {
            // Log the error
            window.console.log(e);
          }
        } else if(child.props.onResize && typeof v === 'function') {
          child.props.onResize(); //TODO not really useful unless size is passed
        }
      }

      function df(node) {
        updateElem(node);
        if(node.children) {
          for(var i = 0; i < node.children.length; i++)
            df(node.children[i]);
        }
      }

      df(elem);
    }
  }

  render() {
    return this.props.children;
  }
}

GridItem.propTypes = {
  /**
   * An identifier for the component.
   * Synonymous with `key`, but `key` cannot be specified as
   * a PropType without causing errors. A caveat to this is that when using
   * the component in pure React (as opposed to via Dash), both `i` and `key`
   * must be specified
   */
  i: PropTypes.string.isRequired,

  /**
   * A list of child elements to place inside the grid ite,
   */
  children: PropTypes.node,

  /**
   * An object describing the layout of the element
   */
  layout: PropTypes.shape({
    /**
     * The x-value of the element location, in grid units
     */
    x: PropTypes.number.isRequired,

    /**
     * The y-value of the element location, in grid units
     */
    y: PropTypes.number.isRequired,

    /**
     * The width of the element, in grid units
     */
    w: PropTypes.number.isRequired,

    /**
     * The height of the element, in grid units
     */
    h: PropTypes.number.isRequired,

    /**
     * The minimum width of the element, in grid units
     */
    minW: PropTypes.number,

    /**
     * The maximum width of the element, in grid units
     */
    maxW: PropTypes.number,

    /**
     * The minimum height of the element, in grid units
     */
    minH: PropTypes.number,

    /**
     * The maximum height of the element, in grid units
     */
    maxH: PropTypes.number,

    /**
     * Is static: if true, the element is not resizable or draggable
     */
    static: PropTypes.bool,

    /**
     * If false, element can not be dragged
     */
    isDraggable: PropTypes.bool,

    /**
     * If false, the element can not be resized
     */
    isResizable: PropTypes.bool
  }),

  /**
   * Dash-assigned callback that should be called whenever any of the properties change
   */
  setProps: PropTypes.func
};

export default GridItem;
