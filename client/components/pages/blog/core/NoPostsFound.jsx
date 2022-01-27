import React, { Component } from 'react';

import noPostsFoundImage from '~/assets/images/pages/blog/no-posts-found.jpg';

class NoPostsFound extends Component {
  render() {
    return(
      <div className="col-sm-12 col-md-12">
        <div className="mh-blog-item dark-bg blog-single no-posts-found">
          <img src={noPostsFoundImage} alt="" className="img-fluid" />
          <h1>Awkward...</h1>
          <p>
            It appears there aren't any posts here.<br />
            Let's go back to the <a href="/blog">blog</a> to look again.
          </p>
        </div>
      </div>
    );
  }
}

export default NoPostsFound;
