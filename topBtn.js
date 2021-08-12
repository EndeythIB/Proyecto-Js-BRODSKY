const topBtn = document.getElementById("topBtn");

// Cuando se baja 20px desde la parte superior de la página se muestra el boton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

// Cuando el usuario hace click en el botón vuelve a la parte superior de la página
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}