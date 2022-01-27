import React, { Component } from 'react';

import { Navigation } from '~/components/navigation';
import { Header, Router } from './core';

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
