/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
//Brutto, Ezequiel Andrés
function mostrar()
{	// declarar variables
	var firstNumberCheckpoint;
	var enteredNumber;
	var maxNumber;
	var minNumber;
	var answer;
	//iniciar variables
	firstNumberCheckpoint = 0;
	answer = 's';
	
	while(answer == "s")
	{
		enteredNumber = prompt("Por favor, ingrese un número:");
		enteredNumber = parseInt(enteredNumber);

		while(isNaN(enteredNumber) == true)
		{
			enteredNumber = prompt("Por favor, ingrese un número:");
			enteredNumber = parseInt(enteredNumber);
		}

		if (firstNumberCheckpoint == 0) 
		{
			minNumber = enteredNumber;
			maxNumber = enteredNumber;
			firstNumberCheckpoint = 1;
		}
		else 
		{
			if (enteredNumber < minNumber) 
			{
				minNumber = enteredNumber;
			}
			if (enteredNumber > maxNumber) 
			{
				maxNumber = enteredNumber;
			}
		}
		answer=prompt("¿Desea ingresar más valores? \n Ingrese (s)i para continuar; (n)o para finalizar.");
	}
	
	document.getElementById('txtIdMaximo').value = maxNumber;
	document.getElementById('txtIdMinimo').value = minNumber;
}//FIN DE LA FUNCIÓN