import React, { Component } from 'react';
import _ from 'lodash';

import Config from '~/config';

import darkLogo_69x69 from '~/assets/images/core/icon/dark/dark_69x69.png';

const {
  navigation: {
    sections: {
      default: defaultSections
    }
  }
} = Config;

/**
 * Navigation component that dynamically extends the default navbar using additional custom sections
 *
 * @component
 * @param {Object} props
 * @param {Object} props.sections - The extra sections to add to the navbar
 */
class Navigation extends Component {

  constructor(props) {
    super(props);
    this.construct = this.construct.bind(this);
  }

  construct() {
    let sections = _.merge(defaultSections, this.props.sections);
    sections['Contact'].order = _.maxBy(Object.values(sections), 'order').order + 1;
    sections = Object.fromEntries(_.sortBy(Object.entries(sections), ([, values ]) => values.order));
    return React.createElement('ul',
      { 'className': 'navbar-nav mr-0 ml-auto' },
      Object.keys(sections).map((section) => {
        return (
          <li className='nav-item' key={sections[section].order}>
            <a className='nav-link' href={sections[section].href}>{section}</a>
          </li>
        );
      })
    );
  }

  render() {
    const navSection = this.construct();
    return(
      <header className="black-bg mh-header mh-fixed-nav nav-scroll mh-xs-mobile-nav wow fadeInUp" id="mh-header">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg mh-nav nav-btn">
              <a className="navbar-brand" href="/">
                <img src={darkLogo_69x69} alt="" className="img-fluid" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                { navSection }
              </div>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Navigation;
