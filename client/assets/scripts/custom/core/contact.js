const contactFormValidator = () => {
  $('#contactForm').validator().on('submit', (event) => {
    if (event.isDefaultPrevented()) {
      formError();
      submitMSG(false, 'Did you fill in the form properly?');
    } else {
      event.preventDefault();
      submitForm();
    }
 });
}

const submitForm = () => {
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  $.ajax({
      type: "POST",
      url: "process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success : (text) => {
        if (text == "success") {
          formSuccess();
        } else {
          formError();
          submitMessage(false, text);
        }
      }
  });
}

const submitMessage = (valid, msg) => {
  if (valid) {
    var msgClasses = "h3 text-center fadeInUp animated text-success";
  } else {
    var msgClasses = "h3 text-center shake animated text-danger";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

const formSuccess = () => {
  $('#contactForm')[0].reset();
  submitMessage(true, "Message Sent!");
}

const formError = () => {
  $('#contactForm')
    .removeClass()
    .addClass('shake animated')
    .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
    $(this).removeClass();
  });
}

const initContact = () => {
  contactFormValidator();
}

export default initContact;
