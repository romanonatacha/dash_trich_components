% Auto-generated: do not edit by hand
\name{sideBarItem}

\alias{sideBarItem}

\title{SideBarItem component}

\description{

}

\usage{
sideBarItem(id=NULL, className=NULL, label=NULL, icon=NULL,
disabled=NULL, n_clicks=NULL, n_clicks_timestamp=NULL)
}

\arguments{
\item{id}{Character. Id of the element}

\item{className}{Character. Style class of the component.}

\item{label}{Character. Text of menu item on sidebar}

\item{icon}{Character. Icon of menu item on sidebar, pass the icon class from font awesome}

\item{disabled}{Logical. Disable the link. Default: False.}

\item{n_clicks}{Numeric. An integer that represents the number of times
that this element has been clicked on.}

\item{n_clicks_timestamp}{Numeric. An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

