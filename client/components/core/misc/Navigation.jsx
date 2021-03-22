import React, { Component } from 'react';
import _ from 'lodash';
import Config from '~/config';
import darkLogo_69x69 from '~/assets/images/core/icon/dark/dark_69x69.png';

const {
    siteSettings: {
        navigation: navSettings
    }
} = Config;

/**
 * Navigation component
 *
 * @component
 * @description Core navigation component. Constructs nav bar with given sections passed in as props.
 *
 * == PROPS ==:
 *  - sections: an object with the following format that describes any sections to be added to the navigation bar
 *    for a given page:
 *
 *    {
 *      section: {
 *        href: <relative path from route (i.e. '/blog')>,
 *        order: <numerical priority for item to appear on navbar (i.e. 1)>,
 *      }
 *    }
 *
 **/
class Navigation extends Component {

    constructor(props){
        super(props);
    }

    /**
     * Function constructNavSection
     *
     * @method
     * @description: Class method for Navigation component. Dynamically constructs navigation items for navigation bar
     * using passed in 'sections' prop.
     * @return
     **/
    constructNavSection() {
        let sections = navSettings.defaultNavSections;
        if (this.props.sections) {
            Object.keys(this.props.sections).forEach((section) => {
                sections[section] = this.props.sections[section];
            });
        }
        sections['Contact'].order = Math.max.apply(Math, _.without(Object.keys(sections), 'Contact').map((section) => { return sections[section].order })) + 1;
        const sectionsSorted = Object.keys(sections).sort((a, b) => { return sections[a].order - sections[b].order });
        return React.createElement('ul',
            { 'className': 'navbar-nav mr-0 ml-auto' },
            sectionsSorted.map((section) => {
                return(
                    <li className='nav-item' key={sections[section].order}>
                        <a className='nav-link' href={sections[section].href}>{section}</a>
                    </li>
                );
            })
        );
    }

    render() {
        const navSection = this.constructNavSection();
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
