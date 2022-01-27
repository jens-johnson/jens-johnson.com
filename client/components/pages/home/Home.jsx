import React, { Component } from 'react';

import { Navigation } from '~/components/common/navigation';
import Landing from './Landing';
import About from './About';
import Service from './Service';
import Blog from './blog';
import Experience from './Experience';

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
        <Landing />
        <About />
        <Service />
        <Blog />
        <Experience />
      </>
    );
  }
}

export default Home;
