# AUTO GENERATED FILE - DO NOT EDIT

sideBarToggle <- function(n_clicks=NULL, id=NULL) {
    
    props <- list(n_clicks=n_clicks, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SideBarToggle',
        namespace = 'dash_trich_components',
        propNames = c('n_clicks', 'id'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
