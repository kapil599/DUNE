(function($) {
  // $(".navbar-collapse a").on('click', function() {
  //   $(".navbar-collapse.collapse").removeClass('in');
  // });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function() {
    if ($(".navbar").offset().top > 500) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

})(jQuery);
