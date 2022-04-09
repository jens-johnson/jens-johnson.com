import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBusinessTime, faBook } from '@fortawesome/free-solid-svg-icons';

/**
 * Component representing the "Service" section on the home page
 *
 * @component
 */
class Service extends Component {
  render() {
    return (
      <section className="mh-service">
        <div className="container">
          <div className="row section-separator">
            <div className="col-sm-12 text-center section-title wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
              <h3>What I Do</h3>
            </div>
            <div className="col-sm-4">
              <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <FontAwesomeIcon icon={faCode} />
                <h3>Software Engineering</h3>
                <p>
                  As a software engineer, I love the ability to explore my passions of technology and innovation through critical thinking,
                  collaborative problem solving, and solution design. This career has given me the experience of being able to work on a
                  variety of projects both inside and outside of my career, from enterprise data platforms, to serverless application development,
                  to user experience design, and so much more (including this website!)
                  <br /><br/>

                  I love to cultivate this passion within my role at Nike, as well as through side projects that allow me to explore areas of software
                  engineering that I'm interested in. Whether it's building a Strava API client to track my running data, creating a React Native application for
                  my iPhone, or just poking around with a new language, engineering allows me to apply creative problem solving to explore unique technologies and solutions.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <FontAwesomeIcon icon={faBusinessTime} />
                <h3>Project Management</h3>
                <p>
                  My experience with the <a href="https://business.uoregon.edu/ug/experiential/oregon-consulting-group">Oregon Consulting Group</a> cultivated a
                  passion for project management and collaborative work that I am fortunate to continue to foster in my career. Simply put: I love working with
                  diverse, interesting teams to solve complex problems and deliver outcomes. Technology and innovation is a cradle for excellent team dynamics and group
                  development, and I try to bring a project management/development lens to every group engagement I am on.
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="mh-service-item shadow-1 dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                <FontAwesomeIcon icon={faBook} />
                <h3>Learning</h3>
                <p>
                  As banal as it sounds, I truly believe learning is a non-stop journey, and one that I am constantly developing on through my career and personal life.
                  With a passion for innovation, skill enrichment, and simple personal growth, I love taking the time to ingest new technologies, hobbies, and ideas.
                  From scalable mobile infrastructures to creating the perfect chicken wings in the air fryer (believe me, there is such a thing), I am always seeking
                  new sources of material, and am always open to recommendations!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Service;
