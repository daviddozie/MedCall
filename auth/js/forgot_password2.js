const inputs = document.querySelectorAll('.otp-input');
const signInButton = document.getElementById('signInButton');
const loader = document.querySelector(".load");

inputs.forEach((input, index) => {
    let typingTimer;

    input.addEventListener('input', (event) => {
        clearTimeout(typingTimer);
        input.setAttribute('type', 'text');

        typingTimer = setTimeout(() => {
            input.setAttribute('type', 'password');
        }, 1000);

        if (event.inputType === 'deleteContentBackward' && index > 0) {
            inputs[index - 1].focus();
            inputs[index - 1].value = '';
        } else if (event.inputType !== 'deleteContentBackward' && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }

        if (index === inputs.length - 1 && input.value.length === 1) {
            signInButton.focus();
            checkInputs();
        }
    });

    input.addEventListener('keydown', (event) => {
        clearTimeout(typingTimer);

        if (event.code === 'Backspace' && index > 0 && input.value === '') {
            inputs[index - 1].focus();
            inputs[index - 1].value = '';
            checkInputs();
        }
    });
});

function checkInputs() {
    const allFilled = Array.from(inputs).every(input => input.value.trim() !== '');
    signInButton.disabled = !allFilled;
    loader.style.display = 'block';

    setTimeout(() => {
        window.location.href = './forgot_password3.html';
    }, 2000);
}

// right side of form page
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll('.item-circle1, .item-circle2, .item-circle3, .item-circle4, .item-circle5, .item-circle6, .item-circle7, .item-circle8');
    const delayBetweenCircles = 1000;

    let index = 0;

    function displayNextCircle() {
        if (index < circles.length) {
            circles[index].style.display = 'block';
            index++;
            setTimeout(displayNextCircle, delayBetweenCircles);
        }
    }
    displayNextCircle();

    const savedEmail = localStorage.getItem('savedEmail');
    const displayDiv = document.getElementById('displayEmail');

    if (savedEmail) {
        displayDiv.innerText = `${savedEmail}`;
    } else {
        displayDiv.innerText = 'No email saved';
    }

});

let timer = document.getElementById("timer");
let timerMinutes = 60;
let time = timerMinutes * 60;

setInterval(updateTimer, 1000);

function updateTimer() {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = time % 60;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    if (time >= 0) {
        timer.innerHTML = hours + ":" + minutes + ":" + seconds;
        time--;
    } else {
        clearInterval(updateTimer);
        timer.innerHTML = "Timer expired!";
    }
}