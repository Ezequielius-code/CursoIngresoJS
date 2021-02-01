/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	let number1;
	let number2;
	let result;

	number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	result = number1 + number2;

	alert("El resultado de la suma es " + result);

	document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

function restar()
{
	let number1;
	let number2;
	let result;

	number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	result = number1 - number2;

	alert("El resultado de la resta es " + result);

	document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

function multiplicar()
{ 
	let number1;
	let number2;
	let result;

	number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	result = number1 * number2;

	alert("El resultado de la multiplicación es " + result);
	
	document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

function dividir()
{	
	let number1;
	let number2;
	let result;

	number1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	number2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	result = number1 / number2;

	alert("El resultado de la división es " + result);

	document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

