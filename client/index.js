import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Config from './config';

const {
    reactPresets: {
        renderDestinations
    }
} = Config;

class Application extends Component {
    render() {
        return(
            <h1>Hello, world!</h1>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById(renderDestinations.application));
