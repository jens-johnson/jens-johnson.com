import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { modifyQueryString } from '~/utilities/browser';

/**
 * Blog tag component
 *
 * @component
 * @description Clickable <li /> component directing to a blog category
 */
class Tag extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li><a onClick={() => modifyQueryString('category', this.props.name)}>
        <span><FontAwesomeIcon icon={faTag} /> <strong>{this.props.name}</strong> ({this.props.count})</span>
      </a></li>
    );
  }
}

export default Tag;
