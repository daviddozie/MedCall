// Swiper-js
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    prevEl: '.next',
  },

  slidesPerView: 1,
  spaceBetween: 10,
});

function validateName(nameInput, event) {
  if (nameInput.value === "") {
    nameInput.nextElementSibling.innerHTML = "Please enter your name !";
    nameInput.classList.add('error-border');
    event.preventDefault();
    return false;
  } else {
    nameInput.nextElementSibling.innerHTML = "";
    nameInput.classList.remove('error-border');
    nameInput.classList.add('success-border');
    return true;
  }
}

function validateEmailFirst(emailinput, event) {
  let eRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailinput.value === "") {
    emailinput.nextElementSibling.innerHTML = "Please enter your email address !";
    emailinput.classList.add('error-border');
    event.preventDefault();
    return false;
  } else if (!emailinput.value.match(eRegex)) {
    emailinput.nextElementSibling.innerHTML = "Please enter a valid email address !";
    emailinput.classList.add('error-border');
    return false;
  } else {
    emailinput.nextElementSibling.innerHTML = "";
    emailinput.classList.remove('error-border');
    emailinput.classList.add('success-border');
    return true;
  }
}

function validateNumber(numberinput, event) {
  const phoneNumberRegex = /^\+?\d+$/;
  if (numberinput.value === "") {
    numberinput.nextElementSibling.innerHTML = "Please enter phone number";
    numberinput.classList.add('error-border');
    event.preventDefault();
    return false;
  } else if (!numberinput.value.match(phoneNumberRegex)) {
    numberinput.nextElementSibling.innerHTML = "Please enter a valid phone number";
    numberinput.classList.add('error-border');
    return false;
  } else {
    numberinput.nextElementSibling.innerHTML = "";
    numberinput.classList.remove('error-border');
    numberinput.classList.add('success-border');
    return true;
  }
}

function validateSubject(subjectInput, event) {
  if (subjectInput.value === "") {
    subjectInput.nextElementSibling.innerHTML = "Please enter subject !";
    subjectInput.classList.add('error-border');
    event.preventDefault();
    return false;
  } else {
    subjectInput.nextElementSibling.innerHTML = "";
    subjectInput.classList.remove('error-border');
    subjectInput.classList.add('success-border');
    return true;
  }
}

function validateMessage(messageArea, event) {
  if (messageArea.value === "") {
    messageArea.nextElementSibling.innerHTML = 'Please send a message';
    messageArea.classList.add('error-border');
    event.preventDefault();
    return false;
  } else {
    messageArea.nextElementSibling.innerHTML = "";
    messageArea.classList.remove('error-border');
    messageArea.classList.add('success-border');
    return true;
  }
}


document.getElementById('validateForm').addEventListener('submit', function (event) {
  event.preventDefault();

  let names = document.getElementById('name');
  let emailFirst = document.getElementById('emailFirst');
  let phoneNumber = document.getElementById('number');
  let subject = document.getElementById('subject');
  let message = document.getElementById('message');


  if (!validateName(names, event) ||
    !validateEmailFirst(emailFirst, event) ||
    !validateNumber(phoneNumber, event) ||
    !validateSubject(subject, event) ||
    !validateMessage(message, event)
  ) {
    return;
  }

  const serviceID = 'service_kv5572e';
  const templateID = 'template_vz4fy2z';

  const emailParams = {
    email_id: emailFirst.value,
    from_name: names.value,
    message: message.value,
    subject: subject.value,
    phone_number: phoneNumber.value
  };

  emailjs.send(serviceID, templateID, emailParams)
    .then(() => {
      alert('Successful');
      sendAutoReply(emailParams.email_id, emailParams.from_name);
      alert('Check your mail');
      document.querySelector('.load').style.display = 'block';
      setTimeout(() => {
        location.reload();
      }, 2500);
    })
    .catch((err) => {
      alert(JSON.stringify(err));
    });
});

function sendAutoReply(receiverEmail, receiverName) {
  const autoReplyServiceID = 'service_kv5572e';
  const autoReplyTemplateID = 'template_vz4fy2z';

  const autoReplyParams = {
    to_email: receiverEmail,
    to_name: receiverName,
  };

  emailjs.send(autoReplyServiceID, autoReplyTemplateID, autoReplyParams)
    .then(() => {
      console.log('sent successfully!');
    })
    .catch((err) => {
      console.error('Error sending auto-reply:', err);
    });
}