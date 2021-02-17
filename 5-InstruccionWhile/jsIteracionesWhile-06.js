//Brutto, Ezequiel Andrés
function mostrar()
{
	var counter;
	var accumulator;
	var number;
	var average;

	counter = 0;
	accumulator = 0;
	
	while(counter < 5)
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
	}
	
	average = accumulator / counter;
	
	document.getElementById('txtIdSuma').value = accumulator;
	document.getElementById('txtIdPromedio').value = average;
}//FIN DE LA FUNCIÓN