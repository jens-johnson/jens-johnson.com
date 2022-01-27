import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin, faReddit } from '@fortawesome/free-brands-svg-icons';

import Config from '~/config';

const {
  contact: {
    social
  }
} = Config;

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
