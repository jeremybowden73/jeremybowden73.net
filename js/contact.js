// SET FOCUS ON THE FIRST TEXT FIELD
// on page load, set focus on the first text field
const initialFocus = document.getElementById("name");
initialFocus.focus();

// real-time validation for the Name field
//
// create regex for allowable characters
// (alphabetic characters, hyphens and whitespaces)
const nameRegex = /[^a-z\s-]/i;
const nameInput = document.getElementById("name");
// create listener for input on the Name field
nameInput.addEventListener("input", nameValueFunc, false);
// function to check that the string is between 3 and 30 chars in length
// and the characters in the Name value match the regex
function nameValueFunc(event) {
  const nameValue = (event.target.value);
  if (nameValue.length < 3) {
    inputError(nameInput, 2);
  }
  if (nameValue.length > 30) {
    inputError(nameInput, 3);
  }
  if (nameValue.length >= 3 && nameValue.length <= 30) {
    if (nameRegex.test(nameValue)) {
      inputError(nameInput, 0);
    } else {
      inputGood(nameInput, 0);
    }
  }
}

// function to change the styling of text inputs (the label and input elements) if erroneous data has been entered
function inputError(input, value) {
  input.style.border = "2px dotted red";
  const errorLabel = input.previousElementSibling;
  errorLabel.style.color = "red";
  // switch statement to determine which error message should be displayed
  switch (value) {
    case 0:
      errorLabel.textContent =
        "Please enter only alphabetic characters, spaces, or hyphens:";
      break;
    case 1:
      errorLabel.textContent = "Please enter a valid email address:";
      break;
    case 2:
      errorLabel.textContent = "Please enter a minimum of 3 characters:";
      break;
    case 3:
      errorLabel.textContent = "Please enter a maximum of 30 characters:";
      break;
    default:
      break;
  }
}

// function to set the styling of the text inputs (label and input elements) to the default style if the entered data is valid (in case the elements were previously changed due to erroneous input)
function inputGood(input, value) {
  input.style.border = "";
  const label = input.previousElementSibling;
  label.style.color = "";
  // switch statement to determine which label message should be displayed
  switch (value) {
    case 0:
      label.textContent = "Name:";
      break;
    case 1:
      label.textContent = "Email:";
      break;
    default:
      break;
  }
}

//
// "PURPOSE" SECTION
// hide the "other purpose" field upon page load with JS enabled
const otherPurposeForm = document
  .getElementsByTagName("fieldset")[0]
  .querySelectorAll("input")[2];
otherPurposeForm.classList.add("hidden");
//
// reveal text field 'Other purpose' when "Other" option is selected
let purpose = document.getElementById("purpose");
purpose.addEventListener("change", e => {
  let purposeSelected = e.target.value;
  if (purposeSelected === "other") {
    otherPurposeForm.classList.remove("hidden"); // unhide the 'Other purpose' text field
    otherPurposeForm.id = "other-title"; // add an id attribute to the text field
    otherPurposeForm.placeholder = "Purpose for contacting"; // replace default placeholder with new text
  } else {
    otherPurposeForm.classList.add("hidden"); // hide the 'Other purpose' text field if "Other" wasn't selected
  }
});




// validate contact form
// disable HTML5 form validation
const formInput = document.querySelector("form");
formInput.setAttribute("novalidate", true);
// create event listener for the form's Submit button
formInput.addEventListener("submit", e => {
  // create consts for form fields to be validated
  const username = document.getElementById("name");
  const email = document.getElementById("mail");
  let submitScore = 0;

  // validate username field has been entered correctly
  if (username.value.length < 3) {
    inputError(username, 2);
    alertSubmitError();
  }
  if (username.value.length > 30) {
    inputError(username, 3);
    alertSubmitError();
  }
  if (username.value.length >= 3 && username.value.length <= 30) {
    if (nameRegex.test(username.value)) {
      inputError(username, 0);
      alertSubmitError();
    } else {
      inputGood(username, 0);
      submitScore += 1;
    }
  }

  // validate email field has been entered correctly
  // Regex sourced from https://www.regular-expressions.info/email.html
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (regexEmail.test(email.value)) {
    inputGood(email, 1);
    submitScore += 1;
  } else {
    inputError(email, 1);
    alertSubmitError();
  }

  if (submitScore === 2) {
    alertSubmitOK();
  }

  function alertSubmitError() {
    e.preventDefault(); // prevent page refresh on submission
    alert("Whoops! Please correct the errors on the form. Thanks");
  };

  function alertSubmitOK() {
    alert("FORM SUBMITTED, THANKS!!!");
  };

});
