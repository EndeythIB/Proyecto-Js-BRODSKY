const botoncito = document.getElementById("botoncito");
const nuevoItem = document.getElementById("newItem");
const tarjeta = document.createElement("DIV");
const numero = document.getElementById("numero");
const carrito = document.getElementById("carrito");



class Tarjetas {
    constructor(titulo, precio, imagen) {
        this.titulo = titulo;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.enCarrito = false;
    }

    agregar() {
        let item = document.createElement("DIV");
        item.innerHTML = `<div class="col mb-5"><div class="card h-100"><!-- Product image--><img class="card-img-top" src=${this.imagen} alt="..." />    <!-- Product details-->    <div class="card-body p-4">        <div class="text-center">            <!-- Product name-->            <h5 class="fw-bolder">${this.titulo}</h5>            <!-- Product price-->            $ ${this.precio}        </div>    </div>    <!-- Product actions-->    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">        <div class="text-center"><button class="btn btn-outline-dark mt-auto">Pal Carrito BB</button></div>    </div></div></div> `;
        nuevoItem.appendChild(item);
    }

    agregarCarrito() {
        addCarrito.push(this);
    }
}

botoncito.onclick = function(event) {
    event.preventDefault(); //para evitar que se recargue la página
    let titulo = prompt("titulo del producto:");
    let precio = prompt("precio:");
    let imagen = prompt ("Agregue link de imagen seleccionada");

    let producto = new Tarjetas(titulo, precio, imagen);
    productosActivos.push(producto);
    listar();

}

//Productos predeterminados

const libro1 = new Tarjetas("IT", 1700, "https://imagessl3.casadellibro.com/a/l/t7/93/9788497593793.jpg");
const libro2 = new Tarjetas("Carrie", 1200, "https://4.bp.blogspot.com/-Z-InNV4zRCE/VsC6_aGQ_kI/AAAAAAAAHJg/-eoCnu0nbGk/s1600/carrie_stephen_king.png");
const libro3 = new Tarjetas("Alta cocina", 2800, "https://media.ambito.com/p/1722aa28a404faff2cb40fd6064b2015/adjuntos/239/imagenes/038/387/0038387178/el-dipyjpg.jpg");
const libro4 = new Tarjetas("Programación para tontos", 1700, "https://www.escuelapedia.com/wp-content/uploads/Nerds.jpg");
const libro5 = new Tarjetas("No te frustres con Js", 8000, "https://media.cdn.eldestapeweb.com/eldestape/072021/1626727843790/Mirtha-Legrand-preocupada-cuidar.jpg?&cw=600&ch=365");
const libro6 = new Tarjetas("Programar en SCUMM", 200, "https://topesdegama.com/app/uploads-topesdegama.com/2017/12/ScummVM-1.jpg");
const libro7 = new Tarjetas("Animales peligrosos", 1700, "https://otakukart.com/wp-content/uploads/2021/05/Pokemon-2019-Episode-68-Cover.jpg");
const libro8 = new Tarjetas("Poemario de Yayo N°8", 300, "https://media.elmostrador.cl/2017/07/yayo.jpg");
let productosActivos = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8];


function listar() {
    while(nuevoItem.firstChild) {
        nuevoItem.firstChild.remove()
    }
    for(let i = (productosActivos.length - 1); i >= 0; i--) {
        let item = document.createElement("DIV");
        item.classList.add("col", "mb-5");
        nuevoItem.appendChild(item);
        let card = document.createElement("DIV");
        card.classList.add("card", "h-100");
        item.appendChild(card);
        let imagen = document.createElement("IMG");
        imagen.classList.add("card-img-top");
        imagen.src = productosActivos[i].imagen;
        card.appendChild(imagen);
        let cardBody = document.createElement("DIV");
        cardBody.classList.add("card-body", "p-4");
        card.appendChild(cardBody);
        let cardText = document.createElement("DIV");
        cardText.classList.add("text-center");
        cardBody.appendChild(cardText);
        let cardTitulo = document.createElement("H5");
        cardTitulo.classList.add("fw-bolder");
        cardTitulo.innerHTML = productosActivos[i].titulo;
        cardText.appendChild(cardTitulo);
        let cardPrecio = document.createElement("P");
        cardPrecio.classList.add("fw-regular");
        cardPrecio.innerHTML = `$${productosActivos[i].precio}`;
        cardText.appendChild(cardPrecio);




        let btnCarro = document.createElement("BUTTON");
        btnCarro.innerHTML = "Agregar al carrito";
        btnCarro.onclick = function() {
        addCarrito.push(productosActivos[i]);
        numero.innerHTML = addCarrito.length;
       }
       btnCarro.classList.add("btn", "btn-outline-dark", "mt-auto");
       cardText.appendChild(btnCarro);
    }

} 

listar();

//Carrito

let addCarrito = [];


function listarCarrito() {
  let compras = "";
  for (let i = 0; i < addCarrito.length; i++) {
    compras = compras.concat(`    - ${addCarrito[i].titulo}\n`); //el espacio que hay en ese string es para que quede la identación en el alert
  }
  return compras;
}

function sumarPreciosCarrito() {
  let total = 0;
  for (let i = 0; i < addCarrito.length; i++) {
    total = total + addCarrito[i].precio;
  }
  return total;
}

carrito.onclick = function(e) {
    e.preventDefault();
    alert(`Tu carrito:\n${listarCarrito()}\nTotal a pagar:\n     $${sumarPreciosCarrito()}`);
}