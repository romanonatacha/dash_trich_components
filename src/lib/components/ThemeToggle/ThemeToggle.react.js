import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ThemeToggle.scss'
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';

import { OverlayTrigger, Tooltip } from 'react-bootstrap';


export default class ThemeToggle extends Component {

    constructor(props) {
        super(props);
        this.state = { checked: false };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        this.setState({ checked: e.target.checked });
    };
    render() {
        const {
            bg_color_dark,
            icon_color_dark,
            bg_color_light,
            icon_color_light,
            tooltip_text,
            className,
            id,
            style
        } = this.props

        const { checked } = this.state

        let background = checked ? bg_color_dark : bg_color_light
        let color = checked ? icon_color_dark : icon_color_light

        const Label = styled.label`
            background: ${background};
            color: ${color};
        `

        return (
            <div className={`${className} themeToggle`} id={id} style={style}>
                <OverlayTrigger placement='bottom' delay={{ show: 1000 }} overlay={
                    <Tooltip id="tooltip-bottom">
                        {tooltip_text}
                    </Tooltip>
                }>
                    <form>
                        <input type="checkbox" id="theme_toggle" onChange={this.onChange} />
                        <Label htmlFor="theme_toggle"></Label>
                    </form>
                </OverlayTrigger>
            </div>

        );
    }
}

ThemeToggle.defaultProps = {
    bg_color_dark: '#232323',
    icon_color_dark: '#EDC575',
    bg_color_light: '#07484E',
    icon_color_light: '#c8dbdc',
    tooltip_text: 'Toggle light/dark theme',
    className: '',
    style: null,
    id: null
};

ThemeToggle.propTypes = {
    /**
     * Background color of toggle switch when dark theme
     */
    bg_color_dark: PropTypes.string,

    /**
     * Sun icon color of toggle switch when dark theme
     */
    icon_color_dark: PropTypes.string,

    /**
     * Background color of toggle switch when light theme
     */
    bg_color_light: PropTypes.string,

    /**
     * Moon icon color of toggle switch when dark theme
     */
    icon_color_light: PropTypes.string,

    /**
     * Text that will appear in tooltip (only desktop)
     */
    tooltip_text: PropTypes.string,

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
    id: PropTypes.string
};
