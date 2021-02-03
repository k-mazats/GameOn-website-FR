// DOM elements

const form = document.querySelector("form");

//inputs validations

function firstValidation() {
	let inputValue = document.getElementById("first").value;
	if (inputValue !== null && inputValue.length > 2) return true;
	else return false;
}

function lastValidation() {
	let inputValue = document.getElementById("last").value;
	if (inputValue !== null && inputValue.length > 2) return true;
	else return false;
}

function emailValidation() {
	let regex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
	let inputValue = document.getElementById("email").value;
	return regex.test(inputValue);
}

function quantityValidation() {
	let regex = /^[0-9]+$/;
	let inputValue = document.getElementById("quantity").value;
	return regex.test(inputValue);
}

function locationValidation() {
	let radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
	for (let radio of radioButtons) {
		if (radio.checked === true) return true;
	}
	return false;
}

function checkboxValidation() {
	let inputValue = document.getElementById("checkbox1").checked;
	return inputValue;
}

document
	.getElementById("button")
	.addEventListener("click", function formValidation(event) {
		event.preventDefault();
		let isValid = true;
		if (!firstValidation()) {
			isValid = false;
		} else if (!lastValidation()) {
			isValid = false;
		} else if (!emailValidation()) {
			isValid = false;
		} else if (!quantityValidation()) {
			isValid = false;
		} else if (!locationValidation()) {
			isValid = false;
		} else if (!checkboxValidation()) {
			isValid = false;
		}
		if (isValid) {
			form.submit();
		}
	});
