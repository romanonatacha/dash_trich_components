# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ThemeToggle(Component):
    """A ThemeToggle component.


Keyword arguments:
- bg_color_dark (string; optional): Background color of toggle switch when dark theme
- icon_color_dark (string; optional): Sun icon color of toggle switch when dark theme
- bg_color_light (string; optional): Background color of toggle switch when light theme
- icon_color_light (string; optional): Moon icon color of toggle switch when dark theme
- tooltip_text (string; optional): Text that will appear in tooltip (only desktop)"""
    @_explicitize_args
    def __init__(self, bg_color_dark=Component.UNDEFINED, icon_color_dark=Component.UNDEFINED, bg_color_light=Component.UNDEFINED, icon_color_light=Component.UNDEFINED, tooltip_text=Component.UNDEFINED, **kwargs):
        self._prop_names = ['bg_color_dark', 'icon_color_dark', 'bg_color_light', 'icon_color_light', 'tooltip_text']
        self._type = 'ThemeToggle'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['bg_color_dark', 'icon_color_dark', 'bg_color_light', 'icon_color_light', 'tooltip_text']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(ThemeToggle, self).__init__(**args)
