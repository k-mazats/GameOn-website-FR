// DOM elements

const form = document.querySelector("form");
const firstNameInput = document.getElementById("first");
const lastNameInput = document.getElementById("last");
const emailInput = document.getElementById("email");
const birthdateInput = document.getElementById("birthdate");
const quantityInput = document.getElementById("quantity");
const locationInput = document.querySelectorAll(".checkbox-input[type=radio]");
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
	let target;
	if (NodeList.prototype.isPrototypeOf(element)) {
		target = element[0].parentNode;
	} else {
		target = element.parentNode;
	}
    target.setAttribute("data-error-visible", true);
    target.setAttribute("data-error", message);
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
	let regex = /(\d{4})-(\d{2})-(\d{2})/;
	return regex.test(birthdateInput.value);
}

// quantity
function quantityValidation() {
	let regex = /^[0-9]+$/;
	return regex.test(quantityInput.value);
}

// localisation
function locationValidation() {
	for (let radio of locationInput) {
		if (radio.checked === true) return true;
	}
	return false;
}

//checkbox
function checkboxValidation() {
	return checkboxInput.checked;
}

// global form validation
function validate(event) {
	event.preventDefault();
	let isValid = true;
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
		isInvalid(locationInput, errorMessages.location);
	}
	if (!checkboxValidation()) {
		isValid = false;
		isInvalid(checkboxInput, errorMessages.checkbox);
	}
	if (isValid) {
		form.submit();
	}
}
