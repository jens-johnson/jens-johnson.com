import React, { useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import blogClient from '~/client/blog';
import { parseQueryString } from '~/utils/blog/search';

import { Pagination } from '~/components/common/pagination';
import Blurb from './Blurb';
import NoPostsFound from '~/components/pages/blog/core/NoPostsFound';

import Config from '~/config';

const {
  blog: {
    pagination: {
      postsPerPage
    }
  }
} = Config;

function Landing() {
  const query = parseQueryString();
  const [ state, setState ] = useState({
    posts: [],
    pagination: {
      currentPage: 1,
      firstIndex: 0,
      lastIndex: postsPerPage
    },
    search: {
      query
    }
  });

  useEffect(() => {
    blogClient.getAllPosts(state.search.query)
      .then(posts => setState({ ...state, posts }))
      .catch(() => setState({ ...state, posts: [] }));
  }, []);

  function paginate(currentPage) {
    return setState({
      ...state,
      pagination: {
        ...state.pagination,
        currentPage,
        firstIndex: currentPage * postsPerPage - postsPerPage,
        lastIndex: currentPage * postsPerPage
      }
    });
  }

  return state.posts?.length > 0
    ? (
      <>
        {
          state.posts.slice(state.pagination.firstIndex, state.pagination.lastIndex)
            .map(post => <Blurb data={post} key={uuidV4()} />)
        }
        <Pagination
          totalElements={state.posts.length}
          elementsPerPage={postsPerPage}
          paginate={paginate}
          currentPage={state.pagination.currentPage}
        />
      </>
    )
    : (
      <NoPostsFound />
    );
}

export default Landing;
