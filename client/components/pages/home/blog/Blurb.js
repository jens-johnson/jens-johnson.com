import React, { useState, useEffect } from 'react';
import blogClient from '~/client/blog';
import { pad, normalize } from '~/utils/date';

import placeHolderImage from '~/assets/images/pages/blog/post-placeholder-image_small.jpg';

/**
 * Component representing a blog post blurb for the home page blog section
 *
 * @component
 */
function Blurb({ data }) {
  const {
    title,
    description,
    date,
    authors
  } = data;
  const { year, month, day } = pad(normalize(date));
  const [ state, setState ] = useState({
    title,
    description,
    year,
    month,
    day,
    authors: authors.length > 1 ? authors.join(', ') : authors,
    image: placeHolderImage
  });

  useEffect(() => {
    blogClient.getImage({ year, month, day, size: 'small' })
      .then(image => setState({ ...state, image: image || placeHolderImage }))
      .catch(() => setState({ ...state, image: placeHolderImage }));
  }, []);

  return (
    <div className='col-sm-12 col-md-4'>
      <div className='mh-blog-item dark-bg wow fadeInUp' data-wow-duration='0.8s' data-wow-delay='0.3s'>
        <img src={state.image} alt="" className="img-fluid" />
        <div className="blog-inner">
          <h2><a href="">{state.title}</a></h2>
          <div className="mh-blog-post-info">
            <ul>
              <li><strong>Post On</strong><a href="">{`${state.month}-${state.day}-${state.year}`}</a></li>
              <li><strong>By</strong><a href="">{state.authors}</a></li>
            </ul>
          </div>
          <p>{state.description}</p>
          <a href={`/blog/${[ state.year, state.month, state.day ].join('/')}`}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default Blurb;
