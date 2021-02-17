function mostrar()
{
	//Brutto, Ezequiel Andrés.
	//Genero el número RANDOM entre 1 y 10 
	var note;
	var message;

	note = Math.floor(Math.random() * 10) + 1;

	if (note < 4) 
	{
		message = "Su nota es: " + note + ". Vamos, la próxima se puede.";
	}

	else 
	{
		if (note > 8) 
		{
			message = "EXCELENTE. Su nota es: " + note;
		}
		else 
		{
			message = "APROBÓ. Su nota es : " + note;
		}
	}

	alert(message);

	console.log(note);
}//FIN DE LA FUNCIÓN


