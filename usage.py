import dash_trich_components as dtc
import dash
import pandas as pd
from dash.dependencies import Input, Output, State
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

content_1 = html.Div('content 1')
content_2 = html.Div('content 2')
content_3 = html.Div('content 3')
content_4 = html.Div('content 4')
content_5 = html.Div('content 5')

meta_tags = [
    {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1, maximum-scale=1",
    },
]

app = dash.Dash(__name__, meta_tags=meta_tags)


app.layout = html.Div([
    dtc.SideBar([
        dtc.SideBarItem(id='id_1', label="Text 1", icon="fab fa-github"),
        dtc.SideBarItem(id='id_2', label="Text 2"),
        dtc.SideBarItem(id='id_3', label="Text 3"),
        dtc.SideBarItem(id='id_4', label="Text 4"),
        dtc.SideBarItem(id='id_5', label="Text 5"),
    ], className="testeee", id="sidebar"),
    html.Div([
    ], id="homepage"),
    # html.Div([
    #     dtc.Carousel(
    #         content,
    #         dots=False,
    #         arrows=True,
    #         infinite=True,
    #         speed=500,
    #         slides_to_show=3,
    #         slides_to_scroll=1,
    #         responsive=responsive,
    #     ),
    #     dtc.ThemeToggle(
    #         bg_color_dark='red',
    #         icon_color_dark='blue',
    #         bg_color_light='pink',
    #         icon_color_light='green',
    #         tooltip_text='teeext'
    #     )
    # ])
], style={'width': '80%', 'margin': '0 auto'})


@app.callback(
    Output("homepage", "children"),
    [
        Input("id_1", "n_clicks_timestamp"),
        Input("id_2", "n_clicks_timestamp"),
        Input("id_3", "n_clicks_timestamp"),
        Input("id_4", "n_clicks_timestamp"),
        Input("id_5", "n_clicks_timestamp")
    ],
)
def toggle_collapse(input1, input2, input3, input4, input5):
    btn_df = pd.DataFrame({"input1": [input1], "input2": [input2],
                           "input3": [input3], "input4": [input4], "input5": [input5]})
    btn_df = btn_df.fillna(0)

    if btn_df.idxmax(axis=1).values == "input1":
        return content_1
    if btn_df.idxmax(axis=1).values == "input2":
        return content_2
    if btn_df.idxmax(axis=1).values == "input3":
        return content_3
    if btn_df.idxmax(axis=1).values == "input4":
        return content_4
    if btn_df.idxmax(axis=1).values == "input5":
        return content_5


if __name__ == '__main__':
    app.run_server(debug=True)
