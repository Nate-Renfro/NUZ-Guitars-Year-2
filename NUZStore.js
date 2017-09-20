/*
   NUZ Guitars - A mock small business

   Authors:          Nate Renfro, Ulyses Parra, Zerrick Orion
   Date:             5.12.17

   Filename:         NUZStore.js
   Supporting files: none
*/

function checkForm() {
  // retreive and store all necessary HTML elements in variables
  var fName = document.getElementById("fName").value;
  var lName = document.getElementById("lName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var description = document.getElementById("description").value;
  var address = document.getElementById("address").value;
  var successMessage = document.getElementById("formRow");

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


/* Call function to run everytime a
   new item is selected in the lists */
document.onchange = customChange;

function customChange(){
//declare variables for body, neck, and bridge
var body = document.getElementById("bod");
var neck = document.getElementById("nck");
var bridge = document.getElementById("bridg");
var bodImage = document.getElementById("body");
var neckImage = document.getElementById("neck");
var bridgeImage = document.getElementById("bridge");
}
