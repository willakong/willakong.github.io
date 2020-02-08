var W = document.body.offsetWidth;
var H = document.body.offsetHeight;
var scrollLink = $('.scroll');

$( function() {
  scrollLink.each(function(){
    var sectionOffset = $(this.hash).offset().top - 40;
    if (sectionOffset <= $(window).scrollTop()) {
      scrollLink.removeClass('active');
      $(this).addClass('active');
    }
  });

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000 );
  });


  var canvas = document.getElementById("effects");
  var ctx = canvas.getContext("2d");

  canvas.width = W;
	canvas.height = H;

  var max = 400;
  var particles = [];

	for (var i = 0; i < max; i++) {
		particles.push({
			x: Math.random()*W,
			y: Math.random()*H,
			r: Math.random()*5+1,
      d: Math.random()*max,
      color: "rgba(" + Math.random()*255 + ", " + Math.random()*255 + ", "+ Math.random()*255 + ", 0.5)"
		})
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    for (var i = 0; i < max; i++) {
      var p = particles[i];

      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.moveTo(p.x, p.y);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
      ctx.fill();

      p.y += Math.cos(p.d) + 1 + (p.r / 2);

      if(p.y > H) {
        particles[i] = {
          x: Math.random()*W,
          y: -8,
          r: p.r,
          d: p.d,
          color: p.color
        }
      }
    }
  }

	setInterval(draw, 40);
});


$( window ).scroll(function(){
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


$( window ).resize(function() {
  W = document.body.offsetWidth;
  H = document.body.offsetHeight;

  var canvas = document.getElementById("effects");
  canvas.width = W;
	canvas.height = H;

});