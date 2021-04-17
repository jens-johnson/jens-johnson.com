import React, { Component } from 'react';
import { Navigation } from '~/components/core/misc';
import { Header, Router } from './sections';

/**
 * Blog component
 *
 * @component
 * @description Blog page component. Initializes navigation bar, blog header, and blog router.
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
