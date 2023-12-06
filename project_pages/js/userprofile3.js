let userForm = document.getElementById('editForm');
let firstName = document.getElementById('nameFirst');
let lastName = document.getElementById('nameLast');
let userEmail = document.getElementById('userEmail');
let userNum = document.getElementById('userTel');
let userHome = document.getElementById('userHome');
let userStatus = document.getElementById('userStatus');
let userNation = document.getElementById('userNation');
let userEthnicity = document.getElementById('userEthnicity');
let userState = document.getElementById('userState');
let userGenotype = document.getElementById('userGenotype');
let userCity = document.getElementById('userCity');
let userBloodG = document.getElementById('userBloodG');

function validateFirstName(fNameInput, event) {
    if (fNameInput.value === "") {
        fNameInput.nextElementSibling.innerHTML = 'Please enter your first name !';
        fNameInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        fNameInput.nextElementSibling.innerHTML = '';
        fNameInput.classList.remove('error-border');
        fNameInput.classList.add('success-border');
        return true;
    }
}

function validateLastName(lNameInput, event) {
    if (lNameInput.value === "") {
        lNameInput.nextElementSibling.innerHTML = 'Please enter your last name !';
        lNameInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        lNameInput.nextElementSibling.innerHTML = '';
        lNameInput.classList.remove('error-border');
        lNameInput.classList.add('success-border');
        return true;
    }
}

function validateEmail(emailInput, event) {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailInput.value === "") {
        emailInput.nextElementSibling.innerHTML = 'Please enter your email address !';
        emailInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else if (!emailInput.value.match(emailRegex)) {
        emailInput.nextElementSibling.innerHTML = 'Please enter a valid email address !';
        emailInput.classList.add('error-border');
        return false;
    }
    else {
        emailInput.nextElementSibling.innerHTML = '';
        emailInput.classList.remove('error-border');
        emailInput.classList.add('success-border');
        return true;
    }
}

function validatePhoneNum(phoneInput, event) {
    if (phoneInput.value === "") {
        phoneInput.nextElementSibling.innerHTML = 'Please enter your phone number !';
        phoneInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        phoneInput.nextElementSibling.innerHTML = '';
        phoneInput.classList.remove('error-border');
        phoneInput.classList.add('success-border');
        return true;
    }
}

function validateHome(homeInput, event) {
    if (homeInput.value === "") {
        homeInput.nextElementSibling.innerHTML = 'Please enter your home address !';
        homeInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        homeInput.nextElementSibling.innerHTML = '';
        homeInput.classList.remove('error-border');
        homeInput.classList.add('success-border');
        return true;
    }
}

function validateStatus(statusInput, event) {
    if (statusInput.value === "") {
        statusInput.nextElementSibling.innerHTML = 'Please enter your marital status !';
        statusInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        statusInput.nextElementSibling.innerHTML = '';
        statusInput.classList.remove('error-border');
        statusInput.classList.add('success-border');
        return true;
    }
}

function validateNation(nationInput, event) {
    if (nationInput.value === "") {
        nationInput.nextElementSibling.innerHTML = 'Please enter your nationality !';
        nationInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        nationInput.nextElementSibling.innerHTML = '';
        nationInput.classList.remove('error-border');
        nationInput.classList.add('success-border');
        return true;
    }
}

function validateEthnicity(ethnicInput, event) {
    if (ethnicInput.value === "") {
        ethnicInput.nextElementSibling.innerHTML = 'Please enter your ethnicity !';
        ethnicInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        ethnicInput.nextElementSibling.innerHTML = '';
        ethnicInput.classList.remove('error-border');
        ethnicInput.classList.add('success-border');
        return true;
    }
}

function validateState(stateInput, event) {
    if (stateInput.value === "") {
        stateInput.nextElementSibling.innerHTML = 'Please enter your state of origin !';
        stateInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        stateInput.nextElementSibling.innerHTML = '';
        stateInput.classList.remove('error-border');
        stateInput.classList.add('success-border');
        return true;
    }
}

function validateGenotype(genoInput, event) {
    if (genoInput.value === "") {
        genoInput.nextElementSibling.innerHTML = 'Please enter your genotype !';
        genoInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        genoInput.nextElementSibling.innerHTML = '';
        genoInput.classList.remove('error-border');
        genoInput.classList.add('success-border');
        return true;
    }
}

function validateCity(cityInput, event) {
    if (cityInput.value === "") {
        cityInput.nextElementSibling.innerHTML = 'Please enter your gender !';
        cityInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        cityInput.nextElementSibling.innerHTML = '';
        cityInput.classList.remove('error-border');
        cityInput.classList.add('success-border');
        return true;
    }
}

function validateBloodGroup(bloodInput, event) {
    if (bloodInput.value === "") {
        bloodInput.nextElementSibling.innerHTML = 'Please enter your blood group !';
        bloodInput.classList.add('error-border');
        event.preventDefault();
        return false;
    }
    else {
        bloodInput.nextElementSibling.innerHTML = '';
        bloodInput.classList.remove('error-border');
        bloodInput.classList.add('success-border');
        return true;
    }
}

function houseFunc(e) {
    e.preventDefault();

    let validFirstName = validateFirstName(firstName, e);
    let validLastName = validateLastName(lastName, e);
    let validEmail = validateEmail(userEmail, e);
    let validPhoneNum = validatePhoneNum(userNum, e);
    let validHome = validateHome(userHome, e);
    let validStatus = validateStatus(userStatus, e);
    let validNation = validateNation(userNation, e);
    let validEthnicity = validateEthnicity(userEthnicity, e);
    let validState = validateState(userState, e);
    let validGenotype = validateGenotype(userGenotype, e);
    let validCity = validateCity(userCity, e);
    let validBlood = validateBloodGroup(userBloodG, e);

    if (validFirstName &&
        validLastName &&
        validEmail &&
        validPhoneNum &&
        validHome &&
        validStatus &&
        validStatus &&
        validNation &&
        validEthnicity &&
        validState &&
        validGenotype &&
        validCity &&
        validBlood
    ) {
        let loader = document.querySelector('.load');
        loader.style.display = 'block';
        let fullName = (firstName.value + lastName.value);
        localStorage.setItem('SavedName', fullName);
        localStorage.setItem('phoneNum', userNum.value);
        localStorage.setItem('homeAddress', userHome.value);
        localStorage.setItem('marital', userStatus.value);
        localStorage.setItem('nationality', userNation.value);
        localStorage.setItem('ethnicity', userEthnicity.value);
        localStorage.setItem('state', userState.value);
        localStorage.setItem('genotype', userGenotype.value);
        localStorage.setItem('blood', userBloodG.value);
        localStorage.setItem('gender', userCity.value);

        setTimeout(() => {
            alert('successful');
            location.reload();
        }, 2000);
    }

    return true;
}

userForm.addEventListener('submit', houseFunc);