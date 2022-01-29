import React, { useState, useEffect } from 'react';
import blogClient from '~/client/blog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { modifyQueryString } from '~/utils/blog/search';

/**
 * Component representing a list of blog categories (tags)
 *
 * @component
 */
function Categories() {
  const [ state, setState ] = useState({
    tags: []
  });

  useEffect(() => {
    blogClient.getAllTags()
      .then(tags => setState({ ...state, tags }))
      .catch(() => setState({ ...state, tags: [] }));
  }, []);

  return(
    <div className="sidebar-item mh-blog-category">
      <h3>Blog Categories</h3>
      <ul>
        {
          state.tags.map(tag => (
            <li key={tag.id}>
              <a onClick={() => modifyQueryString('categories', tag.name)}>
                <span><FontAwesomeIcon icon={faTag} /> <strong>{tag.name}</strong> ({tag.count})</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Categories;
