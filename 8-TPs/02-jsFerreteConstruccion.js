/*
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var fieldLenght;
	var fieldWidth;
	var perimeter;
	var wireNeeded;
	var message;

	fieldLenght = document.getElementById('txtIdLargo').value;
	fieldLenght = parseInt(fieldLenght);

	fieldWidth = document.getElementById('txtIdAncho').value;
	fieldWidth = parseInt(fieldWidth);

	perimeter = (2 * fieldLenght) + (2 * fieldWidth);

	wireNeeded = perimeter * 3;

	message = "Usted necesita " + wireNeeded + " mts. de alambre.";

	alert(message);
}	

function Circulo () 
{
	var fieldRadius;
	var formula;
	var circumference;
	var wireNeeded;
	var message;

	fieldRadius = document.getElementById('txtIdRadio').value;
	fieldRadius = parseInt(fieldRadius);

	formula = 2 * 3.14;

	circumference = fieldRadius * formula;

	wireNeeded = circumference * 3;

	message = "Usted necesita " + wireNeeded + " mts. de alambre.";

	alert(message);
}

function Materiales () 
{
	var fieldLenght;
	var fieldWidth;
	var area;
	var cement;
	var lime;
	var message;

	fieldLenght = document.getElementById('txtIdLargo').value;
	fieldLenght = parseInt(fieldLenght);

	fieldWidth = document.getElementById('txtIdAncho').value;
	fieldWidth = parseInt(fieldWidth);

	area = fieldLenght * fieldWidth;

	cement = area * 2;

	lime = area * 3;

	message = "Para el contrapiso de su terreno, usted necesita " + cement + " bolsas de cemento y " + lime + " bolsas de cal.";

	alert(message);
}