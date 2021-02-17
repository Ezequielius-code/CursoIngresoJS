// Brutto, Ezequiel Andrés
function mostrar()
{
	//tomo el mes
	var month;
	var message;

	month = document.getElementById('txtIdMes').value;

	switch (month)
	{
		case "Febrero":
		    message = "Este mes no tiene más de 29 días.";
		    break;
		default:
		    message = "Este mes tiene 30 o más días";
		    break;
	}
	
	alert(message);
}//FIN DE LA FUNCIÓN