/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
//Brutto Ezequiel Andrés
function mostrar()
{
	//declarar contadores y variables 
	var answer;
	var enteredNumber;
	var positives;
	var negatives;
	var addNegatives;
	var addPositives;
	var negativeCounter;
	var positiveCounter;
	var zeroCounter;
	var evenCounter;
	var negativeAverage;
	var positiveAverage;
	var difference;

	addNegatives = 0;
	addPositives = 0;
	negativeCounter = 0;
	positiveCounter = 0;
	zeroCounter = 0;
	evenCounter = 0;

	answer = "s";

	while(answer == "s")
	{
		enteredNumber = prompt("Por favor, ingrese un número:");
		enteredNumber = parseInt(enteredNumber);

		while(isNaN(enteredNumber) == true)
		{
			enteredNumber = prompt("Por favor, ingrese un número:");
		    enteredNumber = parseInt(enteredNumber);
		}

		if (enteredNumber < 0) 
		{
			negatives = enteredNumber;
			addNegatives = addNegatives + negatives;
			negativeCounter = negativeCounter + 1;
			negativeAverage = addNegatives / negativeCounter;
		}
		else
		{
			if (enteredNumber == 0) 
			{
				zeroCounter = zeroCounter + 1;
			}
			else
			{
				positives = enteredNumber;
			    addPositives = addPositives + positives;
			    positiveCounter = positiveCounter + 1;
			    positiveAverage = addPositives / positiveCounter;
			}
		}

		if(enteredNumber % 2 == 0)
		{
			evenCounter = evenCounter + 1;
		}

		answer=prompt("¿Desea ingresar más valores? \n Ingrese (s)i para continuar; (n)o para finalizar.");
	}//fin del while

	difference = addPositives + addNegatives;

	document.write("La suma de números negativos es: " + addNegatives);
	document.write("<br>" + "La suma de números positivos es: " + addPositives);
	document.write("<br>" + "La cantidad de negativos es de " + negativeCounter + " números.");
	document.write("<br>" + "La cantidad de positivos es de " + positiveCounter + " números.");
	document.write("<br>" + "La cantidad de ceros ingresados es de: " + zeroCounter);
	document.write("<br>" + "La cantidad de números pares ingresados es de: " + evenCounter);
	document.write("<br>" + "El promedio de la suma de los números negativos es: " + negativeAverage);
	document.write("<br>" + "El promedio de la suma de los números positivos es: " + positiveAverage);
	document.write("<br>" + "La diferencia entre positivos y negativos es de: " + difference);
}//FIN DE LA FUNCIÓN