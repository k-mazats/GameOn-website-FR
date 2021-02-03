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
	birthdate: "Veuillez entrer une date de naissance.",
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

//valid alert
function isValid() {
	form.style.display = "none";
}

//delete previous alerts
function removeAlerts() {
	let invalidFields = document.querySelectorAll(
		'.formData[data-error-visible="true"]'
	);
	for (let field of invalidFields) {
		field.setAttribute("data-error-visible", false);
		field.setAttribute("data-error", "");
	}
}
// first name
function firstValidation() {
	let inputValue = firstNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
	else return false;
}

// last name
function lastValidation() {
	let inputValue = lastNameInput.value;
	if (inputValue !== null && inputValue.length >= 2) return true;
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
    let isValidInput = true;
    removeAlerts();
	if (!firstValidation()) {
		isValidInput = false;
		isInvalid(firstNameInput, errorMessages.firstName);
	}
	if (!lastValidation()) {
		isValidInput = false;
		isInvalid(lastNameInput, errorMessages.lastName);
	}
	if (!emailValidation()) {
		isValidInput = false;
		isInvalid(emailInput, errorMessages.email);
	}
	if (!birthdateValidation()) {
		isValidInput = false;
		isInvalid(birthdateInput, errorMessages.birthdate);
	}
	if (!quantityValidation()) {
		isValidInput = false;
		isInvalid(quantityInput, errorMessages.quantity);
	}
	if (!locationValidation()) {
		isValidInput = false;
		isInvalid(locationInput, errorMessages.location);
	}
	if (!checkboxValidation()) {
		isValidInput = false;
		isInvalid(checkboxInput, errorMessages.checkbox);
	}
	if (isValidInput) {
		isValid();
	}
}
