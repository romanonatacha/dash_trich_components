# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ResponsiveGrid(Component):
    """A ResponsiveGrid component.
This component is an update of an another component build by Alexander Cabello

The Link to the original component is: https://github.com/AlgorithmHub/dash-responsive-grid-layout

It allows the user to drag, resize and modify the components inside of it. 
To be able to run it, you need to add a layout(one definition to each breakpoint) and a div with the ID (key) that will be mapped as the box inside of the Draggable Component.

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): A list of renderable child elements, that will be placed inside the grid
- id (string; optional): The ID used to identify the component in Dash callbacks
- breakpoint (string; optional)
- breakpoints (dict; optional)
- cols (dict; optional)
- layouts (dict; optional)
- width (number; optional)
- rowHeight (number; optional): The height, in pixels of a row in the grid
- maxRows (number; optional): Total Rows that can the board have based on the cumulated sum of all rows
- autoSize (boolean; optional): If true, containers will automatically resize to fit the content
- draggableCancel (string; optional): CSS selector for tags that will not be draggable. Requires a leading '.'
- draggableHandle (string; optional): CSS selector for tags that will act as the draggable handle. Requires a leading '.'
- verticalCompact (boolean; optional): If true, the layout will compact vertically
- compactType (a value equal to: 'vertical', 'horizontal'; optional): Compaction type.
One of 'vertical' and 'horizontal'
- margin (list of numbers; optional): Margin between items [x, y] in px
- containerPadding (list of numbers; optional): Padding inside the container [x, y] in px
- isDraggable (boolean; optional): Elements can be dragged
- isResizable (boolean; optional): Elements can be resized
- useCSSTransforms (boolean; optional): Use CSS transforms instead of Position. Improves performance if switched on
- preventCollision (boolean; optional): If true, grid items won't change position when being
dragged over
- className (string; optional): Set the ClassName to the component"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, breakpoint=Component.UNDEFINED, breakpoints=Component.UNDEFINED, cols=Component.UNDEFINED, layouts=Component.UNDEFINED, width=Component.UNDEFINED, onBreakpointChange=Component.UNDEFINED, onLayoutChange=Component.UNDEFINED, onWidthChange=Component.UNDEFINED, rowHeight=Component.UNDEFINED, maxRows=Component.UNDEFINED, autoSize=Component.UNDEFINED, draggableCancel=Component.UNDEFINED, draggableHandle=Component.UNDEFINED, verticalCompact=Component.UNDEFINED, compactType=Component.UNDEFINED, margin=Component.UNDEFINED, containerPadding=Component.UNDEFINED, isDraggable=Component.UNDEFINED, isResizable=Component.UNDEFINED, useCSSTransforms=Component.UNDEFINED, preventCollision=Component.UNDEFINED, onDragStart=Component.UNDEFINED, onDrag=Component.UNDEFINED, onDragStop=Component.UNDEFINED, onResizeStart=Component.UNDEFINED, onResize=Component.UNDEFINED, onResizeStop=Component.UNDEFINED, className=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'breakpoint', 'breakpoints', 'cols', 'layouts', 'width', 'rowHeight', 'maxRows', 'autoSize', 'draggableCancel', 'draggableHandle', 'verticalCompact', 'compactType', 'margin', 'containerPadding', 'isDraggable', 'isResizable', 'useCSSTransforms', 'preventCollision', 'className']
        self._type = 'ResponsiveGrid'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'breakpoint', 'breakpoints', 'cols', 'layouts', 'width', 'rowHeight', 'maxRows', 'autoSize', 'draggableCancel', 'draggableHandle', 'verticalCompact', 'compactType', 'margin', 'containerPadding', 'isDraggable', 'isResizable', 'useCSSTransforms', 'preventCollision', 'className']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ResponsiveGrid, self).__init__(children=children, **args)
