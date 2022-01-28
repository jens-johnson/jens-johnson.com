import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLaptopCode, faDatabase, faUser, faProjectDiagram, faLightbulb } from '@fortawesome/free-solid-svg-icons';

import aboutPortfolioShot from '~/assets/images/pages/home/about-portfolio-shot.jpg';
import resume from '~/assets/files/Jens-Johnson_Resume.pdf';

/**
 * Component representing the "About" section on the home page
 *
 * @component
 */
class About extends Component {
  render() {
    return (
      <section className="mh-about" id="about">
        <div className="container">
          <div className="row section-separator">
            <div className="col-sm-12 col-md-6">
              <div className="mh-about-img shadow-2 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                <img src={aboutPortfolioShot} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="mh-about-inner">
                <h2 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.1s">About Me</h2>
                <p className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Hi, I'm Jens.</p>
                <p className="wow fadeInUp about-description" data-wow-duration="0.8s" data-wow-delay="0.2s">
                  I'm currently living and working in the Portland, Oregon area as a software engineer with Nike.
                  I graduated from the University of Oregon in 2019 with dual majors in business and computer science, I've been incredibly
                  lucky to pursue my passions at the intersection of technology, software development, innovation, collaborative design, and so much more,
                  both within and outside my career. <br /><br />
                  When I'm not working with the amazing people and technology at Nike, I love pursuing my passions in the areas of data and analytics, and application development,
                  exploring the Pacific Northwest, running, and trying all of the amazing food that Portland has to offer. <br /><br />
                  Interested in talking? Let's <a href="">connect</a>.
                </p>
                <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <ul>
                    <li><span><FontAwesomeIcon icon={faLaptopCode} /> Software Development</span></li>
                    <li><span><FontAwesomeIcon icon={faDatabase} /> Data and Analytics</span></li>
                    <li><span><FontAwesomeIcon icon={faUser} /> User Design</span></li>
                    <li><span><FontAwesomeIcon icon={faProjectDiagram} /> Project Management</span></li>
                    <li><span><FontAwesomeIcon icon={faLightbulb} /> Innovation</span></li>
                  </ul>
                </div>
                <a href={resume} className="btn btn-fill wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">CV/Resume <FontAwesomeIcon icon={faDownload} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
