var numbers = "0123456789";
var specCharacters = "!#$%&()*+-./:;<=>?@[]^_`{,}~"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = lowerCase.toUpperCase();

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
    var possibleChars = " "
    var genPassword = " ";
    var pwLength = parseInt(prompt("Please enter the desired password length. The length must be between 8 and 128 characters."))
    if (pwLength > 128 || pwLength < 8) {
      alert("Improper password length")
      return generatePassword()
    }
   
    var pwNumbers = confirm("Do you want to include numeric characters in your password?")
    if (pwNumbers) {
      possibleChars += numbers;
    };
    var pwLowercase = confirm("Do you want to include lowercase letters in your password?")
    if (pwLowercase) {
      possibleChars += lowerCase;
    };
    var pwUppercase = confirm("Do you want to include uppercase letters in your password?")
    if (pwUppercase) {
      possibleChars += upperCase;
    };
    var pwSpecials = confirm("Do you want to include special characters in your password?")
    if (pwSpecials) {
      possibleChars += specCharacters;
    };

    if (pwNumbers == false && pwLowercase == false && pwUppercase == false && pwSpecials == false) {
      alert("You need to choose at least one character type in your password")
      return generatePassword()
    };
    
    for (var i = 0; i < pwLength; i++) {
      genPassword += possibleChars.charAt(Math.floor(Math.random()*possibleChars.length))
    };
    return genPassword
  }
  
  




