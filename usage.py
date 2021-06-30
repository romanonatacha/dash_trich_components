import dash_trich_components as dtc
import dash
import pandas as pd
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import dash_bootstrap_components as dbc
from dash.exceptions import PreventUpdate
import plotly_express as px

import random 

fontAwesome = "https://use.fontawesome.com/releases/v5.15.1/css/all.css"
dashBoostrap = dbc.themes.BOOTSTRAP


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

# CSS files and links
external_stylesheets = [dbc.themes.BOOTSTRAP,  # adding the bootstrap inside the application
                        fontAwesome
                        ]

app = dash.Dash(__name__, meta_tags=meta_tags, external_stylesheets=external_stylesheets)


def creating_new_components(id_new):
    
    style = { 'border': 'dashed 2px darkgreen' }

    chart_type = random.choice(["bar", "line", "scatter"])

    close_button_style={"background": "transparent", "border": "none", 
                        "fontSize": "12px", "padding": "0px", 
                        "width": "100%", "color":"transparent", 
                        "marginLeft":"8px"}

    content = html.Div(children=[
        html.Div([
            dcc.Graph(
                id={"type": "graph", "index":id_new},
                figure={
                    'data':
                    [
                        {'x': ['a', 'b', 'c'], 'y': [4, 1, 2], 'type': chart_type, 'name': random.choice(['Brazil', 'US', 'Australia', 'Nigeria', 'China', 'India'])},
                        {'x': ['a', 'b', 'c'], 'y': [2, 4, 5], 'type': chart_type, 'name': random.choice(['Argentina', 'Cuba', 'Russia', 'France', 'Spain'])},
                    ],
                    'layout': 
                    {
                        'title': f'Dash Data Visualization<br>CHART {id_new}',
                    }
                },
                config={
                        'autosizable': True,
                        'doubleClick': 'autosize',
                        'frameMargins': 0,
                        },
                style={"margin": "8px 4px 0 4px", "width":"100%"}
            ),
        html.Div([
            html.Div(dbc.Button(html.I(className="far fa-hand-paper textColor MyDragHandleClassName", style={"color": "black"}),
                            id={"type":"drag-btn", "index":id_new}, 
                            style=close_button_style, className="dragButton"), 
                    id=f"div-hand-{id_new}", style={"width": "20px"}),
            dbc.Tooltip(
                [
                    html.Div(["Drag the chart."], 
                             className="font-xs", 
                             style={ 'color':'lightgrey'})
                ], 
                target=f"div-hand-{id_new}"),

            html.Div(dbc.Button(html.I(className="far fa-window-close red", style={"color": "black"}),
                            id={"type":"btn-close", "index":id_new}, 
                            style=close_button_style), 
                    id=f"div-{id_new}", style={"width": "20px"}, className="DisplayNone"),
            dbc.Tooltip([html.Div(["Click to close the chart", f"\n{id_new}"], 
                         className="font-xs", style={ 'color':'lightgrey'})], 
                         target=f"div-{id_new}"),
            ], style={"display": "flex"})
    ], style={"border":"solid .1px lightgrey"}, className="width-100")], id=id_new)

    return content



def SandBoxLayout():

    layouts = {
    'lg': [],
    'md': [],
    'sm': [],
    'xs': [],
    'xxs':[]
    }

    style = { 'border': 'dashed 1px darkgreen', 'height': '100%' }
    cols = {'lg': 12, 'md': 10, 'sm': 6, 'xs': 4, 'xxs': 2}
    breakpoints = {'lg': 1200, 'md': 9960, 'sm': 768, 'xs': 480 , 'xxs': 0}
    row_height=30

    sandbox_structure = html.Div([
        html.H1("Responsive GRID LAYOUT", style={"textAlign": "center"}),
        html.Div(

        [
            html.Div([
                dbc.Button(html.Div([html.I(className="fa fa-plus"), "  New Chart"], className="font-sm"), 
                                id="btn-add-chart", n_clicks=0, className="sandboxBtnColors", style={"marginRight":"20px"}),
                dbc.Tooltip("Click on the Button to add new charts to the application. You have a limitation of X charts.",
                            target="btn-add-chart"),
                dbc.Button(html.Div([html.I(className="far fa-times-circle"), "  Reset"], className="font-sm"), 
                                id="btn-reset-chart", n_clicks=0, className="sandboxBtnColors"),
                dbc.Tooltip("Click on the Button to clean the charts table.",
                            target="btn-reset-chart")
                            ], className="bottom16", style={ "marginLeft":"25px"}),
            dtc.ResponsiveGrid(
                [],
                id='grid-layout',
                cols=cols, 
                breakpoints=breakpoints,  
                layouts=layouts,
                rowHeight=row_height,
                autoSize=True,
                # layouts=layouts,
                isResizable=True,
                preventCollision=False,
                verticalCompact=True,  
                maxRows=50,
                # draggableHandle=".MyDragHandleClassName",
                # isDroppable=True,
                #draggableCancel=".MyNonDraggableAreaClassName",
                #maxRows=25,
                # compactType="horizontal",
                # onWidthChange={"width":"600px"},
                # useCSSTransforms=True,
                containerPadding= [15,0],
                margin=[5,20],
                # width=250
            ) #drgl.GridLayout
        ], style={"width":"100%", "minHeight":"75vh", #"overflowY":"auto", 
                  "backgroundColor": "lightgrey", "paddingBottom": "30px",
                  "minHeight":"800px", "margin": "32px auto 0"})])
                  
    return sandbox_structure


