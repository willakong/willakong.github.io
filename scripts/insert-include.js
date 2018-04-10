function insert(filePath, id) {
  $(document).ready(function(){
    $('#' + id).load(filePath);
  });
}

function insertNav() {
  $(document).ready(function(){
    $('#nav-bar').load('includes/navigation.html');
  });
}

function insertFooter() {
  $(document).ready(function(){
    $('#footer-bar').load('includes/footer.html');
  });
}

function loadTemplate() {
  $(document).ready(function(){
    insertNav();
    insertFooter();
  });
}