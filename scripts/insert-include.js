function insert(filePath, id) {
  $('#' + id).load(filePath);
}

function insertNav() {
  $('#nav-bar').load('includes/navigation.html');
}

function insertFooter() {
  $('#footer-bar').load('includes/footer.html');
}

function loadTemplate() {
  insertNav();
  insertFooter();
}