app.layout = html.Div([
    # SandBoxLayout(),
    SandBoxLayout(),

    dtc.SideBar([
        dtc.SideBarItem(id='id_1', label="Text 1", icon="fab fa-github"),
        dtc.SideBarItem(id='id_2', label="Text 2"),
        dtc.SideBarItem(id='id_3', label="Text 3"),
        dtc.SideBarItem(id='id_4', label="Text 4"),
        dtc.SideBarItem(id='id_5', label="Text 5"),
    ], className="testeee", id="sidebar", bg_color="blue"),

    html.Div(id="page_content", style={"maxWidth":"1400px",'height': '1000px', "overflowY":"auto"}),
    
    html.Div([
        dtc.Carousel(
            content,
            dots=False,
            arrows=True,
            infinite=True,
            speed=500,
            slides_to_show=3,
            slides_to_scroll=1,
            responsive=responsive,
        ),
        dtc.ThemeToggle(
            bg_color_dark='red',
            icon_color_dark='blue',
            bg_color_light='pink',
            icon_color_light='green',
            tooltip_text='teeext'
        ),
        dtc.Card(
            link='link',
            image='image',
            title='title',
            description='description',
            badges=['trich', 'dash', 'web-dev'],
            git='git',
            dark=True,
            openNewTab=False,
            className='myclass'
        )
    ]),

], style={'width': '80%', 'margin': '0 auto'})


@app.callback(
    Output("page_content", "children"),
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

        style_default = {'height': "100%",
                         "border": "solid 1px darkgray",         
                         'display': "flex", 
                         'alignItems': "center", 
                         'justifyContent': "center"}


        return dtc.GridLayoutComponent(
                    children=[
                        html.Div(dcc.Graph(figure=px.bar(x=["a", "b", "c"], y=[15, 25, 6]), 
                                 config={
                                     'autosizable': True,
                                 }, style={"height":"100%", "width":"100%"}), style=style_default),

                        html.Div('teste2', style={'backgroundColor': "lightcoral", 'height': "100%", "border": "solid 1px darkgray",
                                                'display': "flex", 'alignItems': "center", 'justifyContent': "center"}),
                        html.Div('teste3', style={'backgroundColor': "#88c08f", 'height': "100%", "border": "solid 1px darkgray",
                                                'display': "flex", 'alignItems': "center", 'justifyContent': "center"}),
                        html.Div('teste4', style={'backgroundColor': "lightgreen", 'height': "100%", "border": "solid 1px darkgray",
                                                'display': "flex", 'alignItems': "center", 'justifyContent': "center"}),
                        html.Div('teste5', style={'backgroundColor': "#43439d", 'height': "100%", "border": "solid 1px darkgray",
                                                'display': "flex", 'alignItems': "center", 'justifyContent': "center"}),
                        html.Div('teste6', style={'backgroundColor': "#6b5d5d", 'height': "100%", "border": "solid 1px darkgray",
                                                'display': "flex", 'alignItems': "center", 'justifyContent': "center"})
                    ])
                    
    if btn_df.idxmax(axis=1).values == "input2":
        return content_2
    if btn_df.idxmax(axis=1).values == "input3":
        return content_3
    if btn_df.idxmax(axis=1).values == "input4":
        return content_4
    if btn_df.idxmax(axis=1).values == "input5":
        return content_5

# app.layout = html.Div([html.Div(
#     [
#         html.Div(SandBoxLayout(), style={"width":"100%", "margin": "0 auto", "background": "lightgrey"})
#     ], style={"width":"100%"})


# print()
@app.callback(
    [Output('grid-layout', 'children'),
     Output('grid-layout', 'layouts')],
    [Input('btn-add-chart', 'n_clicks'),
     Input('btn-reset-chart', 'n_clicks')],
    [State('grid-layout', 'layouts'), 
     State('grid-layout', "children")])
def myfunc(n_clicks_add, n_clicks_close, layout, children):

    ctx = dash.callback_context

    if not ctx.triggered:
        raise PreventUpdate

    if n_clicks_add == 0:
        raise PreventUpdate

    clicked = ctx.triggered[0]['prop_id'].split('.')[0]

    if clicked == 'btn-add-chart':
        
        new_id = f"chart-{n_clicks_add}"

        layout["lg"].append({'i': new_id,
                             'w': 4, 'h': 6, 'x': 0, 'y': 0, 
                             'maxH':12, 'minH':5, 'minW':3, 'maxW':12,                            
                             'isDraggable': True, 
                             'isResizable':True, 
                             'isBounded':True})

        layout["md"].append({'i': new_id,
                             'w': 4, 'h': 5, 'x': 0, 'y': 0, 
                             'maxH':10, 'minH':4, 'minW':3, 'maxW':10,                            
                             'isDraggable': True,  
                             'isResizable':True, 
                             'isBounded':True})

        layout["sm"].append({'i': new_id,
                             'w': 3, 'h': 6, 'x': 0, 'y': 0,  
                             'maxH':10, 'minH':4, 'minW':2, 'maxW':6,                            
                             'isBounded':True, 
                             'isResizable':True, 
                             'isDraggable': True})

        layout["xs"].append({'i': new_id,
                             'w': 2, 'h': 6, 'x': 0, 'y': 0,  
                             'maxH':10, 'minH':6, 'minW':2, 'maxW':4,                              
                             'isBounded':True, 
                             'isResizable':True, 
                             'isDraggable': True})

        layout["xxs"].append({'i': new_id,
                             'w': 2, 'h': 6, 'x': 0, 'y': 0,  
                             'maxH':8, 'minH':5, 'minW':1, 'maxW':2,                              
                             'isBounded':True, 
                             'isResizable':True, 
                             'isDraggable': True})

        return children + [creating_new_components(new_id)], layout
    else:
        return [], {'lg': [], 'md': [],'sm': [], 'xs': [], 'xxs': []}


if __name__ == '__main__':
    app.run_server(debug=True, port="5454")
