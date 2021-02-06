/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var price;
	var rebate;
	var newPrice;

	price = document.getElementById('txtIdImporte').value;

	price = parseInt(price);

	rebate = price * 25 / 100;

	newPrice = price - rebate;

	document.getElementById('txtIdResultado').value = newPrice;
}

    