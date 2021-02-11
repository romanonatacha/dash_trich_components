# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GridLayoutComponent(Component):
    """A GridLayoutComponent component.
GridLayout is an GridLayout component.
It takes some setting properties
You put how many blocks of divs you want inside it,
and this div turn into slides

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Your GridLayout is vertical
- style (dict; optional): Inline style of the component.
- className (string; optional): Style class of the component.
- id (string; optional): Id of the element
- layout (list; optional): Initial layout"""
    @_explicitize_args
    def __init__(self, children=None, style=Component.UNDEFINED, className=Component.UNDEFINED, id=Component.UNDEFINED, layout=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'style', 'className', 'id', 'layout']
        self._type = 'GridLayoutComponent'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'style', 'className', 'id', 'layout']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GridLayoutComponent, self).__init__(children=children, **args)
