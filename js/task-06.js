const validationInput = document.querySelector("#validation-input");
validationInput.addEventListener("input", (event) => {
  if (event.currentTarget.value.length === 6) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
  }
});
