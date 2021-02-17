//Brutto, Ezequiel Andrés.
/*function mostrar()
{
	var season;
	var destination;
	var baseFee;
	var percentage;
	var finalPrice;
	var message;

	season = document.getElementById('txtIdEstacion').value;
	destination = document.getElementById('txtIdDestino').value;
	baseFee = 15000;

	switch(season)
	{
		case "Invierno":
		    switch(destination)
		    {
		    	case "Bariloche":
		    	    percentage = 20;
		    	    break;
		    	case "Mar del plata":
		    	    percentage = -20;
		    	    break;
		    	default:
		    	    percentage = -10;
		    	    break;
		    }
		break;    
		case "Verano": 
		    switch(destination)
		    {
		    	case "Bariloche":
		    	    percentage = -20;
		    	    break;
		    	case "Mar del plata":
		    	    percentage = 20;
		    	    break;
		    	default:
		    	    percentage = 10;
		    	    break;
		    }  
		break;
		default:
		    switch(destination)
		    {
		    	case "Cordoba":
		    	    percentage = 0;
		    	    break;
		    	default:
		    	    percentage = 10;
		    	    break;
		    }
		break;
	}

	finalPrice = baseFee + (baseFee * percentage / 100);

	message = "El precio final de su viaje es de $ " + finalPrice + ".-";

	alert(message);
}//FIN DE LA FUNCIÓN*/

//Brutto, Ezequiel Andrés
/*3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var season;
	var destination;
	var baseFee;
	var percentage;
	var finalPrice;
	var message;

	season = document.getElementById('txtIdEstacion').value;
	destination = document.getElementById('txtIdDestino').value;
	baseFee = 15000;

	if (season == "Invierno") 
	{
		if (destination == "Bariloche") 
		{
			percentage = 20;
		}
		else 
		{
			if (destination == "Mar del plata") 
			{
				percentage = -20;
			}
			else
			{
				percentage = -10;
			}
		}
	}
	else
	{
		if (season == "Verano") 
	    {
		    if (destination == "Mar del plata") 
		    {
			    percentage = 20;
		    }
		    else 
		    {
			    if (destination == "Bariloche") 
			    {
				    percentage = -20;
			    }
			    else
			    {
				    percentage = 10;
			    }
		    }
	    }
	    else
	    {
	    	if (season == "Otoño" || season == "Primavera") 
	        {
		        if (destination == "Cordoba") 
		        {
			        percentage = 0;
		        }
		        else 
		        {
			       percentage = 10;
		        }
	        }
	    }
	}


	finalPrice = baseFee + (baseFee * percentage / 100);

	message = "El precio final de su viaje es de $ " + finalPrice + ".-";

	alert(message);
}