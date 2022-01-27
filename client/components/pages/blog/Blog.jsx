import React, { Component } from 'react';
import { Navigation } from '~/components/navigation';
import Header from './Header';
import Router from './Router';

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
