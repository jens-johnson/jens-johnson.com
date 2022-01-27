import React, { Component } from 'react';
import { Router } from './navigation';

/**
 * Core Application component
 *
 * @component
 * @description Mounts the core application router.
 */
class Application extends Component {
  render() {
    return(
      <Router />
    )
  }
}

export default Application;
