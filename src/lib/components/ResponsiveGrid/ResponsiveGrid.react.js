import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Responsive, WidthProvider, utils } from "react-grid-layout";
import { unpackChildren, wrapChildren} from '../../utils';

import './GridLayoutResponsive.scss';

const type = obj => Object.prototype.toString.call(obj);
const ResponsiveReactGridLayout = WidthProvider(Responsive);


/**
 * This component is an update of an another component build by Alexander Cabello
 * 
 * The Link to the original component is: https://github.com/AlgorithmHub/dash-responsive-grid-layout
 * 
 * It allows the user to drag, resize and modify the components inside of it. 
 * To be able to run it, you need to add a layout(one definition to each breakpoint) and a div with the ID (key) that will be mapped as the box inside of the Draggable Component.  
 * 
 */


export default class ResponsiveGrid extends Component {
  constructor(props) {
    super(props);

    // Bind `this` to functions so that they can be
    // passed as callbacks without scoping issues
    this.onLayoutChange = this.onLayoutChange.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);

    this.state = {
      layout: props.layout,
      layouts: props.layouts,
      breakpoint: props.breakpoint
    };

    if(this.props.setProps) {
      this.props.setProps({
        layout: props.layout,
        layouts: props.layouts,
        breakpoint: props.breakpoint
      });
    }
  }

  /**
   * Callback for the onLayoutChange
   */
  onLayoutChange(layout, layouts) {
    if(this.props.setProps) {
      this.props.setProps({
        layout: layout, 
        layouts: layouts
      });
    } else {
      this.setState({
        layout: layout,
        layouts: layouts
      });
    }
  }

  onBreakpointChange(breakpoint, cols) {
    if(this.props.setProps) {
      this.props.setProps({breakpoint: breakpoint});
    } else {
      this.setState({
        breakpoint: this.props.breakpoint
      });
    }
  }

  render() {

    let layout, layouts, breakpoint;
    if(this.props.setProps) { //note setProps is not set if there are no dash input or state callbacks
      layout = this.props.layout;
      layouts = this.props.layouts;
      breakpoint = this.props.breakpoint;
    } else {
      layout = this.state.layout;
      layouts = this.state.layouts;
      breakpoint = this.state.breakpoint;
    }


    const unpackedChildren = unpackChildren(this.props.children);
    const wrappedChildren = wrapChildren(unpackedChildren, layouts[breakpoint]);
    
    
    return (
      <ResponsiveReactGridLayout
        className={this.props.className || null}
        breakpoints={this.props.breakpoints}
        onBreakpointChange={this.onBreakpointChange}
        onWidthChange={this.props.onWidthChange}
        layout={layout}
        layouts={layouts}
        width={this.props.width}
        rowHeight={this.props.rowHeight}
        maxRows={this.props.maxRows}
        cols={this.props.cols}
        autoSize={this.props.autoSize}
        draggableCancel={this.props.draggableCancel}
        draggableHandle={this.props.draggableHandle}
        verticalCompact={this.props.verticalCompact}
        compactType={this.props.compactType}
        margin={this.props.margin}
        containerPadding={this.props.containerPadding}
        isDraggable={this.props.isDraggable}
        isResizable={this.props.isResizable}
        useCSSTransforms={this.props.useCSSTransforms}
        preventCollision={this.props.preventCollision}
        onLayoutChange={this.onLayoutChange}
        onDragStart={this.props.onDragStart}
        onDrag={this.props.onDrag}
        onDragStop={this.props.onDragStop}
        onResizeStart={this.props.onResizeStart}
        onResize={this.props.onResize}
        onResizeStop={this.props.onResizeStop}
      >
        { wrappedChildren }
      </ResponsiveReactGridLayout>
    );
  }
}

