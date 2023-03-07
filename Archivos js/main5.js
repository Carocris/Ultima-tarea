const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const birthdateInput = document.getElementById('birthdate');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const errorDiv = document.getElementById('error');


form.addEventListener('submit', function(event) {
  let messages = [];
  if (nameInput.value === '' || nameInput.value == null) {
    messages.push('Por favor ingrese su nombre completo.');
  }
  if (emailInput.value === '' || emailInput.value == null) {
    messages.push('Por favor ingrese su correo electrónico.');
  }
  if (birthdateInput.value === '' || birthdateInput.value == null) {
    messages.push('Por favor ingrese su fecha de nacimiento.');
  }
  if (passwordInput.value.length <= 6) {
    messages.push('La contraseña debe tener al menos 6 caracteres.');
  }
  if (passwordInput.value !== confirmPasswordInput.value) {
    messages.push('Las contraseñas no coinciden.');
  }
  if (colorInput.value === '' || colorInput.value == null) {
    messages.push('Por favor seleccione un color favorito.');
  }
  if (messages.length > 0) {
    event.preventDefault();
    errorDiv.innerText = messages.join('\n');
  }
});


