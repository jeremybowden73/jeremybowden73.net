// data for each of the projects in the Projects section
const projectsInformation = [
  {
    color: "green",
    projectPicture: "img/projects/web-scraper.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "https://jeremy-bowden-web-scraper.herokuapp.com/",
    gitHubURL: "https://github.com/jeremybowden73/Webpage-content-scraper-using-Express",
    title: "Web Scraper",
    technologies: "Node, Express, Pug, Heroku, CSS, JavaScript",
    knowledge: "Building a command-line app; adding a front-end and deploying to a server"
  },
  {
    color: "MediumBlue",
    projectPicture: "img/projects/twitter-client.png",
    videoOrDemo: "video",
    linkType: "youtube",
    link: "https://www.youtube.com/embed/O2JwmuVB8R0",
    gitHubURL: "https://github.com/jeremybowden73/Twitter-client",
    title: "Twitter Client",
    technologies: "REST API, Express, Node, JavaScript Promises, Pug",
    knowledge: "Getting data from a REST API. Templating HTML. HTTP route-handling."
  },
  {
    color: "BlueViolet",
    projectPicture: "img/projects/anagram.png",
    videoOrDemo: "demo",
    linkType: "repl",
    link: "https://repl.it/@jeremybowden73/Anagram",
    gitHubURL: "",
    title: "Anagram Maker",
    technologies: "C",
    knowledge: "Low-level memory management, functional programming, Linked lists."
  },
  {
    color: "MediumSpringGreen",
    projectPicture: "img/projects/employee-directory.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "",
    gitHubURL: "https://github.com/jeremybowden73/Employee-directory",
    title: "Contact Directory",
    technologies: "JavaScript, APIs, Fetch, CSS.",
    knowledge: "Using JavaScript's Fetch API and 3rd-party APIs. CSS Grid layout. DOM manipulation with JS."
  },
  {
    color: "indigo",
    projectPicture: "img/projects/finance.png",
    videoOrDemo: "video",
    linkType: "youtube",
    link: "https://www.youtube.com/embed/sUZCVQY__Gc",
    gitHubURL: "",
    title: "Share Trading Site",
    technologies: "Python, Flask, SQL, HTML",
    knowledge: "Creating routes in a back-end framework. Managing data in SQL database."
  },
  {
    color: "green",
    projectPicture: "img/projects/tictactoe.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "",
    gitHubURL: "https://github.com/jeremybowden73/Tic-Tac-Toe",
    title: "Tic Tac Toe",
    technologies: "JavaScript, CSS.",
    knowledge: "DOM manipulation and Event-handling with JavaScript."
  },
  {
    color: "MediumBlue",
    projectPicture: "img/projects/website-v1.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "",
    gitHubURL: "https://github.com/jeremybowden73/jeremybowden73.github.io",
    title: "Portfolio Webpage v1",
    technologies: "HTML, CSS, Git",
    knowledge: "Building a website from scratch. Deploying via GitHub."
  },
  {
    color: "DarkGoldenrod",
    projectPicture: "img/projects/form-validation.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "",
    gitHubURL: "https://github.com/jeremybowden73/Interactive-form-with-validation",
    title: "Form with Validation",
    technologies: "JavaScript, CSS, HTML",
    knowledge: "Input validation on 'Submit' and in real-time."
  },
  {
    color: "Crimson",
    projectPicture: "img/projects/initials.png",
    videoOrDemo: "demo",
    linkType: "repl",
    link: "https://repl.it/@jeremybowden73/Initials",
    gitHubURL: "https://github.com/jeremybowden73/Initials",
    title: "Initials",
    technologies: "C",
    knowledge: "Conditionals, For loops."
  },
  {
    color: "Navy",
    projectPicture: "img/projects/pagination-content-filter.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "",
    gitHubURL: "https://github.com/jeremybowden73/Webpage-Pagination-and-Content-filter",
    title: "Webpage Pagination",
    technologies: "JavaScript",
    knowledge: "Event-handling and DOM manipulation."
  },
  {
    color: "DarkGoldenrod",
    projectPicture: "img/projects/mashup.png",
    videoOrDemo: "video",
    linkType: "youtube",
    link: "https://www.youtube.com/embed/1vFmrmOY7qM",
    gitHubURL: "",
    title: "MashUp",
    technologies: "Python, Flask, JavaScript, APIs, SQL, jQuery",
    knowledge: "Creating routes using a framework. Using Google APIs. Database programming."
  },
  {
    color: "green",
    projectPicture: "img/projects/fifteen.png",
    videoOrDemo: "demo",
    linkType: "repl",
    link: "https://repl.it/@jeremybowden73/Game-of-Fifteen",
    gitHubURL: "https://github.com/jeremybowden73/Game-of-Fifteen",
    title: "Game Of Fifteen",
    technologies: "C",
    knowledge: "Low-level functionasl programming: file access, loops, conditionals."
  },
  {
    color: "DimGray",
    projectPicture: "img/projects/random-quote-generator.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "",
    gitHubURL: "https://github.com/jeremybowden73/Random-quote-generator",
    title: "Random Quotes",
    technologies: "JavaScript, CSS",
    knowledge: "Injecting HTML with JavaScript, Functions, Objects."
  },
  {
    color: "Indigo",
    projectPicture: "img/projects/pong.png",
    videoOrDemo: "demo",
    linkType: "webpage",
    link: "https://scratch.mit.edu/projects/155627081/",
    gitHubURL: "https://github.com/jeremybowden73/Pong",
    title: "Pong",
    technologies: "Scratch",
    knowledge: "Loops, Conditionals, Events, Operators."
  },
  {
    color: "Crimson",
    projectPicture: "img/projects/tweets.png",
    videoOrDemo: "video",
    linkType: "youtubr",
    link: "https://www.youtube.com/embed/OMdkbplX7Aw",
    gitHubURL: "https://github.com/jeremybowden73/Twitter-user-sentiments",
    title: "Tweets Analyzer",
    technologies: "Python, APIs.",
    knowledge: "Getting data from Twitter's API; processing it in Python."
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

