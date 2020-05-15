import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import './Carousel.scss'

export default class Carousel extends Component {
    render() {

        const {
            dots,
            arrows,
            infinite,
            autoplay,
            speed,
            slidesToShow,
            slidesToScroll,
            centerMode,
            centerPadding,
            swipeToSlide,
            variableWidth,
            responsive,
            vertical,
            children } = this.props

        const settings = {
            dots: dots || false,
            arrows: arrows || true,
            infinite: infinite || true,
            autoplay: autoplay || false,
            speed: speed || 1000,
            slidesToShow: slidesToShow || 3,
            slidesToScroll: slidesToScroll || 1,
            centerMode: centerMode || false,
            centerPadding: centerPadding || '50px',
            swipeToSlide: swipeToSlide || true,
            variableWidth: variableWidth || false,
            responsive: responsive || [],
            vertical: vertical || false,
        };

        return (
            <div id="trich_carousel">
                <Slider {...settings}>
                    {children}
                </Slider>
            </div>
        );
    }
}

Carousel.defaultProps = {};

Carousel.propTypes = {
    dots: PropTypes.bool,
    arrows: PropTypes.bool,
    infinite: PropTypes.bool,
    autoplay: PropTypes.bool,
    speed: PropTypes.number,
    slidesToShow: PropTypes.number,
    slidesToScroll: PropTypes.number,
    centerMode: PropTypes.bool,
    centerPadding: PropTypes.string,
    swipeToSlide: PropTypes.bool,
    variableWidth: PropTypes.bool,
    responsive: PropTypes.array,
    vertical: PropTypes.bool,
    children: PropTypes.node
};
