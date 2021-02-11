/* eslint no-magic-numbers: 0 */
import React, { Component } from 'react';

// import { Carousel } from '../lib';
// import GridLayoutComponent from '../lib/components/GridLayoutComponent/GridLayoutComponent.react';
// import TrichResponsiveGridLayout from '../lib/components/GridLayoutComponent/ResponsiveGridLayout.react';
// import RatingComp from '../lib/components/Rating/Rating.react';
import ResponsiveGrid from '../lib/components/ResponsiveGrid/ResponsiveGrid.react';

class App extends Component {   

    
    render() {
        const layouts = {xl:[{ i: 'a', x: 2, y: 5, w: 3, h: 10, minH: 3, maxH: 15  },
                              { i: 'b', x: 3, y: 0, w: 3, h: 4, minH: 3, maxH: 10, minW: 2, maxW: 4 },
                              { i: 'c', x: 7, y: 0, w: 6, h: 2, minH: 3, maxH: 20},
                              { i: 'd', x: 2, y: 4, w: 6, h: 2, minH: 3, maxH: 20}], 
                        lg: [{ i: 'a', x: 0, y: 0, w: 3, h: 7, minH: 3, maxH: 15  },
                              { i: 'b', x: 3, y: 0, w: 3, h: 4, minH: 3, maxH: 10, minW: 2, maxW: 4 },
                              { i: 'c', x: 7, y: 0, w: 6, h: 10, minH: 3, maxH: 20},
                              { i: 'd', x: 2, y: 4, w: 6, h: 10, minH: 3, maxH: 20}], 
                        md: [{ i: 'a', x: 0, y: 0, w: 5, h: 4 },
                             { i: 'b', x: 1, y: 2, w: 5, h: 2, minW: 2, maxW: 4 },
                             { i: 'c', x: 2, y: 0, w: 3, h: 7 },
                             { i: 'd', x: 3, y: 4, w: 6, h: 4, minH: 3, maxH: 15}],

                        sm: [{ i: 'a', x: 0, y: 0, w: 4, h: 4 },
                             { i: 'b', x: 1, y: 0, w: 3, h: 3, minW: 2, maxW: 5 },
                             { i: 'c', x: 2, y: 0, w: 5, h: 5 },
                             { i: 'd', x: 4, y: 3, w: 3, h: 7, minH: 3, maxH: 8}]}


        return (
            <div> 
                <ResponsiveGrid layouts={layouts} 
                                maxRows={25}
                                draggableHandle={".MyDragHandleClassName"}
                                rowHeight={30}>
                    <div key="a"  
                        style={{backgroundColor:"aliceblue", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{width:"100%"}}>
                                <div className="MyDragHandleClassName" style={{height:"20%", width:"100%", maxHeight:"50px", backgroundColor:"blue", color:"white", textAlign:"center"}}
                                >Draggable Area</div>
                                <div style={{height:"80%"}}> ni hao</div>
                            </div>
                    </div>
                    <div className="MyDragHandleClassName" key="b"  
                        style={{backgroundColor:"lightgrey", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>Bon jour</div>
                    <div key="c"  
                        style={{backgroundColor:"lightblue", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>olá</div>
                    <div key="d"    
                        style={{backgroundColor:"lightgreen", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>HI</div>
                </ResponsiveGrid>
        </div>
        )
    }
}

export default App;
