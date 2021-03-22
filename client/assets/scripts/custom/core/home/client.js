const clientSingleCarouselInit = () => {
  $('#mh-client-review').owlCarousel({
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
  }); 
}

const clientMultiCarouselInit = () => {
  $('#mh-single-client-review').owlCarousel({
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
        items: 1,
      },
      1170: {
        items: 1,
      }
    }
  });   
}

const clientMultiCarouselAltInit = () => {
  $('#mh-2-client-review').owlCarousel({
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
        items: 2,
      }
    }
  });
}

const initClient = () => {
  clientSingleCarouselInit();
  clientMultiCarouselInit();
  clientMultiCarouselAltInit();
}

export default initClient;
