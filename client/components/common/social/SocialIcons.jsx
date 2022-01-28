import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faReddit } from '@fortawesome/free-brands-svg-icons';

import Config from '~/config';

const {
  contact: {
    social
  }
} = Config;

/**
 * Social icons component that creates a list of social links
 *
 * @component
 * @param {Object} props
 * @param {Object} props.extraProperties - Optional extra HTML element attributes to include on the rendered component
 * @param {Object} props.extraClasses - Optional extra classes to include on the rendered component
 */
class SocialIcons extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement('ul',
      {
        ...this.props.extraProperties,
        className: `social-icon${this.props.extraClasses ? ` ${this.props.extraClasses}` : ''}`
      },
      <li><a href={social.github}><FontAwesomeIcon icon={faGithub} /></a></li>,
      <li><a href={social.linkedIn}><FontAwesomeIcon icon={faLinkedin} /></a></li>,
      <li><a href={social.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>,
      <li><a href={social.reddit}><FontAwesomeIcon icon={faReddit} /></a></li>
    );
  }
}

export default SocialIcons;
