const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errorElement = document.getElementById("error");


console.log(form);
form.addEventListener("submit", (event) => {
  console.log(event);
  event.preventDefault();
  let messages = [];

  if (!username.value) {
    alert("incorrecto");
    messages.push("Name is requerid");
  }

  // Validación de nombre de usuario
  if (username.value.length >= 5) {
    /*alert("El nombre de usuario debe tener al menos 5 caracteres");*/
    messages.push("El nombre de usuario debe tener al menos 5 caracteres");
  }

  // Validación de correo electrónico
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    /*alert("Por favor ingrese un correo electrónico válido");*/
    messages.push("Por favor ingrese un correo electrónico válido");
  }

  // Validación de contraseña
  if (password.value.length <= 8) {
    /*alert("La contraseña debe tener al menos 8 caracteres");*/
    messages.push("La contraseña debe tener al menos 8 caracteres");
  }

  if (
    !/\d/.test(password.value) ||
    !/[a-z]/.test(password.value) ||
    !/[A-Z]/.test(password.value)
  ) {
    /*alert("La contraseña debe contener al menos un número, una letra minúscula y una mayúscula");*/
    messages.push(
      "La contraseña debe contener al menos un número, una letra minúscula y una mayúscula"
    );
  }

  // Validación de confirmación de contraseña
  if (password.value !== confirmPassword.value) {
    /*alert("La confirmación de la contraseña no coincide con la contraseña");*/
    messages.push(
      "La confirmación de la contraseña no coincide con la contraseña"
    );
  }

  if (messages.length > 0) {
    errorElement.innerHTML = `<div class="error">${messages[0]}</div>`;
  }

  if (errors === 0) {
    // Submit the form
  }

  // Enviar formulario
  alert("Formulario enviado");
});
