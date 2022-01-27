import React from 'react';
import ReactDOM from 'react-dom';

import { Application, Head } from './components';

import Config from './config';

const {
  react: {
    render: {
      anchors
    }
  }
} = Config;

ReactDOM.render(<Head />, document.getElementById(anchors.head));
ReactDOM.render(<Application />, document.getElementById(anchors.application));
