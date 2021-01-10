/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import { Carousel } from '../lib';
import GridLayoutComponent from '../lib/components/GridLayoutComponent/GridLayoutComponent.react';

class App extends Component {

    constructor() {
        super();
        this.state = {
            value: ''
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        return (
            <div>
                <GridLayoutComponent>
                <div>teste</div>
                <div>teste</div>
                <div>teste</div>
                <div>teste</div>
                <div>teste</div>
                <div>teste</div>
                <div>teste</div>
                <div>teste</div>
                </GridLayoutComponent>
            </div>
        )
    }
}

export default App;
