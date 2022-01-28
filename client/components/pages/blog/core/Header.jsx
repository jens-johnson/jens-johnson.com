import React, { Component } from 'react';

/**
 * Blog page header component
 *
 * @component
 */
class Header extends Component {
  render() {
    return (
      <section className="mh-home image-bg home-2-img" id="blog">
        <div className="img-foverlay img-color-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="mh-page-title text-center col-sm-12">
                <h2>Blog</h2>
                <p>Thoughts, ponderings, and ramblings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
