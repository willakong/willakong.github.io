function openTab(event, name){
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++){
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++){
    tablinks[i].classList.remove("active");
  }

  var tab = document.getElementById(name);
  tab.style.display = "inline";
  event.currentTarget.classList.add("active");
}

document.getElementById("default").click();
