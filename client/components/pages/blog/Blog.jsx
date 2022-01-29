import React, { Component } from 'react';

import { Navigation } from '~/components/common/navigation';
import { Header, Router } from './core';

/**
 * Core blog page component that constructs navigation/header and blog page routing
 *
 * @component
 */
class Blog extends Component {
  render() {
    return(
      <>
        <Navigation sections={{
          'Home': {
            href: '/',
            order: 0,
          },
          'Blog': {
            href: '/blog',
            order: 1,
          }
        }}
        />
        <Header />
        <Router />
      </>
    );
  }
}

export default Blog;
