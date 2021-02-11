# AUTO GENERATED FILE - DO NOT EDIT

gridLayoutComponent <- function(children=NULL, style=NULL, className=NULL, id=NULL, layout=NULL) {
    
    props <- list(children=children, style=style, className=className, id=id, layout=layout)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GridLayoutComponent',
        namespace = 'dash_trich_components',
        propNames = c('children', 'style', 'className', 'id', 'layout'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
