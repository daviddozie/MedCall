import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

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
const dbref = ref(db);

let email = document.getElementById("email");
let password = document.getElementById("password1");
let submitForm = document.getElementById("form");
let checkbox = document.getElementById("checkbox")

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

function validateEmail(emailInput, event) {
	let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	if (emailInput.value === "") {
		emailInput.nextElementSibling.innerHTML = "Please enter your Email Address !";
		email.style.borderColor = "red";
		event.preventDefault();
		return false;
	} else if (!emailInput.value.match(emailRegex)) {
		emailInput.nextElementSibling.innerHTML = "Please enter valid Email !";
		email.style.borderColor = "red";
		return false;
	}

	else {
		emailInput.nextElementSibling.innerHTML = " ";
		email.style.border = "2px solid green";
		return true;
	}

}

function passwordName(passwordNew, event) {
	let passwordRegex = /^(?=.*[A-Z])(?=.*[@*+%$#&])(?=.*\d).{6,}$/;
	if (passwordNew.value === "") {
		passwordNew.nextElementSibling.innerHTML = "Please enter Password !";
		password.style.borderColor = "red";
		event.preventDefault();
		return false;
	} else if (!passwordNew.value.match(passwordRegex)) {
		passwordNew.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @*$#&+% and 1 number !";
		password.style.borderColor = "red";
		return false;
	}

	else {
		passwordNew.nextElementSibling.innerHTML = " ";
		password.style.border = "2px solid green";
		return true;

	}
}

function validateCheckbox(checkbox1, event){

    if(!checkbox1.checked){
        checkbox1.nextElementSibling.innerHTML = "please check to save details !";
        checkbox.style.borderColor = "red";
        event.preventDefault();
        return false
    } else {
        checkbox1.nextElementSibling.innerHTML = " ";
        checkbox.style.border = "2px solid green";
        // event.preventDefault();
        return true;
    }
}

let hidePassword = document.querySelector(".fa-eye");
let showPassword = document.querySelector(".fa-eye-slash");

hidePassword.addEventListener("click", () => {
	showPassword.style.display = "block";
	hidePassword.style.display = "none";

	if (password.type === "password") {
		password.type = "text"
	} else {
		password.type = "password"
	}
})

showPassword.addEventListener("click", () => {
	hidePassword.style.display = "block";
	showPassword.style.display = "none";

	if (password.type === "password") {
		password.type = "text"
	} else {
		password.type = "password"
	}
})

let SignInUser = (evt) => {
	evt.preventDefault();

	if (!validateEmail(email, evt) || !passwordName(password, evt) || !validateCheckbox(checkbox, evt)) {
		return;
	}

	signInWithEmailAndPassword(auth, email.value, password.value)
		.then((credentials) => {
			get(child(dbref, "UsersAuthList/" + credentials.user.uid)).then((snapshot) => {
				if (snapshot.exists) {
					sessionStorage.setItem(
						"user-info",
						JSON.stringify({
							firstname: snapshot.val().firstname,
							lastname: snapshot.val().lastname,
						})
					);
					sessionStorage.setItem("user-creds", JSON.stringify(credentials.user));
					let loader = document.querySelector(".load");
					loader.style.display = 'block';
					setTimeout(() => {
						window.location.href = "./bookappointment1.html";
					}, 2500);
				}
			});
		})
		.catch((error) => {
			alert(error.message);
			if(error.message) {
				window.location.href = './sign_up.html';
			}
			console.log(error.code);
			console.log(error.message);
		});
};

submitForm.addEventListener("submit", SignInUser);
