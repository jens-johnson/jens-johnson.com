/**
 * Configures isotope and adds event listeners
 */
function configure() {
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

export default {
  configure
};
