import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoPostFound from './NoPostFound';
import { retrieveBlogImage } from '~/utilities/image'
import { retrievePost, retrieveContent } from '~/utilities/blog';
import { normalize } from '~/utilities/date';
import placeHolderImage from '~/assets/images/pages/blog/post-placeholder-image.jpg';

/**
 * Blog Post component
 *
 * @component
 * @description Blog post component. Constructs a blog post using image/content data.
 */
const BlogPost = () => {
  const [ postData, setPostData ] = useState(null);
  const [ postContent, setPostContent ] = useState(null);
  const [ postImage, setPostImage ] = useState(null);

  const { year, month, day } = useParams();

  useEffect(() => {
    retrievePost({ year, month, day }, setPostData);
    retrieveContent({ year, month, day }, setPostContent);
    retrieveBlogImage({ year, month, day }, 'large', setPostImage);
  }, []);

  return(
    <div className="col-sm-12 col-md-12">
      {(() => {
        console.log('Test',{
          postData,
          postContent
        })
        if (postData && postContent) {
          const {
            authors: postAuthors,
            date,
            title,
            description
          } = postData;
          const authors = postAuthors.length > 1 ? postAuthors.join(', ') : postAuthors;
          const { year, month, day } = normalize(date);
          return(
            <div className="mh-blog-item dark-bg blog-single">
              <img src={postImage ? postImage : placeHolderImage} alt="" className="img-fluid" />
              <div className="blog-inner">
                <h2><a href="">{title}</a></h2>
                <div className="mh-blog-post-info">
                  <ul>
                    <li><strong>Posted:</strong><a href="">{`${month}-${day}-${year}`}</a></li>
                    <li><strong>By:</strong><a href="">{authors}</a></li>
                  </ul>
                </div>
                <p>{ description || '' }</p>
                <hr />
                { postContent }
              </div>
            </div>
          );
        } else {
          return (
            <NoPostFound />
          );
        }
      })()}
    </div>
  );
}

export default BlogPost;
