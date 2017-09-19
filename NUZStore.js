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
//if statements for neck
if (neck.value == 1){
  neckImage.style.backgroundImage = "url('images/WarlockN.png')";
} else if (neck.value == 2){
  neckImage.style.backgroundImage = "url('images/SgN.png')";
} else if (neck.value == 3){
  neckImage.style.backgroundImage = "url('images/SpikeN.png')";
} else if (neck.value == 4){
  neckImage.style.backgroundImage = "url('images/VN.png')";
} else if (neck.value == 5){
  neckImage.style.backgroundImage = "url('images/ExplorerN.png')";
} else if (neck.value == 6){
  neckImage.style.backgroundImage = "url('images/FancyN.png')";
} else if (neck.value == 7){
  neckImage.style.backgroundImage = "url('images/MusicN.png')";
} else if (neck.value == 8){
  neckImage.style.backgroundImage = "url('images/ClassicN.png')";
} else if (neck.value == 9){
  neckImage.style.backgroundImage = "url('images/TelecasterN.png')";
} else if (neck.value == 10){
  neckImage.style.backgroundImage = "url('images/ElectricN.png')";
} else if (neck.value == 11){
  neckImage.style.backgroundImage = "url('images/LesPaulN.png')";
} else if (neck.value == 12){
  neckImage.style.backgroundImage = "url('images/WesternN.png')";
} else if (neck.value == 13){
  neckImage.style.backgroundImage = "url('images/SilverN.png')";
} else if (neck.value == 14){
  neckImage.style.backgroundImage = "url('images/TigerN.png')";
} else if (neck.value == 15){
  neckImage.style.backgroundImage = "url('images/CemeteryN.png')";
} else if (neck.value == 0){
  neckImage.style.backgroundImage = null;
}
//if statements for body
if (body.value == 1){
  bodImage.style.backgroundImage = "url('images/WarlockB.png')";
} else if (body.value == 2){
  bodImage.style.backgroundImage = "url('images/SgBody.png')";
} else if (body.value == 3){
  bodImage.style.backgroundImage = "url('images/SpikeB.png')";
} else if (body.value == 4){
  bodImage.style.backgroundImage = "url('images/VB.png')";
}else if (body.value == 5){
  bodImage.style.backgroundImage = "url('images/ExplorerB.png')";
} else if (body.value == 6){
  bodImage.style.backgroundImage = "url('images/FancyB.png')";
}else if (body.value == 7){
  bodImage.style.backgroundImage = "url('images/MusicB.png')";
}else if (body.value == 8){
  bodImage.style.backgroundImage = "url('images/ClassicB.png')";
} else if (body.value == 9){
  bodImage.style.backgroundImage = "url('images/TelecasterB.png')";
} else if (body.value == 10){
  bodImage.style.backgroundImage = "url('images/ElectricB.png')";
} else if (body.value == 11){
  bodImage.style.backgroundImage = "url('images/LesPaulB.png')";
} else if (body.value == 12){
  bodImage.style.backgroundImage = "url('images/WesternB.png')";
} else if (body.value == 13){
  bodImage.style.backgroundImage = "url('images/SilverB.png')";
} else if (body.value == 14){
  bodImage.style.backgroundImage = "url('images/TigerB.png')";
} else if (body.value == 15){
  bodImage.style.backgroundImage = "url('images/CemeteryB.png')";
} else if (body.value == 0){
  bodImage.style.backgroundImage = null;
}
}
