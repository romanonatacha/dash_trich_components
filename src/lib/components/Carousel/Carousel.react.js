import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import './Carousel.scss'

/**
 * ECarousel is an carousel component.
 * It takes some setting properties
 * You put how many blocks of divs you want inside it,
 * and this div turn into slides
 */

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
    /**
     * Dots under carousel
     */
    dots: PropTypes.bool,

    /**
     * Arrows to control carousel
     */
    arrows: PropTypes.bool,

    /**
     * If the carousel content will repeat in a loop
     */
    infinite: PropTypes.bool,

    /**
     * If the carousel will start to play automatically
     */
    autoplay: PropTypes.bool,

    /**
     * Speed of autoplay
     */
    speed: PropTypes.number,

    /**
     * How many slides you want to show
     */
    slidesToShow: PropTypes.number,

    /**
     * How many slides will scroll when you swipe the carousel
     */
    slidesToScroll: PropTypes.number,

    /**
     * To centralize the carousel
     */
    centerMode: PropTypes.bool,

    /**
     * Padding on the sides
     */
    centerPadding: PropTypes.string,

    /**
     * If you can slide to scroll the slides
     */
    swipeToSlide: PropTypes.bool,

    /**
     * The slides width varies according to the screen size
     */
    variableWidth: PropTypes.bool,

    /**
     * Settings of breakpoints
     */
    responsive: PropTypes.array,

    /**
     * If your carousel is vertical
     */
    vertical: PropTypes.bool,

    /**
     * Your carousel is vertical
     */
    children: PropTypes.node
};
