// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
document.getElementById("click", writePassword);

// Write password to the #password input
function writePassword() {
    // linking the include special and character count to js
var length = document.getElementById("length").value;
var includeUppercase = document.getElementById("checkbox-uppercase").checked;
var includeSpecial = document.getElementById("checkbox-special").checked;

var characters ='abcdefghijklmnopqrstuvwxyz0123456789';
var specialCharacters = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';

var uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var password = "";

// when button clicked it will include these special characters to the password.
if (includeSpecial) {
    characters +=  '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  }
  if (includeUppercase) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }


 
 

  
  for(var i = 0; i < length; i++){
var randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
var passwordText = document.querySelector("#password");

}
passwordText.value = password;
// Add event listener to generate button

}
