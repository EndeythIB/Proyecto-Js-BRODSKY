/* ATENCIÓN AGREGUE UNA FUNCIONALIDAD PARA DISTINGUIR CLIENTE Y ADMINISTRADOR, LA MISMA SE EJECUTA EN EL LOGIN, SI SE PONE UN NOMBRE DE USUARIO X VA A ENTRAR DIRECTAMENTE COMO CLIENTE, PERO SI SE INGRESA COMO ADMIN PIDE UNA CONTRASEÑA Y OFRECE OTRAS FUNCIONES (TRABAJO EN PROCESO) */


//Login

const texto = document.querySelector(".login");
const boton = document.querySelector(".boton");
const box = document.querySelector(".box--pass");
export let nombreInvitado;
function login() {
  if (texto.value == "admin") {
    chkAdmin();
    
  } else {
    localStorage.setItem("usuario", texto.value);
    cliente();
  }
}

texto.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    login();
  }
});

boton.onclick = function () {
  if (texto.value == "admin") {
    chkAdmin();
  } else {
    nombreInvitado = texto.value;
    cliente();
  }
};


//Inicio


function cliente() {
  localStorage.setItem("modo", "guest");
  window.location.href = "inicio.html";
}

//admin

function admin() {
 
  localStorage.setItem("usuario", "admin");
  localStorage.setItem("modo", "admin");
  window.location.href = "inicio.html";


}

const inputPass = document.createElement("INPUT");
inputPass.classList.add("pass");
inputPass.type = "password";
inputPass.placeholder = "Password";

function chkAdmin() {
  box.appendChild(inputPass);

  boton.onclick = function () {
    let userPass = inputPass.value;
    if (userPass == "123") {
      admin();
    }

 
  };

  inputPass.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      boton.onclick();
    }
  });
}
