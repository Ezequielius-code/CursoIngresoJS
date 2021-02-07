function mostrar()
{
	//tomo la edad  
	var age;
	var maritalStatus;

	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	maritalStatus = document.getElementById('estadoCivil').value;

	if (age < 18) 
	{
		if (maritalStatus != 'Soltero') 
		{
			alert("Usted es muy pequeño para NO ser soltero!!!");
		}
	}
}//FIN DE LA FUNCIÓN