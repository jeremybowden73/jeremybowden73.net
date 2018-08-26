// data for each of the projects in the Projects section
const projectsInformation = [
  {
    color: "gray",
    projectPicture: "img/projects/finance.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "https://www.paxamrecords.com",
    gitHubURL: "https://github.com/jeremybowden73/Tic-Tac-Toe",
    title: "Tic Tac Toe",
    technologies: "tictac tech",
    knowledge: "tictac knowledge"
  },
  {
    color: "red",
    projectPicture: "img/projects/employee-directory.png",
    videoOrDemo: "video",
    linkType: "youtube",
    link: "https://www.youtube.com/embed/1vFmrmOY7qM",
    gitHubURL: "",
    title: "MashUp",
    technologies: "mashup tech",
    knowledge: "mashup knowledge"
  },
  {
    color: "green",
    projectPicture: "img/projects/anagram.png",
    videoOrDemo: "demo",
    linkType: "repl",
    link: "https://repl.it/@jeremybowden73/Anagram",
    gitHubURL: "",
    title: "Anagram",
    technologies: "anag tech",
    knowledge: "anag knowledge"
  },
  {
    color: "green",
    projectPicture: "img/projects/pong3.png",
    videoOrDemo: "demo",
    linkType: "repl",
    link: "https://repl.it/@jeremybowden73/Anagram",
    gitHubURL: "",
    title: "Anagram",
    technologies: "anag tech",
    knowledge: "anag knowledge"
  }


]


// function to create a Project "card" and append it to the div with class="gridContainer" 
function createProject(info) {
  $('<div></div>').attr({ class: "project" })
    .append($('<div></div>').attr({ class: "projectImage" }).append($('<img>').attr({
      class: `projectPicture ${info.linkType}`, id: info.link, src: info.projectPicture, alt: info.title
    }).css("border-color", info.color)))
    .append($('<div></div>').attr({ class: "projectGithubLink projectText" }).text('See project on ')
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

  const replText = document.createElement("div");
  replText.className = "replText text-centred";
  replText.innerHTML = "Follow this link to www.repl.it to use ";

  const replLink = document.createElement("a");
  replLink.className = "replLink";
  replLink.innerHTML = "Link to project on www.repl.it";

  const closeButton = document.createElement("div");
  closeButton.className = "closeButton";
  closeButton.innerHTML = "&times;";

  modalView.appendChild(videoDiv);
  modalView.appendChild(replText);
  modalView.appendChild(replLink);
  modalView.appendChild(closeButton);

  // append the div to the main page div
  document.getElementById("section2").appendChild(modalView);

  // event handler for when the modal window 'close' button is clicked on
  closeButton.onclick = function (event) {
    modal.style.display = "none";
    videoDiv.style.display = "none";
    replText.style.display = "none";
    replLink.style.display = "none";

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



// event handler for when a Project image is clicked on
// if the element clicked on has class="youtube", open the element's id value (a youtube URL) in the modal view with only the "video" divs displayed, or
// if it has class="repl", open the id value in the modal view with only the "repl" divs displayed, or
// if it has class="webpage", open the element's id value (a URL) in a new browser window
const divGridContainer = document.querySelector(".gridContainer");
divGridContainer.onclick = function (event) {
  if (event.target.classList.contains("youtube")) {
    // set the iframe div's src attribute to the correct youtube link
    document.querySelector(".embedded_youtube_iframe").src = event.target.id;
    // show the "video" div
    document.querySelector(".videoDiv").style.display = "block";
    // show the modal view
    modal.style.display = "grid";
  } else if (event.target.classList.contains("repl")) {
    // set the replLink div value to the correct link
    document.querySelector(".replLink").href = event.target.id;
    document.querySelector(".replText").innerHTML = `Please follow the link below to use ${event.target.alt}, then:<br><br>1. Click the green 'run' button to start:<br><br><img src="img/repl-help.png" alt="repl green button" height="120" width="160"><br>2. Follow the usage notes in the command-line pane (the right or lower pane, depending on your browser configuration).`;
    // show the "repl" divs
    document.querySelector(".replLink").style.display = "block";
    document.querySelector(".replText").style.display = "block";
    // show the modal view
    modal.style.display = "grid";
  } else if (event.target.classList.contains("webpage")) {
    // open the URL in a new window
    window.open(event.target.id);
  }
};

