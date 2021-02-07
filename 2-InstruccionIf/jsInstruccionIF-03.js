function mostrar()
{
	//tomo la edad  
	let age;

	age = document.getElementById('txtIdEdad').value;
	age = parseInt(age);

	/*if (age < 18) 
	{
		alert("Usted es menor de edad.");
	}
	if (age > 17) 
	{
		alert("Usted es mayor de edad.");
	}*/


	if (age <18) 
	{
		alert("Usted es menor de edad.");
	}
	else
	{
		alert("Usted es mayor de edad.");
	}
}//FIN DE LA FUNCIÓN