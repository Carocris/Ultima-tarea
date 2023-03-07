function validarRegistro() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;
  
    if (username == "") {
      alert("Por favor, ingrese un nombre de usuario");
      return false;
    }
  
    if (email == "") {
      alert("Por favor, ingrese una dirección de correo electrónico");
      return false;
    }
  
    if (password == "") {
      alert("Por favor, ingrese una contraseña");
      return false;
    }
  
    if (password != confirm_password) {
      alert("Las contraseñas no coinciden");
      return false;
    }
  
    return true;



  }

  document.querySelector('form').addEventListener('submit', function() {
    window.location.href = 'profile.html';
  });
  
  

