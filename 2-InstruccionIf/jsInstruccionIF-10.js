function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var note;

	note = Math.floor(Math.random() * 10) + 1;

	if (note < 4) 
	{
		alert("Vamos, la próxima se puede.");
	}

	else 
	{
		if (note > 8) 
		{
			alert("EXCELENTE.");
		}
		else 
		{
			alert("APROBÓ.");
		}
	}

	console.log(note);
}//FIN DE LA FUNCIÓN


