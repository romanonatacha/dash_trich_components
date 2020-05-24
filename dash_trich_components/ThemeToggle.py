# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class ThemeToggle(Component):
    """A ThemeToggle component.
Dark/Light theme toggle switch for your Dash project.

Keyword arguments:
- bg_color_dark (string; default '#232323'): Background color of toggle switch when dark theme
- icon_color_dark (string; default '#EDC575'): Sun icon color of toggle switch when dark theme
- bg_color_light (string; default '#07484E'): Background color of toggle switch when light theme
- icon_color_light (string; default '#c8dbdc'): Moon icon color of toggle switch when dark theme
- tooltip_text (string; default 'Toggle light/dark theme'): Text that will appear in tooltip (only desktop)
- style (dict; optional): Inline style of the component.
- className (string; default ''): Style class of the component.
- id (string; optional): Id of the element"""
    @_explicitize_args
    def __init__(self, bg_color_dark=Component.UNDEFINED, icon_color_dark=Component.UNDEFINED, bg_color_light=Component.UNDEFINED, icon_color_light=Component.UNDEFINED, tooltip_text=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['bg_color_dark', 'icon_color_dark', 'bg_color_light', 'icon_color_light', 'tooltip_text', 'style', 'className', 'id']
        self._type = 'ThemeToggle'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['bg_color_dark', 'icon_color_dark', 'bg_color_light', 'icon_color_light', 'tooltip_text', 'style', 'className', 'id']
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
