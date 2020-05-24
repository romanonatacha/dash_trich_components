# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SideBarItem(Component):
    """A SideBarItem component.
Side bar items, to be used inside of sidebar component

Keyword arguments:
- id (string; optional): Id of the element
- className (string; default ''): Style class of the component.
- label (string; default 'Label'): Text of menu item on sidebar
- icon (string; default 'fas fa-circle'): Icon of menu item on sidebar, pass the icon class from font awesome
- disabled (boolean; default False): Disable the link. Default: False.
- n_clicks (number; default 0): An integer that represents the number of times
that this element has been clicked on.
- n_clicks_timestamp (number; default -1): An integer that represents the time (in ms since 1970)
at which n_clicks changed. This can be used to tell
which button was changed most recently."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, label=Component.UNDEFINED, icon=Component.UNDEFINED, disabled=Component.UNDEFINED, n_clicks=Component.UNDEFINED, n_clicks_timestamp=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'label', 'icon', 'disabled', 'n_clicks', 'n_clicks_timestamp']
        self._type = 'SideBarItem'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'label', 'icon', 'disabled', 'n_clicks', 'n_clicks_timestamp']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SideBarItem, self).__init__(**args)
