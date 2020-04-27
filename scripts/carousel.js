$( function() {
  $(".owl-carousel").owlCarousel({
    margin: 50,
    loop: true,
    dots: false,
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