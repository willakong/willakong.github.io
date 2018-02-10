var nav = document.getElementById("topNav");
var sticky = nav.offsetTop;

// Add the "sticky" class to the navigation bar when it reaches
// the right scroll position
function stickyNav(){
  nav.classList.toggle("sticky", window.pageYOffset >= sticky);
}

// Execute the stickynav when user scrolls
window.onscroll = function() { stickyNav() };
