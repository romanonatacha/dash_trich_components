import dash_trich_components as dtc
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

data = [
    {
        'text': 'text 1',
        'color': 'red'
    },
    {
        'text': 'text 2',
        'color': 'blue'
    },
    {
        'text': 'text 3',
        'color': 'yellow'
    },
    {
        'text': 'text 4',
        'color': 'green'
    }
]

content = ([html.Div(i['text'], style={
           'backgroundColor': i['color'], 'height': '200px'}) for i in data])

responsive = [
    {
        'breakpoint': 991,
        'settings': {
            'swipeToSlide': True,
            'arrows': False
        }
    }
]

app = dash.Dash(__name__)

app.layout = html.Div([
    dtc.Carousel(
        content,
        dots=False,
        arrows=True,
        infinite=True,
        speed=500,
        slidesToShow=3,
        slidesToScroll=1,
        responsive=responsive
        # variableWidth=True
    )
], style={'width': '80%', 'margin': '0 auto'})


if __name__ == '__main__':
    app.run_server(debug=True)
