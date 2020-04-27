$( function() {
  $(".owl-carousel").owlCarousel({
    margin: 50,
    loop: true,
    dots: false,
    nav: true,
    navText : [
      "<div class='nav-btn prev-slide'><i class='fa fa-chevron-left'></i></div>",
      "<div class='nav-btn next-slide'><i class='fa fa-chevron-right'></i></div>"
    ],
    responsive : {
      0 : {
        items: 1
      },
      600 : {
        items: 2
      },
      900 : {
        items: 3
      }
    }
  });
})