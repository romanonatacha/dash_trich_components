# AUTO GENERATED FILE - DO NOT EDIT

carousel <- function(children=NULL, dots=NULL, arrows=NULL, infinite=NULL, autoplay=NULL, speed=NULL, slides_to_show=NULL, slides_to_scroll=NULL, center_mode=NULL, center_padding=NULL, swipe_to_slide=NULL, variable_width=NULL, responsive=NULL, vertical=NULL, style=NULL, className=NULL, id=NULL) {
    
    props <- list(children=children, dots=dots, arrows=arrows, infinite=infinite, autoplay=autoplay, speed=speed, slides_to_show=slides_to_show, slides_to_scroll=slides_to_scroll, center_mode=center_mode, center_padding=center_padding, swipe_to_slide=swipe_to_slide, variable_width=variable_width, responsive=responsive, vertical=vertical, style=style, className=className, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Carousel',
        namespace = 'dash_trich_components',
        propNames = c('children', 'dots', 'arrows', 'infinite', 'autoplay', 'speed', 'slides_to_show', 'slides_to_scroll', 'center_mode', 'center_padding', 'swipe_to_slide', 'variable_width', 'responsive', 'vertical', 'style', 'className', 'id'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
