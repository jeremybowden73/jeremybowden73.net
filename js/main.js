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



// create a modal ('pop-up') window for the Projects
let modal = modalWindow();

function modalWindow() {
  const modalView = document.createElement("div");
  modalView.className = "modalView";
  // create divs for the modal view information
  const videoDiv = document.createElement("div");
  videoDiv.className = "videoDiv";
  const iframeDiv = document.createElement("iframe");
  iframeDiv.className = "embedded_youtube_iframe";
  iframeDiv.width = 1;
  iframeDiv.height = 1;
  iframeDiv.frameBorder = 0;
  iframeDiv.allow = "autoplay";
  iframeDiv.allowFullscreen = true;

  videoDiv.appendChild(iframeDiv);

  const closeButton = document.createElement("div");
  closeButton.className = "closeButton";
  closeButton.innerHTML = "&times;";

  modalView.appendChild(videoDiv);
  modalView.appendChild(closeButton);

  // append the div to the main page div
  document.getElementById("section2").appendChild(modalView);

  // event handler for when the modal window 'close' button is clicked on
  closeButton.onclick = function (event) {
    modal.style.display = "none";
    // divGridContainer.classList.remove("disabledDIV");

    // stop the video from continuing to play in the hidden modal view
    // ref https://gist.github.com/cferdinandi/9044694
    var stopiframe = function (videoDiv) {
      var iframe = videoDiv.querySelector("iframe");
      var iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
  }

  return modalView;
}


// populate the modal view with the hyperlink for the 'clicked on' project
function populateModal(url) {
  // get the iframe div
  let iframeDiv = document.getElementsByTagName("iframe")[0];
  // assign the url to the src attribute
  iframeDiv.src = url;
};


const mashupImage = document.querySelector(".mashup");
mashupImage.onclick = function (event) {
  console.log(event.target.id);
  // populate the modal window with the image's id (i.e. the youtube hyperlink)
  let url = event.target.id;
  populateModal(url);

  // show the modal view
  modal.style.display = "grid";

  // disable the main page
  // divGridContainer.classList.add("disabledDIV");
};

const financeImage = document.querySelector(".finance");
financeImage.onclick = function (event) {
  console.log(event.target.id);
  // populate the modal window with the image's id (i.e. the youtube hyperlink)
  let url = event.target.id;
  populateModal(url);

  // show the modal view
  modal.style.display = "grid";

  // disable the main page
  // divGridContainer.classList.add("disabledDIV");
};
