import React, { Component } from 'react';

/**
 * Section loader component for page loading animations
 *
 * @component
 */
class SectionLoader extends Component {
  render() {
    return(
      <div className="section-loader">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default SectionLoader;
