// event handler for the menu icon (only narrow screens will see this)
$("#mobile-menu-burger").click(function () {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $("#mobile-menu").addClass("hidden");
  } else {
    $(this).addClass("open");
    $("#mobile-menu").removeClass("hidden");
  }
});

// event handler for closing the menu (only narrow screens will see this)
$("#mobile-menu").click(function () {
  $(this).addClass("hidden");
  $("#mobile-menu-burger").removeClass("open");
});

// to do ... apply DRY to these 4 event handlers
// which scroll to the appropriate section when clicked on via the menu
$("#linkTo1").click(function () {
  $('html, body').animate({
    scrollTop: $("#section1").offset().top - 80
  }, 1000);
});

$("#linkTo2").click(function () {
  $('html, body').animate({
    scrollTop: $("#section2").offset().top - 80
  }, 1000);
});

$("#linkTo3").click(function () {
  $('html, body').animate({
    scrollTop: $("#section3").offset().top - 80
  }, 1000);
});

$("#linkTo4").click(function () {
  $('html, body').animate({
    scrollTop: $("#section4").offset().top - 80
  }, 1000);
});


// event handler for down arrows
$("#downArrow").click(function () {
  $('html, body').animate({
    scrollTop: $("#section2").offset().top - 80
  }, 1000);
});