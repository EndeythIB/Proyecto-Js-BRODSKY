const botoncito = document.getElementById("botoncito");
const nuevoItem = document.getElementById("newItem");
const tarjeta = document.createElement("DIV");
const numero = document.getElementById("numero");
const carrito = document.getElementById("carrito");
const header = document.getElementById("header");

//modal-carrito
const contenidoCarrito = document.getElementById("contenidoCarrito");
const parrafoCarrito = document.createElement("P");
parrafoCarrito.style.color = "white";
const bodyCarrito = document.getElementById("bodyCarrito");
bodyCarrito.style.backgroundColor = "black";
bodyCarrito.style.borderRadius = "25px";
const vaciar = document.getElementById("vaciar");
const comprar = document.getElementById("comprar");

//boton-catalogo
const modalCatalogo = document.getElementById("divCatalogo");

//preview-card
const preview = document.getElementById("preview");

//Constructor Cards Productos
class Tarjetas {
    constructor(titulo, precio, imagen) {
        this.titulo = titulo;
        this.precio = parseFloat(precio);
        this.imagen = imagen;
        this.enCarrito = false;
    }



    agregarCarrito() {
        addCarrito.push(this);
    }
}

//Imagenes logo/acercaDe insert and events -BOTON SECRETO-

$('.jqPractice').prepend("<a class='navbar-brand' href='#!''><img class='loguito' src='img/libropng.jpg' alt=''></a>");

$('.loguito').click(function(){
    $('.loguito').fadeOut('slow', function() {
        $(".loguito").fadeIn(1000);
    });
})

$('.imgAbt').prepend("<a href='#!'><img class='imgAbout' src='img/librin.png'></a>");

$(".imgAbout").click(function(){
    $('.imgAbout').fadeOut('slow', function() {
        $(".imgAbout").fadeIn(1000);
    })
})

$('.headCont').prepend("<button type='button' data-bs-toggle='modal' data-bs-target='#mentira' class='secretBtn btn'>📖</button>");

$('.secretBtn').css({"position" : "absolute"})

$('.secretBtn').on('mouseenter',function(e){
    let maxX = $(".jqPractice").width() - $(this).width();
    let maxY = $(".jqPractice").height() - $(this).height();
    $(this).css({
        'left':getRandomInt(0, maxX),
        'top':getRandomInt(0, maxY)
    });
});
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Form que va a ser agregado en la función dentro de botoncito.onclick
const form = document.createElement("FORM");
form.classList.add("form");
form.style.display = "flex";
form.style.justifyContent = "center";
form.style.gap = "20px";
form.style.marginTop = "40px";
const inProducto = document.createElement("INPUT"); 
inProducto.placeholder = "Nombre del producto";
inProducto.classList.add("form-control");
const inPrecio = document.createElement("INPUT");
inPrecio.placeholder = "Precio del producto";
inPrecio.setAttribute("type", "number");
inPrecio.classList.add("form-control");
const inUrl = document.createElement("INPUT");
inUrl.placeholder = "URL imagen deseada";
inUrl.setAttribute("type", "url");
inUrl.classList.add("form-control");
const addProducto = document.createElement("BUTTON");
addProducto.innerHTML = "Agregar";
addProducto.classList.add("btn","btn-light");
const resetProducto = document.createElement("BUTTON");
resetProducto.innerHTML = "Reset";
resetProducto.setAttribute("type", "reset");
resetProducto.classList.add("btn","btn-light");
const addError = document.createElement("DIV")
addError.classList.add("alerta-error");
header.appendChild(addError);
const reto = document.createElement("P");
reto.style.color = "red";
reto.style.textAlign = "center";
reto.style.paddingTop = "50px";

// Preview IMG
const addCard = document.createElement("DIV");
addCard.classList.add("col", "mb-5", "addCard");
addCard.style.paddingTop = "50px";
let card = document.createElement("DIV");
card.classList.add("card", "h-100");
card.style.boxShadow = "0px 5px 5px 0 rgba(0, 0, 0, 0.6)";  
addCard.appendChild(card);
let imgCard = document.createElement("IMG");
imgCard.classList.add("card-img-top");
imgCard.src = ""
imgCard.setAttribute("onerror", "this.src='https://cdn1.iconfinder.com/data/icons/rounded-black-basic-ui/139/Photo_Add-RoundedBlack-512.png'")
card.appendChild(imgCard);
let cardBody = document.createElement("DIV");
cardBody.classList.add("card-body", "p-4");
card.appendChild(cardBody);
let cardText = document.createElement("DIV");
cardText.classList.add("text-center");
cardBody.appendChild(cardText);
let cardTituloPrev = document.createElement("H5");
cardTituloPrev.classList.add("fw-bolder");
cardTituloPrev.innerHTML = "";
cardText.appendChild(cardTituloPrev);
let cardPrecioPrev = document.createElement("P");
cardPrecioPrev.classList.add("fw-regular");
cardPrecioPrev.innerHTML = "";
cardText.appendChild(cardPrecioPrev);

