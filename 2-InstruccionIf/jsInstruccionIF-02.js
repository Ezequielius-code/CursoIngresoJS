function mostrar()
{
	//tomo la edad  
	var age;

	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	if (age > 17)
	{
		alert("Usted es mayor de edad");
	}
}//FIN DE LA FUNCIÓN