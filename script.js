var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Password length function
function determineLength() {
  passwordLength = prompt(
    "Choose how many characters long you'd like your password to be (between 8-128 characters): "
  );

  if (passwordLength < 8) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else if (passwordLength > 128) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  } else if (isNaN(passwordLength)) {
    alert("Password length must be a number between 8-128 characters");
    determineLength();
  }
  return passwordLength;
}

//Function to include uppercase characters
function determineUppercase() {
  uppercaseCheck = prompt(
    "Do you want to include uppercase letters in your password? \n(Yes or No)"
  );
  uppercaseCheck = uppercaseCheck.toLowerCase();

  if (uppercaseCheck === null || uppercaseCheck === "") {
    alert("Please answer Yes or No");
    determineUppercase();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y") {
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n") {
    uppercaseCheck = false;
    return uppercaseCheck;
  } else {
    alert("Please answer Yes or No");
    determineUppercase();
  }
  return uppercaseCheck;
}

//Function to include numbers in password
function determineNumbers() {
  numberCheck = prompt(
    "Do you want to include numbers in your password? \n(Yes or No)"
  );
  numberCheck = numberCheck.toLowerCase();

  if (numberCheck === null || numberCheck === "") {
    alert("Please answer Yes or No");
    determineNumbers();
  } else if (numberCheck === "yes" || numberCheck === "y") {
    numberCheck = true;
    return numberCheck;
  } else if (numberCheck === "no" || numberCheck === "n") {
    numberCheck = false;
    return numberCheck;
  } else {
    alert("Please answer Yes or No");
    determineNumbers();
  }
  return numberCheck;
}

//Function to include special characters in password
function determineSpecial() {
  specialCheck = prompt(
    "Do you want to include special characters in your password? \n(Yes or No)"
  );
  specialCheck = specialCheck.toLowerCase();

  if (specialCheck === null || specialCheck === "") {
    alert("Please answer Yes or No");
    determineSpecial();
  } else if (specialCheck === "yes" || specialCheck === "y") {
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no" || specialCheck === "n") {
    specialCheck = false;
    return specialCheck;
  } else {
    alert("Please answer Yes or No");
    determineSpecial();
  }
  return specialCheck;
}
