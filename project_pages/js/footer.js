const submitEmail = document.querySelector('.footer-input');
const email = document.querySelector('.email');
const error = document.querySelector('.error-message');

function validateEmail(emailInput, event) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\s*)$/;
    if(emailInput.value.trim() === "") {
        error.innerHTML = "Please enter your email address !";
        submitEmail.classList.remove('success-border');
        submitEmail.classList.add('error-border');
        event.preventDefault();
        return false;
    } else if(!emailInput.value.match(emailRegex)) {
        error.innerHTML = "Please enter a valid email address !";
        submitEmail.classList.remove('success-border');
        submitEmail.classList.add('error-border');
        event.preventDefault();
        return false;
    } else {
        error.innerHTML = "";
        submitEmail.classList.add('success-border');
        submitEmail.classList.remove('error-border');
        return true;
    }
}

function validation(e) {
    validateEmail(email, e);
    return true;
}

submitEmail.addEventListener('submit', validation);