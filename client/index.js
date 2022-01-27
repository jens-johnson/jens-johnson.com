import React from 'react';
import ReactDOM from 'react-dom';
import Config from './config';
import { Application, Head } from './components';

const {
  react: {
    render: {
      anchors
    }
  }
} = Config;

ReactDOM.render(<Head />, document.getElementById(anchors.head));
ReactDOM.render(<Application />, document.getElementById(anchors.application));
