import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './Footer';
import { SectionLoader } from './misc';

/**
 * Application Router component for routing over the core application.
 *
 * @component
 * @description Provides a router using react-router for client-side routing
 */
class ApplicationRouter extends Component {
    render() {
        return(
            <Router>
                <SectionLoader />
                <Switch>
                    <Route exact path="/">
                        <h1>Hello, World!</h1>
                    </Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default ApplicationRouter;
