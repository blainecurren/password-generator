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

//Function to include uppercase characters
function determineUppercase(){
    uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Yes or No)");
      uppercaseCheck = uppercaseCheck.toLowerCase();
  
      if (uppercaseCheck === null || uppercaseCheck === ""){
        alert("Please answer Yes or No");
        determineUppercase();
  
      }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
        uppercaseCheck = true;
        return uppercaseCheck;
  
      }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
        uppercaseCheck = false;
        return uppercaseCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineUppercase();
      }
      return uppercaseCheck;
  }
  
//Function used to include numbers in password
function determineNumbers(){
    numberCheck = prompt("Do you want to include numbers in your password? \n(Yes or No)");
      numberCheck = numberCheck.toLowerCase();
  
      if (numberCheck === null || numberCheck === ""){
        alert("Please answer Yes or No");
        determineNumbers();
  
      }else if (numberCheck === "yes" || numberCheck ==="y"){
        numberCheck = true;
        return numberCheck;
  
      }else if (numberCheck === "no" || numberCheck ==="n"){
        numberCheck = false;
        return numberCheck;
      
      }else {
        alert("Please answer Yes or No");
        determineNumbers();
      }
      return numberCheck;
  }