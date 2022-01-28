import React, { Component } from 'react';

import { Router } from './common/navigation';

/**
 * Core application wrapper component
 *
 * @component
 */
class Application extends Component {
  render() {
    return(
      <Router />
    )
  }
}

export default Application;
