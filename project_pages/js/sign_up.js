import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

const firebaseConfig = {
	apiKey: "AIzaSyCzN2BcLZPG3V93OTjNmjavHrOf6E6Lfro",
	authDomain: "medcall-project.firebaseapp.com",
	projectId: "medcall-project",
	storageBucket: "medcall-project.appspot.com",
	messagingSenderId: "179959796661",
	appId: "1:179959796661:web:274aecf315c39b5ee9fffc",
	measurementId: "G-71NT0KL3VR"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth(app);

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let emailSign = document.getElementById("email");
let password = document.getElementById("password");
let comfirmPassword = document.getElementById("comfirmPassword");
let submitForm = document.getElementById("validateSignIn");

function validateFirstName(firstnameinput, event) {
	if (firstnameinput.value === "") {
		firstnameinput.nextElementSibling.innerHTML = "Please enter first name !";
		firstName.style.borderColor = "red";
		event.preventDefault();
		return false;
	} else {
		firstnameinput.nextElementSibling.innerHTML = "";
		firstName.style.border = "2px solid green";
		return true;
	}
};

function validateLastName(lastnameinput, event) {
	if (lastnameinput.value === "") {
		lastnameinput.nextElementSibling.innerHTML = "Please enter first name !";
		lastName.style.borderColor = "red";
		event.preventDefault();
		return false;
	} else {
		lastnameinput.nextElementSibling.innerHTML = "";
		lastName.style.border = "2px solid green";
		return true
	}
};

function validateEmail(emailinput, event) {
	let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (emailinput.value === "") {
		emailinput.nextElementSibling.innerHTML = "Please enter your email address !";
		emailSign.style.borderColor = "red";
		event.preventDefault();
		return false;
	} else if (!emailinput.value.match(emailRegex)) {
		emailinput.nextElementSibling.innerHTML = "Please enter a valid email !";
		emailSign.style.borderColor = "red";
		return false;
	} else {
		emailinput.nextElementSibling.innerHTML = "";
		emailSign.style.border = "2px solid green";
		return true;
	}
};

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
};

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

let RegisterUser = (evt) => {
	evt.preventDefault();

	if (!validateFirstName(firstName, evt) || !validateLastName(lastName, evt) || !validateEmail(emailSign, evt) || !validatePassword(password, evt) || !validateComfirmPassword(comfirmPassword, evt)) {
		return;
	}

	createUserWithEmailAndPassword(auth, emailSign.value, password.value)
        .then((credentials) => {
            set(ref(db, "UsersAuthList/" + credentials.user.uid), {
                firstName: firstName.value,
                lastName: lastName.value,
            });

            // Sending auto-reply email using EmailJS
            const serviceID = 'service_kyyw8we';
            const templateID = 'template_bv5eteh';

            const emailParams = {
                email_id: emailSign.value,
            };

            emailjs.send(serviceID, templateID, emailParams)
                .then(() => {
                    alert('Registration successful! Please check your email for verification.');
					localStorage.setItem('savedVerification', emailSign.value);
					let fullName = (firstName.value + lastName.value);
					localStorage.setItem('savedName', fullName);
					let loader = document.querySelector('.load');
					localStorage.setItem('email', emailSign.value);
					loader.style.display = "block";
					setTimeout(() => {
						window.location.href = "../auth/verification.html";
					}, 2500);
                })
                .catch((err) => {
                    alert('Error sending email: ' + err);
                });
        })
        .catch((error) => {
            alert('Registration error: ' + error.message);
            console.error(error.code);
            console.error(error.message);
        });
};

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

submitForm.addEventListener("submit", RegisterUser);