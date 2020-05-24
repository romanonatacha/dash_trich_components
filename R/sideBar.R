# AUTO GENERATED FILE - DO NOT EDIT

sideBar <- function(children=NULL, id=NULL, style=NULL, className=NULL, bg_color=NULL, text_color=NULL) {
    
    props <- list(children=children, id=id, style=style, className=className, bg_color=bg_color, text_color=text_color)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SideBar',
        namespace = 'dash_trich_components',
        propNames = c('children', 'id', 'style', 'className', 'bg_color', 'text_color'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
