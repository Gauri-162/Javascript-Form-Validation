function validateForm(event) {
  event.preventDefault();
  var nameValid = validateName();
  var phoneValid = validatePhone();
  var emailValid = validateEmail();
  var passwordValid = validatePassword();
  var connpassValid = validateconfirmPassword();

  if (!nameValid || !phoneValid || !emailValid || !passwordValid || !connpassValid) {

      return;
  }

  // programatically submit the form > event.target.submit();
  event.target.submit();
  alert("Thank you for your response!!");
}


function validateName() {
  var name1 = document.forms["Form"]["fname"].value;;
    // Check if the full name is empty
    if (name1.trim() === '') {
      alert("Please fill the name!!")
    }
  
    // Check if the full name has at least two parts (first and last name)
    var nameParts = name1.trim().split(' ');
  
    if (nameParts.length < 2) {
      alert("Please fill full name");
    }
  
    // Check if each part of the full name starts with an uppercase letter
    for (let i = 0; i < nameParts.length; i++) {
      const namePart = nameParts[i];
  
      if (namePart[0] !== namePart[0].toUpperCase()) {
        alert("Starting letter should be in capitals");
      }
    }
  
    // All validation checks passed, so the full name is valid
    return true;
  }
  


function validatePhone() {
  var phone1 = document.forms["Form"]["pname"].value;;
    // Check if the phone number is empty or not a number
  if (phone1 === '' || isNaN(phone1)) {
    alert("Please fill the phone no!!");
  }

  // Check if the phone number is a valid length and not 123456789
  if ( phone1 == '123456789') {
    alert("Phone no.cannot be 123456789!!");
  }

  if (phone1.length !=10 ) {
    alert("Phone no.should be of 10 digits!!");
  }

  // All validation checks passed, so the phone number is valid
  return true;
}
    

function isvalidateEmail() {
  var email1 = document.forms["Form"]["ename"].value;;
    // Check if the email address is empty
    if (email1 === '') {
      return false;
    }
  
    // Split the email address into a local part and a domain part
    var parts = email1.split('@');
    if (parts.length !== 2) {
      return false;
    }
    var localPart = parts[0];
    var domainPart = parts[1];
  
    // Check if the local part is empty or too long
    if (localPart === '' || localPart.length > 64) {
      return false;
    }
  
    // Check if the domain part is empty or too long
    if (domainPart === '' || domainPart.length > 255) {
      return false;
    }
  
    // Check if the domain part has at least one dot
    if (domainPart.indexOf('.') === -1) {
      return false;
    }
  
    // Check if the domain part starts or ends with a dot
    if (domainPart.startsWith('.') || domainPart.endsWith('.')) {
      return false;
    }
  
    // All validation checks passed, so the email address is valid
    return true;
  }

  function validateEmail() {
    if (!isvalidateEmail()) {
        alert("Invalid Email!!")
    } else 
    return true;
}
  
  
  function isvalidatePassword() {
    var password1 = document.forms["Form"]["psname"].value;;
    var name1 = document.forms["Form"]["fname"].value;;
    var nameParts = name1.trim().split(' ');
    // Check if the password is empty
    if (password1 === '') {
      return false;
    }

    // Check if the password is password
    if (password1 === "password") {
      return false;
    }

    // Check if the password is name
    for (let i = 0; i < nameParts.length; i++) {
      const namePart = nameParts[i];{
    if (password1 === namePart[0]) {
      return false;
    }}}

    // Check if the password is too short
    if (password1.length < 8) {
      return false;
    }
  
    // Check if the password is too long
    if (password1.length > 64) {
      return false;
    }

  
    // Check if the password contains at least one lowercase letter, one uppercase letter, and one digit
    let hasLowercase = false;
    let hasUppercase = false;
    let hasDigit = false;
  
    for (let i = 0; i < password1.length; i++) {
      const c = password1[i];
  
      if (c >= 'a' && c <= 'z') {
        hasLowercase = true;
      } else if (c >= 'A' && c <= 'Z') {
        hasUppercase = true;
      } else if (c >= '0' && c <= '9') {
        hasDigit = true;
      }
    }
  
    if (!hasLowercase || !hasUppercase || !hasDigit) {
      return false;
    }

    var specialChars = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (!specialChars.test(password1)) {
    return false;
  }

  //All validation checks passed, so the password is valid
    return true;
  }

  function validatePassword() {
    if (!isvalidatePassword()) {
        alert("Password cannot be password. Password cannot be your name. Password must be of length 8. Password is too long. Password must contain lowercase and uppercase letters and digits. Password must contain at least one Special Symbol. ")
    } else 
    return true;
}
  

  // Check whether password and confirm password are same
  
  function validateconfirmPassword() {
    var confirmPassword1 = document.forms["Form"]["cpsname"].value;;
    var password1 = document.forms["Form"]["psname"].value;;
    // Check if the passwords match
    if (password1 != confirmPassword1) {
      alert("Password did not match!!");
    }
  
    // All validation checks passed, so the confirm password is valid
    return true;
  }
  























