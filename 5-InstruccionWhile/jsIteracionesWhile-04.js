//Brutto, Ezequiel Andrés
/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var number;
	var message;
	
	number = prompt("Por favor, \n Ingrese un número entre 0 y 9.");
	number = parseInt(number);

	while(number < 0 || number >9)
	{
		number = prompt("Por favor, \n Ingrese un número entre 0 y 9.");
	}

	message = "Usted ha seleccionado el número " + number + ".";

	document.getElementById('txtIdNumero').value = message;
}//FIN DE LA FUNCIÓN