import React, { Component } from 'react';

/**
 * Section loader component
 *
 * @component
 * @description Section loader component. Provides loading animation for pages.
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
