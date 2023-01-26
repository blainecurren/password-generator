// Assignment code here
var capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetter = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!#$%&'()*+,-./:;<=>?@[/]^_`{|}~]";
var numbers = "0123456789";
var passwordLengthPrompt;
var uppercasePrompt;
var numberPrompt;
var specialPrompt;

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
  return passwordLengthPrompt;
}

function generateUppercase() {
  uppercasePrompt = window.prompt(
    "Would you like to include uppercase characters in your password?"
  );

  uppercasePrompt = uppercasePrompt.toLowerCase();

  if (uppercase === null || uppercase === "") {
    alert("Please answer Yes or No.");
  } else if (uppercase === "yes" || uppercase === "y") {
    uppercasePrompt = true;
    return uppercasePrompt;
  } else if (uppercase === "no" || uppercase === "n") {
    uppercasePrompt = false;
    return uppercasePrompt;
  }
}

function generateNumbers() {
  numberPrompt = window.prompt("Would you like numbers in your password?");
  numberPrompt = numberPrompt.toLowerCase();

  if (numberPrompt === null || numberPrompt === "") {
    alert("Please answer Yes or No");
    generateNumbers();
  } else if (numberPrompt === "yes" || numberPrompt === "y") {
    numberPrompt = true;
    return numberPrompt;
  } else if (numberPrompt === "no" || numberPrompt === "n") {
    numberPrompt = false;
  } else {
    alert("Please answer Yes or No");
    generateNumbers();
  }
  return numberPrompt;
}

function generateSpecialChars() {
  specialPrompt = window.prompt(
    "Would you like special characters in your password?"
  );
  specialPrompt = specialPrompt.toLowerCase();

  if (specialPrompt === null || specialPrompt === "") {
    alert("Please answer yes or no");
  } else if (specialPrompt === "Yes" || specialPrompt === "Y") {
    specialPrompt = true;
    return specialPrompt;
  } else if (specialPrompt === "No" || specialPrompt === "N") {
    specialPrompt = false;
    return specialPrompt;
  } else {
    alert("Please answer yes or no");
    generateSpecialChars();
  }
  return specialPrompt;
}

function generatePassword() {
  getLength();
  generateUppercase();
  generateNumbers();
  generateSpecialChars;

  var characters = lowercaseChar;
  var password = "";

  if (uppercasePrompt && numberPrompt && specialPrompt) {
    characters += uppercaseChar + numberChar + specialChars;
  } else if (uppercasePrompt && numberChar + specialChars) {
    characters += uppercaseChar + numberChar;
  } else if (numberPrompt && specialPrompt) {
    characters += numberChar + specialChars;
  } else if (uppercasePrompt && specialPrompt) {
    characters += uppercaseChar + specialChars;
  } else if (uppercasePrompt) {
    characters += numberChar;
  } else if (numberPrompt) {
    characters += numberChar;
  } else if (specialPrompt) {
    characters += specialChars;
  } else {
    characters === lowercaseChar;
  }

  for (var i = 0; i < passwordLengthPrompt; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
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
