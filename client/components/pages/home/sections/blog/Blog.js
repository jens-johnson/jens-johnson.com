import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import HomePostBlurb from './HomePostBlurb';
import { retrieveFeaturedPosts } from '~/utilities/blog';

import Button from 'react-bootstrap/Button';

/**
 * Blog component for the home page
 *
 * @component
 * @description Initializes blog section with featured posts on the home page
 */
const Blog = () => {
  const [ featuredPosts, setFeaturedPosts ] = useState([]);

  useEffect(() => {
    retrieveFeaturedPosts(setFeaturedPosts);
  }, []);

  return(
    <section className="mh-blog" id="blog">
      <div className="container">
        <div className="row section-seperator">
          <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
            <h3>Featured Posts</h3>
          </div>
          {(() => {
            if (featuredPosts && featuredPosts.length) {
              return(
                <>
                  { featuredPosts.map((post, i) => <HomePostBlurb key={i} data={post} />) }
                </>
              );
            }
          })()}
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
