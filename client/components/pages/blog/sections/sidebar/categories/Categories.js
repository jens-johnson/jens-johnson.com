import React, { useState, useEffect } from 'react';
import Tag from './Tag';
import { retrieveTags } from '~/utilities/blog';

/**
 * Categories component for blog sidebar
 *
 * @component
 * @description Constructs div with tags for blog categories
 */
const Categories = () => {
  const [ tags, setTags ] = useState([]);

  useEffect(() => {
    retrieveTags(setTags);
  }, []);

  return(
    <div className="sidebar-item mh-blog-category">
      <h3>Blog Categories</h3>
      {(() => {
        if (tags && tags.length) {
          return(
            <ul>
              { tags.map(tag => <Tag name={tag._id} count={tag.count} key={tag._id} />) }
            </ul>
          );
        }
      })()}
    </div>
  );
}

export default Categories;
