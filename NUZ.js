/*
   NUZ Guitars Year 2 - A continuation into form validation

   Authors:          Nate Renfro, Zerrick Orion
   Date:             9.19.17
   Filename:         NUZ.js
   Supporting files: none
*/
"use strict";
var formValidity = true;
var invalidBorder = "2px solid rgba(255, 0, 0, 0.75)";

// NR 9.22.17 - validates the repair request form on the repair page
function validateRepairForm() {
  // alert("Combing repair request form");
  var inputs = document.querySelectorAll("#repairForm .input");
  // console.log(inputs);
  var required = document.querySelectorAll("#repairForm .reqInput");
  // console.log(required);
  var descriptionField = document.getElementById("description");
  // console.log(descriptionField);
  var phoneNum = document.getElementById("phone");
  // console.log(phoneNum);
  var errorMessage = document.getElementById("messageDiv"); // Div for errors
  // console.log(errorMessage);

  try {
    // Start fieldset fresh by removing invalid colors
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        for (var i = 0; i < required.length; i++) {
          if (required[i].value === "") {
            throw "Please complete all required information.";
          }
        }
      }
    }
    errorMessage.style.display = "none"; // Make error message box invisible
    // alert("Executing try clause");
    // Checks if all createAccount elements have input in them
    if (fName.value !== "" && lName.value !== "" && email.value !== "") {
      // alert("all inputs completed");
      formValidity = true; // All inputs have been completed, the user is signed up
    }
    // Checks if all elements are empty
    else if (fName.value === "" && lName.value === "" && email.value === "") {
      formValidity = true; // Since the account is optional, all empty is valid
    }
    else { // Checks if they aren't ALL full, or ALL empty
      formValidity = false; // missing one or more elements falsifies fieldset
      // Tell user to fix the missing elements
      throw "Please complete all fields if you wish to sign up for the newsletter.";
    }
  }
  catch (msg) { // Catches thrown error (if any)
    errorMessage.style.display = "block"; // Displays error message box
    errorMessage.innerHTML = "<span>&#9888</span> " + msg; // inserts error message into the space for error message
    formValidity = false; // Sets form validity to false to stop submission
    // Make password fields red to denopte error
    fName.style.border = invalidBorder;
    lName.style.border = invalidBorder;
    email.style.border = invalidBorder;
  }
}


// NR 9.20.17 - validates the newsletter signup form on the contact page
function validateNewsletterForm() {
  // alert("Combing newsletter signup form");
  var fName = document.getElementById("fName"); // Retrieves the user's first name input
  // console.log(fName);
  var lName = document.getElementById("lName"); // Retrieves the user's last name input
  // console.log(lName);
  var email = document.getElementById("email"); // Retrieves the user's email input
  // console.log(email);
  var errorMessage = document.getElementById("messageDiv"); // Div for errors
  // console.log(errorMessage);

  try {
    // Start fieldset fresh by removing invalid colors
    fName.style.border = "auto";
    lName.style.border = "auto";
    email.style.border = "auto";
    errorMessage.style.display = "none"; // Make error message box invisible
    // alert("Executing try clause");
    // Checks if all createAccount elements have input in them
    if (fName.value !== "" && lName.value !== "" && email.value !== "") {
      // alert("all inputs completed");
      formValidity = true; // All inputs have been completed, the user is signed up
    }
    // Checks if all elements are empty
    else if (fName.value === "" && lName.value === "" && email.value === "") {
      formValidity = true; // Since the account is optional, all empty is valid
    }
    else { // Checks if they aren't ALL full, or ALL empty
      formValidity = false; // missing one or more elements falsifies fieldset
      // Tell user to fix the missing elements
      throw "Please complete all fields if you wish to sign up for the newsletter.";
    }
  }
  catch (msg) { // Catches thrown error (if any)
    errorMessage.style.display = "block"; // Displays error message box
    errorMessage.innerHTML = "<span>&#9888</span> " + msg; // inserts error message into the space for error message
    formValidity = false; // Sets form validity to false to stop submission
    // Make password fields red to denopte error
    fName.style.border = invalidBorder;
    lName.style.border = invalidBorder;
    email.style.border = invalidBorder;
  }
}




/* Call function to run everytime a
   new item is selected in the lists */
document.onchange = customChange;

function customChange() {
//declare variables for body, neck, and bridge
var body = document.getElementById("bod");
var neck = document.getElementById("nck");
var bridge = document.getElementById("bridg");
var bodImage = document.getElementById("body");
var neckImage = document.getElementById("neck");
var bridgeImage = document.getElementById("bridge");
}

// NR 9.21.17 - Built to set all select option values to null
function removeSelectDefaults() {
  // console.log("removeSelectDefaults() function running");
  var emptyBoxes = document.getElementsByTagName("select"); // Retrieves every select element in the HTML
  // console.log(emptyBoxes);
  for (var i = 0; i < emptyBoxes.length; i++) { // Loops through the select elements up to the number of selects in the index
    emptyBoxes[i].selectedIndex = -1; // Sets the selected box value to -1 as to empty it
  }
}

// NR 8.31.17 - Built to execute upon user submitting order form
function validateForm(evt) {
  alert("Beginning validation comb");
  var errorMessage = document.getElementById("errorText");
  var submittedForm = evt.srcElement.id;
  alert(submittedForm);
  if (evt.preventDefault) {
    evt.preventDefault(); // Prevents browser from submitting form before validation
  }
  else { // Prevents submission on older browsers
    evt.returnValue = false;
  }
  formValidity = true;

  switch (submittedForm) {
    case "newsletterForm":
      validateNewsletterForm();
      break;
    case "repairForm":
      validateRepairForm();
      break;
    case "customForm":
      validateCustomForm();
    default:
  }

  // alert(formValidity);
  if (formValidity === true) {
    document.getElementsByTagName("form")[0].submit();
  }
}

// NR 9.19.17 - Setup event listeners for use throughout the page
function createEventListeners() {
  // console.log("Creating Event Listeners");
  // NR 9.21.17 - Built to listen for form submission event(s) upon user clicking submit button
  var submittedForm = document.getElementsByTagName("form")[0];
  if (submittedForm.addEventListener) {
    submittedForm.addEventListener("submit", validateForm, false);
    // console.log("watching for submission");
  } else if (submittedForm.attachEvent)  {
    submittedForm.attachEvent("onsubmit", validateForm);
    // console.log("watching for submission");
  }
}

function setUpPage() {
  createEventListeners();
  removeSelectDefaults();
}

// NR 9.19.17 - runs createEventListeners() function upon page loading */
if (window.addEventListener) {
  window.addEventListener("load", setUpPage, false);
  // console.log("Chrome page load");
} else if (window.attachEvent)  {
  window.attachEvent("onload", setUpPage);
  // console.log("Explorer page load");
}
