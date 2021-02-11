import React from 'react';
import GridItem from '../components/ResponsiveGrid/GridItem.react';

/**
 * A wrapper function for GridItem
 * Because React Grid Layout works on the props of the
 * children passed to the root element, we can't just rely on
 * injecting the correct props at render time. Instead, we intercept
 * the GridItem pre-render, and replace it with a different component with the correct layout.
 *
 * In the future, this plain div will be replaced with a GridItemProxy component, that will
 * contain the necessary event handlers
 */
export const gridItemWrapper = (gridItem, newLayout) => {


  newLayout = newLayout || new Array();

  let i, layout, gridItemNew;
  if(gridItem.type !== GridItem) {
    i = gridItem.key || gridItem.props.id;
    layout = gridItem.props.dataGrid || {x: 0, y: 0, w: 4, h: 4, maxWidth:12, maxHeight:8, minWidth:2, minHeight:3};
    gridItemNew = <GridItem i={i} key={i} layout={layout}>{gridItem}</GridItem>
  } else {
    i = gridItem.props.i;
    layout = gridItem.props.layout;
    gridItemNew = gridItem;
  }

  let updatedLayout = Object.assign({}, (newLayout.find(x => x.i === i) || layout));
  updatedLayout.i = i;

  return (
    <div className='grid-item-wrapper' data-grid={updatedLayout} key={i}>
      { React.cloneElement(gridItemNew, { layout: updatedLayout }) }
    </div>
  );
}


  /**
   * By default, Dash wraps children in an element, obfuscating the key.
   * If a child has no key, this function npacks the children so that `key`
   * is exposed and the layout can be used
   */
export const unpackChildren = (children) => {
    if(children) {
      if(Array.isArray(children)) {
        return children.map(child => child.key === null ? (child.props.children || child) : child);
      } else if(!children.key && children.props) {
        return (children.props.children || children);
      }
    }

    return children;
  }

  /**
   * Wrap children inside a wrapper that conforms to react-grid-layout
   */
export const wrapChildren = (children, layout) => {
    if(children) {
      if(Array.isArray(children)) {
        return children.map(child => gridItemWrapper(child, layout));
      } else {
        return gridItemWrapper(children, layout);
      }
    }

    return children;
  }