import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout';
import './GridLayout.scss'

/**
 * GridLayout is an GridLayout component.
 * It takes some setting properties
 * You put how many blocks of divs you want inside it,
 * and this div turn into slides
 */

export default class GridLayoutComponent extends Component {
    
    render() {

        const { style, className, children, id, layout, total_cols, row_height, width, background_color } = this.props;

        const styles = {
            maxWidth: width || '100px',
            backgroundColor: background_color || 'lightgray',
            margin: '0 auto'
        }

        return (
            <GridLayout id={id} className={`${className}`} style={style} layout={layout} cols={total_cols || 12} rowHeight={row_height || 75} width={width || 1400}>

                {children.map((child, i) => (
                    <div data-grid={{ x: 0, y: 0, w: 4, h: 4, maxW: 12, maxH: 6, minW: 2, minH: 2, "isDraggable":true, "isResizable":true}} key={i + 1} >
                        {child}
                    </div>
                ))
                }

            </GridLayout>
        )
    }
}

GridLayoutComponent.defaultProps = {

};

GridLayoutComponent.propTypes = {
    /**
     * Your GridLayout is vertical
     */
    children: PropTypes.node,

    /**
     * Inline style of the component.
     */
    style: PropTypes.object,

    /**
     * Style class of the component.
     */
    className: PropTypes.string,

    /**
     * Id of the element
     */
    id: PropTypes.string,

    /**
     * Initial layout
     */
    layout: PropTypes.array,

};
