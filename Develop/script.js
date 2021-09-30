// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




var Initiate = confirm("Do you want to generate a new password?")
  if(Initiate){
      // Initiate the prompts pwLength -> charTypes ->
  }
  else {
    return "Have a good day"
  }
  
var pwLength = prompt("Please enter the desired password length. The length must be between 8 and 128 characters.")
  if(){

  }
  else {
    return "Invalid password length"
  }

var charTypes = prompt("Please choose which character types you want to include in your password")
  if() {

  }
  else {
  return "Invalid characters chosen"
  }

  // Need to have an array of possible numbers and characters and length based on input

  var numbers = [0,1,2,3,4,5,6,7,8,9] // 10 characters
  var specCharacters = ['!','"','#','$','%','&','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','}','~'] //28 characters
  var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] // 26 characters
  var upperCase = str.toupperCase(letters)
  var lowerCase = str.tolowerCase(letters)

