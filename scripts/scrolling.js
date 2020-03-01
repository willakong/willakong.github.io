$( function() {
  var scrollLink = $('.scroll');
  var lastId;
  var topMenu = $("#topMenu");
  var topMenuHeight = topMenu.outerHeight()+15;

  scrollLink.click(function(e){
    var href = $(this).attr('href'),
        offsetTop = href === '#' ? 0 : $(href).offset().top - topMenuHeight + 1;
    $('html, body').stop().animate({
        scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });


  $( window ).scroll(function(){
    var scrollPos = $(this).scrollTop() + topMenuHeight;

    var curr = scrollLink.map(function(){
      if ($(this).offset().top < scrollPos)
        return this;
    });
    curr = curr[curr.length-1];
    var id = curr && curr.length ? curr[0].id : "";

    if (lastId !== id) {
      scrollLink.filter("[href='#"+lastId+"']").removeClass("active");
      lastId = id;
      scrollLink.filter("[href='#"+id+"']").addClass("active");
    }


  });






});
