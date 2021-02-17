//Brutto, Ezequiel Andrés.
function mostrar()
{
	var season;
	var destination;
	var message;

	season = document.getElementById('txtIdEstacion').value;
	destination = document.getElementById('txtIdDestino').value;

	switch(season)
	{
		case "Invierno":
		    switch(destination)
		    {
		    	case "Bariloche":
		    	    message = "Se viaja.";
		    	    break;
		    	default:
		    	    message = "No se viaja.";
		    	    break;
		    }
		break;
		case "Verano":
		    switch(destination)
		    {
		    	case "Cataratas":
		    	case "Mar del plata":
		    	    message = "Se viaja.";
		    	    break;
		    	default:
		    	    message = "No se viaja.";
		    	    break;
		    }
		break;
		case "Otoño":
		    switch(destination)
		    {
		    	default:
		    	    message = "Se viaja.";
		    	    break;
		    }
		break;
		default:
		    switch(destination)
		    {
		    	case "Bariloche":
		    	    message = "No se viaja.";
		    	    break;
		    	default:
		    	    message = "Se viaja.";
		    	    break;   
		    }
		break;    
	}

	alert(message);
}//FIN DE LA FUNCIÓN