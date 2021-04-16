import React, { useState, useEffect } from 'react';
import DateItem from './DateItem';
import { retrieveDates } from '~/utilities/blog';

/**
 * Dates component for blog sidebar
 *
 * @component
 * @description Constructs div with tags for blog dates
 */
const Dates = () => {
  const [ dates, setDates ] = useState([]);

  useEffect(() => {
    retrieveDates(setDates);
  }, []);

  return(
    <div className="sidebar-item mh-blog-category">
      <h3>Dates</h3>
      {(() => {
        if (dates && dates.length) {
          const dateElements = dates.map(date => <DateItem year={date._id.year} count={date.count} key={date._id.year} />);
          return(
            <ul>
              { dateElements }
            </ul>
          );
        }
      })()}
    </div>
  )
}

export default Dates;
