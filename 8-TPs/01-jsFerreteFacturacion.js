/*
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var priceOne;
	var priceTwo;
	var priceThree;
	var addition;
	var message;

	priceOne = document.getElementById('txtIdPrecioUno').value;
	priceTwo = document.getElementById('txtIdPrecioDos').value;
	priceThree = document.getElementById('txtIdPrecioTres').value;

	priceOne = parseInt(priceOne);
	priceTwo = parseInt(priceTwo);
	priceThree = parseInt(priceThree);

	addition = priceOne + priceTwo + priceThree;

	message = "La suma del valor de los productos es: $" + addition + ".-";

	alert(message);
}
function Promedio () 
{
	var priceOne;
	var priceTwo;
	var priceThree;
	var addition;
	var average;
	var message;

	priceOne = document.getElementById('txtIdPrecioUno').value;
	priceTwo = document.getElementById('txtIdPrecioDos').value;
	priceThree = document.getElementById('txtIdPrecioTres').value;

	priceOne = parseInt(priceOne);
	priceTwo = parseInt(priceTwo);
	priceThree = parseInt(priceThree);

	addition = priceOne + priceTwo + priceThree;

	average = addition / 3;

	message = "El promedio de valor por cada producto es de: $" + average + ".-";

	alert(message);
}
function PrecioFinal () 
{
	var priceOne;
	var priceTwo;
	var priceThree;
	var addition;
	var iva;
	var consumerPrice;
	var message;

	priceOne = document.getElementById('txtIdPrecioUno').value;
	priceTwo = document.getElementById('txtIdPrecioDos').value;
	priceThree = document.getElementById('txtIdPrecioTres').value;

	priceOne = parseInt(priceOne);
	priceTwo = parseInt(priceTwo);
	priceThree = parseInt(priceThree);

	addition = priceOne + priceTwo + priceThree;

	iva = 121 / 100;

	consumerPrice = addition * iva;

	message = "El precio final para el consumidor es de $" + consumerPrice + ".-";

	alert(message);
}