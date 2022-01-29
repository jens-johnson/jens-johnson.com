import React, { Component } from 'react';

import { Helmet } from 'react-helmet';

import 'bootstrap/dist/css/bootstrap.min.css';
import '~/assets/scripts/plugins/owl.carousel.min.js';
import '~/assets/scripts/plugins/validator.min.js';
import '~/assets/scripts/plugins/jquery.mixitup.min.js';
import '~/assets/scripts/plugins/circle-progress.js';
import '~/assets/scripts/plugins/jquery.nav.js';
import '~/assets/scripts/plugins/isotope.pkgd.js';

import '~/assets/scripts/custom/main.js';

import '~/assets/styles/plugins/animate.css';
import '~/assets/styles/plugins/owl/owl.carousel.min.css';
import '~/assets/styles/plugins/owl/owl.theme.default.css';
import '~/assets/styles/plugins/fancybox/jquery.fancybox-1.3.4.css';

import '~/assets/styles/custom/css/maha/styles.css';
import '~/assets/styles/custom/css/maha/responsive.css';
import '~/assets/styles/custom/css/maha/green.css';
import '~/assets/styles/custom/css/custom.css';

/**
 * Header component that creates a page header using react-helmet, injecting script and css dependencies
 *
 * @component
 */
class Head extends Component {
  render() {
    return (
      <Helmet>
        <title>Jens Johnson</title>

        {/* Meta Tags */}
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Jens Johnson's Website"/>
        <meta name="keywords" content="jens johnson, resume, portfolio, personal website, software engineer, blog, projects"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="theme-color" content="#ffffff"/>

        {/* Google Font */}
        <link href="http://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/>

        {/* Font Awesome (CDN) */}
        <script src="https://kit.fontawesome.com/467b38620e.js" crossorigin="anonymous"></script>

        {/* External CSS */}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.0/animate.min.css" integrity="sha256-6hqHMqXTVEds1R8HgKisLm3l/doneQs+rS1a5NLmwwo=" crossorigin="anonymous"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw=" crossorigin="anonymous"/>
      </Helmet>
    );
  }
}

export default Head;
