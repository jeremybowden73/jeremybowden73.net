
// event handler for the menu button on mobile devices
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("mobile-menu-burger");

menuIcon.addEventListener("click", function () {
  if (menuIcon.classList.contains("open")) {
    menuIcon.classList.remove("open");
    mobileMenu.classList.add("hidden");
  } else {
    menuIcon.classList.add("open");
    mobileMenu.classList.remove("hidden");
  }
});

// event handler for the menu options on mobile devices
mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.add("hidden");
  menuIcon.classList.remove("open");
});




// event handler for down arrows
// const downArrow = document.getElementById("downArrow");
// downArrow.addEventListener("click", function () {

// })


