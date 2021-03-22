import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faReddit } from '@fortawesome/free-brands-svg-icons';

/**
 * Social Icons component
 *
 * @component
 * @description Component that constructions a <ul /> with icons and links to social networks used throughout application.
 * Dynamically adds extra classes/properties to wrapper element, passed in through props.
 *
 * == PROPS ==:
 *  - extraClasses: String of extra classes to add to wrapper element (i.e. 'wow fadeInUp')
 *  - extraProperties: Object of key/value mappings of extra properties to add to wrapper element
 *    (i.e. { { 'wow-data-duration': '0.2s' }, { 'wow-data-delay': '0.1s' } })
 */
class SocialIcons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const properties = this.props.extraProperties || {};
    Object.assign(properties, { 'className':  'social-icon' + (this.props.extraClasses ? " " + this.props.extraClasses : "")});
    const wrapper = React.createElement('ul',
      properties,
      <li><a href="https://github.com/jens-johnson"><FontAwesomeIcon icon={faGithub} /></a></li>,
      <li><a href="https://www.linkedin.com/in/jens-johnson-295072127/"><FontAwesomeIcon icon={faLinkedin} /></a></li>,
      <li><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>,
      <li><a href=""><FontAwesomeIcon icon={faReddit} /></a></li>
    );
    return wrapper;
  }
}

export default SocialIcons;
