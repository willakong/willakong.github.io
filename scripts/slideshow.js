var slideIndex = 0;
var maxSeconds = 5;
var seconds = maxSeconds;

showSlidesAuto();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Manual
function showSlides(n) {
  seconds = 0;
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-dot";
}

// Automatic
function showSlidesAuto(){
  if (seconds == maxSeconds) {
    seconds = -1;
    var i;

    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
  }

  seconds++;
  setTimeout(showSlidesAuto, 1000);
}
