/*==================== MOBILE NAVBAR ====================*/
const navMenu = document.getElementById("nav__menu");
const navButton = document.getElementById("nav__menu__button");
const navItems = document.querySelectorAll('.nav__item')

navButton.addEventListener("click", () => {
  navMenu.classList.toggle("nav_menu-mobile");
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navMenu.classList.remove("nav_menu-mobile");
  })
})

/*==================== SCROLL SECTIONS ACTIVE ====================*/
const sections = document.querySelectorAll("section[id]");

function activeLink() {
  //page scroll value
  const scroll = window.pageYOffset;

  //for each section:
  sections.forEach((current) => {
    //section height including padding and borders
    const sectionHeight = current.offsetHeight;
    //section's top position minus space for navbar
    const sectionTop = current.offsetTop - 50;
    //section id
    const sectionID = current.getAttribute("id");

    //if section is currently on the screen
    //(page is scrolled more than the top of the section but less than its bottom)
    if (scroll > sectionTop && scroll <= sectionTop + sectionHeight) {
      //if true - section is active
      document
        .querySelector(".nav__menu a[href*=" + sectionID + "]")
        .classList.add("active-link");
    } else {
      //if false - link is not active
      document
        .querySelector(".nav__menu a[href*=" + sectionID + "]")
        .classList.remove("active-link");
    }
  });
}

//add listener for window scroll:
window.addEventListener("scroll", activeLink);
