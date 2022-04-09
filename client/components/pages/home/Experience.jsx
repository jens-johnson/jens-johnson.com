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
                      <div className="mh-eduyear">September 2015 - June 2019</div>
                      <p>
                        <b>Summit Scholar, Dean's List Recipient</b><br/><br/>
                        Independent research program in mobile application development; coursework includes operating systems,
                        programming language design, data structures and algorithms, computer graphics, and game programming.
                      </p>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                      <h4>Business Administration, B.S. | <a href="https://www.uoregon.edu/">University of Oregon</a></h4>
                      <div className="mh-eduyear">September 2015 - June 2019</div>
                      <p>
                        <b>Summit Scholar, Dean's List Recipient</b><br/><br/>
                        OCG project manager, UO sales club member, business analytics tutor; coursework includes
                        finance, economics, accounting, marketing, strategic environmental sustainability and management, sports business, and new business venture development.
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
                      <h4>Software Engineer, Sport Science Platform | <a href="https://about.nike.com/pages/nike-explore-team-sport-research-lab">Nike</a></h4>
                      <div className="mh-eduyear">August 2020 - Present</div>
                      <p>
                        Currently a software engineer with the Nike Sport Science Platform (SSP), which provides the data collection and pipeline, study tooling, and user
                        experiences that enable world-class sport research through the Nike Sport Research Lab (NSRL) and Nike Innovation. Responsible for the design, development,
                        and maintenance of solutions that enable sport research, including:
                      </p>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Creating data pipelines and services to provide Nike researchers with rapid, reliable, and secure access to sport research data; using cloud-native solutions built on tools such AWS Lambda, EC2, DynamoDB and SageMaker.</li>
                        <li><FontAwesomeIcon icon={faCircle} />The full-stack development of research applications using frameworks such as Express and Vue to support critical functions like study management, data retrieval and analysis, and external user research participation.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Engaging with internal stakeholders across Nike research and innovation to iteratively design and develop solutions and experiences for researchers, study facilitators, data scientists, athletes, and consumers.</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                      <h4>Product Owner, Nike Music | <a href="https://jobs.nike.com/teams#story-30">Nike</a></h4>
                      <div className="mh-eduyear">March 2020 - August 2020</div>
                      <p>
                        Acting product owner for Nike Music. Responsible for the oversight of the product management, evaluation,
                        and growth strategies to support music and audio-visual activations throughout the entire brand experience,
                        including promotions and marketing, corporate events, and throughout Nike-owned retail stores and infrastructure across the globe.
                      </p>
                      <span>Details:</span>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Coordinated multi-regional, multi-dimensional A/V and music strategies to deliver targeted brand experiences globally for consumers with internal partners including Nike Global Technology, Nike Global Marketing, and Nike Direct.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Facilitated vendor relationships for Nike’s store technology partnerships to develop and design integrations within the store technology landscape and A/V strategies for Nike retail footprints at scale.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Assisted with the creation of a store safety and readiness protocol for Nike retail stores and corporate buildings following the outbreak of COVID-19 to deliver messaging and alerts using existing A/V infrastructures.</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                      <h4>Software Engineer, Product Data Hub/API 360 | <a href="https://jobs.nike.com/teams#story-30">Nike</a></h4>
                      <div className="mh-eduyear">August 2019 - March 2020</div>
                      <p>
                        Software engineer on the Product Data Hub (PDH)/API 360 team within Nike’s Enterprise Data and Analytics organization.
                        Responsible for the development and maintenance of applications in the Nike Data Foundation (NDF) platform to deliver dimensional
                        and transactional data products to Nike consumers, supporting functions across the company including e-commerce, marketing, and product
                        design and development.
                      </p>
                      <span>Details:</span>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Developed and maintained applications to support multiple data access patterns for internal consumers, including data lakes, warehousing, streaming, and services; using tools such as AWS Lambda/Batch/Kinesis, Apache Spark, Snowflake, and Kafka.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Led the design, creation, and implementation effort of an automated solution using Git hooks to verify, consolidate, and deploy SQL scripts to a Snowflake data warehouse, allowing data engineers to automatically implement data transformations through version control.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Created a search filtering tool using GraphQL, allowing API 360 consumers to execute complex queries on transactional data products across multiple Elastic Search clusters, simplifying and centralizing the data retrieval process.</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                      <h4>Software Engineering Intern, Go To Market Solutions | <a href="https://jobs.nike.com/teams#story-30">Nike</a></h4>
                      <div className="mh-eduyear">June 2018 - August 2018</div>
                      <p>
                        Software engineering intern with the Go-To Market Solutions (GTMS) team as a member of
                        Nike Global Technology’s summer internship program. Helped develop and maintain software solutions
                        for Nike.net – Nike’s commercial sales platform.
                      </p>
                      <span>Details:</span>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Supported Nike.net content authors through the development of Adobe Experience Manager (AEM) components using Java Spring to deliver customized content authoring features, including enhanced content previews and interactive page components.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Improved Nike marketing content creation pipelines by providing developer tooling for Nike.net, allowing authors and developers to simulate the website experience from different geographies and end-user personas.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Participated in end-user design development with cross-functional groups across Nike Marketing, Nike Global Technology, and Nike Direct.</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.7s">
                      <h4>Project Manager | <a href="https://business.uoregon.edu/ug/experiential/oregon-consulting-group">Oregon Consulting Group</a></h4>
                      <div className="mh-eduyear">August 2017 - June 2019</div>
                      <p>
                        Project manager with the Oregon Consulting Group; a student-led, professionally-managed organization, executing projects in market research, financial analysis, and business design and strategy for a variety of clients in the Pacific Northwest.
                        Led teams of 4-5 consultants and managed client relationships, project execution, and organizational development.
                      </p>
                      <span>Details:</span>
                      <ul className="work-responsibility">
                        <li><FontAwesomeIcon icon={faCircle} />Developed an omni-channel ecommerce market entry and growth strategy for a consumer goods company, leveraging SEO tools like Google Analytics to identify potentially valuable market segments.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Created a micro-financing analysis of the State of Oregon for a non-profit trust organization, which provided insight into financing gaps for at-risk/under-privileged communities across the state.</li>
                        <li><FontAwesomeIcon icon={faCircle} />Oversaw and aided the professional development of student consultants through coaching, skill enrichment, and individualized growth strategies.</li>
                      </ul>
                    </div>
                    <div className="mh-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.8s">
                      <h4>Student Consultant | <a href="https://business.uoregon.edu/ug/experiential/oregon-consulting-group">Oregon Consulting Group</a></h4>
                      <div className="mh-eduyear">December 2016 - August 2017</div>
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
