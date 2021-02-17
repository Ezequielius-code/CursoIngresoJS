/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
//Brutto, Ezequiel Andrés.
function mostrar()
{
	var password;

	password = prompt("Por favor, ingrese su clave:");

	while(password != "utn750")
	{
	    password = prompt("FATAL ERROR!!! \n Ingrese nuevamente su clave:");
	}

	if (password == "utn750") 
	{
		alert("ACCESO CONCEDIDO.");
	}
}//FIN DE LA FUNCIÓN
