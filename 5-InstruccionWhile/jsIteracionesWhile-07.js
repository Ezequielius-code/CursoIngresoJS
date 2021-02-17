/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
//Brutto, Ezequiel Andrés
function mostrar()
{
	var number;
	var counter;
	var accumulator;
	var answer;
	var average;

	counter = 0;
	accumulator = 0;
	answer = 'si';

	while(answer == 'si')
	{
		counter = counter + 1;
        number = prompt("Por favor, ingrese el valor #" + counter);
		number = parseInt(number);
		while(isNaN(number) == true)
		{
			number = prompt("ERROR, ingrese nuevamente el valor #" + counter);
		    number = parseInt(number);
		}
		accumulator = accumulator + number;
		answer = prompt("¿Desea ingresar más valores? \n Ingrese 'si' para continuar; 'no' para finalizar.");
	}

    average = accumulator/counter;

	document.getElementById('txtIdSuma').value = accumulator;
	document.getElementById('txtIdPromedio').value = average;
}//FIN DE LA FUNCIÓN