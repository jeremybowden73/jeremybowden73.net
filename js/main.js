// const menu = document.getElementById("menu");

// menu.addEventListener("click", () => {
//   menu.style.color = "red";
// });

$(document).ready(function () {
  $('.menu-icon').click(function () {
    $(this).toggleClass('open');
  });
});