//listeners 

inProducto.addEventListener("input", updateTitulo);
inPrecio.addEventListener("input", updatePrecio);
inUrl.addEventListener("input", updateImg);

header.appendChild(addCard);
$(".addCard").hide();

function updateTitulo(e) {
    header.appendChild(addCard);
    $(".addCard").fadeIn(500);
    cardTituloPrev.innerHTML = e.target.value;
}

function updatePrecio(e) {
    header.appendChild(addCard);
    $(".addCard").fadeIn(500);
    cardPrecioPrev.innerHTML = "$" + e.target.value;
}

function updateImg(e) {
    header.appendChild(addCard);
    $(".addCard").fadeIn(500);
    imgCard.src = e.target.value; 
}

header.appendChild(addCard);
$(".addCard").hide();

reto.innerHTML = "(DEBES LLENAR TODOS LOS CAMPOS)"
addError.appendChild(reto);
$(".alerta-error").hide();

//Variables de productos
let titulo
let precio
let imagen


//NavButton Agregar Item
botoncito.onclick = function() {
    event.preventDefault(event); //para evitar que se recargue la página
    header.appendChild(form);
    form.appendChild(inProducto);
    form.appendChild(inPrecio);
    form.appendChild(inUrl);
    form.appendChild(addProducto);
    form.appendChild(resetProducto);
    header.appendChild(addCard);
}


//FormButton Agregar
addProducto.onclick = function() {
    event.preventDefault(event);
    titulo = inProducto.value;
    precio = inPrecio.value;
    imagen = inUrl.value;
  
    if (titulo == "" || precio == "" || imagen == "") {
        header.appendChild(addError);
        
        addError.appendChild(reto);
        $(".alerta-error").show(0, function(){
            $(".alerta-error").delay(2500);
            $(".alerta-error").hide(0);
        });
        
    } else {
    let producto = new Tarjetas(titulo, precio, imagen);
    productosActivos.push(producto);
    
    listar();

    header.appendChild(addCard);
    $(".addCard").hide(500)

    inProducto.value = "";
    inPrecio.value = "";
    inUrl.value = "";
    cardTituloPrev.innerHTML = "";
    imgCard.src = "";
    cardPrecioPrev.innerHTML = "";
}
}

//FormButton Reset
resetProducto.onclick = function() {
    
    $(".addCard").hide(500);
    inProducto.value = "";
    inPrecio.value = "";
    inUrl.value = "";
    cardTituloPrev.innerHTML = "";
    imgCard.src = "";
    cardPrecioPrev.innerHTML = "";
}

//Productos predeterminados

