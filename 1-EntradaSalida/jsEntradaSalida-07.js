/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	var numberOne;
	var numberTwo;
	var result;
	var message;

	numberOne = document.getElementById("txtIdNumeroUno").value;
	numberTwo = document.getElementById("txtIdNumeroDos").value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	result = numberOne + numberTwo;

	message = "El resultado de la suma es " + result;

	alert(message);

	document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

function restar()
{
	var numberOne;
	var numberTwo;
	var result;
	var message;

	numberOne = document.getElementById("txtIdNumeroUno").value;
	numberTwo = document.getElementById("txtIdNumeroDos").value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	result = numberOne - numberTwo;

	message = "El resultado de la resta es " + result;

	alert(message);

	document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

function multiplicar()
{ 
	var numberOne;
	var numberTwo;
	var result;
	var message;

	numberOne = document.getElementById("txtIdNumeroUno").value;
	numberTwo = document.getElementById("txtIdNumeroDos").value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	result = numberOne * numberTwo;

	message = "El resultado de la multiplicación es " + result;

	alert(message);
	
	document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

function dividir()
{	
	var numberOne;
	var numberTwo;
	var result;
	var message;

	numberOne = document.getElementById("txtIdNumeroUno").value;
	numberTwo = document.getElementById("txtIdNumeroDos").value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	result = numberOne / numberTwo;

	message = "El resultado de la división es " + result;

	alert(message);

	document.getElementById("txtIdNumeroUno").value = "";
    document.getElementById("txtIdNumeroDos").value = "";
}

