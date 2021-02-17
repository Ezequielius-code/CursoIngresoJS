//Brutto, ezequiel Andrés.
function mostrar()
{
	var destination;
	var message;

	destination = document.getElementById('txtIdDestino').value;

	switch(destination)
	{
		case "Bariloche":
		case "Ushuaia": 
		    message = "En este destino, hace FRÍO.";
		    break;
		default:
		    message = "En este destino, hace CALOR.";
		    break;
	}

	alert(message);
}//FIN DE LA FUNCIÓN