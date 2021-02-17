//Brutto, Ezequiel Andrés.
function mostrar()
{
	//tomo el mes
	var month;
	var message;

	month = document.getElementById('txtIdMes').value;

	switch (month)
	{
		case "Febrero":
		    message = "Este mes tiene 28 días";
		    break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		    message = "Este mes tiene 30 días";
		    break;
		default:
		    message = "Este mes tiene 31 días";
		    break;
	}

	alert(message);
}//FIN DE LA FUNCIÓN