import React, { Component } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Footer, SectionLoader } from '~/components/core';
import { Blog, Home } from '~/components/pages';

/**
 * Core router component that provides a browser router over the application
 *
 * @component
 */
class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <SectionLoader />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route>
            <Redirect to='/'/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default Router;
