const portfolioContainerInit = () => {
  var portfolioContainer = $('.portfolioContainer');

  // Optional functionality for portfolio section (may or may not be a page feature)
  if (portfolioContainer.length) {
    portfolioContainer.isotope({
      filter: '*',
      animationOptions: {
        queue: true
      }
    });
    $('.portfolio-nav li').click(() => {
      $('.portfolio-nav .current').removeClass('current');
      $(this).addClass('current');
      var selector = $(this).attr('data-filter');
      portfolioContainer.isotope({
        filter: selector,
        animationOptions: {
            queue: true
        }
     });
     return false;
    });
  }
}

const fancyBoxInit = () => {
  $('[data-fancybox]').fancybox({});
}

const portfolioMixInit = () => {
  $('#portfolio-item').mixItUp();
}

const portfolioTestimonialCarouselInit = () => {
  $('.mh-project-testimonial').owlCarousel({
    loop: true,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 450,
    stopOnHover : true,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      }
    }
  });
}

const portfolioSingleCarouselInit = () => {
  $('#single-project').owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover : true,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      }
    }
  });
}

const portfolioMultipleCarouselInit = () => {
  $('.mh-single-project-slide-by-side').owlCarousel({
    loop: false,
    responsiveClass: true,
    nav: true,
    navText: LeftAndRightArrows,
    dots: false,
    autoplay: false,
    smartSpeed: 450,
    stopOnHover : true,
    animateIn: 'slideInRight',
    animateOut: 'slideOutLeft',
    autoplayHoverPause: true,
    pagination: false,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      }
    }
}); 
}

const initPortfolio = () => {
  portfolioContainerInit();
  fancyBoxInit();
  portfolioInit();
  portfolioTestimonialCarouselInit();
  portfolioSingleCarouselInit();
  portfolioMultipleCarouselInit();
}

export default initPortfolio;
