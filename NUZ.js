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

// NR 9.19.17 - Built last year, being restructured and updated for further form validation
function validateRepairForm() {
  alert("Combing repair form");
  var fName = document.getElementById("fName").value;
  console.log(fName);
  var lName = document.getElementById("lName").value;
  console.log(lName);
  var email = document.getElementById("email").value;
  console.log(email);
  var phone = document.getElementById("phone").value;
  console.log(phone);
  var description = document.getElementById("description").value;
  console.log(description);
  var address = document.getElementById("address").value;
  console.log(address);
  var successMessage = document.getElementById("formRow");
  console.log(successMessage);

  //validates that first & last name fields are filled
  if (fName == "" || lName == "") {
    alert("Please supply all of the required information.");
  }
  //validates that email input is filled
  else if (email == "") {
    alert("Please supply all of the required information.");
  }
  //validates that address input is filled
  else if (address == "") {
    alert("Please supply all of the required information.");
  }
  //displays a success message to the user after submission
  else {
    successMessage.innerHTML = "<div class='col-lg-10 col-lg-offset-1 col-md-10 "+
                               "col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-10 "+
                               "col-xs-offset-1 muktaFont'>Thank you for submitting "+
                               "the repair send in form. Send your instrument to us "+
                               "at your earliest convenience, and we'll have it in "+
                               "perfect condition and back in your hands as soon "+
                               "as possible.</div>";
  }
}


// NR 9.20.17 - validates the newsletter signup form on the contact page
function validateNewsletterForm() {
  alert("Combing newsletter signup form");
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
    default:
  }

  alert(formValidity);
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
