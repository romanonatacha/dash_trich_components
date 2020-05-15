# AUTO GENERATED FILE - DO NOT EDIT

carousel <- function(children=NULL, dots=NULL, arrows=NULL, infinite=NULL, autoplay=NULL, speed=NULL, slidesToShow=NULL, slidesToScroll=NULL, centerMode=NULL, centerPadding=NULL, swipeToSlide=NULL, variableWidth=NULL, responsive=NULL, vertical=NULL) {
    
    props <- list(children=children, dots=dots, arrows=arrows, infinite=infinite, autoplay=autoplay, speed=speed, slidesToShow=slidesToShow, slidesToScroll=slidesToScroll, centerMode=centerMode, centerPadding=centerPadding, swipeToSlide=swipeToSlide, variableWidth=variableWidth, responsive=responsive, vertical=vertical)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Carousel',
        namespace = 'dash_trich_components',
        propNames = c('children', 'dots', 'arrows', 'infinite', 'autoplay', 'speed', 'slidesToShow', 'slidesToScroll', 'centerMode', 'centerPadding', 'swipeToSlide', 'variableWidth', 'responsive', 'vertical'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
