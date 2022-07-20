// Assignment code here

function generatePassword(length) {

  var upper = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
  var lower = "abcdefghijklmnopqrstuwxyz";
  var num = "0123456789";
  var spe = "!@£#$%^&*()-_";
  var pinChoice = "";

    var length = prompt('How many charaters do you need for your password?');
    console.log(length);
      if (length < 8 || length > 128){
        length = prompt("Please choose numbers between 8 and 128");
      } 
      alert("Password to be " + length + " letters in length");

    var uppercase = confirm('Would you like to include uppercase letters?');
    console.log(uppercase);
      if (uppercase === true){
        alert("Uppercase letters to be included in the password");
        pinChoice = pinChoice.concat(upper);
      } else {
        alert("Uppercase letters to be excluded in the password");
      }
      
    var lowercase = confirm('Would you like to include lowercase letters?');
    console.log(lowercase);
      if (lowercase === true){
        alert("Lowercase letters to be included in the password");
        pinChoice = pinChoice.concat(lower);
      } else {
        alert("Lowercase letters to be excluded in the password");
      }

    var numeric = confirm('Would you like to include numbers?');
    console.log(numeric);
      if (numeric === true){
        alert("Numbers letters to be included in the password");
        pinChoice = pinChoice.concat(num);
      } else {
        alert("Numbers letters to be excluded in the password");
      }

    var special = confirm('Would you like to include special characters?');
    console.log(special);
      if (special === true){
        alert("Special letters to be included in the password");
        pinChoice = pinChoice.concat(spe);
      } else {
        alert("Special letters to be excluded in the password")
      }

    console.log(pinChoice)
    var pass = "";
      for (var i=0; i<length; i++){
        var randomOrder = Math.floor(Math.random() * pinChoice.length);
        console.log(randomOrder);
        pass = pass + pinChoice[randomOrder];
      }
    console.log(pass)
    return pass;
  }
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
