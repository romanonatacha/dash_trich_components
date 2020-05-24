# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SideBar(Component):
    """A SideBar component.
A collapsible side bar for your dashboard,
with icons from Font Awesome

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Your carousel is vertical
- id (string; optional): Id of the element
- className (string; default ''): Style class of the component.
- bg_color (string; default '#2b7279'): Color of sidebar background
- text_color (string; default '#ffffff'): Color of sidebar text"""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, className=Component.UNDEFINED, bg_color=Component.UNDEFINED, text_color=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'className', 'bg_color', 'text_color']
        self._type = 'SideBar'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'className', 'bg_color', 'text_color']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SideBar, self).__init__(children=children, **args)
