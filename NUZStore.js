/*
   NUZ Guitars - A mock small business

   Authors:          Nate Renfro, Ulyses Parra, Zerrick Orion
   Date:             5.12.17

   Filename:         NUZStore.js
   Supporting files: none
*/
var formValidity = true;
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
//if statements for neck
if (neck.value >= 1){
  neckImage.style.backgroundImage = "url('images/N" + neck.value + ".png')";
} else{
  neckImage.style.backgroundImage = null;
}
//if statements for body
if (body.value >= 1){
  bodImage.style.backgroundImage = "url('images/B" + body.value + ".png')";
}else{
  bodImage.style.backgroundImage = null;
}
}

function validateForm(evt){
  if (evt.preventDefault) {//prevents the default HTML form submission
  evt.preventDefault();//prevents default submission
  }else {//else
    evt.returnValue = false;//returns the value as false
  }//close else
  formValidity = false;//sets form validity to false
alert("I DUN BEEN CLICKED");
if (formValidity === true){//if form is valid
document.getElementById("errorText").innerHTML = "";//no error text
document.getElementById(errorText.style.display = "none");//makes error text box invisible
document.getElementById("customForm").submit();//submits form
} else {//if form isnt valid
  document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit your order.";//error message
  document.getElementById("errorText").style.display = "block";//makes error message box visible
  scroll(0,0);//Scrolls to top of page
}//close else
}

function createEventListeners(){
  var form = document.getElementById("customForm");//create variable for the form
  if (form.addEventListener) {//google chrome
    form.addEventListener("submit", validateForm, false);//triggers validateForm on Submit
  } else if (form.attachEvent){//internet explorer
    form.attachEvent("onsubmit", validateForm);//triggers validateForm on Submit
  }//close else if
}

if (document.addEventListener){
  document.addEventListener("load", createEventListeners, false)
} else if (document.attachEvent) {
document.attachEvent("onload", createEventListeners)
}
