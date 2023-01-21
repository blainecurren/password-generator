// Assignment code here
var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~]";
var numbers = "0123456789";

function getLength() {
  passwordLengthPrompt = window.prompt(
    "How many characters would you like your password to be? (between 8-128 characters):"
  );

  if (passwordLengthPrompt < 8) {
    alert("Password length must be between 8-128 characters.");
    getLength();
  } else if (passwordLengthPrompt > 128) {
    alert("Password length must be between 8-128 characters.");
  } else if (isNaN(passwordLengthPrompt)) {
    alert("Password length must be a number.");
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
