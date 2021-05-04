import React, { useState, useEffect } from 'react';
import { padDate, normalize } from '~/utilities/date';
import { retrieveBlogImage } from '~/utilities/image';
import placeHolderImage from '~/assets/images/pages/blog/post-placeholder-image_small.jpg';

/**
 * Landing post "blurb" component
 *
 * @component
 * @description Creates a blurb for landing page
 */
const LandingPostBlurb = ({ data }) => {
  const {
    title,
    description,
    date,
    authors: postAuthors
  } = data;
  const [ postImage, setPostImage ] = useState(null);

  const { year, month, day } = padDate(normalize(date));
  const authors = postAuthors.length > 1 ? postAuthors.join(', ') : postAuthors;
  const endpoint = [ year, month, day ].join('/');

  useEffect(() => {
    retrieveBlogImage({ year, month, day }, 'small', setPostImage);
  }, []);

  return(
    <div className='col-sm-12 col-md-6'>
      <div className='mh-blog-item dark-bg'>
      <img src={postImage ? postImage : placeHolderImage} alt="" className="img-fluid" />
        <div className="blog-inner">
          <h2><a href="">{title}</a></h2>
          <div className="mh-blog-post-info">
            <ul>
              <li><strong>Post On</strong><a href="">{`${month}-${day}-${year}`}</a></li>
              <li><strong>By</strong><a href="">{authors}</a></li>
            </ul>
          </div>
          <p>{description}</p>
          <a href={`/blog/${endpoint}`}>Read More</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPostBlurb;
