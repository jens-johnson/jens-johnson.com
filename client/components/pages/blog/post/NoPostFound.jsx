import React, { Component } from 'react';

import noPostFoundImage from '~/assets/images/pages/blog/no-post-found.png';

/**
 * Default no post found component for when a blog post doesn't exist for a given route
 *
 * @component
 */
class NoPostFound extends Component {
  render() {
    return (
      <div>
        <div className="mh-blog-item dark-bg blog-single">
          <img src={noPostFoundImage} alt="" className="img-fluid" />
          <div className="blog-inner no-post-found">
            <h2><a href="">Whoops...</a></h2>
            <p>It appears that there isn't a post available for that date. Check out the <a href="/blog">blog</a> page for more posts.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NoPostFound;
