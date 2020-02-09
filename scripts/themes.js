let lightMode = "<i class=\"fas fa-sun theme-icon\"></i>";
let darkMode = "<i class=\"fas fa-moon theme-icon\"></i>";

let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
let theme = sessionStorage.getItem('theme');
let themeToggler = document.getElementById("theme-toggler");

themeToggler.addEventListener ("click", changeTheme, false);

if (systemInitiatedDark.matches) {
  themeToggler.innerHTML = lightMode;
}
else {
  themeToggler.innerHTML = darkMode;
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggler.innerHTML = lightMode;
     sessionStorage.setItem('theme', '');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeToggler.innerHTML = darkMode;
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function changeTheme() {
  let theme = sessionStorage.getItem('theme');
  let themeToggler = document.getElementById("theme-toggler");

	if (theme === "dark") {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		themeToggler.innerHTML = darkMode;
  }
  else if (theme === "light") {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		themeToggler.innerHTML = lightMode;
  }
  else if (systemInitiatedDark.matches) {
		document.documentElement.setAttribute('data-theme', 'light');
		sessionStorage.setItem('theme', 'light');
		themeToggler.innerHTML = darkMode;
  }
  else {
		document.documentElement.setAttribute('data-theme', 'dark');
		sessionStorage.setItem('theme', 'dark');
		themeToggler.innerHTML = lightMode;
	}
};

if (theme === "dark") {
  document.documentElement.setAttribute('data-theme', 'dark');
  sessionStorage.setItem('theme', 'dark');
  themeToggler.innerHTML = lightMode;
}
else if (theme === "light") {
  document.documentElement.setAttribute('data-theme', 'light');
  sessionStorage.setItem('theme', 'light');
  themeToggler.innerHTML = darkMode;
}