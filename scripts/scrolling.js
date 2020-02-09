var scrollLink = $('.scroll');

function setActiveClass(scrollPos) {
  scrollLink.each(function(){
    var sectionOffset = $(this.hash).offset().top - 120;
    if (sectionOffset <= scrollPos) {
      scrollLink.removeClass('active');
      $(this).addClass('active');
    }
  });
}

$( function() {
  setActiveClass($(window).scrollTop());

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 80
    }, 1000 );
  });
});

$( window ).scroll(function(){
  var scrollPos = $(this).scrollTop();
  setActiveClass(scrollPos);

  document.activeElement.blur()
});