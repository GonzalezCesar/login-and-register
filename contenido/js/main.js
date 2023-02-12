const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

console.log(form);
form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  let messages = [];

  if (!name.value) {
    alert("incorrecto");
    messages.push("Name is requerid");
  }

  if (password.value.length <= 6) {
    /*alert("requerido");*/
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Password must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }

  if (messages.length > 0) {
    errorElement.innerHTML = `<div class="error">${messages[0]}</div>`;
  }

  if (errors === 0) {
    // Submit the form
    return
  }

  // Enviar formulario
  alert("Formulario enviado");
});
