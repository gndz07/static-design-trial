//form focus event
//input field DOM
const moveLegendField = Array.from(document.querySelectorAll("input.form-data"));
console.log(moveLegendField);

//show label on top when focused
moveLegendField.forEach((field) => {
	field.addEventListener("focus", (e) => {
		e.target.removeAttribute("placeholder");
		e.target.previousElementSibling.style.display = "block";
	})

	field.addEventListener("blur", (e) => {
		const legend = e.target.previousElementSibling;
		legend.style.display = "none";
		e.target.setAttribute("placeholder", legend.innerHTML);
	})
})


//take all input field to verify
const formInput = Array.from(document.querySelectorAll(".create-form__data__input"));


