import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Footer, SectionLoader } from '~/components/core';
import { Blog, Home } from '~/components/pages';

/**
 * Application Router component
 *
 * @component
 * @description Provides a router using react-router for client-side routing over the application.
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