const libro1 = new Tarjetas("IT", 1700, "https://imagessl3.casadellibro.com/a/l/t7/93/9788497593793.jpg");
const libro2 = new Tarjetas("Carrie", 1200, "https://4.bp.blogspot.com/-Z-InNV4zRCE/VsC6_aGQ_kI/AAAAAAAAHJg/-eoCnu0nbGk/s1600/carrie_stephen_king.png");
const libro3 = new Tarjetas("Alta cocina", 2800, "https://media.ambito.com/p/1722aa28a404faff2cb40fd6064b2015/adjuntos/239/imagenes/038/387/0038387178/el-dipyjpg.jpg");
const libro4 = new Tarjetas("Programación para tontos", 1700, "https://http2.mlstatic.com/D_NQ_NP_922100-MCO26409858580_112017-O.jpg");
const libro5 = new Tarjetas("No te frustres con Js", 8000, "https://media.cdn.eldestapeweb.com/eldestape/072021/1626727843790/Mirtha-Legrand-preocupada-cuidar.jpg?&cw=600&ch=365");
const libro6 = new Tarjetas("Programar en SCUMM", 200, "https://topesdegama.com/app/uploads-topesdegama.com/2017/12/ScummVM-1.jpg");
const libro7 = new Tarjetas("Animales peligrosos", 1700, "https://otakukart.com/wp-content/uploads/2021/05/Pokemon-2019-Episode-68-Cover.jpg");
const libro8 = new Tarjetas("Poemario de Yayo N°8", 300, "https://media.elmostrador.cl/2017/07/yayo.jpg");
const libro9 = new Tarjetas("Maestro de la seducción", 3900, "https://cdn.dribbble.com/users/1012982/screenshots/4551456/johnny-bravo.jpg?compress=1&resize=400x300");
const libro10 = new Tarjetas("Como mover el bote", 820, "https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/penguins-of-madagascar/characters/julien-character-web-desktop.png?height=0&width=480&matte=true&crop=false");
const libro11 = new Tarjetas("Diario de una Pasión", 2400, "https://caraotadigital.org/wp-content/uploads/2020/08/Lo-mejor-de-dos-milanesas-de-pollo-rellenas-de-pure-de-papa-Video.jpg");
const libro12 = new Tarjetas("Marketing avanzado", 1750, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apu-1582840418.jpeg?crop=1.00xw:0.835xh;0,0.0853xh&resize=1200:*");
const libro13 = new Tarjetas("Malas ideas para un libro", 8900, "https://i.ibb.co/w7z9SqW/no-se.png");
const libro14 = new Tarjetas("YO NO SE LEER", 9780, "https://i.pinimg.com/736x/f0/5d/b6/f05db68d54cfbfb01dabfed24c5ddaba.jpg");
const libro15 = new Tarjetas("Guia rapida a CS 1.6", 680, "https://highxtar.com/wp-content/uploads/2020/06/thumb-counter-strike-1.6.jpg");
const libro16 = new Tarjetas("Tecnicas de depilación", 3900, "https://api.time.com/wp-content/uploads/2016/12/chewbacca-sings-silent-night.jpg?w=824&quality=70");
let productosActivos = [libro1, libro2, libro3, libro4, libro5, libro6, libro7, libro8, libro9, libro10, libro11, libro12, libro13, libro14, libro15, libro16];

export function listar() {
    if (localStorage.getItem("modo") == "cliente") {
    while(nuevoItem.firstChild) {
        nuevoItem.firstChild.remove()
    }
    for(let i = (productosActivos.length - 1); i >= 0; i--) {
        let item = document.createElement("DIV");
        item.classList.add("col", "mb-5");
        nuevoItem.appendChild(item);
        let card = document.createElement("DIV");
        card.classList.add("card", "h-100");
        card.style.boxShadow = "0px 5px 5px 0 rgba(0, 0, 0, 0.6)";  
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
} else {
    while(nuevoItem.firstChild) {
        nuevoItem.firstChild.remove()
    }
    for(let i = (productosActivos.length - 1); i >= 0; i--) {
        let item = document.createElement("DIV");
        item.classList.add("col", "mb-5");
        nuevoItem.appendChild(item);
        let card = document.createElement("DIV");
        card.classList.add("card", "h-100");
        card.style.boxShadow = "0px 5px 5px 0 rgba(0, 0, 0, 0.6)";  
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
          
    }
}
}

listar();


//Carrito

let addCarrito = [];


function listarCarrito() {
  let compras = "";
  for (let i = 0; i < addCarrito.length; i++) {
    compras = compras.concat(`    - ${addCarrito[i].titulo}<br>`); //el espacio que hay en ese string es para que quede la identación en el alert
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
    parrafoCarrito.innerHTML = (`\n${listarCarrito()} <br> Total a pagar:\n     $${sumarPreciosCarrito()}`);
    contenidoCarrito.appendChild(parrafoCarrito);
}

vaciar.onclick = function(e){
    e.preventDefault();
    addCarrito = [];
    numero.innerHTML = "0";
}

comprar.onclick = function(e){
    e.preventDefault();
    if (addCarrito.length == 0) {
        parrafoCarrito.innerHTML = "QUE QUERES COMPRAR SI NO AGREGASTE NADA MAESTR@";
    } else {
        parrafoCarrito.innerHTML = `${(localStorage.getItem("user"))}, felicidades por tu compra k-po`
}
}


//AJAX - JSON

const URLJSON = "catalogo.json"
let limite = 0;

$('.headCont').append("<button id='botonJson' type='button' class='btn' data-bs-toggle='modal' data-bs-target='#modalCatalogo'>Catalogo</button>");

$("#botonJson").click(() => { 
    $.getJSON(URLJSON, function (respuesta, estado) {
        if(estado === "success" && limite == 0){
          let misDatos = respuesta;
          for (const dato of misDatos) {
        let tituloCatalogo = document.createElement("P");
        tituloCatalogo.style.color = "white";
        tituloCatalogo.innerHTML = dato.titulo;
        divCatalogo.prepend(tituloCatalogo);
        limite++;
          }  
        }
        });
    });