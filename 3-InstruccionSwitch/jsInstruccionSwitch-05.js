//Brutto, Ezequiel Andrés
function mostrar()
{
	//tomo la hora
	var hour;
	var message;

	hour = document.getElementById('txtIdHora').value;
	hour = parseInt(hour);

	switch (hour)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		    message = "Es de mañana.";
		    break;
        default:
             message = "No es de mañana.";
             break;
	}

	alert(message);
}//FIN DE LA FUNCIÓN