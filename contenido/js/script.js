document.getElementById("iniciar").addEventListener("click", iniciarSecion);
document.getElementById("registrarse").addEventListener("click", register);
window.addEventListener("resize", anchopagina);

var loginregisterbox = document.querySelector(".loginregisterbox");
var formulariologin = document.querySelector(".formulario-login");
var formularioregister = document.querySelector(".formularioregister");
var login_box = document.querySelector(".login-box");
var register_box = document.querySelector(".register-box");

function anchopagina() {
  if (window.innerWidth > 850) {
    login_box.style.display = "block";
    register_box.style.display = "block";
  } else {
    register_box.style.display = "block";
    register_box.style.opacity = "1";
    login_box.style.display = "none";
    formulariologin.style.display = "block";
    formularioregister.style.display = "none";
    loginregisterbox.style.left = "0px";
  }
}

anchopagina();

function iniciarSecion() {
  if (window.innerWidth > 850) {
    formularioregister.style.display = "none";
    loginregisterbox.style.left = "10px";
    formulariologin.style.display = "block";
    register_box.style.opacity = "1";
    login_box.style.opacity = "0";
  } else {
    formularioregister.style.display = "none";
    loginregisterbox.style.left = "0px";
    formulariologin.style.display = "block";
    register_box.style.opacity = "block";
    login_box.style.opacity = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formularioregister.style.display = "block";
    loginregisterbox.style.left = "410px";
    formulariologin.style.display = "none";
    register_box.style.opacity = "0";
    login_box.style.opacity = "1";
  } else {
    formularioregister.style.display = "block";
    loginregisterbox.style.left = "0px";
    formulariologin.style.display = "none";
    register_box.style.opacity = "none";
    login_box.style.opacity = "block";
    login_box.style.opacity = "1";
  }
}

///////////////////////////////////////////////

const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("formlogin");
const form2 = document.getElementById("registerform");
const errorElement = document.getElementById("error");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const confirmPassword = document.querySelector("#confirmPassword");
const usernameError = document.querySelector("#usernameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const confirmPasswordError = document.querySelector("#confirmPasswordError");

console.log(form);
form.addEventListener("submit", (e) => {
  console.log(e);
  e.preventDefault();
  let messages = [];

  if (!name.value) {
    alert("pene");
    messages.push("Name is requerid");
  }

  if (password.value.length <= 6) {
    messages.push("Password must be longer than 6 characters");
  }

  if (password.value.length >= 20) {
    messages.push("Passwrod must be less than 20 characters");
  }

  if (password.value === "password") {
    messages.push("Password cannot be password");
  }

  if (messages.length > 0) {
    errorElement.innerText = messages.join(", ");
  }
  let errors = 0;
});


form2.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];

  if (username.value === "") {
    usernameError.textContent = "Username is required";
    errors++;
  } else {
    usernameError.textContent = "";
  }

  if (email.value === "") {
    emailError.textContent = "Email is required";
    errors++;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = "Email is not valid";
    errors++;
  } else {
    emailError.textContent = "";
  }

  if (password.value === "") {
    passwordError.textContent = "Password is required";
    errors++;
  } else {
    passwordError.textContent = "";
  }

  if (confirmPassword.value === "") {
    confirmPasswordError.textContent = "Confirm password is required";
    errors++;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    errors++;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (errors === 0) {
    // Submit the form
  }
});
