//Brutto, Ezequiel Andrés.
function mostrar()
{
	var destination;
	var message;

	destination = document.getElementById('txtIdDestino').value;

	switch (destination)
	{
		case "Bariloche":
		    message = "Este detino se encuentra al oeste de Argentina.";
		    break;
		case "Cataratas":
		    message = "Este detino se encuentra al norte de Argentina.";
		    break;
		case "Mar del plata":
		    message = "Este detino se encuentra al este de Argentina.";
		    break;
		default:
		    message = "Este detino se encuentra al sur de Argentina.";
		    break;
	}

	alert(message);
}//FIN DE LA FUNCIÓN