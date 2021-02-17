/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
//Brutto, Ezequiel Andrés
function mostrar()
{
	var counter;
	var answer;
	var addPositives;
	var multiplyNegatives;
	var number;

	counter = 0;
	addPositives = 0;
	multiplyNegatives = 1;
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
	    
	    if(number < 0)
	    {
	    	multiplyNegatives = multiplyNegatives * number;
	    }
		else
		{
			addPositives = addPositives + number;
		}
		
		answer = prompt("¿Desea ingresar más valores? \n Ingrese 'si' para continuar; 'no' para finalizar.");
	}
    
    document.getElementById('txtIdSuma').value = addPositives;
	document.getElementById('txtIdProducto').value = multiplyNegatives;
}//FIN DE LA FUNCIÓN