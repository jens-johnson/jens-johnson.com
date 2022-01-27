import React, { Component } from 'react';
import phone from 'phone';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';

import { SocialIcons } from '~/components/common/social';

import Config from '~/config';

import jensHeadshot from '~/assets/images/pages/home/jens-headshot.jpg';

const { contact } = Config;

const mailLink = `mailto:${contact.email}`;
const phoneLink = `callto:${phone(contact.phone)}`;

class Landing extends Component {
  render() {
    return(
      <section className="mh-home" id="home">
        <div className="home-ovimg">
          <div className="container">
            <div className="row xs-column-reverse section-separator vertical-middle-content home-padding">
              <div className="col-sm-6">
                <div className="mh-header-info">
                  <div className="mh-promo wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">
                    <span>Hello, I'm</span>
                  </div>
                  <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Jens Johnson</h2>
                  <h4 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                    <Typewriter options={{
                      strings: ['Software Engineer', 'Project Manager', 'Avid Learner'],
                      autoStart: true,
                      loop: true,
                    }} />
                  </h4>
                  <ul>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><FontAwesomeIcon icon={faEnvelope} /><a href={mailLink}>{contact.email}</a></li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><FontAwesomeIcon icon={faPhone} /><a href={phoneLink}>{contact.phone}</a></li>
                    <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><FontAwesomeIcon icon={faMapMarker} /><a href="#contact">Denver, Colorado</a></li>
                  </ul>
                  <SocialIcons extraClasses="wow fadeInUp" extraProperties={{ 'data-wow-duration': '0.8s',  'data-wow-delay': '0.7s' }} />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="hero-img wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                  <div className="img-border">
                    <img src={jensHeadshot} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
