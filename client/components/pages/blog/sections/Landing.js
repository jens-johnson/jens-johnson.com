import React, { useState, useEffect } from 'react';
import { Pagination } from '~/components/core/misc';
import { LandingPostBlurb } from './post';
import NoPostsFound from './NoPostsFound';
import { retrieveAllPosts } from '~/utilities/blog';
import Config from '~/config';

/**
 * Landing component for blog page
 *
 * @component
 * @description Constructs landing page with pagination over blog posts
 */
const Landing = () => {
  const {
    blog: {
      pageSettings: {
        postsPerPage
      }
    }
  } = Config;
  const [ posts, setPosts ] = useState(null);
  const [ currentPage, setCurrentPage ] = useState(1);

  useEffect(() => {
    retrieveAllPosts(setPosts);
  }, []);

  return(
    <>
      {(() => {
        if (posts && posts.length) {
          const lastIndex = currentPage * postsPerPage;
          const firstIndex = lastIndex - postsPerPage;
          const currentPosts = posts.slice(firstIndex, lastIndex);
          const paginate = (pageNumber) => setCurrentPage(pageNumber);

          const postElements = currentPosts.map(post => <LandingPostBlurb data={post} key={post._id}/>);

          return(
            <>
              { postElements }
              <Pagination
                totalElements={posts.length}
                elementsPerPage={postsPerPage}
                paginate={paginate}
                currentPage={currentPage}
              />
            </>
          );
        } else {
          return(
            <NoPostsFound />
          );
        }
      })()}
    </>
  );
}

export default Landing;
