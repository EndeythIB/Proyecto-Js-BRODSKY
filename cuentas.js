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



function guest() {
//No podes ver el carrito ni agregar nuevos items.
carrito.style.display = "none";
btnAgregar.style.display = "none";
alert(`${localStorage.getItem("usuario")}, entraste como usuario invitado, si deseas realizar una compra, deberás registrarte.`);

}

function modoCliente() {
//Ves el carrito pero no podes agregar items.
alert(`${localStorage.getItem("usuario")}, bienvenido al modo cliente, ahora puedes mandar productos al carrito para continuar con tu compra!.`);
registro.style.display = "none";
carrito.style.display = "block";
}

function modoAdmin() {
registro.style.display = "none";
carrito.style.display = "none";
alert("modo admin");


}

if (localStorage.getItem("usuario") == "admin") {
    modoAdmin()
} else {
    guest();
}

listo.onclick = function(e){
    e.preventDefault();
    modoCliente();
}