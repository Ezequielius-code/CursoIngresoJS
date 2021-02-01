/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

