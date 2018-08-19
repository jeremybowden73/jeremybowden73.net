// data for each of the projects in the Projects section
const projectsInformation = [
  {
    color: "gray",
    projectPicture: "img/tictactoe.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "http://paxamrecords.com/",
    gitHubURL: "https://github.com/jeremybowden73/Tic-Tac-Toe",
    title: "Tic Tac Toe",
    technologies: "tictac tech",
    knowledge: "tictac knowledge"
  },
  {
    color: "red",
    projectPicture: "img/employee-directory.png",
    videoOrDemo: "video",
    linkType: "youtube",
    link: "https://www.youtube.com/embed/1vFmrmOY7qM",
    gitHubURL: "",
    title: "MashUp",
    technologies: "mashup tech",
    knowledge: "mashup knowledge"
  }


]


// function to create a Project "card" and append it to the div with class="gridContainer" 
function createProject(info) {
  $('<div></div>').attr({ class: `project ${info.linkType}`, id: info.link })
    .append($('<div></div>').attr({ class: "projectImage" }).append($('<img>').attr({ class: "projectPicture", src: info.projectPicture }).css("border-color", info.color)))
    .append($('<div></div>').attr({ class: "projectGithubLink projectText" }).text('View project on ')
      .append($('<a></a>').attr({ title: "GitHub", href: info.gitHubURL }).text(" GitHub").append($('<img>').attr({ class: "gitHubImage", src: "img/GitHub-Mark-Trans.png", alt: "GitHub logo" }))))
    .append($('<div></div>').attr({ class: "projectTitle" }).text(info.title))
    .append($('<div></div>').attr({ class: "projectText" }).append($('<div></div>').attr({ class: "colorHighlight" }).css("background-color", info.color).text(`Tap/click image for ${info.videoOrDemo}`))
      .append($('<br>'))
      .append($('<div></div>').attr({ class: "projectTextItalic" }).text('Technologies: '))
      .append($('<div></div>').text(info.technologies))
      .append($('<br>'))
      .append($('<div></div>').attr({ class: "projectTextItalic" }).text('Knowledge gained: '))
      .append($('<div></div>').text(info.knowledge))
      .append($('<br>')))
    .appendTo($('.gridContainer'))
  return;
};

// create and populate the Projects
for (let i = 0; i < projectsInformation.length; i++) {
  createProject(projectsInformation[i]);
};




// create a modal ('pop-up') window for the Projects
let modal = modalWindow();

// to do ---> refactor this function in jQuery
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



// event handler for when a Project is clicked on
// if the div with class="project" contains a URL to a youtube video, open it in the modal view, or
// if it contains a URL to a webpage, open it in a new browser window
const divGridContainer = document.querySelector(".gridContainer");
divGridContainer.onclick = function (event) {
  // traverse up the DOM tree from the event.target, until we get to the DIV with class="project"
  let clickedDiv = event.target;
  while (!clickedDiv.classList.contains("project")) {
    clickedDiv = clickedDiv.parentNode;
  }

  if (clickedDiv.classList.contains("youtube")) {
    // get the iframe div
    let iframeDiv = document.getElementsByTagName("iframe")[0];
    // assign the url to the src attribute
    iframeDiv.src = clickedDiv.id;
    // show the modal view
    modal.style.display = "grid";
  } else {
    // open the URL in a new window
    window.open(clickedDiv.id);
  }
};

