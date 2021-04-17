import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Landing from './Landing';
import { BlogPost } from './post';
import { SideBar } from './sidebar';
import NoPostsFound from './NoPostsFound';

/**
 * Blog router component
 *
 * @component
 * @description Constructs router over blog page, either providing a post, default landing page, or 404 page depending on the window location.
 */
function BlogRouter() {
  const { path } = useRouteMatch();

  return(
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
                  <BlogPost />
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

export default BlogRouter;
