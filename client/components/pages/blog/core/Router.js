import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Landing from '../landing';
import Post from '../post';
import NoPostsFound from './NoPostsFound';
import SideBar from '../sidebar';

/**
 * Router component that creates browser routing over the blog page
 *
 * @component
 */
function Router() {
  const { path } = useRouteMatch();

  return (
    <section className="mh-blog">
      <div className="container">
        <div className="row section-separator">
          <div className="col-md-8">
            <div className="row">
              <Switch>
                <Route exact path={path}>
                  <Landing />
                </Route>
                <Route path={`${path}/:year/:month/:day`}>
                  <Post />
                </Route>
                <Route>
                  <NoPostsFound />
                </Route>
              </Switch>
            </div>
          </div>
          <SideBar />
        </div>
      </div>
    </section>
  );
}

export default Router;
