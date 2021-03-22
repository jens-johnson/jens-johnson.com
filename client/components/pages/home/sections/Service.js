import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faBusinessTime, faBook } from '@fortawesome/free-solid-svg-icons';

/**
 * Service component
 *
 * @component
 * @description Service section of the home page.
 */
class Service extends Component {
    render() {
        return(
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
                                    I'm currently working as a software engineer with Nike. Software engineering has allowed me to explore my passions of technology
                                    and innovation through frameworks and patterns that utilize critical thinking, collaborative problem solving, and design solutioning - all
                                    while giving me the experience of working on a variety of projects, from distributed cloud applications to automated data warehousing solutions.
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
