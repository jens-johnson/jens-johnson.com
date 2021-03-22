const mobileNavTrigger = () => {
  $('.navbar-toggler, .navbar-nav li a, .overlay').click(() => {
    $('.navbar-toggler').toggleClass('active');
    //$('#js-navbar-menu').toggleClass('active');
    //$('.navbar-collapse').toggleClass('show');
    $('.overlay').toggleClass('active');
    $('.navbar-collapse').toggleClass('active');
  });
}

const onePageNav = () => {
  // Unstable -- jquery nav not binding to $.fn
  $('#mh-header').onePageNav({
    currentClass: 'active', 
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
  });
}

const fixedNavScroll = () => {
  $(window).scroll(() => {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".nav-scroll").addClass("nav-strict");
    } else {
      $(".nav-scroll").removeClass("nav-strict");
    }
  })
}

const activeNavBar = () => {
  $('a.nav-link').on('click', () => {
    console.log('this', $(this).get())
  })

  $(() => {
    const paths = location.pathname.split("/");
    const currentPath = paths[paths.length-1]; 
    $('a.nav-link[href^="/' + currentPath + '"]', 'a.nav-link[href^="#' + currentPath + '"]').parent().addClass('active');
    $('a.nav-link[href!="/' + currentPath + '"]', 'a.nav-link[href!="#' + currentPath + '"]').parent().removeClass('active');
  });
}

const initNav = () => {
  mobileNavTrigger();
  //activeNavBar();
  onePageNav();
  fixedNavScroll();
}

export default initNav;
