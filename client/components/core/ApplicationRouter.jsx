import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Home from '~/components/pages/home';
import Blog from '~/components/pages/blog';
import { SectionLoader } from './misc';

/**
 * Application Router component
 *
 * @component
 * @description Provides a router using react-router for client-side routing over the application.
 */
class ApplicationRouter extends Component {
    render() {
        return(
            <Router>
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
            </Router>
        );
    }
}

export default ApplicationRouter;
