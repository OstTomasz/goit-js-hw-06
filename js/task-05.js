let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (e) => {
  if (!e.currentTarget.value) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = e.currentTarget.value;
  }
});
