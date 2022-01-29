import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Component representing the "Experience" section on the home page
 *
 * @component
 */
class Experience extends Component {
  render() {
    return (
      <section className="mh-experience" id="experience">
        <div className="bolor-overlay">
          <div className="container">
            <div className="row section-separator">
              <div className="col-sm-12 col-md-6">
                <div className="mh-work">
                  <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Education</h3>
                  <div className="mh-experience-deatils">
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                      <h4>Computer and Information Science, B.S. | <a href="https://www.uoregon.edu/">University of Oregon</a></h4>
                      <div className="mh-eduyear">2015 - 2019</div>
                      <p>
                        <b>Dean's List Recipient, Summit Scholar</b><br/><br/>
                        Coursework included data structures and algorithms, operating systems, programming language design, natural language
                        processing, game programming. Participated in independent study on mobile application development and assisted in the career
                        and internship seminar program.
                      </p>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                      <h4>Business Administration, B.S. | <a href="https://www.uoregon.edu/">University of Oregon</a></h4>
                      <div className="mh-eduyear">2015 - 2019</div>
                      <p>
                        <b>Dean's List Recipient, Summit Scholar</b><br/><br/>
                        Coursework included accounting, marketing, finance, business ethics, operations and business analytics, sustainability.
                        Member of the UO Sales Club and participant in the GEO (Global Education Abroad) wine marketing in Italy program during summer 2017.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="mh-work">
                  <h3 className="wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">Work Experience</h3>
                  <div className="mh-experience-deatils">
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                      <h4>Software Engineer, Sport Science Platform (SSP) | <a href="https://about.nike.com/pages/nike-explore-team-sport-research-lab">Nike</a></h4>
                      <div className="mh-eduyear">2020 - Present</div>
                      <p>
                        Currently a software engineer with the Nike Sport Science (SSP) in Nike Innovation. Our platform provides the data collection,
                        study tools, and experiences that enable world-class sport research through the Nike Sport Research Lab (NSRL). As an SSP engineer,
                        I'm responsible for the design, development, and maintenance of solutions that enable sport research, including:
                      </p>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />The development of data applications to provide rapid access to consistent, secure, and reliable sport research data</li>
                        <li><FontAwesomeIcon icon={faCircle} />Designing and implementing seamless user interfaces to provide access to research tools including study management and data retrieval and storage</li>
                        <li><FontAwesomeIcon icon={faCircle} />Engaging with internal stakeholders to identify solutions for conducting sport research at Nike</li>
                      </ul>
                      <p>Through this role, I've been able to work on a diverse technology stack, including:</p>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Serverless application development AWS Lambda</li>
                        <li><FontAwesomeIcon icon={faCircle} />Containerized deployments using Docker and AWS EC2</li>
                        <li><FontAwesomeIcon icon={faCircle} />Full-stack web application development using Javascript frameworks such as Vue and Express</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                      <h4>Product Owner, Nike Music | <a href="https://jobs.nike.com/teams#story-30">Nike</a></h4>
                      <div className="mh-eduyear">2020 - 2020</div>
                      <p>
                        Worked as the acting product owner for the Nike Music. In my role, I was responsible for the oversight of
                        product management, evaluation, and growth strategies to enable the Nike Music experience in Nike retail stores
                        across the globe, Nike-owned facilities, and for the Nike brand experience as a whole.
                      </p>
                      <span>Details:</span>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Coordinated multi-region, multi-store experience music strategy with partners across Nike Global Technology, Nike Brand, and Nike Direct, amongst others</li>
                        <li><FontAwesomeIcon icon={faCircle} />Facilitated vendor relationships, integrations within the store technology landscape, and A/V strategies at scale</li>
                        <li><FontAwesomeIcon icon={faCircle} />Assisted in creating music and A/V design approaches for different Nike concept doors, such as Houses of Innovation (HOI’s) and Factory (NSF) stores</li>
                        <li><FontAwesomeIcon icon={faCircle} />Helped design a strategy for store readiness using audio systems and alerting following closures due to Covid-19 in concert with Global Communications, Global Operations, and multiple other functional stakeholder groups</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                      <h4>Software Engineer, PDH/API 360 | <a href="https://jobs.nike.com/teams#story-30">Nike</a></h4>
                      <div className="mh-eduyear">2019 - 2020</div>
                      <p>
                        Engineer with the PDH (Product Data Hub)/API 360 team in Nike Data and Analytics. As a PDH engineer,
                        I developed and maintained a variety of applications in the NDF (Nike Data Foundation) platform aimed at delivering
                        dimensional and transactional data products to internal Nike consumers through several consumption patterns, including
                        data lakes/warehouses/services/streaming, while meeting data standards of availability, reliability, consistency, and security.
                        The product data I helped provide through this data platform enabled a multitude of functions at Nike, from digital marketing to
                        store operations.
                      </p>
                      <span>Details:</span>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Developed data services on a hybrid cloud and serverless stack using a mix of AWS tools, including Lambda, Batch, and ECS</li>
                        <li><FontAwesomeIcon icon={faCircle} />Refactored several legacy services, such as batch data refresh tools, to modernized solutions using Jenkins pipelines, improving latency and error rates for applications</li>
                        <li><FontAwesomeIcon icon={faCircle} />Led the development of a filtering implementation for a RESTful GraphQL interface over API 360's serverless application that allowed internal consumers to query across multiple Elastic Search clusters, providing robust and dynamic data access</li>
                        <li><FontAwesomeIcon icon={faCircle} />Helped implement an automated solution using version control hooks for verifying, consolidating, and deploying SQL scripts to a Snowflake data warehouse, allowing data engineers to automatically implement data transformations</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                      <h4>Software Engineering Intern, Go To Market Solutions (GTMS) | <a href="https://jobs.nike.com/teams#story-30">Nike</a></h4>
                      <div className="mh-eduyear">2018 - 2018</div>
                      <p>
                        Software engineering intern with the Go-To Market Solutions (GTMS) team as a participant in
                        Nike Global technology’s 11-week internship program. As a member of GTMS, I worked with the content foundation/digital storytelling team
                        to develop and maintain software solutions for Nike.net, Nike’s B2B sales platform.
                      </p>
                      <span>Details:</span>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Developed Java Spring modules for Adobe Experience Manager (AEM) to support content creation capabilities for Nike.net, Nike's B2B sales platform</li>
                        <li><FontAwesomeIcon icon={faCircle} />Worked closely with several cross-functional groups, including content authors and core engineers, to improve authoring tools and capabilities for Nike Marketing teams</li>
                        <li><FontAwesomeIcon icon={faCircle} />Improved the Nike marketing content creation pipeline by creating authoring tools for Nike.net in AEM, which allowed Nike Marketers to simulate various user roles and environments</li>
                        <li><FontAwesomeIcon icon={faCircle} />Participated in agile development practices as well as requirements gathering, testing and QA, and continuous integration for deployments</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                      <h4>Project Manager | <a href="https://business.uoregon.edu/ug/experiential/oregon-consulting-group">Oregon Consulting Group</a></h4>
                      <div className="mh-eduyear">2017 - 2019</div>
                      <p>
                        Project manager with the Oregon Consulting Group; a student-led, professionally-managed organization, executing projects in market research, financial analysis, and business design and strategy for a variety of clients in the Pacific Northwest.
                        Led teams of 4-5 consultants and managed client relationships, project execution, and organizational development.
                      </p>
                      <span>Details:</span>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Developed an omnichannel e-commerce market entry and growth strategy for a consumer goods company, leveraging search engine optimization (SEO) and Google Analytics to identify valuable potential market segments</li>
                        <li><FontAwesomeIcon icon={faCircle} />Created a micro-financing analysis of the State of Oregon for a non-profit trust organization that provided insight into financing gaps for at-risk/under-privileged communities across the state</li>
                        <li><FontAwesomeIcon icon={faCircle} />Oversaw and aided the professional development of student consultants through coaching, skill enrichment, and continuous feedback</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.8s">
                      <h4>Student Consultant | <a href="https://business.uoregon.edu/ug/experiential/oregon-consulting-group">Oregon Consulting Group</a></h4>
                      <div className="mh-eduyear">2016 - 2017</div>
                    </div>
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

export default Experience;
