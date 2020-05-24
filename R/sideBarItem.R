# AUTO GENERATED FILE - DO NOT EDIT

sideBarItem <- function(id=NULL, label=NULL, icon=NULL, disabled=NULL, n_clicks=NULL, n_clicks_timestamp=NULL) {
    
    props <- list(id=id, label=label, icon=icon, disabled=disabled, n_clicks=n_clicks, n_clicks_timestamp=n_clicks_timestamp)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'SideBarItem',
        namespace = 'dash_trich_components',
        propNames = c('id', 'label', 'icon', 'disabled', 'n_clicks', 'n_clicks_timestamp'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
