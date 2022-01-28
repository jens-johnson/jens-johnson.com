import React, { useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import blogClient from '~/client/blog';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

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
              <a>
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
