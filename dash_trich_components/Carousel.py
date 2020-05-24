# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Carousel(Component):
    """A Carousel component.
Carousel is an carousel component.
It takes some setting properties
You put how many blocks of divs you want inside it,
and this div turn into slides

Keyword arguments:
- children (a list of or a singular dash component, string or number; optional): Your carousel is vertical
- dots (boolean; optional): Dots under carousel
- arrows (boolean; optional): Arrows to control carousel
- infinite (boolean; optional): If the carousel content will repeat in a loop
- autoplay (boolean; optional): If the carousel will start to play automatically
- speed (number; optional): Speed of autoplay
- slides_to_show (number; optional): How many slides you want to show
- slides_to_scroll (number; optional): How many slides will scroll when you swipe the carousel
- center_mode (boolean; optional): To centralize the carousel
- center_padding (string; optional): Padding on the sides
- swipe_to_slide (boolean; optional): If you can slide to scroll the slides
- variable_width (boolean; optional): The slides width varies according to the screen size
- responsive (list; optional): Settings of breakpoints
- vertical (boolean; optional): If your carousel is vertical
- style (dict; optional): Inline style of the component.
- className (string; optional): Style class of the component.
- id (string; optional): Id of the element"""
    @_explicitize_args
    def __init__(self, children=None, dots=Component.UNDEFINED, arrows=Component.UNDEFINED, infinite=Component.UNDEFINED, autoplay=Component.UNDEFINED, speed=Component.UNDEFINED, slides_to_show=Component.UNDEFINED, slides_to_scroll=Component.UNDEFINED, center_mode=Component.UNDEFINED, center_padding=Component.UNDEFINED, swipe_to_slide=Component.UNDEFINED, variable_width=Component.UNDEFINED, responsive=Component.UNDEFINED, vertical=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'dots', 'arrows', 'infinite', 'autoplay', 'speed', 'slides_to_show', 'slides_to_scroll', 'center_mode', 'center_padding', 'swipe_to_slide', 'variable_width', 'responsive', 'vertical', 'style', 'className', 'id']
        self._type = 'Carousel'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'dots', 'arrows', 'infinite', 'autoplay', 'speed', 'slides_to_show', 'slides_to_scroll', 'center_mode', 'center_padding', 'swipe_to_slide', 'variable_width', 'responsive', 'vertical', 'style', 'className', 'id']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Carousel, self).__init__(children=children, **args)
