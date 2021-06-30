# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Card(Component):
    """A Card component.
A simple card with an image, title, description,
badges and link for github with icon, all this arguments are optional.

Keyword arguments:
- id (string; optional): Id of the element
- className (string; default ''): Style class of the component.
- style (dict; optional): Inline style of the component.
- link (string; optional): link to redirect when the user clicks on the image
- image (string; optional): image that will display on card
- title (string; optional): title of the card
- description (string; optional): description of the card
- badges (list; optional): list of strings to display in badges, to work porperly put up to 4 or 5
- git (string; optional): github URL, is not required, only if you want to
- dark (boolean; default False): theme color of the card, that for default is light
- openNewTab (boolean; default True): Open card link in a new tab"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, className=Component.UNDEFINED, style=Component.UNDEFINED, link=Component.UNDEFINED, image=Component.UNDEFINED, title=Component.UNDEFINED, description=Component.UNDEFINED, badges=Component.UNDEFINED, git=Component.UNDEFINED, dark=Component.UNDEFINED, openNewTab=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'style', 'link', 'image', 'title', 'description', 'badges', 'git', 'dark', 'openNewTab']
        self._type = 'Card'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'style', 'link', 'image', 'title', 'description', 'badges', 'git', 'dark', 'openNewTab']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Card, self).__init__(**args)
