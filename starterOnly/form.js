// DOM elements

const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
const checkboxInput = document.getElementById("checkbox1");

const errorMessages = {
	lastName: "Veuillez entrer un nom comportant 2 caractères ou plus.",
	firstName: "Veuillez entrer un prénom comportant 2 caractères ou plus.",
	email: "Veuillez entrer une adresse email valide.",
	birthdate:
		"Veuillez entrer une date de naissance respectant le format JJ/MM/AAAA.",
	quantity: "Veuillez entrer un nombre valide.",
	location: "Veuillez choisir une ville.",
	checkbox: "Veuillez accepter les conditions d'utilisations.",
};

//functions

//invalid alert
function isInvalid(element, message) {
	let invalidAlert = document.createElement("div");
	invalidAlert.classList.add("form-alert");
	let br = document.createElement("br");
	invalidAlert.innerHTML = message;
	if (element !== radioButtons) {
		element.parentElement.append(invalidAlert);
		element.parentElement.append(br);
	} else {
		element[0].parentElement.append(invalidAlert);
		element[0].parentElement.append(br);
	}
}

// first name
function firstValidation() {
	let inputValue = firstNameInput.value;
	if (inputValue !== null && inputValue.length > 2) return true;
	else return false;
}

// last name
function lastValidation() {
	let inputValue = lastNameInput.value;
	if (inputValue !== null && inputValue.length > 2) return true;
	else return false;
}

//email
function emailValidation() {
	let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
	return regex.test(emailInput.value);
}

//birthdate
function birthdateValidation() {
	let regex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/;
	return regex.test(birthdateInput.value);
}

// quantity
function quantityValidation() {
	let regex = /^[0-9]+$/;
	return regex.test(quantityInput.value);
}

// localisation
function locationValidation() {
	for (let radio of radioButtons) {
		if (radio.checked === true) return true;
	}
	return false;
}

//checkbox
function checkboxValidation() {
	return checkboxInput.checked;
}

// removes previous alerts

function removeAlerts() {
	let alertBoxes = document.getElementsByClassName("form-alert");
	if (alertBoxes.length > 0) {
		for (let alert in alertBoxes) {
			alert.remove();
		}
	}
}

// global form validation
function validate(event) {
	event.preventDefault();
	let isValid = true;
	removeAlerts();
	if (!firstValidation()) {
		isValid = false;
		isInvalid(firstNameInput, errorMessages.firstName);
	}
	if (!lastValidation()) {
		isValid = false;
		isInvalid(lastNameInput, errorMessages.lastName);
	}
	if (!emailValidation()) {
		isValid = false;
		isInvalid(emailInput, errorMessages.email);
	}
	if (!birthdateValidation()) {
		isValid = false;
		isInvalid(birthdateInput, errorMessages.birthdate);
	}
	if (!quantityValidation()) {
		isValid = false;
		isInvalid(quantityInput, errorMessages.quantity);
	}
	if (!locationValidation()) {
		isValid = false;
		isInvalid(radioButtons, errorMessages.location);
	}
	if (!checkboxValidation()) {
		isValid = false;
		isInvalid(checkboxInput, errorMessages.checkbox);
	}
	if (isValid) {
		form.submit();
	}
}
