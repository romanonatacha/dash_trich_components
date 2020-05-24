# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SideBarToggle(Component):
    """A SideBarToggle component.


Keyword arguments:
- n_clicks (number; optional): How many slides you want to show
- id (string; optional): Padding on the sides"""
    @_explicitize_args
    def __init__(self, n_clicks=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['n_clicks', 'id']
        self._type = 'SideBarToggle'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['n_clicks', 'id']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SideBarToggle, self).__init__(**args)
