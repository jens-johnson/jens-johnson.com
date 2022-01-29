import React, { useEffect, useState } from 'react';
import blogClient from '~/client/blog';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';

import Blurb from './Blurb';

/**
 * Component representing the blog section on the home page
 *
 * @component
 */
function Blog() {
  const [ state, setState ] = useState({
    posts: []
  });

  useEffect(() => {
    blogClient.getFeaturedPosts()
      .then(posts => setState({ ...state, posts }))
      .catch(() => setState({ ...state, posts: [] }))
  }, []);

  return (
    <section className="mh-blog" id="blog">
      <div className="container">
        <div className="row section-seperator">
          {
            state.posts.length > 0
            ? (
                <>
                  <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    <h3>Featured Blog Posts</h3>
                  </div>
                {
                  state.posts.map(post => (
                    <Blurb key={post.id} data={post} />
                  ))
                }
                  <div className="col-sm-12 blog-pointer wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.8s">
                    <a className="blog-redirect" href="/blog"><span>Read more <FontAwesomeIcon icon={faRss} /></span></a>
                  </div>
                </>
              )
            : (
                <>
                <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  <h3>Blog</h3>
                  <div className="col-sm-12 blog-pointer wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.8s">
                    <a className="blog-redirect" href="/blog"><span>Check out the Blog <FontAwesomeIcon icon={faRss} /></span></a>
                  </div>
                </div>
                </>
              )
          }
        </div>
      </div>
    </section>
  );
}

export default Blog;
