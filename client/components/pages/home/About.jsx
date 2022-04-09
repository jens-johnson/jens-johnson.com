import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faLaptopCode, faDatabase, faUser, faLightbulb, faSitemap, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';

import aboutPortfolioShot from '~/assets/images/pages/home/about-portfolio-shot.jpg';
import resume from '~/assets/files/jens_johnson_resume_2022.pdf';

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
                  I'm currently living in my hometown of Denver, Colorado, where I work remotely as a software engineer with Nike.
                  I graduated from the University of Oregon in 2019 with dual majors in Computer Information Science and Business Administration, and I've been incredibly
                  lucky to pursue my passions at the intersection of technology, software development, innovation, collaborative design, and so much more; both within and outside my career.
                  <br /><br/>

                  At Nike, I work with the Sport Science Platform, enabling world-class data collection and research services for the <a href="https://news.nike.com/news/inside-the-nike-sports-research-lab-lebron-james-innovation-center">Nike Sport Research Lab (NSRL)</a>,
                  helping to drive innovation through sport and beyond at Nike.
                  <br /><br/>

                  Outside of Nike, software development, and project execution, I love to explore my incredible back yard here in Denver and all that
                  Colorado has to offer. When I'm not in front of a laptop, I'm usually found trail running on one of the many amazing paths right outside
                  of my front door in Denver, skiing in the mountains, camping, rock climbing, or somewhere outside. The juxtaposition of creating software
                  and unplugging from all technology to get outside throughout my week is a perfect balance for me.
                  <br /><br/>

                  I love interacting and meeting with people to diverse groups of people, and hearing about the unique problems that they've been working on.
                  Interested in talking? Let's <a href="#contact">connect</a>.
                </p>
                <div className="mh-about-tag wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                  <ul>
                    <li><span><FontAwesomeIcon icon={faLaptopCode} /> Software Development</span></li>
                    <li><span><FontAwesomeIcon icon={faDatabase} /> Data and Analytics</span></li>
                    <li><span><FontAwesomeIcon icon={faSitemap} /> Service Oriented Architecture</span></li>
                    <li><span><FontAwesomeIcon icon={faUser} /> User Experience Design</span></li>
                    <li><span><FontAwesomeIcon icon={faPeopleArrows} /> Project Management</span></li>
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
