function navIcon() {
  var x = document.getElementById("nav-bar");
  if (x.className === "nav") {
      x.className += " responsive";
      document.getElementById("nav-icon").style.color = "rgb(255, 238, 0)";
  }

  else {
      x.className = "nav";
      document.getElementById("nav-icon").style.color = "white";
  }
}