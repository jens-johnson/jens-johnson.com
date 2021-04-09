import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import phone from 'phone';
import Config from '~/config';
import { SocialIcons } from '~/components/core/misc';
import jensHeadshot from '~/assets/images/pages/home/jens-headshot.jpg';

const {
    contactInformation
} = Config;

const mailLink = `mailto:${contactInformation.email}`;
const phoneLink = `callto:${phone(contactInformation.phone)}`;

/**
 * Landing component
 *
 * @component
 * @description Landing section of the home page.
 *
 **/
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
                                        <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s"><FontAwesomeIcon icon={faEnvelope} /><a href={mailLink}>{contactInformation.email}</a></li>
                                        <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s"><FontAwesomeIcon icon={faPhone} /><a href={phoneLink}>{contactInformation.phone}</a></li>
                                        <li className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s"><FontAwesomeIcon icon={faMapMarker} /><a href="#contact">Portland, Oregon</a></li>
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
