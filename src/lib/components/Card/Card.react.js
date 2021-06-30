import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.scss'

/**
 * A simple card with an image, title, description,
 * badges and link for github with icon, all this arguments are optional.
 */

export default class Card extends Component {

    render() {

        const {
            id,
            style,
            className,
            link,
            openNewTab,
            image,
            title,
            description,
            badges,
            git,
            dark
        } = this.props

        return (
            <div id={id} className={`${className} trich_card ${dark ? 'dark' : 'light'}`} style={style}>
                <div className="padding16 radius8 card">
                    {image &&
                        <a href={link} target={openNewTab ? '_blank' : '_self'}>
                            <div className="bottom16 trich_card_img">
                                <img src={image} alt={title} />
                            </div>
                        </a>
                    }
                    <div className="trich_card_text bottom16">
                        {title &&
                            <h4 className="font-sm bold uppercase">{title}</h4>
                        }
                        {description &&
                            <p className="font-xs">{description}</p>
                        }
                    </div>
                    <div className="font-xs flex_row_btw trich_card_footer">
                        <div>
                            {badges && badges.map((item, i) => (
                                <div key={i} className="inline-block">
                                    <Badge className="mr-1 self_center badge">{item}</Badge>
                                </div>

                            ))}
                        </div>
                        {git &&
                            <div>
                                <a href={git} target="_blank">
                                    <i className="fab fa-github font-sm git"></i>
                                </a>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }

}

Card.defaultProps = {
    id: null,
    style: null,
    className: '',
    link: null,
    image: null,
    title: null,
    description: null,
    badges: null,
    git: null,
    dark: false,
    openNewTab: true
};

Card.propTypes = {
    /**
     * Id of the element
     */
    id: PropTypes.string,

    /**
     * Style class of the component.
     */
    className: PropTypes.string,

    /**
     * Inline style of the component.
     */
    style: PropTypes.object,

    /**
     * link to redirect when the user clicks on the image
     */
    link: PropTypes.string,

    /**
     * image that will display on card
     */
    image: PropTypes.string,

    /**
     * title of the card
     */
    title: PropTypes.string,

    /**
     * description of the card
     */
    description: PropTypes.string,

    /**
     * list of strings to display in badges, to work porperly put up to 4 or 5
     */
    badges: PropTypes.array,

    /**
     * github URL, is not required, only if you want to
     */
    git: PropTypes.string,

    /**
     * theme color of the card, that for default is light
     */
    dark: PropTypes.bool,

    /**
     * Open card link in a new tab
     */
     openNewTab: PropTypes.bool,
};
