
// event handler for the menu button on mobile devices
const mobileMenu = document.getElementById("mobile-menu");

const menuIcon = document.getElementById("mobile-menu-burger");

menuIcon.addEventListener("click", function () {
  if (menuIcon.classList.contains("open")) {
    mobileMenu.classList.add("hidden");
    menuIcon.classList.remove("open");
  } else {
    mobileMenu.classList.remove("hidden");
    menuIcon.classList.add("open");
  }
});
// $(document).ready(function () {
//   $('.menu-icon').click(function () {
//     $(this).toggleClass('open');
//   });
// });

