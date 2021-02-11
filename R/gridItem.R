# AUTO GENERATED FILE - DO NOT EDIT

gridItem <- function(children=NULL, i=NULL, layout=NULL) {
    
    props <- list(children=children, i=i, layout=layout)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'GridItem',
        namespace = 'dash_trich_components',
        propNames = c('children', 'i', 'layout'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
