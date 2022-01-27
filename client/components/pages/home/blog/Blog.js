import React, { useEffect, useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import blogClient from '~/client/blog';

import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';

import Blurb from './Blurb';

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
          <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
            <h3>Featured Posts</h3>
          </div>
          {
            state.posts.map(post => (
              <Blurb key={uuidV4()} data={post} />
            ))
          }
          <div className="col-sm-12 blog-pointer wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.8s">
            <Button block onClick={() => { window.open('/blog'); }}>
              <h3>Read more <FontAwesomeIcon icon={faRss} /></h3>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
