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

  document.getElementById(name).style.display = "block";
  event.currentTarget.classList.add("active");
}

document.getElementById("default").click();
