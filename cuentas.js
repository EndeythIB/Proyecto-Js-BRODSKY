class Usuarios {
    constructor(nombre, apellido, usuario, contraseña) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.usuario = usuario;
    }
}

const clienteEjemplo = new Usuarios("Joaquín", "Salvatierra", "joacodinamita", "123");
const admin = new Usuarios("admin", "admin", "admin", "123");

//HTML
const carrito = document.getElementById("carrito");
const btnAgregar = document.getElementById("botoncito");
const btnRegistrarse = document.createElement("BUTTON");
const btnLogin = document.createElement("BUTTON")
const navButton = document.getElementById("navButton");
const registro = document.getElementById("registro");
const listo = document.getElementById("listo");
const modalRegistrarse = document.getElementById("modalRegistrarse");
const welcome = document.getElementById("welcome");






function guest() {
//No podes ver el carrito ni agregar nuevos items.
welcome.innerHTML = `(${localStorage.getItem("usuario")}, estas en modo invitado. Regístrate para comprar)`;
carrito.style.display = "none";
btnAgregar.style.display = "none";
localStorage.setItem("modo", "guest");
}

function modoCliente() {
//Ves el carrito pero no podes agregar items.
welcome.innerHTML = `(Bienvenido ${localStorage.getItem("usuario")}, puedes ver tus compras en el carrito aqui)`;
btnAgregar.style.display = "none";
registro.style.display = "none";
carrito.style.display = "block";
localStorage.setItem("modo", "cliente");
}

function modoAdmin() {
welcome.innerHTML = `(Bienvenido señor, sientase libre de agregar los items que desee con este hermoso botón)`;
registro.style.display = "none";
carrito.style.display = "none";
localStorage.setItem("modo", "admin");

}

if (localStorage.getItem("modo") == "admin") {
    modoAdmin();
} else if (localStorage.getItem("modo") == "guest"){
    guest();

} else {
    modoCliente();
}

listo.onclick = function(){

    modoCliente();
    window.location.href = "inicio.html";
}