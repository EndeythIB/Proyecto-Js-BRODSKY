# libritos

<section class="consigna">
<h2>Consigna</h2>

<p>Asociar eventos que buscamos controlar sobre los elementos de la interfaz de nuestro simulador, interactuar entre los elementos HTML y JS:</p>

<ul>
	<li>Capturar datos y agregar los elementos al DOM mediante JS.</li>
</ul>
</section>
<section class="introduccion">
<h2>Mi trabajo</h2>
<p>Este proyecto, tal como pide la consigna, recupera la entrega anterior y hace uso de diversos eventos y sus distintos metoso. En breve presentaré dónde se encuentran pero no sin antes hacer una breve descripción del proyecto en general.</p>


</section>

<section class="trabajo">
	<h3>Visión general del proyecto</h3>
	<p>Esta entrega simula ser una librería virtual que es capaz de distinguir tres tipos de usuarios que cuentan con distintos privilegios:</p>
	<ol>
		<li>Admin: puede agregar nuevos productos al sitio. Para ello cuenta con el botón "Agregar item" en la barra de navegación.</li>
		<li>Cliente: puede agregar artículos al carrito y luego visualizarlos con el botón que aparece en la barra de navegación.</li>
		<li>Invitado: solamente puede ver los productos.</li>
</ol>

</section>

</section>

</section class="Eventos">
<h3>Incorporación de eventos</h3>

<ul>
	<li>Se recurre a varios metodos presentados en clase, solo en el archivo <i>ecommerce.js</i> se puede encontrar addEventListener, eventos de teclado y eventos del mouse solo para designar cierto comportamiento en el login en el caso de que el usuario clickee o en su defecto utilice la tecla "ENTER" para confirmar los datos brindados </li>
</ul>

</section>

</section class="DOM">
<h3>Manipulación del DOM</h3>
<p>A continuación se mostrarán los principales aspectos de este proyecto que cuentan con la manipulación del DOM</p>

<ul>
	<li>En <i>index.html</i>, si se escribe "admin" en el input, aparecerá un nuevo input de tipo password.</li>
	<li>Al entrar al documento <i>inicio.html</i> se inicia una función que, mediante un loop, agrega en el documento los objetos contenidos en el array <i>productosActivos</i>, que se encuentra en el archivo <i>creator.js</i>.</li>
	<li>Si se entra a <i>inicio.html</i> en modo admin, la barra de navegación contará con el botón "Agregar Item"</li> 
	<li>Si se entra a <i>inicio.html</i> en modo cliente, la barra de navegación contará con el botón del carrito.</li> 
	<li>Si se entra a <i>inicio.html</i> en modo invitado, la barra de navegación contará con el botón "Registrarse".</li>
	<li>Hay manipulación de etiqueta ya existente en el HTML cada vez que se agrega un item al carrito, puesto a que genera que el número que ya estaba establecido aumente.</li>
	<li>Si se hace click en el boton de carrito se ven listados los items agregados al mismo y el monto total a pagar</li>

</ul>


<section class="extra">
	<h3>Datos de interés</h3>
	<ul>
		<li>Para almacenar el nombre de usuario y acceder al mismo en los dos documentos html se recurre al localStorage</li>
		<li>EL archivo <i>inicio.html</i> es un fork propio de esta <a href="https://startbootstrap.com/template/shop-homepage">plantilla bootstrap</a>.
</section>
<section class="instrucciones">
<h2>Instrucciones de uso</h2>
<p>A continuación se detallará de qué manera poder acceder al sitio en cada uno de los modos de usuario:</p>
<ol><li>Modo admin: El usuario deberá loguearse en index.html con el nombre de usuario "admin" y la contraseña "123"</li>
	<li>Modo invitado: El usuario deberá loguearse con cualquier nombre de usuario que no sea "admin"</li>
	<li>Modo cliente: El usuario deberá loguearse como invitado y luego registrarse.</li>
</section>


