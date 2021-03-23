//form focus event
//input field DOM
const moveLegendField = Array.from(document.querySelectorAll("input.form-data"));

//show label on top when focused
moveLegendField.forEach((field) => {
	const moveLegend = (e) => {
		e.target.removeAttribute("placeholder");
		e.target.previousElementSibling.style.display = "block";
		e.target.parentElement.style.padding = "0.6em";
	}
	field.addEventListener("focus", moveLegend);

	field.addEventListener("blur", (e) => {
		if (e.target.value.length == 0) {
			const legend = e.target.previousElementSibling;
			legend.style.display = "none";
			e.target.setAttribute("placeholder", legend.innerHTML);
			e.target.parentElement.style.padding = "0.8em";
		} else {
			moveLegend(e);
		}	
	})
})


//take all input field to verify
const formInput = Array.from(document.querySelectorAll(".create-form__data__input"));

//DOM for all input fields
const name = document.getElementById("name-input");
const email = document.getElementById("email-input");
const userType = document.getElementById("user-type-input");
const password = document.getElementById("password-input");

//function to add attribute to show error message
const showError = (index, message) => {
	formInput[index].setAttribute("data-error", message);
	formInput[index].setAttribute("data-error-visible", true);
};

//function to hide error when input is valid
const hideError = (index) => {
	formInput[index].removeAttribute("data-error");
	formInput[index].removeAttribute("data-error-visible");
};

//validation functions
let valid = true;

//name validation
const validateName = () => {
	const nameRegex = /^[A-Za-z]+$/;
	if (!nameRegex.test(name.value) && name.value.length > 0) {
 		valid = false;
 		message = "Please enter your name";
		showError(0, message);		
 	} else {
 		valid;
 		hideError(0);	
 	}
 	return valid;
};
name.addEventListener("blur", validateName);


//email validation
const validateEmail = () => {
	const regexEmail = /.+@.+\..+/;
 	if (!regexEmail.test(email.value)) {
 		valid = false;
 		message = "Please enter a valid email address";
 		showError(1, message);
 	} else {
 		valid;
 		hideError(1);
 	}
 	return valid;
};
email.addEventListener("blur", validateEmail);