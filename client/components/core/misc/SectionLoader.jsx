import React, { Component } from 'react';

/**
 * Section Loader component
 *
 * @component
 * @description Loader for page sections
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
