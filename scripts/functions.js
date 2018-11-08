$(document).ready(function(){
  /////////////// Drawing dots canvas ///////////////
  var canvas = document.getElementById("drawing-canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var radius = 4;

/////////////// Click actions ///////////////
  $(document).click(function (event) {
    // Dismiss collapsible menu if clicked outside
    var clickover = $(event.target);
    var opened = $(".navbar-collapse").hasClass("show");
    if (opened === true && !clickover.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
    }

    // Make a colourful dot
    ctx.beginPath();
    ctx.arc(event.clientX, event.clientY, radius, 0, 2*Math.PI, false);
    ctx.fillStyle = "rgba(" + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", " + Math.floor((Math.random() * 255)) + ", 0.8)";
    ctx.fill();
  });

  /////////////// Set active class when loaded ///////////////
  var scrollLink = $('.scroll');

  scrollLink.each(function(){
    var sectionOffset = $(this.hash).offset().top - 40;
    if (sectionOffset <= $(window).scrollTop()) {
      scrollLink.removeClass('active');
      $(this).addClass('active');
    }
  });

  /////////////// Scroll ///////////////
  // Smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });

  // Active link switch (based on scroll bar location)
  $(window).scroll(function(){
    var scrollPos = $(this).scrollTop();

    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top - 40;
      if (sectionOffset <= scrollPos) {
        scrollLink.removeClass('active');
        $(this).addClass('active');
      }
    });
    document.activeElement.blur()
  });

  /////////////// Typing ///////////////
  var options = {
    strings: ["I'm Willa Kong"
              ,"I'm a student"
              ,"I'm a developer"
              ,"I'm an optimist"
              ,"I'm a dreamer"],
    typeSpeed: 100,
    backSpeed: 60,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    smartBackspace: true
  }
  var typed = new Typed(".typing", options);

  /////////////// Project cards carousel ///////////////
  $(".proj-carousel").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: $('.proj-prev'),
    nextArrow: $('.proj-next'),
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
});