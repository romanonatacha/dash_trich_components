% Auto-generated: do not edit by hand
\name{gridItem}

\alias{gridItem}

\title{GridItem component}

\description{
A class for displaying an item in a grid Designed to be wrapped in a function, similar to a higher-order component. Otherwise the layout will render incorrectly
}

\usage{
gridItem(children=NULL, i=NULL, layout=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. A list of child elements to place inside the grid ite,}

\item{i}{Character. An identifier for the component.
Synonymous with `key`, but `key` cannot be specified as
a PropType without causing errors. A caveat to this is that when using
the component in pure React (as opposed to via Dash), both `i` and `key`
must be specified}

\item{layout}{Lists containing elements 'x', 'y', 'w', 'h', 'minw', 'maxw', 'minh', 'maxh', 'static', 'isdraggable', 'isresizable'.
those elements have the following types:
  - x (numeric; required): the x-value of the element location, in grid units
  - y (numeric; required): the y-value of the element location, in grid units
  - w (numeric; required): the width of the element, in grid units
  - h (numeric; required): the height of the element, in grid units
  - minw (numeric; optional): the minimum width of the element, in grid units
  - maxw (numeric; optional): the maximum width of the element, in grid units
  - minh (numeric; optional): the minimum height of the element, in grid units
  - maxh (numeric; optional): the maximum height of the element, in grid units
  - static (logical; optional): is static: if true, the element is not resizable or draggable
  - isdraggable (logical; optional): if false, element can not be dragged
  - isresizable (logical; optional): if false, the element can not be resized. An object describing the layout of the element}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

