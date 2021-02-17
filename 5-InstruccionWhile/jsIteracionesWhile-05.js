//Brutto, Ezequiel Andrés
/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var gender;
	var message;

	gender = prompt("Por favor, indique su sexo \n ingresando f ó m.");

	while(gender != "f" && gender != "m")
	{
		gender = prompt("Por favor, indique su sexo \n ingresando f ó m.");
	}

	if (gender == "f") 
	{
		message = "Usted ha seleccionado FEMENINO.";
	}
	else
	{
		message = "Usted ha seleccionado MASCULINO.";
	}

	document.getElementById('txtIdSexo').value = message;
}//FIN DE LA FUNCIÓN