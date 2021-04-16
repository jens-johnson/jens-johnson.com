import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';
import { modifyQueryString } from '~/utilities/browser';

/**
 * Date item component
 *
 * @component
 * @description Clickable <li /> component directing to a blog date
 */
class DateItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <li><a onClick={() => modifyQueryString('date', this.props.year)}>
        <span><FontAwesomeIcon icon={faCalendarTimes} /> <strong>{this.props.year}</strong> ({this.props.count})</span>
      </a></li>
    );
  }
}

export default DateItem;
