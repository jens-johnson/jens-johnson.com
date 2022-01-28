/**
 * Binds event listeners
 */
function eventBindings() {
  $('.navbar-toggler, .navbar-nav li a, .overlay').click(() => {
    $('.navbar-toggler').toggleClass('active');
    //$('#js-navbar-menu').toggleClass('active');
    //$('.navbar-collapse').toggleClass('show');
    $('.overlay').toggleClass('active');
    $('.navbar-collapse').toggleClass('active');
  });
  // Unstable -- jquery nav not binding to $.fn
  $('#mh-header').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
  });
}

/**
 * Initializes navigation listeners
 */
function init() {
  eventBindings();
}

export default init;
