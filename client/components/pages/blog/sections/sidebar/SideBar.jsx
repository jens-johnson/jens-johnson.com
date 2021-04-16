import React, { Component } from 'react';
import { SocialIcons } from '~/components/core/misc';
import Typewriter from 'typewriter-effect';
import { Categories } from './Categories';
import { Dates } from './dates';
import jensAuthorPhoto from '~/assets/images/pages/blog/jens-author-photo.jpg';

/**
 * Blog sidebar component
 *
 * @component
 * @description Constructs blog sidebar component with relevant dates/categories for posts.
 */
class SideBar extends Component {
  render() {
    return(
      <div className="col-md-4" id="blog-sidebar">
        <div className="mh-blog-sidebar">
          <div className="sidebar-item mh-author-info">
            <div className="mh-author-img">
              <div className="img-border">
                <img src={jensAuthorPhoto} alt="" className="img-fluid" />
              </div>
              <h2>Jens Johnson</h2>
              <h4>
                <Typewriter options={{
                    strings: ['Software Engineer', 'Project Manager', 'Avid Learner'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h4>
              <p>
                Daily thoughts, ponderings, and ramblings...
                My take on the world in a couple sentences.
              </p>
              <SocialIcons />
            </div>
          </div>
          <Categories />
          <Dates />
        </div>
      </div>
    );
  }
}

export default SideBar;
