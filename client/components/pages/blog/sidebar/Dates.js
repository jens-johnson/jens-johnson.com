import React, { useState, useEffect } from 'react';
import { v4 as uuidV4 } from 'uuid';
import blogClient from '~/client/blog';
import { modifyQueryString } from '~/utils/blog/search';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarTimes } from '@fortawesome/free-solid-svg-icons';

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
    <ul>
      {
        state.dates.map(date => (
          <li key={uuidV4()}>
            <a onClick={() => modifyQueryString('date', date.year)}>
              <span><FontAwesomeIcon icon={faCalendarTimes} /> <strong>{date.year}</strong> ({date.count})</span>
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default Dates;
