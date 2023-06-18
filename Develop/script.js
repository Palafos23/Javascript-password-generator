// Assignment Code
var generateBtn = document.querySelector("#generate");
//var lowerCase = ("");
//var upperCase = ("");
//var number = ("");
//var SpecialCharcaters = ("");

function generatePassword(){
  console.log("clicked button");

//prompt user with criteria
   //-length of 8 < 120 characters 
   //-choose to include lowercase,uppercase, numeric or special characters
//-input validated and atleast one character type to be displayed 
   //-password matches criteria
//displayed in alert or written on page
  return "password here";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
