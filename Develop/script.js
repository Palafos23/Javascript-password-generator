// Assignment Code
var generateBtn = document.querySelector("#generate");
  var characterArray = [];
  
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "?"];
  var allCharacters = [lowerCase, upperCase, number, specialCharacters];
  var allCharacterss = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "&", "*", "?"];

  function generatePassword() {

    password = "";

  
    var userChoicelenght = parseInt(prompt("How many characters do you want your password to have?"));
 
    if(isNaN(userChoicelenght) || userChoicelenght < 8 || userChoicelenght > 128) {
    window.alert("Character length has to be more than 8 but less than 128.");
    return false;
    }
    //random for one variable that contains all characters 

    /*for(var i = 0; i < userChoicelenght; i++) {
    var allChars = Math.floor(Math.random() *allCharacterss.length);
    var password = password + allCharacterss[allChars];
    }
    if (window.confirm("Do you want want random password?")) {
      characterArray = characterArray.concat(allCharacterss);
      //window.alert(password);

    }
    return password;
    }*/

    //random for one variable 

    /*for(var i = 0; i < userChoicelenght; i++) {
    var randomLower = Math.floor(Math.random() *lowerCase.length);
    var password = password + lowerCase[randomLower]
    }

   if (window.confirm("Do you want lowercase letters?")) {
      characterArray = characterArray.concat(lowerCase);
      window.alert(password);

    }*/
   
    //prompts below 
    for(var i = 0; i < userChoicelenght; i++) {
    var randomCharacters = Math.floor(Math.random() *characterArray.length);
    var password = password + characterArray[randomCharacters];
    } 

    if (window.confirm("Do you want lowercase letters?")) {
    characterArray = characterArray.concat(lowerCase);
    }else {
     lowerCase = "";
    }

    if (window.confirm("Do you want uppercase letters?")) {
    characterArray = characterArray.concat(upperCase);
    }else {
      upperCase = ""
    }

    if (window.confirm("Do you want numbers?")) {
      characterArray = characterArray.concat(number);

    }

    if (window.confirm("Do you want special characters?")) {
    characterArray = characterArray.concat(specialCharacters);
    }
    return password;
 }

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

if (password) {
  passwordText.value = password;
}
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
