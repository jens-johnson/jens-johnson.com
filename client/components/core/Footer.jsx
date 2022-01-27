import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import { SocialIcons } from '~/components/common/social';
import { Contact } from '~/components/common/contact';

class Footer extends Component {
  render() {
    return(
      <footer className="mh-footer" id="contact">
        <div className="map-image image-bg">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                <h3>Let's Get in Touch</h3>
              </div>
              <div className="col-sm-12 mh-footer-address">
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                      <div className="each-icon">
                        <FontAwesomeIcon icon={faLocationArrow} />
                      </div>
                      <div className="each-info">
                        <h4>Location</h4>
                        <a href="">Portland, Oregon</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                      <div className="each-icon">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </div>
                      <div className="each-info">
                        <h4>Email</h4>
                        <a href="mailto:jens@jens-johnson.com">jens@jens-johnson.com</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <div className="mh-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                      <div className="each-icon">
                        <FontAwesomeIcon icon={faPhone} />
                      </div>
                      <div className="each-info">
                        <h4>Phone</h4>
                        <a href="callto:+1(303)-918-7742">+1 (303)-918-7742</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <Contact />
              </div>
              <div className="col-sm-12 col-md-6 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                <div className="mh-map">
                  <div id="mh-map" className="shadow-1"></div>
                </div>
              </div>
              <div className="col-sm-12 mh-copyright wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="text-left text-xs-center">
                      <p>All rights reserved Jens Johnson @ 2021</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <SocialIcons />
                  </div>
                  <div className="col-sm-4 sitemap">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/blog">Blog</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
