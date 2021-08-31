# libritos

<section class="consigna">
<h2>Tercer entrega Proyecto Final</h2>

<p>Se corrigen algunos aspectos mencionados en la entrega anterior, tales como agregar item sin elementos en modo admin, se agrega botón catalogo a modo de prueba y para cumplir con el desafío de la clase 14 (este se mejorará para la entrega final del proyecto)</p>

<h2>Cosas pendientes de agregar para la entrega final del proyecto</h2>
<ul>
<li>Slide en pantalla principal</li>
<li>Mejorar la experiencia de usuario (vamos a desechar index.html y trabajar el login solo en la página principal</li>
<li>Filtros de busqueda</li>
<li>Conslutas de información por producto</li>
</ul>

<h1>INSTRUCCIONES DE USO ABAJO DE TODO (invito a que prueben la función agregar items en modo admin)</h1>

</section>


<section class="trabajo">
	<h3>Visión general del proyecto</h3>
	<p>Este proyecto simula ser una librería virtual que es capaz de distinguir tres tipos de usuarios que cuentan con distintos privilegios:</p>
	<ol>
		<li>Admin: puede agregar nuevos productos al sitio. Para ello cuenta con el botón "Agregar item" en la barra de navegación.</li>
		<li>Cliente: puede agregar artículos al carrito y luego visualizarlos con el botón que aparece en la barra de navegación.</li>
		<li>Invitado: solamente puede ver los productos.</li>
</ol>

</section>

<section class="AJAX">
	<h3>AJAX con jQuery</h3>
	<p>Este ejercicio se ve aplicado en los documentos creator.js y catalogo.json.</p>
	<p>Mediante AJAX se consulta el archivo catalogo.json a traves de el botón "catalogo" desplegando un modal con los titulos disponibles en el sitio.</p>
	<h2>Aclaración</h2>
	<p>Para la entrega final del proyecto esto se va a trabajar de manera mas profunda, de momento solo se agrego la funcionalidad para cumplir con el objetivo del desafio planteado en la clase 14</p>
</section>

<section class="selectores_eventos">
	<h3>Selectoes y eventos con jQuery</h3>
	<p>Se recure a jQuery para:</p>
	<p>Para visualizar el "BOTON SECRETO" se debe entrar al modo cliente completando el registro</p>
		<ul>
			<li>Se crean elementos en el DOM tales como el logo de la página, la imagen dentro de "Acerca de" y el BOTON SECRETO</li>
			<li>Se le asignan escuchadores de eventos a dichos elementos y sus respuestas correspondientes</li>
		</ul>
</section>

</section class="DOM">
	<h3>Manipulación del DOM</h3>
	<p>A continuación se mostrarán los principales aspectos de este proyecto que cuentan con la manipulación del DOM. Cabe aclarar, que estos son solo algunos, en realidad hay muchos más.</p>

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

</section class="Eventos">
<h3>Incorporación de eventos</h3>

<ul>
	<li>Se recurre a varios metodos presentados en clase, tan solo en el archivo <i>ecommerce.js</i> ya se pueden encontrar addEventListener, eventos de teclado y eventos del mouse para designar ciertos comportamientos en el login en el caso de que el usuario clickee o en su defecto utilice la tecla "ENTER" para confirmar los datos brindados </li>
</ul>

</section>

<section>
	<h3>Novedades</h3>
	<ul>
		<li>Se reemplazaron todos los alerts y prompts por manipulación de DOM</li>
		<li>Se creó la opciónde eliminar items agregados al carrito.</li>
		<li>Se agregó botón to top para volver a la parte superior del sitio</li>
		<li>Se emprolijaron ciertas características y elementos en el html</li>
	</ul>
</section>


<section class="extra">
	<h3>Datos de interés</h3>
	<ul>
		<li>Para almacenar el nombre de usuario y acceder al mismo en los dos documentos html se recurre al localStorage</li>
		<li>EL archivo <i>inicio.html</i> es un fork propio de esta <a href="https://startbootstrap.com/template/shop-homepage">plantilla bootstrap</a>.
</section>

<section id="instrucciones" class="instrucciones">
<h2>Instrucciones de uso</h2>
<p>A continuación se detallará de qué manera poder acceder al sitio en cada uno de los modos de usuario:</p>
<ol><li>Modo admin: El usuario deberá loguearse en index.html con el nombre de usuario "admin" y la contraseña "123"</li>
	<h3>Como agregar un nuevo producto</h3>
	<p>Para agregar un nuevo producto (función especial del modo admin) simplemente se debe hacer click en el boton "Agregar item" lo cual desplegará tres imputs, nombre, precio, url de imagen, una vez completados estos campos con la información deseada, apretar el botón "Agregar", cabe destacar que cualquier url que se utilice va a funcionar de manera correcta en este proyecto.</p>
	<li>Modo invitado: El usuario deberá loguearse con cualquier nombre de usuario que no sea "admin"</li>
	<li>Modo cliente: El usuario deberá loguearse como invitado y luego registrarse.</li>
</section>


