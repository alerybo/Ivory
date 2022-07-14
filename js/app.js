/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//validate if the user chose a theme
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

//event listener - activate or deactivate dark theme with the button
themeButton.addEventListener("click", () => {
  //add or remove the dark icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  //save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

//Validate the current theme
const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";
};

/*==================== SCROLL TOP ====================*/
//Showing an arrow if page is scrolled more than 560vh
const scrollTopButton = document.getElementById("scroll__top");

function scrollTop() {
  const scrollY = window.pageYOffset;
  if (scrollY >= 560) {
    scrollTopButton.classList.add("show-scroll");
  } else {
    scrollTopButton.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTop);