ResponsiveGrid.propTypes = {

  /**
   * The ID used to identify the component in Dash callbacks
   */
  id: PropTypes.string,

  /**
   * A list of renderable child elements, that will be placed inside the grid
   */
  children: PropTypes.node,

  /**
   * Dash-assigned callback that should be called whenever any of the properties change
   */
  setProps: PropTypes.func,

  //
  // Basic props
  //

  // Optional, but if you are managing width yourself you may want to set the breakpoint
  // yourself as well.
  breakpoint: PropTypes.string,

  // {name: pxVal}, e.g. {lg: 1200, md: 996, sm: 768, xs: 480}
  breakpoints: PropTypes.object,

  // # of cols. This is a breakpoint -> cols map
  cols: PropTypes.object,

  // layouts is an object mapping breakpoints to layouts.
  // e.g. {lg: Layout, md: Layout, ...}
  layouts: PropTypes.object,

  // The width of this component.
  // Required in this propTypes stanza because generateInitialState() will fail without it.
  width: PropTypes.number,

  //
  // Callbacks
  //

  // Calls back with breakpoint and new # cols
  onBreakpointChange: PropTypes.func,

  // Callback so you can save the layout.
  // Calls back with (currentLayout, allLayouts). allLayouts are keyed by breakpoint.
  onLayoutChange: PropTypes.func,

  // Calls back with (containerWidth, margin, cols, containerPadding)
  onWidthChange: PropTypes.func,


  // From GridLayout
  /**
   * The height, in pixels of a row in the grid
   */
  rowHeight: PropTypes.number,

   /**
   * Total Rows that can the board have based on the cumulated sum of all rows
   */
  maxRows: PropTypes.number,

  /**
   * If true, containers will automatically resize to fit the content
   */
  autoSize: PropTypes.bool,

  /**
   * CSS selector for tags that will not be draggable. Requires a leading '.'
   */
  draggableCancel: PropTypes.string,

  /**
   * CSS selector for tags that will act as the draggable handle. Requires a leading '.'
   */
  draggableHandle: PropTypes.string,

  /**
   * If true, the layout will compact vertically
   */
  verticalCompact: PropTypes.bool,

  /**
   * Compaction type.
   * One of 'vertical' and 'horizontal'
   */
  compactType: PropTypes.oneOf(['vertical', 'horizontal']),

  /**
   * Margin between items [x, y] in px
   */
  margin: PropTypes.arrayOf(PropTypes.number),

  /**
   * Padding inside the container [x, y] in px
   */
  containerPadding: PropTypes.arrayOf(PropTypes.number),

  /**
   * Elements can be dragged
   */
  isDraggable: PropTypes.bool,

  /**
   * Elements can be resized
   */
  isResizable: PropTypes.bool,

  /**
   * Use CSS transforms instead of Position. Improves performance if switched on
   */
  useCSSTransforms: PropTypes.bool,

  /**
   * If true, grid items won't change position when being
   * dragged over
   */
  preventCollision: PropTypes.bool,


  /**
   * Callback when dragging is started
   */
  onDragStart: PropTypes.func,

  /**
   * Callback upon each drag movement
   */
  onDrag: PropTypes.func,

  /**
   * Callback upon drag completion
   */
  onDragStop: PropTypes.func,

  /**
   * Calls when resize starts
   */
  onResizeStart: PropTypes.func,

  /**
   * Calls when resize movement happens
   */
  onResize: PropTypes.func,

  /**
   * Calls when resize is complete
   */
  onResizeStop: PropTypes.func,

   /**
   * Set the ClassName to the component
   */ 
  className: PropTypes.string,

  /**
   * Set the ClassName to the component
   * available options are: 
   * ?Array<'s' | 'w' | 'e' | 'n' | 'sw' | 'nw' | 'se' | 'ne'> 
   * default: ["se"]
   */ 
  // resizeHandles: PropTypes.arrayOf(PropTypes.string),

};

ResponsiveGrid.defaultProps = ResponsiveReactGridLayout.defaultProps;

ResponsiveGrid.defaultProps = {
  breakpoint: 'lg',
  breakpoints: {lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0},
  cols: {lg: 12, md: 10, sm: 6, xs: 4, xxs: 2},
  layouts: {lg: [], md: [], sm: [], xs: [], xxs: []},
  onBreakpointChange: () => {},
  onLayoutChange: () => {},
  onWidthChange: () => {}
};
