var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // 10 characters
var specCharacters = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '}', '~'] //28 characters
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'] // 26 characters
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var possibleChars = [numbers, specCharacters, lowerCase, upperCase]
var totalChars = []

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);
function writePassword() {
  var Initiate = confirm("Do you want to generate a new password?")
  if (Initiate) {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }}
  
  function generatePassword() {
    var genPassword = '';
    var pwLength = parseInt(prompt("Please enter the desired password length. The length must be between 8 and 128 characters."))
    if (pwLength > 128 || pwLength < 8) {
      alert("Improper password length")
      generatePassword()
    }
   
    var pwNumbers = confirm("Do you want to include numeric characters in your password?")
    if (pwNumbers === false) {
      possibleChars.splice(0)
    }
    var pwLowercase = confirm("Do you want to include lowercase letters in your password?")
    if (pwLowercase === false) {
      possibleChars.splice(2)
    }
    var pwUppercase = confirm("Do you want to include uppercase letters in your password?")
    if (pwUppercase === false) {
      possibleChars.splice(3)
    }
    var pwSpecials = confirm("Do you want to include special characters in your password?")
    if (pwSpecials === false) {
      possibleChars.splice(1)
    }

    if (pwNumbers == false && pwLowercase == false && pwUppercase == false && pwSpecials == false) {
      alert("You need to choose at least one character type in your password")
    }
    
    for (var i = 0; i < pwLength; i++) {
      numRandom = Math.floor(Math.random()*(possibleChars.length))
      genPassword += possibleChars[numRandom]
    };
    return genPassword
  }
  
  




