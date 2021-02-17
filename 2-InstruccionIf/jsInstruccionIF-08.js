function mostrar()
{
	//tomo la edad  
	var age;
	var maritalStatus;

	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	maritalStatus = document.getElementById('estadoCivil').value;

	if (age > 17) 
	{
		if (maritalStatus == "Soltero") 
		{
			alert("Usted es soltero y no es menor.");
		}
	}
}//FIN DE LA FUNCIÓN