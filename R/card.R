# AUTO GENERATED FILE - DO NOT EDIT

card <- function(id=NULL, className=NULL, style=NULL, link=NULL, image=NULL, title=NULL, description=NULL, badges=NULL, git=NULL, dark=NULL) {
    
    props <- list(id=id, className=className, style=style, link=link, image=image, title=title, description=description, badges=badges, git=git, dark=dark)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Card',
        namespace = 'dash_trich_components',
        propNames = c('id', 'className', 'style', 'link', 'image', 'title', 'description', 'badges', 'git', 'dark'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
