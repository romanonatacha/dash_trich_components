# AUTO GENERATED FILE - DO NOT EDIT

responsiveGrid <- function(children=NULL, id=NULL, breakpoint=NULL, breakpoints=NULL, cols=NULL, layouts=NULL, width=NULL, onBreakpointChange=NULL, onLayoutChange=NULL, onWidthChange=NULL, rowHeight=NULL, maxRows=NULL, autoSize=NULL, draggableCancel=NULL, draggableHandle=NULL, verticalCompact=NULL, compactType=NULL, margin=NULL, containerPadding=NULL, isDraggable=NULL, isResizable=NULL, useCSSTransforms=NULL, preventCollision=NULL, onDragStart=NULL, onDrag=NULL, onDragStop=NULL, onResizeStart=NULL, onResize=NULL, onResizeStop=NULL, className=NULL) {
    
    props <- list(children=children, id=id, breakpoint=breakpoint, breakpoints=breakpoints, cols=cols, layouts=layouts, width=width, onBreakpointChange=onBreakpointChange, onLayoutChange=onLayoutChange, onWidthChange=onWidthChange, rowHeight=rowHeight, maxRows=maxRows, autoSize=autoSize, draggableCancel=draggableCancel, draggableHandle=draggableHandle, verticalCompact=verticalCompact, compactType=compactType, margin=margin, containerPadding=containerPadding, isDraggable=isDraggable, isResizable=isResizable, useCSSTransforms=useCSSTransforms, preventCollision=preventCollision, onDragStart=onDragStart, onDrag=onDrag, onDragStop=onDragStop, onResizeStart=onResizeStart, onResize=onResize, onResizeStop=onResizeStop, className=className)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'ResponsiveGrid',
        namespace = 'dash_trich_components',
        propNames = c('children', 'id', 'breakpoint', 'breakpoints', 'cols', 'layouts', 'width', 'onBreakpointChange', 'onLayoutChange', 'onWidthChange', 'rowHeight', 'maxRows', 'autoSize', 'draggableCancel', 'draggableHandle', 'verticalCompact', 'compactType', 'margin', 'containerPadding', 'isDraggable', 'isResizable', 'useCSSTransforms', 'preventCollision', 'onDragStart', 'onDrag', 'onDragStop', 'onResizeStart', 'onResize', 'onResizeStop', 'className'),
        package = 'dashTrichComponents'
        )

    structure(component, class = c('dash_component', 'list'))
}
