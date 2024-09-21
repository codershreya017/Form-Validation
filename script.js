var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatename() {
  var name = document.getElementById('contact-name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Name is required';
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = 'Write full name';
    return false;
  }
  nameError.innerHTML = 'valid';
  return true;
}

function validateMessage() {
  var message = document.getElementById('contact-message');
  var required = 30;
  var left = required - message.length;

  if (left > 0) {
    messageError.innerHTML = left + ' more characters required';
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return false;
}

function validationForm() {
  if (!validatename() || !validatename() || !validatename()) {
    submitError.innerHTML = 'Please fix error to submit';
    setTimeout(function () {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}