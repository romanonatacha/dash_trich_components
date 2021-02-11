# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GridItem(Component):
    """A GridItem component.
A class for displaying an item in a grid
Designed to be wrapped in a function, similar to a higher-order component. Otherwise
the layout will render incorrectly

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): A list of child elements to place inside the grid ite,
- i (string; required): An identifier for the component.
Synonymous with `key`, but `key` cannot be specified as
a PropType without causing errors. A caveat to this is that when using
the component in pure React (as opposed to via Dash), both `i` and `key`
must be specified
- layout (dict; optional): An object describing the layout of the element. layout has the following type: dict containing keys 'x', 'y', 'w', 'h', 'minW', 'maxW', 'minH', 'maxH', 'static', 'isDraggable', 'isResizable'.
Those keys have the following types:
  - x (number; required): The x-value of the element location, in grid units
  - y (number; required): The y-value of the element location, in grid units
  - w (number; required): The width of the element, in grid units
  - h (number; required): The height of the element, in grid units
  - minW (number; optional): The minimum width of the element, in grid units
  - maxW (number; optional): The maximum width of the element, in grid units
  - minH (number; optional): The minimum height of the element, in grid units
  - maxH (number; optional): The maximum height of the element, in grid units
  - static (boolean; optional): Is static: if true, the element is not resizable or draggable
  - isDraggable (boolean; optional): If false, element can not be dragged
  - isResizable (boolean; optional): If false, the element can not be resized"""
    @_explicitize_args
    def __init__(self, children=None, i=Component.REQUIRED, layout=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'i', 'layout']
        self._type = 'GridItem'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'i', 'layout']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['i']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GridItem, self).__init__(children=children, **args)
