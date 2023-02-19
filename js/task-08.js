const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola powinny zostać wypełnione!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
