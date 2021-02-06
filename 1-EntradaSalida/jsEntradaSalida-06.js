/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numberOne;
	var numberTwo;
	var result;
	var message;

	numberOne = document.getElementById('txtIdNumeroUno').value;
	numberTwo = document.getElementById('txtIdNumeroDos').value;

	numberOne = parseInt(numberOne);
	numberTwo = parseInt(numberTwo);

	result = numberOne + numberTwo;

	message = "El resultado de la suma es: " + result;

	alert(message);

	document.getElementById('txtIdNumeroUno').value = "";
	document.getElementById('txtIdNumeroDos').value = "";
}

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

/*function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos

	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;
	//ingreso
	numeroUno=document.getElementById('txtIdNumeroUno').value;
	numeroDos=document.getElementById('txtIdNumeroDos').value;

	numeroDos=parseInt(numeroDos);
	numeroUno = parseInt(numeroUno);
	//fin ingreso
	//inicio operar
	resultado=numeroDos+numeroUno;
	mensaje="la suma es : "+resultado;

	//mostrar
	//alert("la suma es : "+(parseInt(document.getElementById('txtIdNumeroUno').value)+parseInt(document.getElementById('txtIdNumeroDos').value)));
	alert(mensaje);

}*/


