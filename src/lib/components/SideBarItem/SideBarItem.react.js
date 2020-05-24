import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

/**
 * Side bar items, to be used inside of sidebar component
 */

export default class SideBarItem extends Component {

    constructor(props) {
        super(props);

        this.incrementClicks = this.incrementClicks.bind(this);
    }

    incrementClicks() {
        if (!this.props.disabled && this.props.setProps) {
            this.props.setProps({
                n_clicks: this.props.n_clicks + 1,
                n_clicks_timestamp: Date.now()
            });
        }
    }

    render() {

        const {
            id,
            className,
            label,
            icon,
            setProps,
            ...otherProps
        } = this.props

        return (
            <NavItem
                className={className}
                onClick={this.incrementClicks}
                {...otherProps}
                eventKey={id}
            >
                <NavIcon>
                    <i className={icon} style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    {label}
                </NavText>
            </NavItem>
        );
    }

}

SideBarItem.defaultProps = {
    id: null,
    className: '',
    label: 'Label',
    icon: 'fas fa-circle',
    disabled: false,
    n_clicks: 0,
    n_clicks_timestamp: -1
};

SideBarItem.propTypes = {
    /**
     * Id of the element
     */
    id: PropTypes.string,

    /**
     * Style class of the component.
     */
    className: PropTypes.string,

    /**
     * Text of menu item on sidebar
     */
    label: PropTypes.string,

    /**
     * Icon of menu item on sidebar, pass the icon class from font awesome
     */
    icon: PropTypes.string,

    /**
    * Disable the link. Default: False.
    */
    disabled: PropTypes.bool,

    /**
	* An integer that represents the number of times
	* that this element has been clicked on.
	*/
    n_clicks: PropTypes.number,

	/**
	* An integer that represents the time (in ms since 1970)
	* at which n_clicks changed. This can be used to tell
	* which button was changed most recently.
	*/
    n_clicks_timestamp: PropTypes.number,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func
};
