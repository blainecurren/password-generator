var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
var passwordLengthPrompt;
var uppercasePrompt;
var numberPrompt;
var specialPrompt;

// Password length function
function getLength() {
  passwordLengthPrompt = prompt(
    "How many characters would you like your password to be (between 8-128 characters): "
  );

  if (passwordLengthPrompt < 8) {
    alert("Password length must be a number between 8-128 characters");
    getLength();
  } else if (passwordLengthPrompt > 128) {
    alert("Password length must be a number between 8-128 characters");
    getLength();
  } else if (isNaN(passwordLengthPrompt)) {
    alert("Password length must be a number between 8-128 characters");
    getLength();
  }
  return passwordLengthPrompt;
}

//Function to include uppercase characters
function generateUppercase() {
  uppercasePrompt = prompt(
    "Would you like uppercase letters in your password? \n(Yes or No)"
  );
  uppercasePrompt = uppercasePrompt.toLowerCase();

  if (uppercasePrompt === null || uppercasePrompt === "") {
    alert("Please answer Yes or No");
    generateUppercase();
  } else if (uppercasePrompt === "yes" || uppercasePrompt === "y") {
    uppercasePrompt = true;
    return uppercasePrompt;
  } else if (uppercasePrompt === "no" || uppercasePrompt === "n") {
    uppercasePrompt = false;
    return uppercasePrompt;
  } else {
    alert("Please answer Yes or No");
    generateUppercase();
  }
  return uppercasePrompt;
}

//Function to include numbers
function generateNumbers() {
  numberPrompt = prompt(
    "Would you like numbers in your password? \n(Yes or No)"
  );
  numberPrompt = numberPrompt.toLowerCase();

  if (numberPrompt === null || numberPrompt === "") {
    alert("Please answer Yes or No");
    generateNumbers();
  } else if (numberPrompt === "yes" || numberPrompt === "y") {
    numberPrompt = true;
    return numberPrompt;
  } else if (numberPrompt === "no" || numberPrompt === "n") {
    numberPrompt = false;
    return numberPrompt;
  } else {
    alert("Please answer Yes or No");
    generateNumbers();
  }
  return numberPrompt;
}

//Function to include special characters in password
function generateSpecial() {
  specialPrompt = prompt(
    "Would you like special characters in your password? \n(Yes or No)"
  );
  specialPrompt = specialPrompt.toLowerCase();

  if (specialPrompt === null || specialPrompt === "") {
    alert("Please answer Yes or No");
    generateSpecial();
  } else if (specialPrompt === "yes" || specialPrompt === "y") {
    specialPrompt = true;
    return specialPrompt;
  } else if (specialPrompt === "no" || specialPrompt === "n") {
    specialPrompt = false;
    return specialPrompt;
  } else {
    alert("Please answer Yes or No");
    generateSpecial();
  }
  return specialPrompt;
}

// Generate Password Function
function generatePassword() {
  getLength();
  console.log(passwordLengthPrompt);
  generateUppercase();
  console.log(uppercasePrompt);
  generateNumbers();
  console.log(numberPrompt);
  generateSpecial();
  console.log(specialPrompt);

  var characters = lowercaseChar;
  var password = "";
  if (uppercasePrompt && numberPrompt && specialPrompt) {
    characters += uppercaseChar + numberChar + specialChar;
  } else if (uppercasePrompt && numberPrompt) {
    characters += uppercaseChar + numberChar;
  } else if (numberPrompt && specialPrompt) {
    characters += numberChar + specialChar;
  } else if (uppercasePrompt && specialPrompt) {
    characters += uppercaseChar + specialChar;
  } else if (uppercasePrompt) {
    characters += uppercaseChar;
  } else if (numberPrompt) {
    characters += numberChar;
  } else if (specialPrompt) {
    characters += specialChar;
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

// Write password to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function resetText() {
  document.getElementById("password").value = "Your Secure Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
