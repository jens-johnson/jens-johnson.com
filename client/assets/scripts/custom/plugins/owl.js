const defaultConfig = {
  loop: false,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  smartSpeed: 450,
  stopOnHover : true,
  animateIn: 'slideInRight',
  animateOut: 'slideOutLeft',
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1170: {
      items: 3,
    }
  }
};
const navText = ["<svg class='svg-inline--fa fa-angle-left'></svg>", "<svg class='svg-inline--fa fa-angle-right'></svg>"];

/**
 * Binds given selector to owl carousel
 */
function bindCarousel(selector, config=undefined) {
  $(selector).owlCarousel({
    ...defaultConfig,
    ...config
  });
}

/**
 * Binds all selectors to owl carousel
 */
function bindCarousels() {
  [
    '#mh-client-review',
    '#mh-single-client-review',
    '#mh-2-client-review',
    '.mh-project-testimonial',
    '#single-project'
  ].forEach(selector => bindCarousel(selector));
  bindCarousel('.mh-single-project-slide-by-side', { navText });
}

/**
 * Configures event bindings
 */
function eventBindings() {
  $(window).on('load', () => {
    $('.section-loader').fadeOut('slow');
    var animationSlider = $('#animation-slide');
    var headerSlider = $('#header-slider #animation-slide');
    if (animationSlider.length && headerSlider.length) {
      $('#header-slider #animation-slide').owlCarousel({
        autoHeight: true,
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 3000,
        navText,
        animateIn: "zoomIn",
        animateOut: "fadeOutDown",
        autoplayHoverPause: false,
        touchDrag: true,
        mouseDrag: true
      });
      animationSlider.on('translate.owl.carousel', () => {
        $(this).find('.owl-item .slide-text > *').removeClass('fadeInUp animated').css('opacity','0');
        $(this).find('.owl-item .slide-img').removeClass('fadeInRight animated').css('opacity','0');
      });
      animationSlider.on('translated.owl.carousel', () => {
        $(this).find('.owl-item.active .slide-text > *').addClass('fadeInUp animated').css('opacity','1');
        $(this).find('.owl-item.active .slide-img').addClass('fadeInRight animated').css('opacity','1');
      });
    }
  });
}

/**
 * Configures event bindings and binds selectors to owl carousel
 */
function configure() {
  eventBindings();
  bindCarousels();
}

export default {
  configure
};
