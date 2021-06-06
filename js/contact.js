const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const text = document.querySelector("#text");
const texttError = document.querySelector("#textError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector(".message");


function validateForm(e){
	var isValidated = true;
	e.preventDefault();

	if (checkLength(name.value, 3) === true) {
		nameError.style.display = "none";
	} else {
		nameError.style.display = "block";
		isValidated = false;
	}
	if (checkLength(text.value, 3) === true) {
		texttError.style.display = "none";
	} else {
		textError.style.display = "block";
		isValidated = false;
	}
	if (validateEmail(email.value) === true){
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
		isValidated = false;
	}
	if (isValidated) {
		
		message.style.display = "block";
		form.style.display = "none";
	} else {
		form.false();
	}
	
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}

function checkLength(value, len) {
	if (value.trim().length > len) {
	 return true;
	} else {
		return false;
	}
}


form.addEventListener("submit", validateForm);