var generateBtn = document.querySelector("#generate");
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Password length function
function determineLength(){
    passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");
  
      if (passwordLength<8){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
      }else if (passwordLength>128){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
      }else if (isNaN(passwordLength)){
        alert("Password length must be a number between 8-128 characters");
        determineLength();
      }else{
      alert("The next three screens will ask you what types of characters you would like to be included in your password.\nIf you choose 'No' for all, your password will only contain lowercase letters.");
      }
      return passwordLength;
  }