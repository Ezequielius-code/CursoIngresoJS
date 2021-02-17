//Brutto, Ezequiel Andrés
function mostrar()
{
	//tomo el mes
	var month;
	var message;

	month = document.getElementById('txtIdMes').value;

	switch (month)
	{
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		    message = "Ya pasamos el frío, ahora calor!!!.";
		    break;
		case "Julio":
		case "Agosto":
		    message = "Abrigate que hace frío.";
		    break;
		default:
		    message = "Falta para el invierno.";
		    break;
    }

	alert(message);
}//FIN DE LA FUNCIÓN