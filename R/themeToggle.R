# AUTO GENERATED FILE - DO NOT EDIT

themeToggle <- function(bg_color_dark=NULL, icon_color_dark=NULL, bg_color_light=NULL, icon_color_light=NULL, tooltip_text=NULL) {
    
    props <- list(bg_color_dark=bg_color_dark, icon_color_dark=icon_color_dark, bg_color_light=bg_color_light, icon_color_light=icon_color_light, tooltip_text=tooltip_text)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ThemeToggle',
        namespace = 'dash_trich_components',
        propNames = c('bg_color_dark', 'icon_color_dark', 'bg_color_light', 'icon_color_light', 'tooltip_text'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
