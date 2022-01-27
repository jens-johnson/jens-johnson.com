import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogClient from '~/client/blog';

import NoPostFound from './NoPostFound';

import placeHolderImage from '~/assets/images/pages/blog/post-placeholder-image.jpg';

function Post() {
  const { year, month, day } = useParams();
  const [ state, setState ] = useState({
    year,
    month,
    day,
    post: null,
    image: placeHolderImage,
    content: null
  });

  useEffect(() => {
    blogClient.getPost({ year: state.year, month: state.month, day: state.day })
      .then(post => setState({ ...state, post }))
      .catch(() => setState({ ...state, post: null }));
    blogClient.getImage({ year: state.year, month: state.month, day: state.day, size: 'large' })
      .then(image => setState({ ...state, image: image || placeHolderImage }))
      .catch(() => setState({ ...state, image: placeHolderImage }));
    blogClient.getContent({ year: state.year, month: state.month, day: state.day })
      .then(content => setState({ ...state, content }))
      .catch(() => setState({ ...state, content: null }));
  }, []);

  return state.post && state.content
    ? (<div className="mh-blog-item dark-bg blog-single">
      <img src={state.image} alt="" className="img-fluid" />
      <div className="blog-inner">
        <h2><a href="">{state.post.title}</a></h2>
        <div className="mh-blog-post-info">
          <ul>
            <li><strong>Posted:</strong><a href="">{`${state.month}-${state.day}-${state.year}`}</a></li>
            <li><strong>By:</strong><a href="">{state.post.authors.join(', ')}</a></li>
          </ul>
        </div>
        <p>{ state.post.description || '' }</p>
        <hr />
        <div>
          { state.content }
        </div>
      </div>
    </div>)
    : (
      <NoPostFound />
    );
}

export default Post;
