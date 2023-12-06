const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

document.addEventListener('DOMContentLoaded', function () {
    const savedEmail = localStorage.getItem('savedVerification');
    const savedName = localStorage.getItem('savedName');
    const userNumber = localStorage.getItem('phoneNum');
    const userHome = localStorage.getItem('homeAddress');
    const userStatus = localStorage.getItem('marital');
    const userNation = localStorage.getItem('nationality');
    const userEthnic = localStorage.getItem('ethnicity');
    const userState = localStorage.getItem('state');
    const userGeno = localStorage.getItem('genotype');
    const userBlood = localStorage.getItem('blood');
    const userGender = localStorage.getItem('gender');

    const displayEmail = document.getElementById('profile-mail');
    const displayName = document.getElementById('profile-name');
    const displayNickName = document.getElementById('profile-displayname');
    const displayUserNum = document.getElementById('profile-num');
    const displayHome = document.getElementById('profile-address');
    const displayStatus = document.getElementById('profile-status');
    const displayNation = document.getElementById('profile-nation');
    const displayEthnic = document.getElementById('profile-ethic');
    const displayState = document.getElementById('profile-state');
    const displayGeno = document.getElementById('profile-geno');
    const displayBlood = document.getElementById('profile-blood');
    const displayGender = document.getElementById('profile-gender');

    const profileIDElement = document.getElementById('profile-id');

    const check = true;

    if (check) {
        displayEmail.innerText = `Email Address: ${savedEmail}`;
        displayName.innerText = `Name: ${savedName}`;
        displayNickName.innerText = `Display Name: ${savedName}`;
        displayUserNum.innerText = `Phone Number: ${userNumber}`;
        displayHome.innerHTML = `Address: ${userHome}`;
        displayStatus.innerText = `Marital Status: ${userStatus}`;
        displayNation.innerText = `Nationality: ${userNation}`;
        displayEthnic.innerText = `Ethnicity: ${userEthnic}`;
        displayState.innerText = `State of origin: ${userState}`;
        displayGeno.innerText = `Genotype: ${userGeno}`;
        displayBlood.innerText = `Blood Group: ${userBlood}`;
        displayGender.innerText = `Gender: ${userGender}`;
    }

    function generateRandomID(email) {
        const seed = email ? email : '';
        const hashedEmail = hashString(seed);
        const randomID = hashedEmail % 9000000000 + 1000000000;
        return randomID;
    }

    function hashString(str) {
        let hash = 0;
        if (str.length === 0) {
            return hash;
        }
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash |= 0;
        }
        return hash;
    }

    function updateProfileID() {
        const email = savedEmail;
        const randomID = generateRandomID(email);
        profileIDElement.textContent = randomID;
    }

    updateProfileID();

    function updateEmail(updatedEmail) {
        savedEmail = updatedEmail;
        updateProfileID();
    }
    
});

