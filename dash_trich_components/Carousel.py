# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Carousel(Component):
    """A Carousel component.


Keyword arguments:
- children (a list of or a singular dash component, string or number; optional)
- dots (boolean; optional)
- arrows (boolean; optional)
- infinite (boolean; optional)
- autoplay (boolean; optional)
- speed (number; optional)
- slidesToShow (number; optional)
- slidesToScroll (number; optional)
- centerMode (boolean; optional)
- centerPadding (string; optional)
- swipeToSlide (boolean; optional)
- variableWidth (boolean; optional)
- responsive (list; optional)
- vertical (boolean; optional)"""
    @_explicitize_args
    def __init__(self, children=None, dots=Component.UNDEFINED, arrows=Component.UNDEFINED, infinite=Component.UNDEFINED, autoplay=Component.UNDEFINED, speed=Component.UNDEFINED, slidesToShow=Component.UNDEFINED, slidesToScroll=Component.UNDEFINED, centerMode=Component.UNDEFINED, centerPadding=Component.UNDEFINED, swipeToSlide=Component.UNDEFINED, variableWidth=Component.UNDEFINED, responsive=Component.UNDEFINED, vertical=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'dots', 'arrows', 'infinite', 'autoplay', 'speed', 'slidesToShow', 'slidesToScroll', 'centerMode', 'centerPadding', 'swipeToSlide', 'variableWidth', 'responsive', 'vertical']
        self._type = 'Carousel'
        self._namespace = 'dash_trich_components'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'dots', 'arrows', 'infinite', 'autoplay', 'speed', 'slidesToShow', 'slidesToScroll', 'centerMode', 'centerPadding', 'swipeToSlide', 'variableWidth', 'responsive', 'vertical']
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
