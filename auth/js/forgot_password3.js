// right side of form page
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

let submitForm = document.getElementById('validateSignIn');
let password = document.getElementById('password');
let comfirmPassword = document.getElementById('comfirmPassword');

function validatePassword(passwordinput, event) {
    let pwdRegex = /^(?=.*[A-Z])(?=.*[@*+%$#&])(?=.*\d).{6,}$/;
    if (passwordinput.value === "") {
        passwordinput.nextElementSibling.innerHTML = "Please enter password !";
        password.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!passwordinput.value.match(pwdRegex)) {
        passwordinput.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @*$#&+% and 1 number !";
        password.style.borderColor = "red";
        return false;
    } else {
        passwordinput.nextElementSibling.innerHTML = "";
        password.style.border = "2px solid green";
        return true;
    }
}

function validateComfirmPassword(comfirminput, event) {
    if (comfirminput.value === "") {
        comfirminput.nextElementSibling.innerHTML = "Please comfirm password !";
        comfirmPassword.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (comfirminput.value !== password.value) {
        comfirminput.nextElementSibling.innerHTML = "Please password don't match !";
        comfirmPassword.style.borderColor = "red";
        return false;
    } else {
        comfirminput.nextElementSibling.innerHTML = "";
        comfirmPassword.style.border = "2px solid green";
        return true;
    }
}

function houseFunction(e) {
    e.preventDefault();

    let passwordValidation = validatePassword(password, e);
    let comfirmPasswordValidation = validateComfirmPassword(comfirmPassword, e);

    if (passwordValidation && comfirmPasswordValidation) {
        let loader = document.querySelector('.load');
        loader.style.display = "block";

        setTimeout(() => {
            window.location.href = './forgot_password4.html';
        }, 3000);
    }

    return true;
}

submitForm.addEventListener('submit', houseFunction);

for (let i = 1; i < 3; i++) {
    let passwordHide = document.getElementsByClassName(`hidepassword${i}`)[0];
    let passwordShow = document.getElementsByClassName(`showPassword${i}`)[0];
    let passwordText = document.getElementsByClassName(`passText${i}`)[0];

    passwordHide.addEventListener('click', () => {
        passwordShow.style.display = 'unset';
        passwordHide.style.display = 'none';

        if (passwordText.type === 'password') {
            passwordText.type = 'text';
        } else {
            passwordText.type = 'password';
        }
    })

    passwordShow.addEventListener('click', () => {
        passwordShow.style.display = 'none';
        passwordHide.style.display = 'unset';

        if (passwordText.type === 'text') {
            passwordText.type = 'password';
        } else {
            passwordText.type = 'text';
        }
    })
}