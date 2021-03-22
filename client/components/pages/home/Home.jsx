import React, { Component } from 'react';
import { Navigation } from '~/components/core/misc';
import * as Sections from './sections';

/**
 * Home page component
 *
 * @component
 * @description Component representing home page. Constructs a navbar and several sections on the page.
 *
 **/
class Home extends Component {
    render() {
        return(
            <>
                <Navigation sections={{
                    'About': {
                        href: '#about',
                        order: 1,
                    },
                    'Blog': {
                        href: '#blog',
                        order: 2
                    },
                    'Experience': {
                        href: '#experience',
                        order: 3
                    }
                }}
                />
                <Sections.Landing />
                <Sections.About />
                <Sections.Service />
                {/*<Sections.Blog />*/}
                <Sections.Experience />
            </>
        );
    }
}

export default Home;
