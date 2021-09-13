//HTML
const carrito = document.getElementById("carrito");
const btnAgregar = document.getElementById("botoncito");
const btnRegistrarse = document.createElement("BUTTON");
const btnLogin = document.createElement("BUTTON")
const navButton = document.getElementById("navButton");
const registro = document.getElementById("registro");
const login = document.getElementById("login");
const modalRegistrarse = document.getElementById("modalRegistrarse");
const welcome = document.getElementById("welcome");
const catalogo = document.getElementById("botonJson");
const cerrarS = document.getElementById("close");
const regUsername = document.getElementById("regUsername");
const regContraseña = document.getElementById("regContraseña");
const regListo = document.getElementById("regListo");
const logUsername = document.getElementById("logUsername");
const logContraseña = document.getElementById("logContraseña");
const listo = document.getElementById("listo");
const loginModal = document.getElementById("modaLogin")
const divErrorLogin = document.getElementById("divError")


const errorLogin = document.createElement("P");
errorLogin.style.color = "red";
errorLogin.style.textAlign = "center";
errorLogin.style.paddingTop = "5px";

errorLogin.innerHTML = "INFORMACIÓN INCORRECTA"
divErrorLogin.appendChild(errorLogin);
$("#divError").hide();

//setear admin
localStorage.setItem("admin", "admin");
localStorage.setItem("passAdmin", "123")

//Definir modo usuario
if (localStorage.getItem("modo") == "cliente") {
    modoCliente();
} else if (localStorage.getItem("modo") == "admin"){
    modoAdmin();
} else {
    guest();
}

//Show modal #oferta solo en modo cliente
$(window).on('load', function() {
    if (localStorage.getItem("modo") == "cliente") {
        $('#oferta').modal('show');
    }
});


regListo.onclick = function() {
    localStorage.setItem("user", regUsername.value);
    localStorage.setItem("pass", regContraseña.value);
}
listo.onclick = function() {
    if (logUsername.value == localStorage.getItem("user") && logContraseña.value == localStorage.getItem("pass")) {
        modoCliente();
        location.reload();
    } else if (logUsername.value == localStorage.getItem("admin") && logContraseña.value == localStorage.getItem("passAdmin")) {
        modoAdmin();
        location.reload();
    }else {
            $("#divError").show(0, function(){
            $("#divError").delay(2500);
            $("#divError").hide(0);
        });
    }
}

//Cerrar Sesión
cerrarS.onclick = function() {
    guest();
    location.reload();
}


//Modo invitado
function guest() {
welcome.innerHTML = `(Bienvenido, estas en modo invitado. Regístrate para comprar)`;
carrito.style.display = "none";
btnAgregar.style.display = "none";
cerrarS.style.display = "none";
localStorage.setItem("modo", "guest");
$(".secretBtn").hide();
}

//Modo cliente
function modoCliente(event) {
welcome.innerHTML = `(Bienvenido ${localStorage.getItem("user")}, puedes ver tus compras en el carrito aqui)`;
btnAgregar.style.display = "none";
catalogo.style.display = "none";
registro.style.display = "none";
login.style.display = "none";
carrito.style.display = "block";
localStorage.setItem("modo", "cliente");
$(".secretBtn").show();
}
//Modo admin
function modoAdmin() {
welcome.innerHTML = `(Bienvenido señor, sientase libre de agregar los items que desee con este hermoso botón)`;
registro.style.display = "none";
login.style.display = "none";
catalogo.style.display = "none";
carrito.style.display = "none";
localStorage.setItem("modo", "admin");
$(".secretBtn").hide();
}


