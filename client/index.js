import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Config from './config';
import { ApplicationRouter, Head } from './components/core';

const {
    reactPresets: {
        renderDestinations
    }
} = Config;

/**
 * Core Application component
 *
 * @component
 * @description Mounts the core application router.
 */
class Application extends Component {
    render() {
        return(
            <ApplicationRouter />
        )
    }
}

ReactDOM.render(<Head />, document.getElementById(renderDestinations.head));
ReactDOM.render(<Application />, document.getElementById(renderDestinations.application));
