/* Función para establecer en la barra de navegación la opción escogida */
function selectMenuItem(e) {

  var currentURL = e.href;

  $("#navigation a").each(function(){
    /* Quitar clase selected */
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    }

  });

  if (currentURL !== null) {
    if (currentURL.includes("ordenadores")) {
      $('a[title="Ordenadores"]').addClass('selected');
    }
    else if (currentURL.includes("perifericos")) {
      $('a[title="Periféricos"]').addClass('selected');
    }
    else if (currentURL.includes("ebooks")) {
      $('a[title="E-Books"]').addClass('selected');
    }
    else if (currentURL.includes("smartphones")) {
      $('a[title="Smartphones"]').addClass('selected');
    }
  }
}

/* Función para mostrar la página de detalle de producto */
function openDetailProduct() {

  var str = window.location.pathname;
  var res = str.replace("index.html", "product.html");
  window.location.pathname = res;
}

/* Función para cambiar la imagen del producto */
function changeImage(position) {
  $("#imagen_seleccionada").attr("src", "./images/portatil_acer_" + position + ".png");
}

/* Función para actualizar el precio total del producto en funcion de las unidades escogidas */
function updateTotalPrice() {
  var precioProducto = $("#precio_producto").text().replace(" €", "");
  var unidades = $("#unidades").val();
  var total = precioProducto * unidades;
  $("#precio_total").text(total + " €");
  /* PayPal form */
  $('input[name="amount"]').attr("value", total);
}