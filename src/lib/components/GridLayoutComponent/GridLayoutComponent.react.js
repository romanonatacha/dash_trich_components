import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import GridLayout from 'react-grid-layout';

/**
 * GridLayout is an GridLayout component.
 * It takes some setting properties
 * You put how many blocks of divs you want inside it,
 * and this div turn into slides
 */

export default class GridLayoutComponent extends Component {
    render() {

        const { style, className, children, id, layout } = this.props;

        return (
            <GridLayout id={id} className={`${className} layout`} style={style} layout={layout} cols={12} rowHeight={30} width={1200}>
                {children.map((child, i) => (
                    <div key={i + 1}>
                        {child}
                    </div>
                ))}
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
