# libritos

<section class="consigna">
<h2>Consigna</h2>

<p>Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. En función del tipo de simulador que hayas elegido deberás:</p>

<ul>
	<li>Crear elementos manipulando el DOM a partir de la información de tus objetos.</li>
	<li>Modificar etiquetas existentes en función del resultado de operaciones</li>

</ul>
</section>
<section class="introduccion">
<h2>Mi trabajo</h2>
<p>Este proyecto, tal como pide la consigna, recupera la entrega anterior y añade elementos al documento a través de la manipulación del DOM. En breve presentaré dónde se encuentran pero no sin antes hacer una breve descripción del proyecto en general.</p>


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

</section class="DOM">
<h3>Manipulación del DOM</h3>
<p>A continuación se mostrarán los principales aspectos de este proyecto que cuentan con la manipulación del DOM que pide la consigna</p>

<ul>
	<li>En <i>index.html</i>, si se escribe "admin" en el input, aparecerá un nuevo input de tipo password.</li>
	<li>Al entrar al documento <i>inicio.html</i> se inicia una función que, mediante un loop, agrega en el documento los objetos contenidos en el array <i>productosActivos</i>, que se encuentra en el archivo <i>creator.js</i>.</li>
	<li>Si se entra a <i>inicio.html</i> en modo admin, la barra de navegación contará con el botón "Agregar Item"</li> 
	<li>Si se entra a <i>inicio.html</i> en modo cliente, la barra de navegación contará con el botón del carrito.</li> 
	<li>Si se entra a <i>inicio.html</i> en modo invitado, la barra de navegación contará con el botón "Registrarse".</li>
	<li>Hay manipulación de etiqueta ya existente en el HTML cada vez que se agrega un item al carrito, puesto a que genera que el número que ya estaba establecido aumente.</li>
	<li>Si se hace click en el boton de carrito se ven listados los items agregados al mismo y el monto total a pagar</li>

</ul>

</section>
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


