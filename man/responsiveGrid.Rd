% Auto-generated: do not edit by hand
\name{responsiveGrid}

\alias{responsiveGrid}

\title{ResponsiveGrid component}

\description{
This component is an update of an another component build by Alexander Cabello  The Link to the original component is: https://github.com/AlgorithmHub/dash-responsive-grid-layout  It allows the user to drag, resize and modify the components inside of it.  To be able to run it, you need to add a layout(one definition to each breakpoint) and a div with the ID (key) that will be mapped as the box inside of the Draggable Component.
}

\usage{
responsiveGrid(children=NULL, id=NULL, breakpoint=NULL, breakpoints=NULL,
cols=NULL, layouts=NULL, width=NULL,
onBreakpointChange=NULL, onLayoutChange=NULL,
onWidthChange=NULL, rowHeight=NULL, maxRows=NULL,
autoSize=NULL, draggableCancel=NULL, draggableHandle=NULL,
verticalCompact=NULL, compactType=NULL, margin=NULL,
containerPadding=NULL, isDraggable=NULL, isResizable=NULL,
useCSSTransforms=NULL, preventCollision=NULL,
onDragStart=NULL, onDrag=NULL, onDragStop=NULL,
onResizeStart=NULL, onResize=NULL, onResizeStop=NULL,
className=NULL)
}

\arguments{
\item{children}{A list of or a singular dash component, string or number. A list of renderable child elements, that will be placed inside the grid}

\item{id}{Character. The ID used to identify the component in Dash callbacks}

\item{breakpoint}{Character. }

\item{breakpoints}{Named list. }

\item{cols}{Named list. }

\item{layouts}{Named list. }

\item{width}{Numeric. }

\item{onBreakpointChange}{}

\item{onLayoutChange}{}

\item{onWidthChange}{}

\item{rowHeight}{Numeric. The height, in pixels of a row in the grid}

\item{maxRows}{Numeric. Total Rows that can the board have based on the cumulated sum of all rows}

\item{autoSize}{Logical. If true, containers will automatically resize to fit the content}

\item{draggableCancel}{Character. CSS selector for tags that will not be draggable. Requires a leading '.'}

\item{draggableHandle}{Character. CSS selector for tags that will act as the draggable handle. Requires a leading '.'}

\item{verticalCompact}{Logical. If true, the layout will compact vertically}

\item{compactType}{A value equal to: 'vertical', 'horizontal'. Compaction type.
One of 'vertical' and 'horizontal'}

\item{margin}{List of numerics. Margin between items [x, y] in px}

\item{containerPadding}{List of numerics. Padding inside the container [x, y] in px}

\item{isDraggable}{Logical. Elements can be dragged}

\item{isResizable}{Logical. Elements can be resized}

\item{useCSSTransforms}{Logical. Use CSS transforms instead of Position. Improves performance if switched on}

\item{preventCollision}{Logical. If true, grid items won't change position when being
dragged over}

\item{onDragStart}{Callback when dragging is started}

\item{onDrag}{Callback upon each drag movement}

\item{onDragStop}{Callback upon drag completion}

\item{onResizeStart}{Calls when resize starts}

\item{onResize}{Calls when resize movement happens}

\item{onResizeStop}{Calls when resize is complete}

\item{className}{Character. Set the ClassName to the component}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

