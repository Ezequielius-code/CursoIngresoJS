function mostrar()
{
	//tomo la edad  
	var age;

	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	if (age < 13) 
	{
		alert("Usted no es adolescente.");
	}
	if (age > 17) 
	{
		alert("Usted no es adolescente.");
	}

	document.getElementById('txtIdEdad').value = "";
}//FIN DE LA FUNCIÓN