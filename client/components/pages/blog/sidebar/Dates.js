import React, { useState, useEffect } from 'react';
import blogClient from '~/client/blog';
import { modifyQueryString } from '~/utils/blog/search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';

/**
 * Component representing a list of blog dates
 *
 * @component
 */
function Dates() {
  const [ state, setState ] = useState({
    dates: []
  });

  useEffect(() => {
    blogClient.getAllDates()
      .then(dates => setState({ ...state, dates }))
      .catch(() => setState({ ...state, dates: [] }));
  }, []);

  return (
    <div className="sidebar-item mh-blog-category">
      <h3>Blog Dates</h3>
      <ul>
        {
          state.dates.map(date => (
            <li key={date.id}>
              <a onClick={() => modifyQueryString('dates', date.year)}>
                <span><FontAwesomeIcon icon={faCalendarTimes} /> <strong>{date.year}</strong> ({date.count})</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Dates;
