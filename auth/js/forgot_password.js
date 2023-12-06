document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.item-circle1, .item-circle2, .item-circle3, .item-circle4, .item-circle5, .item-circle6, .item-circle7, .item-circle8');
    const delayBetweenCircles = 500;

    let index = 0;

    function displayNextCircle() {
        if (index < circles.length) {
            circles[index].style.display = 'block';
            index++;
            setTimeout(displayNextCircle, delayBetweenCircles);
        }
    }

    displayNextCircle();
});

function validateEmail(emailinput, event) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailinput.value === "") {
        emailinput.nextElementSibling.innerHTML = "Please enter your email address !";
        email.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!emailinput.value.match(emailRegex)) {
        emailinput.nextElementSibling.innerHTML = "Please enter a valid email !";
        email.style.borderColor = "red";
        return false;
    } else {
        emailinput.nextElementSibling.innerHTML = "";
        email.style.border = "2px solid green";
        return true;
    }
};

document.getElementById('validate-pw1').addEventListener('submit', function (event) {
    event.preventDefault();

    let emailForgot = document.getElementById("email");

    if (!validateEmail(emailForgot, event)) {
        return;
    }

    const serviceID = 'service_kyyw8we';
    const templateID = 'template_bv5eteh';

    const emailParams = {
        email_id: emailForgot.value,
    };

    emailjs.send(serviceID, templateID, emailParams)
        .then(() => {
            alert('Successful');
            sendAutoReply(emailParams.email_id);
            localStorage.setItem('savedEmail', emailForgot.value);
            alert('Please check your email to verify');
            document.querySelector('.load').style.display = 'block';
            setTimeout(() => {
                window.location.href = './forgot_password2.html';
            }, 2500);
        })
        .catch((err) => {
            alert(JSON.stringify(err));
        });
});

function sendAutoReply(receiverEmail, receiverName) {
    const autoReplyServiceID = 'service_kyyw8we';
    const autoReplyTemplateID = 'template_bv5eteh';

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