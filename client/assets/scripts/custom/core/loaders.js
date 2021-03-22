/*
const functionBind = () => {
  $.fn.andSelf = () => {
    return this.addBack.apply(this, arguments);
  }
}
*/

const loader = () => {
  $(window).on('load', () => {
    $('.section-loader').fadeOut('slow');

    var animationSlider = $('#animation-slide'), headerSlider = $('#header-slider #animation-slide');
    if (animationSlider.length && headerSlider.length) {
      $('#header-slider #animation-slide').owlCarousel({
        autoHeight: true,
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoplayTimeout: 3000,
        navText: LeftAndRightArrows,
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

const wowInit = () => {
  var wow = new WOW({
    mobile: false
  });
  wow.init();
}

const smoothScroll = () => {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 600);
        return false;
      }
    }
  });
}

const initLoaders = () => {
  //functionBind();
  loader();
  wowInit();
  smoothScroll();
}

export default initLoaders;
