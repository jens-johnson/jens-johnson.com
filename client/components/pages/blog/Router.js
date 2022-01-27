import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Landing from './landing';
import Post from './post';
import NoPostsFound from './NoPostsFound';

import { BlogPost } from './post';
import { SideBar } from './sidebar';

/**
 * Blog router component
 *
 * @component
 * @description Constructs router over blog page, either providing a post, default landing page, or 404 page depending on the window location.
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
